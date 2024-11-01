import { IResolvers } from "@graphql-tools/utils";
import { CategoryDataType, Context } from "../../types";

export const Category: IResolvers<CategoryDataType, Context> = {
  products: (parent, args, { db }) => {
    return db.products.filter(el => el.categoryId === parent.id);
  }
}