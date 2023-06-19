import dogs from "./data.js";
import Dog from "./Dog.js";
import { endSwipe } from "./utils.js";

let isWating = false;

const getNewDog = () => {
  const index = dogs.findIndex((dog) => !dog.hasBeenSwiped);

  if (index !== -1) {
    dogs[index].hasBeenSwiped = true;
    return new Dog(dogs[index]);
  } else {
    return null;
  }
};

const swipe = () => {
  if (!isWating) {
    dog.getBadgeHtml();
    isWating = true;

    setTimeout(() => {
      dog = getNewDog();
      dog ? render() : endSwipe();
      isWating = false;
    }, 1000);
  }
};

document.addEventListener("click", (e) => {
  if (e.target.id === "heart-btn") {
    dog.setLike();
    swipe();
  } else if (e.target.id === "cross-btn") {
    swipe();
  }
});

/* document.getElementById("heart-btn").addEventListener("click", () => {
  dog.setLike();
  swipe();
});
document.getElementById("cross-btn").addEventListener("click", swipe); */

const render = () => {
  document.getElementById("profile").innerHTML = dog.getDogHtml();
};

let dog = getNewDog();
render();
