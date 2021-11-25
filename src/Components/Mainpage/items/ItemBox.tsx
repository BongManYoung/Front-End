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
        "https://media.triple.guide/triple-cms/c_limit,f_auto,h_1024,w_1024/16344466-1a85-447a-a8eb-4b69b02bdd1b.jpeg",
      title: "은빈이네 한우",
      menu: "육회 비빔밥",
      price: 10000,
      id: 1,
    },
    {
      shopImage:
        "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMDA3MDJfMjY4%2FMDAxNTkzNjgzMzQxOTk2.IWi4MeeyokMPJc4mV8UjY7prD4IlyewmmimEDL7W5ncg._vwGAHU4OyDazGTnJO8gT6J7MXrDsj4b9JN73qarV5kg.JPEG.rlatptn01%2FIMG_8324.JPG&type=sc960_832",
      title: "경양카츠",
      menu: "안심 돈까스",
      price: 18000,
      id: 2,
    },
    {
      shopImage:
        "http://cdn.kormedi.com/news/article/__icsFiles/artimage/2018/08/22/c_km601/salad580.jpg",
      title: "킹덤",
      menu: "연어 샐러드",
      price: 14000,
      id: 3,
    },
    {
      shopImage:
        "https://recipe1.ezmember.co.kr/cache/recipe/2016/12/30/df939769792632a48a0eba8bc895e8601.jpg",
      title: "국가대표",
      menu: "숯불 불고기",
      price: 6000,
      id: 4,
    },
    {
      shopImage:
        "https://recipe1.ezmember.co.kr/cache/recipe/2019/02/15/165b6ae1e847cc1ff6e0c0f5880c3cee1.jpg",
      title: "베스타",
      menu: "등심 스테이크",
      price: 20000,
      id: 5,
    },
    {
      shopImage:
        "https://cdn.mkhealth.co.kr/news/photo/201908/img_MKH190814002_0.jpg",
      title: "피슈",
      menu: "마라탕",
      price: 12000,
      id: 6,
    },
  ];

  return (
    <S.ItemBoxWrapper>
      {shopInfo.map((item, index) => (
        <div
          className="item-box"
          key={item.id}
          onClick={() => navigate(`/store?id=${item.id}&mode=menu`)}
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
