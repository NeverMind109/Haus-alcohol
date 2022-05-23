const notification = document.querySelector(".notification");
const notificationClose = document.querySelector(".notification__close");

notificationClose.addEventListener("click", () => {
  notification.style.display = "none";
});
