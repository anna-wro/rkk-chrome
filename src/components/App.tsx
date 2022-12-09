import * as React from 'react';

export function App() {
  React.useEffect(() => {
    async function initialize() {
      const data = await chrome.runtime.sendMessage({
        type: 'get_data',
      });

      console.log({ data });
    }

    initialize();
  });

  return <div>hello app</div>;
}
