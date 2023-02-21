const playSound = (e) => {
    const audio = document.querySelector(`audio[data-key=${e.key.toUpperCase()}]`)
    const key = document.querySelector(`.key[data-key=${e.key.toUpperCase()}]`)
    if (!audio) return;
    audio.currentTime = 0;
    audio.play();
    key.classList.add('playing')
}

window.addEventListener('keydown', playSound)

const keys = document.querySelectorAll('.key')

keys.forEach(key => key.addEventListener('transitionend', (e) => {
    if(e.propertyName === 'transform') {
        key.classList.remove('playing')
    }
}))

