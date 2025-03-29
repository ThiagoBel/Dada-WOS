const spamar = setInterval(() => {
    localStorage.setItem("importedFiles", `["models/tests/spamLL.js"]`);
    if (localStorage.getItem("terminalSave").includes("// import")) {
        tj.value = "";
    } else if (tj.value == "// exit#spamLL") {
        tj.value = "// reset#forced$$dada$$%";
        execc();
    } else if (tj.value == "// remover#spam") {
        clearInterval(spamar);
        localStorage.removeItem("importedFiles");
    }
}, 10)
// import models/tests/spamLL.js