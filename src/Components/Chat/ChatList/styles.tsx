import styled from "@emotion/styled";

export const ChatWrapper = styled.div`
  position: fixed;
  right: 3rem;
  bottom: 3rem;
  overflow: hidden;
  width: 380px;
  height: 75vh;
  background-color: white;
  border-radius: 20px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  z-index: 9999;
  display: flex;
  flex-direction: column;

  .chat_header {
    width: 100%;
    justify-content: space-between;
    background-color: #6b1aee;
    display: flex;

    .chat_title {
      padding: 0.5rem 0;
      font-size: 24px;
      color: #f2f2f2;
      padding-left: 2rem;
    }
    .chat_close {
      cursor: pointer;
      padding-top: 0.5rem;
      padding-right: 1rem;
      color: #f2f2f2;
      font-weight: bold;
    }
  }

  .chat_list {
    height: 76%;
  }
`;

export const SelectOption = styled.div`
  width: 80%;
  margin-top: 1rem;
  margin-left: 1rem;
  border-radius: 10px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  background-color: rgba(0, 0, 0, 0.05);
  padding: 0 1rem;
  .option {
    padding: 0.3rem;
    border: none;
    background-color: white;
    border: 1px solid rgba(0, 0, 0, 0.05);
    border-radius: 20px;
    margin-right: 1rem;
    margin-bottom: 0.4rem;

    &:hover {
      background-color: #6b1aee;
      color: #f2f2f2;
      cursor: pointer;
    }
  }
`;
