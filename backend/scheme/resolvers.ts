export const resolvers = {
  Query: {
    hello: () => {
      return 'asdsa'
    },
    products: (parent, args, { db }) => {
      return db.products
    },
    // product: (parent: any, args: { id: string }) => products.find(el => el.id === args.id) || null,
  }
}
