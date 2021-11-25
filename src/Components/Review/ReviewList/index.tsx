import React, { MouseEvent, useEffect } from "react";
import { useRecoilState } from "recoil";
import { parse } from "query-string";
import { reviewModeAtom, reviewsAtom } from "Store/reviewAtom";
import BestReview from "../ReviewBest";
import ReviewInput from "../ReviewInput";
import ReviewItem from "../ReviewItem";
import Order from "Components/Order/Order";
import { HeaderWrapper, ModeWrapper } from "./styles";
import { useLocation, useNavigate } from "react-router";
import { getReview } from "utils/api/review";

enum Modes {
  Menu = "menu",
  Review = "review",
}
type TMode = Modes.Menu | Modes.Review;

const ReviewList = () => {
  const navigate = useNavigate();
  const [reviews, setReviews] = useRecoilState(reviewsAtom);
  const [modeState, setMode] = useRecoilState(reviewModeAtom);
  const location = useLocation();
  const query = parse(location.search);

  const id = query.id;

  const toggleMode = (event: MouseEvent) => {
    const mode = (event.target as HTMLElement).id as TMode;
    navigate(`?id=${id}&mode=${mode}`);
    setMode(mode);
  };

  useEffect(() => {
    const mode = parse(location.search).mode;

    if (!mode) {
      setMode("menu" as TMode);
    } else {
      setMode(mode as TMode);
    }

    try {
      getReview(id).then((res) => setReviews(res.data.data));
    } catch (e: any) {
      throw Error(e);
    }
  }, [location, setMode]);

  console.log(reviews);

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
            <span className="inputTitle">주문한 후기를 남겨주세요!</span>
            <ReviewInput />
            {reviews?.length === 0 ? (
              <>작성된 리뷰가 없습니다.</>
            ) : (
              <>
                {reviews.map((item, index) => (
                  <ReviewItem review={item} key={index} />
                ))}
              </>
            )}
          </React.Fragment>
        )}
      </ModeWrapper>
    </React.Fragment>
  );
};

export default ReviewList;
