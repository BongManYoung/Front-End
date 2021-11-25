import { atom } from "recoil";
import { ReviewType } from "Types/Review";

export const reviewInputAtom = atom({
  key: "__REVIEW_INPUT_ATOM__",
  default: "",
});

export const reviewsAtom = atom<ReviewType[]>({
  key: "__REVIEWS_ATOM__",
  default: [
    {
      idx: 1,
      content:
        "우와 정말 마있어요!!!! 또 오고 싶어요 사장님 장사 오랫동안 해주세요!!!!!",
      user: { idx: 1, nickname: "새찬" },
    },
    { idx: 2, content: "바보", user: { idx: 1, nickname: "새찬" } },
    { idx: 3, content: "바보", user: { idx: 1, nickname: "새찬" } },
  ],
});
