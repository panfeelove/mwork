import React, { useEffect } from 'react';
import { ApolloProvider } from '@apollo/client';
import { client } from './graphql/client';

const SohoApp = React.lazy(() => import('./components/SohoApp'));

function App() {
  const importLargeModule = async () => {
    return await import('./large_bundle');
  };

  useEffect(() => {
    (async () => {
      const largeModule = await importLargeModule();
      console.log(largeModule);
    })();
  }, []);
  return (
    <ApolloProvider client={client}>
      <SohoApp />
    </ApolloProvider>
  );
}

export default App;
