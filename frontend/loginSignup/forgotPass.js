let cancelBtn = document.querySelector("#cancelBtn");
cancelBtn.addEventListener("click", () => {
  window.location.href = "./login.html";
});

// getting data from form
let form = document.querySelector("form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log(form.email.value);
});

// checking email and sending otp

