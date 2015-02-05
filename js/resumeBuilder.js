var work = {
    "jobs": [{
        "employer": "Toptech Systems",
        "title": "Software Engineer",
        "location": "Longwood, FL",
        "dates": "Jan 2014 - Present",
        "description": "Develop software for Toptech's hosted automation solution, UAP."
    }, {
        "employer": "Synapse Product Development",
        "title": "Deployment Engineering Lead",
        "location": "Lake Buena Vista, FL",
        "dates": "Nov 2012 - Nov 2013",
        "description": "Lead a team of deployment engineers in deploying an enterprise hardware and software solution at Disney Parks and Resorts."
    }, {
        "employer": "Toptech Systems",
        "title": "Firmware Engineer",
        "location": "Longwood, FL",
        "dates": "Apr 2011 - Oct 2012",
        "description": "Developed firmware for Toptech's batch controller product, MultiLoad II."
    }]
};

var projects = {
    "projects": [{
        "title": "This Resume",
        "dates": "Jan 2015",
        "description": "Built a kick-ass resume for this class.",
        "images": ["images/resume.png"]
    }]
};

var bio = {
    "name": "Mack Hooper",
    "role": "software ninja",
    "bioPic": "images/fry.jpg",
    "welcomeMessage": "Welcome to my resume",
    "contacts": {
        "mobile": "407.283.7381",
        "email": "mack.hooper@gmail.com",
        "github": "f00bard",
        "location": "Orlando, FL"
    },
    "skills": ["embedded software", "web services", "linux administration", "networks"]
};

var education = {
    "schools": [{
        "name": "Rollins College",
        "location": "Winter Park, FL",
        "degree": "n/a",
        "majors": ["Computer Science"],
        "dates": "2006 - 2007",
        "url": "http://rollins.edu"
    }],
    "onlineCourses": [{
        "title": "Programming Mobile Applications for Android Handheld Systems",
        "school": "University of Maryland, College Park on Coursera",
        "dates": "December 19th, 2014",
        "url": "https://www.coursera.org/account/accomplishments/records/YtrQnX4pH7dcKWGA"
    }, {
        "title": "HTML/CSS Path",
        "school": "Code School",
        "dates": "Oct 2014 - Present",
        "url": "https://www.codeschool.com/users/980568"
    }]
}


function inName(name) {
    var firstName = name.split(" ")[0].slice(0, 1).toUpperCase() + name.split(" ")[0].slice(1).toLowerCase();
    var lastName = name.split(" ")[1].toUpperCase();

    return firstName + " " + lastName;
}

bio.display = function() {
    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);

    $('#header').prepend(formattedRole);
    $('#header').prepend(formattedName);

    Object.keys(bio.contacts).forEach(function(key) {
        var formattedContact = HTMLcontactGeneric.replace("%contact%", key).replace("%data%", bio.contacts[key]);
        $('#topContacts').append(formattedContact);
    });

    Object.keys(bio.contacts).forEach(function(key) {
        var formattedContact = HTMLcontactGeneric.replace("%contact%", key).replace("%data%", bio.contacts[key]);
        $('#footerContacts').append(formattedContact);
    });

    $('#header').append(HTMLbioPic.replace("%data%", bio.bioPic));
    $('#header').append(HTMLWelcomeMsg.replace("%data%", bio.welcomeMessage));

    if (bio.skills.length > 0) {
        $('#header').append(HTMLskillsStart);

        for (skill in bio.skills) {
            var formattedSkill = HTMLskills.replace("%data%", bio.skills[skill]);
            $('#skills').append(formattedSkill);
        }
    }
}

work.display = function() {
    for (job in work.jobs) {
        $("#workExperience").append(HTMLworkStart);

        var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
        var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
        $(".work-entry:last").append(formattedEmployer + formattedTitle);

        var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
        $(".work-entry:last").append(formattedDates);

        var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
        $(".work-entry:last").append(formattedDescription);
    }
}

projects.display = function() {
    for (project in projects.projects) {
        $('#projects').append(HTMLprojectStart);
        $('.project-entry:last').append(HTMLprojectTitle.replace("%data%", projects.projects[project].title));
        $('.project-entry:last').append(HTMLprojectDates.replace("%data%", projects.projects[project].dates));
        $('.project-entry:last').append(HTMLprojectDescription.replace("%data%", projects.projects[project].description));

        if (projects.projects[project].images.length > 0) {
            for (image in projects.projects[project].images) {
                $('.project-entry:last').append(HTMLprojectImage.replace("%data%", projects.projects[project].images[image]));
            }
        }
    }
};

education.display = function() {
    for (school in education.schools) {
        $('#education').append(HTMLschoolStart);
        $('.education-entry:last').append(HTMLschoolName.replace("%data%", education.schools[school].name) + HTMLschoolDegree.replace("%data%", education.schools[school].degree));
        $('.education-entry:last').append(HTMLschoolDates.replace("%data%", education.schools[school].dates));
        $('.education-entry:last').append(HTMLschoolLocation.replace("%data%", education.schools[school].location));
        for (major in education.schools[school].majors) {
            $('.education-entry:last').append(HTMLschoolMajor.replace("%data%", education.schools[school].majors[major]));
        }
    }

    $('#education').append(HTMLonlineClasses);
    for (onlineCourse in education.onlineCourses) {
        $('#education').append(HTMLschoolStart);
        $('.education-entry:last').append(HTMLonlineTitle.replace("%data%", education.onlineCourses[onlineCourse].title) + HTMLonlineSchool.replace("%data%", education.onlineCourses[onlineCourse].school));
        $('.education-entry:last').append(HTMLonlineDates.replace("%data%", education.onlineCourses[onlineCourse].dates));
        $('.education-entry:last').append(HTMLonlineURL.replace("%data%", education.onlineCourses[onlineCourse].url));
    }
}

bio.display();
work.display();
projects.display();
education.display();

$("#main").append(internationalizeButton);

$("#mapDiv").append(googleMap);
