window.onload = function() {
    const infos = JSON.parse(localStorage.getItem('flightClicked'));
    if (infos != null && infos[2] != null) {
        document.title = "Vôo " + infos[2].split("/")[0];
    }
}
