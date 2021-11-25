import * as S from "./style";

interface ItemProps {
  shopImage: string;
  name: string;
  menu: string;
  price: number;
}

const Item: React.FC<ItemProps> = ({ shopImage, name, menu, price }) => {
  return (
    <>
      <S.ItemBox>
        <img src={shopImage} alt="" />
        <S.ShopInfo>
          <span>{name}</span>
          <span>{menu}</span>
          <span>{price}</span>
        </S.ShopInfo>
      </S.ItemBox>
    </>
  );
};

export default Item;
