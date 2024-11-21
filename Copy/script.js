const btn = document.querySelector(".btn")
const input = document.querySelector("input")

btn.addEventListener("click",(e)=> {
    e.preventDefault();
    //console.log(navigator)
navigator.clipboard.writeText(input.value).then(()=> {
    btn.innerText = "Copied"
    setTimeout(()=> {
        btn.innerText = "Copy";
    }, 3000)
})

})