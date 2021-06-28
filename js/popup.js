const searchBtn = document.querySelector('.search-btn');
const formModal = document.querySelector('.modal');
const arrivalDate = formModal.querySelector('[name=arrival]');
const departureDate = formModal.querySelector('[name=departure]');
const numberGrown = formModal.querySelector('[name=grown]');
const numberChild = formModal.querySelector('[name=children]');

let isStorageSupport = true;
let storageGrown = '';
let storageChild = '';

try {
  storageGrown = localStorage.getItem('numberGrown');
  storageChild = localStorage.getItem('numberChild');
} catch (err) {
  isStorageSupport = false;
}

formModal.classList.add('modal-hide');

searchBtn.addEventListener('click', function (evt) {
  evt.preventDefault();
  formModal.classList.toggle('modal-hide');
  if (formModal.classList.contains('modal-hide')) {
    formModal.classList.remove('modal-error');
  }
  arrivalDate.focus();
  if (storageGrown) {
    numberGrown.value = storageGrown;
  }
  if (storageChild) {
    numberChild.value = storageChild;
  }
})

formModal.addEventListener('submit', function(evt) {
  if (!arrivalDate.value || !departureDate.value || !numberGrown.value || !numberChild.value) {
    evt.preventDefault();
    formModal.classList.remove('modal-error');
    formModal.offsetWidth = formModal.offsetWidth;
    formModal.classList.add('modal-error');
  } else {
    if (isStorageSupport) {
      localStorage.setItem('numberGrown', numberGrown.value);
      localStorage.setItem('numberChild', numberChild.value);
    }
  }
})

window.addEventListener('keydown', function(evt) {
  if (evt.key === 'Esc' || evt.key === 'Escape') {
    if (formModal.classList.contains('modal-hide')) {
      evt.preventDefault();
    } else {
      formModal.classList.add('modal-hide');
      formModal.classList.remove('modal-error');
    }
  }
})
