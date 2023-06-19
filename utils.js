const endSwipe = () => {
  document.querySelector("main").innerHTML = `
      <div class="end">
          <img src="/images/paw-icon.png" alt="">
          <p>No more profiles nearby...</p>
      </div>
    `;
};

export { endSwipe };
