
var input = document.getElementById("change-me");
// select our input by ID and assign it to the variable, "input"

// use the add event listener method to put an event on "input"
// "change" is one of a few dozen strings and add event listener will understand. It's our first argument 
input.addEventListener("change", function(e){ // we pass an entire function as the second argument. 
    document.getElementById("output").textContent = e.target.value
    // select the div, and change the "textContent" property to the value of the events target (the input box)
})
