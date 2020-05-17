const location2 = document.querySelector(".red-box")

// function printMousePos(event) {
    
//     document.body.textContent =
//       "clientX: " + event.clientX +
//       " - clientY: " + event.clientY;
//       document.addEventListener("pointermove", printMousePos);
  
//   }
 location2.addEventListener("pointermove", (event) => {
    var clientX = event.clientX
    var clientY = event.clientY
     location2.textContent = `X: ${clientX} , Y:${clientY}`
 })

//   myPics.addEventListener('mousemove', e => {
//     if (isDrawing === true) {
//       drawLine(context, x, y, e.offsetX, e.offsetY);
//       x = e.offsetX;
//       y = e.offsetY;
//     }
//   });
  
  