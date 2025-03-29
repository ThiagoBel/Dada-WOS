console.log(`Uptimeeeeeeeeeeeeeee`);
const comandos = [
    {comando: "// @uptime", funcao: "Mostra a contagem de 0 a infinito, de quanto tempo está ligado."},
    {comando: "// @uptime-forever", funcao: "Mostra em tempo real a contagem de 0 a infinito, de quando tempo está ligado."},
    {comando: "// @uptime-forever#stop#", funcao: "Para(pausa) o tempo real."},
    {comando: "// @uptime-forever#clear#", funcao: "Reinicia o tempo."},
    {comando: "// @uptime-counter#now#", funcao: "Faz uma contagem de 0 ao infinito."},
    {comando: "// @uptime-counter#stop#", funcao: "Para a contagem."},
    {comando: "// @uptime-counter#reset#", funcao: "Reinicia a contagem."}
]

console.table(comandos);


let tempoooooooo = 0;
let tempooooooooo = 0;
let timerrr;
let timerrrr;
let uptimeTimerRunning = false;
let uptimeCounterRunning = false;

setInterval(() => {
    tempoooooooo++;
}, 1000);

const tj22 = document.getElementById('tj');
const tjr = tj22.value;

tj22.addEventListener('keydown', (event) => {
    if (event.key == 'Enter' && !event.shiftKey) {
        if (tj22.value == "// @uptime") {
            outputEntrada.innerHTML = tempoooooooo;
        } else if (tj22.value == "// @uptime-forever") {
            if (uptimeTimerRunning) {
                clearInterval(timerrr);
            }
            timerrr = setInterval(() => {
                outputEntrada.innerHTML = tempoooooooo;
            }, 500);
            uptimeTimerRunning = true;
        } else if (tj22.value == "// @uptime-forever#stop#") {
            clearInterval(timerrr);
            uptimeTimerRunning = false;
        } else if (tj22.value == "// @uptime-forever#clear#") {
            clearInterval(timerrr);
            outputEntrada.innerHTML = 0;
            uptimeTimerRunning = false;
        } else if (tj22.value == "// @uptime-counter#now#") {
            if (uptimeCounterRunning) {
                clearInterval(timerrrr);
                tempooooooooo = 0;
            }
            timerrrr = setInterval(() => {
                tempooooooooo++;
                outputEntrada.innerHTML = tempooooooooo;
            }, 1000);
            uptimeCounterRunning = true;
        } else if (tj22.value == "// @uptime-counter#stop#") {
            clearInterval(timerrrr);
            uptimeCounterRunning = false;
        } else if (tj22.value == "// @uptime-counter#reset#") {
            tempooooooooo = 0;
            outputEntrada.innerHTML = tempooooooooo;
            uptimeCounterRunning = false;
        }
    }
});