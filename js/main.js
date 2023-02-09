const mainObject = document.querySelector(".question-answer");
function toggle(event) {
  if (event.target.tagName == "A" ) {
    const eObject = event.target.parentNode.lastElementChild;

    eObject.classList.toggle("drop-active");
  }
}
mainObject.addEventListener("click", toggle);
