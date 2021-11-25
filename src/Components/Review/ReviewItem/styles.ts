import styled from "@emotion/styled";

export const CommentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2.5rem 0;
  box-sizing: border-box;
  border-bottom: 1px solid #e0e0e0;

  .reviewHeader {
    display: flex;
    align-items: center;
    margin-bottom: 1rem;

    .profile {
      overflow: hidden;
      border-radius: 50%;
      border: 1px solid #dfdfdf;
      width: 40px;
      height: 40px;
    }

    .nickname {
      font-size: 16px;
      margin-left: 1rem;
    }
  }

  .reviewContent {
    width: fit-content;
    padding: 0.4rem 1rem;
    background-color: #f2f2f2;
    color: #000000;
    border-radius: 5px;
  }

  .reviewContainer {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    span {
      color: #868686;
      font-size: 15px;
      font-weight: 300;
      cursor: pointer;
    }
  }
`;

export const ReviewIcon = styled.div`
  cursor: pointer;
  margin-top: 10px;
  width: 100%;
  display: flex;
  flex-direction: row;
  font-size: 15px;

  .icon_wrapper {
    margin-right: 10px;
    padding: 3px 15px 5px 15px;
    box-sizing: border-box;
    border: 1px solid #d5d5d5;
    border-radius: 30px;
    display: flex;
    flex-direction: row;
  }
`;
