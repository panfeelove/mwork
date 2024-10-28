import { IResolvers } from "@graphql-tools/utils";
import { ApolloServer, gql } from "apollo-server";
import { resolvers, typeDefs } from "./scheme";
import db from './db';



interface IProduct {
  id: string;
  name: string;
  description: string;
  price: number;
  onSale: boolean;
}

const products: IProduct[] = [
  {
    name: 'B',
    id: '1',
    price: 123,
    description: 'laskd',
    onSale: true,
  },
  {
    name: 'A',
    description: 'a;sld',
    id: '2',
    price: 123,
    onSale: false,
  }
]



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

