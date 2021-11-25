import React, { useMemo } from "react";
import { HeaderWrapper } from "./styles";

const ReviewHeader: React.FunctionComponent = () => {
  const shopInfo = {
    shopImage:
      "https://images.velog.io/images/hjh040302/post/0dd75b88-55ac-4bfc-9e2c-8ac0fe31fdac/image.png",
    title: "짬뽕과 손님 2호점",
    review_total: 43,
    best_total: 2,
    content: "저희 집은 진짜 짬뽕 기가막혀요!! 함 드시고 가이소 ... 짱",

    menus: ["짬뽕", "짜장면"],
  };

  const menusMap = useMemo(() => {
    return shopInfo.menus.map((menu) => <option key={menu}>{menu}</option>);
  }, [shopInfo.menus]);

  return (
    <React.Fragment>
      <HeaderWrapper>
        <img
          src={shopInfo.shopImage}
          alt={shopInfo.title}
          className="shop_pic"
        />

        <div className="shop_info">
          <div className="deco"></div>
          <div className="shop_title-wrap">
            <div className="shop_title_line" />
            <h1 className="shop_title">{shopInfo.title}</h1>
          </div>
          <div className="shop_review_wrapper">
            <span className="shop_position">리뷰 {shopInfo.review_total}</span>
            <span className="shop_position">
              베스트 리뷰 {shopInfo.best_total}
            </span>
          </div>
          <p className="shop_content">{shopInfo.content}</p>
          <div className="shop_menus">
            <strong className="shop_menus_title">메뉴 선택</strong>
            <select>{menusMap}</select>
          </div>

          <div className="buttons">
            <button className="special" onClick={() => {}}>
              주문하기
            </button>
            <button onClick={() => {}}>예약하기</button>
          </div>
        </div>
      </HeaderWrapper>
    </React.Fragment>
  );
};

export default ReviewHeader;
