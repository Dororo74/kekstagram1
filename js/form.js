import Pristine from '../vendor/pristine/pristine.min.js';

const body = document.body;
const uploadInput = document.querySelector('.img-upload__input');
const overlay = document.querySelector('.img-upload__overlay');
const form = document.querySelector('.img-upload__form');
const hashtagsInput = form.querySelector('.text__hashtags');
const commentInput = form.querySelector('.text__description');

const MAX_COMMENT_LENGTH = 140;
const MAX_HASHTAGS = 5;
const HASHTAG_REGEXP = /^#[a-zа-яё0-9]{1,19}$/i;

const getHashtags = () =>
  hashtagsInput.value
    .trim()
    .toLowerCase()
    .split(/\s+/)
    .filter(Boolean);


const openForm = () => {
  overlay.classList.remove('hidden');
  body.classList.add('modal-open');
  document.addEventListener('keydown', onEscKeydown);
};

const closeForm = () => {
  overlay.classList.add('hidden');
  body.classList.remove('modal-open');

  form.reset();
  uploadInput.value = '';

  document.removeEventListener('keydown', onEscKeydown);
};

const onEscKeydown = (evt) => {
  if (evt.key === 'Escape') {
    closeForm();
  }
};

hashtagsInput.addEventListener('keydown', (evt) => evt.stopPropagation());
commentInput.addEventListener('keydown', (evt) => evt.stopPropagation());

const pristine = new Pristine(form, {
  classTo: 'img-upload__field-wrapper',
  errorTextParent: 'img-upload__field-wrapper',
  errorTextClass: 'pristine-error',
});

const validateHashtagFormat = () =>
  getHashtags().every((tag) => HASHTAG_REGEXP.test(tag));

const validateHashtagCount = () =>
  getHashtags().length <= MAX_HASHTAGS;

const validateHashtagUnique = () => {
  const tags = getHashtags();
  return tags.length === new Set(tags).size;
};

const validateComment = (value) =>
  value.length <= MAX_COMMENT_LENGTH;


pristine.addValidator(
  hashtagsInput,
  validateHashtagFormat,
  'Неверный формат хэштега'
);

pristine.addValidator(
  hashtagsInput,
  validateHashtagCount,
  `Нельзя больше ${MAX_HASHTAGS} хэштегов`
);

pristine.addValidator(
  hashtagsInput,
  validateHashtagUnique,
  'Хэштеги не должны повторяться'
);

pristine.addValidator(
  commentInput,
  validateComment,
  `Комментарий не может быть длиннее ${MAX_COMMENT_LENGTH} символов`
);

uploadInput.addEventListener('change', openForm);

form.addEventListener('submit', (evt) => {
  evt.preventDefault();

  if (pristine.validate()) {
    form.submit();
  }
});
