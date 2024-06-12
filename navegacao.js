function carregarPagina(pagina) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("conteudo").innerHTML = this.responseText;
        }
    };
    if (pagina === 'home') {
        xhttp.open("GET", "index.html", true);
    } else if (pagina === 'sobre') {
        xhttp.open("GET", "sobre.html", true);
    }
    else if ("GET", "curriculo.html", true){
        xhttp.open("GET", "curriculo.html", true)
    }

    xhttp.send();
}
