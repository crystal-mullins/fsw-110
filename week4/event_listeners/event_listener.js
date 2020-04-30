
// Object.keys(window).forEach(key => {
//     if (/^on/.test(key)) {
//         window.addEventListener(key.slice(2), event => {
//             console/log(event.type);
//         });
//     }
// });
// build a box that;
// Blue when the mouse hovers over the square
// Red when the mouse button is held down over the square
// Yellow when the mouse button is let go over the square
// Green when the mouse is double clicked in the square
// Orange when the mouse scroll is used somewhere in the window (not just over the square).



var box = document.getElementById("box")

// document.body.append(box)

// var header = document.getElementById("header")

document.getElementById("box")
.addEventListener("dblclick", function() {
    box.style.backgroundColor = "green"
    // document.body.append("box")
})
box.addEventListener("click", function() {
    box.style.backgroundColor = "red"
    // document.body.append("box")
})
box.addEventListener("pointerlockchange", function() {
    box.style.backgroundColor = "yellow"
    // document.body.append("box")
})
box.addEventListener("wheel", function() {
    box.style.backgroundColor = "orange"
    // document.body.append("box")
})
box.addEventListener("mouseover", function() {
    box.style.backgroundColor = "blue"
    // document.body.append("box")
})


// var box = document.getElementById("box")
// box.style.textAlign = "center"
// box.style.fontSize = "30px"
// document.body.append(box)


// function handelBoxClick(){
//     console.log("The box was clicked!")
// }
// box.addEventListner("click", handelBoxClick)


