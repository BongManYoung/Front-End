import { ReactComponent as Logo } from "Assets/MYD_Logo.svg";
import { HeaderContainer } from "./HeaderStyles";
import { NavLink, useNavigate } from "react-router-dom";
import { HasAdminToken } from "Store/tokenAtom";
import { useRecoilState } from "recoil";
import { useEffect } from "react";

const Header: React.FC = () => {
  const navigate = useNavigate();

  const [logged, setHasToken] = useRecoilState(HasAdminToken);

  useEffect(() => {
    if (localStorage.getItem("token")) {
      setHasToken(true);
    }
  }, []);

  return (
    <HeaderContainer>
      <div className="header">
        <Logo
          className="logo"
          onClick={() => {
            navigate("/");
            window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
          }}
        />

        <nav className="links">
          <NavLink
            to="/"
            onClick={() => {
              window.scrollTo({ top: 550, left: 0, behavior: "smooth" });
            }}
          >
            오늘의 메뉴
          </NavLink>
          <NavLink
            to="/"
            onClick={() => {
              window.scrollTo({ top: 1210, left: 0, behavior: "smooth" });
            }}
          >
            음성인식
          </NavLink>
          <NavLink
            to="/"
            onClick={() => {
              window.scrollTo({ top: 1900, left: 0, behavior: "smooth" });
            }}
          >
            음성 리뷰
          </NavLink>
          {logged ? (
            <NavLink to="">로그아웃</NavLink>
          ) : (
            <>
              <NavLink to="/login">로그인</NavLink>
            </>
          )}
        </nav>
      </div>
    </HeaderContainer>
  );
};

export default Header;
