import Header from "../Components/Common/Header/index";
import Footer from "../Components/Common/Footer/index";
import Login from "../Components/login/index";

const MainPage: React.FC = () => {
  return (
    <div className="login-wrap">
      <Header />
      <Login />
      <Footer />
    </div>
  );
};

export default MainPage;
