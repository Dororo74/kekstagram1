const picturesContainer = document.querySelector('.pictures');
const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');

const createPicture = (photo) => {
  const pictureElement = pictureTemplate.cloneNode(true);
  pictureElement.querySelector('.picture__img').src = photo.url;
  pictureElement.querySelector('.picture__img').alt = photo.description;
  pictureElement.querySelector('.picture__likes').textContent = photo.likes;
  pictureElement.querySelector('.picture__comments').textContent = photo.comments.length;
  return pictureElement;
};

export const renderPictures = (photos) => {
  const fragmentContainer = document.createDocumentFragment();

  photos.forEach((photo) => {
    const picture = createPicture(photo);
    fragmentContainer.append(picture);
  });
  picturesContainer.append(fragmentContainer);
};


