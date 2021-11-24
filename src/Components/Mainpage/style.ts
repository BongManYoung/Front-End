import styled from "@emotion/styled";

export const MainWrapper = styled.div`
  margin: 30px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
`;

export const SliderWrapper = styled.div`
  display: flex;
  gap: 30px;

  img {
    width: 450px;
    height: 300px;
    object-fit: cover;
    border-radius: 5px;
    box-shadow: 0 0 9px #9b9b9b;
  }
`;

export const ToDayWrapper = styled.div`
  padding: 30px;
  margin: 50px auto;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #17202e;
  color: white;
  box-sizing: border-box;

  p {
    margin-bottom: 10px;
    font-size: 24px;
    font-weight: 600;
  }

  p:nth-child(2) {
    font-size: 16px;
    color: #cbcbcb;
    font-weight: 300;
  }
`;
