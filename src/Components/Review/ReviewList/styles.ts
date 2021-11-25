import styled from "@emotion/styled";

export const HeaderWrapper = styled.header`
  margin: 30px 0;
  width: 100%;
  display: flex;

  .menuSelector {
    border-top: 1px solid #e3e3e3;
    border-bottom: 1px solid #e3e3e3;
    margin-top: 2rem;
    padding: 0.4rem 1rem;
    text-align: center;
    flex: 1;
    cursor: pointer;
  }

  .selected {
    border-radius: 5px;
    background-color: #6b1aee;
    color: white;
  }
`;

export const ModeWrapper = styled.div`
  .inputTitle {
    margin-top: 30px;
    display: inline-block;
    margin-top: 1rem;
    margin-bottom: 1rem;
    color: black;
    font-weight: 500;
    font-size: 18px;
  }
`;
