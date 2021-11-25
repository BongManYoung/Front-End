import React, { MouseEvent, useState } from "react";
import { useRecoilValue } from "recoil";
import { reviewsAtom } from "Store/reviewAtom";
import ReviewInput from "../ReviewInput";
import ReviewItem from "../ReviewItem";
import Order from "Components/Order/Order";
import { HeaderWrapper, ModeWrapper } from "./styles";

const ReviewList = () => {
  enum Modes {
    Menu,
    Review,
  }
  const reviews = useRecoilValue(reviewsAtom);
  const [mode, setMode] = useState(Modes.Menu);

  const toggleMode = (event: MouseEvent) => {
    setMode(parseInt((event.target as HTMLDivElement).id, 10));
  };

  const reviewsMap = reviews.map((review) => (
    <ReviewItem key={review.idx} {...review} />
  ));

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
          <React.Fragment>
            <Order />
          </React.Fragment>
        ) : (
          <React.Fragment>
            <span className="inputTitle">리뷰 작성</span>
            <ReviewInput />
            {reviewsMap}
          </React.Fragment>
        )}
      </ModeWrapper>
    </React.Fragment>
  );
};

export default ReviewList;
