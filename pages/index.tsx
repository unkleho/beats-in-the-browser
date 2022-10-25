import dynamic from 'next/dynamic';
import React from 'react';

// Spectacle has some trouble with SSR, so loading it dynamically on client only.
const DynamicComponentWithNoSSR = dynamic(() => import('../components/deck'), {
  ssr: false,
});

function App() {
  return <DynamicComponentWithNoSSR />;
}

export default App;
