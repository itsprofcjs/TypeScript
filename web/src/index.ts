import { User } from './models/User';

const collection = User.buildUserCollection();

collection.on('change', () => {
    console.log('Collection changed', collection);
});

collection.fetch();
