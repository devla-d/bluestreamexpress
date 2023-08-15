const mobile_menu = document.getElementById("mobile-menu");
document.getElementById("toggler-btn").addEventListener("click", () => {
  mobile_menu.classList.add("active");
});
document.getElementById("close-toggler-btn").addEventListener("click", () => {
  mobile_menu.classList.remove("active");
});
