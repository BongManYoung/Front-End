import ChatList from "Components/Chat/ChatList";
import React, { useCallback } from "react";
import { useRecoilState } from "recoil";
import { chatBotOpenAtom } from "Store/chatBotAtom";
import { ChatBotButton } from "./styles";

interface IChatBot {}

const ChatBot: React.FunctionComponent<IChatBot> = () => {
  const [chatBotOpenState, setChatBotOpenState] =
    useRecoilState(chatBotOpenAtom);

  const handleOpenChatBot = useCallback(() => {
    setChatBotOpenState(true);
  }, [setChatBotOpenState]);

  return (
    <React.Fragment>
      {chatBotOpenState && <ChatList />}
      <ChatBotButton onClick={handleOpenChatBot}>문의하기</ChatBotButton>
    </React.Fragment>
  );
};

export default ChatBot;
