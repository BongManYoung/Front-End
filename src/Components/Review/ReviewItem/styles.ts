import styled from "@emotion/styled";

export const CommentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2.5rem 0;
  box-sizing: border-box;
  border-bottom: 1px solid #e3e3e3;

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
    background-color: #f9f9f9;
    color: #000000;
    border-radius: 5px;
  }
`;
