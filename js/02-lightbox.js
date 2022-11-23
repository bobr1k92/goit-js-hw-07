import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryContainer = document.querySelector('.gallery');
const galleryItemsMarkup = galleryItems
   .map(item => {
      return `<a class="gallery__item" href="${item.original}">
   <img class="gallery__image" src="${item.preview}" alt="${item.description}" />
</a>`;
   })
   .join('');

galleryContainer.insertAdjacentHTML('afterbegin', galleryItemsMarkup);
const lightbox = new SimpleLightbox('.gallery__item', {
   captionsData: 'alt',
   captionDelay: 250,
});