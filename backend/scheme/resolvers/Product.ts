import { IResolvers } from "@graphql-tools/utils";
import { Context, ProductDataType } from "../../types";

export const Product: IResolvers<ProductDataType, Context> = {
  category: (parent, args, { db }) => {
    return db.categories.find(el => el.id === parent.categoryId)
  }
}