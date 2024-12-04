const p = document.querySelector("p")
const btn = document.querySelector("button")
const url = "https://api.chucknorris.io/jokes/random"

btn.addEventListener("click", getJoke)

function getJoke() {
    fetch(url).then(response => response.json()).then(data => p.innerText = data.value)
}