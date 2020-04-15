var hello = document.getElementById("helloWorld")
hello.style.textAlign = "center"
hello.style.fontSize = "30px"
hello.style.color = "blue"
document.body.append(hello)

var nameList = document.getElementById("helloWorld")
for (var i = 0; i < hello.length; i++){
    nameList.innerHTML += "<h1>" + hello[i] + "</h1>"
}


// for (var i = 0; i < 10; i++){
    
//     nameList.innerHTML += "<h1>" + hello[i] + "</h1>"
    
// }
const name = [
    "steve",
    "larry",
    "joe",
    "shirley",
    "steph",
    "nate",
    "rick",
    "emily"
]

// for (var i = 0; i < name.length; i++){
//     var newName = document.createElement("li")
//     newName.textContent = name[i]
//     nameList.append(newName)
    
// }
for (var i = 0; i < name.length; i++){
    nameList.innerHTML += "<h1>" + name[i] + "</h1>"
}