const openModalButton = document.querySelectorAll('.contact_button')[1]
openModalButton.addEventListener('click', () => { displayModal() })

const closeModalButton = document.querySelector('#closeicon')
closeModalButton.addEventListener('click', () => closeModal())
closeModalButton.addEventListener('keydown', (event) => { if (event.keyCode === 13) { closeModal() } else if (event.keyCode === 9) focusFirstElementModal() })


const sendModalButton = document.querySelectorAll('.contact_button')[0]
sendModalButton.addEventListener('keydown', (event) => closeTab(event))

const form = document.querySelector('form')
form.addEventListener('submit', (event) => sendData(event))


export function displayModal() {
    const contactModal = document.getElementById("contact_modal");
    contactModal.style.display = "flex";
    const modal = document.getElementsByClassName('modal')[0]
    modal.focus()
}

function closeModal() {
    const contactModal = document.getElementById("contact_modal");
    contactModal.style.display = "none";
    document.getElementsByClassName('contact_button')[0].focus()
}

export function closeTab(event) {
    if (event.keyCode === 9) {
        const close = document.querySelector('#closeicon');
        console.log(close)
        setTimeout(() => {
            close.focus()
        }, 0);
    }
}

export function focusFirstElementModal() {
    const modal = document.querySelector('.modal')
    modal.focus()
}

export function sendData(event) {
    event.preventDefault()
    console.log(document.getElementById('firstname').value)
    console.log(document.getElementById('lastname').value)
    console.log(document.getElementById('email').value)
    console.log(document.getElementById('message').value)
    closeModal()
    return false
}