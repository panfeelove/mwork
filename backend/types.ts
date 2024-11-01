import db from "./db";

export type ProductDataType = {
  id: number;
  imgUrl: string;
  price: number;
  name: string;
  categoryId: number;
}

export type CategoryDataType = {
  id: number;
  categoryDescription: string;
  categoryName: string;
}

export type Category = CategoryDataType & {
  products: ProductDataType[];
}

export interface Context {
  db: typeof db;
};