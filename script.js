"use strict"

const addProperty = document.getElementById("addProperty")
const BASE_URL = "https://robust-safe-crafter.glitch.me/"
const app = document.getElementById("app")
const buttons = document.querySelectorAll(".filter-buttons > button")

addProperty.addEventListener("click", function(){
    window.location.href = "/property-list/add.html"
})

fetch(BASE_URL)
.then(res => res.json())
.then(data => {
    // Pirmas užkrovimas
    createObjects(data)

    // Filtravimas
    filterObjects(data)
})

// Objektų filtravimas
function filterObjects(data) {
    for(var x of buttons){
        x.addEventListener("click", function(){
            for(var y of buttons){
                y.classList.remove("clicked")
            }
            app.innerHTML = ""

            if(this.textContent != "Visi"){
                let results = data.filter(x => x.city == this.textContent)
                createObjects(results)
                this.classList.add("clicked")
            } else {
                createObjects(data)
                this.classList.add("clicked")
            }
        })
    }
}

// Sukuria išfiltruotus objektus
function createObjects(data) {
    data.forEach(x => {
        const properties = document.createElement("div")
        properties.classList.add("card")
        properties.innerHTML =
        `
        <img src="${x.image}" alt="">
        <div class="card-info">
        <h2>€ ${x.price}</h2>
        <p>${x.city}</p>
        <span>${x.description}</span>
        </div>
        `
        app.append(properties)       
    })
}