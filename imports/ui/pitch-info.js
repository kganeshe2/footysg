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
			}
	});
});

Template.selectTime.onRendered(function(){
	var timeHTML = "";
	for(row=0; row<3; row++){
		timeHTML += "<div class='row tiemRow'>";
		for(halfCol=0; halfCol<2; halfCol++){
			timeHTML += "<div class='col-xs-6''><div class='row'>";
			for(cell=0; cell<4; cell++){
				timeHTML += "<div class='col-xs-3'><button type='button' class='btn btn-info'>1</button></div>";
			}
			timeHTML += "</div></div>";
		}
		timeHTML += "</div>";
	}
	$('#selectTime').html(timeHTML);
});
