import Footer from "Components/Common/Footer";
import Header from "Components/Common/Header";
import PageLayout from "Components/Common/PageLayout";
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
