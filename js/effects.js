const EFFECTS = {
  none: {
    filter: 'none',
    min: 0,
    max: 100,
    step: 1,
    unit: '',
  },
  chrome: {
    filter: 'grayscale',
    min: 0,
    max: 1,
    step: 0.1,
    unit: '',
  },
  sepia: {
    filter: 'sepia',
    min: 0,
    max: 1,
    step: 0.1,
    unit: '',
  },
  marvin: {
    filter: 'invert',
    min: 0,
    max: 100,
    step: 1,
    unit: '%',
  },
  phobos: {
    filter: 'blur',
    min: 0,
    max: 3,
    step: 0.1,
    unit: 'px',
  },
  heat: {
    filter: 'brightness',
    min: 1,
    max: 3,
    step: 0.1,
    unit: '',
  },
};

const previewImage = document.querySelector('.img-upload__preview img');
const sliderContainer = document.querySelector('.effect-level__slider');
const effectValue = document.querySelector('.effect-level__value');
const effectList = document.querySelector('.effects__list');
const effectLevel = document.querySelector('.img-upload__effect-level');

let currentEffect = EFFECTS.none;

noUiSlider.create(sliderContainer, {
  range: {
    min: currentEffect.min,
    max: currentEffect.max
  },
  start: currentEffect.max,
  step: currentEffect.step,
  connect: 'lower',
});

const updateSlider = () => {
  sliderContainer.noUiSlider.updateOptions({
    range: {
      min: currentEffect.min,
      max: currentEffect.max,
    },
    start: currentEffect.max,
    step: currentEffect.step,
  });

  effectValue.value = currentEffect.max;
};

sliderContainer.noUiSlider.on('update', () => {
  const sliderValue = sliderContainer.noUiSlider.get();
  effectValue.value = sliderValue;

  if (currentEffect.filter === 'none') {
    previewImage.style.filter = 'none';
    return;
  }

  previewImage.style.filter = `${currentEffect.filter}(${sliderValue}${currentEffect.unit})`;
});

effectList.addEventListener('change', (evt) => {
  const effectName = evt.target.value;
  currentEffect = EFFECTS[effectName];

  if(effectName === 'none'){
    effectLevel.classList.add('hidden');
    previewImage.style.filter = 'none';
    return;
  }
  effectLevel.classList.remove('hidden');
  updateSlider();
});
