"use strict"

//document.createElement()
//element.appendChild <-- You can append to *any* element (including ones you just created)
//element.classList.add("someClass")
//element.innerHTML = "something"/someVariable

let cardHolder=document.createElement("div")
cardHolder.classList.add("Holder")
document.body.appendChild(cardHolder)

let cars=[]
    cars.push({Reg:"FD11UXo",price:500,colour:"Silver",mileage:70000,make:"Fiat",model:"Panda"})
    cars.push({Reg:"JEEK120",price:3000000,colour:"Cornflower Blue",mileage:700,make:"Ford",model:"Fiesta"})
    cars.push({Reg:"XVD756",price:2100,colour:"White",mileage:456777,make:"Nissan",model:"Micra"})
    cars.push({Reg:"LOP240",price:1000,colour:"White",mileage:120000,make:"Toyota",model:"Prius"})
    cars.push({Reg:"WYDBB8",price:2332,colour:"Cream",mileage:338273,make:"Bentley",model:"Bentayga"})

for (let i=0; i < cars.length; i++){
    let card = document.createElement("div");
    card.className="card-holder"
    cardHolder.appendChild(card);

    let heading = document.createElement("h1");
    heading.classList.add("header");
    card.appendChild(heading); 
    heading.innerHTML=`${cars[i].make} ${cars[i].model}`
    
    let paragraph = document.createElement("p");
    card.appendChild(paragraph);
    paragraph.innerHTML=`Mileage: ${cars[i].mileage} Price: £${cars[i].price} Colour: ${cars[i].colour}`
    
}



























