// "DOMContentLoaded" event'en sørger for, at Javascriptet først kører når hele HTML dokumentet er indlæst

// N2 - 01
document.addEventListener("DOMContentLoaded", () => {
   let list = document.querySelector("#buttons button");

   list.addEventListener('click', () => list.style.backgroundColor = '#337ab7');

}); // Afslutter: DOMContentLoaded
