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

const COMMENT_BATCH = 5;

let currentPhotoComments = [];
let shownComments = 0;

function onEscKeydown(evt) {
  if (evt.key === 'Escape') {
    closeBigPicture();
  }
}

function openBigPicture() {
  bigPictureElement.classList.remove('hidden');
  bodyElement.classList.add('modal-open');
  document.addEventListener('keydown', onEscKeydown);
}

function closeBigPicture() {
  bigPictureElement.classList.add('hidden');
  bodyElement.classList.remove('modal-open');
  document.removeEventListener('keydown', onEscKeydown);
}

function createCommentElement(comment) {
  const li = document.createElement('li');
  li.classList.add('social__comment');

  const img = document.createElement('img');
  img.classList.add('social__picture');
  img.src = comment.avatar;
  img.alt = comment.name;
  img.width = 35;
  img.height = 35;

  const p = document.createElement('p');
  p.classList.add('social__text');
  p.textContent = comment.message;

  li.append(img, p);
  return li;
}

function loadCommentsBatch() {
  const nextComments = currentPhotoComments.slice(shownComments, shownComments + COMMENT_BATCH);

  nextComments.forEach((comment) => {
    const commentElement = createCommentElement(comment);
    commentsListElement.append(commentElement);
  });

  shownComments += nextComments.length;
  commentsShows.textContent = shownComments;

  if (shownComments >= currentPhotoComments.length) {
    commentsLoaderElement.classList.add('hidden');
  } else {
    commentsLoaderElement.classList.remove('hidden');
  }
}

export function showBigPicture(photo) {
  bigPictureImageElement.src = photo.url;
  bigPictureImageElement.alt = photo.description;
  captionElement.textContent = photo.description;
  likesElement.textContent = photo.likes;

  commentsTotalCount.textContent = photo.comments.length;

  commentsCountElement.classList.remove('hidden');
  commentsLoaderElement.classList.remove('hidden');

  commentsListElement.innerHTML = '';
  currentPhotoComments = photo.comments;
  shownComments = 0;

  loadCommentsBatch();
  openBigPicture();
}

closeButton.addEventListener('click', closeBigPicture);
commentsLoaderElement.addEventListener('click', loadCommentsBatch);
