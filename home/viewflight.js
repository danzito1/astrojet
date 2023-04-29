window.onload = function() {
    
    var img = document.getElementById('banner');
    const infos = JSON.parse(localStorage.getItem('flightClicked'));
    var fromTo = document.getElementById('from_to');
    var fNum = document.getElementById('fnum');
    if (infos != null && infos[2] != null) {
        fromTo.innerHTML = infos[0].replace("/", " • ");
        fNum.innerHTML = infos[2].split("/")[0];
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
            img.setAttribute("src", "272757582_658822735253684_6979556306424127227_n.webp.jpg");
        } else if (num == 2) {
            img.setAttribute("src", "273824333_394539802477274_8817170027984017018_n.webp.jpg");
        } else if (num == 3) {
            img.setAttribute("src", "272765205_292001522917447_1464082814141239410_n.webp.jpg");
        }
    } else if (aviao === "A32N") {
        let num = Math.floor(Math.random() * 2) + 1;
        if (num == 1) {
            img.setAttribute("src", "123 Sem Título_20230429173656.png");
        } else if (num == 2) {
            img.setAttribute("src", "122 Sem Título_20230429172151.png");
        }
    } else if (aviao === "A21N") {
        let num = Math.floor(Math.random() * 2) + 1;
        if (num == 1) {
            img.setAttribute("src", "326836368_3308291899487884_7172077089016873445_n.webp.jpg");
        } else if (num == 2) {
            img.setAttribute("src", "290827026_1508686659563430_48866762264346745_n.webp.jpg");
        }
    }
    
}
