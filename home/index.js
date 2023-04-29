const flights = document.getElementById('list_flights');
const item = flights.getElementByTagName('li');

for (let i = 0; i < item.length; i++) {
    item[i].addEventListener('click', function() {
        localStorage.setItem('flightClicked', i);
    });
}


