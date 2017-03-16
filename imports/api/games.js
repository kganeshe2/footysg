// 'meteor' is defualt run-time dependency
// eslint-disable-next-line 
import { Mongo } from 'meteor/mongo';

export const Games = new Mongo.Collection('game');

if (Meteor.isServer) {
  // Publish pitches function to return pitch list from certain region to client
  Meteor.publish('gamesByUser', function publishUserGames(user) {
    return Games.find({bookedBy: user});
  });
}
