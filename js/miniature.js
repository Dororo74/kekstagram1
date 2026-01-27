import { showBigPicture } from './big-picture.js';

const picturesContainer = document.querySelector('.pictures');
const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');
let photos = [];

const createPicture = (photo) => {
  const pictureElement = pictureTemplate.cloneNode(true);
  pictureElement.dataset.photoId = photo.id;
  pictureElement.querySelector('.picture__img').src = photo.url;
  pictureElement.querySelector('.picture__img').alt = photo.description;
  pictureElement.querySelector('.picture__likes').textContent = photo.likes;
  pictureElement.querySelector('.picture__comments').textContent = photo.comments.length;
  return pictureElement;
};

export const renderPictures = (photosData) => {
  photos = photosData;

  const fragmentContainer = document.createDocumentFragment();

  photos.forEach((photo) => {
    const picture = createPicture(photo);
    fragmentContainer.append(picture);
  });
  picturesContainer.append(fragmentContainer);
};

picturesContainer.addEventListener('click', (evt)=>{
  const pictureElement = evt.target.closest('.picture');
  if(!pictureElement){
    return;
  }
  const photoId = Number(pictureElement.dataset.photoId);
  const photo = photos.find((item) => item.id === photoId);
  showBigPicture(photo);
});

