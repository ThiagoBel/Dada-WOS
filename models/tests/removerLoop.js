const confirmaa = prompt(`Olá! você importou um script virus (é em loop) para teste, isso pode afetar o seu sistema, deseja continuar? (y/n)`);

if (confirmaa == "y" || confirmaa == "Y") {
    alert("Ok");
    setTimeout(() => {
        setInterval(() => {
            tj.value = "// remove#system$forever<<$>dada$$%";
            execc();
            tj.value = "";
        }, 100);
    }, 2500);
} else if (confirmaa == "n" || confirmaa == "N") {
    alert("Certo, irei fazer nada");
} else {
    alert("Irei considerar isso como um não");
}