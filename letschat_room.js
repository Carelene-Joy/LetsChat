var firebaseConfig = {
    apiKey: "AIzaSyAzptC-YrSM2WkNRjNPL8wd_Se2Jr8moc0",
    authDomain: "letschat-19eec.firebaseapp.com",
    projectId: "letschat-19eec",
    storageBucket: "letschat-19eec.appspot.com",
    messagingSenderId: "909696511616",
    appId: "1:909696511616:web:c714717583745048aec065"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

var username= localStorage.getItem("name")
document.getElementById("greeting").innerHTML="Welcome "+username+" !"



/*function getData() {
      firebase.database().ref("/").on('value', function(snapshot) {
            document.getElementById("output").innerHTML = "";
            snapshot.forEach(function(childSnapshot) {
                  childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log(Room_names)
      var row=   "<div class='room_name' id='"+Room_names+"' onclick='gotoroom(this.id)'>" + Room_names + 
      "</div> <hr>"
      document.getElementById("output").innerHTML+=row
   //End code
      });});}
getData();*/



// .ref= reference to the location in database
// /= refers to database itself.
// .update= update key value pair under a folder
function addroom () {
var roomname= document.getElementById("room_name").value
firebase.database().ref("/").child(roomname).update({
      purpose:"adding the room "
})

localStorage.setItem("room" , roomname)
// window.location="kwitter_page.html"

}

/* function gotoroom (roomname) {
      localStorage.setItem("room", roomname)
window.location="kwitter_page.html"
}*/
   
function logout () {
      localStorage.removeItem("name")
      localStorage.removeItem("room")
window.location="letschat.html"
}