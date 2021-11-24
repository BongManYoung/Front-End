import React, { MouseEvent, useState } from "react";
import ReviewInput from "../ReviewInput";
import { HeaderWrapper, ModeWrapper } from "./styles";

const ReviewList = () => {
  enum Modes {
    Menu,
    Review,
  }

  const [mode, setMode] = useState(Modes.Menu);

  const toggleMode = (event: MouseEvent) => {
    setMode(parseInt((event.target as HTMLDivElement).id, 10));
  };

  return (
    <React.Fragment>
      <HeaderWrapper>
        <div
          id="0"
          onClick={toggleMode}
          className={`menuSelector ${mode === Modes.Menu ? "selected" : ""}`}
        >
          메뉴
        </div>
        <div
          id="1"
          onClick={toggleMode}
          className={`menuSelector ${mode === Modes.Review ? "selected" : ""}`}
        >
          리뷰 보기
        </div>
      </HeaderWrapper>

      <ModeWrapper>
        {mode === Modes.Menu ? (
          <React.Fragment>메뉴 리스트</React.Fragment>
        ) : (
          <React.Fragment>
            <span className="inputTitle">리뷰 작성</span>
            <ReviewInput />
          </React.Fragment>
        )}
      </ModeWrapper>
    </React.Fragment>
  );
};

export default ReviewList;
