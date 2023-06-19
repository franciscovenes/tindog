// Create the Dog class here

class Dog {
  constructor(data) {
    Object.assign(this, data);
  }

  // Methods

  getDogHtml() {
    const { name, avatar, age, bio } = this;
    return `
            <div class="profile-text">
                <h1>${name}, ${age}</h1>
                <p>${bio}</p>
            </div>
            <img src="${avatar}" alt="Picture of dog" />
    `;
  }

  setLike() {
    this.hasBeenLiked = true;
  }

  getBadgeHtml() {
    console.log("Badge");
    const img = document.createElement("img");
    img.src = this.hasBeenLiked
      ? "images/badge-like.png"
      : "images/badge-nope.png";
    img.classList.add("badge");
    document.getElementById("profile").appendChild(img);
  }
}

export default Dog;
