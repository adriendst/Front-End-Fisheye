//Mettre le code JavaScript lié à la page photographer.html
async function getPhotograper(){
    let params = new URL(document.location).searchParams;
    let id = params.get("id");
    
    let response = await fetch("http://localhost:3000/data/photographers.json");
    response = await response.json();
    const photographer =  response.photographers.filter(photographer => photographer.id === parseInt(id))
    const photos = response.media.filter(photo => photo.photographerId === parseInt(id))
    return ({
        photos: [...photos],
        photographer : photographer[0]
    })
}

async function displayPhotos(photos, photographerName) {
    const main = document.getElementById("main");
    const photosSection = document.createElement('section')


    photos.forEach((photo) => {
        const photoModel = photoTemplate(photo, photographerName);
        const photoCardDOM = photoModel.getPhotoCardDOM();
        photosSection.appendChild(photoCardDOM);
    });

    main.appendChild(photosSection)
}

async function displayPhotorapherInformations(photographerData, totalLikes){
    photographerInformationTemplate(photographerData, totalLikes)
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