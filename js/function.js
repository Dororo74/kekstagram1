export function wordLength (word, maxLength) {
  return word.lenght <= maxLength;
}

export function polindrom (string) {
  const normString = string.replaceAll().toUpperCase();
  let newString = '';
  for (let i = normString.length - 1; i >= 0; i--) {
    newString += normString[i];

  }
  if (normString === newString){
    return true;
  }
  return false;
}
