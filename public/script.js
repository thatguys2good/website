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

function handleKey(event) {
  if (event.key === "Enter") {
    checkKey();
  }
}

function checkKey() {
  const keyInput = document.getElementById("keyInput").value;

  if (keyInput === correctKey) {
    showNotification("Correct key entered!", true);
    setTimeout(() => {
      document.querySelector(".container").style.display = "none";
      displayPlayButton();
    }, 1000);
  } else {
    showNotification("Wrong key, try again!", false);
  }
}

function displayPlayButton() {
  const playButton = document.createElement("div");
  playButton.classList.add("play-button");
  playButton.innerHTML = `<button onclick="startGame()">Play</button>`;
  document.body.appendChild(playButton);
  playButton.style.display = "flex";
}

function startGame() {
  alert("fein");
}
