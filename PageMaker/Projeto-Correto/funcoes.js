var ctxCabecalho;
var ctxLinks;
var ctxConteudo;
var ctxRodape;
var usarLinks = true;

function configEstiloCabecalho() {
    bg = document.getElementById("corFundo").value;
    corFonte = document.getElementById("corFonte").value;
    tamFonte = document.getElementById("tamFonte").value;
    alturaCabecalho = document.getElementById("alturaCabecalho").value;
    larguraCabecalho = document.getElementById("larguraCabecalho").value;

    ctxCabecalho = "#cabecalho{\n background-color:" + bg + ";\n";
    ctxCabecalho += " color:" + corFonte + ";\n";
    ctxCabecalho += " font-size:" + tamFonte + "pt;\n";
    ctxCabecalho += " height:" + alturaCabecalho + "px;\n";
    ctxCabecalho += " width:" + larguraCabecalho + "px;\n";
    ctxCabecalho += " display: flex;\n"; /* Para alinhar o texto verticalmente */
    ctxCabecalho += " justify-content: center;\n"; /* Centraliza horizontalmente */
    ctxCabecalho += " align-items: center;\n"; /* Centraliza verticalmente */
    ctxCabecalho += "}\n";
    return ctxCabecalho;
}
function configEstiloLinks() {
    corLink = document.getElementById("corLinks").value;
    corHoverLink = document.getElementById("corHoverLinks").value;
    estiloLinks = document.querySelector('input[name="estiloLinks"]:checked').value;
    efeitoHover = document.getElementById("efeitoHover").value;

    ctxLinks = "#links a{\n color:" + corLink + ";\n";
    let aux = estiloLinks == "0" ? "none" : "underline";
    ctxLinks += " text-decoration:" + aux + ";\n";
    ctxLinks += " margin-right: 10px;\n"; /* Espaçamento entre os links */
    ctxLinks += "}\n";

    /* Efeitos Hover nos Links */
    ctxLinks += "#links a:hover{\n";
    if (efeitoHover === "mudarCor") {
        ctxLinks += " color: " + corHoverLink + ";\n";
    } else if (efeitoHover === "sublinhar") {
        ctxLinks += " text-decoration: underline;\n";
    } else if (efeitoHover === "negrito") {
        ctxLinks += " font-weight: bold;\n";
    }
    ctxLinks += "}\n";

    return ctxLinks;
}
function configHtmlLinks() {
    if (!usarLinks) return "";
    const nomesLinks = document.getElementById("nomesLinks").value.split(',');
    const arquivosLinks = Array.from(document.querySelectorAll('input[type="file"][name^="arquivoLink_"]')).map(input => input.files[0] ? input.files[0].name : '#');
    let ctxHTML = "";
    for (let i = 0; i < nomesLinks.length; i++) {
        const nome = nomesLinks[i].trim();
        const arquivo = arquivosLinks[i] ? arquivosLinks[i].trim() : '#'; // Use '#' como padrão se não houver arquivo
        if (nome) {
            ctxHTML += `<a href="${arquivo}">${nome}</a>`;
        }
    }
    return ctxHTML;
}
function configHTMLCabecalho() {
    let aux = document.querySelector("#textoCabecalho").value;
    ctxCabecalho = '<h1>' + aux + '</h1>';
    return ctxCabecalho;
}
function configHTMLConteudo() {
        txtConteudo="";
        let txtConteudo = document.querySelector("#txtConteudo").value;
        return txtConteudo;

}
function gerarCodigo() {
    // Captura os valores do cabeçalho
    const corFundo = document.getElementById('corFundo').value || '#FFFFFF';
    const textoCabecalho = document.getElementById('textoCabecalho').value.trim();
    const corFonte = document.getElementById('corFonte').value || '#000000';
    const tamFonte = document.getElementById('tamFonte').value || '16';
    const alturaCabecalho = document.getElementById('alturaCabecalho').value || '100';
    const larguraCabecalho = document.getElementById('larguraCabecalho').value || '100';

    // Captura os valores dos links
    const usarLinks = document.getElementById('usarLinks').checked;
    const nomesLinks = document.getElementById('nomesLinks').value.split(',').map(nome => nome.trim());
    const corLinks = document.getElementById('corLinks').value || '#0000FF';
    const corHoverLinks = document.getElementById('corHoverLinks').value || '#FF0000';
    const efeitoHover = document.getElementById('efeitoHover').value || 'nenhum';
    const estiloLinks = document.querySelector('input[name="estiloLinks"]:checked').value;

    // Captura o conteúdo
    const textoConteudo = document.getElementById('txtConteudo').value.trim();

    // Validação básica
    if (!textoCabecalho) {
        alert('O texto do cabeçalho é obrigatório!');
        return;
    }

    // Gera o CSS
    let css = `/* Estilos do Cabeçalho */\n`;
    css += `#cabecalho {\n`;
    css += `  background-color: ${corFundo};\n`;
    css += `  color: ${corFonte};\n`;
    css += `  font-size: ${tamFonte}px;\n`;
    css += `  height: ${alturaCabecalho}px;\n`;
    css += `  width: ${larguraCabecalho}px;\n`;
    css += `  display: flex;\n`;
    css += `  align-items: center;\n`;
    css += `  justify-content: center;\n`;
    css += `}\n\n`;

    if (usarLinks) {
        css += `/* Estilos dos Links */\n`;
        css += `#menu-links a {\n`;
        css += `  color: ${corLinks};\n`;
        css += `  text-decoration: ${estiloLinks === '1' ? 'underline' : 'none'};\n`;
        css += `  margin-right: 10px;\n`;
        css += `}\n\n`;

        css += `#menu-links a:hover {\n`;
        if (efeitoHover === 'mudarCor') {
            css += `  color: ${corHoverLinks};\n`;
        } else if (efeitoHover === 'sublinhar') {
            css += `  text-decoration: underline;\n`;
        } else if (efeitoHover === 'negrito') {
            css += `  font-weight: bold;\n`;
        }
        css += `}\n\n`;
    }

    css += `/* Estilos do Conteúdo */\n`;
    css += `#conteudo {\n`;
    css += `  padding: 20px;\n`;
    css += `  font-size: 16px;\n`;
    css += `  line-height: 1.5;\n`;
    css += `}\n`;

    // Gera o HTML
    let html = `<!DOCTYPE html>\n`;
    html += `<html lang="en">\n`;
    html += `<head>\n`;
    html += `  <meta charset="UTF-8">\n`;
    html += `  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n`;
    html += `  <title>Minha Página</title>\n`;
    html += `  <link rel="stylesheet" href="estilo.css">\n`;
    html += `</head>\n`;
    html += `<body>\n`;
    html += `  <div id="cabecalho">${textoCabecalho}</div>\n`;

    if (usarLinks) {
        html += `  <nav id="menu-links">\n`;
        nomesLinks.forEach((nome, index) => {
            const arquivo = document.getElementById(`arquivoLink${index}`).value.trim() || '#';
            html += `    <a href="${arquivo}">${nome}</a>\n`;
        });
        html += `  </nav>\n`;
    }

    html += `  <div id="conteudo">\n`;
    html += `    ${textoConteudo.replace(/\n/g, '<br>')}\n`;
    html += `  </div>\n`;
    html += `</body>\n`;
    html += `</html>`;

    // Exibe os códigos nos campos de texto
    document.getElementById('codeCSS').value = css;
    document.getElementById('codeHTML').value = html;
}
function download(elementId, filename) {
    const element = document.getElementById(elementId);
    const text = element.value;

    if (!text) {
        alert('Nenhum código para baixar! Gere o código primeiro.');
        return;
    }

    const blob = new Blob([text], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
}
function atualizarAreaLinks() {
    const usarLinks = document.getElementById('usarLinks').checked;
    const areaConfigLinks = document.getElementById('areaConfigLinks');
    areaConfigLinks.style.display = usarLinks ? 'block' : 'none';
}
function gerarCamposArquivo() {
    const nomesLinks = document.getElementById('nomesLinks').value.split(',');
    const areaArquivos = document.getElementById('areaArquivos');
    areaArquivos.innerHTML = ''; // Limpa os campos anteriores

    nomesLinks.forEach((nome, index) => {
        const campo = document.createElement('div');
        campo.classList.add('mb-2');
        campo.innerHTML = `
            <label class="block mb-1">Arquivo para o link "${nome.trim()}"</label>
            <input type="text" id="arquivoLink${index}" class="border p-2 w-full" placeholder="Exemplo: pagina${index + 1}.html">
        `;
        areaArquivos.appendChild(campo);
    });
}
