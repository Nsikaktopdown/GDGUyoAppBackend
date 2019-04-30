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
          "-schedule-10": {
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
exports.insertScheduleDB = functions.https.onRequest((req, res) => {
    const text = req.query.text;
    admin.database().ref('/schedules/day1').set(schedules_data).then(snapshot => {
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
          title: "GDG Uyo",
          body: "Test Notification",
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
       const payload = {notification: {
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