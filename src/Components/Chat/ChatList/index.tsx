import React, { useCallback } from "react";
import { useRecoilState } from "recoil";
import { chatListAtom, chatBotOpenAtom } from "Store/chatBotAtom";
import ChatInput from "../ChatInput";
import { ChatWrapper } from "./styles";

interface IChatListProps {}

const ChatList: React.FunctionComponent<IChatListProps> = () => {
  const [chatBotOpenState, setChatBotOpenState] =
    useRecoilState(chatBotOpenAtom);
  const [chatListState, setChatListState] = useRecoilState(chatListAtom);

  const handleCloseChatBot = useCallback(() => {
    setChatBotOpenState(false);
  }, [setChatBotOpenState]);

  return (
    <React.Fragment>
      <ChatWrapper>
        <header className="chat_header">
          <h1 className="chat_title">My D</h1>
          <div className="chat_close" onClick={handleCloseChatBot}>
            &times;
          </div>
        </header>
        <ul className="chat_list"></ul>
        <ChatInput />
      </ChatWrapper>
    </React.Fragment>
  );
};

export default ChatList;
