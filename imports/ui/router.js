// import { Template } from 'meteor/templating'
import { pitches } from '../api/pitches.js';
import { login } from '../ui/login.js';


Router.route('/', {
  template: 'login',
});

Router.route('/home', function routeHome() {
  this.layout('navBar', {
    data: {
      currentPath: this.params.region,
      home: true,
      navbarhome: 'navbar-fixed-top navbar-home',
    },
  });
  this.render('home');
});

Router.route('/admin/:ownerName', function routeAdmin() {
  this.subscribe('admin', this.params.ownerName);
  this.render('admin', {
    data: {
      owner: pitches.find().fetch()[0],
    },
  });
});

Router.route('/pitch-list/:region', function routeList() {
  this.subscribe('pitches', this.params.region);
  this.layout('navBar', {
    data: {
      currentPath: this.params.region,
    },
  });
  this.render('pitchList', {
    // set data context of current URL
    data: {
      thisRegion: this.params.region,
      pitchList: pitches.find(),
    },
  });
});

Router.route('/pitch-info/:pitchName', function routePitch() {
  this.subscribe('pitch', this.params.pitchName).wait();
  if (this.ready()) {
    this.layout('navBar', {
      data: {
        currentPath: this.params.pitchName,
        pitch: pitches.find().fetch()[0],
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
