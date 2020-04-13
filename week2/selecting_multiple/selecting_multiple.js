var things = document.getElementsByClassName("things")
console.log(things)

for (var i = 0; i < things.length; i++){
    things[i].textContent = "** DEAD **"
}
box1.style.backgroundColor = "blue"