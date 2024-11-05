import db from "./db";

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

export type Category = CategoryDataType & {
  products: ProductDataType[];
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