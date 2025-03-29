let valor = localStorage.getItem("valor") ? parseInt(localStorage.getItem("valor")) : 0;

setInterval(() => {
    if (document.getElementById("ff").style.display === "block") {
        valor++;
        localStorage.setItem("valor", valor);
        if (valor < 1) {
            location.reload();
        } else {
            localStorage.clear();
            localStorage.setItem("first", "true");
            location.reload();
        }
    }
}, 100);