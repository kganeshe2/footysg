import { Pitches } from '/imports/api/pitches.js';

import './amazing-time-picker.js';
import './home.js';
import './login.js';
import './nav-bar.js';
import './pitch-info.js';
import './pitch-list.js';

import './menuitems/payment.js';
import './menuitems/account.js';
import './menuitems/games.js';


Router.route('/payment',{
	template:'payment',
});
Router.route('/account',{
	template:'account',
});
Router.route('/games',{
	template:'games',
});
Router.route('/login',{
	template:'login',
});


Router.route('/home', function(){
	this.layout('navbar', {
		data:{
			currentPath: this.params.region,
			home: true,
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



