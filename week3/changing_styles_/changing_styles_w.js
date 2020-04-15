var fans = document.getElementById("header")
fans.style.textAlign = "center"
fans.style.fontSize = "20px"
fans.style.color = "cornflowerblue"
fans.style.fontFamily = "sans-serif"
fans.style.fontWeight = "lighter"
fans.style.backgroundColor = "pink"
// document.body.append(fans)

document.getElementById("border").classList.add("border")

var  fanArray =["John Mayer Fan Club","Share How His Music Has Helped You", "Leave a Comment"]

var newFanArray = document.getElementById("header")

for (var i = 0; i < fanArray.length; i++){
    newFanArray.innerHTML += "<h1>" + fanArray[i] + "</h1>"
}



var border = document.getElementById("border")

document.body.append(border)

// var newP3 = document.getElementById("one")
//  newP3.textContent = "Celebrate Creativity"
//  newP3.style.textAlign = "center"
//  newP3.style.fontSize = "30px"
//  newP3.style.color = "blue"
// document.body.append( newP3)

// var newP4 = document.getElementById("two")
//  newP4.textContent = "Dance Together"
//  newP4.style.textAlign = "center"
//  newP4.style.fontSize = "30px"
//  newP4.style.color = "purple"
// document.body.append( newP4)

// var newP5 = document.getElementById("three")
//  newP5.textContent = "Inspire Others"
//  newP5.style.textAlign = "center"
//  newP5.style.fontSize = "30px"
//  newP5.style.color = "orange"
// document.body.append( newP5)
