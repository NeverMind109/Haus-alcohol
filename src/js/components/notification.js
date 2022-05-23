const notification = document.querySelector(".notification");
const notificationClose = document.querySelector(".notification__close");
const header = document.querySelector(".header");

notificationClose.addEventListener("click", () => {
  notification.style.display = "none";
  header.style = "top: 0";
});
