import * as S from "../style";

interface Props {
  item: any;
}

const BestShop = ({ item }: Props) => {
  return (
    <div className="best_wrap">
      <div className="best_img">
        <div className="back"></div>
        <img src={item.url} alt="" />
        <S.Title>
          <span>이달의</span>
          <span>베스트 음식점</span>
        </S.Title>
      </div>
      <span id="title">{item.title}</span>
      <div className="review">
        <div className="title">
          베스트 리뷰
          <span> {item.best} </span>
          리뷰
          <span> {item.review}</span>
        </div>
      </div>
    </div>
  );
};

export default BestShop;
