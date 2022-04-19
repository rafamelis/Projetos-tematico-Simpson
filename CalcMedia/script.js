function calcular(){

   var valorElemento = document.getElementById("PrimeiraNota");
   var PrimeiraProva = parseFloat(valorElemento.value);
    
   var valorElementoSP = document.getElementById("SegundaNota");
   var SegundaProva = parseFloat(valorElementoSP.value);
      

   var valorElementoTP = document.getElementById("TerceiraNota");
   var TerceiraProva = parseFloat(valorElementoTP.value);


   var valorElementoQP = document.getElementById("QuartaNota");
   var QuartaProva = parseFloat(valorElementoQP.value);


   var valorElementoQuP = document.getElementById("QuintaNota");
   var QuintaProva = parseFloat(valorElementoQuP.value);


   var valorElementoSeP = document.getElementById("SextaNota");
   var SextaProva = parseFloat(valorElementoSeP.value);


   var valorElementoSetP = document.getElementById("SetimaNota");
   var SetimaProva = parseFloat(valorElementoSetP.value);


   var valorElementoOP = document.getElementById("OitavaNota");
   var OitavaProva = parseFloat(valorElementoOP.value);



    NotaPrimeiroBim = ((PrimeiraProva + SegundaProva) / 2) ;
    NotaSegundoBim = ((TerceiraProva + QuartaProva) / 2 );
    NotaterceiroBim = ((QuintaProva + SextaProva) / 2 );
    NotaQuartoBim = ((SetimaProva + OitavaProva) / 2 );
      



       NotaFixada = ((NotaPrimeiroBim + NotaSegundoBim + NotaterceiroBim + NotaQuartoBim) / 4 ).toFixed(1);
      if (NotaFixada > 6) {
            let fundo = document.getElementById("fundo");
            var elementoNotaFixada = document.getElementById("SuaNota");
            var NotaFinal = "Você foi aprovado! Sua Nota é: " + NotaFixada;
            elementoNotaFixada.innerHTML = NotaFinal;
            fundo.style.background = 'bartHomer.jpg';

            
      }
      else {
            let fundo = document.getElementById("fundo");
            var elementoNotaFixada = document.getElementById("SuaNota");
            var NotaFinal = "Você foi Reprovado! Sua Nota é: " + NotaFixada;
            elementoNotaFixada.innerHTML = NotaFinal;
            fundo.style.background = 'bartHomer.jpg';
            }
}
