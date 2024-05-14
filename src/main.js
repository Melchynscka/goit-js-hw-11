import { fetchPhoto } from './js/pixabay-api.js';
import { galleryMarkup } from './js/render-functions.js';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const galleryEl = document.querySelector('.gallery');
const searchFormEl = document.querySelector('.myForm');
const loaderEl = document.querySelector('.loader');

const lightboxGallery = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

function onSearchFormSubmit(event) {
  event.preventDefault();
  const searchRequest = event.target.elements.textInput.value.trim();
  if (searchRequest === '') {
    galleryEl.innerHTML = '';
    event.target.reset();
    iziToast.error({
      position: 'topRight',
      class: 'error',
      message: 'Please put your request',
      timeout: 2000,
    });
    return;
  }

  galleryEl.innerHTML = '';
  loaderEl.classList.remove('is-hidden');

  fetchPhoto(searchRequest)
    .then(imagesData => {
      if (imagesData.total === 0) {
        event.target.reset();
        iziToast.error({
          position: 'topRight',
          class: 'error',
          message:
            'Sorry, there are no images matching your search query. Please try again!',
          timeout: 2000,
        });
      }
      galleryEl.innerHTML = galleryMarkup(imagesData.hits);
      lightboxGallery.refresh();
      event.target.reset();
      loaderEl.classList.add('is-hidden');
    })
    .catch(error => console.log(error));
}

searchFormEl.addEventListener('submit', onSearchFormSubmit);
