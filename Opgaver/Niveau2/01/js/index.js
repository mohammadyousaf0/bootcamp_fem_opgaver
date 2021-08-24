// N2 - 01
let buttonContainer = document.querySelector("#buttons");
let buttons = document.querySelectorAll("button");

buttonContainer.addEventListener("click", (event) => {
  if (event.target.tagName === "button") {
     buttons.forEach(button => button.removeAttribute("style"));
    event.target.style.backgroundColor = "lightblue";
  }
});