function incrementLike(heart) {
    heart.parentElement.firstChild.innerText = Number(heart.parentElement.firstChild.innerText) + 1
    heart.setAttribute('onclick', 'decrementLike(this)')
    heart.setAttribute('onkeydown', 'if(event.keyCode === 13) decrementLike(this)')

    const totalHeart = document.getElementsByClassName('fixed')[0].firstChild.firstChild
    totalHeart.innerText = Number(totalHeart.innerText) + 1
}

function decrementLike(heart) {
    heart.parentElement.firstChild.innerText = Number(heart.parentElement.firstChild.innerText) - 1
    heart.setAttribute('onclick', 'incrementLike(this)')
    heart.setAttribute('onkeydown', 'if(event.keyCode === 13) incrementLike(this)')

    const totalHeart = document.getElementsByClassName('fixed')[0].firstChild.firstChild
    totalHeart.innerText = Number(totalHeart.innerText) - 1
}