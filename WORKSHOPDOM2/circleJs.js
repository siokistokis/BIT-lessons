function rand(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFlored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored = minCeiled + 1) + minCeiled)
}

function randomColor() {
    return (
        "#" +
        Math.floor(Math.random() * 16777215)
            .toString(16)
            .padEnd(6, "0")
    );
}

// 10. uzdavini atlikite atskirame html faile. visame ekrane atsitiktine tvarka ismeykite 444 pusiau permatomus atsitiktines spalvos ir atsitiktinio skersmens nuo 44 iki 144 px

const totalCircles = 444;
let circles = ""
    for (let i = 0; i < totalCircles; i++) {
        const diameter = rand(44, 144);
        const color = randomColor();
        const top = rand(0, window.innerHeight- diameter);
        const left = rand(0,window.innerWidth- diameter);
    circles += `<div style="
    position: absolute;
    width: ${diameter}px;
    height: ${diameter}px;
    background-color: ${color};
    opacity: 0.5;
    top: ${top}px;
    left: ${left}px;
    border-radius: 50%;
    "></div>`

    }
document.boody.innerHTML = circles;
//console.log(window.innerHeight, window.innerWidth);