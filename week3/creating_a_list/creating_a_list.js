

// console.log("helloWorld")
// function helloJ(){
for (var i = 0; i < 10; i++){


    var hello = document.createElement("h1")
    document.body.append(hello)
    hello.textContent = "Hello John Mayer"
    hello.style.textAlign = "center"
    hello.style.fontSize = "30px"
    hello.style.color = "blue"
}



// for (var i = 0; i < 10; i++){
//     hello.innerHTML += "<h1>" + [i] 
//     // document.body.append(nameList[i])
   
// }

  

    
//     nameList.innerHTML += "<h2>" + nameList[i] + "</h2>"
    
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
var nameList = document.createElement("h1")
document.body.append(nameList)

for (var i = 0; i < name.length; i++){
    var newName = document.createElement("li")
    newName.textContent = name[i]
    nameList.append(newName)
    
}
// for (var i = 0; i < name.length; i++){
//     nameList.innerHTML += "<h1>" + name[i] + "</h1>"
// }