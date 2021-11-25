import styled from "@emotion/styled";

export const BestWrapper = styled.div`
  width: 100%;
  margin-bottom: 30px;

  .best_title {
    padding: 15px 0;
    box-sizing: border-box;
    border-bottom: 1px solid #e0e0e0;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    font-size: 18px;

    .title_wrapper {
      span:nth-child(1) {
        font-weight: 500;
      }

      span:nth-child(2) {
        font-weight: 500;
        color: #ff3636;
      }
    }

    .more_text {
      color: #868686;
      font-size: 16px;
      cursor: pointer;
    }
  }
`;
