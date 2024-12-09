import { Category, SortModel } from '@/common/types';
import { gql } from '@apollo/client';

export const GET_CATEGORY = gql`
  query Category($categoryId: ID!, $sorting: SortModel, $limit: Int, $offset: Int) {
    category(id: $categoryId) {
      categoryName
      products(sorting: $sorting, limit: $limit, offset: $offset) {
        edges {
          name
          id
          imageUrl
          price
          categoryId
        }
        totalCount
        hasNext
        after
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
  limit: number;
  offset: number;
}