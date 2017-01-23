import { Meteor } from 'meteor/meteor';

// import database from mongo
import '../imports/api/pitches.js';
import '../imports/api/transactions.js';
import { Pitches } from '../imports/api/pitches.js';
import { Users } from '../imports/api/pitches.js';
//Pitches.insert({ _id=1,name: "Ganesh", description: "Test Description", region: "Central" });
function createData_Pitches()
{
  //Creating Pitches for Central region
	Pitches.insert({//_id:"1",
                  name: "Bishan Stadium Soccer Pitch", 
                  description: "Located in the Central, Bishan Stadium is a mere 10 mins walk away from Bishan MRT, which has both Circle Line as well as North-South Line. Despite the easy accessibility to Bishan Stadium, the field is in poor condition. The green of the grass has faded, leaving empty patches around the field. The field is sandy and there are presence of potholes. Due to the uneven ground, some parts of the fields are hard while others are soft. Hopefully, there would be some maintenance of the field soon.", 
                  pitchTypes: ["5v5","7v7"],
                  facilities: ["shower","parking"], 
                  region: "Central",
                  owner: "footysgadmin" });
  Pitches.insert({//_id:"2",
  				        name: "First Toa Pa Yoh Secondary School Soccer Pitch", 
                  description: "First Toa Pa Yoh Secondary School Soccer Field is of appropriate size and boasts artificial turf. On top of these, it is very well maintained and in good condition. There are also many parking lots available nearby at the various HDB. Located close to the popular Toa Pa Yoh HDB Hub, it is indeed a good place for some football.",
                  pitchTypes: ["7v7"],
                  facilities: ["shower"], 
                  region: "Central",
                  owner: "footysgadmin" });
  Pitches.insert({//_id:"3",
  				        name: "Toa Pa Yoh Stadium", 
                  description: "NA", 
				          pitchTypes: ["5v5"],
                  facilities: ["parking"], 
                  region: "Central",
                  owner: "footysgadmin" });
	Pitches.insert({//_id:"4",
				          name: "Braddell Pitch 1 & 2", 
                  description: "While Braddell Pitch 1 & 2 may be convenient – 5 minutes walk away from Braddell MRT Station – there are few or no nearby facilities and amenities, with the closest ones being one MRT Station away. Also, while it is only a 5 minutes walk away from Braddel MRT Station, the Braddell Pitch 1 & 2 may be a bit tough to find.On the good side, Braddell Pitch 1 & 2 are of the appropriate sizes for 11-a-side football and the field is pretty well maintained with minimal brown patches. Goal posts are also available.",
                  pitchTypes: ["5v5","6v6"],
                  facilities: ["shower","parking"], 
                  region: "Central",
                  owner: "footysgadmin" });
  
  //Creating Pitches for North region
  Pitches.insert({//_id:"5",
  				        name: "Hiding Place Pitch 1 & 2", 
                  description: "Terror Club",
                  pitchTypes: ["7v7"],
                  facilities: ["shower","parking"],  
                  region: "North",
                  owner: "footysgadmin" });
  Pitches.insert({//_id:"6",
  				        name: "Woodlands Stadium", 
                  description: "NA", 
                  pitchTypes: ["5v5","6v6"],
                  facilities: ["shower","parking"], 
                  region: "North",
                  owner: "footysgadmin" });

  //Creating Pitches for East region
  Pitches.insert({//_id:"7",
  				        name: "Sports Planet ECP", 
                  description: "NA", 
                  pitchTypes: ["5v5","6v6", "7v7"],
                  facilities: ["shower","parking"],  
                  region: "East",
                  owner: "footysgadmin" });
  Pitches.insert({//_id:"8",
  				        name: "Safra Tampines", 
                  description: "NA", 
                  pitchTypes: ["6v6", "7v7"],
                  facilities: ["shower","parking"],  
                  region: "East",
                  owner: "footysgadmin" });

    //Creating Pitches for West region
  Pitches.insert({//_id:"9",
  				        name: "Yusof Ishak Secondary School Soccer Pitch", 
                  description: "NA", 
                  pitchTypes: ["5v5","7v7"],
                  facilities: ["parking"],  
                  region: "West",
                  owner: "footysgadmin" });
  Pitches.insert({//_id:"10",
  				        name: "Tanglin Trust School Soccer Pitch", 
                  description: "NA", 
                  pitchTypes: ["5v5","6v6", "7v7"],
                  facilities: ["shower"],  
                  region: "West",
                  owner: "footysgadmin" });
}
function createData_Users()
{
  Users.insert({_id:"1",
              firstName: "Mellavin",
              lastName: "Mar",
              password: "P@ssw0rd",
              isOwner: "1",
              pitches: "",
              contact: "90123456",
              isBlocked: false
            });
  Users.insert({_id:"2",
              firstName: "Yue Hao",
              lastName: "Pan",
              password: "P@ssw0rd",
              isOwner: "1",
              pitches: "",
              contact: "93123456",
              isBlocked: false
            });
  Users.insert({_id:"3",
              firstName: "Ganesh",
              lastName: "Kumar",
              password: "P@ssw0rd",
              isOwner: "1",
              pitches: "",
              contact: "93123356",
              isBlocked: false
            });
}

/*function createData_tunavails(){
  {
  pitch_id: 5,
  bookedDate: "2017-01-06",
  avaTimes : [
    {values: [{time: 0, ava: true},{time: 1, ava: true},{time: 2, ava: true},{time: 3, ava: true}]},
    {values: [{time: 4, ava: true},{time: 5, ava: true},{time: 6, ava: true},{time: 7, ava: true}]},
    {values: [{time: 8, ava: true},{time: 9, ava: true},{time: 10, ava: true},{time: 11, ava: true}]},
    {values: [{time: 12, ava: true},{time: 15, ava: true},{time: 14, ava: true},{time: 17, ava: true}]},
    {values: [{time: 16, ava: true},{time: 17, ava: true},{time: 18, ava: true},{time: 19, ava: true}]},
    {values: [{time: 20, ava: true},{time: 21, ava: true},{time: 22, ava: true},{time: 23, ava: true}]}
  ]
}
}*/
Meteor.startup(() => {
  // code to run on server at startup
  var totalNumberOfRec_Pitches=Pitches.find().count();
  var totalNumberOfRec_Users=Users.find().count();

  if(totalNumberOfRec_Pitches<1)
  {
  	createData_Pitches();
  }
  if(totalNumberOfRec_Users<1)
  {
    createData_Users();
  }
 });