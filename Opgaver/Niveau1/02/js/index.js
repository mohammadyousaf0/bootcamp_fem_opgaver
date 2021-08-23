// "DOMContentLoaded" event'en sørger for, at Javascriptet først kører når hele HTML dokumentet er indlæst

// N1 - 02
document.addEventListener("DOMContentLoaded", () => {
  const resultat = document.querySelector("#result");

  function beregnForhold(a, b) {
    document.getElementById("result").innerHTML = a / b;
    return resultat;
  }

  beregnForhold();
}); // Afslutter: DOMContentLoaded
