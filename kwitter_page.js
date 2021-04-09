//YOUR FIREBASE LINKS
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
    room_name = localStorage.getItem("room_name");

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
   console.log(firebase_message_id);
   console.log(message_data);
   name = message_data ["name"];
   message = message_data ["message"];
   like = message_data ["like"];
   name_withTag = "<h4>" + name + "<img class='user_tick' src='tick.png'></h4>";
   message_withTag = "<h4 class='message_h4'>" + message + "</h4>";
   likeButton = "<button class='btn btn-warning' id=" + firebase_message_id + "value = " + like + "onclick='updateLike(this.id)'>";
   span_withTag = "<span class='glyphicon glyphicon-thumbs-up'> Like: " + like + "</span></button><hr>";

   row = name_withTag + message_withTag + likeButton + span_withTag;
   document.getElementById("output").innerHTML += row;
//End code
      } });  }); }
getData();

function send() {
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({name: user_name, message: msg, like:0});
      document.getElementById("msg").value = "";
}

function updateLike(message_id) {
    console.log("Click on like button" + message_id);
    button_id = message_id;
    likes = document.getElementById(button_id).value;
    updatedLikes = Number(likes) + 1;
    console.log(updatedLikes);
    firebase.database().ref(room_name).child(message_id).update({like: updatedLikes});
}

function Logout() {
      window.location = "index.html";
}