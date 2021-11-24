import styled from "@emotion/styled";

export const HeaderWrapper = styled.section`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin: 0rem auto;

  .shop_pic {
    width: 360px;
    height: 250px;
    margin-right: 1rem;
  }

  .shop_info {
    .shop_title {
    }
    .shop_position {
      display: inline-block;
      color: #8c8c8c;
      font-size: 14px;
      margin-bottom: 1rem;
    }
    .shop_content {
      padding: 1rem;
      background-color: #fafafa;
      font-size: 12px;
      margin-bottom: 1rem;
    }

    .shop_menus {
      &_title {
        font-weight: normal;
        color: #8c8c8c;
      }
      display: flex;
      flex-direction: column;

      & > select {
        padding: 0.3rem 1rem;
        border: none;
        background-color: #fafafa;
      }
    }

    .buttons {
      margin-top: 1rem;
      display: flex;
      justify-content: space-evenly;

      .special {
        background-color: #6b1aee;
        border: 1px solid #6b1aee;
        color: white;
      }

      & > button {
        width: 224px;
        height: 40px;
        background-color: #fafafa;
        border: none;
        border: 1px solid #969696;
        color: #969696;
      }
    }
  }
`;
