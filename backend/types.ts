import db from "./db";

export type LazyLoadingFields = {
  hasNext: boolean;
  totalCount: number;
  after: number | null;
}

export type LazyInputType = {
  limit: number | null;
  offset: number;
}

export type ProductDataType = {
  id: number;
  imageUrl: string;
  price: number;
  name: string;
  categoryId: string;
}

export type CategoryDataType = {
  id: string;
  categoryDescription: string;
  categoryName: string;
}

export type LazyProductsType = LazyLoadingFields & {
  edges: ProductDataType[];
}

export type Category = CategoryDataType & LazyProductsType

export type LazyProductsInputType = LazyInputType & {
  sorting: SortModel | null,
}
export interface Context {
  db: typeof db;
};

export enum SORTING_DIRECTIONS {
  ASC = 'asc',
  DESC = 'desc',
}

export type SortModel = {
  field: string;
  direction: SORTING_DIRECTIONS | null;
}