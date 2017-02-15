import { Pitches } from '/imports/api/pitches.js';
import './pitch-list.html';

Template.pitchList.events({
	'submit .new-pitch'(event){

		event.preventDefault();
		
		// Get values 
		var name, description, region;
		name = event.target.pitchName.value;
		description = event.target.pitchDescription.value;
		region = event.target.pitchRegion.value;
		
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