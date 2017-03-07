import './home.html';

import '/imports/api/users.js';

Template.homeHeader.onRendered(function(){
  this.subscribe("userDetails");
  console.log(Meteor.users.findOne());
});