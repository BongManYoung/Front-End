import styled from "@emotion/styled";

export const InputWrapper = styled.div`
  display: flex;
  background-color: #eee3ff;
  margin: 0 auto;
  width: 100%;
  padding: 0.2rem;
  border-radius: 5px;
  overflow: hidden;
  margin-bottom: 3rem;
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
  }
  .listening {
    width: 100px;
    align-items: center;
    display: flex;
    flex-direction: column;
  }
`;
