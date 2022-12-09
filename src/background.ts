import {MESSAGE} from './consts'

let cachedData: unknown;

chrome.runtime.onMessage.addListener((message, sender, response) => {
  if (message.type === MESSAGE.GET_CALENDAR_DATA) {
    if (cachedData) {
      console.log('data from cache');
      response(cachedData);
    } else {
      console.log('fetching data...');
      fetch('https://oficjum.starokatolicy.eu/api/config')
        .then((response) => response.json())
        .then((data) => {
          cachedData = data;
          response(data);
        });
    }
  }

  return true;
});
