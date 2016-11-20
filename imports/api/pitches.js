import { Mongo } from 'meteor/mongo';

export const Pitches = new Mongo.Collection('pitches');
export const Users = new Mongo.Collection('loginUsers');