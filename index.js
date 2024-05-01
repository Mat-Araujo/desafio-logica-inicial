let nome = "Raze"
let nivel = 2500

if(nivel <= 1000){
        nivel = "Ferro"
    }else if(nivel <= 2000){
        nivel = "Bronze"
    }else if(nivel <= 5000){
        nivel = "Prata"
    }else if(nivel <= 7000){
        nivel = "Ouro"
    }else if(nivel <= 8000){
        nivel = "Platina"
    }else if(nivel <= 9000){
        nivel = "Ascendente"
    }else if(nivel <= 10000){
        nivel = "Imortal"
    }else if(nivel > 10001){
        nivel = "Radiante"
    }

console.log("A agente " + nome + " está no elo " + nivel)