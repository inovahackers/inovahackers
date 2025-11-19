function showImageModal(src) {
  const modalImage = document.getElementById('modalImage');
  const zoomContainer = document.querySelector('.zoom-container');
  let scale = 1;
  let startDistance = 0;

  modalImage.src = src;
  modalImage.style.transform = 'scale(1)'; // resetar zoom
  $('#imageModal').modal('show');

  zoomContainer.addEventListener('touchstart', function (e) {
    if (e.touches.length === 2) {
      startDistance = getDistance(e.touches[0], e.touches[1]);
    }
  });

  zoomContainer.addEventListener('touchmove', function (e) {
    if (e.touches.length === 2) {
      const newDistance = getDistance(e.touches[0], e.touches[1]);
      const zoomFactor = newDistance / startDistance;
      scale = Math.min(Math.max(zoomFactor, 1), 3);
      modalImage.style.transform = `scale(${scale})`;
    }
  });
}

function getDistance(touch1, touch2) {
  const dx = touch2.clientX - touch1.clientX;
  const dy = touch2.clientY - touch1.clientY;
  return Math.sqrt(dx * dx + dy * dy);
}

function showVideoModal() {
  const modalVideo = document.getElementById('modalVideo');
  modalVideo.pause(); // garante que não esteja tocando antes
  modalVideo.currentTime = 0; // reinicia
  $('#videoModal').modal('show');
  modalVideo.play(); // inicia após abrir
}

