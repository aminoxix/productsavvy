import { create } from "zustand";
import { persist } from "zustand/middleware";

import { IProduct } from "./types";

interface ProductStore {
  data: {
    products: IProduct[];
    total: number;
  };
  addProduct: (products: IProduct[]) => void;
  removeProduct: (id: React.Key) => void;
}

interface ModalStore {
  open: boolean;
  setOpen: (open: boolean) => void;
}

export const useProductStore = create<ProductStore>()(
  persist(
    (set) => ({
      data: {
        products: [],
        total: 0,
      },
      addProduct: (products) =>
        set({ data: { products, total: products.length } }),
      removeProduct: (id) =>
        set((state) => ({
          data: {
            products: state.data.products.filter((item) => item.id !== id),
            total: state.data.total - 1,
          },
        })),
    }),
    {
      name: "product-storage",
      getStorage: () => localStorage,
    }
  )
);

export const useModalStore = create<ModalStore>()((set) => ({
  open: false,
  setOpen: (open: boolean) => set({ open }),
}));
