import './popup.css';
import { createRoot } from 'react-dom/client';
import { App } from './components/App';

const root = document.querySelector<HTMLDivElement>('#container');

if (root) {
  createRoot(root).render(<App />);
}

chrome.notifications.create(
  `test-${Date.now()}`,
  {
    type: 'basic',
    title: 'notification',
    message: 'click me',
    iconUrl: 'icons/icon_128.png',
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
