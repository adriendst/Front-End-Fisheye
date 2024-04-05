export function photographerTemplate(data) {
    const { city, country, id, name, portrait, price, tagline } = data;

    const picture = `assets/photographers/${portrait}`;

    function getUserCardDOM() {
        const article = document.createElement('article');
        const a = document.createElement('a')
        a.setAttribute('href', '/photographer.html?id=' + id)
        a.setAttribute('aria-label' , name)
        const img = document.createElement('img');
        img.setAttribute('alt', ' ')
        img.setAttribute("src", picture)
        const h2 = document.createElement('h2');
        h2.textContent = name;
        const div = document.createElement('div')
        div.setAttribute('tabindex' , '0')
        const location = document.createElement('p');
        location.setAttribute('class', 'location')
        location.textContent = city + ', ' + country;
        const tagLine = document.createElement('p');
        tagLine.setAttribute('class', 'tag-line')
        tagLine.textContent = tagline;
        const priceSection = document.createElement('p');
        priceSection.setAttribute('class', 'price')
        priceSection.textContent = price + '€/jour';
        a.appendChild(img)
        a.appendChild(h2);
        article.appendChild(a)
        div.appendChild(location)
        div.appendChild(tagLine)
        div.appendChild(priceSection)
        article.appendChild(div)
        return (article);
    }
    return { getUserCardDOM }
}