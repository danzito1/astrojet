const flights = document.getElementById('list_flights');
        const item = flights.getElementsByTagName('li');

        for (let i = 0; i < item.length; i++) {
            item[i].addEventListener('click', function() {
                const numDiv = this.getElementByClassName('num');
                const localDiv = this.getElementByClassName('local');
                const local1 = localDiv.getElementByClassName('from');
                const local2 = localDiv.getElementByClassName('to');
                const icaoDiv = this.getElementByClassName('icaos');
                const icao1 = localDiv.getElementByClassName('from');
                const icao2 = localDiv.getElementByClassName('to');
                const num = numDiv.getElementByClassName('fnum');
                var locals = local1.innerText + "/" + local2.innerText;
                var icaos = icao1.innerText + "/" + icao2.innerText;
                var numero = num.innerText;
                
                const infos = [locals, icaos, numero];
                
                localStorage.setItem('flightClicked', JSON.stringify(infos));
                location.href = 'viewflight.html';
            });
        }
