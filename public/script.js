
const correctKey = "beta";
function showNotification(message, isSuccess) {
  const notification = document.getElementById("notification");
  notification.textContent = message;
  notification.classList.add("show");

  if (isSuccess) {
    notification.classList.add("success");
    notification.classList.remove("error");
  } else {
    notification.classList.add("error");
    notification.classList.remove("success");
  }
  setTimeout(() => {
    notification.classList.remove("show");
  }, 2000);
}
function checkKey() {
  const keyInput = document.getElementById("keyInput").value;
  if (keyInput === correctKey) {
    showNotification("Correct key entered!", true);
    document.getElementById("playButton").classList.remove("hidden");
  } else {
    showNotification("Wrong key, try again!", false);
  }
}
function startGame() {
  alert("thanks!");
}
