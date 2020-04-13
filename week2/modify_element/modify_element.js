// innerHTML - security risk
 //innerText - "expensive"
  // textContent

//   var person = {name: "John"}
//   person.name = "Mayer"
//   console.log(person) 
var text = document.getElementById("text").textContent          
document.getElementById("place").textContent = text 
// getElementById(place).textContent = "** text **"        