// "DOMContentLoaded" event'en sørger for, at Javascriptet først kører når hele HTML dokumentet er indlæst

// N1 - 02
document.addEventListener("DOMContentLoaded", () => {
  const helloText = document.getElementById('hello');
  const list = document.getElementById('list');

  function skjulElementViaCssSelector(cssSelector) {
    helloText.style.display = "none";
    list.style.display ="none";
  }

  skjulElementViaCssSelector();
}); // Afslutter: DOMContentLoaded
