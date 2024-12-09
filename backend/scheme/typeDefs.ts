import { gql } from "apollo-server";

export const typeDefs = gql`
type Query {
  hello: String!,
  products: [Product!]!,
  categories: [Category!]!
  category(id: ID!): Category,
  product(id: ID!): Product,
}

type Product {
  id: ID!
  name: String!
  imageUrl: String
  price: Float!
  categoryId: ID!
  category: Category!
}

type Category {
  id: ID!
  categoryName: String
  categoryDescription: String
  products(sorting: SortModel, limit: Int, offset: Int = 0): LazyProducts # Поле для доступу до списку продуктів категорії
}

type LazyProducts {
  edges: [Product!]!,
  totalCount: Int,
  hasNext: Boolean,
  after: Int,
}

input SortModel {
  field: String!
  direction: SortDirections
}

enum SortDirections {
  asc
  desc
}
`;