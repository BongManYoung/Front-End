import { atom } from "recoil";

export const chatBotOpenAtom = atom<boolean>({
  default: false,
  key: "__CHAT_BOT_OPEN_ATOM__",
});

export const chatListAtom = atom({
  default: [],
  key: "__CHAT_LIST_ATOM__",
});

export const chatInputAtom = atom({
  key: "chatInputAtom",
  default: "",
});

export const chatInputValueAtom = atom({
  key: "chatInputValueAtom",
  default: [
    {
      content: "",
    },
  ],
});
