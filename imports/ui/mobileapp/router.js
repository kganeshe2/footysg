import { Regions, FutsalParks, Pitches } from '/imports/api/pitches.js';

import './amazing-time-picker.js';
import './home.js';
import './login.js';
import './nav-bar.js';
import './pitch-info.js';
import './pitch-list.js';

import './menuitems/payment.js';
import './menuitems/account.js';
import './menuitems/games.js';


Router.route('/payment', {
  template:'payment',
});
Router.route('/account', {
  template:'account',
});
Router.route('/games', {
  template:'games',
});
Router.route('/login', {
  template:'login',
});

Router.route('/home', function routeHome() {
  this.subscribe('regions', this.params.region).wait();
  if(this.ready()){
    this.layout('navBar', {
      data: {
        currentPath: Regions.find(),
        home: true,
        navbarhome: 'navbar-fixed-top navbar-home',
      }
    });
    this.render('home');
  } else {
    console.log('retrieving regions ...');
  }
});

Router.route('/pitch-list/:region', function routeList() {
  var pitchList = [];
  this.subscribe('parksInRegion', this.params.region).wait();
  if (this.ready()) {
    const fusalParks = FutsalParks.find();
    fusalParks.forEach(function(park) {
      if(park.pitches){
        park.pitches.forEach(function(pitch){
          pitch['parkName'] = park._id;
          pitchList.push(pitch);
        });
      }
    });
    this.render('pitchList', {
      // set data context of current URL
      data: {
         pitchList: pitchList,
      }
    });
    this.layout('navBar', {
      data: {
        currentPath: this.params.region,
      }
    });
  } else {
    console.log('retrieving regions ...');
  }
  // console.log(pitchList);
});

Router.route('/pitch-info/:parkName/:pitchName', function routePitch() {
  this.subscribe('parksByName', this.params.parkName).wait();
  const pitchName = this.params.pitchName;

  if (this.ready()) {
    const a = FutsalParks.find({"pitches.name": pitchName});
    console.log(a.fetch());
    this.layout('navBar', {
      data: {
        currentPath: this.params.pitchName,
        pitch: FutsalParks.find({"pitches.name": pitchName}).fetch()[0],
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
