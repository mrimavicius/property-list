"use strict"

const form = document.querySelector("form")
const BASE_URL = "https://robust-safe-crafter.glitch.me/"

const img = document.getElementById("img")
const price = document.getElementById("price")
const desc = document.getElementById("desc")
const city = document.getElementById("city")
const backButton = document.querySelector("section > button")

form.addEventListener("submit", function(e){
    e.preventDefault()

    // Įkeliam property
    if(!img.value || !price.value || !desc.value) return
    const data = {image: img.value, city: city.value, price: price.value, description: desc.value}

    fetch(BASE_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(res => res.json())
    .then(data => {
        alert(data.msg)
        window.location.href = "/property-list/index.html"
    })
    .catch(error => console.log(error.msg))
})

backButton.addEventListener("click", function(){
    window.location.href = "/property-list/index.html"
})