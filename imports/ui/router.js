// import { Template } from 'meteor/templating' 
import { Pitches } from '../api/pitches.js';
import { login } from '../ui/login.js';


Router.route('/',{
	template:'login',
});

Router.route('/home', function(){
	this.layout('navBar', {
		data:{
			currentPath: this.params.region,
			home: true,
			navbarhome: 'navbar-fixed-top navbar-home'
		}
	});
	this.render('home');
});

Router.route('/admin/:ownerName', function() {
	this.render('admin',{
		data:{
			owner: Pitches.find({owner:this.params.ownerName}).fetch()[0]
		}
	});
});

Router.route('/pitch-list/:region', function() {
	this.layout('navBar', {
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
	this.layout('navBar', {
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
