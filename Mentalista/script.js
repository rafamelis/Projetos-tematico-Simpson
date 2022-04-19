var ContTentativa = 5


function Chutar() {

    ElementoResultado = document.getElementById ("resultado");
    var NumeroSecreto = parseInt(Math.random()*11)
    var chute = parseInt(document.getElementById("valor").value);
    
    if (chute > 10 || chute < 0 || isNaN(chute) ){

        ElementoResultado.innerHTML = "Escolha numero de 0 a 10"
        return;
    }
   
    if (chute == NumeroSecreto){

        ElementoResultado.innerHTML = "Você acertou!!"
        ContTentativa = 5;
        return;
    }  
    else {    

        ContTentativa-- ;
    }
        if (ContTentativa > 0){

        ElementoResultado.innerHTML = "Você errou! Ainda restam " + ContTentativa + " Tentativas"; 
    }
    else{
        alert("Acabaram suas tentativas!")
        document.location.reload(true)
        ContTentativa = 5;
        }

}