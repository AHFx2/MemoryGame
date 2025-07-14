let splash = document.querySelector(".control-buttons");
const boxesContainer = document.querySelector("main");
let boxes = Array.from(boxesContainer.children);
splash.querySelector("span").onclick = () => {
    let userName = "";
    do {
        userName = prompt("Enter Ur Name");

    } while(userName == "" || userName == null || !isNaN(userName))
    setPlayerName(userName);

    splash.remove();
}

function setPlayerName(name) {
    document.querySelector(".name span").innerHTML = name.trim();
    document.querySelector(".tries span").innerHTML = "0";
}




function shfulBoxes() {
    boxes.forEach((box, i) => {
        box.style.order = `${Random(0, boxes.length - 1)}`;
        box.addEventListener("click", () => flip(box));
    })
}

shfulBoxes();

function flip(e) {
    
    e.classList.add("flip");
    let flipedBlicks = boxes.filter(x => x.classList.contains("flip"));
    if (flipedBlicks.length % 2 === 0) {
        stopClicking();
        checkMatchedBoxes(flipedBlicks[0], flipedBlicks[1]);
    }
}

function checkMatchedBoxes(box1, box2) {
    let tries = document.querySelector(".tries span");
    if (box1.dataset.techno === box2.dataset.techno) {
        box1.classList.remove("flip");
        box2.classList.remove("flip");
        
        box1.classList.add("matched");
        box2.classList.add("matched");

        document.querySelector("#success").play();
    }
    
    else {
        tries.innerHTML = parseInt(tries.innerHTML) + 1;

        setTimeout(() => {
            box1.classList.remove("flip");
            box2.classList.remove("flip");    
        }, 1000);
        document.querySelector("#wrong").play();
        
    }
}

function stopClicking() {
    boxesContainer.classList.add("stop-clicking");

    setTimeout(() => {
        boxesContainer.classList.remove("stop-clicking")
    }, 1000);
}


function Random(from, to) {
    return Math.floor(Math.random() * to) + from;
}