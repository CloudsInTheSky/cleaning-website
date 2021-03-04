let modal = document.getElementById('modalForm');
let contact = document.getElementById('contactBtn');
let span = document.getElementsByClassName('modal-form-content-close')[0];

contact.onclick = () => modal.style.display = "block"
span.onclick = () => modal.style.display = "none"
window.onclick = (event) => event.target == modal ? modal.style.display = "none" : "block";