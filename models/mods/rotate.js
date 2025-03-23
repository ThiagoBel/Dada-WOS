document.querySelector('html').style.backgroundColor = "black";
var vvvvvv = 0;

setInterval(() => {
    vvvvvv++;
    document.getElementById('Dada').style.transform = `rotate(${vvvvvv}deg)`;
    if (vvvvvv > 360) {
        vvvvvv = 0;
    }
}, 100)