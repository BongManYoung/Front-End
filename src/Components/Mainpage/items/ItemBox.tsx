import React from "react";
import { useNavigate } from "react-router-dom";
import * as S from "./style";

interface shopInfoType {
  id: number;
  shopImage: string;
  title: string;
  menu: string;
  price: number;
}

const ItemBox = () => {
  const navigate = useNavigate();

  const shopInfo: shopInfoType[] = [
    {
      shopImage:
        "https://images.velog.io/images/hjh040302/post/0dd75b88-55ac-4bfc-9e2c-8ac0fe31fdac/image.png",
      title: "짬뽕과 손님 2호점",
      menu: "삼선 짬뽕",
      price: 18000,
      id: 1,
    },
    {
      shopImage:
        "https://recipe1.ezmember.co.kr/cache/recipe/2019/02/15/165b6ae1e847cc1ff6e0c0f5880c3cee1.jpg",
      title: "짬뽕과 손님 2호점",
      menu: "삼선 짬뽕",
      price: 18000,
      id: 2,
    },
    {
      shopImage:
        "http://cdn.kormedi.com/news/article/__icsFiles/artimage/2018/08/22/c_km601/salad580.jpg",
      title: "짬뽕과 손님 2호점",
      menu: "삼선 짬뽕",
      price: 18000,
      id: 3,
    },
    {
      shopImage:
        "https://recipe1.ezmember.co.kr/cache/recipe/2016/12/30/df939769792632a48a0eba8bc895e8601.jpg",
      title: "짬뽕과 손님 2호점",
      menu: "삼선 짬뽕",
      price: 18000,
      id: 4,
    },
    {
      shopImage:
        "https://recipe1.ezmember.co.kr/cache/recipe/2019/02/15/165b6ae1e847cc1ff6e0c0f5880c3cee1.jpg",
      title: "짬뽕과 손님 2호점",
      menu: "삼선 짬뽕",
      price: 18000,
      id: 5,
    },
    {
      shopImage:
        "http://cdn.kormedi.com/news/article/__icsFiles/artimage/2018/08/22/c_km601/salad580.jpg",
      title: "짬뽕과 손님 2호점",
      menu: "삼선 짬뽕",
      price: 18000,
      id: 6,
    },
  ];

  return (
    <S.ItemBoxWrapper>
      {shopInfo.map((item, index) => (
        <div
          className="item-box"
          key={item.id}
          onClick={() => navigate(`/store/${item.id}?mode=menu`)}
        >
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
