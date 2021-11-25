import React, { useState } from "react";
import * as S from "./style";
import { ReactComponent as Mic } from "Assets/MIC.svg";
import { ReactComponent as MicON } from "Assets/MIC_ON.svg";

const VoiceTest = () => {
  const [mic, setMic] = useState<boolean>(false);
  const [value, setValue] = useState("");

  return (
    <S.VoiceWraper>
      <span>음성인식을 통해 리뷰를 달아요</span>
      <div className="voice_input">
        <input type="text" />
        {mic ? (
          <MicON
            className="mic"
            style={{ width: "15px", marginRight: "20px" }}
          />
        ) : (
          <Mic className="mic" />
        )}
      </div>
    </S.VoiceWraper>
  );
};

export default VoiceTest;
