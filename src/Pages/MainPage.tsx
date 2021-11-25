import Header from "Components/Common/Header";
import Footer from "Components/Common/Footer";
import Mainpage from "Components/Mainpage";
import ChatBot from "Components/ChatBot";
import { useCallback, useState } from "react";
import { chatBotOpenAtom } from "Store/chatBotAtom";
import { useRecoilState } from "recoil";

const MainPage: React.FC = () => {
  return (
    <div className="main-wrapper">
      <Header />
      <Mainpage />
      <Footer />

      <ChatBot />
    </div>
  );
};

export default MainPage;
