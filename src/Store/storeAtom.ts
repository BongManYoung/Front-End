import { atom } from "recoil";

export interface storeMenuType {
  idx: number;
  productName: string;
}

export interface storeType {
  idx: number;
  products: storeMenuType[];
  storeName: string;
}

export const storeMenuAtom = atom<storeMenuType[]>({
  key: "storeMenuAtom",
  default: [],
});

export const storeAtom = atom<storeType>({
  key: "storeAtom",
  default: {
    idx: 0,
    products: [
      {
        idx: 0,
        productName: "",
      },
    ],
    storeName: "string",
  },
});
