import React from "react";
import { ReviewType } from "Types/Review";
import ReviewItem from "../ReviewItem";
import * as S from "./style";

const BestReview = () => {
  const shop = {
    title: "짬뽕 2호점",
  };

  const review: ReviewType[] = [
    {
      idx: 1,
      content: "우와 정말 너무 맛있어요 다음에도 또 오고 싶네요 ㅎㅎ",
      user: {
        idx: 1,
        nickname: "강은빈",
      },
    },
    {
      idx: 1,
      content: "우와 정말 너무 맛있어요 다음에도 또 오고 싶네요 ㅎㅎ",
      user: {
        idx: 1,
        nickname: "강은빈",
      },
    },
  ];

  return (
    <S.BestWrapper>
      <div className="best_title">
        <div className="title_wrapper">
          <span>{shop.title}</span>의 <span>베스트 리뷰</span>
        </div>
        <span className="more_text">더보기 {">"}</span>
      </div>
      {review.map((review, index) => (
        <ReviewItem
          key={index}
          idx={review.idx}
          user={review.user}
          content={review.content}
        />
      ))}
    </S.BestWrapper>
  );
};

export default BestReview;
