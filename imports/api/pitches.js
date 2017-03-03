// 'meteor' is defualt run-time dependency
// eslint-disable-next-line
import { Mongo } from 'meteor/mongo';

export const Pitches = new Mongo.Collection('pitches');

export const Regions = new Mongo.Collection('region');

export const HourlyPrice = new Mongo.Collection('hourlyPriceByDay');

export const FutsalParks = new Mongo.Collection('futsalPark');

export const Games = new Mongo.Collection('game');

export const Users = new Mongo.Collection('loginUsers');


if (Meteor.isServer) {
  // Publish pitches function to return pitch list from certain region to client
  Meteor.publish('pitches', function pitchesPublication(region) {
    return Pitches.find({ region: region });
  });
  Meteor.publish('pitch', function pitchPublication(name) {
    return Pitches.find({ name: name });
  });
  Meteor.publish('admin', function adminPublication(owner) {
    return Pitches.find({ owner: owner });
  });
}