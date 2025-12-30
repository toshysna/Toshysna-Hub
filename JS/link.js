const sfx = document.getElementById("sfx-link");
const links = document.querySelectorAll(".link-hover");

links.forEach(link => {
  link.addEventListener("click", function (e) {
    e.preventDefault(); 
    const url = this.href;
    sfx.playbackRate = 1.2
    sfx.volume = 0.1
    sfx.currentTime = 0;
    sfx.play();


    setTimeout(() => {
      window.open(url, "_blank"); 
    }, 200); 
  });
});
