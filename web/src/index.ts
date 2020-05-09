import { User } from './models/User';

const user = new User({ name: 'New ', age: 90 });

// user.set({ name: 'New CJS', age: 9999 });

user.save();

// user.fetch();
