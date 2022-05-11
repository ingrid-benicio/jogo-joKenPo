let computador = Math.random() * 27;

if (computador <= 9){
    computador = "Pedra";
}else if ((computador >= 10) && computador <=18){
    computador = "Papel";
}else{
    computador = "Tesoura";
};






document.getElementById("botaoEnviar").addEventListener("click",jogoEmSi);

function jogoEmSi (){
    if (document.getElementById("escolha").value == computador ){
        alert("Deu empate!");
    }else if( document.getElementById("escolha").value =="Pedra" && computador == "Papel" ){
        alert("A CPU ganhou! Escolha da CPU: " + computador);
    }else if(document.getElementById("escolha").value == "Papel" && computador == "Pedra"){
        alert("Parabéns, você ganhou!");
    }else if(document.getElementById("escolha").value == "Papel" && computador == "Tesoura"){
        alert("A CPU ganhou! Escolha da CPU: " + computador);
    }else if (document.getElementById("escolha").value == "Tesoura" && computador == "Papel"){
        alert("Parabéns, você ganhou!");
    }else if (document.getElementById("escolha").value == "Tesoura" && computador == "Pedra"){
        alert("A CPU ganhou! Escolha da CPU: " + computador);
    }else if (document.getElementById("escolha").value == "Pedra" && computador == "Tesoura"){
        alert("Parabens, você ganhou!");
    }else{
        alert("Digite uma das opções: Pedra, Papel ou Tesoura.");
    };
};



