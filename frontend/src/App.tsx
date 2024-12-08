import React, { useEffect } from 'react';
import { ApolloProvider } from '@apollo/client';
import { client } from './graphql/client';

const SohoApp = React.lazy(() => import('./components/SohoApp'));

const handleImportLargeModule = async () => {
  return await import('./large_bundle');
};

function App() {
  useEffect(() => {
    (async () => {
      const largeModule = await handleImportLargeModule();
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
