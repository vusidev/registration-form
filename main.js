function validate() {
var fname = document.getElementById("fname");
if (fname.value.trim()  == "") {
document.getElementById("error1").innerHTML = "Please fill this field";
document.getElementById("fname").style.borderColor = "red";
return false;
} else {
document.getElementById("error1").innerHTML = "";  
   }

var lname = document.getElementById("lname");
if (lname.value.trim() == "") {

document.getElementById("error2").innerHTML = "Please fill this field";
document.getElementById("lname").style.borderColor = "red";
return false;
} else {
document.getElementById("error2").innerHTML = "";    
   }

var email = document.getElementById("email").value;
     var atpos = email.indexOf("@");
    var dotpos = email.lastIndexOf(".");
    if (atpos < 2 || dotpos < atpos +2 || dotpos+2>=email.length)      {
document.getElementById("error3").innerHTML = "Please enter valid email";
document.getElementById("email").style.borderColor = "red";
return false;
} else {
document.getElementById("error3").innerHTML = "";
}
var pwd = document.getElementById("pwd");
 if (pwd.value.trim()  == "" || pwd.value.length < 4) {

document.getElementById("error4").innerHTML = "Please enter  password";
document.getElementById("pwd").style.borderColor = "red";
return false;
} else {
document.getElementById("error4").innerHTML = "";
}
var pwd2 = document.getElementById("pwd2");
if (pwd2.value.trim() !== pwd.value.trim()) {
document.getElementById("error5").innerHTML = "Password doesn't match";
document.getElementById("pwd2").style.borderColor = "red";
return false;
} else {
document.getElementById("error5").innerHTML = "";
}


var agree = document.getElementById("agree").checked;
if (agree == "") {
document.getElementById("error7").innerHTML = "Please select  this option";
return false;
} else {
document.getElementById("error7").innerHTML = "";
}
return true;
}

