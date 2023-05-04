var button = document.getElementById("button-container");
var student = document.getElementById("student");
var tutor = document.getElementById("tutor");
var buttonTrack = document.getElementById("stuButton");

var where = document.getElementById("for-button");

var buttonState = true;

button.addEventListener("click", function () {
  if (buttonState) {
    document.getElementById("stuButton").style.transform = "translateX(139px)";
    buttonState = false;
    student.innerText = "Tutor";
    tutor.innerText = "Student/Parent";
    tutor.style.transform = "translateX(-139px)";
    // where.value = "Tutor";
    buttonTrack.style.borderRadius = "0px 20px 20px 0px";
  } else {
    document.getElementById("stuButton").style.transform = "translateX(0px)";
    buttonState = true;
    student.innerText = "Student/Parent";
    tutor.innerText = "Tutor";
    tutor.style.transform = "translateX(0px)";
    // where.value = "Student/Parent";
    buttonTrack.style.borderRadius = "20px 0px 0px 20px";
  }
});
