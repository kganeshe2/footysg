import './region.html';

$('').css('background-color','purple');
$(".pitch-list-item-container").css("background-color", "yellow");

Template.region.events({
});

Template.parkItem.helpers({
  encodedName(name){
    return encodeURIComponent(name);
  }
});
