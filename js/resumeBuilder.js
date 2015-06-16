var bio = {
    "name": "Anzhela Petrovska",
    "role": "Web developer intern",
//    "welcomeMessage" : "Hello! It's simple Javascript test resume based on github mock and modified due to JavaScript udacity course.",
    "image": "images/avatar.jpg",
    "contacts": {
        "location": "Kyiv",
        "email": "anzhelapetrovska@gmail.com",
        "github": "ScarletSnail",
        "twitter": "ScarletSnail",
        "mobile": "+38(096)46-90-518)"
    },
    "skills": ["HTML", "CSS", "JavaScript", "Git", "Wordpress", "Bootstrap"]
};

var work = {
    "jobs": [
        {
            "employer": "Freelance works",
            "title": "Copyright freelancer and articles author",
            "dates": "2011 - 2015",
            "location": "Khmelnytskyi",
            "description": " Article writing on various topics, selection of content, copywriting and rewriting of articles."
        },
        {
            "employer": "Mozgi-Studio",
            "title": "Web-developer",
            "dates": "2015",
            "location": "Kyiv",
            "description": "Full-development process. Mobile optimization and responsive layout."
        }
    ]
};

var projects = {
    "projects": [
        {
            "title": "Mozgi-Studio",
            "dates": "From Jan 2015",
            "description": "My first own developed project. Web-site based on Wordpress. During the work was learned some basic rules and elements of HTML, CSS, Bootstrap and Wordpress framework. Also during this work I mastered the basic elements of work with Git. Web-site is fully responsive.",
            "images": ["images/mozgi-studio.png"]
        },
        {
            "title": "Domtexnik",
            "dates": "From Feb 2015",
            "description": "Web-store made with individual framework based on similar to MVC structure.Fullfilled works: - Responsive layout - Quick order function- Homepage reformatting. - Price-lists generation for hotline and yandex stores.",
            "images": ["images/domtexnik.png"]
        }
    ]
};

var education = {
    "schools": [
        {
            "name": "National Aviation University",
            "location": "Kyiv, Ukraine",
            "degree": "bachelor",
            "majors": "computer science",
            "dates": "2008 - 2012"
        },
        {
            "name": "National Aviation University ",
            "location": "Kyiv, Ukraine",
            "degree": "specialist",
            "majors": "project management",
            "dates": "2011 - 2012"
        },
        {
            "name": "National Aviation University ",
            "location": "Kyiv, Ukraine",
            "degree": "magister",
            "majors": "computer science",
            "dates": "2012 - 2014"
        }
    ],
    "onlineCourses": [
        {
            "title": "Intro to HTML and CSS",
            "school": "udacity",
            "dates": "2015",
            "url": "https://www.udacity.com/course/intro-to-html-and-css--ud304"
        },
        {
            "title": "JavaScript basics",
            "school": "udacity",
            "dates": "2015",
            "url": "https://www.udacity.com/course/javascript-basics--ud804"
        },
        {
            "title": "HTML & CSS",
            "school": "codecademy",
            "dates": "2014",
            "url": "http://www.codecademy.com/tracks/web"
        },
        {
            "title": "JavaScript",
            "school": "codecademy",
            "dates": "2014",
            "url": "http://www.codecademy.com/en/tracks/javascript"
        },
        {
            "title": "JQuery",
            "school": "codecademy",
            "dates": "2014",
            "url": "http://www.codecademy.com/en/tracks/jquery"
        },
        {
            "title": "PHP",
            "school": "codecademy",
            "dates": "2014",
            "url": "http://www.codecademy.com/en/tracks/php"
        },
        {
            "title": "HTML & CSS",
            "school": "codecademy",
            "dates": "2014",
            "url": "http://www.codecademy.com/tracks/web"
        },
        {
            "title": "Make a Website",
            "school": "codecademy",
            "dates": "2014",
            "url": "http://www.codecademy.com/en/skills/make-a-website"
        },
        {
            "title": "Make an Interactive Website",
            "school": "codecademy",
            "dates": "2014",
            "url": "http://www.codecademy.com/en/skills/make-an-interactive-website"
        }
    ]
};

work.display = function () {
    for (job in work.jobs) {
        $("#workExperience").append(HTMLworkStart);

        var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
        var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
        var formattedEmployerTitle = formattedEmployer + formattedTitle;
        var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
        var formatedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
        var formatedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);

        $(".work-entry:last")
            .append(formattedEmployerTitle)
            .append(formattedDates)
            .append(formatedLocation)
            .append(formatedDescription);
    }
}

projects.display = function () {
    for (project in projects.projects) {
        $("#projects").append(HTMLprojectStart);

        var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
        var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
        var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);

        $(".project-entry:last")
            .append(formattedTitle)
            .append(formattedDates)
            .append(formattedDescription);

        if (projects.projects[project].images.length > 0) {
            for (image in projects.projects[project].images) {
                var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
                $(".project-entry:last").append(formattedImage);
            }
        }
    }
}

bio.display = function () {
    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
    $("#header").prepend(formattedRole).prepend(formattedName);

    var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
    var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
    var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
    var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
    var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);

    $("#topContacts")
        .append(formattedEmail)
        .append(formattedMobile)
        .append(formattedGithub)
        .append(formattedTwitter)
        .append(formattedLocation);

    $("#footerContacts")
        .append(formattedEmail)
        .append(formattedMobile)
        .append(formattedGithub)
        .append(formattedTwitter)
        .append(formattedLocation);

    var formattedBioPic = HTMLbioPic.replace("%data%", bio.image);
//    var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);

    $("#header")
        .append(formattedBioPic);
//        .append(formattedWelcomeMsg);

    if (bio.skills.length > 0) {
        $('#header').append(HTMLskillsStart);
        for (skill in bio.skills) {
            var formattedSkills = HTMLskills.replace("%data%", bio.skills[skill]);
            $("#skills").append(formattedSkills);
        }
        ;
    }
};

education.display = function () {
    for (school in education.schools) {
        $("#education").append(HTMLschoolStart);

        var formattedName = HTMLschoolName.replace("%data%", education.schools[school].name);
        var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
        var formattedDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
        var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
        var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[school].majors);

        $(".education-entry:last")
            .append(formattedName + formattedDegree)
            .append(formattedDates)
            .append(formattedLocation)
            .append(formattedMajor);
    }

    if (education.onlineCourses.length > 0) {
        $("#education").append(HTMLonlineClasses);

        for (course in education.onlineCourses) {
            $("#education").append(HTMLschoolStart);
            var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[course].title);
            var formattedSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[course].school);
            var formattedDates = HTMLonlineDates.replace("%data%", education.onlineCourses[course].dates);
            var formattedUrl = HTMLonlineURL.replace(/\%data\%/g, education.onlineCourses[course].url);

            $(".education-entry:last")
                .append(formattedOnlineTitle + formattedSchool)
                .append(formattedDates)
                .append(formattedUrl);
        }
    }
};

//function inName(name) {
//    name = name.trim().split(" ");
//    name[1] = name[1].toUpperCase();
//    name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();
//
//
//    return name[0] + " " + name[1];
//}
//
//$("#main").append(internationalizeButton);

$("#mapDiv").append(googleMap);

projects.display();
work.display();
bio.display();
education.display();