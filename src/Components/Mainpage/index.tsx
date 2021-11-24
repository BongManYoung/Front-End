import { MainImg } from "Assets";
import ItemBox from "./ItemBox";
import * as S from "./style";

const index = () => {
  return (
    <S.MainWrapper>
      <S.SliderWrapper>
        <img src={MainImg} alt="메인 컨텐츠 이미지" />
      </S.SliderWrapper>
      <S.ToDayWrapper>
        <p>오늘은 이 메뉴 어때요?</p>
        <ItemBox />
      </S.ToDayWrapper>
    </S.MainWrapper>
  );
};

export default index;
