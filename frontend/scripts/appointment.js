let details = JSON.parse(localStorage.getItem("profile"));
document.querySelector(".image").setAttribute("src", details.image);
document.querySelector(".name").innerText = details.teacherName;
document.querySelector(".subject").innerText = "Subject : - " + details.subject;

let form = document.querySelector("form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  let date = form.date.value;
  let time = form.time.value;
  bookSlot(date, time);
});

async function bookSlot(date, time) {
  let teacherID = JSON.parse(localStorage.getItem("profile"))._id;
  let studentID = localStorage.getItem("userID");
  let obj = { teacherID, studentID, date, time };

  let addSlot = await fetch("http://localhost:4500/teacher/bookSlot", {
    method: "PATCH",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(obj),
  });
  if (addSlot.status == 200) {
    alert("slot booked");
  } else {
    alert("something went wrong");
  }
}
