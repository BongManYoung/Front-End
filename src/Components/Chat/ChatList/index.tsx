import React, { useCallback } from "react";
import { useRecoilState } from "recoil";
import { chatListAtom, chatBotOpenAtom } from "Store/chatBotAtom";
import ChatInput from "../ChatInput";
import ChatItem from "../ChatItem";
import { ChatWrapper, SelectOption } from "./styles";

interface IChatListProps {}

const ChatList: React.FunctionComponent<IChatListProps> = () => {
  const [chatBotOpenState, setChatBotOpenState] =
    useRecoilState(chatBotOpenAtom);
  const [chatListState, setChatListState] = useRecoilState(chatListAtom);

  const handleCloseChatBot = useCallback(() => {
    setChatBotOpenState(false);
  }, [setChatBotOpenState]);

  const chatListMap = chatListState.map((chat) => <ChatItem {...chat} />);

  return (
    <React.Fragment>
      <ChatWrapper>
        <header className="chat_header">
          <h1 className="chat_title">My D</h1>
          <div className="chat_close" onClick={handleCloseChatBot}>
            &times;
          </div>
        </header>
        <ul className="chat_list">
          <SelectOption>
            <p>궁금하신 점 있으신가요?</p>
            <button className="option">메뉴를 보고 싶어요</button>
            <button className="option">리뷰를 보고 싶어요</button>
            <button className="option">내가 남긴 리뷰를 보고 싶어요</button>
          </SelectOption>
          {chatListMap}
        </ul>
        <ChatInput />
      </ChatWrapper>
    </React.Fragment>
  );
};

export default ChatList;
