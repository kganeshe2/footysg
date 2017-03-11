import "./games.html";
import { Games } from '/imports/api/games.js';

Template.games.helpers({
  cssClass(name) {
    return name.replace(/\s+/g, '-').toLowerCase();
  }
});

Template.games.events({
  'click .cancel-game'(event, templateInstance) {
    const remove = Games.remove({_id:this._id})
    alert('Cancel successful! ' + remove);
  },
});