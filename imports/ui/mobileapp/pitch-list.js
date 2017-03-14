import './pitch-list.html';

Template.pitchListItem.helpers({
  encodedName(name){
    return encodeURIComponent(name);
  }
});
