// make the box disapear when the user clicks it

// var box = document.getElementbyId("red-box")
// document.getElementById("box")
// .addEventListener("dblclick", function() {
//     box.style.backgroundColor = "green"
//     // document.body.append("box")
// })

var box = document.querySelector(".red-box")
const dissapear = () => box.style.display = "none"
box.addEventListener("click", dissapear)
    
    // box.remove("red-box")
    // box.parentNode.removeChild("red-box");
    console.log("hello")
