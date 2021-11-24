import styled from "@emotion/styled";

export const HeaderWrapper = styled.section`
  display: flex;
  justify-content: center;
  margin-top: 3rem;

  .shop_pic {
    width: 360px;
    margin-right: 1rem;
  }

  .shop_info {
    margin-left: 1rem;

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

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const SelectTab = styled.div`
  height: 52px;
  width: 1200px;
  border-top: 1px solid #e5e5e5;
  border-bottom: 1px solid #e5e5e5;
  margin-top: 85px;
  display: flex;
  flex-direction: row;
`;

interface BtnProps {
  selected: boolean;
}

export const MenuBtn = styled.div`
  width: 50%;
  background: #6b1aee;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  color: white;
  font-weight: 400;
  cursor: pointer;
`;

export const ReviewBtn = styled.div`
  width: 50%;
  background: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  font-weight: 400;
  cursor: pointer;
`;
