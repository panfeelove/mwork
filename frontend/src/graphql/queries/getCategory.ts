import { gql } from '@apollo/client';
import { Category } from 'src/common/types';

export const GET_CATEGORY = gql`
  query Category($categoryId: ID!) {
    category(id: $categoryId) {
      categoryName
      products {
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
}