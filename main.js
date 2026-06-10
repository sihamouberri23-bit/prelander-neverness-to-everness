const cta = document.querySelector(".cta");
const video = document.querySelector("video");

cta?.addEventListener("mouseenter", () => {
  cta.style.animationDuration = "1.05s";
});

cta?.addEventListener("mouseleave", () => {
  cta.style.animationDuration = "";
});

video?.addEventListener("canplay", () => {
  video.play().catch(() => {
    video.controls = true;
  });
});
