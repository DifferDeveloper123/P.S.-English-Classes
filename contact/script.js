var wname = document.getElementById("wname");
var subject = document.getElementById("subject");
var email = document.getElementById("email");
var message = document.getElementById("message");
var error_message = document.getElementById("error_message");
var nam = document.getElementById("name");

var ready = false;

function verifye(email) {
  var re = /\S+@\S+\.\S+/;
  if (re.test(email.value) == true) {
    e = true;
    error_message.style.padding = "0px";
    error_message.textContent = "";
  } else {
    error_message.style.padding = "10px";
    error_message.textContent = "Enter correct email address";
    e = false;
  }
}

var q = false, w = false, e = false, t = false, y = false;

var text;

function vali(val, p, g) {
  var g = g;
  if (val.value == "") {
    g = false;
    text = p;
    error_message.style.padding = "10px";
    error_message.textContent = text;
    return false;
  } else if (val.value !== "") {
    g = true;
    return true;
  }
}

function check() {

  verifye(email);
  if (vali(message, "Enter your message", y)) {
    y = true;
  } else {
    y = false;
  };
  if (vali(subject, "Enter the subject of message", t)) {
    t = true;
  } else {
    t = false;
  };
  if (vali(wname, "Enter your ward's name", w)) {
    w = true;
  } else {
    w = false;
  };
  if (vali(nam, "Enter your name", q)) {
    q = true;
  } else {
    q = false;
  };

  if (q == true && w == true && e == true && t == true && y == true) {
    sendMail();
    return true
  }
}

function sendMail() {
  Email.send({
    SecureToken: "5a87715b-f4e5-40ff-b76d-a65cf3c4d85e",
    To: 'prabhanjansinghps@gmail.com',
    From: "P.S. English Classes <classes.psenglish@gmail.com>",
    Subject: subject.value,
    Body: "This message is sent by " + nam.value + ". His/her child name is " + wname.value + ". The email is " + email.value + ". The message is " + message.value
  }).then(
    message => alert(message)
  );
}