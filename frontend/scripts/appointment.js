let details=JSON.parse(localStorage.getItem("profile"));
    document.querySelector(".image").setAttribute("src",details.image);
    document.querySelector(".name").innerText=details.teacherName;
    document.querySelector(".subject").innerText="Subject : - "+details.subject;
    

let form=document.querySelector("form")
form.addEventListener("submit",(e)=>{
    e.preventDefault()
    console.log(form.date.value)
    console.log(form.time.value)
})