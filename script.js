const affiliateUrl = '';

const cta = document.querySelector('#mainCta');
const heroVideo = document.querySelector('.hero-video');
const rotatingImage = document.querySelector('#rotatingImage');
const previewImages = [
  'images/WhatsApp%20Image%202026-05-19%20at%2021.21.41.jpeg',
  'images/WhatsApp%20Image%202026-05-21%20at%2009.20.25.jpeg',
  'images/WhatsApp%20Image%202026-05-21%20at%2009.15.35.jpeg',
  'images/WhatsApp%20Image%202026-05-21%20at%2009.16.19.jpeg'
];

if (affiliateUrl && cta) {
  cta.href = affiliateUrl;
}

if (heroVideo) {
  heroVideo.addEventListener('timeupdate', () => {
    if (heroVideo.currentTime >= 25) {
      heroVideo.currentTime = 0;
      heroVideo.play();
    }
  });
}

let imageIndex = 0;

setInterval(() => {
  if (!rotatingImage) return;

  imageIndex = (imageIndex + 1) % previewImages.length;
  rotatingImage.classList.add('is-switching');

  setTimeout(() => {
    rotatingImage.src = previewImages[imageIndex];
    rotatingImage.classList.remove('is-switching');
  }, 420);
}, 2600);
