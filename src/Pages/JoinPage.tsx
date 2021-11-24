import Header from "../Components/Common/Header/index";
import Footer from "../Components/Common/Footer/index";
import Join from "../Components/Join";

const MainPage: React.FC = () => {
  return (
    <div className="login-wrap">
      <Header />
      <Join />
      <Footer />
    </div>
  );
};

export default MainPage;
