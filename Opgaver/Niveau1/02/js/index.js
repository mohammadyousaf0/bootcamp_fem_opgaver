// "DOMContentLoaded" event'en sørger for, at Javascriptet først kører når hele HTML dokumentet er indlæst

// N1 - 02
document.addEventListener("DOMContentLoaded", () => {
  const resultat = document.querySelector("#result");

  function beregnForhold(a, b) {
    document.getElementById("result").innerHTML = 4 / 3;
    return resultat;
  }

  beregnForhold();
}); // Afslutter: DOMContentLoaded
