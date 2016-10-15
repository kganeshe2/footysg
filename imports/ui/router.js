//import { Template } from 'meteor/templating' 
import { Pitches } from '../api/pitches.js';

Router.route('/',{
	template:'login',
});
Router.route('/home');


Router.route('/pitch-list/:region', {
	// The name of the route.
  name: 'pitchList',
	// Template to be rendered in this URL
	template:'pitchList',
	// Set data context of the template
	data: function() {
		return Pitches.find({region:this.params.region});
		}
});

Router.route('/pitch-info/:_id',{
	template: 'pitchInfo',
	data: function() {
		//console.log(Pitches.find({_id:this.params._id}));
		return Pitches.find({_id:this.params._id});
		}
});

Router.configure({
  layoutTemplate: 'appBody',
});
