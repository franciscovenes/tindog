import dogs from "./data.js";
import Dog from "./Dog.js";
import { endSwipe } from "./utils.js";

let isWating = false;
let index = 0;

const getNewDog = () => {
  index = dogs.findIndex((dog) => !dog.hasBeenSwiped);

  if (index !== -1) {
    return new Dog(dogs[index]);
  } else {
    return null;
  }
};

const swipe = () => {
  if (!isWating) {
    dogs[index].hasBeenSwiped = true;
    dog.getBadgeHtml();
    isWating = true;

    setTimeout(() => {
      dog = getNewDog();
      dog ? render() : endSwipe();
      isWating = false;
      console.log(dogs);
    }, 1000);
  }
};

document.addEventListener("click", (e) => {
  if (e.target.id === "heart-btn") {
    dogs[index].hasBeenLiked = true;
    dog.setLike();
    swipe();
  } else if (e.target.id === "cross-btn") {
    swipe();
  }
});

const render = () => {
  document.getElementById("profile").innerHTML = dog.getDogHtml();
};

let dog = getNewDog();
render();
