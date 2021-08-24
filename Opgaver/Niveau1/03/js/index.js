// N1 - 02
  function skjulElementViaCssSelector(cssSelector) {
    let element = document.querySelector(cssSelector);
    element.style.display = "none";
  }
  
  skjulElementViaCssSelector("#list");
