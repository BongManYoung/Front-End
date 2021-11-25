import styled from "@emotion/styled";

export const HeaderWrapper = styled.section`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin: 0rem auto;

  .shop_pic {
    width: 500px;
    height: 300px;
    margin-right: 1rem;
    object-fit: cover;
  }

  .shop_info {
    width: 45%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    .shop_title-wrap {
      display: flex;
      flex-direction: column;

      .shop_title_line {
        height: 3px;
        width: 15%;
        background-color: #6b1aee;
      }
    }
    .shop_position {
      display: inline-block;
      color: #8c8c8c;
      font-size: 15px;
      margin-bottom: 1rem;
    }
    .shop_content {
      padding: 1rem;
      border-radius: 5px;
      background-color: #fafafa;
      font-size: 15px;
      margin-bottom: 1rem;
    }

    .shop_menus {
      width: 47%;
      &_title {
        font-weight: normal;
        color: #8c8c8c;
      }
      display: flex;
      flex-direction: column;

      & > select {
        border-radius: 5px;
        padding: 0.3rem 1rem;
        border: none;
        background-color: #fafafa;
      }
    }

    .buttons {
      margin-top: 1rem;
      display: flex;
      justify-content: space-between;

      .special {
        color: white;
        outline: none;
        border: none;
        background: #6b1aee;
        border-radius: 5px;
      }

      & > button {
        cursor: pointer;
        width: 47%;
        height: 40px;
        background-color: #fafafa;
        border: none;
        border: 1px solid #e3e3e3;
        border-radius: 5px;
        color: #969696;
        transition: all 0.5s;

        :hover {
          box-shadow: 0 1px 5px #e7e7e7;
        }
      }
    }
  }
`;
