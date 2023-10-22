document.addEventListener("DOMContentLoaded", function() {
    const voltarPaginaButton = document.getElementById("voltarPagina");

    voltarPaginaButton.addEventListener("click", function() {
        window.history.back();
    });
});