import './pitch-info.html';


import { Transactions } from '../api/pitches.js';
import { ReactiveDict } from 'meteor/reactive-dict';

var bookDate, startTime=0, endTime=0;
var unavailable;

Template.pitchInfo.onCreated(function(){
	this.state = new ReactiveDict();
});

Template.pitchInfo.helpers({
	Pitch() {
		return this;
	},
	dateSelected(){
		const instance  = Template.instance();
		return instance.state.get('dateSelected');
	},
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
		alert("Thank you for the booking, your reference number is " + transStatus);
	},
	'click .time' (event, instance){
		startTime = event.target.name;
		endTime = event.target.value;
		instance.state.set('startTime',startTime);
		instance.state.set('endTime', endTime);

		instance.state.set('dateSelected', false);
	},
	'click #month-calendar' (event, instance){
		// Get unavailable slot
		var trans = Transactions.find({pitch_id:Template.parentData(1).fetch()[0]._id, bookDate: bookDate}).fetch();
		unavailable = []
		trans.forEach(function(item){
			var time = item.startTime;
			unavailable.push(time);
		});

		initTimePanel();

		instance.state.set('bookDate', bookDate);
		instance.state.set('dateSelected', true);
	}
});        

Template.monthCalendar.onRendered(function() {
	var monthCalendar = $('#month-calendar').fullCalendar({
		header: false,
		firstDay: 1,
		aspectRatio: 2,
		dayRender: function(date, cell){
			/*if (date < minDate){
	            $(cell).addClass('fc-other-month');
	        }*/
	    },
		dayClick: function(date){
			bookDate = date.format();
	    $(this).css('background-color', 'red');
		}
	});
});

function initTimePanel(){
	var timeHTML = "";
	for(row=0; row<6; row++){
		timeHTML += "<div class='row'>";
		for(col=0; col<4; col++){
			var time = col + 4*row;
			var mediodia = time < 12 ? "am" : "pm"; 
			timeHTML += "<div class='col-xs-3'><button class='btn time ";
			if (unavailable.includes(time.toString())) timeHTML += "btn-default' disabled";
			else timeHTML += "btn-warning'";

			timeHTML += " name='" + time + "' value='" + (time+1) + "'>" + time%12 + mediodia;

			if(time==11) mediodia = "pm"; 
			else if(time==23) mediodia = "am";

			timeHTML += " - " + (time%12+1) + mediodia + "</button></div>";
		}

		timeHTML += "</div>";
	}
	$('#time-panel').html(timeHTML);
}