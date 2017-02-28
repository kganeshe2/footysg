// Hamburger-Arrow Navigation Bar
Template.navBar.events({

	'click .glyphicon-menu-left': function(){
		history.back();
	},
	'click .glyphicon-menu-hamburger': function(){
		Session.set('menuState', 'menu-open');
		Session.set('homeBodyState', 'home-body-pushed');
		console.log("open sesame");
	},
	'click .closebtn': function(){
		Session.set('menuState', 'menu-closed');
		Session.set('homeBodyState', 'home-body-unpushed');
	    console.log("close sesame");
	},
	'click .log-out': function(){
        event.preventDefault();
        Meteor.logout();
        Router.go('/');
    }	
});

Template.navBar.rendered = function() {
    if(!this._rendered) 
    {
      this._rendered = true;
      Session.set('menuState', 'menu-closed');
	  Session.set('homeBodyState', 'home-body-unpushed'); 
    }	
}

Template.navBar.helpers({
  menuState: function getMenuState() {
    return Session.get('menuState');
  },
  homeBodyState: function getHomeBodyState() {
    return Session.get('homeBodyState');
  },
});
