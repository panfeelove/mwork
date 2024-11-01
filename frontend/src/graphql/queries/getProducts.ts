import { gql } from '@apollo/client';
import { Category } from 'src/common/types';

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