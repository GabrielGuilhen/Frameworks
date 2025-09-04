document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('.painel');
    const saida = document.querySelector('.saida');
    const btn = document.querySelector('.btn');

    btn.addEventListener('click', function () {
        // Pega os valores do formulário
        const cor = form.cor.value;
        const estilo = form.estilo.value;
        const largura = form.largura.value;
        const altura = form.altura.value;
        const cantos = form.cantos.value;

        // Monta o CSS
        let css = `.minha-div {\n`;
        if (largura) css += `  width: ${largura}px;\n`;
        if (altura) css += `  height: ${altura}px;\n`;
        css += `  border: 2px ${estilo} ${cor};\n`;
        css += `  background: #fff;\n`;
        css += `  color: #222;\n`;
        css += `  box-sizing: border-box;\n`;
        if (cantos === 'arredondados') {
            css += `  border-radius: 16px;\n`;
        } else {
            css += `  border-radius: 0;\n`;
        }
        css += `}`;

        // Mostra no textarea
        saida.value = css;
    });
});