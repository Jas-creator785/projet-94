const firebaseConfig = {
  apiKey: "AIzaSyCnGQ0488U4B47OGNdE3CvaIRSC4_LJ1Xo",
  authDomain: "project-93-22b1e.firebaseapp.com",
  databaseURL: "https://project-93-22b1e-default-rtdb.firebaseio.com",
  projectId: "project-93-22b1e",
  storageBucket: "project-93-22b1e.appspot.com",
  messagingSenderId: "1015250738309",
  appId: "1:1015250738309:web:3b676a1a597b1d39995dec",
  measurementId: "G-NXGJBYBBNL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

function room(){
  document.getElementById("room").Value;
  firebase.database().ref("/").child.(room).update({
noodles:"spicy"
  })
}