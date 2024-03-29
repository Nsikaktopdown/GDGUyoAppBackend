const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp(functions.config().firebase);

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });

const viewing_party_schedules_data = {
    "-vp-schedule-1": {
      "id": "-vp-schedule-1",
      "time": " 5:00 PM",
      "title": "Drink Pickup & Check-in",
      "duration": "30 min",
      "type": "General",
      "hasSeat": false,
      "date": "Tue. May 7",
      "description": "Attendees will be checked-in to the venue and given a bottle of drink to chill will enjoying the viewing party"
    },
    "-vp-schedule-2": {
      "id": "-vp-schedule-2",
        "time": " 6:00 PM",
        "title": "Google I/O Viewing Party",
        "duration": "1 hour 30 min",
        "type": "Party",
        "hasSeat": true,
        "date": "Tue. May 7",
        "isReserved": ["", false],
        "description": "The Google I/O Keynote session will be streamed live from Mountain View San Franscico. You can reserve your seat with the button below. We have 100 seats available"
  
      },
    "-vp-schedule-3": {
      "id": "-vp-schedule-3",
        "time": " 7:30 PM",
        "title": "Group Photo",
        "duration": "10 min",
        "type": "General",
        "hasSeat": false,
        "date": "Tue. May 7",
        "description": "Selfies and Group photography with everyone after the viewing party."
         }
  }
  const schedules_data = {
    "-schedule-1": {
      "id": "-schedule-1",
      "time": " 8:00 AM",
      "title": "Check-in & Setup",
      "duration": "30 min",
      "type": "General",
      "hasSeat": false,
      "date": "Fri. May 17",
      "description": "Attendees Check-in and setup for the codelabs "

    },
    "-schedule-2": {
      "id": "-schedule-2",
        "time": " 9:00 AM",
        "title": "BreakFast",
        "duration": "1 hour",
        "type": "General",
        "hasSeat": false,
        "date": "Fri. May 17",
        "description": " Tea Breakfast for Attendees."
  
      },
    "-schedule-3": {
      "id": "-schedule-3",
      "time": " 10:00 AM",
        "title": "Web CodeLab",
        "duration": "2 hours",
        "type": "Codelabs",
        "hasSeat": true,
        "date": "Fri. May 17",
        "isReserved": ["", false],
        "description": "Hack with by exploring Google I/O 2019 codelabs. Getting hands-on newer technologies and tool for the web (Angular, Cloud, Firebase)"
  
      },
      "-schedule-4": {
        "id": "-schedule-4",
        "time": " ",
        "title": "Android CodeLab",
        "duration": "2 hours",
        "type": "Codelabs",
        "hasSeat": true,
        "date": "Fri. May 17",
        "isReserved": ["", false],
        "description": "Hack with Android by exploring Google I/O 2019 codelabs. Getting hands-on newer technologies(Android Jetback, Kotlin, App Modularization, Firebase)"

  
      },
      "-schedule-5": {
        "id": "-schedule-5",
        "time": " ",
        "title": "Flutter CodeLab",
        "duration": "2 hours",
        "type": "Codelabs",
        "hasSeat": true,
        "date": "Fri. May 17",
        "isReserved": ["", false],
        "description": "Hack with Flutter by exploring Google I/O 2019 codelabs. Getting hands-on newer technologies(Dart, Material design, Firebase)"

  
      },
      "-schedule-6": {
        "id": "-schedule-6",
        "time": " ",
        "title": "Firebase CodeLab",
        "duration": "2 hours",
        "type": "Codelabs",
        "hasSeat": true,
        "date": "Fri. May 17",
        "isReserved": ["", false],
        "description": "Hack with Firebase by exploring Google I/O 2019 codelabs. Getting hands-on Cloud Function, Stating Hosting, Cloud Firestore, Messaging, Indexing etc"

  
      },
      "-schedule-7": {
        "id": "-schedule-7",
        "time": " ",
        "title": "Cloud CodeLab",
        "duration": "2 hours",
        "type": "Codelabs",
        "hasSeat": true,
        "date": "Fri. May 17",
        "isReserved": ["", false],
        "description": "Hack with Google Cloud by exploring Google I/O 2019 codelabs. Getting hands-on on newer Cloud products and tools"

  
      },
      "-schedule-8": {
        "id": "-schedule-8",
        "time": " ",
        "title": "IOT CodeLab",
        "duration": "2 hours",
        "type": "Codelabs",
        "hasSeat": true,
        "date": "Fri. May 17",
        "isReserved": ["", false],
        "description": "Hack with Google IOT Platform by exploring Google I/O 2019 codelabs."
  
      },
        "-schedule-9": {
          "id": "-schedule-9",
            "time": "2:00 PM",
            "title": "What I Have built",
            "duration": "30 min",
            "type": "General",
            "hasSeat": false,
        "date": "Fri. May 17",
        "description": " The moment we will showcase what we've build so far during the codelab session."
      
          },
          "-schedule-91": {
            "id": "-schedule-10",
            "time": " 2:30 PM",
            "title": "Sefie/Group Photography",
            "duration": "30 min",
            "type": "General",
            "hasSeat": false,
        "date": "Fri. May 17",
        "description": "Photo with friends and The GDG Team"
          }
  }

  const schedules_data_2 = {
    "-schedule-1": {
      "id": "-schedule-1",
      "time": " 8:00 AM",
      "title": "Check-in & Breakfast",
      "duration": "2 hours",
      "type": "General",
      "hasSeat": false,
      "date": "Sat. May 18",
      "description": "Attendees Check-in, swag pickup and breakfast toast"

    },
    "-schedule-2": {
      "id": "-schedule-2",
      "time": " 10:00 AM",
      "title": "Welcome Remark",
      "duration": "25 mins",
      "type": "General",
      "hasSeat": false,
      "date": "Sat. May 18",
      "description": "Welcome address by GDG Uyo lead and Co-organizers."

    },
    "-schedule-3": {
      "id": "-schedule-3",
      "time": " 10:25 AM",
      "title": "What is New in Android",
      "duration": "25 mins",
      "type": "General",
      "hasSeat": false,
      "date": "Sat. May 18",
      "description": "In this session, we will get an overview of the latest features in Android announced by Google at I/0 this year."

    },
    "-schedule-4": {
      "id": "-schedule-4",
      "time": " 10:50 AM",
      "title": "Exploring Cloud Firestore with VueJs",
      "duration": "25 mins",
      "type": "General",
      "hasSeat": false,
      "date": "Sat. May 18",
      "description": "In this session, we will walk you through Firebase Cloud Firestore features and how it works with VueJs for Web developers."

    },
    "-schedule-5": {
      "id": "-schedule-5",
      "time": " 11:15 AM",
      "title": "Building Secure Web Apps Using Google Authenticator",
      "duration": "25 mins",
      "type": "General",
      "hasSeat": false,
      "date": "Sat. May 18",
      "description": "In this session, we are going to learn how to add two factor authentication which strengthens access security by requiring two methods to verify user identity before logging user to our app"

    },
    "-schedule-6": {
      "id": "-schedule-6",
      "time": " 11:40 AM",
      "title": "Kahoot Game",
      "duration": "30 mins",
      "type": "Game",
      "hasSeat": false,
      "date": "Sat. May 18",
      "description": "It will be game time for us all, get ready"

    },
    "-schedule-7": {
      "id": "-schedule-7",
      "time": " 12:10 AM",
      "title": "Getting Started Action on Google",
      "duration": "25 mins",
      "type": "General",
      "hasSeat": false,
      "date": "Sat. May 18",
      "description": "In this session, we will learn how to build your google assistance using Actions on Google"

    },
    "-schedule-8": {
      "id": "-schedule-8",
      "time": " 12:35 AM",
      "title": "Google Analytics for Digital Marketing",
      "duration": "25 mins",
      "type": "General",
      "hasSeat": false,
      "date": "Sat. May 18",
      "description": "In this session, we will learn how to use Google Analytics to measure, scale  and  create good marketing strategies with analytical data."

    },
    "-schedule-9": {
      "id": "-schedule-9",
      "time": " 1:05 AM",
      "title": "What is new in JavaScript",
      "duration": "25 mins",
      "type": "General",
      "hasSeat": false,
      "date": "Sat. May 18",
      "description": "In this session, we will cover the latest features in JavaScript"

    },
    "-schedule-91": {
      "id": "-schedule-91",
      "time": " 1:30 AM",
      "title": "Music & Seifies & Lunch",
      "duration": "30 mins",
      "type": "Lunch | Break",
      "hasSeat": false,
      "date": "Sat. May 18",
      "description": " Lunch time and selfies with friends"

    },
    "-schedule-92": {
      "id": "-schedule-92",
      "time": " 2:00 AM",
      "title": "Panel Session",
      "duration": "40 mins",
      "type": "Panel",
      "hasSeat": false,
      "date": "Sat. May 18",
      "description": "Lunch time and selfies with friends"
    },

    "-schedule-93": {
      "id": "-schedule-93",
      "time": " 2:40 AM",
      "title": "Group Photograph",
      "duration": "30 mins",
      "type": "Panel",
      "hasSeat": false,
      "date": "Sat. May 18",
      "description": "Group Photograph with Leads and Attendees"

    }

  }
exports.insertScheduleDB = functions.https.onRequest((req, res) => {
    const text = req.query.text;
    admin.database().ref('/schedules/day1').set(schedules_data).then(snapshot => {
        res.redirect(303, snapshot.ref);
    })
    admin.database().ref('/schedules/day2').set(schedules_data_2).then(snapshot => {
      res.redirect(303, snapshot.ref);
  })
    admin.database().ref('/schedules/viewingParty').set(viewing_party_schedules_data).then(snapshot => {
      res.redirect(303, snapshot.ref);
  })
});

// Send Alert Messages to users
exports.pushNotification = functions.https.onRequest((req, res) => {

  console.log('Push notification event triggered');


// Create a notification
  const payload = {
      notification: {
          title: "I/O Extended 2019 Uyo",
          body: " It's 3 Days to our I/O Extended event. We can't wait to have you. 🎈🎈🎈",
          sound: "default"
      },
  };

//Create an options object that contains the time to live for the notification and the priority
  const options = {
      priority: "high",
      timeToLive: 60 * 60 * 24
  };


  return admin.messaging().sendToTopic("All-Users", payload, options).then(function(response){
    console.log('Notification sent successfully:',response);
}) 
.catch(function(error){
    console.log('Notification sent failed:',error);
});


});

exports.chatPushNotification = functions.database.ref('/messages/{pushId}').onWrite((change, context) => {
  const message = change.after.val();
      
  if(message.imageUrl != "null") {
    message.message = "Added a photo!";
  }
       const payload = {
         notification: {
           title:`Chat Room`,
           body: `${message.senderName}: ${message.message}`,
           tag: `${message.uuid}`
           },
          };
          //Create an options object that contains the time to live for the notification and the priority
    const options = {
      priority: "high",
      timeToLive: 60 * 60 * 24
  };
          
       return admin.messaging().sendToTopic("Chats",payload, options);
      });