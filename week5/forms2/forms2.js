const form = document.mylist

// mylist.addEventlistener("submit", (event) => {
//     event.preventDefault()
//     console.log(mylist.diet.value)

//     const checkedInputs = []
//     for(let i = 0; i < form.diet.length; i++){
//         if(form.diet[i].checked){
//         checkedInputs.push(form.diet[i].value)
//     }
// }
// console.log(form.destination.value)
// })
// var diet= form.elements[6].value
// console.log(diet)
console.log(form.elements[8].value)


form.addEventListener("submit", function(e){
    e.preventDefault()
    var firstName = document.mylist.firstName.value
    var lastName = document.mylist.lastName.value
    var age = document.mylist.age.value
    var diet;
    var Gender;
    // if (form.elements['vegan'].checked) {
    //     diet.pop(document.getElementById("vegan").value);
    if (form.elements[5].checked) {
         diet= form.elements[5].value

    }
    if (form.elements[6].checked) {
        diet= form.elements[6].value

    }
    if (form.elements[7].checked) {
         diet= form.elements[7].value

    }

  console.log(diet)

  if (form.elements[3].checked) {
    Gender= form.elements[3].value

}
if (form.elements[4].checked) {
   Gender= form.elements[4].value

}
console.log(Gender)

var location = form.elements[8].value
    alert("First Name: " + firstName + "\nLast Name: " + lastName + "\nAge: " + age + "\nGender: " + Gender + "\nTravel Location: " + location + "\nDiet: " + diet);
})
// event.preventDefault()
