var ctxCabecalho;
var ctxLinks;
var ctxConteudo;
var ctxRodape;

function configEstiloCabecalho() {
    try {
        let bg = document.getElementById("corFundo").value;
        let corFonte = document.getElementById("corFonte").value;
        let tamFonte = document.getElementById("tamFonte").value;
        let altura = document.getElementById("alturaCabecalho").value + "px";
        let largura = document.getElementById("larguraCabecalho").value + "%";
        let bordaEstilo = document.getElementById("bordaCabecalho").value;

        if (!bg || !corFonte || !tamFonte) {
            throw new Error("Preencha todos os campos do cabeçalho.");
        }

        return `#cabecalho {
            background-color: ${bg};
            color: ${corFonte};
            font-size: ${tamFonte}pt;
            height: ${altura};
            width: ${largura};
            border: ${bordaEstilo};
            padding: 10px;
            text-align: center;
        }\n`;
    } catch (error) {
        alert(error.message);
        return "";
    }
}

function configEstiloLinks() {
    try {
        let corLink = document.getElementById("corLinks").value;
        let estiloLinks = document.querySelector('input[name="estiloLinks"]:checked').value;
        let corHover = document.getElementById("corHoverLink").value;
        let efeitoHover = document.getElementById("efeitoHoverLink").value;

        if (!corLink || !estiloLinks) {
            throw new Error("Preencha todos os campos de links.");
        }

        let aux = estiloLinks === "0" ? "none" : "underline";
        return `nav#links a {
            color: ${corLink};
            text-decoration: ${aux};
            margin-right: 15px;
            font-weight: bold;
            transition: color 0.3s ease-in-out; /* Adicionando uma transição suave */
        }\n
        nav#links a:hover {
            color: ${corHover};
            text-decoration: ${efeitoHover};
        }\n
        nav#links {
            background-color: ${document.getElementById("corFundoLinks").value};
            padding: 10px; /* Adicionando um pouco de espaço ao redor dos links */
        }\n`;
    } catch (error) {
        alert(error.message);
        return "";
    }
}

function configHtmlLinks() {
    try {
        let links = document.getElementById("links").value;
        let arrayLinks = links.split(";").map(link => link.trim()).filter(link => link !== "");
        let ctxLinks = "";

        for (let i = 0; i < arrayLinks.length; i++) {
            ctxLinks += `<a href="#">${arrayLinks[i]}</a> `;
        }
        return ctxLinks;
    } catch (error) {
        alert(error.message);
        return "";
    }
}

function configHTMLCabecalho() {
    try {
        let textoCabecalho = document.querySelector("#textoCabecalho").value;
        if (!textoCabecalho) {
            throw new Error("Preencha o texto do cabeçalho.");
        }
        return `<div id='cabecalho'><h1>${textoCabecalho}</h1></div>\n`;
    } catch (error) {
        alert(error.message);
        return "";
    }
}

function gerarCodigo() {
    try {
        let cssCabecalho = configEstiloCabecalho();
        let cssLinks = configEstiloLinks();
        document.querySelector("#codeCSS").value = cssCabecalho + cssLinks;

        let htmlCabecalho = configHTMLCabecalho();
        let htmlLinks = `<nav id='links'>\n${configHtmlLinks()}\n</nav>\n`;

        let nomeArquivoHTML = document.getElementById("nomeHTML").value.trim();
        let nomeFinalHTML = nomeArquivoHTML === "" ? "index.html" : nomeArquivoHTML + ".html";

        let ctxHTML = `<!DOCTYPE html>\n<html lang="en">\n<head>\n<meta charset="UTF-8">\n<title>Minha página</title>\n<link rel='stylesheet' href='estilo.css'>\n</head>\n<body>\n${htmlCabecalho}${htmlLinks}<div id='conteudo'></div>\n</body>\n</html>`;
        document.querySelector("#codeHTML").value = ctxHTML;

        document.querySelector("#codeHTML").nextElementSibling.setAttribute('onclick', `download('codeHTML', '${nomeFinalHTML}')`);

    } catch (error) {
        // Os erros já são tratados nas funções de configuração
    }
}

function download(campo, arquivo) {
    try {
        let text = document.getElementById(campo).value;

        if (!text) {
            throw new Error("Nenhum código para baixar.");
        }

        let blob = new Blob([text], { type: "text/plain" });
        let a = document.createElement("a");
        a.href = URL.createObjectURL(blob);
        a.download = arquivo;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
    } catch (error) {
        alert(error.message);
    }
}
