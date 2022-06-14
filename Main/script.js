const navMenu = document.querySelector("#navMenu");
navMenu.addEventListener("click", () => {
  navMenu.classList.toggle("active");
});

// aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa

/* Set the width of the side navigation to 250px */
function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}

/* Set the width of the side navigation to 0 */
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}