// "DOMContentLoaded" event'en sørger for, at Javascriptet først kører når hele HTML dokumentet er indlæst
document.addEventListener("DOMContentLoaded", () => {

const colors = ["green", "red"];
const btn = document.getElementById('my-button');

btn.addEventListener("click", function() {
    const newColor = getNewColor();
    console.log(newColor);

    btn.style.backgroundColor = colors[newColor];
});

function getNewColor() {
    return Math.floor(Math.random() * colors.length);
};

}); // Afslutter: DOMContentLoaded