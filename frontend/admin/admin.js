
let Dat ;
async function getData() {
 
  
 
      try {
          let res = await fetch("http://localhost:4500/teacher/getall", {
              method: "GET",
              headers: {
                  "Content-Type": "application/json",
                  
                  
              },
              
          })
          let data = await res.json();
          console.log(data);
          Dat=data;
          showTeacher(data);
      } catch (error) {
          console.log(error);
      }
     

  
}
getData();


function showTeacher(Data){
   let teachers = Data.map((item)=>{
      return `
      <tr>
        <td>
          <h4>${item._id}</h4>
        </td>
        <td>
          <h4>${item.name}</h4>
        </td>
        <td>
          <h4>${item.experience}</h4>
        </td>
        <td>
          <h4>${item.qualification}</h4>
        </td>
        
      </tr>
      `
   })

   document.getElementById("teachers").innerHTML=teachers.join(" ")
}

function searchteacher(){
    let q=document.querySelector(".searchteacher").value;
    
    let newdata=Dat.filter(function(elem){
        return elem.qualification.toLowerCase().includes(q.toLocaleLowerCase());
    });
  console.log(newdata)
    showTeacher(newdata);
}