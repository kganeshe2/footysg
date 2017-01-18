import './pitch-info.html';
import { Transactions } from '../api/pitches.js';


import { Transactions } from '../api/pitches.js';
import { Unavailabletimes } from '../api/pitches.js';

import { ReactiveDict } from 'meteor/reactive-dict';

var bookDate=0, startTime=0, endTime=0;
var unavailable, selectedTime;

Template.pitchInfo.onCreated(function(){
	this.state = new ReactiveDict();
});

Template.pitchInfo.helpers({

	startTime() {
		const instance  = Template.instance();
		if(instance.state.get('startTime')){
			startTime = instance.state.get('startTime');
			return startTime;
		}
		return "";
	},
	bookDate() {
		const instance  = Template.instance();
		if(instance.state.get('bookDate')){
			bookDate = instance.state.get('bookDate');
			return bookDate;
		}
		return "";
	}, 
	endTime() {
		const instance  = Template.instance();
		if(instance.state.get('endTime')){
			endTime = instance.state.get('endTime');
			return endTime;
		}
		return "";
	}
});

Template.pitchInfo.events({
	'click #js-book' (){
		// Update booking Infomation start
		var transStatus = Transactions.insert({
			pitch_id:this._id,
			user_id:'test_id',
			bookDate:bookDate,
			startTime:startTime,
			endTime:endTime,
			validity: true,
			bookAt: new Date(),
			/*originalPrice:,
			discountedPrice:,
			promoCode:,*/
		});
		// Update booking information end

		// Upate unava table start
		// 403 will occur if update by {pitch_id&bookDate}
		// To refine it server side call
		var timeslot = Unavailabletimes.find({
			pitch_id: this._id, 
			bookedDate: bookDate, 
			"avaTimes.values.time": parseInt(startTime)
		}).fetch()[0];
		row = Math.floor(startTime/4);
		col = startTime % 4;
		var setBook = {};
		setBook["avaTimes."+row+".values."+col+".ava"]=false;
		var avaStatus = Unavailabletimes.update(
			{_id: timeslot._id}, 
			{$set: setBook}
			);
		// Update anava table ends

		alert("Thank you for the booking, your reference number is " + transStatus + ": reserved status: " + avaStatus);
	},
	'click .time' (event, instance){
		startTime = event.target.name;
		endTime = event.target.value;
		instance.state.set('startTime',startTime);
		instance.state.set('endTime', endTime);
	},
	'click #month-calendar' (event, instance){
		bookDate = event.target.dataset.date;
	}
});
