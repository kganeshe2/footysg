import './nav-bar.html';

Template.navbar.events({
	'click .glyphicon-menu-left': function(){
		history.back();
	},
	'click .glyphicon-menu-hamburger': function(){
		Session.set('menuState', 'menu-open');
		Session.set('homeBodyState', 'home-body-pushed');
		Session.set('navBarState', 'nav-bar-hide');
		console.log("open sesame");
	},
	'click .closearea': function(){
		Session.set('menuState', 'menu-closed');
		Session.set('homeBodyState', 'home-body-unpushed');
		Session.set('navBarState', 'nav-bar-unhide');
	    console.log("close sesame");
	},
	'click .home-body-pushed': function(){
		Session.set('menuState', 'menu-closed');
		Session.set('homeBodyState', 'home-body-unpushed');
		Session.set('navBarState', 'nav-bar-unhide');
	    console.log("close sesame");
	}	
});


Template.navbar.helpers({
	menuState: function(){
		return Session.get('menuState')
	},
	homeBodyState: function(){
		return Session.get('homeBodyState')
	},
	navBarState: function(){
		return Session.get('navBarState')
	},
});

