//import { Template } from 'meteor/templating' 
import { Pitches } from '../api/pitches.js';

import './pitch-list.html'

Template.pitchList.helpers({
	'pitchItems': function(){
		//console.log(Pitches);
		return Pitches.find();
	}
});