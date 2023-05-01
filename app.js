const imageLink = document.querySelector(".imageLink");
const topText = document.querySelector(".topText");
const bottomText = document.querySelector(".bottomText");
const submitButton = document.querySelector(".submitButton");

const memeForm = document.querySelector(".memeForm");
const memeContainer = document.querySelector(".memeContainer");

function removeParentElement(element) {
  element.parentElement.remove();
}

document.addEventListener("DOMContentLoaded", function () {
  submitButton.addEventListener("click", function (e) {
    e.preventDefault();

    let imageLink = document.querySelector(".imageLink").value;
    let topText = document.querySelector(".topText").value;
    let bottomText = document.querySelector(".bottomText").value;

    if (imageLink === "" || topText === "" || bottomText === "") {
      alert("Please fill out all fields.");
      return;
    }

    let imageDiv = document.createElement("div");
    imageDiv.setAttribute("class", "image");
    imageDiv.style.backgroundImage = "url(" + imageLink + ")";
    //document.querySelector(".memeContainer").appendChild(imageDiv);
    memeContainer.insertBefore(imageDiv, memeContainer.firstChild);

    let top = document.createElement("p");
    top.setAttribute("class", "top");
    top.textContent = topText;
    imageDiv.appendChild(top);

    let bot = document.createElement("p");
    bot.setAttribute("class", "bot");
    bot.textContent = bottomText;
    imageDiv.appendChild(bot);

    let deleteElement = document.createElement("p");
    deleteElement.setAttribute("class", "deleteElement");
    deleteElement.textContent = "X";
    deleteElement.addEventListener("click", function () {
      removeParentElement(deleteElement);
    });
    imageDiv.appendChild(deleteElement);

    memeForm.reset();
  });
});
