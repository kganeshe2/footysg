import './pitch-info.html';

import { Transactions } from '../api/pitches.js';

var startTime,bookDate;

Template.pitchInfo.helpers({
	'Pitch': function(){
		// use 'this' to reference data context 
		return this;
	}
});

Template.pitchInfo.events({
	'click #js-book' (event){
		var transStatus = Transactions.insert({
			pitch_id:this._id,
			user_id:'test_id',
			bookDate:bookDate,
			startTime:startTime,
			endTime:'',
			validity: true,
			bookAt: new Date(),
			/*originalPrice:,
			discountedPrice:,
			promoCode:,*/
		});
		alert("Thank you for the booking, your reference number is " + transStatus);
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
		        $('#timeCalendar').fadeIn();
			}
	});
});

Template.timeCalendar.onRendered(function(){
	var timeHTML = "";
	for(row=0; row<3; row++){
		timeHTML += "<div class='row time-row no-side-margin'>";
		for(halfCol=0; halfCol<2; halfCol++){
			timeHTML += "<div class='col-xs-6'><div class='row'>";
			for(cell=0; cell<4; cell++){
				var timeValue = 8*row + 4*halfCol + cell;
				timeHTML += "<div class='col-xs-3 time-cell'><button type='button' class='time btn btn-warning' data='" + timeValue + "'><span class='cell'>"+timeValue+"</span></button></div>";
			}
			timeHTML += "</div></div>";
		}
		timeHTML += "</div>";
	}
	$('#timeBoxes').html(timeHTML);

	$('.time').click(function(){
		startTime = $(this).attr("data");
	});
});