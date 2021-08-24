// "DOMContentLoaded" event'en sørger for, at Javascriptet først kører når hele HTML dokumentet er indlæst

// N2 - 01
document.addEventListener("DOMContentLoaded", () => {
  document.querySelector('#buttons').onclick = changeColor;   

    function changeColor() {
        document.body.style.color = "purple";
        return false;
    } 

}); // Afslutter: DOMContentLoaded
