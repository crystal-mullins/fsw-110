

document.userInfo.addEventListener("submit", function(e){
    e.preventDefault()
    var firstName = document.userInfo.firstName.value
    var lastName = document.userInfo.lastName.value
    var age = document.userInfo.age.value
  
    alert(firstName + " " + lastName + " " + age + " Is your New-User")
    console.log(alert)
})
event.preventDefault()


// 
// document.animals.favorite.value
// document.animals.addEventListener("submit", function(e){
//     e.preventDefault()
//     //assign our animals that are liked to a variable
//     var animals = document.animals.likes
//     //create a new array that we can fill with the values (as strings) of our checkboxes
//     var checkedAnimals = []
//     //loop through each checkbox
//     for (var i = 0; i < animals.likes.length; i++){
//       //check to see if the checkbox is checked
//       if(animals[i].checked){
//         //add the values to our new array
//         checkedAnimals.push(animals[i].value)
//       }
//     }
//     console.log(checkedAnimals)
//   })


// //   another way
//   document.animals.addEventListener("submit", function(e){
//     e.preventDefault()
//     var checkedAnimals = [];
//     var checkedBoxes = document.querySelectorAll("input[name=likes]:checked");
//     for (var i = 0; i < checkedBoxes.length; i++) {
//         checkedAnimals.push(checkedBoxes[i].value);
//     }
//     console.log(checkedAnimals)
// });
// var form = document.getElementByID("arline-form");
// var submit = document.getElementByID(submit);
// var query = document.querySelector;

// function formAlert() {
//     var firstName = form.elements["firstName"].value;
//     var lastName = form.elements["lastName"].value;
//     var age = form.elements["age"].value;
//     var gender = form.elements["gender"].value;
//     var location = form.elements["travel-location"].value;
//     // var diet = form.elements[];
//     // if (form.elements['vegan'].checked) {
//     //     diet.pop(document.getElementById("vegan").value);
//     if (form.elements['vegan'].checked) {
//         diet.push(document.getElementById('vegan').value);
//     }
//     if (form.elements['gluten'].checked) {
//         diet.push(document.getElementById('gluten').value);
//     }
//     if (form.elements['paleo'].checked) {
//         diet.push(document.getElementById('paleo').value);
//     }


//     alert("First Name: " + firstName + "\nLast Name: " + lastName + "\nAge: " + age + "\nGender: " + gender + "\nTravel Location: " + location + "\nDiet: " + diet + "\nAwesome, now if you die, it won't be an accident..");
// }


// submit.addEventListener("click", formAlert);