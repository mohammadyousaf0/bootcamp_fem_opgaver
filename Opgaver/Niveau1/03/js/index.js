// "DOMContentLoaded" event'en sørger for, at Javascriptet først kører når hele HTML dokumentet er indlæst

// N1 - 02
document.addEventListener("DOMContentLoaded", () => {
  const list = document.querySelector("#hej");

  function skjulElementViaCssSelector(cssSelector) {
    list.style.display = "none";
  }
}); // Afslutter: DOMContentLoaded
