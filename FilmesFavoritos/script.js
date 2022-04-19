
let favoritos = []

function adicionarFilme () {
    var filmeFavorito = document.getElementById("filme").value;
    var nomeDoFilme = document.getElementById("nomeDoFilme").value
    
    if (filmeFavorito.endsWith(".jpg")){
        listarFilmesNaTela(filmeFavorito, nomeDoFilme)
    }  else {
        alert("Endereço de filme inválido, escolha uma foto JPG!");
    }

    document.getElementById("filme").value = "";    
    document.getElementById("nomeDoFilme").value = ""




}

function listarFilmesNaTela(filme, nomeDoFilme) {
   
    var elementoFilmeFavorito = "<img src=" + filme + ">";
    var elementoNomeFilmeFavorito = "<p>" + nomeDoFilme + "</p>";
       
    document.getElementById("filmeAdicionado").innerHTML = document.getElementById("filmeAdicionado").innerHTML + `
    <div class="divDoFilme">` + elementoFilmeFavorito  + elementoNomeFilmeFavorito +  `</div>`;

    

    favoritos.push ({
        "capaURL": (document.getElementById("filme").value),
        "tituloFilme": (document.getElementById("nomeDoFilme").value)
    
    })
    
    console.log(favoritos);
}  


