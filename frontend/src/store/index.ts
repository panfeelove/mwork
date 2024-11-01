import { Category, ProductDataType } from 'src/common/types';
import { create } from 'zustand';

interface IStore {
  categories: Category[];
  setCategories: (categories: Category[]) => void;
  products: Record<Category['id'], ProductDataType[]>;
  setProducts: (args: { categoryId: Category['id'], products: ProductDataType[] }) => void;
}

export const useStore = create<IStore>((set) => ({
  categories: [],
  setCategories: (categories) => set(() => ({ categories })),
  products: {},
  setProducts: ({ categoryId, products }) => set((state) => {
    const updatedProducts = { ...state.products };
    if (!updatedProducts[categoryId]) {
      updatedProducts[categoryId] = [];
    }
    updatedProducts[categoryId].push(...products);
    return {
      products: updatedProducts
    };
  })
}));