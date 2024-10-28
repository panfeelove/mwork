import React from 'react';
import { SohoApp } from './components/SohoApp';
import { ApolloProvider } from '@apollo/client';
import { client } from './graphql/client';

function App() {
  return (
    <ApolloProvider client={client}>
      <SohoApp />
    </ApolloProvider>
  );
}

export default App;
