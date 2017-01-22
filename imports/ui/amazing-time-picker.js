import './amazing-time-picker.html';

import { Unavailabletimes } from '../api/transactions.js';

let selectedDate = 0;

Template.amazingTimePicker.onCreated(function newPicker() {
  this.state = new ReactiveDict();
  console.log(Template.parentData(1)._id);
  const a = Meteor.subscribe('tunavails', Template.parentData(1)._id);
  console.log(a);
});

Template.amazingTimePicker.helpers({
  timeSlot(dateSelected) {
    if (Unavailabletimes.find({ bookedDate: dateSelected }).count() === 0) {
      console.log('no data');
      // ConstructData(this._id,dateSelected);
    }
    return Unavailabletimes.find({ pitch_id: this._id, bookedDate: dateSelected }).fetch()[0];
  },
  endTime(startTime) {
    return parseInt(startTime) + 1;
  },
  isDisabled(ava) {
    return !ava && 'disabled';
  },
  showDate() {
    const instance = Template.instance();
    if (instance.state.get('selected')) {
      return instance.state.get('selected');
    }
    return '';
  },
});

Template.amazingTimePicker.events({
  'click #month-calendar'(event, templateInstance) {
    templateInstance.state.set('selected', selectedDate);
  },
});

Template.amazingTimePicker.onRendered(function renderedPicker() {
  const monthCalendar = $('#month-calendar').fullCalendar({
    header: false,
    firstDay: 1,
    aspectRatio: 2,
    dayRender: function renderDate() {
    /* if (date < minDate){
            $(cell).addClass('fc-other-month');
        }*/
    },
    dayClick: function clickDate(date) {
      $('[style="background-color: red;"]').css('background-color', '');
      $(this).css('background-color', 'red');
      $(this).addClass('selected');
      selectedDate = date.format();
    },
  });
});

function constructData(pitchId, bookedDate) {
  const data = {};
  data.pitch_id = pitchId;
  data.bookedDate = bookedDate;
  data.avaTimes = [{"values":[{"time":0, "ava":true}, {"time":1,"ava":true},{"time":2,"ava":true},{"time":3,"ava":true}]},{"values":[{"time":4,"ava":true},{"time":5,"ava":true},{"time":6,"ava":true},{"time":7,"ava":true}]},{"values":[{"time":8,"ava":true},{"time":9,"ava":true},{"time":10,"ava":true},{"time":11,"ava":true}]},{"values":[{"time":12,"ava":true},{"time":15,"ava":true},{"time":14,"ava":true},{"time":17,"ava":true}]},{"values":[{"time":16,"ava":true},{"time":17,"ava":true},{"time":18,"ava":true},{"time":19,"ava":true}]},{"values":[{"time":20,"ava":true},{"time":21,"ava":true},{"time":22,"ava":true},{"time":23,"ava":true}]}];
  const status = Unavailabletimes.insert(data);
  console.log(`Inserted: ${status}`);
}
