const confirma = prompt(`Olá! você importou um script virus (Não é em loop) para teste, isso pode afetar o seu sistema, deseja continuar? (y/n)`);

if (confirma == "y" || confirma == "Y") {
    alert("Ok");
    setTimeout(() => {
        document.getElementById('desktop').remove();
        document.getElementById('Dada').remove();
        document.querySelector('html').remove();
    }, 2500);
} else if (confirma == "n" || confirma == "N") {
    alert("Certo, irei fazer nada");
} else {
    alert("Irei considerar isso como um não");
}