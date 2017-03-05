/* eslint-disable */
import { Meteor } from 'meteor/meteor';

// import database from mongo
import '/imports/api/pitches.js';
import '/imports/api/transactions.js';

import { Regions } from '/imports/api/pitches.js';
import { HourlyPrice } from '/imports/api/pitches.js';
import { FutsalParks } from '/imports/api/pitches.js';
import { Games } from '/imports/api/pitches.js';
import { Pitches } from '/imports/api/pitches.js';
import { Users } from '/imports/api/pitches.js';

//Pitches.insert({ _id=1,name: "Ganesh", description: "Test Description", region: "Central" });

function createData_Pitches()
{ //Creating Pitches for Central region
	Pitches.insert({_id:"P1",
                  name: "Bishan Stadium Soccer Pitch", 
                  description: "Located in the Central, Bishan Stadium is a mere 10 mins walk away from Bishan MRT, which has both Circle Line as well as North-South Line. Despite the easy accessibility to Bishan Stadium, the field is in poor condition. The green of the grass has faded, leaving empty patches around the field. The field is sandy and there are presence of potholes. Due to the uneven ground, some parts of the fields are hard while others are soft. Hopefully, there would be some maintenance of the field soon.", 
                  size: ["5v5"],
                  hourlyPrice: ["H1","H2","H3","H4"],
                  games: [""]
                  });
  Pitches.insert({_id:"P2",
  				        name: "First Toa Pa Yoh Secondary School Soccer Pitch", 
                  description: "First Toa Pa Yoh Secondary School Soccer Field is of appropriate size and boasts artificial turf. On top of these, it is very well maintained and in good condition. There are also many parking lots available nearby at the various HDB. Located close to the popular Toa Pa Yoh HDB Hub, it is indeed a good place for some football.",
                  size: ["6v6"],
                  hourlyPrice: ["H1","H2","H3","H4"],
                  games: [""]});
  Pitches.insert({_id:"P3",
  				        name: "Toa Pa Yoh Stadium", 
                  description: "NA", 
				          size: ["5v5"],
                  hourlyPrice: ["H1","H2"],
                  games: [""]});
	Pitches.insert({_id:"P4",
				          name: "Braddell Pitch 1 & 2", 
                  description: "While Braddell Pitch 1 & 2 may be convenient – 5 minutes walk away from Braddell MRT Station – there are few or no nearby facilities and amenities, with the closest ones being one MRT Station away. Also, while it is only a 5 minutes walk away from Braddel MRT Station, the Braddell Pitch 1 & 2 may be a bit tough to find.On the good side, Braddell Pitch 1 & 2 are of the appropriate sizes for 11-a-side football and the field is pretty well maintained with minimal brown patches. Goal posts are also available.",
                  size: ["7v7"],
                  hourlyPrice: ["H1","H2"],
                  games: [""] });
  //Creating Pitches for North region
  Pitches.insert({_id:"P5",
  				        name: "Hiding Place Pitch 1 & 2", 
                  description: "Terror Club",
                  size: ["5v5"],
                  hourlyPrice: ["H3","H4"],
                  games: [""] });
  Pitches.insert({_id:"P6",
  				        name: "Woodlands Stadium", 
                  description: "NA", 
                  size: ["6v6"],
                  hourlyPrice: ["H3","H4"],
                  games: [""] });

  //Creating Pitches for East region
  Pitches.insert({_id:"P7",
  				        name: "Sports Planet ECP", 
                  description: "NA", 
                  size: ["5v5"],
                  hourlyPrice: ["H5","H6"],
                  games: [""] });
  Pitches.insert({id:"P8",
  				        name: "Safra Tampines", 
                  description: "NA", 
                  size: ["7v7"],
                  hourlyPrice: ["H5","H6"],
                  games: [""] });

    //Creating Pitches for West region
  Pitches.insert({_id:"P9",
  				        name: "Yusof Ishak Secondary School Soccer Pitch", 
                  description: "NA", 
                  size: ["5v5"],
                  hourlyPrice: ["H1","H2","H3","H4","H5","H6"],
                  games: [""] });
  Pitches.insert({_id:"P10",
  				        name: "Tanglin Trust School Soccer Pitch", 
                  description: "NA", 
                  size: ["7v7"],
                  hourlyPrice: ["H1","H2","H3","H4","H5","H6"],
                  games: [""] });
}

function createData_Region()
{
  Regions.insert({_id:"R1",
                  region: "Central", 
                  country: "Singapore"});
  Regions.insert({_id:"R2",
                  region: "North", 
                  country: "Singapore"});
  Regions.insert({_id:"R3",
                  region: "East",   
                  country: "Singapore"});
  Regions.insert({_id:"R4",
                  region: "West", 
                  country: "Singapore"});
}

function createData_HourlyPrice()
{
  HourlyPrice.insert({_id:"H1",
                 fustalPitch : "P1",
                 day : "Monday",
                 startTime : "0800",
                 endTime : "0900",
                 price : "100"});
  HourlyPrice.insert({_id:"H2",
                 fustalPitch : "P2",
                 day : "Friday",
                 startTime : "0800",
                 endTime : "0900",
                 price : "100"})
  HourlyPrice.insert({_id:"H3",
                 fustalPitch : "P3",
                 day : "Tuesday",
                 startTime : "0800",
                 endTime : "0900",
                 price : "100"})
  HourlyPrice.insert({_id:"H4",
                 fustalPitch : "P4",
                 day : "Wednesday",
                 startTime : "0800",
                 endTime : "0900",
                 price : "100"})
  HourlyPrice.insert({_id:"H5",
                 fustalPitch : "P5",
                 day : "Wednesday",
                 startTime : "0800",
                 endTime : "0900",
                 price : "100"})
  HourlyPrice.insert({_id:"H6",
                 fustalPitch : "P6",
                 day : "Thursday",
                 startTime : "0800",
                 endTime : "0900",
                 price : "100"})
}

function createData_FutsalParksDocument()
{
  FutsalParks.insert({_id:"FP1",
                      name:"Bishan FP",
                      description: "This is a test Description. Bishan is too far away for me!",
                      pitches_id: ["P1","P2"],
                      pitchSizes: ["5v5","6v6", "7v7"],
                      facilities: ["parking"], 
                      hourlyPrice: ["H1","H2","H3","H4"],
                      region: "R1",
                      owner: ""
                     });
  FutsalParks.insert({_id:"FP2",
                      name:"Jurong FP",
                      description: "This is a test Description. Jurong is pretty near!",
                      pitches_id: ["P3","P4"],
                      pitchSizes:["5v5","7v7"],
                      facilities: ["shower","parking"], 
                      hourlyPrice: ["H1","H2"],
                      region: "R1",
                      owner: ""
                     });
  FutsalParks.insert({_id:"FP3",
                      name:"Turf FP",
                      description: "This is a test Description. Bishan is too far away for me!",
                      pitches_id: ["P5","P6"],
                      pitchSizes: ["5v5","6v6", "7v7"],
                      facilities: ["shower","parking"], 
                      hourlyPrice: ["H3","H4"],
                      region: "R2",
                      owner: ""
                     });
  FutsalParks.insert({_id:"FP4",
                      name:"Bedok FP",
                      description: "This is a test Description. Bishan is too far away for me!",
                      pitches_id: ["P7","P8"],
                      pitchSizes:["5v5","7v7"],
                      facilities: ["parking"], 
                      hourlyPrice: ["H5","H6"],
                      region: "R3",
                      owner: ""
                     });
  FutsalParks.insert({_id:"FP5",
                      name:"No Mans Land FP",
                      description: "This is a test Description. Bishan is too far away for me!",
                      pitches_id: ["P9","P10"],
                      pitchSizes:["5v5","7v7"],
                      facilities: ["shower"], 
                      hourlyPrice: ["H1","H2","H3","H4","H5","H6"],
                      region: "R4",
                      owner: ""
                     });
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

function createData_Game()
{
   Games.insert({_id:"G1",
        futsalPark:"FP1",
        futsalPitch:"P1",
        date:"2017-03-01",
        startTime:"0800",
        endTime:"0900",
        noOfHours:"1",
        hourlyPrice:"H4",
        promoPrice:"",
        bookedPrice:"",
        owner:""});
   Games.insert({_id:"G2",
        futsalPark:"FP1",
        futsalPitch:"P2",
        date:"2017-03-01",
        startTime:"0800",
        endTime:"0900",
        noOfHours:"1",
        hourlyPrice:"H4",
        promoPrice:"",
        bookedPrice:"",
        owner:""});
   Games.insert({_id:"G3",
        futsalPark:"FP2",
        futsalPitch:"P3",
        date:"2017-03-15",
        startTime:"0800",
        endTime:"0900",
        noOfHours:"1",
        hourlyPrice:"H4",
        promoPrice:"",
        bookedPrice:"",
        owner:""});
   Games.insert({_id:"G4",
        futsalPark:"FP2",
        futsalPitch:"P4",
        date:"2017-03-15",
        startTime:"0800",
        endTime:"0900",
        noOfHours:"1",
        hourlyPrice:"H4",
        promoPrice:"",
        bookedPrice:"",
        owner:""});
   Games.insert({_id:"G5",
        futsalPark:"FP3",
        futsalPitch:"P5",
        date:"2017-03-08",
        startTime:"0800",
        endTime:"0900",
        noOfHours:"1",
        hourlyPrice:"H4",
        promoPrice:"",
        bookedPrice:"",
        owner:""});
   Games.insert({_id:"G6",
        futsalPark:"FP3",
        futsalPitch:"P6",
        date:"2017-03-08",
        startTime:"0800",
        endTime:"0900",
        noOfHours:"1",
        hourlyPrice:"H4",
        promoPrice:"",
        bookedPrice:"",
        owner:""});
   Games.insert({_id:"G7",
        futsalPark:"FP4",
        futsalPitch:"P7",
        date:"2017-03-22",
        startTime:"0800",
        endTime:"0900",
        noOfHours:"1",
        hourlyPrice:"H4",
        promoPrice:"",
        bookedPrice:"",
        owner:""});
   Games.insert({_id:"G8",
        futsalPark:"FP4",
        futsalPitch:"P8",
        date:"2017-03-22",
        startTime:"0800",
        endTime:"0900",
        noOfHours:"1",
        hourlyPrice:"H4",
        promoPrice:"",
        bookedPrice:"",
        owner:""});
   Games.insert({_id:"G9",
        futsalPark:"FP5",
        futsalPitch:"P9",
        date:"2017-03-29",
        startTime:"0800",
        endTime:"0900",
        noOfHours:"1",
        hourlyPrice:"H4",
        promoPrice:"",
        bookedPrice:"",
        owner:""});
   Games.insert({_id:"G10",
        futsalPark:"FP5",
        futsalPitch:"P10",
        date:"2017-03-29",
        startTime:"0800",
        endTime:"0900",
        noOfHours:"1",
        hourlyPrice:"H4",
        promoPrice:"",
        bookedPrice:"",
        owner:""});

}

Meteor.startup(() => {
  // code to run on server at startup

  if(Pitches.find().count()<1)
  {
  	createData_Pitches();
  }
  if(Regions.find().count()<1)
  {
    createData_Region();
  }
  if(HourlyPrice.find().count()<1)
  {
    createData_HourlyPrice();
  }
  if(FutsalParks.find().count()<1)
  {
    createData_FutsalParksDocument();
  } 
  if(Games.find().count()<1)
  {
    createData_Game();
  }
 });


ServiceConfiguration.configurations.remove({
    service: "facebook"
});

ServiceConfiguration.configurations.insert({
    service: "facebook",
    appId: '1185783001529445',
    secret: '1df4ab3ed6289a2334a7804ded934442'
});

