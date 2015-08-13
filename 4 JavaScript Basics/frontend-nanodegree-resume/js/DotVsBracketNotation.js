// Problem Sets/Homework from Udacity JavaScript Basics by Kristin Ottofy August 2015

var weirdObject = {
    "property": "Time for an astronomy lesson!",
    "property1": "Cameron's minor in college was astronomy",
    "property-2": "The 4 Galilean largest moons of Jupiter are:",
    "property 3": "Io, Ganymede, Callisto, Europa",
    "property$": "Saturn's moon Enceladus has liquid water ocean under its icy surface",
    " property": "The Sun contains 99.87% of the mass of the entire solar system",
    "property()": "There are 5 dwarf planets in our solar system:",
    "property[]": "Pluto, Ceres, Eris, Haumea, Makemake",
    "8property": "Mars has two tiny moons: Phobos and Deimos"
};

// Use console.log() to figure out if dot and/or bracket notation
// will work to access the properties below. Mark true if you can use dot/bracket
// notation to access the property, otherwise mark false.

// For example, uncomment the line below to see if you can use dot notation to access `property1`.
console.log("property dot: " + weirdObject.property);
console.log("property1 dot: " + weirdObject.property1);
//console.log("property-2 dot: " + weirdObject.property-2);
//console.log("property 3 dot: " + weirdObject.property 3);
console.log("property$ dot: " + weirdObject.property$);
console.log(" property dot: " + weirdObject. property);
//console.log("property() dot: " + weirdObject.property());
//console.log("property[] dot: " + weirdObject.property[]); 
//console.log("8property dot: " + weirdObject.8property); 
console.log("DOT complete");

console.log("property bracket: " + weirdObject["property"]);
console.log("property1 bracket: " + weirdObject["property1"]);
console.log("property-2 bracket: " + weirdObject["property-2"]);
console.log("property 3 bracket: " + weirdObject["property 3"]);
console.log("property$ bracket: " + weirdObject["property$"]);
console.log(" property bracket: " + weirdObject[" property"]);
console.log("property() bracket: " + weirdObject["property()"]);
console.log("property[] bracket: " + weirdObject["property[]"]);
console.log("8property bracket: " + weirdObject["8property"]);

// I'll give you the first answer. The rest are set to false. Try out each property and
// if you can use dot or bracket notation to access it, change the answer to true!

// property
var dotNotation0 = true;
var bracketNotation0 = true;

// property1
var dotNotation1 = true;
var bracketNotation1 = true;

// property-2
var dotNotation2 = false;
var bracketNotation2 = true;

// property 3
var dotNotation3 = false;
var bracketNotation3 = true;

// property$
var dotNotation4 = true;
var bracketNotation4 = true;

// *space*property
var dotNotation5 = false;
var bracketNotation5 = true;

// property()
var dotNotation6 = false;
var bracketNotation6 = true;

// property[]
var dotNotation7 = false;
var bracketNotation7 = true;

// 8property
var dotNotation8 = false;
var bracketNotation8 = true;

// ----------------------------------- LESSON 0 --------------------------------

// $("#main").append(["Kristin"]); <-----JQUERY -----
// var awesomeThoughts = "I am Kristin and I am AWESOME!";
//var funThoughts = awesomeThoughts.replace("AWESOME", "FUN")
//$("#main").append([funThoughts]);

// [string].replace([old], [new])

/*var email = "poop@gmail.com";
var newEmail = email.replace("poop", "kottofy");

var formattedContact = HTMLemail.replace("%data%", newEmail);
$("#topContacts").append(formattedContact); */

// ------------------------- PROBLEM SET 0 -----------------------------------

/* In Intro to Computer Science, Dave Evans challenges you to use Python to 
convert the speed of light from meters/second to centimeters/nanosecond. 
Let's see if you can perform the same calculation using JavaScript in your 
browser's console. Here are a few numbers you will need:

speed of light = 299792458 meters/second
1 meter = 100 centimeters
1 nanosecond = 1.0/1000000000 seconds

How fast is light in centimeters/nanosecond?  

Notes: (299792458 meters/second) * (100 centimeters/1 meter) * ( (1.0/1000000000)/1.0) 
	= 29.9792458 cm/ns
*/

// --------------------------------- LESSON 1 ---------------------------------

//var name = "Kristin Ottofy";
//var role = "Web Developer";

//var formattedName = HTMLheaderName.replace("%data%", name);
//$("#header").append(formattedName);

//var formattedRole = HTMLheaderRole.replace("%data%", role);
//$("#header").append(formattedRole);

// THERE ARE NO CLASSES IN JavaScript


// ------------------------------- LESSON 2 - LOG CLICKS ---------------
$(document).click(function(loc) {
    var x = loc.pageX;
    var y = loc.pageY;
    logClicks(x, y);
});