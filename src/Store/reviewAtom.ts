import { atom } from "recoil";
import { ReviewType } from "Types/Review";

export const reviewInputAtom = atom({
  key: "__REVIEW_INPUT_ATOM__",
  default: "",
});

export const reviewsAtom = atom<ReviewType[]>({
  key: "__REVIEWS_ATOM__",
  default: [],
});

enum Modes {
  Menu = "menu",
  Review = "review",
}
export const reviewModeAtom = atom({
  key: "__REVIEW_MODE__",
  default: Modes.Menu,
});
