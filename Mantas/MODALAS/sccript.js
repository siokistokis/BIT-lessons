const btn = document.querySelector(".btn")
const close = document.querySelector(".close")
const modal = document.querySelector(".modal")
const modalContent = document.querySelector(".modalContent")

btn.addEventListener("click", openModal)
close.addEventListener("click", closeModal)
modal.addEventListener("click",closeModal)

function openModal() {
    modal.style.display = "block"
}
function closeModal() {
    modalContent.classList.add("slideUp")

setTimeout(()=> {
    modalContent.classList.remove("slideUp")
    modal.style.display = "none"
}, 700)
}