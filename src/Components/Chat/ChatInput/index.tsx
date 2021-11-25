import React, { useCallback, useState } from "react";
import { ChatInputWrapper } from "./styles";
import { useSetRecoilState } from "recoil";
import { chatListAtom } from "Store/chatBotAtom";
import { randomMenuRequest } from "utils/api/chat";
import { useLocation } from "react-router";
import { parse } from "query-string";
import { ChatType } from "Types/Chat";

interface IChatInputProps {}

const ChatInput: React.FunctionComponent<IChatInputProps> = () => {
  const location = useLocation();
  const [value, setValue] = useState("");
  const setChatListState = useSetRecoilState(chatListAtom);

  const onChangeValue = useCallback((event) => {
    setValue(event.target.value);
  }, []);

  const addChat = useCallback(
    (chatContent: JSX.Element, isMyChat: boolean = false) => {
      const newChat: ChatType = {
        id: Math.floor(Math.random() + 1000),
        chatContent,
        isMyChat: isMyChat,
      };
      setChatListState((prevState) => [...prevState, newChat]);
    },
    [setChatListState]
  );

  const handleAddChat = useCallback(
    async (event) => {
      if (event.key === "Enter") {
        setChatListState((prevChatList) => [
          ...prevChatList,
          {
            id: Math.floor(Math.random() + 1000),
            isMyChat: true,
            chatContent: value,
          },
        ]);
        const id = Number(parse(location.search).id);

        const randomMenu = await (await randomMenuRequest(id, value)).data;

        addChat(randomMenu.name);
        setValue("");
      } else {
      }
    },
    [value, setChatListState, location.search, addChat]
  );

  //const { listen, listening, stop } = useSpeechRecognition({

  //  });

  return (
    <React.Fragment>
      <ChatInputWrapper>
        <input
          type="text"
          className="chat_input"
          placeholder="메시지를 입력해주세요."
          value={value}
          onChange={onChangeValue}
          onKeyPress={handleAddChat}
        />
        {/*  {listening ? (
          <MicON
            className="mic"
            style={{ width: "15px", marginRight: "20px" }}
            onClick={listen}
          />
        ) : (
          <Mic className="mic" onClick={stop} />
        )} */}
      </ChatInputWrapper>
    </React.Fragment>
  );
};

export default ChatInput;
