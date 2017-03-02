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


Router.route('/home', function routeHome(){
	this.layout('navbar', {
		data:{
			currentPath: this.params.region,
			home: true,
      navbarhome: 'navbar-fixed-top navbar-home',
		}
	});
	this.render('home');
});

Router.route('/pitch-list/:region', function routeList() {
	this.subscribe('pitches', this.params.region);
  this.layout('navbar', {
		data:{
			currentPath: this.params.region,
		}
	});
	this.render('pitchList',{
		// set data context of current URL
		data:{
			thisRegion: this.params.region,
			pitchList: Pitches.find(),
		}
	});
});

Router.route('/pitch-info/:pitchName', function routePitch() {
	this.subscribe('pitch', this.params.pitchName).wait();
  if (this.ready()) {
    this.layout('navbar', {
      data:{
        currentPath: this.params.pitchName,
        pitch: Pitches.find().fetch()[0],
      },
    });
    this.render('pitchInfo');
  } else {
    console.log('retrieving pitch info ...');
  }
});

/*
Router.onBeforeAction(function onBefore() {
  if (!this.ready()) {
    console.log('retrieving data ...');
  } else {
    console.log('next');
    this.next();
  }
});
*/
