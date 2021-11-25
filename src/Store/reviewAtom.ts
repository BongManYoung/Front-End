import { atom } from "recoil";
import { ReviewType } from "Types/Review";

export const reviewInputAtom = atom({
  key: "__REVIEW_INPUT_ATOM__",
  default: "",
});

export const reviewsAtom = atom<ReviewType[]>({
  key: "__REVIEWS_ATOM__",
  default: [
    { idx: 1, content: "바보", user: { idx: 1, nickname: "새찬" } },
    { idx: 2, content: "바보", user: { idx: 1, nickname: "새찬" } },
    { idx: 3, content: "바보", user: { idx: 1, nickname: "새찬" } },
  ],
});
