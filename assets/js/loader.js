// loader.js
window.addEventListener("load", function () {
    const loader = document.getElementById("loader");
    const mainContent = document.getElementById("main-content");
  
    // Fake delay (e.g., 2 seconds)
    setTimeout(() => {
      loader.style.display = "none";
      mainContent.style.display = "block";
    }, 2000); // 2000ms = 2 seconds
  });


setTimeout(() => {
loader.classList.add("fade-out");
setTimeout(() => {
    loader.style.display = "none";
    mainContent.style.display = "block";
}, 500); // wait for fade-out transition
}, 2000);