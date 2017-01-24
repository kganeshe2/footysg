// 'meteor' is defualt run-time dependency
// eslint-disable-next-line 
import { Mongo } from 'meteor/mongo';

export const Transactions = new Mongo.Collection('transactions');

export const Unavailabletimes = new Mongo.Collection('tunavails');

if (Meteor.isServer) {
  // Publish pitches function to return pitch list from certain region to client
  Meteor.publish('tunavails', function pitchesPublication(pitchId) {
    return Unavailabletimes.find({ pitch_id: pitchId });
  });

  Meteor.publish('transactions', function transactionPublication(pitchId) {
    return Transactions.find({ pitch_id: pitchId });
  });
}
