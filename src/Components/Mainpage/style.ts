import styled from "@emotion/styled";

export const MainWrapper = styled.div`
  margin: 30px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  img {
    width: 100%;
    height: 500px;
    object-fit: cover;
    cursor: pointer;
  }
`;

export const SliderWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 30px;
  width: 1000px;

  img {
    width: 450px;
    height: 300px;
    object-fit: cover;
    border-radius: 5px;
    box-shadow: 0 0 9px #9b9b9b;
  }

  .best_wrap {
    width: 330px;
    display: flex;
    flex-direction: column;

    .best_img {
      width: 100%;
      height: 100%;
      position: relative;

      .back {
        position: absolute;
        width: 100%;
        height: 100%;
        background: linear-gradient(
          180deg,
          rgba(0, 0, 0, 0) 0%,
          rgba(0, 0, 0, 0.5) 100%
        );
      }
      img {
        width: 100%;
        height: 400px;
        object-fit: cover;
      }
    }

    #title {
      margin: 10px 0;
      font-weight: 500;
      font-size: 25px;
    }

    .review {
      span {
        color: #6b1aee;
        margin-right: 15px;
      }
    }
  }
`;

export const ToDayWrapper = styled.div`
  padding: 30px;
  margin: 100px auto;
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

export const Title = styled.div`
  display: flex;
  flex-direction: column;
  color: white;
  box-sizing: border-box;
  padding: 20px;
  position: absolute;
  bottom: 0;

  span:nth-child(1) {
    font-weight: 400;
    font-size: 30px;
  }

  span:nth-child(2) {
    font-weight: 500;
    font-size: 35px;
  }
`;
