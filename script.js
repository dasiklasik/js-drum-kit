const audio = document.querySelectorAll('audio')
const keys = document.querySelectorAll('.key')

window.addEventListener('keydown', function (e) {
    keys.forEach(function (item, i, arr) {
        if(item.dataset.key === e.key.toUpperCase()) {
            item.classList.add('playing')
            setTimeout(function () {item.classList.remove('playing')}, 100)
        }
    })
})