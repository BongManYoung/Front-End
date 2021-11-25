import React from "react";
import { ChatInputWrapper } from "./styles";

interface IChatInputProps {}

const ChatInput: React.FunctionComponent<IChatInputProps> = () => {
  return (
    <React.Fragment>
      <ChatInputWrapper>
        <input
          type="text"
          className="chat_input"
          placeholder="메시지를 입력해주세요."
        />
      </ChatInputWrapper>
    </React.Fragment>
  );
};

export default ChatInput;
