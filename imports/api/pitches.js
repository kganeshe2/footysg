// 'meteor' is defualt run-time dependency
// eslint-disable-next-line
import { Mongo } from 'meteor/mongo';

// To comment Pitches 
export const Pitches = new Mongo.Collection('pitches');

export const Regions = new Mongo.Collection('region');

export const HourlyPrice = new Mongo.Collection('hourlyPriceByDay');

export const FutsalParks = new Mongo.Collection('futsalPark');

export const Users = new Mongo.Collection('loginUsers');


if (Meteor.isServer) {
  // Publish pitches function to return pitch list from certain region to client
  Meteor.publish('regions', function publicRegions(){
    return Regions.find();
  });
  Meteor.publish('parksInRegion', function publicParksByRegion(region_id) {
    return FutsalParks.find({region: region_id});
  });
  Meteor.publish('parksByName', function publicParksByRegion(park_name) {
    return FutsalParks.find({_id: park_name});
  });
  Meteor.publish('admin', function publicAdmins(owner) {
    return Pitches.find({ owner: owner });
  });
  // To comment pitches as no longer used
  Meteor.publish('pitches', function publicPitches(pitch_id) {
    return Pitches.find({ _id: pitch_id });
  });
  Meteor.publish('pitch', function publicPitch(name) {
    return Pitches.find({ name: name });
  });
}