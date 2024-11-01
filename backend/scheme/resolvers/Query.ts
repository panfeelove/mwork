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
    }
    // product: (parent: any, args: { id: string }) => products.find(el => el.id === args.id) || null,
  }
  