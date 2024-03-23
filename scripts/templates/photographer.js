function photoTemplate(data, photographerName) {
/*     console.log(data)
 */    const { date, id, likes, image, photographerId, price, title, video } = data;

    const photographerFirstName = photographerName.split(' ')[0]
    const picture = `assets/photographerImages/${photographerFirstName}/${video ? video : image}`;

    function getPhotoCardDOM() {
        const article = document.createElement('article');
        const img = document.createElement(video ? 'video' : 'img')
        img.setAttribute("src", picture)

        const div = document.createElement('div')
        div.setAttribute('class', 'card-content')

        const h2 = document.createElement('h2')
        h2.textContent = title

        const like = document.createElement('div')
        const likeNumber = document.createElement('span')
        likeNumber.setAttribute('class', 'likes')
        likeNumber.textContent = likes
        /*         const heartIcon = document.createElement('img')
                heartIcon.setAttribute('src', 'assets/icons/close.svg') */
        like.appendChild(likeNumber)
        /*         like.appendChild(heartIcon)
         */

        div.appendChild(h2)
        div.appendChild(like)

        article.appendChild(img)
        article.appendChild(div)

        return (article);
    }
    return { getPhotoCardDOM }
}

function photographerInformationTemplate(photographerData, totalLikes) {
    const section = document.querySelector('.photograph-header')
    console.log(section)
    const picture = `assets/photographers/${photographerData.portrait}`;

    const div = document.createElement('div')
    const h1 = document.createElement('h1')
    h1.textContent = photographerData.name
    div.appendChild(h1)

    const location = document.createElement('p')
    location.setAttribute('class', 'location')
    location.textContent = photographerData.city + ', ' + photographerData.country
    div.appendChild(location)

    const tagLine = document.createElement('p')
    tagLine.textContent = photographerData.tagline
    div.appendChild(tagLine)

    section.prepend(div)

    const img = document.createElement('img')
    img.setAttribute('src', picture)
    img.setAttribute('class', 'photograph-image')

    section.appendChild(img)

    const main = document.querySelector('#main')
    const fixed = document.createElement('div')
    fixed.setAttribute('class', 'fixed')
    const totalLikesSpan = document.createElement('span')
    totalLikesSpan.textContent = totalLikes
    fixed.appendChild(totalLikesSpan)

    const price = document.createElement('span')
    price.textContent = photographerData.price + '€ / jour'
    fixed.appendChild(price)

    main.appendChild(fixed)


}