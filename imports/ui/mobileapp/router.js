import { Pitches } from '/imports/api/pitches.js';

import './amazing-time-picker.js';
import './home.js';
import './login.js';
import './nav-bar.js';
import './pitch-info.js';
import './pitch-list.js';


Router.route('/login',{
	template:'login',
});

Router.route('/home', function(){
	this.layout('navbar', {
		data:{
			currentPath: this.params.region,
			home: true,
			navbarhome: 'navbar-home'
		}
	});
	this.render('home');
});

Router.route('/pitch-list/:region', function() {
	this.layout('navbar', {
		data:{
			currentPath: this.params.region,
		}
	});
	this.render('pitchList',{
		// set data context of current URL
		data:{
			thisRegion: this.params.region, 
			pitchList: Pitches.find({region:this.params.region})
		}
	});
});

Router.route('/pitch-info/:pitchName', function() {
	this.layout('navbar', {
		data:{
			currentPath: this.params.pitchName
		}
	});
	this.render('pitchInfo',{
		data: function() {
		  return Pitches.find({name:this.params.pitchName}).fetch()[0];
	  }
	});
});



