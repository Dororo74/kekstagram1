import { getRandomInt } from './util.js';
const DESCRIPTIONS = [
  'Прекрасный день (пока что)',
  'Лучше, чем ожидалось',
  'Контролируемый хаос, почти',
  'Момент, когда всё почти получилось',
  'Свет поймал, удачу — нет',
  'Сделал вид, что так и было задумано',
  'Минуту назад было хуже',
  'Фото хорошее, жизнь — по расписанию'
];
const NAMES = [
  'КотлетныйНиндзя', 'БорщМагнит', 'ЛысыйКактус', 'ПельменныйБарон', 'НосокОдиночка', 'ДиванныйВитязь',
  'АрбузныйШейх', 'ГрустныйБутерброд', 'ПушистыйЦемент', 'БешеныйОгурец', 'ВареникУдачи', 'КефирныйЗлодей', 'ЧебурекБезМяса',
  'ЛенивыйПельмень', 'ШкафныйМонстр', 'УпоротыйЕнот', 'ЦифровойКабачок', 'ПяткаДракона', 'СуровыйПряник', 'КолбасныйКороль',
  'МаминСимпатяга', 'ЗлойБудильник', 'ХитрыйТапок', 'ГрозныйХомяк', 'НочнойДожор', 'КиберЧебурашка', 'МягкийКирпич', 'ЖареныйГвоздь',
  'СоннаяТефтеля', 'БодрыйЛенивец'
];
const COMMENT_MESSAGES = [
  'Всё отлично!', 'В целом всё неплохо. Но не всё.', 'Когда вы делаете фотографию, хорошо бы убирать палец из кадра.',
  'В конце концов это просто непрофессионально.', 'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают.', 'Как можно было поймать такой неудачный момент?!'
];

let commentId = 1;

const createComment = () => {
  const messagesCount = getRandomInt(1, 2);

  return {
    id: commentId++,
    avatar: `img/avatar-${getRandomInt(1, 6)}.svg`,
    message: Array.from(
      { length: messagesCount },
      () => COMMENT_MESSAGES[getRandomInt(0, COMMENT_MESSAGES.length - 1)]
    ).join(' '),
    name: NAMES[getRandomInt(0, NAMES.length - 1)],
  };
};

export const createPhoto = (index) => {
  const commentsCount = getRandomInt(0, 30);

  return {
    id: index,
    url: `photos/${index}.jpg`,
    description: DESCRIPTIONS[getRandomInt(0, DESCRIPTIONS.length - 1)],
    likes: getRandomInt(15, 200),
    comments: Array.from({ length: commentsCount }, createComment),
  };
};

export const createPhotos = () =>
  Array.from({ length: 25 }, (_, index) => createPhoto(index + 1));
