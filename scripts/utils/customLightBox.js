let imageIndex = 0

function displayLightBox(img, title) {
    const modal = document.getElementById("lightBox_modal");
    modal.style.display = "flex";

    displayData(img, title)

    const lightBox = document.getElementsByClassName('lightBox')[0]
    lightBox.focus()

    imageIndex = photostest.map(e => e.title).indexOf(title);
}

function nextImage() {
    imageIndex = imageIndex + 1 > photostest.length - 1 ? 0 : imageIndex + 1

    const photo = photostest[imageIndex]
    const photographerFirstName = photo.photographerName.split(' ')[0]

    displayData(`assets/photographerImages/${photographerFirstName}/${photo.video ? photo.video : photo.image}`, photo.title)
}

function previousImage() {
    imageIndex = imageIndex - 1 < 0 ? photostest.length - 1 : imageIndex - 1

    const photo = photostest[imageIndex]
    const photographerFirstName = photo.photographerName.split(' ')[0]

    displayData(`assets/photographerImages/${photographerFirstName}/${photo.video ? photo.video : photo.image}`, photo.title)
}

function displayData(img, title) {
    const container = document.getElementsByClassName('imageContainer')[0].children[1]
    if (container.localName === 'img') {
        createImage(container, img, title)
    } else {
        createVideo(container, img, title)
    }

    const titleText = document.getElementsByClassName('lightBox')[0].children[1]
    titleText.innerHTML = title
}

function createImage(container, img, title) {
    if (img.split('.')[1] === 'mp4') {
        container.parentNode.removeChild(container)
        const imageContainer = document.getElementsByClassName('imageContainer')[0]
        const videoToAdd = document.createElement('video')
        videoToAdd.setAttribute('tabindex', '0')
        videoToAdd.setAttribute('controls', true)
        const source = document.createElement('source')
        source.setAttribute('src', img)
        videoToAdd.setAttribute('alt', title)
        videoToAdd.append(source)
        imageContainer.children[0].insertAdjacentElement('afterend', videoToAdd)
    }
    else {
        container.setAttribute('src', img)
        container.setAttribute('alt', title)
    }
}

function createVideo(container, img, title) {
    if (img.split('.')[1] === 'mp4') {
        container.children[0].setAttribute('src', img)
        container.children[0].setAttribute('alt', title)
    }
    else {
        container.parentNode.removeChild(container)
        const imageContainer = document.getElementsByClassName('imageContainer')[0]
        const imageToAdd = document.createElement('img')
        imageToAdd.setAttribute('tabindex', '0')
        imageToAdd.setAttribute('src', img)
        imageToAdd.setAttribute('alt', title)
        imageContainer.children[0].insertAdjacentElement('afterend', imageToAdd)
    }
}

function closeLightBox() {
    const img = Array.from(document.getElementsByTagName('article'))[imageIndex]
    img.firstChild.focus()
    const modal = document.getElementById("lightBox_modal");
    modal.style.display = "none";
}

function nextTab(event) {
    event.preventDefault()
    if (event.keyCode === 9) {
        if (event.target.tagName === 'P') {
            const chevronLeft = document.querySelector('.fa-chevron-left');
            chevronLeft.focus()
        }
        if (event.srcElement.className === 'fa-solid fa-chevron-left'){
            const chevronRight = document.querySelectorAll('.fa-chevron-right')[1];
            chevronRight.focus()
        }
        if (event.srcElement.className === 'fa-solid fa-chevron-right'){
            const close = document.querySelector('.fa-xmark');
            close.focus()
        }

    }
}


//alt -> Image
//aria-label -> reste des éléments