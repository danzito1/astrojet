window.onload = function() {
    
    var img = document.getElementById('banner');
    const infos = JSON.parse(localStorage.getItem('flightClicked'));
    if (infos != null && infos[2] != null) {

        document.title = "Vôo " + infos[2].split("/")[0];
    }
    
    var aviao = infos[2].split("/")[1];
    if (aviao === "AT76") {
        let num = Math.floor(Math.random() * 2) + 1;
        if (num == 1) {
            img.setAttribute("src", "270218379_1611388632540815_550111631583611342_n.jpg");
        } else if (num == 2) {
            img.setAttribute("src", "271072038_1256185188207498_589227468577376344_n.jpg");
        }
    } else if (aviao === "A223") {
        let num = Math.floor(Math.random() * 3) + 1;
        if (num == 1) {
            img.setAttribute("src", "270218379_1611388632540815_550111631583611342_n.jpg");
        } else if (num == 2) {
            img.setAttribute("src", "271072038_1256185188207498_589227468577376344_n.jpg");
        }
    }
    
}
