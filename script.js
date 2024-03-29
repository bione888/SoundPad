window.addEventListener('keydown' , function(e) {
    const audio = document.querySelector(`audio[data-key='${e.keyCode}']`)
    const key = this.document.querySelector(`.key[data-key='${e.keyCode}']`)
    if(!audio) {
        return;
    } else {
        audio.currentTime = 0
        audio.play()
        key.classList.add('playing')
    }

    function removetransition(e) {
        if(e.propertyName !== 'transform') {
            return;
        } else {
            this.classList.remove('playing')
        }
    }

    const keys = document.querySelectorAll('.key')
    keys.forEach(function(key) {
        key.addEventListener('transitionend' , removetransition)
    })
})