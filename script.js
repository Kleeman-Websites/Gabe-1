document.addEventListener("DOMContentLoaded", () => {
  console.log("JS is working!");

  // Example: scroll to the top card when you reach the bottom
  const main = document.querySelector("main");

  main.addEventListener("scroll", () => {
    if (main.scrollTop + main.clientHeight >= main.scrollHeight) {
      main.scrollTo({ top: 0, behavior: "smooth" });
    }
  });
});
