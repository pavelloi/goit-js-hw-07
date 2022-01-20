import { galleryItems } from './gallery-items.js';
// Change code below this line

const pictureContainer = document.querySelector('.gallery');
const pictureMarkup = createPictureMarkup(galleryItems);
pictureContainer.insertAdjacentHTML('beforeend', pictureMarkup);
pictureContainer.addEventListener('click', onPictureClick);

function createPictureMarkup(pictures) {
    const markup = pictures.map(({ preview, original, description }) => {
        return `<div class="gallery__item">
            <a class="gallery__link" href="${original}">
                <img
                class="gallery__image"
                 src="${preview}"
                data-source="${original}"
                alt="${description}"
                />
            </a>
        </div>`
    }).join("");
    return markup;
} 

function onPictureClick(e) {
    e.preventDefault();
    if (!e.target.classList.contains('gallery__image')) {
        return;
    }
    const originalPictureUrl = e.target.dataset.source;
    const instance = basicLightbox.create(`
    <img src="${originalPictureUrl}" width="1280">
`)
instance.show()
} 

