function photographerTemplate(data) {
    const { city, country, id, name, portrait, price, tagline } = data;

    const picture = `assets/photographers/${portrait}`;

    function getUserCardDOM() {
        const article = document.createElement('article');
        const a = document.createElement('a')
        a.setAttribute('href', '/photographer.html?id=' + id)
        const img = document.createElement('img');
        img.setAttribute("src", picture)
        const h2 = document.createElement('h2');
        h2.textContent = name;
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
        article.appendChild(location)
        article.appendChild(tagLine)
        article.appendChild(priceSection)
        return (article);
    }
    return { getUserCardDOM }
}