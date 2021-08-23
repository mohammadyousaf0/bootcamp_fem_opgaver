// "DOMContentLoaded" event'en sørger for, at Javascriptet først kører når hele HTML dokumentet er indlæst

// N1 - 02
document.addEventListener("DOMContentLoaded", () => {
  const resultatet = document.querySelector("#result");
  var resultat = 1.3333333333333333;

  function beregnForhold(a, b) {
    document.getElementById("result").innerHTML = 4 / 3;
    return resultatet;
  }

  beregnForhold();

  console.log(resultat);
}); // Afslutter: DOMContentLoaded
