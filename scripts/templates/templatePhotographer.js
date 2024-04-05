import { displayLightBox } from "../utils/customLightBox.js";
import { incrementLike } from "../utils/customLike.js";

export function photoTemplate(data, photographerName) {
    // eslint-disable-next-line no-unused-vars
    const { date, id, likes, image, photographerId, price, title, video } = data;

    const photographerFirstName = photographerName.split(' ')[0]
    const picture = `assets/photographerImages/${photographerFirstName}/${video ? video : image}`;

    function getPhotoCardDOM() {
        const article = document.createElement('article');
        const img = document.createElement(video ? 'video' : 'img')
        img.setAttribute("src", picture)
        img.setAttribute('alt', title)
        img.setAttribute('tabindex', '0')
        img.setAttribute('aria-label', "Lilac breasted roller, closeup view")
        img.addEventListener('click', () => displayLightBox(picture, title))
        img.addEventListener('keydown', (event) => { if (event.keyCode === 13) displayLightBox(picture, title) })

        const div = document.createElement('div')
        div.setAttribute('class', 'card-content')

        const h2 = document.createElement('h2')
        h2.setAttribute('tabindex', '0')
        h2.textContent = title

        const like = document.createElement('div')
        const likeNumber = document.createElement('span')
        likeNumber.setAttribute('class', 'likes')
        likeNumber.textContent = likes
        const heartIcon = document.createElement('i')
        heartIcon.setAttribute('tabindex', '0')
        heartIcon.addEventListener('click', incrementLike)
        heartIcon.addEventListener('keydown', (event) => { if (event.keyCode === 13) incrementLike(event) })
        heartIcon.setAttribute('aria-label', 'likes')
        heartIcon.setAttribute('class', 'fa-solid fa-heart')
        like.appendChild(likeNumber)
        like.appendChild(heartIcon)

        div.appendChild(h2)
        div.appendChild(like)

        article.appendChild(img)
        article.appendChild(div)

        return (article);
    }
    return { getPhotoCardDOM }
}

export function photographerInformationTemplate(photographerData, totalLikes) {
    const section = document.querySelector('.photograph-header')
    const picture = `assets/photographers/${photographerData.portrait}`;

    const modalTitle = document.getElementsByClassName('modal')[0].children[0].children[0]
    modalTitle.innerHTML = modalTitle.innerHTML + ' ' + photographerData.name
    document.getElementsByClassName('modal')[0].setAttribute('aria-label', `Contact me ${photographerData.name}`)

    const div = document.createElement('div')
    const h1 = document.createElement('h1')
    h1.setAttribute('tabindex', '0')
    h1.textContent = photographerData.name
    div.appendChild(h1)

    const divLocation = document.createElement('div')
    divLocation.setAttribute('tabindex', '0')

    const location = document.createElement('p')
    location.setAttribute('class', 'location')
    location.textContent = photographerData.city + ', ' + photographerData.country
    divLocation.appendChild(location)

    const tagLine = document.createElement('p')
    tagLine.textContent = photographerData.tagline
    divLocation.appendChild(tagLine)

    div.append(divLocation)

    section.prepend(div)

    const divImg = document.createElement('div')
    const img = document.createElement('img')
    img.setAttribute('src', picture)
    img.setAttribute('alt', photographerData.name)
    img.setAttribute('tabindex', '0')
    img.setAttribute('class', 'photograph-image')
    divImg.appendChild(img)
    section.appendChild(divImg)

    const main = document.querySelector('#main')
    const fixed = document.createElement('div')
    fixed.setAttribute('tabindex', '0')
    fixed.setAttribute('class', 'fixed')
    const totalLikesDiv = document.createElement('div')
    const totalLikesSpan = document.createElement('span')
    totalLikesSpan.innerHTML = totalLikes
    const HeartSpan = document.createElement('i')
    HeartSpan.setAttribute('class', 'fa-solid fa-heart')

    totalLikesDiv.append(totalLikesSpan)
    totalLikesDiv.append(HeartSpan)
    fixed.append(totalLikesDiv)

    const price = document.createElement('span')
    price.textContent = photographerData.price + '€ / jour'
    fixed.appendChild(price)

    main.children[0].insertAdjacentElement('afterend', fixed)


}