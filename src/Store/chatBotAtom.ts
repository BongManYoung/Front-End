import { atom } from "recoil";

export const chatBotOpenAtom = atom<boolean>({
  default: false,
  key: "__CHAT_BOT_OPEN_ATOM__",
});
