const hoganLovells = Object.create({}, {
    startDate: {
        enumerable: true,
        writable: false,
        value: "12/15/2018"
    },
    location: {
        enumerable: true,
        writable: true,
        value: "Century City"
    },
    salary: {
        enumerable: true,
        writable: false,
        value: 90000
    },
    title: {
        enumerable: true,
        writable: false,
        value: "Litigation Support"
    },
    endDate: {
        enumerable: false,
        writable: true,
        value: "12/30/2011"
    },

    liked: {
        enumerable: false,
        writable: true,
        value: "Solving problems."
    },

    disLiked: {
        enumerable: false,
        writable: true,
        value: "long extensive travel."
    }
})

const talentAcquisition = Object.create({}, {
    startDate: {
        enumerable: true,
        writable: false,
        value: "1/1/2011"
    },
    location: {
        enumerable: true,
        writable: false,
        value: "Los Angeles"
    },
    salary: {
        enumerable: true,
        writable: false,
        value: 60000
    },
    title: {
        enumerable: true,
        writable: false,
        value: "IT Recruiter"
    },
    endDate: {
        enumerable: false,
        writable: true,
        value: "12/30/2015"
    },

    liked: {
        enumerable: false,
        writable: true,
        value: "Working with the team"
    },

    disLiked: {
        enumerable: false,
        writable: true,
        value: "Being a recruiter"
    }
})


const onoraGroup = Object.create({}, {
    startDate: {
        enumerable: true,
        writable: false,
        value: "1/15/2015"
    },
    location: {
        enumerable: true,
        writable: true,
        value: "Brentwood"
    },
    salary: {
        enumerable: true,
        writable: false,
        value: 90000
    },
    title: {
        enumerable: true,
        writable: false,
        value: "Sr. Technical Recruiter"
    },
    endDate: {
        enumerable: false,
        writable: true,
        value: "12/30/2011"
    },

    liked: {
        enumerable: false,
        writable: true,
        value: "Building relationships"
    },

    disLiked: {
        enumerable: false,
        writable: true,
        value: "The enviroment"
    }

})

const staffingTechnologies = Object.create({}, {
    startDate: {
        enumerable: true,
        writable: false,
        value: "1/15/2017"
    },
    location: {
        enumerable: true,
        writable: false,
        value: "Franklin TN."
    },
    salary: {
        enumerable: true,
        writable: false,
        value: 60000
    },
    title: {
        enumerable: true,
        writable: false,
        value: "Sr. Technical Recruiter"
    },
    endDate: {
        enumerable: false,
        writable: true,
        value: "12/5/2017"
    }
})

// var obj = {
//     name: name,
//     totalScore: totalScore,
//     gamesPlayed: gamesPlayed
// };

// Challange: Write a function that will build, and return, a job object. Make sure you define an argument for each one of the properties you want to be in the object.
function jobHistory(startDateV, locationV, salaryV, titleV, endDateV, likedV, disLikedV) {
    const newJob = Object.create({}, {
        startDate: {
            enumerable: true,
            writable: false,
            value: startDateV
        },
        location: {
            enumerable: true,
            writable: true,
            value: locationV
        },
        salary: {
            enumerable: true,
            writable: false,
            value: salaryV
        },
        title: {
            enumerable: true,
            writable: false,
            value: titleV
        },
        endDate: {
            enumerable: false,
            writable: true,
            value: endDateV
        },

        liked: {
            enumerable: false,
            writable: true,
            value: likedV
        },

        disLiked: {
            enumerable: false,
            writable: true,
            value: disLikedV
        }

    })
    return newJob;
};

console.log(jobHistory("5/21/2018", "Nashville TN.", "NA", "STUDENT", "10/20/2018", "Learning", "No Money"))