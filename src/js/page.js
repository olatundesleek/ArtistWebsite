let player = document.querySelector(".playbtn");
let playerModal = document.querySelector(".page-player");
let closePlayer = document.querySelector(".close");

player.addEventListener("click", function open() {
  playerModal.style.display = "block";
  console.log("i am running");
});

closePlayer.addEventListener("click", function closePlayer() {
  playerModal.style.display = "none";
  console.log("i am running");
});
