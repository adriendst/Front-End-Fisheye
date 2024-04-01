function displaySelect() {
    const customSelect = document.getElementById('customSelect');

    const test = [...customSelect.children];

    const displayOption = test.some(element => element.className.includes('hidden'));

    if (displayOption) {
        for (let i = 0; i < customSelect.childElementCount; i++) {
            if (customSelect.children[i].className !== 'chevron') {
                customSelect.children[i].setAttribute('tabindex', '0')
                customSelect.children[i].className = 'options';
                customSelect.children[i].setAttribute('onclick', 'select(this)');
                customSelect.children[i].setAttribute('onkeydown', 'if(event.keyCode === 13) select(this)');
                customSelect.removeAttribute('onclick');
                customSelect.removeAttribute('onkeydown');
                customSelect.removeAttribute('tabindex')
            }
        }
    }
}

function select(elementClicked) {
    const customSelect = document.getElementById('customSelect');
    customSelect.setAttribute('tabindex', '0')
    for (let i = 0; i < customSelect.childElementCount; i++) {
        if (customSelect.children[i].className !== 'chevron') {
            customSelect.children[i].removeAttribute('tabindex')
            if (customSelect.children[i] !== elementClicked) {
                customSelect.children[i].className = 'options hidden';
            }
            customSelect.children[i].removeAttribute('onclick');
        }
    }

    setTimeout(() => {
        customSelect.setAttribute('onclick', 'displaySelect()'); // Ajoutez l'événement displaySelect
        customSelect.setAttribute('onkeydown', 'if(event.keyCode === 13) displaySelect()');

    }, '1');

    const sortBy = elementClicked.getElementsByTagName('p')[0].innerText
    sortPhoto(sortBy)
}


