function displayModal() {
    const contactModal = document.getElementById("contact_modal");
	contactModal.style.display = "flex";
    const modal = document.getElementsByClassName('modal')[0]
    console.log(modal)
    modal.focus()
}

function closeModal() {
    const contactModal = document.getElementById("contact_modal");
    contactModal.style.display = "none";
    document.getElementsByClassName('contact_button')[0].focus()
}

function closeTab(event){
    console.log(event.keyCode)
    if(event.keyCode === 9){
        const closeModalButton = Array.from(document.getElementsByTagName('img')).filter(img => img.alt ==='close contact form')[0]
        setTimeout(() => {
            closeModalButton.focus()
        }, 1);
   }
}

function sendData(event){
    event.preventDefault()
    console.log(document.getElementById('firstname').value)
    console.log(document.getElementById('lastname').value)
    console.log(document.getElementById('email').value)
    console.log(document.getElementById('message').value)
    closeModal()
    return false
}