
// Regions = new Mongo.Collection('regions');
// FutsalParks = new Mongo.Collection('futsalparks');
// FutsalPitches = new Mongo.Collection('futsalpitches');
// Games = new Mongo.Collection('games');
// HourlyPrices = new Mongo.Collection('hourlyprices');
// SpecialPrices = new Mongo.Collection('specialprices');
// BookedPrices = new Mongo.Collection('bookedprices');
// PromoCodes = new Mongo.Collection('promocodes');
// Players = new Mongo.Collection('players');
// ParkOwners = new Mongo.Collection('parkowners');
// Admins = new Mongo.Collection('admins');






// if(Regions.find().count()<1){
// 	create_Regions();
// }

// if(FutsalParks.find().count()<1){
// 	create_FutsalParks();
// }

// if(FutsalPitches.find().count()<1){
// 	create_FutsalPitches();
// }

// if(Games.find().count()<1){
// 	create_Games();
// }

// function create_Regions(){
// 	Regions.insert({regionName: 'North'});
// 	Regions.insert({regionName: 'Central'});
// 	Regions.insert({regionName: 'East'});
// 	Regions.insert({regionName: 'West'});
// }

// function create_FutsalParks(){
// 	//Creating FutsalParks for North region
// 	FutsalParks.insert({//_id:"1",
// 	                name: "North Futsal Park 1", 
// 	                description: "This is North Futsal Park 1", 
// 	                pitches: [],
// 	                pitchSizes: ["5v5","7v7"],
// 	                facilities: ["shower","parking"], 
// 	                region: "North",
// 	                owner: "northOwner" });
// 	FutsalParks.insert({//_id:"2",
// 	                name: "North Futsal Park 2", 
// 	                description: "This is North Futsal Park 2", 
// 	                pitches: [],
// 	                pitchSizes: ["7v7"],
// 	                facilities: ["shower"], 
// 	                region: "North",
// 	                owner: "northOwner" });
// 	FutsalParks.insert({//_id:"3",
// 	                name: "North Futsal Park 3", 
// 	                description: "This is North Futsal Park 3", 
// 	                pitches: [],
// 	                pitchSizes: ["5v5"],
// 	                facilities: ["parking"], 
// 	                region: "North",
// 	                owner: "northOwner" });
// 	FutsalParks.insert({//_id:"4",
// 	                name: "North Futsal Park 4", 
// 	                description: "This is North Futsal Park 4", 
// 	                pitches: [],
// 	                pitchSizes: ["5v5","6v6"],
// 	                facilities: ["shower","parking"], 
// 	                region: "North",
// 	                owner: "northOwner" });

// 	//Creating FutsalParks for Central region
// 	FutsalParks.insert({//_id:"5",
// 	                name: "Central Futsal Park 1", 
// 	                description: "This is Central Futsal Park 1", 
// 	                pitches: [],
// 	                pitchSizes: ["7v7"],
// 	                facilities: ["shower","parking"],  
// 	                region: "Central",
// 	                owner: "centralOwner" });
// 	FutsalParks.insert({//_id:"6",
// 	                name: "Central Futsal Park 2", 
// 	                description: "This is Central Futsal Park 2", 
// 	                pitches: [],
// 	                pitchSizes: ["5v5","6v6"],
// 	                facilities: ["shower","parking"], 
// 	                region: "Central",
// 	                owner: "centralOwner" });

// 	//Creating FutsalParks for East region
// 	FutsalParks.insert({//_id:"7",
// 	                name: "East Futsal Park 1", 
// 	                description: "This is East Futsal Park 1", 
// 	                pitches: [],
// 	                pitchSizes: ["5v5","6v6", "7v7"],
// 	                facilities: ["shower","parking"],  
// 	                region: "East",
// 	                owner: "eastOwner" });
// 	FutsalParks.insert({//_id:"8",
// 	                name: "East Futsal Park 2", 
// 	                description: "This is East Futsal Park 2", 
// 	                pitches: [],
// 	                pitchSizes: ["6v6", "7v7"],
// 	                facilities: ["shower","parking"],  
// 	                region: "East",
// 	                owner: "eastOwner" });

// 	//Creating FutsalParks for West region
// 	FutsalParks.insert({//_id:"9",
// 	                name: "West Futsal Park 2", 
// 	                description: "This is West Futsal Park 2", 
// 	                pitches: [],
// 	                pitchSizes: ["5v5","7v7"],
// 	                facilities: ["parking"],  
// 	                region: "West",
// 	                owner: "westOwner" });
// 	FutsalParks.insert({//_id:"10",
// 	                name: "West Futsal Park 3", 
// 	                description: "This is West Futsal Park 3", 
// 	                pitches: [],
// 	                pitchSizes: ["5v5","6v6", "7v7"],
// 	                facilities: ["shower"],  
// 	                region: "West",
// 	                owner: "westOwner" });
// }

// function create_FutsalPitches(){
// 	//Creating Generic Demo Pitches
// 	FutsalPitches.insert({
// 	                name : "Demo Pitch ONE",
// 	                description: "Demo Pitch ONE that can be used by any Park for testing",
// 	                size: "5v5",
// 	                hourlyPrice: "",
// 	                promoPrice:"",
// 	                games:"" });

// 	FutsalPitches.insert({
// 	                name : "Demo Pitch TWO",
// 	                description: "Demo Pitch TWO that can be used by any Park for testing",
// 	                size: "5v5",
// 	                hourlyPrice: "",
// 	                promoPrice:"",
// 	                games:"" });

// 	FutsalPitches.insert({
// 	                name : "Demo Pitch THREE",
// 	                description: "Demo Pitch THREE that can be used by any Park for testing",
// 	                size: "7v7",
// 	                hourlyPrice: "",
// 	                promoPrice:"",
// 	                games:"" });
// 	FutsalPitches.insert({
// 	                name : "Demo Pitch FOUR",
// 	                description: "Demo Pitch FOUR that can be used by any Park for testing",
// 	                size: "11v11",
// 	                hourlyPrice: "",
// 	                promoPrice:"",
// 	                games:"" });
// }

// function create_Games(){
// 	// Games.insert({
// 	// 	futsalPark: 1
// 	// 	futsalPitch:1
// 	// 	date:
// 	// 	startTime:
// 	// 	endTime:
// 	// 	noOfHours:
// 	// 	hourlyPrice:
// 	// 	promoPrice:
// 	// 	bookedPrice:
// 	// 	promocode:
// 	// 	owner:
// 	// 	players:
// 	// });
// 	// Games.insert({
// 	// 	futsalPark:
// 	// 	futsalPitch:
// 	// 	date:
// 	// 	startTime:
// 	// 	endTime:
// 	// 	noOfHours:
// 	// 	hourlyPrice:
// 	// 	promoPrice:
// 	// 	bookedPrice:
// 	// 	promocode:
// 	// 	owner:
// 	// 	players:
// 	// });
// 	// Games.insert({
// 	// 	futsalPark:
// 	// 	futsalPitch:
// 	// 	date:
// 	// 	startTime:
// 	// 	endTime:
// 	// 	noOfHours:
// 	// 	hourlyPrice:
// 	// 	promoPrice:
// 	// 	bookedPrice:
// 	// 	promocode:
// 	// 	owner:
// 	// 	players:
// 	// });
// }



















// // HourlyPrices.insert({
// //                 futsalPitch: "",
// //                 day: "Monday",
// //                 startTime: "900",
// //                 endTime: "1000",
// //                 price: "100" });
// // HourlyPrices.insert({
// //                 futsalPitch: "",
// //                 day: "Tuesday",
// //                 startTime: "900",
// //                 endTime: "1000",
// //                 price: "200" });

// // SpecialPrices.insert({
// //                 futsalPitch: "",
// //                 day: "Monday",
// //                 startTime: "900",
// //                 endTime: "1000",
// //                 price: "99" });


// // SpecialPrices.insert({
// //                 futsalPitch: "",
// //                 day: "Tuesday",
// //                 startTime: "900",
// //                 endTime: "1000",
// //                 price: "199" });

