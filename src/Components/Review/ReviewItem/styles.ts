import styled from "@emotion/styled";

export const CommentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 3rem 0;

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
      margin-left: 1rem;
    }
  }

  .reviewContent {
    padding: 0.4rem;
    background-color: #f2f2f2;
    color: #000000;
    border-radius: 5px;
  }
`;
