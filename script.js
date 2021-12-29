"use strict";
class Car {
    constructor(make, model, colour, mileage, price) {
        this.make = "";
        this.model = "";
        this.colour = "";
        this.mileage = 0;
        this.price = 0;
        this.make = make;
        this.model = model;
        this.colour = colour;
        this.mileage = mileage;
        this.price = price;
    }
}
let cardHolder = document.createElement("div");
cardHolder.classList.add("Holder");
document.body.appendChild(cardHolder);
let cars = JSON.parse(localStorage.getItem("cars"));
if (cars == null) {
    cars = [
        { price: 500, colour: "Silver", mileage: 7000, make: "Fiat", model: "Panda" },
        { price: 3000, colour: "Blue", mileage: 700, make: "Ford", model: "Fiesta" },
        { price: 2100, colour: "White", mileage: 45677, make: "Nissan", model: "Micra" },
        { price: 1000, colour: "White", mileage: 12000, make: "Toyota", model: "Prius" },
        { price: 2332, colour: "Cream", mileage: 33827, make: "Bentley", model: "Bentayga" }
    ];
}
cardGenerator();
function cardGenerator() {
    cardHolder.innerHTML = "";
    for (let i = 0; i < cars.length; i++) {
        let card = document.createElement("div");
        card.className = "card-holder";
        cardHolder.appendChild(card);
        let heading = document.createElement("h1");
        heading.classList.add("header");
        card.appendChild(heading);
        heading.innerHTML = `${cars[i].make} ${cars[i].model}`;
        let paragraph = document.createElement("p");
        card.appendChild(paragraph);
        paragraph.innerHTML = `Mileage: ${cars[i].mileage} 
        Price: £${cars[i].price} 
        Colour: ${cars[i].colour}`;
    }
}
function saveCars() {
    let carsString = JSON.stringify(cars); // converts array into string
    localStorage.setItem("cars", carsString); // permanently save database on site  
}
cars.push(new Car("BMW", "i3", "blue", 2000, 3000));
let save = document.getElementById("Save");
save.addEventListener("click", newCar);
function newCar() {
    let make = document.getElementById("make").value;
    let model = document.getElementById("model").value;
    let colour = document.getElementById("colour").value;
    let mileage = document.getElementById("mileage").value;
    let price = document.getElementById("price").value;
    let newCar = { make: make, model: model, colour: colour, mileage: mileage, price: price };
    cars.push(newCar);
    cardGenerator();
    saveCars();
}
//# sourceMappingURL=script.js.map