const flights = document.getElementById("list_flights");
flights.addEventListener("click", function(event) {
    const itemClicked = event.target;
    const index = Array.from(flights.children).indexOf(itemClicked);
    alert(index.toString());
});


