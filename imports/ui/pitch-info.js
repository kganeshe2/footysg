import './pitch-info.html';

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

		alert('Thank you :)');
	}
});

//var minDate = $.fullCalendar.moment('2017-12-22');

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
				console.log('You selected ' + date.format());
		        // change the day's background color just for fun
		        $(this).css('background-color', 'red');

		        // show the time calendar
		        var timeCalendar = $('#time-calendar').fullCalendar({
		        		header: false,
		        		hiddenDays: [1],
		        		aspectRatio: 1,
		       		 });

		        $('#time-calendar').animate({opacity: 1}, 500, function(){
		        });

		        
		        $('#time-calendar thead').remove();
		        $('#time-calendar .fc-today').removeClass('fc-today');
			}
	});
		monthCalendar.fullCalendar( 'today' );
});