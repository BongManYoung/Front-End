import { ReactComponent as Logo } from "Assets/MYD_Logo.svg";
import { HeaderContainer } from "./HeaderStyles";
import { NavLink } from "react-router-dom";

const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <div className="header">
        <Logo className="logo" />

        <nav className="links">
          <NavLink to="/">오늘의 메뉴</NavLink>
          <NavLink to="/">이달의 리뷰</NavLink>
          <NavLink to="/">음성 리뷰</NavLink>
          <NavLink to="/login">로그인</NavLink>
        </nav>
      </div>
    </HeaderContainer>
  );
};

export default Header;
