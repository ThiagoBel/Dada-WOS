document.querySelector("#loadingScene h1").innerHTML = "TestSys";
const saverr = localStorage.getItem('terminalSave');
tj.value = "// favicon#perm models/system/TestSys/logo.png";
execc();
tj.value = "";
tj.value = "// title TestSys";
execc();
tj.value = saverr;
document.getElementById("Dada").style.backgroundColor = "rgb(29, 35, 79)";
document.getElementById("Dada").style.color = "gray";
document.getElementById("TJ").style.transform = "translateY(-500vh)";
const app = document.createElement("div");
const princSys = document.getElementById("desktop");
app.style.height = "14vh";
app.style.width = "14vh";
app.style.backgroundColor = "rgb(29, 54, 79)";
app.style.borderRadius = "3vh";
app.style.transition = "all 0.5s";
app.id = "Aplicativo<TestSys>";
app.style.display = "flex";
app.style.justifyContent = "center";
app.style.alignItems = "center";

princSys.appendChild(app);
app.innerHTML = "Terminal";

let clickVisible = true;
app.addEventListener('click', () => {
    if (clickVisible) {
        document.getElementById("TJ").style.transform = "translate(0)";
        app.style.backgroundColor = "rgb(29, 54, 79, 0.5)";
        app.style.borderRadius = "3.5vh";
    } else {
        document.getElementById("TJ").style.transform = "translateY(-500vh)";
        app.style.backgroundColor = "rgb(29, 54, 79, 1)";
        app.style.borderRadius = "3vh";
    }
    clickVisible = !clickVisible
});

app.addEventListener('mouseover', () => {
    app.style.cursor = "pointer";
})