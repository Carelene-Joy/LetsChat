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


username= localStorage.getItem("name")
 roomname=localStorage.getItem("room")
console.log(roomname)
 function send () {
var message= document.getElementById("msg").value
firebase.database().ref(roomname).push({
  name:username,
  message:message,
  likes:0
})
document.getElementById("msg").value=""

}

function getData() { 

  firebase.database().ref("/"+roomname).on('value', function(snapshot) { 
    document.getElementById("output").innerHTML = ""; 
    snapshot.forEach(function(childSnapshot) { 
      childKey  = childSnapshot.key; childData = childSnapshot.val(); 
      
      if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
console.log(firebase_message_id)
 console.log(message_data)     
name=message_data["name"] 
message=message_data["message"] 
likes=message_data["likes"] 
//End code
nametag="<h2>"+name+"<img class='user_tick' src='tick.png'> </h2>"
messagetag="<h4 class='message_h4'>"+message+"</h4>"
liketag="<button class='btn btn-primary' id="+firebase_message_id+" value="+ likes + " onclick='updatelikes(this.id)'>"
spantag="<span class='glyphicon glyphicon-thumbs-up'>Likes: "+likes+"</span> </button> <hr>"
var row= nametag+messagetag+liketag+spantag
document.getElementById("output").innerHTML+=row
      } 
    });  
  }); 
 }


getData();
//whatever you give inside the round brackets of the defining function- that is the parameter
//whatever you give inside the round brackets of your calling function is called as the argument

function updatelikes(message_id) {
console.log(message_id)
var buttonid=message_id
var like=document.getElementById(buttonid).value
var likeupdate=Number(like)+1
firebase.database().ref(roomname).child(message_id).update({
  likes:likeupdate
})
}

function logout () {
  localStorage.removeItem("name")
  localStorage.removeItem("room")
window.location="index.html"
}
