import styled from "@emotion/styled";

export const ChatInputWrapper = styled.div`
  margin: 34px;
  width: 80%;
  bottom: 0;
  right: 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-color: rgba(239, 239, 240, 0.8);
  border-radius: 10px;

  .chat_input {
    display: flex;
    width: 95%;
    border: none;
    border-radius: 10px;
    font-size: 1rem;
    padding: 1rem 10px;
    background-color: rgba(239, 239, 240, 0.8);
  }

  .mic {
    margin: 10px;
  }
`;

export const InputWrapper = styled.div`
  display: flex;
  background-color: rgba(239, 239, 240, 0.8);
  margin: 0 auto;
  width: 80%;
  padding: 0.5rem;
  border-radius: 5px;
  overflow: hidden;
  height: 30px;
  margin-top: 50px;
  border: 0.5px solid gray;

  .Input {
    width: 100%;
    height: 100%;
    background-color: inherit;
    border: none;
    resize: none;
    font-size: 14px;
    font-weight: lighter;
    padding: 5px;
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
