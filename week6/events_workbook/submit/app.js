// The "submit" event refreshes your browser by default
// use "e.preventDefault()" in the first line of your callback function to prevent this
// remember to pass "e" into the callback function
// console.log(newClient.elements[8].value)
var newClient = document.getElementById("newClient")
 
newClient.addEventListener("submit", function(e){
    e.preventDefault()
    var name = newClient.name.value
    var email = newClient.email.value
    var age = newClient.age.value
    var num1 = newClient.num1.value
    var address = newClient.address.value
    
    var subscribe 
    // if (newClient.elements['vegan'].checked) {
    //     diet.pop(document.getElementById("vegan").value);
    

  console.log(newClient)

  if (newClient.elements[6].checked) {
    subscribe = "member Subscribe true "

}
if (newClient.elements[7].checked) {
    subscribe = "member Subscribe false "

}
console.log(newClient.elements[8])

// var newClientOutput = newClient.elements[8].value
// 8 = button
    alert(" Name: " + name + "\nemail: " + email + "\nAge: " + age + "\nsubscribe: " + subscribe + "\nphone number " + num1 + "\naddres " + address);
    window.location.reload()
})
