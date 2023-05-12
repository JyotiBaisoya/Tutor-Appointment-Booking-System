let username = localStorage.getItem("username");

let nav = document.querySelector("#nav");
if (username == null) {
  nav.innerHTML = null;
  nav.innerHTML = `<div>
          <a href="./index.html"
            ><img src="./learnmate-logo.png" alt="" id="logo"
          /></a>
        </div>
        <div id="navbtnDiv">
          <button id="navBtn">
            <a href="./pages/teachers.html">Tutors</a>
          </button>

          <button id="navBtn">Schedules</button>
          <button id="navBtn">
            <a href="./loginSignup/signup.html">Signup</a>
          </button>

          <button id="navBtn">
            <a href="./loginSignup/login.html">SignIn</a>
          </button>
        </div>

        <div id="hamburger">
          <img src="./images/menus.png" alt="" />
          <div id="hamBtn">
            <button id="navBtn">
            <a href="./pages/teachers.html">Tutors</a>
          </button>

          <button id="navBtn">Schedules</button>
          <button id="navBtn">
            <a href="./loginSignup/signup.html">Signup</a>
          </button>

          <button id="navBtn">
            <a href="./loginSignup/login.html">SignIn</a>
          </button>
          </div>
        </div>`;
} else {
  nav.innerHTML = null;
  nav.innerHTML = `<div>
          <a href="./index.html"
            ><img src="./learnmate-logo.png" alt="" id="logo"
          /></a>
        </div>
        <div id="navbtnDiv">
          <button id="navBtn">
            <a href="./pages/teachers.html">Tutors</a>
          </button>

          <button id="navBtn">Schedules</button>
          <button class="logoutBtn">Logout</button>
        </div>

        <div id="hamburger">
          <img src="./images/menus.png" alt="" />
          <div id="hamBtn">
            <button id="navBtn">
              <a href="./pages/teachers.html">Tutors</a>
            </button>

            <button id="navBtn">Schedules</button>
            <button class="logoutBtn">Logout</button>
          </div>
        </div>`;

  let logoutBtn = document.querySelector(".logoutBtn");
  logoutBtn.addEventListener("click", () => {
    localStorage.removeItem("username");
    window.location.href = "./index.js";
  });
}
