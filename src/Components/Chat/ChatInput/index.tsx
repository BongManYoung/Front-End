import React, { useCallback, useEffect, useState } from "react";
import { ChatInputWrapper } from "./styles";
import { useSpeechRecognition } from "react-speech-recognition";
import { ReactComponent as Mic } from "Assets/MIC.svg";
import { ReactComponent as MicON } from "Assets/MIC_ON.svg";

interface IChatInputProps {}

const ChatInput: React.FunctionComponent<IChatInputProps> = () => {
  const [value, setValue] = useState("");
  //const { listen, listening, stop } = useSpeechRecognition({

  //  });

  return (
    <React.Fragment>
      <ChatInputWrapper>
        <input
          type="text"
          className="chat_input"
          placeholder="메시지를 입력해주세요."
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
