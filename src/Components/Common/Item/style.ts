import styled from "@emotion/styled";

export const ItemBox = styled.div`
  transition: all 0.5s;
  img {
    width: 235px;
    height: 300px;
    object-fit: cover;
  }
  :hover {
    transform: translateY(-10px);
  }
`;

export const ShopInfo = styled.div`
  display: flex;
  flex-direction: column;

  span:nth-child(1) {
    color: #cbcbcb;
  }

  span:nth-child(3) {
    font-weight: 500;
    color: #8fa3ff;
  }
`;
