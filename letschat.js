function adduser () {
    var username= document.getElementById("user_name").value
    localStorage.setItem("name" , username)
    window.location="letschat_room.html"
} 