import styled from "@emotion/styled";

export const HeaderContainer = styled.header`
  width: 100%;
  height: 60px;
  position: fixed;
  top: 0;

  background-color: white;
  z-index: 5;

  .header {
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 1000px;
  }

  .logo {
    width: 60px;
    height: 60px;
  }

  .links {
    display: flex;
    a {
      margin-left: 3rem;
      text-decoration: none;
      color: black;
      //  font-weight: lighter;
    }
  }
`;
