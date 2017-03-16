// eslint-disable-next-line
import { ReactiveDict } from 'meteor/reactive-dict';

import './booking.html';
import { Transactions, Unavailabletimes } from '/imports/api/transactions.js';
import { Games } from '/imports/api/games.js'

// To pender over value type
let bookDate = 0;
let startTime = 0;
let endTime = 0;

Template.booking.onCreated(function newPitchInfo() {
  console.log(this);
  this.state = new ReactiveDict();
  this.subscribe('tunavails', Template.currentData().park._id);
  this.subscribe('transactions', Template.currentData().park._id);
});

Template.booking.helpers({
  bookDate() {
    const instance = Template.instance();
    if (instance.state.get('bookDate')) {
      bookDate = instance.state.get('bookDate');
      return bookDate;
    }
    return '';
  },
  startTime() {
    const instance = Template.instance();
    if (instance.state.get('startTime')) {
      startTime = instance.state.get('startTime');
      return ` from ${startTime}`;
    }
    return '';
  },
  endTime() {
    const instance = Template.instance();
    if (instance.state.get('endTime')) {
      endTime = instance.state.get('endTime');
      return ` to ${endTime}`;
    }
    return '';
  },
});

Template.booking.events({
  'click #js-book'() {
    console.log(this);
    // Check user
    if (Meteor.user()){
      Games.insert({
        futsalPark: this._id,
        "futsalPitch": "P1",
        "date": bookDate,
        "startTime": startTime,
        "endTime": endTime,
        "noOfHours": "1",
        "hourlyPrice": "H4",
        "promoPrice": "",
        "bookedPrice": "",
        "owner": this.owner,
        "bookedBy": Meteor.userId(),
        "status": "Upcoming",
      });
    } else{
      alert('please login');
    }

    // Check if the transactions exists
    const trans = Transactions.find({
      pitch_id: Template.currentData().park._id,
      user_id: 'test_id',
      bookDate: bookDate,
      startTime: startTime,
    });
    if (trans.count()) {
      console.log('This time has been booked!');
    }
    // Update booking Infomation start
    const transStatus = Transactions.insert({
      pitch_id: this._id,
      user_id: 'test_id',
      bookDate: bookDate,
      startTime: startTime,
      endTime: endTime,
      validity: true,
      bookAt: new Date(),
      /*originalPrice:,
      discountedPrice:,
      promoCode:,*/
    });
    console.log(transStatus);
    // Update booking information end

    // Upate unava table start
    // 403 will occur if update by {pitch_id&bookDate}
    // To refine it server side call
    const timeslot = Unavailabletimes.find({
      pitch_id: this._id,
      bookedDate: bookDate,
      'avaTimes.values.time': parseInt(startTime),
    }).fetch()[0];
    const row = Math.floor(startTime / 4);
    const col = startTime % 4;
    const setBook = {};
    setBook[`avaTimes.${row}.values.${col}.ava`] = false;
    const avaStatus = Unavailabletimes.update({ _id: timeslot._id }, { $set: setBook });
    // Update anava table ends

    // Show user success booking message
    alert(`Thank you for the booking, your reference number is ${transStatus}, reserved status: ${avaStatus}`);
  },
  'click .time'(event, templateInstance) {
    // Show start and end time in UI
    startTime = event.target.name;
    endTime = event.target.value;
    templateInstance.state.set('startTime', startTime);
    templateInstance.state.set('endTime', endTime);
  },
  'click #month-calendar'(event, templateInstance) {
    bookDate = event.target.dataset.date;
    templateInstance.state.set('bookDate', bookDate);
  },
});
