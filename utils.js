const endSwipe = () => {
  document.getElementById("profile").innerHTML = `
      <div class="end">
          <img src="/images/paw-icon.png" alt="">
          <p>No more profiles nearby...</p>
      </div>
    `;
};

export { endSwipe };
