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
