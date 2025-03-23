const tj2 = document.getElementById('tj');

tj2.addEventListener('keydown', (event) => {
    if (event.key == 'Enter' && !event.shiftKey) {
        if (tj2.value == "// ezreload") {
            location.reload();
        } else if (tj2.value == "// ezreset all") {
            localStorage.clear();
        } else if (tj2.value == "// eztester") {
            localStorage.setItem("testMode", "yes");
        } else if (tj2.value == "// eznotester") {
            localStorage.removeItem("testMode");
        } else if (tj2.value == "// ezoverflow") {
            document.querySelector('body').style.overflow = "scroll";
        } else if (tj2.value == "// eznooverflow") {
            document.querySelector('body').style.overflow = "hidden";
        } else if (tj2.value == "// eztest") {
            alert("EzSys");
        }
    }
});