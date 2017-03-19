import './admin.html';

Template.adminNavBar.events({

});

Template.adminNavBar.helpers({
	'activeClass': function(){
		return "active";
	}
});

Template.adminOverview.helpers({
	'returnPark': function(){
		//return FutsalParks.find({name: "North Futsal Park 1"})
	}
});
