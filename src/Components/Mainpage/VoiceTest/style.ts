import styled from "@emotion/styled";

export const VoiceWraper = styled.div`
  width: 100%;
  height: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 50px;
  justify-content: center;

  span {
    margin-bottom: 30px;
    font-size: 21px;
    font-weight: 500;
  }

  .voice_input {
    padding: 0 30px;
    background: linear-gradient(180deg, #ff557e 21.35%, #feffd1 100%);
    border-radius: 30px;
    width: 800px;
    height: 60px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    input {
      background-color: transparent;
      outline: none;
      border: none;
      color: white;
      font-size: 20px;
      width: 100%;
    }

    .mic {
      margin: 7px;
      width: 20px;
    }
  }
`;
