import './admin.html';
import { Pitches } from '../api/pitches.js';

Template.admin.helpers({
	'pitch': function(){
		return this;
	}
})