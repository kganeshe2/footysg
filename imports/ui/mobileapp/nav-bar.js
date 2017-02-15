import './nav-bar.html';

Template.navbar.events({
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
	}	
});


Template.navbar.helpers({
	menuState: function(){
		return Session.get('menuState')
	},
	homeBodyState: function(){
		return Session.get('homeBodyState')
	}
});

