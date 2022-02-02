const PIEDRA = "rock";
const PAPEL = "paper";
const TIJERA = "scissors";

const empate = 0;
const ganaste = 1;
const perdiste = 2;



const piedrabtn = document.getElementById("rock");
const papelbtn = document.getElementById("paper");
const tijerabtn = document.getElementById("scissors");
const resultText = document.getElementById("texto-inicio");
const userImg = document.getElementById("user-img");
const machineImg = document.getElementById("machine-img");

piedrabtn.addEventListener("click", ()=>{
    play(PIEDRA);

});
papelbtn.addEventListener("click", ()=>{
    play(PAPEL);

});
tijerabtn.addEventListener("click", ()=>{
    play(TIJERA);

});

function play(userOption){

    const machineOption = calcMachineOption();
    const result = calcresult(userOption, machineOption);
    
    userImg.src = "img/"+userOption+".svg";
    machineImg.src = "img/"+machineOption+".svg";
    
    


    switch(result){
        case empate:
            resultText.innerHTML = "¡empataste!";
            break;
        case ganaste:
            resultText.innerHTML = "¡ganaste!";
            break;
        case perdiste:
            resultText.innerHTML = "¡perdiste!";
            break;
    }
    
    
}

function calcMachineOption(){
    const number = Math.floor(Math.random() * 3);
    switch(number){
        case 0:
            return PIEDRA;
        case 1:
            return PAPEL;
        case 2:
            return TIJERA;
    }

}

function calcresult(userOption, machineOption){
    if(userOption === machineOption){
        return empate;

    }else if(userOption === PIEDRA){
        
        if(machineOption === PAPEL) return perdiste;
        if(machineOption === TIJERA) return ganaste;

    }else if(userOption === PAPEL){

        if(machineOption === TIJERA) return perdiste;
        if(machineOption === PIEDRA) return ganaste;
        
    }else if(userOption === TIJERA){

        if(machineOption === PIEDRA) return perdiste;
        if(machineOption === PAPEL) return ganaste; 
    }
}