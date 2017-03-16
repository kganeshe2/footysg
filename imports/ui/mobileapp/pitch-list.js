import './pitch-list.html';

$('').css('background-color','purple');
$(".pitch-list-item-container").css("background-color", "yellow");

Template.pitchList.events({
});

Template.pitchListItem.helpers({
  encodedName(name){
    return encodeURIComponent(name);
  }
});
