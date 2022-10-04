// var a = 1;
// let b = 2;
// const c = 3;

// if (true) {
//   var a = 4;
//   let b = 5;
//   const c = 6;
//   console.log("If Scope: ", a, b, c); //4,5,6
// }
// console.log("Global Scope: ", a, b, c);//4,2,3

// var a = 1;
// let b = 2;
// const c = 3;

// for(let b = 0; b<10; b++){
//     console.log('Loop: ',b) //9
// }

// console.log("Global Scope: ", a, b, c); // 1,2,3

var a = 5;
let b = 2;
const c = 3;

for (var a = 0; a < 10; a++) {
  console.log("Loop: ", a); //0-9
}

// console.log("Global Scope: ", a, b, c);//10,2,3

localStorage.setItem("name", "Sofía");
// // localStorage.name = 'Sofía'
localStorage.surname = "La Profe";

// let firstName = localStorage.getItem('name')
// console.log(firstName)

// let lastName  = localStorage.surname;
// console.log(lastName)

// localStorage.removeItem('name')

// localStorage.clear()

// guardar a Sergio en el local Storage
localStorage.setItem("name", "Sergio");

let test = localStorage.getItem("name");
console.log(test);

// localStorage.removeItem('name')

for (let i = 0; i < localStorage.length; i++) {
  let key = localStorage.key(i);
  console.log(`${key}: ${localStorage.getItem(key)}`);
}

const person = {
  username: "Ivan",
  password: "contraseñajaja",
};

localStorage.setItem("user", JSON.stringify(person));

const user = JSON.parse(localStorage.getItem("user"));
console.log(user);

let personajesAnime = ["Levi", "Mikasa", "Zoro", "Luffy", "Tanjiro", "Nezuko"];

localStorage.setItem("anime", JSON.stringify(personajesAnime));

let data = JSON.parse(localStorage.getItem("anime"));

console.log("Mi array", data);

const botoncito = document.getElementById("botoncito")
const firstName = document.getElementById("firstName")

function test2(e) {
    e.preventDefault()
    console.log(firstName.value)
    localStorage.setItem("firstName",firstName.value)
}

botoncito.addEventListener('click',test2)
