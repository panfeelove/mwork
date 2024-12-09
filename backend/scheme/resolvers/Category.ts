import { IResolvers } from "@graphql-tools/utils";
import { CategoryDataType, Context, LazyProductsInputType, LazyProductsType, ProductDataType, SortModel } from "../../types";
import lodash from 'lodash';
import { getLazyLoadingParams } from "../../utils/LazyLoading";

const getSortedCollection = (sorting: SortModel | null, collection: ProductDataType[]) => {
  if (sorting && sorting.direction && collection.length && sorting.field in collection[0]) {
    return lodash.orderBy(collection, (el) => el[sorting.field], sorting.direction);
  }

  return collection;
}

export const Category: IResolvers<CategoryDataType, Context, LazyProductsInputType> = {
  products: (parent, { sorting, limit, offset = 0 }, { db }): LazyProductsType => {
    const allItems = getSortedCollection(sorting, db.products.filter(el => el.categoryId === parent.id));
    const { part, after, hasNext, totalCount } = getLazyLoadingParams({offset, limit}, allItems);

    return {
      hasNext,
      totalCount,
      edges: part,
      after,
    };
  }
}