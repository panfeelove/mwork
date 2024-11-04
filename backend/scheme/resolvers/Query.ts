import { IResolvers } from "@graphql-tools/utils"
import { Context } from "../../types"

export const Query: IResolvers<any, Context> = {
    hello: () => {
      return 'asdsa'
    },
    products: (parent, args, { db }) => {
      return db.products
    },
    categories: (parent, args, { db }) => {
      return db.categories // TODO
    },
    category: (parent, args: { id: string }, { db }) => {
      return db.categories.find(el => el.id === args.id) || null;
    }
    // product: (parent: any, args: { id: string }) => products.find(el => el.id === args.id) || null,
  }
  