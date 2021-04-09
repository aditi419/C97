
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
  apiKey: "AIzaSyDzBcHDhmLXlxvFi7Hlh6VvcyS40Qu5tyo",
  authDomain: "class-93-87c4f.firebaseapp.com",
  databaseURL: "https://class-93-87c4f-default-rtdb.firebaseio.com",
  projectId: "class-93-87c4f",
  storageBucket: "class-93-87c4f.appspot.com",
  messagingSenderId: "887702735283",
  appId: "1:887702735283:web:62d562ae9de650591c63c6"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("room_name" + Room_names);
      row = "<div class='room_name' id=" + Room_names + "onclick='redirectToRoomName(this.id)'>#" + Room_names + "</div><hr>"
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

function addRoom() {
    room_name = document.getElementById("room_name").value;
    firebase.database().ref("/").child(room_name).update({purpose: "Add Room Name"});
    localStorage.setItem("room_name", room_name);
    window.location = "kwitter_page.html";
}
function redirectToRoomName(name) {
    console.log(name);
    localStorage.setItem("room_name", room_name);
    window.location = "kwitter_page.html";
}

function Logout() {
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location = "index.html";
}
