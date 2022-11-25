import './popup.css';

async function initialize() {
  const data = await chrome.runtime.sendMessage({
    type: 'get_data',
  });

  console.log({ data });
}

initialize();
