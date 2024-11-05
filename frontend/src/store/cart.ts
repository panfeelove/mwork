import { ProductDataType } from 'src/common/types';
import { create } from 'zustand';

interface ICartStore {
  cart: ProductDataType[];
  addToCart: (product: ProductDataType) => void;
}

export const useCartStore = create<ICartStore>((set) => (
  {
    cart: [],
    addToCart: (product) => set((state) => {
      return { cart: [...state.cart, product] };
    }),
  }
));