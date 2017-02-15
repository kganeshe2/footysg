import { Regions } from '/imports/api/mellavin_new_mongo.js';
import { FutsalParks } from '/imports/api/mellavin_new_mongo.js';

if (Regions.find().count() < 1){
	create_Regions();
	create_FutsalParks();
}

// create_FutsalParks();

function create_Regions(){
	Regions.insert({country: "Singapore", regionName: "North"});
	Regions.insert({country: "Singapore", regionName: "Central"});
	Regions.insert({country: "Singapore", regionName: "East"});
	Regions.insert({country: "Singapore", regionName: "West"});
}

function create_FutsalParks(){
	FutsalParks.insert({//_id:"1",
	                name: "North Futsal Park 1", 
	                description: "This is North Futsal Park 1", 
	                pitches: [{	
	                	name: "NFP1: Pitch 1",
	                	description: "North Futsal Park 1 Pitch 1",
						size: "5v5",
						hourlyPriceByDay: [{	
							day: "Monday",
							price: 90
							},
						{
							day: "Tuesday",
							price: 90
							},
						{
							day: "Tuesday",
							price: 90
							},
						{
							day: "Tuesday",
							price: 90
							},
						{
							day: "Tuesday",
							price: 90
							},
						{
							day: "Tuesday",
							price: 90
						}],
						promoPricebyDate: [],
						games:[{
								day: "Monday",
								time: 1100,
								price: 90
							},
							{
								day: "Monday",
								time: 1200,
								price: 90
							}
						]
	                },
	                {
	                	name: "NFP1: Pitch 2",
	                	description: "North Futsal Park 1 Pitch 2",
						size: "5v5",
						hourlyPriceByDay: [{	
							day: "Monday",
							price: 90
							},
						{
							day: "Tuesday",
							price: 90
							},
						{
							day: "Tuesday",
							price: 90
							},
						{
							day: "Tuesday",
							price: 90
							},
						{
							day: "Tuesday",
							price: 90
							},
						{
							day: "Tuesday",
							price: 90
						}],
						promoPricebyDate: [],
						games:[{

							}
						]
	                },
	                ],
	                pitchSizes: ["5v5","7v7"],
	                facilities: ["shower","parking"], 
	                region: "North",
	                owner: "northOwner" });
	FutsalParks.insert({//_id:"2",
	                name: "North Futsal Park 2", 
	                description: "This is North Futsal Park 2", 
	                pitches: [],
	                pitchSizes: ["7v7"],
	                facilities: ["shower"], 
	                region: "North",
	                owner: "northOwner" });
	FutsalParks.insert({//_id:"3",
	                name: "North Futsal Park 3", 
	                description: "This is North Futsal Park 3", 
	                pitches: [],
	                pitchSizes: ["5v5"],
	                facilities: ["parking"], 
	                region: "North",
	                owner: "northOwner" });
	FutsalParks.insert({//_id:"4",
	                name: "North Futsal Park 4", 
	                description: "This is North Futsal Park 4", 
	                pitches: [],
	                pitchSizes: ["5v5","6v6"],
	                facilities: ["shower","parking"], 
	                region: "North",
	                owner: "northOwner" });

	//Creating FutsalParks for Central region
	FutsalParks.insert({//_id:"5",
	                name: "Central Futsal Park 1", 
	                description: "This is Central Futsal Park 1", 
	                pitches: [],
	                pitchSizes: ["7v7"],
	                facilities: ["shower","parking"],  
	                region: "Central",
	                owner: "centralOwner" });
	FutsalParks.insert({//_id:"6",
	                name: "Central Futsal Park 2", 
	                description: "This is Central Futsal Park 2", 
	                pitches: [],
	                pitchSizes: ["5v5","6v6"],
	                facilities: ["shower","parking"], 
	                region: "Central",
	                owner: "centralOwner" });

	//Creating FutsalParks for East region
	FutsalParks.insert({//_id:"7",
	                name: "East Futsal Park 1", 
	                description: "This is East Futsal Park 1", 
	                pitches: [],
	                pitchSizes: ["5v5","6v6", "7v7"],
	                facilities: ["shower","parking"],  
	                region: "East",
	                owner: "eastOwner" });
	FutsalParks.insert({//_id:"8",
	                name: "East Futsal Park 2", 
	                description: "This is East Futsal Park 2", 
	                pitches: [],
	                pitchSizes: ["6v6", "7v7"],
	                facilities: ["shower","parking"],  
	                region: "East",
	                owner: "eastOwner" });

	//Creating FutsalParks for West region
	FutsalParks.insert({//_id:"9",
	                name: "West Futsal Park 2", 
	                description: "This is West Futsal Park 2", 
	                pitches: [],
	                pitchSizes: ["5v5","7v7"],
	                facilities: ["parking"],  
	                region: "West",
	                owner: "westOwner" });
	FutsalParks.insert({//_id:"10",
	                name: "West Futsal Park 3", 
	                description: "This is West Futsal Park 3", 
	                pitches: [],
	                pitchSizes: ["5v5","6v6", "7v7"],
	                facilities: ["shower"],  
	                region: "West",
	                owner: "westOwner" });
}











