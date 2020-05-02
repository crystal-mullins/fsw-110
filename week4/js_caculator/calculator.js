// Object.keys(window).forEach(key => {
//     if (/^on/.test(key)) {
//         window.addEventListener(key.slice(2), event => {
//             console.log(event.type);
//         });
//     }
// });
// You will have one section (<div>) for each math operation (so 3 sections) total
// Each section has two inputs to take the first and second numbers
// Each section will have a button to perform the operation
// You will inject the result into the HTML (not an alert)
// Your website will have 3 colors
// Your website will have proper padding/spacing to lay things out nicely

// var addNum1 = document.getElementById("num1")
// prompt("please enter a number");
// var customerName = prompt("Please enter your name", "<name goes here>");

// if (customerName!= null) {

//     document.getElementById("welcome").innerHTML =

//     "Hello " + customerName + "! How are you today?";

// }
// for (var i = 0; i < hello.length; i++){
//     nameList.innerHTML += "<h1>" + hello[i] + "</h1>"
// }

// var addN1 = prompt("What is your first number?",);
// var addN2 = prompt("What is your second number?","<number goes here>");



// for (var i = 0; i < a; i++){
    
//     document.getElementById("sum1").innerHTML =

//      sum1;

// }



// var subN1 = prompt("What is your first number?",);
// var subN2 = prompt("What is your second number?",);



// var mulN1 = prompt("What is your first number?","<number goes here>");
// var mulN2 = prompt("What is your socond number?","<number goes here>");

var add1 = document.getElementById("add1")

var addN1 = document.getElementById("num1")

function addition() {
    var x = Number(document.getElementById("num1").value);
    
    var y = Number(document.getElementById("num2").value);
    
    var z = document.getElementById("demo")
    console.log(z)
    var add = (x + y); 
z.textContent = add
console.log(add)
    
  }
add1.addEventListener("click", addition)

var subN1 = document.getElementById("num3")



function subtraction() {
    var x = Number(document.getElementById("num3").value);
   
    var y = Number(document.getElementById("num4").value);
    
    var z = document.getElementById("demo2")
    console.log(z)
    var sum = (x - y);
    z.textContent = sum
    console.log(subtraction)
  }

subtract.addEventListener("click", subtraction)

var mulN1 = document.getElementById("num5")


function multiplcation() {
    var x = Number(document.getElementById("num5").value);


    var y = Number(document.getElementById("num6").value);

    var z = document.getElementById("demo3")
    console.log(z)
    var sums = (x * y);
    z.textContent = sums
    console.log(sums)
  }
multiply.addEventListener("click", multiplcation)
