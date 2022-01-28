// Add imports above this line
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { galleryItems } from './gallery-items';
// Change code below this line
const mainGalleryList = document.querySelector('.gallery');

const createGalleryItemsMarkup = galleryItems.map(({ preview, original, description }) =>
    `<a class="gallery__item" href="${original}" onclick="event.preventDefault()">
  <img class="gallery__image" src="${preview}"  alt="Image description" title="${description}"/>
</a>`).join('');

mainGalleryList.innerHTML = createGalleryItemsMarkup;

let lightbox =  new SimpleLightbox('.gallery a', { captionsData: 'alt', captionDelay: 500, captionPosition: 'top', });