import React from "react";
import { ChatType } from "Types/Chat";
import { ChatWrapper } from "./styles";

type IChatItemProps = ChatType;

const ChatItem: React.FunctionComponent<IChatItemProps> = ({
  chatContent,
  isMyChat,
  children,
}) => {
  return (
    <React.Fragment>
      <ChatWrapper isMyChat={isMyChat}>
        {children}
        <p>{chatContent}</p>
      </ChatWrapper>
    </React.Fragment>
  );
};

export default ChatItem;
