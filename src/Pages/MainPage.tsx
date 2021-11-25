import Header from "Components/Common/Header";
import Footer from "Components/Common/Footer";
import Mainpage from "Components/Mainpage";

const MainPage: React.FC = () => {
  return (
    <div className="main-wrapper">
      <Header />
      <Mainpage />
      <Footer />
    </div>
  );
};

export default MainPage;
