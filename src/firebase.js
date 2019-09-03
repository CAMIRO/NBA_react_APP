import * as firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCYp88wRQIahsd8MYjJ_rtgBqeWi4Z-OtQ",
    authDomain: "nba-full-3044b.firebaseapp.com",
    databaseURL: "https://nba-full-3044b.firebaseio.com",
    projectId: "nba-full-3044b",
    storageBucket: "nba-full-3044b.appspot.com",
    messagingSenderId: "572594782506",
    appId: "1:572594782506:web:ebad6e74d07eebda"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const firebaseDB = firebase.database();
  const firebaseArticles = firebaseDB.ref('articles');
  const firebaseTeams = firebaseDB.ref('teams');
  const firebaseVideos = firebaseDB.ref('videos');

  export {
      firebase,
      firebaseDB,
      firebaseArticles,
      firebaseVideos,
      firebaseTeams,
  }