import './pitch-list.html'

Template.pitchList.helpers({
	'pitchItems': function(){
		return [
		{
			pitchName:'pitch 1',
		},{
			pitchName:'pitch 2',
		},{
			pitchName:'pitch 3',
		},{
			pitchName:'pitch 4',
		},{
			pitchName:'pitch 5',
		},{
			pitchName:'pitch 6',
		}];
	}
});