const bigPictureElement = document.querySelector('.big-picture');
const bodyElement = document.body;

const bigPictureImageElement = bigPictureElement.querySelector('.big-picture__img img');
const likesElement = bigPictureElement.querySelector('.likes-count');
const captionElement = bigPictureElement.querySelector('.social__caption');
const commentsListElement = bigPictureElement.querySelector('.social__comments');
const commentsShows = bigPictureElement.querySelector('.social__comment-shown-count');
const commentsTotalCount = bigPictureElement.querySelector('.social__comment-total-count');
const commentsCountElement = bigPictureElement.querySelector('.social__comment-count');
const commentsLoaderElement = bigPictureElement.querySelector('.comments-loader');
const closeButton = bigPictureElement.querySelector('#picture-cancel');

const openBigPicture = () => {
  bigPictureElement.classList.remove('hidden');
  bodyElement.classList.add('modal-open');
}
const closeBigPicture = () => {
  bigPictureElement.classList.add('hidden');
  bodyElement.classList.remove('modal-open');

  document.removeEventListener('keydown', onEscKeydown);
};

closeButton.addEventListener('click', closeBigPicture);

const onEscKeydown = (evt) => {
  if(evt.key === 'Escape') {
  closeBigPicture();
};
};

const renderBigPicture = (photo) => {
  bigPictureImageElement.src = photo.url;
  bigPictureImageElement.alt = photo.description;

  captionElement.textContent = photo.description;
  likesElement.textContent = photo.likes;

  commentsCountElement.textContent = photo.comments.length;
  commentsTotalCount.textContent = photo.comments.length;
};

const createCommentElement = (comments) => {
  const commentElement = document.createElement('li');
  commentElement.classList.add('social__comment');

  const avatarElement = document.createElement('img');
  avatarElement.classList.add('social__picture');
  avatarElement.src = comments.avatar;
  avatarElement.alt = comments.name;
  avatarElement.width = 35;
  avatarElement.height = 35;

  const textElement = document.createElement('p');
  textElement.classList.add('social__text');
  textElement.textContent = comments.message;

  commentElement.append(avatarElement, textElement);
  return commentElement;
};

const renderComments = (comments) => {
  commentsListElement.innerHTML = '';
  const commentsFragment = document.createDocumentFragment();

  comments.forEach((comment) => {
    const commentElement = createCommentElement(comment);
    commentsFragment.append(commentElement);
  });
  commentsListElement.append(commentsFragment);
};

const hideCommentsControls = () => {
  commentsCountElement.classList.add('hidden');
  commentsLoaderElement.classList.add('hidden');
};

export const showBigPicture = (photo) => {
  renderBigPicture(photo);
  renderComments(photo.comments);
  hideCommentsControls();
  openBigPicture();

  document.addEventListener('keydown', onEscKeydown);
};


