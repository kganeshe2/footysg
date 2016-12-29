import './pitch-info.html';


import { Transactions } from '../api/pitches.js';
import { ReactiveDict } from 'meteor/reactive-dict';

var bookDate, startTime, endTime;
var unavailable = {};

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
		if(instance.state.get('timeRange')){
			endTime = startTime + instance.state.get('timeRange');
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
		startTime = event.target.value;
		instance.state.set('startTime',startTime);
	},
	'click .range' (event, instance){
		timeRange = event.target.value;
		endTime = startTime + timeRange;
		instance.state.set('timeRange', timeRange);
	},
	'click #month-calendar' (event, instance){
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
	        // change the day's background color just for fun
	        $(this).css('background-color', 'red');
		}
	});
});

Template.timeCalendar.onCreated(function(){
	// Get unavailable slot
	var trans = Transactions.find({pitch_id:Template.parentData(1).fetch()[0]._id}).fetch();
	trans.forEach(function(item){
		var date = item.bookDate;
		var time = item.startTime;
		if(typeof(unavailable[date])==="undefined"){
			unavailable[date] = [];
		}
		unavailable[date].push(time);
	});
});

Template.timeCalendar.onRendered(function(){
	// Construct HTML for Available Time Section
	var timeHTML = "<h3>Available Time</h3>";
	for(row=0; row<4; row++){
		timeHTML += "<div class='row'>";
		for(col=0; col<6; col++){
			var value = 6*row + col;
			//console.log(typeof(unavailable[bookDate])+"::"+typeof(value));
			if (unavailable[bookDate].includes(value.toString())){
				timeHTML += "<div class='col-xs-2'><button class='btn btn-default time' value='" + value + "'>" + value + "</button></div>";
			}else{
				timeHTML += "<div class='col-xs-2'><button class='btn btn-warning time' value='" + value + "'>" + value + "</button></div>";
			}
		}
		timeHTML += "</div>"
	}
	$('#available-time').html(timeHTML);
	
	//  Construct HTML for Hour Range Section
	var hourHTML = "<h3>Hours</h3>";
	for(row=0; row<4; row++){
		hourHTML += "<div class='row'><div class='col-xs-12'><button class='btn btn-info range' value='" + (row+1) + "'>" + (row+1) + "</button></div></div>";
	}
	$('#hour-range').html(hourHTML);

	$('#time-calendar').fadeIn();
});
