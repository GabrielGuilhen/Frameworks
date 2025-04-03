var ctxCabecalho;
var ctxLinks;
var ctxConteudo;
var ctxRodape;

// Variáveis Globais (opcional, considere usar um objeto para organizar)
// ...

function configEstiloCabecalho() {
    try {
        let bg = document.getElementById("corFundo").value;
        let corFonte = document.getElementById("corFonte").value;
        let tamFonte = document.getElementById("tamFonte").value;

        if (!bg || !corFonte || !tamFonte) {
            throw new Error("Preencha todos os campos do cabeçalho.");
        }

        let ctxCabecalho = `#cabecalho {\n background-color: ${bg};\n color: ${corFonte};\n font-size: ${tamFonte}pt;\n}\n`;
        return ctxCabecalho;
    } catch (error) {
        alert(error.message); // Ou exibir em um elemento HTML específico
        return "";
    }
}

function configEstiloLinks() {
    try {
        let corLink = document.getElementById("corLinks").value;
        let estiloLinks = document.querySelector('input[name="estiloLinks"]:checked').value;

        if (!corLink || !estiloLinks) {
            throw new Error("Preencha todos os campos de links.");
        }

        let aux = estiloLinks === "0" ? "none" : "underline";
        let ctxLinks = `a {\n color: ${corLink};\n text-decoration: ${aux};\n}\n`;
        return ctxLinks;
    } catch (error) {
        alert(error.message);
        return "";
    }
}

function configHtmlLinks() {
    try {
        let links = document.getElementsByName("links");
        let href = document.getElementsByName("href");

        if (!links || !href || links.length !== href.length) {
            throw new Error("Preencha todos os links e arquivos.");
        }

        let ctxLinks = "";
        for (let i = 0; i < links.length; i++) {
            let hrefValue = href[i].value.split("\\");
            let linkHref = hrefValue[hrefValue.length - 1];
            ctxLinks += `<a href="${linkHref}">${links[i].value}</a>`;
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
        return `<h1>${textoCabecalho}</h1>`;
    } catch (error) {
        alert(error.message);
        return "";
    }
}

function gerarCodigo() {
    try {
        let css = configEstiloCabecalho() + configEstiloLinks();
        document.querySelector("#codeCSS").value = css;

        let htmlCabecalho = configHTMLCabecalho();
        let htmlLinks = configHtmlLinks();

        let ctxHTML = `<html>\n<head>\n<link rel='stylesheet' href='estilo.css'>\n<title>Minha página</title>\n</head>\n<body>\n<div id='cabecalho'>${htmlCabecalho}</div>\n<nav id='links'>\n${htmlLinks}\n</nav>\n<div id='conteudo'></div>\n</body>\n</html>`;
        document.querySelector("#codeHTML").value = ctxHTML;
    } catch (error) {
        // Os erros já são tratados nas funções de configuração
    }
}

function download(campo, arquivo) {
    try {
        let nomeArquivo = arquivo.trim() === '' ? document.getElementById("nomeHTML").value + ".html" : arquivo;
        let text = document.getElementById(campo).value;

        if (!text) {
            throw new Error("Nenhum código para baixar.");
        }

        let blob = new Blob([text], { type: "text/plain" });
        let a = document.createElement("a");
        a.href = URL.createObjectURL(blob);
        a.download = nomeArquivo;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
    } catch (error) {
        alert(error.message);
    }
}

function criarBotaoExtra() {
    // Implementação da função para criar botão extra
}
