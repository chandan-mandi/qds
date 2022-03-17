import React from 'react';
import * as firebase from 'firebase';

var defaultFirebaseConfig = {
	apiKey: "AIzaSyAQa2W4kDr1JyewSSXWqCDDijEN1DPcxuE",
	authDomain: "qdsprowebsiteadmin.firebaseapp.com",
	databaseURL: "https://qdsprowebsiteadmin.firebaseio.com",
	projectId: "qdsprowebsiteadmin",
	storageBucket: "qdsprowebsiteadmin.appspot.com",
	messagingSenderId: "846377315055",
	appId: "1:846377315055:web:846ed4a2071667f14e091a",
	measurementId: "G-4LL22BT1YG"
};

var mockTestAppConfig = {
    apiKey: "AIzaSyBv5udJinzQ3M0We8Jy-_jmsGKplY13ZTs",
    authDomain: "qdspromocktest.firebaseapp.com",
    projectId: "qdspromocktest",
    storageBucket: "qdspromocktest.appspot.com",
    messagingSenderId: "225481187785",
    appId: "1:225481187785:web:777037e1bff4edb5444818",
    measurementId: "G-BH6LXY62DV"
  };

  // Initialize Firebase
  
  var alreadyInitialized = false
  
  if(firebase.apps.length  === 0)
  {
    var defaultApp = firebase.initializeApp(defaultFirebaseConfig);
    var mockTestApp = firebase.initializeApp(mockTestAppConfig, "mockTest"); 
  }
  else
  { 
      
    const loopOverApps = firebase.apps.map((fireApp) => {

      if(fireApp.name === "mockTest")
      {
        alreadyInitialized = true;
      }

    });

    if (alreadyInitialized) 
    {
      var mockTestApp = firebase.app("mockTest"); // if already initialized, use that one
    }
    else 
    {
      var mockTestApp = firebase.initializeApp(mockTestAppConfig, "mockTest");    
    }  

  }

 
  // console.log("Apps Length:", firebase.apps.length);
  // console.log("Apps: ", firebase.apps);

  
//firebase.analytics();

export const mockTestFireStore = mockTestApp.firestore();

export const firebasestore = mockTestApp.firestore;

// export const mockTestStorage = mockTestApp.storage("gs://qdspromocktest.appspot.com");

// console.log(mockTestStorage);

function FireStore(props)
{
  return(
    <div>FireStore</div>
  );
}

export default FireStore;