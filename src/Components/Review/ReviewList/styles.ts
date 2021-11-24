import styled from "@emotion/styled";

export const HeaderWrapper = styled.header`
  width: 100%;
  display: flex;

  .menuSelector {
    border-top: 1px solid #969696;
    border-bottom: 1px solid #969696;
    margin-top: 2rem;
    padding: 1rem;
    text-align: center;
    flex: 1;
    cursor: pointer;
  }

  .selected {
    background-color: #6b1aee;
    color: white;
  }
`;

export const ModeWrapper = styled.div`
  .inputTitle {
    display: inline-block;
    margin-top: 1rem;
    margin-bottom: 1rem;
    color: #969696;
  }
`;
