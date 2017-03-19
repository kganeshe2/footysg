import './home.html';

import '/imports/api/users.js';

Template.homeHeader.onCreated(function(){
  this.subscribe("userDetails");
});