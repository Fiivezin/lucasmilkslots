document.addEventListener("DOMContentLoaded", function() {
    const gerarSinalButton = document.getElementById("gerarSinal");
    const fraseGerada = document.getElementById("fraseGerada");
    let ultimoClique = 0;
    let contador = 60;
    let contadorInterval;

    gerarSinalButton.addEventListener("click", function() {
        const agora = new Date().getTime();
        if (agora - ultimoClique < 60000) {
            return;
        }

        gerarSinalButton.disabled = true;

        // Defina um atraso aleatório de 2 a 5 segundos
        const atrasoAleatorio = (Math.random() * 3000 + 2000); // entre 2000 e 5000 milissegundos
        gerarSinalButton.textContent = "Aguarde...";

        // Use setTimeout para aguardar o atraso antes de gerar a frase
        setTimeout(function() {
            contador = 60;
            contadorInterval = setInterval(function() {
                if (contador === 0) {
                    gerarSinalButton.disabled = false;
                    gerarSinalButton.textContent = "Gerar Sinal";
                    clearInterval(contadorInterval);
                } else {
                    gerarSinalButton.textContent = `Espere ${contador}s`;
                    contador--;
                }
            }, 1000);

            const girosNormais = (Math.random() * (2.88 - 1.4) + 1.4).toFixed(2);

            const frase = `Alvo: ${girosNormais}✅  3x Tentativas`;

            fraseGerada.textContent = frase;
            ultimoClique = agora;
        }, atrasoAleatorio);
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const voltarPaginaButton = document.getElementById("voltarPagina");

    voltarPaginaButton.addEventListener("click", function() {
        window.history.back();
    });
});

