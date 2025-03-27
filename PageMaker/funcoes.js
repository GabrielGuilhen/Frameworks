var ctxCabecalho;
var ctxLinks;
var ctxConteudo;
var ctxRodape;

function configEstiloCabecalho(){
    bg = document.getElementById("corFundo").value;
    corFonte = document.getElementById("corFonte").value;
    tamFonte = document.getElementById("tamFonte").value;
    return "#cabecalho{\n background-color:" + bg + ";\n color:" + corFonte + ";\n font-size:" + tamFonte + "pt;\n}\n";
}

function configEstiloLinks(){
    corLink = document.getElementById("corLinks").value;
    estiloLinks = document.querySelector('input[name="estiloLinks"]:checked').value;
    let aux = estiloLinks == "0" ? "none" : "underline";
    return "a{\n color:" + corLink + ";\n text-decoration:" + aux + ";\n}\n";
}

function gerarCodigo(){
    let codeCSS = document.querySelector("#codeCSS");
    codeCSS.value = configEstiloCabecalho() + configEstiloLinks();

    let codeHTML = document.querySelector("#codeHTML");
    let textoCabecalho = document.getElementById("textoCabecalho").value;
    let textoLinks = document.getElementById("links").value;
    let arrayLinks = textoLinks.split(";");
    let linksHTML = "";

    for (let i = 0; i < arrayLinks.length; i++) {
        linksHTML += "<a href='#'>" + arrayLinks[i] + "</a><br>";
    }

    codeHTML.value = "<html>\n<head>\n" +
        "<link rel='stylesheet' href='estilo.css'>\n" +
        "<title>Minha página</title>\n" +
        "</head>\n<body>\n" +
        "<div id='cabecalho'><h1>" + textoCabecalho + "</h1></div>\n" +
        "<nav id='links'>\n" + linksHTML + "\n</nav>\n" +
        "<div id='conteudo'></div>\n" +
        "</body>\n</html>";
}
