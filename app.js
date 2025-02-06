

let btn1 = document.getElementById("Btn1")
let btn2 = document.getElementById("Btn2")
let bulbOn = document.getElementById("Bulb1")
let bulbOf = document.getElementById("Bulb2")

function onbulb() {
    bulbOn.style.display = 'block';
    bulbOf.style.display = 'none';
}

function ofbulb() {
    bulbOn.style.display = 'none';
    bulbOf.style.display = 'block';
  }
  // let e =['Elephant','Egg','Eyes']
// let a2 =['Apple','Ant','Aeroplane','Ali',]
// let B =['Ball','Bilal','Bear','Bat',]
// let C =['Cat','Cup','Carrot','Computer']
// let D =['Desk','Dawood','Doll','Dinner']

// let arr = ['Computer','Bilal','Aeroplane','Elephant','Desk',];
// function btn1(abc) {
//   let ranName = Math.floor(Math.random() * arr.length);
//   document.getElementById("case").innerText = arr[ranName]
// }