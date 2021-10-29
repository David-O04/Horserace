class Horse{
    element
    x
    constructor(element,y,color){
        element.style.top = y + "px"
        element.style.backgroundColor=color
        element.classList.add("horse")
        document.body.appendChild(element)
        this.element=element
        this.x=0
}
    move(){
        this.element.style.left=this.x +"%"
        this.x += Math.random()*2
}
    checkForWin(h){
        if(this.x >=finish){
            alert(`${colors[h]} horse wins`)
            resetRace();
    }
}
    rest(){
        this.x=0
    }    
}
const numHorses = 8
let horses=[]
let colors=["red","blue","orange","cyan","magenta","yellow","black","turqoise","grey","lilac","white"]
function startRace(){
    setInterval(moveHorses,50)
}
function setupHorses(){
    for(let h=0;h<numHorses;h++){
        horses.push (new Horse(document.createElement("div"), 95 + h*45,colors[h]))
    }
}
const finish=50
function moveHorses(){
    for(let h=0;h<numHorses;h++){
        let horse=horses[h]
        horse.move()
        horse.checkForWin(h)
    }
}
function resetRace(){
    for(let h=0;h<numHorses;h++){
        horse[h.reset()]
    }
}
setupHorses()
/*
const numHorses = 5
let horses=[]
let horseX=[]

let colors=["red","blue","orange","cyan","magneta","yellow","black","turqoise","grey","lilac","white"]

function startRace(){
    setInterval(move,50)
}

for(let h=0;h<numHorses;h++){
    horses[h] = document.createElement("div")
    horses[h].classList.add("horse")
    horses[h].style.top = 50 + h*45 + "px"
    horses[h].style.backgroundColor=colors[h]
    horseX[h]=0
    document.body.appendChild(horses[h])
}

const finish=500

function move(){
    for(let h=0;h<numHorses;h++){
        horses[h].style.left=horseX[h]+"px" 
        horseX[h] += Math.floor(Math.random()*10)
        if(horseX[h] >=finish){
            alert(`$(colors[h]} horse wins`)
            resetRace();
        }
            
    }
}
function resetRace(){
    for(let h=0;h<numHorses;h++){
        horseX[h]=0
    }

}
*/

/*
var redHorse=document.getElementById("redHorse")
var blueHorse=document.getElementById("blueHorse")
var blackHorse=document.getElementById("blackHorse")

var redHorseX=0
var blueHorseX=0
var blackHorseX=0

function move(){
    
    redHorse.style.left = redHorseX +"px"
    redHorseX += Math.floor(Math.random()*10)
    
    blueHorse.style.left = blackHorseX +"px"
    blueHorseX += Math.floor(Math.random()*10)

    blackHorse.style.left = blackHorseX +"px"
    blackHorseX += Math.floor(Math.random()*10)


}
function startRace(){

    setInterval(move,50)  

}
var blueHorse=document.getElementById("blueHorse")
var redHorseX=0
var blueHorseX=0
var blackhorse=0
function move(){
    redHorse.style.left = redHorseX +"px"
    redHorseX += Math.floor(Math.random()*10)
    blueHorse.style.left = blueHorseX +"px"
    blueHorseX += Math.floor(Math.random()*10)
    blackHorse.style.left = blackHorseX +"px"
    blackHorseX += Math.floor(Math.random()*10)
    if (redHorseX>=800){alert("Red horse wins")}
    if (blueHorseX>=800){alert("Blue horse wins")}
    if (blackHorseX>=800){alert("Black horse wins")}
}
function startRace(){
    setInterval(move,50)
    alert("Ready. Set. GO!")
}

let firstname=prompt("what's your name?")
let birthyear=prompt("what's your name?")
let age=prompt("Age?")



let str= "firstname"
alert(firstname.substr(0,2)+ birthyear.slice(2,4))
*/ 