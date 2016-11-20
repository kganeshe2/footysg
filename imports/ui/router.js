//import { Template } from 'meteor/templating' 
import { Pitches } from '../api/pitches.js';

Router.route('/',{
	template:'login',
});
Router.route('/home');
Router.route('/admin');

Router.route('/pitch-list/:region', function() {
	this.render('pitchList',{
		// set data context of current URL
		data:{
			thisRegion: this.params.region, 
			pitchList: Pitches.find({region:this.params.region})
		}
	});
});

Router.route('/pitch-info/:name',{
	template: 'pitchInfo',
	data: function() {
		//console.log(Pitches.find({_id:this.params._id}));
		return Pitches.find({name:this.params.name});
	}
});

 // Router.configure({
 //  layoutTemplate: 'appBody',
 // });

