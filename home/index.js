const flights = document.getElementById("list_flights");
flights.addEventListener("click", function(event) {
    if (event.target.tagName === "LI" && event.target.parentElement === flights) {
        alert("O item que foi clicado: " + event.target.textContent);
    }
});


