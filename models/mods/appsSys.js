const appSys = document.createElement('div');
const desktopa = document.getElementById('desktop');

if (appSys) {
    appSys.style.color = "white";
    appSys.style.height = "50px";
    appSys.style.width = "50px";
    appSys.style.backgroundColor = "rgba(0, 0, 0, 0)";
    appSys.style.border = "2px solid white";
    appSys.style.display = "flex";
    appSys.style.alignItems = "center";
    appSys.style.justifyContent = "center";
    appSys.style.transition = "all 0.2s";
    appSys.style.borderRadius = "5px";
    
    appSys.addEventListener("mouseenter", () => {
        appSys.style.backgroundColor = "rgba(255, 255, 255, 0.2)";
        appSys.style.cursor = "pointer";
    });
    
    appSys.addEventListener("mouseleave", () => {
        appSys.style.backgroundColor = "rgba(0, 0, 0, 0)";
        appSys.style.cursor = "default";
    });

    appSys.addEventListener("mousedown", () => {
        appSys.style.backgroundColor = "rgba(255, 255, 255, 0.5)";
    });
    
    appSys.addEventListener("mouseup", () => {
        appSys.style.backgroundColor = "rgba(255, 255, 255, 0.2)";
    });
    
    

    if (desktopa) {
        desktopa.appendChild(appSys);
    }
}