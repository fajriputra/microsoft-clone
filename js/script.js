// const menuToggle = document.querySelector(".menu-btn");
// const showToggle = document.querySelector(".show");

// menuToggle.addEventListener("click", () => {
//   showToggle.classList.toggle("show");
// });

// menuToggle.addEventListener("click", () => {
//   if (showToggle.classList.contains("show")) {
//     showToggle.classList.remove("show");
//   } else {
//     showToggle.classList.add("show");
//   }
// });

document
  .querySelector(".menu-btn")
  .addEventListener("click", () =>
    document.querySelector(".main-menu").classList.toggle("show")
  );
