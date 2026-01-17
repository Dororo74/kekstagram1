function wordLength (word, maxLength) {
  return word.lenght <= maxLength;
}

function polindrom (string) {
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

function meetingTime (startWork, endWork, startTimeMeeting ,durationMeeting) {
  const startDayToMinutes = Number(startWork.split(':')[0]) * 60 + Number(startWork.split(':')[1]);
  const endDayToMinutes = Number(endWork.split(':')[0]) * 60 + Number(endWork.split(':')[1]);
  const startTimeMeetingToMinutes = Number(startTimeMeeting.split(':')[0]) * 60 + Number(startTimeMeeting.split(':')[1]);
  const fullDurationMeeting = startTimeMeetingToMinutes + durationMeeting;

  if (startTimeMeetingToMinutes >= startDayToMinutes &&
  fullDurationMeeting <= endDayToMinutes) {
    return true;
  }
  return false;
}

