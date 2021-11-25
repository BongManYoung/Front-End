import { atom } from "recoil";

export const chatBotOpenAtom = atom<boolean>({
  default: false,
  key: "__CHAT_BOT_OPEN_ATOM__",
});

export const chatListAtom = atom({
  default: [],
  key: "__CHAT_LIST_ATOM__",
});
