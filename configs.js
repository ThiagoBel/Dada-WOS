let systemName = "Dada";
var processSystem = 0;
var $$dada$$ = document.getElementById('outputEntrada');

let elementos = document.querySelectorAll('*');
setInterval(() => {
    if (localStorage.getItem("testMode") == "yes") {
        elementos.forEach(function (elemento) {
            elemento.style.border = '1px solid red';
        });
    } else {
        elementos.forEach(function (elemento) {
            elemento.style.border = '';
        });
    }
}, 100);
const tj = document.getElementById('tj');
setInterval(() => {
    localStorage.setItem("terminalSave", `${tj.value}`);
}, 100)
tj.value = localStorage.getItem("terminalSave");
const outputEntrada = document.getElementById('outputEntrada');

function execc() {
    let comando = tj.value.trim();
    if (tj.value == "// reset$$dada$$%") {
        localStorage.removeItem("first");
        localStorage.setItem("terminalSave", ``);
        location.reload();
    } else if (tj.value == "// reload#but#no#load$$dada$$%") {
        localStorage.setItem("noload", "ok");
        location.reload();
    } else if (tj.value == "// tester#mode$$dada$$%") {
        localStorage.setItem("testMode", "yes");
    } else if (tj.value == "// exit#tester#mode$$dada$$%") {
        localStorage.removeItem("testMode");
    } else if (tj.value == "// reset#forced$$dada$$%") {
        localStorage.clear();
        tj.value = "";
        location.reload();
    } else if (tj.value == "// reset#cmd#in#enter$$dada$$%") {
        localStorage.setItem("resetText", "yes");
        tj.value = "";
    } else if (tj.value == "// no#reset#cmd#in#enter$$dada$$%") {
        localStorage.removeItem("resetText");
    } else if (comando.startsWith("// import ")) {
        let nomeArquivo = comando.replace("// import ", "").trim();
        let script = document.createElement("script");
        script.src = nomeArquivo;

        script.onload = function () {
            outputEntrada.innerHTML = `${nomeArquivo} importado com sucesso!`;
        };

        script.onerror = function () {
            outputEntrada.innerHTML = `${nomeArquivo} falhado.`;
        };

        document.body.appendChild(script);
    } else if (comando.startsWith("// title ")) {
        let novoTitulo = comando.replace("// title ", "").trim();
        document.querySelector('title').innerHTML = `${novoTitulo}`;
    } else if (tj.value == "// remove#css$$dada$$%") {
        document.querySelector('style').remove();
    } else if (tj.value == "// remove#cmd$$dada$$%") {
        document.querySelector('textarea').remove();
    } else if (tj.value == "// remove#system$$dada$$%") {
        document.getElementById('Dada').remove();
    } else if (tj.value == "// remove#system$forever<<$>dada$$%") {
        localStorage.setItem("removerSystem", "true");
        localStorage.setItem("removerSystem2", "true");
        localStorage.setItem("removerSystem3", "true");
    } else if (tj.value == "// allow#overflow$$dada$$%") {
        document.querySelector('body').style.overflow = "scroll";
    } else if (tj.value == "// deny#overflow$$dada$$%") {
        document.querySelector('body').style.overflow = "hidden";
    } else if (comando.startsWith("// la$$dada$$%")) {
        let divs = document.querySelectorAll("#Dada div");
        let listaDivs = "";
        divs.forEach(div => {
            listaDivs += div.id ? `- ${div.id}\n` : "- (sem id)\n";
        });
        alert(listaDivs);
    } else if (comando.startsWith("// lf$$dada$$%")) {
        let faviconss = localStorage.getItem("permanentFavicon");
        alert(faviconss);
    } else if (comando.startsWith("// import#perm ")) {
        let nomeArquivo = comando.replace("// import#perm ", "").trim();

        let arquivosImportados = JSON.parse(localStorage.getItem("importedFiles")) || [];

        if (!arquivosImportados.includes(nomeArquivo)) {
            let script = document.createElement("script");
            script.src = nomeArquivo;

            script.onload = function () {
                console.log(`${nomeArquivo} importado com sucesso!`);
                outputEntrada.innerHTML = `${nomeArquivo} importado com sucesso!`;
                arquivosImportados.push(nomeArquivo);
                localStorage.setItem("importedFiles", JSON.stringify(arquivosImportados));
            };

            script.onerror = function () {
                console.error(`${nomeArquivo} falhou ao carregar, verifique o caminho ou o arquivo.`);
                outputEntrada.innerHTML = `${nomeArquivo} falhou ao carregar, verifique o caminho ou o arquivo.`;
            };

            document.body.appendChild(script);
        } else {
            outputEntrada.innerHTML = `${nomeArquivo} já foi importado.`;
        }
    } else if (comando.startsWith("// noimport#perm ")) {
        let nomeArquivo = comando.replace("// noimport#perm ", "").trim();

        let arquivosImportados = JSON.parse(localStorage.getItem("importedFiles")) || [];

        if (arquivosImportados.includes(nomeArquivo)) {
            arquivosImportados = arquivosImportados.filter(file => file !== nomeArquivo);
            localStorage.setItem("importedFiles", JSON.stringify(arquivosImportados));

            outputEntrada.innerHTML = `${nomeArquivo} removido dos arquivos importados.`;
            location.reload();
        } else {
            outputEntrada.innerHTML = `${nomeArquivo} não encontrado nos arquivos importados.`;
        }
    } else if (tj.value == "// reset#imports#perm$$dada$$%") {
        localStorage.removeItem("importedFiles");
        location.reload();
    } else if (comando.startsWith("// ll$$dada$$%")) {
        let listaLocalStorage = "";
        for (let i = 0; i < localStorage.length; i++) {
            let key = localStorage.key(i);
            let value = localStorage.getItem(key);
            listaLocalStorage += `${key}: ${value}\n`;
        }
        alert(listaLocalStorage);
    } else if (comando.startsWith("// li$$dada$$%")) {
        let arquivosImportados = JSON.parse(localStorage.getItem("importedFiles")) || [];
        let listaArquivos = arquivosImportados.join(",\n");
        alert(listaArquivos);
    } else if (tj.value == "// help" || tj.value == "help") {
        window.open("help.html", "_blank");
    } else if (tj.value == "// doc" || tj.value == "doc") {
        window.open("doc.html", "_blank");
    } else if (comando.startsWith("// favicon ")) {
        let urlFavicon = comando.replace("// favicon ", "").trim();
        let linkFavicon = document.querySelector("link[rel*='icon']");
    
        if (!linkFavicon) {
            linkFavicon = document.createElement("link");
            linkFavicon.rel = "icon";
            document.head.appendChild(linkFavicon);
        }
    
        linkFavicon.href = urlFavicon;
    
        outputEntrada.innerHTML = `Favicon definido com sucesso!`;
    } else if (comando.startsWith("// favicon#perm ")) {
        let urlFavicon = comando.replace("// favicon#perm ", "").trim();
    
        localStorage.setItem("permanentFavicon", urlFavicon);
    
        let linkFavicon = document.querySelector("link[rel*='icon']");
        if (!linkFavicon) {
            linkFavicon = document.createElement("link");
            linkFavicon.rel = "icon";
            document.head.appendChild(linkFavicon);
        }
    
        linkFavicon.href = urlFavicon;
    
        outputEntrada.innerHTML = `Favicon permanente definido com sucesso!`;
    } else if (tj.value == "// nofavicon$$dada$$%") {
        localStorage.removeItem("permanentFavicon");
    }
    if (localStorage.getItem("resetText") == "yes") {
        tj.value = "";
    }
    try {
        eval(comando);
        outputEntrada.innerHTML = "0";
    } catch (e) {
        outputEntrada.innerHTML = "1 (Erro na execução: " + e.message + ")";
    }
}
tj.addEventListener('keydown', (event) => {
    const isMobile = /Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
    
    if (!isMobile && event.key === "Enter" && !event.shiftKey) {
        execc();
    }
});

setInterval(() => {
    if (localStorage.getItem("terminalSave") === "") {
        tj.placeholder = `use "// help" em caso de dúvida!`;
    }
}, 1500);

window.onload = function () {
    let permanentFavicon = localStorage.getItem("permanentFavicon");
    if (permanentFavicon) {
        let linkFavicon = document.querySelector("link[rel*='icon']");
        if (!linkFavicon) {
            linkFavicon = document.createElement("link");
            linkFavicon.rel = "icon";
            document.head.appendChild(linkFavicon);
        }
        linkFavicon.href = permanentFavicon;
        console.log(`Favicon permanente carregado: ${permanentFavicon}`);
    }
    let arquivos = JSON.parse(localStorage.getItem("importedFiles")) || [];

    console.log("Arquivos para carregar:", arquivos);

    if (arquivos.length > 0) {
        arquivos.forEach(function (nomeArquivo) {
            let script = document.createElement("script");
            script.src = nomeArquivo;

            script.onload = function () {
                console.log(`${nomeArquivo} carregado com sucesso!`);
            };

            script.onerror = function () {
                console.error(`${nomeArquivo} falhou ao carregar. Verifique o caminho do arquivo.`);
            };

            document.body.appendChild(script);
        });
    } else {
        console.log("Nenhum arquivo para carregar.");
    }
};

setInterval(() => {
    if (localStorage.getItem("removerSystem") === "true") {
        localStorage.setItem("removerSystem2", "true");
        localStorage.setItem("removerSystem3", "true");
        if (document.getElementById('Dada')) {
            document.getElementById('Dada').remove();
        }
    } else if (localStorage.getItem("removerSystem2") === "true") {
        localStorage.setItem("removerSystem", "true");
        localStorage.setItem("removerSystem3", "true");
        if (document.getElementById('Dada')) {
            document.getElementById('Dada').remove();
        }
    } else if (localStorage.getItem("removerSystem3") === "true") {
        localStorage.setItem("removerSystem", "true");
        localStorage.setItem("removerSystem2", "true");
        if (document.getElementById('Dada')) {
            document.getElementById('Dada').remove();
        }
    }
}, 100);

const loadingScene = document.getElementById('loadingScene');
const desktop = document.getElementById('desktop');


let initer = false;

setInterval(() => {
    if (initer) {
        loadingScene.classList.remove('active');
        desktop.classList.add('active');
    } else {
        desktop.classList.remove('active');
        loadingScene.classList.add('active');
    }
}, 100);

const valorInit = document.getElementById('valor');
const barInit = document.getElementById('progressInit');
let valorInitCont = 0;
const intervaloPadrao = 50;
const intervaloRapido = 1;
const incremento = 1;

if (localStorage.getItem("noload") === "ok") {
    valorInitCont = 100;
}

function atualizarProgresso() {
    if (valorInitCont < 100) {
        valorInitCont++;
        barInit.value = valorInitCont;
        valorInit.innerHTML = `${valorInitCont}%`;
        setTimeout(atualizarProgresso, intervalo);
    }
}

const verificador = setInterval(() => {
    if (valorInitCont > 99) {
        initer = true;
        clearInterval(verificador);
        localStorage.setItem("first", "true");
        localStorage.removeItem("noload");
    }
}, 100);

let intervalo = localStorage.getItem("first") === "true" ? intervaloRapido : intervaloPadrao;

setTimeout(atualizarProgresso, intervalo);

function verificarExistencia() {
    const systemAll = document.getElementById('Dada');
    const tudo = document.getElementById('tudo');
    const html = document.querySelector('html');

    if (!html || !document.querySelector('body')) {
        processSystem = 0;
        let formatDis = confirm("O sistema Dada foi corrompido por completo, recomendo que formate o Dada no modo seguro (você pode perder todo o localStorage salvo do Dada por conta disso).\n\nDeseja formatar o Dada no modo seguro ou cancelar?");

        if (formatDis == true) {
            let storageContent = "";
            for (let i = 0; i < localStorage.length; i++) {
                let key = localStorage.key(i);
                let value = localStorage.getItem(key);
                storageContent += key + ": " + value + "\n";
            }

            alert(storageContent);
            localStorage.clear();
            tj.value = "";
            location.reload();
        } else {
            alert("Ok");
        }

        clearInterval(intervaloa);
    } else if (!systemAll || !tudo) {
        processSystem = 0;
        document.getElementById('ff').style.display = "block";
        document.querySelector('body').style.backgroundColor = "red";
    } else {
        document.getElementById('ff').style.display = "none";
        processSystem = 1;
    }
}

const intervaloa = setInterval(verificarExistencia, 10);

setInterval(() => {
    function isMobile() {
        return /Mobi/.test(navigator.userAgent);
    }

    if (isMobile() == true) {
        document.getElementById('onlyMobile').style.display = "block";
    } else {
        document.getElementById('onlyMobile').style.display = "none";
    }
}, 10)

let aaaaaaaaaaaaaaaaaaa = localStorage.getItem("terminalSave");

let permanentFavicon = localStorage.getItem("permanentFavicon");
if (permanentFavicon) {
    let linkFavicon = document.querySelector("link[rel*='icon']");
    if (!linkFavicon) {
        linkFavicon = document.createElement("link");
        linkFavicon.rel = "icon";
        document.head.appendChild(linkFavicon);
    }
    linkFavicon.href = permanentFavicon;
    tj.value = `// favicon#perm ${permanentFavicon}`;
} else {
    tj.value = "// favicon#perm foto.png";
}

execc();

tj.value = aaaaaaaaaaaaaaaaaaa;