import { Mongo } from 'meteor/mongo';

if (Meteor.isServer) {
 
  Accounts.onCreateUser(function(options, user) {
  options.profile.picture = "http://graph.facebook.com/" + user.services.facebook.id + "/picture/?type=large";
  options.profile.phoneNumber = null;
  options.profile.username = null;
  user.profile = options.profile;
  return user;
});


  Meteor.publish("userDetails", function publishUserDetails() {
 //   return Meteor.users.find({_id: this.userId},{fields: {'services': 1 }});
    return Meteor.users.find({_id: this.userId},{fields: {'services': 1,'profile': 1 ,'createdAt':1}});
  });


}
