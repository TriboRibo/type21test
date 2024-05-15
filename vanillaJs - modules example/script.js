const body = document.querySelector('body')

import create from "./moduleOne.js";
import updateColor from "./moduleTwo.js"
import updateYear from "./moduleFour.js"
import updateGasoline from "./moduleThree.js"

let arr = create()
arr = updateColor(arr)
arr = updateYear(arr)
arr = updateGasoline(arr)

arr.forEach(car =>  {
    body.innerHTML += `<div class="car p-2" style="background-color: ${car.color}">
        <div>Model: ${car.brand}</div>
        <div>Year: ${car.year}</div>
        <div>Fuel tyle: ${car.gasolineType}</div>
    </div>`
})