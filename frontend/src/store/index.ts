import { Category, ProductDataType } from '@/common/types';
import { create } from 'zustand';

interface IStore {
  categories: Category[];
  setCategories: (categories: Category[]) => void;
  products: Record<Category['id'], ProductDataType[]>;
  setProducts: (args: { categoryId: Category['id'], products: ProductDataType[] }) => void;
  selectedCategory: Category['id'] | null;
  setSelectedCategory: (id: Category['id']) => void
}

export const useStore = create<IStore>((set) => ({
  categories: [],
  setCategories: (categories) => set(() => ({ categories })),
  products: {},
  setProducts: ({ categoryId, products }) => set((state) => {
    const updatedProducts = { ...state.products };
    updatedProducts[categoryId] = products;
    return {
      products: updatedProducts
    };
  }),
  selectedCategory: null,
  setSelectedCategory: (id) => set(() => ({ selectedCategory: id }))
}));