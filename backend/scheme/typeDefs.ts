import { gql } from "apollo-server";

export const typeDefs = gql`
type Query {
  hello: String!,
  products: [Product!]!,
  product(id: ID!): Product,
}

type Product {
  id: ID!
  name: String!
  imageUrl: String
  price: Float!
}
`;