import React from 'react';
import { SohoApp } from './components/SohoApp';
import { ApolloProvider } from '@apollo/client';
import { client } from './graphql/client';
import * as largeModule from './large_bundle';

function App() {
  console.log(largeModule);
  return (
    <ApolloProvider client={client}>
      <SohoApp />
    </ApolloProvider>
  );
}

export default App;
