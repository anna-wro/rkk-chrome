let fetchedData;

console.log('fetching data...');

fetch('https://oficjum.starokatolicy.eu/api/config')
  .then((response) => response.json())
  .then((data) => {
    fetchedData = data;
  });

chrome.runtime.onMessage.addListener((message, sender, response) => {
  if (message.type === 'get_data') {
    response(fetchedData);
  }

  return true;
});
