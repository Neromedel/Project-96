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
    user_name=localStorage.getItem("user_name");

    document.getElementById("user_name").innerHTML = "Welcome "+ user_name + "I";

    function addRoom() {
      room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child("room_name").update({
            purpose:"adding room name"
      });

      localStorage.setItem("room_name", room_name);

      window.location = "kwitter_page.html"
}
function getData() {
  firebase.database().ref("/").on('value', function(snapshot){
   document.getElementById("output").innerHTML = "";
   snapshot.forEach(function(childSnapshot) {
         childKey  = childSnapshot.key;
   Room_names = childKey;
  console.log("Room Name - " + Room_names);
  row= "<div class='room_name' id=" + Room_names + "onclick='redirectToRoomName(this.id)'#" + Room_names;
  document.getElementById("output").innerHTML += row;
  });
});

}

getData();

function redirectToRoomName(name) {
      console.log(name);
      localStorage.setItem("room_name",name);
      window.location = "kwitter_page.html";
}

function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html";
}
