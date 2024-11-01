import { ApolloServer } from "apollo-server";
import { resolvers, typeDefs } from "./scheme";
import db from './db';

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: {
    db
  }
});

server.listen().then(({ url }) => {
  console.log('Server is reqdy at:: ', url);
})

