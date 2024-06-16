const video = document.querySelector(".video-container video");
const hoverText = document.querySelector(".video-container .hover-text");

video.addEventListener("mouseover", (event) => {
  video.play();
  hoverText.classList.remove("active");
});

video.addEventListener("mouseout", (event) => {
  video.pause();
  hoverText.classList.add("active");
});
