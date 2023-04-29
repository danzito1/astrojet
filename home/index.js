const flights = document.getElementById('list_flights');
const item = flights.getElementsByTagName('li');

for (let i = 0; i < item.length; i++) {
    item[i].addEventListener('click', function() {
        alert('o item clicado foi: ' + String(i));
        localStorage.setItem('flightClicked', i.toString());
        location.href = 'viewflight.html';
    });
}


