var firebaseConfig = {
      apiKey: "AIzaSyAtfRPxjRe2vwVi0jgI_3GI8wDo1jNIS-E",
      authDomain: "kwitter-b4202.firebaseapp.com",
      databaseURL: "https://kwitter-b4202-default-rtdb.firebaseio.com",
      projectId: "kwitter-b4202",
      storageBucket: "kwitter-b4202.appspot.com",
      messagingSenderId: "920717109256",
      appId: "1:920717109256:web:de5eb39500a985ce10c9bd"
    };
   
    firebase.initializeApp(firebaseConfig);
  username= localStorage.getItem("user_name");
  roomname= localStorage.getItem("room_name");

  function Send(){
        msg_input= document.getElementById("mesageinput").value;
        firebase.database().ref(roomname).push({
              name:username,
              message:msg_input,
              likes:0
        });
        document.getElementById("mesageinput").value="";
  }
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;


//End code
      } });  }); }
getData();
