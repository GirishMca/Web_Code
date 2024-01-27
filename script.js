const container = document.querySelector("container");
const seats = document.querySelector(" .row.seat:not(.sold)");
const count = document.getElementById("count");
const total = document.getElementById("total");
const movieSelect = document.getElementById("movie");

populateUI();
let ticketPrice = +movieSelect.nodeValue;
function setMovieDate(movieIndex, moviePrice){
    localStorage.setItem("selectedMovieIndex",movieIndex);
    localStorage.setItem("selectedMoviePrice", moviePrice)
}
function updatedSelectedCount(){
    const selectedSeats = document.querySelectorAll('.row .seat.selected ')
    const seatsIndex = [...selectedSeats].map(seat =>[...seats].indexOf(seat))

    localStorage.setItem('selectedSeats', JSON.stringify(seatsIndex))

    const selectedSeatsCount = selectedSeats.length
    count.innerText = selectedSeatsCount
    total.innerText = selectedSeatsCount *ticketPrice;
    setMovieDate(movieSelect, selectedIndex, movieSelect.value);

}

function populateUI(){
const selectedSeats = JSON.parse(localStorage.getItem('selectedSeats'));

if(selectedSeats !== null && selectedSeats.length > -1){
    seats.forEach((seat, index) =>{
        if(selectedSeats.indexOf(index)> -1){
            seat.classlist.add("selected");
        }
    })
}
const selectedMovieIndex = localStorage.getItem('selectedMovieIndex')

if(selectedMovieIndex !== null){
    movieSelect.selectedIndex = selectedMovieIndex;
}
}

movieSelect.addEventListener('change', e=>{
    ticketPrice = +e.target.value
    setMovieDate(e.target.selectedIndex, e.target.value)
    updatedSelectedCount();
})

container.addEventListener('click', e =>{
    if(
        e.target.classlist.contains('seat') && !e.target.classlist.contains('sold')
    ){
        e.target.classlist.toggle("selected");
        updatedSelectedCount();
    }
})

updatedSelectedCount();