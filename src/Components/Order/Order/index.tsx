import * as S from "./style";
import Item from "../../Common/Item/Item";

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
  return (
    <>
      <S.Wrapper>
        <S.ItemWrapper>
          {dummy.map((item, idex) => (
            <Item
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
