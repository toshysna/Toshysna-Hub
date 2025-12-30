const logo = document.getElementById("logo");
const yipeeSfx = document.getElementById("yipee-sfx");

logo.addEventListener("click", () => {

  logo.classList.add("animate-rotate-tilt-pop", "animate-multi");
  yipeeSfx.volume = 0.2
  yipeeSfx.playbackRate = 1.5
  yipeeSfx.currentTime = 0;
  yipeeSfx.play();


  logo.addEventListener(
    "animationend",
    () => {
      logo.classList.remove("animate-rotate-tilt-pop", "animate-multi");
    },
    { once: true }
  );
});