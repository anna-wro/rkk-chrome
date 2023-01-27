import { MESSAGE } from './consts'

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

setTimeout(() => {
  chrome.notifications.create(
    'test',
    {
      type: 'basic',
      title: 'notification',
      message: 'click me',
      iconUrl: 'https://cdn-icons-png.flaticon.com/512/616/616430.png',
      eventTime: Date.now() + 1000,
    }, function (id) {
      console.log("Last error:", chrome.runtime.lastError);
    }
  )
}, 1000);

console.log('notification created');
