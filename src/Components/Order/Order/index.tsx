import * as S from "./style";
import Item from "../../Common/Item/Item";
import { parse } from "query-string";
import { useEffect, useState } from "react";
import { getProduct, getStoreDetail } from "utils/api/store";
import { useLocation } from "react-router";

const dummy = [
  {
    shopImage: "http://www.travie.com/news/photo/202004/21448_7502_5733.jpg",
    name: "짬뽕과 손님 2호점",
    menu: "김치 찌게",
    price: 18000,
  },
  {
    shopImage:
      "https://src.hidoc.co.kr/image/lib/2020/11/9/1604911318873_0.jpg",
    name: "짬뽕과 손님 2호점",
    menu: "포테이토 피자",
    price: 18000,
  },
  {
    shopImage:
      "https://s3.ap-northeast-2.amazonaws.com/img.kormedi.com/news/article/__icsFiles/artimage/2015/05/23/c_km601/432212_540.jpg",
    name: "짬뽕과 손님 2호점",
    menu: "짜장면",
    price: 7000,
  },
  {
    shopImage:
      "http://img.segye.com/content/image/2021/01/07/20210107516500.jpg",
    name: "짬뽕과 손님 2호점",
    menu: "전주 비빔밥",
    price: 18000,
  },
  {
    shopImage:
      "https://media.triple.guide/triple-cms/c_limit,f_auto,h_1024,w_1024/16344466-1a85-447a-a8eb-4b69b02bdd1b.jpeg",
    name: "짬뽕과 손님 2호점",
    menu: "육회 비빔밥",
    price: 12000,
  },
  {
    shopImage:
      "https://www.korea.kr/newsWeb/resources/temp/images/000118/560_1.jpg",
    name: "짬뽕과 손님 2호점",
    menu: "육회 비빔밥",
    price: 10000,
  },
  {
    shopImage:
      "http://kormedi.com/wp-content/uploads/2020/11/gettyimages-a11201671-580x386.jpg",
    name: "짬뽕과 손님 2호점",
    menu: "군고구마",
    price: 4000,
  },
  {
    shopImage:
      "https://youthpress.net/xe/files/attach/images/9794/871/312/ea3c322a5b6fcb2dd167716a371f851a.JPG",
    name: "짬뽕과 손님 2호점",
    menu: "군고구마",
    price: 4000,
  },
  {
    shopImage:
      "https://i0.wp.com/www.agoda.com/wp-content/uploads/2020/04/Black-Pork-Jeju-Island-food-South-Korea.jpg?ssl=1",
    name: "짬뽕과 손님 2호점",
    menu: "삼선 짬뽕",
    price: 18000,
  },
];

const Order: React.FC = () => {
  const [storeDetail, setStoreDetail] = useState();
  const [storeMenu, setStoreMenu] = useState();
  const location = useLocation();

  useEffect(() => {
    const query = parse(location.search);
    const id = query.id;

    try {
      getStoreDetail(id).then((res) => setStoreDetail(res.data));
      getProduct(id).then((res) => setStoreMenu(res.data));
    } catch (e) {
      console.log(e);
    }
  }, [location.search]);

  console.log(storeDetail);

  return (
    <>
      <S.Wrapper>
        <S.ItemWrapper>
          {dummy.map((item, idex) => (
            <Item
              key={idex}
              shopImage={item.shopImage}
              name={item.name}
              menu={item.menu}
              price={item.price}
            />
          ))}
        </S.ItemWrapper>
      </S.Wrapper>
    </>
  );
};

export default Order;
