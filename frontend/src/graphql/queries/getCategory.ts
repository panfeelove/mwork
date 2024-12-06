import { Category, SortModel } from '@/common/types';
import { gql } from '@apollo/client';

export const GET_CATEGORY = gql`
  query Category($categoryId: ID!, $sorting: SortModel) {
    category(id: $categoryId) {
      categoryName
      products(sorting: $sorting) {
        name
        id
        imageUrl
        price
        categoryId
      }
      id
    }
  }
`;

export type GetCategoryResponseType = {
  category: Category;
}

export type GetCategoryVariablesType = {
  categoryId: Category['id'];
  sorting: SortModel | null;
}