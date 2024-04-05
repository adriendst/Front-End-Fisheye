export function incrementLike(event) {
    const heart = event.srcElement.parentElement.firstChild
    const newHeart = document.createElement('i')
    newHeart.addEventListener('click', decrementLike)
    newHeart.addEventListener('keydown', (event) => { if (event.keyCode === 13) decrementLike(event) })
    newHeart.setAttribute('aria-label', 'likes')
    newHeart.setAttribute('class', 'fa-solid fa-heart')
    newHeart.setAttribute('tabindex', '0')
    heart.parentElement.firstChild.innerText = Number(heart.parentElement.firstChild.innerText) + 1
    event.srcElement.replaceWith(newHeart)
    newHeart.focus()

    const totalHeart = document.getElementsByClassName('fixed')[0].firstChild.firstChild
    totalHeart.innerText = Number(totalHeart.innerText) + 1
}

export function decrementLike(event) {
    const heart = event.srcElement.parentElement.firstChild
    const newHeart = document.createElement('i')
    newHeart.addEventListener('click', incrementLike)
    newHeart.addEventListener('keydown', (event) => { if (event.keyCode === 13) incrementLike(event) })
    newHeart.setAttribute('aria-label', 'likes')
    newHeart.setAttribute('class', 'fa-solid fa-heart')
    newHeart.setAttribute('tabindex', '0')
    heart.parentElement.firstChild.innerText = Number(heart.parentElement.firstChild.innerText) - 1
    event.srcElement.replaceWith(newHeart)
    newHeart.focus()


    const totalHeart = document.getElementsByClassName('fixed')[0].firstChild.firstChild
    totalHeart.innerText = Number(totalHeart.innerText) - 1
}