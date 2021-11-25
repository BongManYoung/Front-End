import { useEffect, useState } from "react";
import { getProduct, getStoreList } from "utils/api/store";
import BestShop from "./BestShop";
import ItemBox from "./items/ItemBox";
import * as S from "./style";

const MainPage = () => {
  const [ShopList, setShopList] = useState([]);
  const [storeMenu, setStoreMenu] = useState();

  const shop_list = [
    {
      title: "경양카츠",
      url: "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMDA3MDJfMjY4%2FMDAxNTkzNjgzMzQxOTk2.IWi4MeeyokMPJc4mV8UjY7prD4IlyewmmimEDL7W5ncg._vwGAHU4OyDazGTnJO8gT6J7MXrDsj4b9JN73qarV5kg.JPEG.rlatptn01%2FIMG_8324.JPG&type=sc960_832",
    },
    {
      title: "연정",
      url: "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMDAzMjZfMTcx%2FMDAxNTg1MTUxNDk4Mzkz.C0un3bzBjZpbUZlPr73hWhyUvffHgZ_lZk9CSnkf4LQg.dmrdBWjep6XA8qkdNHNqGveyxSOirUEyJ_xIVbU-DMsg.JPEG.yeon_524%2FIMG_1061.jpg&type=sc960_832",
    },
    {
      title: "경양카츠",
      url: "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMTA5MDNfMjU2%2FMDAxNjMwNjYxMjkzMDQy.oDATAn6K3MZ45_kebEuVbf1ImV9g39TmiQhZdNSkVREg.2eYIbFYPX1a9-oAIwwiUfIX_tmZYT82g56AaDgyccoQg.JPEG.sunah9597%2FIMG_7814.jpg&type=sc960_832",
    },
  ];

  useEffect(() => {
    try {
      getStoreList().then((res) => setShopList(res.data.data.stores));
    } catch (e) {
      console.log(e);
    }
  }, []);

  console.log(ShopList);

  return (
    <S.MainWrapper>
      <S.SliderWrapper>
        {shop_list?.map((item, index) => (
          <BestShop item={item} key={index} />
        ))}
      </S.SliderWrapper>
      <S.ToDayWrapper>
        <p>오늘은 이 메뉴 어때요?</p>
        <p>오늘의 메뉴를 먹고 소상공인들을 위하여 응원의 리뷰를 남겨요!</p>
        <ItemBox />
      </S.ToDayWrapper>
    </S.MainWrapper>
  );
};

export default MainPage;
