// console.log ("Hello world")
// alert("Notifikasi")
// prompt("dwika")

// var Promnet = "coding is easy"
// console.log(Promnet)
// var Promnet = "coding not easy"
// console.log(Promnet)

// let Promnet = "coding is easy"
// console.log(Promnet)
// Promnet = "coding not easy"
// console.log(Promnet)

// const Promnet = "coding is easy"
// console.log(Promnet)
// Promnet = "coding not easy"
// console.log(Promnet)

// let x = 6;
// let y = 3;

// console.log(x<10 && y>1)
// console.log(x<10 && y < 1)
// console.log(x==5||y==5)
// console.log(x==6||y==5)
// console.log(!(x==y))

// let p = document.querySelector("p")
// let button = document.querySelector("button")
// let input = document.querySelector("input")

// button.addEventListener('click', function(){
//     let isi = input.value
//     console.log(isi)
//     p.innerHTML = isi
//     // p.innerText = isi
// })

let button = document.querySelector("#tombol_form");
let input = document.querySelector("#input_form");
let listContainer = document.querySelector("#list-container");
let ul = document.querySelector("#list-container");

ul.style.listStyleType = "none";

button.addEventListener('click', function(){
    let isi = input.value;
    console.log(isi);

    let listItem = document.createElement("li");
    let checkbox = document.createElement("input");

    checkbox.type = "checkbox";
    let label = document.createElement("label");

    label.textContent = " " + isi;
    let deleteButton = document.createElement("button");
    
    deleteButton.textContent = " x";
    checkbox.addEventListener('change', function() {
        if (checkbox.checked) {
            label.style.textDecoration = "line-through";
        } else {
            label.style.textDecoration = "none";
        }
    });

    deleteButton.addEventListener('click', function() {
        listItem.remove();
    });

    listItem.appendChild(checkbox);
    listItem.appendChild(label);
    listItem.appendChild(deleteButton);

    listContainer.appendChild(listItem);

    input.value = "";
});