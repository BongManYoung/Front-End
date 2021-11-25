import React from "react";
import { ChatType } from "Types/Chat";

type IChatItemProps = ChatType;

const ChatItem: React.FunctionComponent<IChatItemProps> = ({
  chat_content,
  id,
  children,
}) => {
  return (
    <React.Fragment>
      {children}
      <p>{chat_content}</p>
    </React.Fragment>
  );
};

export default ChatItem;
