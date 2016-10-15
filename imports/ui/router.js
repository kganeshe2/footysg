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
  //layoutTemplate: 'appBody',
});


// Router examples
Router.route('/rExp/:_id/comment/:cId', function () {
	// get router parameters
  var params = this.params;

  // get _id and cId in URL
  var id = params._id; 
  var cId = params.cId; 
  //alert("id:" + id + " cId:" + cId);

  //get query string and hash fragment
  var query = params.qeury;
  //var hash = params.hash; 
  alert("query:" + query.abc);

});