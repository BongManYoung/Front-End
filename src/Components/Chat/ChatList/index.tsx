import React, { useCallback } from "react";
import { useRecoilState } from "recoil";
import { chatBotOpenAtom } from "Store/chatBotAtom";
import { ChatWrapper } from "./styles";

interface IChatListProps {}

const ChatList: React.FunctionComponent<IChatListProps> = () => {
  const [chatBotOpenState, setChatBotOpenState] =
    useRecoilState(chatBotOpenAtom);

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
        <ul></ul>
      </ChatWrapper>
    </React.Fragment>
  );
};

export default ChatList;
