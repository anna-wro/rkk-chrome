import './popup.css';
import { createRoot } from 'react-dom/client';
import { App } from './components/App';

const root = document.querySelector<HTMLDivElement>('#container');

if (root) {
  createRoot(root).render(<App />);
}

setTimeout(() => {
  chrome.notifications.create(
    'test',
    {
      type: 'basic',
      title: 'notification',
      message: 'click me',
      iconUrl: 'icons/icon_32.png',
      eventTime: Date.now() + 1000,
      buttons: [
        {
          title: 'Yes',
        },
        {
          title: 'No',
        },
      ],
    },
    function (id) {
      console.log('Last error:', chrome.runtime.lastError);
    }
  );
}, 1000);
