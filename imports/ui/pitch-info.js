import './pitch-info.html';
import { Transactions } from '../api/pitches.js';

Template.pitchInfo.helpers({

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

