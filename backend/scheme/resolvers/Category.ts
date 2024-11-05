import { IResolvers } from "@graphql-tools/utils";
import { CategoryDataType, Context, SortModel } from "../../types";
import lodash from 'lodash';

export const Category: IResolvers<CategoryDataType, Context, { sorting: SortModel }> = {
  products: (parent, { sorting }, { db }) => {
    const categoryProducts = db.products.filter(el => el.categoryId === parent.id);
    if (sorting && sorting.direction && categoryProducts.length && sorting.field in categoryProducts[0]) {
      return lodash.orderBy(categoryProducts, (el) => el[sorting.field], sorting.direction);
    }
    return categoryProducts;
  }
}