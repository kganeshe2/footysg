import './superadmin.html';
import { Regions } from '/imports/api/mellavin_new_mongo.js';
import { FutsalParks } from '/imports/api/mellavin_new_mongo.js';

Template.superadmin.helpers({
  returnRegions() {
    return Regions.find()
  },
  returnFutsalParks() {
  	return FutsalParks.find()
  }
});


