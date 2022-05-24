const notification = document.querySelector(".notification");
const notificationClose = document.querySelector(".notification__close");
const header = document.querySelector(".header");
const burger = document.querySelector(".burger");

notificationClose.addEventListener("click", () => {
  notification.style.display = "none";
  header.style = "top: 0";
});

burger.addEventListener("click", () => {
  header.style.zIndex = header.style.zIndex == "50" ? "10" : "50";
});
