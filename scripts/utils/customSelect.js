
import { sortPhoto } from "../pages/pagePhotographer.js";

const customSelectElement = document.getElementsByClassName('customSelect')[0];
customSelectElement.addEventListener('click',  displaySelect)
customSelectElement.addEventListener('keydown', keyBoardEnterDisplaySelect )

function keyBoardEnterDisplaySelect(event) {
    if(event.keyCode === 13){
        displaySelect()
    }
}

function keyBoardEnterSelect(event) {
    if(event.keyCode === 13){
        select(event)
    }
}

export function displaySelect() {
    const customSelect = document.getElementsByClassName('customSelect')[0];

    const test = [...customSelect.children];

    const displayOption = test.some(element => element.className.includes('hidden'));

    if (displayOption) {
        for (let i = 0; i < customSelect.childElementCount; i++) {
            if (customSelect.children[i].className !== 'chevron') {
                customSelect.children[i].setAttribute('tabindex', '0')
                customSelect.children[i].className = 'options';
                customSelect.children[i].addEventListener('click', select);
                customSelect.children[i].addEventListener('keydown', keyBoardEnterSelect);

                customSelect.removeAttribute('tabindex')
            }
        }
    }
    customSelect.removeEventListener('click', displaySelect);
    customSelect.removeEventListener('keydown', keyBoardEnterDisplaySelect);

}

export function select(event) {
    const customSelect = document.getElementsByClassName('customSelect')[0];
    customSelect.setAttribute('tabindex', '0')
    for (let i = 0; i < customSelect.childElementCount; i++) {
        if (customSelect.children[i].className !== 'chevron') {
            customSelect.children[i].removeAttribute('tabindex')
            if (customSelect.children[i] !== event.currentTarget) {
                customSelect.children[i].className = 'options hidden';
            }
            customSelect.children[i].removeEventListener('click', select);
            customSelect.children[i].removeEventListener('keydown', keyBoardEnterSelect);
        }
    }

    setTimeout(() => {
        customSelect.addEventListener('click', displaySelect);
        customSelect.addEventListener('keydown', keyBoardEnterDisplaySelect);
    }, '1');


    const sortBy = event.currentTarget.firstChild.nextSibling.innerHTML
    console.log(sortBy)
    sortPhoto(sortBy)
}


