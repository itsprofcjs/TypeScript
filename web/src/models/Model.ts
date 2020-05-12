import { AxiosPromise, AxiosResponse } from 'axios';
import { Callback } from './Eventing';

export interface Attributes<T> {
    get<K extends keyof T>(key: K): T[K];
    set(update: T): void;
    getAll(): T;
}

export interface Sync<T> {
    fetch(id: number): AxiosPromise;
    save(data: T): AxiosPromise;
}

export interface Events {
    on(eventName: string, callback: Callback): void;
    trigger(eventName: string): void;
}

export interface HasId {
    id?: number;
}

export class Model<T extends HasId> {
    constructor(private attributes: Attributes<T>, private events: Events, private sync: Sync<T>) {}

    get get() {
        return this.attributes.get;
    }

    set(update: T): void {
        this.attributes.set(update);
        this.events.trigger('change');
    }

    get on() {
        return this.events.on;
    }

    get trigger() {
        return this.events.trigger;
    }

    fetch(): void {
        const id = this.get('id');

        if (typeof id !== 'number') {
            throw new Error('Cannot fetch without an id');
        }

        this.sync.fetch(id).then((response: AxiosResponse): void => {
            this.set(response.data);
        });
    }

    save() {
        this.sync
            .save(this.attributes.getAll())
            .then((response: AxiosResponse): void => {
                this.trigger('save');
            })
            .catch(() => {
                this.trigger('error');
            });
    }
}
