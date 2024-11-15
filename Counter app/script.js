const count = document.querySelector(".count")
const subtract = document.querySelector(".subtract")
const reset = document.querySelector(".reset")
const add = document.querySelector(".add")

add.addEventListener("click",function(){
    count.innerHTML++
})
subtract.addEventListener("click",function(){
    count.innerHTML--
})

    reset.addEventListener("click", function(){
        count.innerHTML = 0
    })

function setColor(){
    //for (let i = 0; i < 0; i++)
}



//     for (let i = 0; i < 0; i++) {
//         if(????? i> 0) {
           
//         }else difrent color
//     }
