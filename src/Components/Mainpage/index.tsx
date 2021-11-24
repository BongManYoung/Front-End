import { MainImg } from "Assets";
import ItemBox from "./items/ItemBox";
import * as S from "./style";

const index = () => {
  return (
    <S.MainWrapper>
      <S.SliderWrapper>
        <img
          src="https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fHJldmlld3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
          alt="메인 컨텐츠 이미지"
        />
        <img src={MainImg} alt="메인 컨텐츠 이미지" />
        <img src={MainImg} alt="메인 컨텐츠 이미지" />
      </S.SliderWrapper>
      <S.ToDayWrapper>
        <p>오늘은 이 메뉴 어때요?</p>
        <p>오늘의 메뉴를 먹고 소상공인들을 위하여 응원의 리뷰를 남겨요!</p>
        <ItemBox />
      </S.ToDayWrapper>
    </S.MainWrapper>
  );
};

export default index;
