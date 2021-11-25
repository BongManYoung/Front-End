import styled from "@emotion/styled";

export const ItemBoxWrapper = styled.div`
  margin: 30px auto;
  width: 100%;
  display: flex;
  flex-direction: row;
  flex: wrap;
  justify-content: center;
  gap: 30px;

  .item-box {
    transition: all 0.5s;
    img {
      width: 235px;
      height: 300px;
      object-fit: cover;
    }

    .shop-info {
      display: flex;
      flex-direction: column;

      span:nth-of-type(1) {
        color: #cbcbcb;
      }

      span:nth-of-type(3) {
        font-weight: 500;
        color: #8fa3ff;
      }
    }

    :hover {
      transform: translateY(-10px);
    }
  }
`;

export const MonthReviewWrapper = styled.div``;
