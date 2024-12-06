import { Category } from '@/common/types';
import { gql } from '@apollo/client';

export const GET_CATEGORIES = gql`
  query GetCategories {
  categories {
    categoryName
    id
  }
}
`;

export type GetCategoriesResponseType = {
  categories: Category[];
}