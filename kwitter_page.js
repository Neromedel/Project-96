//YOUR FIREBASE LINKS
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCZSISu1rnSbhmhy6jclStkI7n5j8upDI8",
    authDomain: "minecord-57d39.firebaseapp.com",
    databaseURL: "https://minecord-57d39-default-rtdb.firebaseio.com",
    projectId: "minecord-57d39",
    storageBucket: "minecord-57d39.appspot.com",
    messagingSenderId: "245657413681",
    appId: "1:245657413681:web:a0f64e2915b56bcfaf0d10"
  };
  firebase.initializeApp(firebaseConfig);

function send() {
    msg=document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
          name:user_name,
          message:msg,
          like:0
    });
    document.getElementById("msg")="";
}
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
       firebase_message_id = childKey;
       message_data = childData;

    } });  }); }
getData();
