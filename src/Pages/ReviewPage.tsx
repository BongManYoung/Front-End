import styled from "@emotion/styled";
import ChatBot from "Components/ChatBot";
import Footer from "Components/Common/Footer";
import Header from "Components/Common/Header";
import ReviewHeader from "Components/Review/ReviewHeader";
import ReviewList from "Components/Review/ReviewList";
import React, { useEffect } from "react";

const ReviewPage: React.FunctionComponent = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <React.Fragment>
      <Header />
      <ReviewPageView>
        <ReviewHeader />
        <ReviewList />
      </ReviewPageView>
      <Footer />

      <ChatBot />
    </React.Fragment>
  );
};

const ReviewPageView = styled.main`
  width: 1000px;
  margin: 40px auto;
`;

export default ReviewPage;
