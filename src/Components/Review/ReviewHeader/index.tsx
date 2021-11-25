import React, { useMemo, useState } from "react";
import { HeaderWrapper } from "./styles";
import OrderModal from "Components/Order/OrderModal/OrderModal";
import { useRecoilValue } from "recoil";
import { storeAtom, storeMenuAtom } from "Store/storeAtom";

const ReviewHeader: React.FunctionComponent = () => {
  const menuAtom = useRecoilValue(storeMenuAtom);
  const storeDetail = useRecoilValue(storeAtom);

  console.log(storeDetail);

  const shopInfo = {
    shopImage:
      "https://i.pinimg.com/originals/02/04/2f/02042fa0aca55650fc573c56aa80cc08.jpg",
    title: "짬뽕과 손님 2호점",
    review_total: 43,
    best_total: 2,
    content: "저희 집은 진짜 짬뽕 기가막혀요!! 함 드시고 가이소 ... 짱",

    menus: ["짬뽕", "짜장면"],
  };

  const menusMap = useMemo(() => {
    return menuAtom.map((menu, index) => (
      <option key={index}>{menu.productName}</option>
    ));
  }, [menuAtom]);

  const [show, setShow] = useState(false);

  const closeShow = () => {
    setShow(false);
  };

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
            <h1 className="shop_title">{storeDetail.storeName}</h1>
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
            <button className="special" onClick={() => setShow(true)}>
              주문하기
            </button>
            <button onClick={() => {}}>예약하기</button>
          </div>
        </div>
      </HeaderWrapper>
      <OrderModal show={show} closeShow={closeShow} />
    </React.Fragment>
  );
};

export default ReviewHeader;
