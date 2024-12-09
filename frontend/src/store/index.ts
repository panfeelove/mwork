import { Category, LazyProductsDataType, ProductDataType } from '@/common/types';
import { create } from 'zustand';

interface IStore {
  categories: Category[];
  setCategories: (categories: Category[]) => void;
  products: Record<Category['id'], LazyProductsDataType>;
  setProducts: (args: { categoryId: Category['id'], products: ProductDataType[], after: number, hasNext: boolean, totalCount: number }) => void;
  selectedCategory: Category['id'] | null;
  setSelectedCategory: (id: Category['id']) => void;
  resetProducts: () => void;
}

export const useStore = create<IStore>((set) => ({
  categories: [],
  setCategories: (categories) => set(() => ({ categories })),
  products: {},
  setProducts: ({ categoryId, products, after, hasNext, totalCount }) => set((state) => {
    const updatedProducts = { ...state.products };
    if (updatedProducts[categoryId]) {
      updatedProducts[categoryId] = {
        edges: [...updatedProducts[categoryId].edges, ...products],
        after,
        hasNext,
        totalCount,
      };
    } else {
      updatedProducts[categoryId] = {
        edges: products,
        after,
        hasNext,
        totalCount,
      };
    }
    return {
      products: updatedProducts
    };
  }),
  selectedCategory: null,
  setSelectedCategory: (id) => set(() => ({ selectedCategory: id })),
  resetProducts: () => set(() => {
    return {
      products: {}
    };
  })
}));