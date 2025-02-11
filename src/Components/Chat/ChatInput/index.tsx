import React, { useCallback, useEffect, useState } from "react";
import { ChatInputWrapper, InputWrapper } from "./styles";
import * as S from "./styles";
import { ReactComponent as Mic } from "Assets/MIC.svg";
import { ReactComponent as MicON } from "Assets/MIC_ON.svg";
import { useSetRecoilState } from "recoil";
import { chatListAtom } from "Store/chatBotAtom";
import { randomMenuRequest } from "utils/api/chat";
import { useLocation } from "react-router";
import { parse } from "query-string";
import { ChatType } from "Types/Chat";
import TextareaAutosize from "react-textarea-autosize";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";

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
  const { listening, transcript } = useSpeechRecognition();

  const handleSTTListener = useCallback(() => {
    SpeechRecognition.startListening({ language: "ko", continuous: true });
  }, []);

  const handleSTTStopListening = useCallback(() => {
    SpeechRecognition.stopListening();
  }, []);

  useEffect(() => {
    setValue(transcript);
  }, [transcript, setValue]);

  return (
    <React.Fragment>
      {/* <ChatInputWrapper>
        <input
          type="text"
          className="chat_input"
          placeholder="메시지를 입력해주세요."
          value={value}
          onChange={onChangeValue}
          onKeyPress={handleAddChat}
        /> */}
      {/*  {listening ? (
          <MicON
            className="mic"
            style={{ width: "15px", marginRight: "20px" }}
            onClick={listen}
          />
        ) : (
          <Mic className="mic" onClick={stop} />
        )} */}
      {/* </ChatInputWrapper> */}
      <InputWrapper>
        <TextareaAutosize
          placeholder="메세지를 입력해주세요."
          className="Input"
          value={value}
          onChange={onChangeValue}
          onKeyPress={handleAddChat}
        />
        {listening ? (
          <MicON
            className="mic"
            style={{ width: "15px", marginRight: "20px" }}
            onClick={handleSTTStopListening}
          />
        ) : (
          <Mic className="mic" onClick={handleSTTListener} />
        )}
      </InputWrapper>
    </React.Fragment>
  );
};

export default ChatInput;
