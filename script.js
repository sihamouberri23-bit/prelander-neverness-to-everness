const affiliateUrl = '';

const cta = document.querySelector('#mainCta');
const heroVideo = document.querySelector('.hero-video');
const rotatingImage = document.querySelector('#rotatingImage');
const previewImages = [
  'images/image-Neverness-to-Everness-1.jpeg',
  'images/image-Neverness-to-Everness-2.jpeg',
  'images/image-Neverness-to-Everness-3.jpeg',
  'images/image-Neverness-to-Everness-4.jpeg'
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
