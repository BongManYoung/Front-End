import React, { useCallback } from "react";
import { parse } from "query-string";
import { useLocation } from "react-router";
import { useRecoilState } from "recoil";
import { chatListAtom, chatBotOpenAtom } from "Store/chatBotAtom";
import { ChatType } from "Types/Chat";
import { chatRequest } from "utils/api/chat";
import ChatInput from "../ChatInput";
import ChatItem from "../ChatItem";
import { ChatWrapper, SelectOption } from "./styles";

interface IChatListProps {}

const ChatList: React.FunctionComponent<IChatListProps> = () => {
  const location = useLocation();

  const [chatBotOpenState, setChatBotOpenState] =
    useRecoilState(chatBotOpenAtom);
  const [chatListState, setChatListState] = useRecoilState(chatListAtom);

  const handleCloseChatBot = useCallback(() => {
    setChatBotOpenState(false);
  }, [setChatBotOpenState]);

  const addChat = useCallback(
    (chatContent: JSX.Element) => {
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
      const id = parse(location.search).id;

      if (data && id) {
        if (data === "menu") {
          const { names, nextAnswer } = await (
            await chatRequest(Number(id), data)
          ).data;

          const namesList = (
            <ul>
              <h1>메뉴판</h1>
              {names.map((name: string) => (
                <li>{name}</li>
              ))}
            </ul>
          );

          const nextAnswerEl = (
            <React.Fragment>
              <span>{nextAnswer}</span>
            </React.Fragment>
          );

          addChat(namesList);
          addChat(nextAnswerEl);
        }

        if (data === "myReview") {
          try {
            const { reviews, nextAnswer }: any = await (
              await chatRequest(Number(id), data)
            ).data;

            const reviewsMap = reviews.map((review: string, index: number) => (
              <li key={index}>{review}</li>
            ));

            addChat(
              <>
                {reviews.length === 0
                  ? "현재 리뷰가 존재하지 않습니다."
                  : reviewsMap}
              </>
            );

            addChat(<>{nextAnswer}</>);
          } catch (error: any) {
            console.log(error.response);
            addChat(<>에러가 발생했습니다. 다시 시도해주세요.</>);
          }
        }
      }
    },
    [addChat, location.search]
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
