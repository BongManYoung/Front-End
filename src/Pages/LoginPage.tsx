import Header from "Components/Common/Header";
import Footer from "Components/Common/Footer";
import Login from "Components/Login";

const LoginPage: React.FC = () => {
  return (
    <div className="login-wrap">
      <Header />
      <Login />
      <Footer />
    </div>
  );
};

export default LoginPage;
