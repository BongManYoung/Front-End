import React from "react";
import * as S from "./style";

const MonthReview = () => {
  return (
    <S.MonthReviewWrapper>
      <span>이달의 리뷰</span>
      <S.ReviewList></S.ReviewList>
    </S.MonthReviewWrapper>
  );
};

export default MonthReview;
