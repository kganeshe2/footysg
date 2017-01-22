// import { Template } from 'meteor/templating'
import { Pitches } from '../api/pitches.js';
import './pitch-list.html';

Template.pitchList.events({
  'submit .new-pitch'(event) {
    // Prevent default function calls
    event.preventDefault();

    // Get values
    const name = event.target.pitchName.value;
    const description = event.target.pitchDescription.value;
    const region = event.target.pitchRegion.value;

    // Insert into db
    Pitches.insert({
      name: name,
      description: description,
      region: region,
    });

    // Dismiss modal
    $('#new_pitch_form').modal('hide');
  },
});
