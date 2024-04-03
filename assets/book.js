const myModal = document.getElementById('modal-1')
const myInput = document.getElementById('modal-1')

myModal.addEventListener('shown.bs.modal', () => {
  myInput.focus()
})