import { Regions, FutsalParks} from '/imports/api/pitches.js';
import { Games } from '/imports/api/games.js';

import './amazing-time-picker.js';
import './home.js';
import './login.js';
import './nav-bar.js';
import './pitch-info.js';
import './pitch-list.js';
import './../loading.js';
import './park.js';

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
  data: {
        games: Games.find({}, {sort: {date: -1}}),
      },
  subscriptions: function() {
    this.subscribe('gamesByUser', "Mellavin").wait();
  },
  action: function () {
    if (this.ready()) {
      this.render();
    } else {
      this.render('loading');
    }
  },
});

Router.route('/login', {
  template:'login',
});

Router.route('/home', function routeHome() {
  this.subscribe('regions', this.params.region).wait();
  if(this.ready()) {
    this.layout('navBar', {
      data: {
        currentPath: Regions.find(),
        home: true,
        navbarhome: 'navbar-fixed-top navbar-home',
      }
    });
    this.render('home');
  } else {
    this.render('loading');
  }
});

Router.route('/region/:region', function routeList() {
  //var pitchList = [];
  this.subscribe('parksInRegion', this.params.region).wait();
  if (this.ready()) {
    //const fusalParks = FutsalParks.find();
    /*
    fusalParks.forEach(function(park) {
      if(park.pitches){
        park.pitches.forEach(function(pitch){
          pitch['parkName'] = park._id;
          pitchList.push(pitch);
        });
      }
    });*/
  //  var regionName = Regions.find(_id:'this.params.region').find().Region;
    this.render('pitchList', {
      // set data context of current URL
      data: {
         pitchList: FutsalParks.find(),
      }
    });
    this.layout('navBar', {
      data: {
        currentPath: regionName,
      }
    });
  } else {
    this.render('loading');
  }
});

Router.route('/park/:parkName', function routePitch() {
  this.subscribe('parksByName', this.params.parkName).wait();
  if (this.ready()) {
    this.layout('navBar', {
      data: {
        currentPath: this.params.pitchName,
        pitch: FutsalParks.find().fetch()[0],
      },
    });
    this.render('parkDetail');
  } else {
    this.render('loading');
  }
});

Router.route('/booking/:parkName', function routePitch() {
  this.subscribe('parksByName', this.params.parkName).wait();
  if (this.ready()) {
    this.layout('navBar', {
      data: {
        currentPath: this.params.pitchName,
        park: FutsalParks.find().fetch()[0],
      },
    });
    this.render('pitchInfo');
  } else {
    this.render('loading');
  }
});
