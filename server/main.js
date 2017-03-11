/* eslint-disable */
import { Meteor } from 'meteor/meteor';

// create mock data (no import following still works)
//import '/server/mock-data.js'

Meteor.startup(() => {
  // code to run on server at startup

 });

ServiceConfiguration.configurations.remove({
    service: "facebook"
});

ServiceConfiguration.configurations.insert({
    service: "facebook",
    appId: '1185783001529445',
    secret: '1df4ab3ed6289a2334a7804ded934442'
});