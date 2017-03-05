import './admin.html';
import { Regions } from '/imports/api/mellavin_new_mongo.js';
import { FutsalParks } from '/imports/api/mellavin_new_mongo.js';

Template.adminNavBar.events({

});

Template.adminNavBar.helpers({
	'activeClass': function(){
		return "active";
	}
});

Template.adminOverview.helpers({
	'returnPark': function(){
		return FutsalParks.find({name: "North Futsal Park 1"})
	}
});
