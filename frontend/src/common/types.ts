export type ProductDataType = {
  id: number;
  imageUrl: string;
  price: number;
  name: string;
  categoryId: string;
}

export type LazyProductsDataType = {
  edges: ProductDataType[];
  totalCount: number;
  hasNext: boolean;
  after: number;
}

export type CategoryDataType = {
  id: string;
  categoryDescription: string;
  categoryName: string;
}

export type Category = CategoryDataType & {
  products: LazyProductsDataType;
}

export enum SORTING_DIRECTIONS {
  ASC = 'asc',
  DESC = 'desc',
}

export type SortModel = {
  field: string;
  direction: SORTING_DIRECTIONS | null;
}