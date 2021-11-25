import styled from "@emotion/styled";

export const Wrapper = styled.div`
  position: fixed;
  z-index: 99;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Overlay = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.8);
`;

export const Container = styled.div`
  position: relative;
  top: 0px;
  padding: 0 auto;
  width: 25%;
  height: 600px;
  background-color: white;
  border-radius: 15px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const OrderDesc = styled.p`
  font-size: 20px;
  display: flex;
  flex-direction: column;
  margin-top: 50px;
  span {
    margin-top: 40px;
    font-weight: lighter;
    border-left: 3px solid #6b1aee;
    padding-left: 10px;
  }
`;

export const Title = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  font-weight: bold;
  color: white;
  background-color: #6b1aee;
  border-radius: 15px 15px 0 0;
  border: none;
  width: 100%;
  height: 8%;
  overflow: auto;
`;

export const Close = styled.div`
  position: absolute;
  margin-right: 25px;
  color: white;
  right: 0;
  &:hover {
    cursor: pointer;
  }
`;

export const BtnWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin-top: 210px;
  width: 300px;
  button:nth-of-type(1) {
    width: 100px;
    height: 40px;
    background-color: #6b1aee;
    color: white;
    font-size: 16px;
    font-weight: bold;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  button:nth-of-type(2) {
    width: 100px;
    height: 40px;
    background-color: white;
    border: 1px solid #6b1aee;
    border-radius: 5px;
    color: #6b1aee;
    font-size: 16px;
    font-weight: bold;
    cursor: pointer;
  }
`;
