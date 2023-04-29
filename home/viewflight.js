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
            img.setAttribute("src", "");
        } else if (num == 2) {
            img.setAttribute("src", "");
        }
    }
    
}
