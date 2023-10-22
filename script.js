
var progressBarIds = ["progress-bar-1", "progress-bar-2", "progress-bar-3", "progress-bar-4", "progress-bar-5", "progress-bar-6", "progress-bar-7", "progress-bar-8", "progress-bar-9"];


function updateProgressBar() {
    progressBarIds.forEach(function (id) {
        var progressBar = document.getElementById(id);
        var currentPercent = parseInt(progressBar.style.width, 10);
        var newPercent = Math.floor(Math.random() *92) + 5; //valor entre 40 e 90
        
        progressBar.style.width = newPercent + "%";
        document.getElementById("progress-percent-" + id.split("-")[2]).textContent = newPercent + "%";
        
        if (newPercent < 50) {
            progressBar.style.backgroundColor = "#FF5733"; // Vermelho
        } else {
            progressBar.style.backgroundColor = "#4CAF50"; // Verde
        }
    });
}

// porcentagem a cada 10 segundos (10000ms)
setInterval(updateProgressBar, 10000);

updateProgressBar();

