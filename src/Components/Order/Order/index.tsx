import * as S from "./style";
import Item from "../../Common/Item/Item";
import { parse } from "query-string";
import { useEffect, useState } from "react";
import { getProduct, getStoreDetail } from "utils/api/store";
import { useLocation } from "react-router";

const dummy = [
  {
    shopImage:
      "https://images.velog.io/images/hjh040302/post/0dd75b88-55ac-4bfc-9e2c-8ac0fe31fdac/image.png",
    name: "짬뽕과 손님 2호점",
    menu: "삼선 짬뽕",
    price: 18000,
  },
  {
    shopImage:
      "https://images.velog.io/images/hjh040302/post/0dd75b88-55ac-4bfc-9e2c-8ac0fe31fdac/image.png",
    name: "짬뽕과 손님 2호점",
    menu: "삼선 짬뽕",
    price: 18000,
  },
  {
    shopImage:
      "https://images.velog.io/images/hjh040302/post/0dd75b88-55ac-4bfc-9e2c-8ac0fe31fdac/image.png",
    name: "짬뽕과 손님 2호점",
    menu: "삼선 짬뽕",
    price: 18000,
  },
  {
    shopImage:
      "https://images.velog.io/images/hjh040302/post/0dd75b88-55ac-4bfc-9e2c-8ac0fe31fdac/image.png",
    name: "짬뽕과 손님 2호점",
    menu: "삼선 짬뽕",
    price: 18000,
  },
  {
    shopImage:
      "https://images.velog.io/images/hjh040302/post/0dd75b88-55ac-4bfc-9e2c-8ac0fe31fdac/image.png",
    name: "짬뽕과 손님 2호점",
    menu: "삼선 짬뽕",
    price: 18000,
  },
  {
    shopImage:
      "https://images.velog.io/images/hjh040302/post/0dd75b88-55ac-4bfc-9e2c-8ac0fe31fdac/image.png",
    name: "짬뽕과 손님 2호점",
    menu: "삼선 짬뽕",
    price: 18000,
  },
  {
    shopImage:
      "https://images.velog.io/images/hjh040302/post/0dd75b88-55ac-4bfc-9e2c-8ac0fe31fdac/image.png",
    name: "짬뽕과 손님 2호점",
    menu: "삼선 짬뽕",
    price: 18000,
  },
  {
    shopImage:
      "https://images.velog.io/images/hjh040302/post/0dd75b88-55ac-4bfc-9e2c-8ac0fe31fdac/image.png",
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
