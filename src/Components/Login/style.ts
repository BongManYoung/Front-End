import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const LoginWrapper = styled.div`
  width: 250px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  & button {
    background-color: #5271ff;
    width: 90%;
    outline: none;
    border: none;
    color: white;
    padding: 10px 0;
    border-radius: 5px;
    cursor: pointer;
    box-sizing: border-box;
    transition: all 0.5s;

    :hover {
      box-shadow: 0 2px 10px #c9c9c9;
    }
  }

  p {
    margin-top: 20px;
    color: #898989;
  }
`;

export const InputWrapper = styled.div`
  margin: 20px 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  .input-item-wrap {
    padding: 10px 0;
    box-sizing: border-box;

    span {
      margin-bottom: 5px;
      font-size: 16px;
    }

    & input {
      font-size: 16px;
      outline: none;
      border: none;
      border-bottom: 2px solid #c7c7c7;
      transition: all 0.5s;
    }
  }
`;
