import styled from "@emotion/styled";

export const LoginWrapper = styled.div`
  width: 400px;
  height: 500px;
  border: 1px solid red;
`;

export const InputWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;

  .input-item-wrap {
    display: flex;
    flex-direction: column;

    & input {
      border-bottom: 1px solid #5271ff;
    }
  }
`;
