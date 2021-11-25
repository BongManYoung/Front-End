import styled from "@emotion/styled";

export const InputWrapper = styled.div`
  display: flex;
  background-color: #f2f2f2;
  margin: 0 auto;
  width: 100%;
  padding: 0.5rem;
  border-radius: 5px;
  overflow: hidden;
  height: 100%;

  .reviewInput {
    width: 100%;
    height: 100%;
    background-color: inherit;
    border: none;
    resize: none;
  }
  .mic {
    cursor: pointer;
    width: 18px;
  }
  .listening {
    width: 100px;
    align-items: center;
    display: flex;
    flex-direction: column;
  }
`;
