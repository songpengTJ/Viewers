import { Template } from 'meteor/templating';
import SimpleSchema from 'simpl-schema';

Template.dialogLogin.onCreated(() => {
    const instance = Template.instance();

    instance.schema = new SimpleSchema({
        username: {
            type: String,
            label: 'Username'
        },
        password: {
            type: String,
            label: 'Password'
        }
    });
});
