import styled from "@emotion/styled";
import Footer from "Components/Common/Footer";
import Header from "Components/Common/Header";
import ReviewHeader from "Components/Review/ReviewHeader";
import ReviewList from "Components/Review/ReviewList";
import React from "react";

const ReviewPage: React.FunctionComponent = () => {
  return (
    <React.Fragment>
      <Header />
      <ReviewPageView>
        <ReviewHeader />
        <ReviewList />
      </ReviewPageView>
      <Footer />
    </React.Fragment>
  );
};

const ReviewPageView = styled.main`
  width: 1000px;
  margin: 40px auto;
`;

export default ReviewPage;
