import './pitch-info.html';
import './navbar.html';

import { Transactions } from '../api/pitches.js';

Template.pitchInfo.helpers({
	'Pitch': function(){
		// use 'this' to reference data context 
		return this;
	}
});

Template.pitchInfo.events({
	'click #js-book' (event){

		console.log(this._id);
		
		Transactions.insert({
			pitch_id:this._id,
			user_id:'test_id',
			bookSlot:'',
			startTime:'',
			endTime:'',
			validity: true,
			bookAt: new Date(),
			/*originalPrice:,
			discountedPrice:,
			promoCode:,*/
		});

		alert('Thank you :');
	}
});

Template.navbarPitchInfo.helpers({
	pitchName(parentData){
		console.log(parentData.fetch());
		return parentData.fetch()[0].name;
	},
	pitchRegion(parentData){
		console.log(parentData.fetch());
		return parentData.fetch()[0].region;
	},

})