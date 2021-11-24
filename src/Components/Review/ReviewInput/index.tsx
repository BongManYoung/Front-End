import React from "react";
import { ReactComponent as Mic } from "Assets/MIC.svg";
import { InputWrapper } from "./styles";

interface InputProps {}

const ReviewInput: React.FunctionComponent<InputProps> = () => {
  return (
    <React.Fragment>
      <InputWrapper>
        <input type="text" className="reviewInput" />
        <Mic className="mic" />
      </InputWrapper>
    </React.Fragment>
  );
};

export default ReviewInput;
