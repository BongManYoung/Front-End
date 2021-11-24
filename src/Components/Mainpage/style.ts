import styled from "@emotion/styled";

export const MainWrapper = styled.div`
  margin: 50px auto;
  width: 1000px;
  height: 100%;
`;

export const SliderWrapper = styled.div`
  img {
    width: 100%;
    height: 500px;
    object-fit: cover;
  }
`;

export const ToDayWrapper = styled.div`
  margin: 50px 0;
  width: 100%;
  display: flex;
  flex-direction: column;

  p {
    margin-bottom: 20px;
    font-size: 24px;
    font-weight: 600;
  }
`;
export const ItemBoxWrapper = styled.div`
  width: 100%;
  border: 1px solid red;
  display: flex;
  flex-direction: row;
  flex: wrap;
  gap: 20px;

  .item-box {
    img {
      width: 235px;
      height: 300px;
      object-fit: cover;
    }

    .shop-info {
      display: flex;
      flex-direction: column;

      span:nth-child(1) {
        color: #747474;
      }

      span:nth-child(3) {
        font-weight: 500;
      }
    }
  }
`;
