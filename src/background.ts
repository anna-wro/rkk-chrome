import { MESSAGE } from './consts';

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

function createNotification({
  name,
  when,
  options,
}: {
  name: string;
  when: number;
  options: chrome.notifications.NotificationOptions<true>;
}) {
  const handler = (alarm: chrome.alarms.Alarm) => {
    if (alarm.name === name) {
      chrome.notifications.create(name, options);
    }
  };

  chrome.alarms.create(name, { when });
  chrome.alarms.onAlarm.addListener(handler);

  return () => {
    chrome.alarms.clear(name);
    chrome.alarms.onAlarm.removeListener(handler);
  }
}

const cleanup = createNotification({
  name: `test-${Date.now()}`,
  when: Date.now() + 2000,
  options: {
    type: 'basic',
    title: 'notification',
    message: 'click me',
    iconUrl: 'icons/icon_128.png',
    eventTime: Date.now(),
    buttons: [
      {
        title: 'Yes',
      },
      {
        title: 'No',
      },
    ],
  },
});

// cleanup();
