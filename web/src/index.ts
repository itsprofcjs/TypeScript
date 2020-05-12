import { User } from './models/User';

const user = User.buildUser({ id: 1 });

user.on('change', () => {
    console.log('User was changed!', user);
});

user.on('save', () => {
    console.log('User was saved!', user);
});

user.fetch();
// user.save();
