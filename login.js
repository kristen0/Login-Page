function validate(){
 
    var username=document.getElementById("username").value;
    var password=document.getElementById("password").value;

    if(username=="Admin" && password=="otaku"){
        alert("login succesfully");
        return false;
    }
    else{
        alert("login failed");
    }
}