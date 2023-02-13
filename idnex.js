const right = document.querySelector(".right")
const wrong = document.querySelector(".wrong")
const wrong1 = document.querySelector(".wrong1")
const next = document.querySelector(".next")
let first = document.querySelector(".first")
let second = document.querySelector(".second")
let third = document.querySelector(".third") 
count = 0

function rightBtn(){
    right.style.backgroundColor = "green"
    next.style.backgroundColor = "green"
    count = 1
}

function wrongBtn(){
    wrong.style.backgroundColor = "red"
}

function wrongBtn1(){
    wrong1.style.backgroundColor = "red"
}

function nextBtn(){
    if(count === 1) {
        first.style.display = "none"
        second.style.display = "block"
    } 
}

const swori = document.querySelector(".swori")
const araswori = document.querySelector(".araswori")
const araswori1 = document.querySelector(".araswori1")
const shemdegi = document.querySelector(".shemdegi")
const meore = document.querySelector(".meore")
 tvla = 0

function sworiBtn(){
    swori.style.backgroundColor = "green"
    shemdegi.style.backgroundColor = "green"
    tvla = 1
}

function arasworiBtn(){
    araswori.style.backgroundColor = "red"
}

function arasworiBtn1(){
    araswori1.style.backgroundColor = "red"
}

function shemdegiBtn(){
    if(tvla === 1) {
        second.style.display = "none"
        third.style.display = "block"
    }
}

const araimena = document.querySelector(".araimena")
const imena = document.querySelector(".imena")
const imena1 = document.querySelector(".imena1")
const vax = document.querySelector(".vax")
const mesame = document.querySelector(".meore")
 ricxvi = 0

 function imenaBtn(){
    imena.style.backgroundColor = "red"
 }

 function imenaBtn1(){
    imena1.style.backgroundColor = "red"
 }

function araimenaBtn() {
    araimena.style.backgroundColor = "green"
    vax.style.backgroundColor = "green"
    ricxvi = 1
}

const last = document.querySelector(".last")

function vaxBtn(){
    if(ricxvi===1){
        third.style.display = "none"
        last.style.display = "block"
    }
}

const invite = document.querySelector(".invite")

function overBtn(){
    last.style.display = "none"
    invite.style.display = "block"
}