//Mettre le code JavaScript lié à la page photographer.html
async function getPhotograper() {
    let params = new URL(document.location).searchParams;
    let id = params.get("id");

    let response = await fetch("../../data/photographers.json");
    response = await response.json();
    const photographer = response.photographers.filter(photographer => photographer.id === parseInt(id))
    const photos = response.media.filter(photo => photo.photographerId === parseInt(id))
    return ({
        photos: [...photos],
        photographer: photographer[0]
    })
}

async function displayPhotos(photos, photographerName) {
    const main = document.getElementById("main");
    if (document.getElementsByTagName('section').length > 0) {
        document.getElementsByTagName('section')[0].remove()
    }
    const photosSection = document.createElement('section')


    photos.forEach((photo) => {
        const photoModel = photoTemplate(photo, photographerName);
        const photoCardDOM = photoModel.getPhotoCardDOM();
        photosSection.appendChild(photoCardDOM);
    });

    main.appendChild(photosSection)
}

async function displayPhotorapherInformations(photographerData, totalLikes) {
    photographerInformationTemplate(photographerData, totalLikes)
}

let photostest;
let photographertest;

async function initPhotos() {
    const { photos, photographer } = await getPhotograper();
    photostest = photos.map(photo => {
        photo.photographerName = photographer.name
        return photo
    })
    photographertest = photographer
}

async function init() {
    // Récupère les datas des photo et de la photographe
    const { photos, photographer } = await getPhotograper();
    displayPhotos(photos, photographer.name)


    let totalLikes = 0
    photos.map(photo => totalLikes += photo.likes)
    displayPhotorapherInformations(photographer, totalLikes)
}

init();
initPhotos()

function sortPhoto(sortBy) {
    if (sortBy === 'Popularité') {
        photostest.sort((a, b) => a.likes - b.likes)
        photostest.reverse()
    }
    else if (sortBy === 'Titre') {
        photostest.sort((a, b) => a.title.localeCompare(b.title))
    }
    else if (sortBy === 'Date') {
        photostest.sort((a, b) => {
            var aa = a.date.split('-').join(),
                bb = b.date.split('-').join();
            return aa < bb ? -1 : (aa > bb ? 1 : 0);
        })
    }
    displayPhotos(photostest, photographertest.name)
}