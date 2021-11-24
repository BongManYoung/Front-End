import React from "react";
import * as S from "./style";

interface shopInfoType {
  shopImage: string;
  title: string;
  menu: string;
  price: number;
}

const ItemBox = () => {
  const shopInfo: shopInfoType[] = [
    {
      shopImage:
        "https://images.velog.io/images/hjh040302/post/0dd75b88-55ac-4bfc-9e2c-8ac0fe31fdac/image.png",
      title: "짬뽕과 손님 2호점",
      menu: "삼선 짬뽕",
      price: 18000,
    },
    {
      shopImage:
        "https://images.velog.io/images/hjh040302/post/0dd75b88-55ac-4bfc-9e2c-8ac0fe31fdac/image.png",
      title: "짬뽕과 손님 2호점",
      menu: "삼선 짬뽕",
      price: 18000,
    },
    {
      shopImage:
        "https://images.velog.io/images/hjh040302/post/0dd75b88-55ac-4bfc-9e2c-8ac0fe31fdac/image.png",
      title: "짬뽕과 손님 2호점",
      menu: "삼선 짬뽕",
      price: 18000,
    },
    {
      shopImage:
        "https://images.velog.io/images/hjh040302/post/0dd75b88-55ac-4bfc-9e2c-8ac0fe31fdac/image.png",
      title: "짬뽕과 손님 2호점",
      menu: "삼선 짬뽕",
      price: 18000,
    },
  ];

  return (
    <S.ItemBoxWrapper>
      {shopInfo.map((item, index) => (
        <div className="item-box" key={index}>
          <img src={item.shopImage} alt="" />
          <div className="shop-info">
            <span>{item.title}</span>
            <span>{item.menu}</span>
            <span>{item.price}</span>
          </div>
        </div>
      ))}
    </S.ItemBoxWrapper>
  );
};

export default ItemBox;
