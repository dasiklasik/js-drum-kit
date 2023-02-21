window.addEventListener('keydown', function (e) {
    const audio = document.querySelector(`audio[data-key=${e.key.toUpperCase()}]`)
    if (!audio) return;
    audio.play();
})