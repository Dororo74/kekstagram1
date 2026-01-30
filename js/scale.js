const SCALE_MIN = 25;
const SCALE_MAX = 100;
const SCALE_STEP = 25;

const scaleSmaller = document.querySelector('.scale__control--smaller');
const scaleBigger = document.querySelector('.scale__control--bigger');
const scaleValue = document.querySelector('.scale__control--value');
const previewImage = document.querySelector('.img-upload__preview img');

let currentScale = SCALE_MAX;

const applyScale = () => {
  scaleValue.value = `${currentScale}`;
  previewImage.style.transform = `scale(${currentScale / 100})`;
};

const onScaleSmallerClick = () => {
  currentScale = Math.max(currentScale - SCALE_STEP, SCALE_MIN);
  applyScale();
};

const onScaleBiggerClick = () => {
  currentScale = Math.min(currentScale + SCALE_STEP, SCALE_MAX);
  applyScale();
};

scaleSmaller.addEventListener('click', onScaleSmallerClick);
scaleBigger.addEventListener('click', onScaleBiggerClick);
