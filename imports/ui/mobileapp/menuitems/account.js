import './account.html';
import '/imports/api/users.js';

Template.account.onRendered(function(){
  this.subscribe("userDetails");
  console.log(Meteor.users.findOne());
});