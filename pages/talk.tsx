import dynamic from 'next/dynamic';
import React from 'react';

const DynamicComponentWithNoSSR = dynamic(() => import('../components/deck'), {
  ssr: false,
});

function App() {
  return <DynamicComponentWithNoSSR />;
}

export default App;
