import React, { useCallback } from "react";
import { useParams } from "react-router";
import { useRecoilState } from "recoil";
import { chatListAtom, chatBotOpenAtom } from "Store/chatBotAtom";
import { ChatType } from "Types/Chat";
import { chatRequest } from "utils/api/chat";
import ChatInput from "../ChatInput";
import ChatItem from "../ChatItem";
import { ChatWrapper, SelectOption } from "./styles";

interface IChatListProps {}

const ChatList: React.FunctionComponent<IChatListProps> = () => {
  const { id } = useParams<"id">();
  const e = React.createElement;

  const [chatBotOpenState, setChatBotOpenState] =
    useRecoilState(chatBotOpenAtom);
  const [chatListState, setChatListState] = useRecoilState(chatListAtom);

  const handleCloseChatBot = useCallback(() => {
    setChatBotOpenState(false);
  }, [setChatBotOpenState]);

  const addChat = useCallback(
    (chatContent: Element) => {
      const newChat: ChatType = {
        id: Math.floor(Math.random()),
        chatContent,
        isMyChat: false,
      };
      setChatListState((prevState) => [...prevState, newChat]);
    },
    [setChatListState]
  );

  const handleClickOption = useCallback(
    async (event) => {
      const data = (event.target as HTMLButtonElement).dataset.value;

      if (data && id) {
        if (data === "menu") {
          const response = await (await chatRequest(Number(id), data)).data;

          console.log(response);

          addChat(response.names);
          addChat(response.nextAnswer);
        }
      }
    },
    [id, addChat]
  );

  const chatListMap = chatListState.map((chat) => (
    <ChatItem key={chat.id} {...chat} />
  ));

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
            <button
              className="option"
              onClick={handleClickOption}
              data-value="menu"
            >
              메뉴를 보고 싶어요
            </button>
            <button
              className="option"
              onClick={handleClickOption}
              data-value="review"
            >
              리뷰를 보고 싶어요
            </button>
            <button
              className="option"
              onClick={handleClickOption}
              data-value="myReview"
            >
              내가 남긴 리뷰를 보고 싶어요
            </button>
          </SelectOption>
          {chatListMap}
        </ul>
        <ChatInput />
      </ChatWrapper>
    </React.Fragment>
  );
};

export default ChatList;
