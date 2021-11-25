import { atom } from "recoil";
import { ChatType } from "Types/Chat";

export const chatBotOpenAtom = atom<boolean>({
  default: false,
  key: "__CHAT_BOT_OPEN_ATOM__",
});

export const chatListAtom = atom<ChatType[]>({
  default: [],
  key: "__CHAT_LIST_ATOM__",
});
