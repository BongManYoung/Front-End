import Header from "../Components/Common/Header/index";
import Footer from "../Components/Common/Footer/index";
import { SignIn } from "../Components";

const MainPage: React.FC = () => {
  return (
    <div className="login-wrap">
      <Header />
      <SignIn />
      <Footer />
    </div>
  );
};

export default MainPage;
