// Const das Funções

const openModalButtons = document.querySelectorAll('[data-modal-target]')
const closeModalButtons = document.querySelectorAll('[data-close-button]')
const segundoplano = document.getElementById('segundo-plano')

// Evento (botão) para abrir o modal
openModalButtons.forEach(button => {
    button.addEventListener('click', () => {
        const modal = document.querySelector(button.dataset.modalTarget)
        openModal(modal)
    })
})

// Segundo plano ao abrir o modal
segundoplano.addEventListener('click', () => {
    const modal = document.querySelectorAll('.modal.active')
    modal.forEach(modal => {
        closeModal(modal)
    })
})

// Evento (botão) para fechar o modal 
closeModalButtons.forEach(button => {
    button.addEventListener('click', () => {
        const modal = button.closest('.modal')
        closeModal(modal)
    })
})

// Função abrir modal
function openModal(modal) {
    if (modal == null) return
    modal.classList.add('active')
    segundoplano.classList.add('active')
}

// Função fechar modal
function closeModal(modal) {
    if (modal == null) return
    modal.classList.remove('active')
    segundoplano.classList.remove('active')
}


// Função para passar os slides automaticamente
let count = 1;
document.getElementById("slide1").checked = true;

setInterval( function(){
    nextImage();
}, 5000)

function nextImage(){
    count++;
    if(count>4){
        count = 1;
    }

    document.getElementById("slide"+count).checked = true;
}