import React, { MouseEvent, useEffect } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { parse } from "query-string";
import { reviewModeAtom, reviewsAtom } from "Store/reviewAtom";
import BestReview from "../ReviewBest";
import ReviewInput from "../ReviewInput";
import ReviewItem from "../ReviewItem";
import Order from "Components/Order/Order";
import { HeaderWrapper, ModeWrapper } from "./styles";
import { useLocation } from "react-router";

enum Modes {
  Menu = "menu",
  Review = "review",
}
type TMode = Modes.Menu | Modes.Review;

const ReviewList = () => {
  const location = useLocation();
  const reviews = useRecoilValue(reviewsAtom);
  const [modeState, setMode] = useRecoilState(reviewModeAtom);

  const toggleMode = (event: MouseEvent) => {
    setMode((event.target as HTMLElement).id as TMode);
  };

  const reviewsMap = reviews.map((review) => (
    <ReviewItem key={review.idx} {...review} />
  ));

  useEffect(() => {
    const mode = parse(location.search).mode;
    setMode(mode as TMode);
  }, [location, setMode]);

  return (
    <React.Fragment>
      <HeaderWrapper>
        <div
          id="menu"
          onClick={toggleMode}
          className={`menuSelector ${
            modeState === Modes.Menu ? "selected" : ""
          }`}
        >
          메뉴
        </div>
        <div
          id="review"
          onClick={toggleMode}
          className={`menuSelector ${
            modeState === Modes.Review ? "selected" : ""
          }`}
        >
          리뷰 보기
        </div>
      </HeaderWrapper>

      <ModeWrapper>
        {modeState === Modes.Menu ? (
          <React.Fragment>
            <Order />
          </React.Fragment>
        ) : (
          <React.Fragment>
            <BestReview />
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
