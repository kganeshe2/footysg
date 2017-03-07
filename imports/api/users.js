import { Mongo } from 'meteor/mongo';

if (Meteor.isServer) {
  Meteor.publish("userDetails", function publishUserDetails() {
    return Meteor.users.find({_id: this.userId},{fields: {'services': 1 }});
  });
}
