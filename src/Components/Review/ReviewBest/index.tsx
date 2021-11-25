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
      nickname: "시현이에욤ㅎ",
      notMuch: 2,
      perfect: 35,
      reviewContent:
        "이런 맛 처음입니다. 사장님도 정말 친절하세요!! 서비스도 엄청 많이 주셔서 푸짐하게 잘 먹었습니다. ㅎㅎㅎ 감사해요!!",
      reviewIdx: 1,
    },
    {
      nickname: "준혁아가",
      notMuch: 2,
      perfect: 23,
      reviewContent:
        "이런 맛 처음입니다. 사장님도 정말 친절하세요!! 서비스도 엄청 많이 주셔서 푸짐하게 잘 먹었습니다. ㅎㅎㅎ 감사해요!!",
      reviewIdx: 1,
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
      {review?.length === 0 ? (
        <>작성된 리뷰가 없습니다.</>
      ) : (
        <>
          {review?.map((review, index) => (
            <ReviewItem key={index} review={review} />
          ))}
        </>
      )}
    </S.BestWrapper>
  );
};

export default BestReview;
