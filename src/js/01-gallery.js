// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
// Change code below this line

console.log(galleryItems);

const mainGallery = document.querySelector('.gallery');

const galleryList = galleryItems
.map(image => `
  <a class="gallery__item" href='${image.original}'>
    <img
      class="gallery__image"
      src='${image.preview}'
      alt='${image.description}'
    />
  </a>
`)
.join('');


mainGallery.insertAdjacentHTML('afterbegin', galleryList);

let lightbox = new SimpleLightbox('.gallery a', {
    captionDelay: 250,
    close: true,
    captionsData: "alt",
    })