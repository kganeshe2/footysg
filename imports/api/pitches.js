import { Mongo } from 'meteor/mongo';

export const pitches = new Mongo.Collection('pitches');

export const region = new Mongo.Collection('region');

export const hourlyPriceByDay = new Mongo.Collection('hourlyPriceByDay');

export const futsalPark = new Mongo.Collection('futsalPark');

export const game = new Mongo.Collection('game');

export const Transactions = new Mongo.Collection('transactions');

export const Unavailabletimes = new Mongo.Collection('tunavails');

export const Users = new Mongo.Collection('loginUsers');
