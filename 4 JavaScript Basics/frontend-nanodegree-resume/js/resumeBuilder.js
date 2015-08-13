// ------------------------------------------------------------------------------
// ------------------------------------------------------------------------------
// Udacity JavaScript Basics Course Resume Project by Kristin Ottofy August 2015
// ------------------------------------------------------------------------------
// ------------------------------------------------------------------------------

// -------------------------- HEADER -------------------------
var bio = {
	"name" : "Kristin Ottofy",
	"role" : "Programmer",
	"picture" : "https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/So_happy_smiling_cat.jpg/206px-So_happy_smiling_cat.jpg",
	"welcome" : "Welcome to my Resume!", 
	"skills" : ["Java", "C++", "C", "JavaScript (working knowledge)", "Maths", "etc."],
	"contact" : {
		"email" : "kottofy@gmail.com",
		"website" : "kristinottofy.com"
	},
	"gitHub" : "github.com/kottofy"
};

bio.city = "Atlanta";
bio["contact"]["twitter"] = "@kristinottofy";

// ------------------- FIX BIO CONTACT GENERIC? ------------------------ ??????????
//var formattedContact = HTMLcontactGeneric.replace("%contact%", bio.contact["email"]);
//formattedContact = HTMLcontactGeneric.replace("%data%", bio.contact["email"]);
//$("#topContacts").append(formattedContact);

bio.display = function() {
	var formattedName = HTMLheaderName.replace("%data%", bio.name);
	$("#header").append(formattedName);

	var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
	$("#header").append(formattedRole);

	var formattedWelcome = HTMLwelcomeMsg.replace("%data%", bio.welcome);
	$("#header").append(formattedWelcome);

	var formattedbioPic = HTMLbioPic.replace("%data%", bio.picture);
	$("#header").append(formattedbioPic);

	// ------------------------ HEADER - SKILLS ------------------------
	function takeQuiz() {
		
		$("#header").append(HTMLskillsStart);
		
		for(var i = 1; i < bio["skills"].length; i++)
		{
			var formattedSkill = HTMLskills.replace("%data%", bio.skills[i]);
			$("#skills").append(formattedSkill);
		}
	}

	if (bio["skills"].length > 0)
	{
		//console.log(bio["skills"].length);
		takeQuiz();
	}

	// ------------------------- HEADER - TOP CONTACTS ---------------------
	var formattedEmail = HTMLemail.replace("%data%", bio["contact"]["email"]);
	$("#topContacts").append(formattedEmail);

	var formattedWeb = HTMLblog.replace("%data%", bio["contact"]["website"]);
	$("#topContacts").append(formattedWeb);

	var formattedTwitter = HTMLtwitter.replace("%data%", bio.contact.twitter);
	$("#topContacts").append(formattedTwitter);

	var formattedGitHub = HTMLgithub.replace("%data%", bio.gitHub);
	$("#topContacts").append(formattedGitHub);

	var formattedCity = HTMLlocation.replace("%data%", bio.city);
	$("#topContacts").append(formattedCity);
}

bio.display();
// -------------------- MAIN - WORK EXPERIENCE ----------------------
var work = {};
work.CMS = {};
function displayWork() {
	
	work.CMS.employer = "Charlotte Mecklenburg Schools - Olympic High School METS and TEAM";
	work.CMS.title = "Engineering (PLTW) and Math teacher";
	work.CMS.dates = "September 2013 - September 2015";
	work.CMS.location = "Charlotte, NC";
	work.CMS.description = "CTE Department Chair 2014-2015, VEX Robotics, FIRST Robotics, TSA"

	for (job in work)
	{
		$("#workExperience").append(HTMLworkStart);

		var formattedEmployer = HTMLworkEmployer.replace("%data%", work[job].employer);
		$(".work-entry:last").append(formattedEmployer);

		var formattedWorkTitle = HTMLworkTitle.replace("%data%", work[job].title);
		$(".work-entry:last").append(formattedWorkTitle);

		var formattedWorkDates = HTMLworkDates.replace("%data%", work[job].dates);
		$(".work-entry:last").append(formattedWorkDates);

		var formattedWorkLocation = HTMLworkLocation.replace("%data%", work[job].location);
		$(".work-entry:last").append(formattedWorkLocation);

		var formattedWorkDescription = HTMLworkDescription.replace("%data%", work[job].description);
		$(".work-entry:last").append(formattedWorkDescription);

	}
}

displayWork();

// --------------------- MAIN - PROJECTS -----------------------

var projects = {
 	"project" : [
		{
			"projectTitle" : "DBMS (Database Management System)",
			"projectDates" : "2011",
			"projectDescription" : "A database management system with select, join, project, minus, and union functions along with indexing capabilities of Linear Hash and ArrayList",
		},
		{
			"projectTitle" : "Moby Dick",
			"projectDates" : "2010",
			"projectDescription" : "A program that searched through a text file to find an unscrambled version of the scrambled anagram",
		}
	]
};

projects.display = function () { 
	for (project in projects.project)
	{
		$("#projects").append(HTMLprojectStart);
			
		var projectTitleFormatted = HTMLprojectTitle.replace("%data%", projects.project[project].projectTitle);
		$(".project-entry:last").append(projectTitleFormatted);

		var projectDatesFormatted = HTMLprojectDates.replace("%data%", projects.project[project].projectDates);
		$(".project-entry:last").append(projectDatesFormatted);

		var projectDescriptionFormatted = HTMLprojectDescription.replace("%data%", projects.project[project].projectDescription);
		$(".project-entry:last").append(projectDescriptionFormatted);

	}
} 
projects.display();

// -------------------- MAIN - EDUCATION -------------------------

//var education = { };
//education["UGA"] =  "UGA B.S. Computer Science, M.A.T. Mathematics Education";  
//var formattedEdu = HTMLschoolName.replace("%data%", education.UGA);
//$("#education").append(formattedEdu);

var education = {
	"schools" : [
		{
			"name" : "University of Georgia",
			"location" : "Athens, GA",
			"degree" : "B.S.",
			"major" : "Computer Science, Emphasis in Internet and Information Technology",
			"date" : "2012"
		},
		{
			"name" : "University of Georgia",
			"location" : "Athens, GA",
			"degree" : "M.A.T.",
			"major" : " Mathematics Education",
			"date" : "2013"
		}
	], 
	"onlineCourses" : [
		{
			"title" : "JavaScript Basics",
			"school" : "Udacity",
			"dates" : "July 2015",
			"url" : "https://www.udacity.com/course/javascript-basics--ud804"
		}
	]
} ;

education.display = function() {

	for (school in education.schools) {

		$("#education").append(HTMLschoolStart);

		var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[school].name);
		$(".education-entry:last").append(formattedSchoolName);

		var formattedSchoolLocation= HTMLschoolLocation.replace("%data%", education.schools[school].location);
		$(".education-entry:last").append(formattedSchoolLocation);

		var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
		$(".education-entry:last").append(formattedSchoolDegree);

		var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[school].major);
		$(".education-entry:last").append(formattedSchoolMajor);

		var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[school].date);
		$(".education-entry:last").append(formattedSchoolDates);
	} 

		$("#education").append(HTMLonlineClasses);

	for (onlineCourse in education.onlineCourses)
	{

		$("#education").append(HTMLschoolStart);

		var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[onlineCourse].title);
		$(".education-entry:last").append(formattedOnlineTitle);

		var formattedSchool= HTMLonlineSchool.replace("%data%", education.onlineCourses[onlineCourse].school);
		$(".education-entry:last").append(formattedSchool);

		var formattedSchoolDate = HTMLschoolDegree.replace("%data%", education.onlineCourses[onlineCourse].dates);
		$(".education-entry:last").append(formattedSchoolDate);

		var formattedSchoolURL = HTMLonlineURL.replace("%data%", education.onlineCourses[onlineCourse].url);
		$(".education-entry:last").append(formattedSchoolURL);
	}
}
education.display();

// ---------------------- INTERNATIONALIZE ----------------------------

$("#main").append(internationalizeButton);

function inName ()
{
	var nameArray = bio.name.split(" ");

	var internationalizedName = "";

	console.log(nameArray[0]);
	console.log(nameArray[1]);

	nameArray[0] = nameArray[0].charAt(0).toUpperCase() + nameArray[0].slice(1).toLowerCase();

	nameArray[1] = nameArray[1].toUpperCase();
	console.log(nameArray[1]);

	internationalizedName = nameArray[0]  + " " + nameArray[1] ;

	return internationalizedName;
}

// --------------- WHERE I'VE LIVED AND WORKED ---------------------
$("#map-div").append(googleMap);
//initializeMap();