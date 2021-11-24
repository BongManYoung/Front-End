import Join from "../Components/Join";
import React from "react";
import PageLayout from "Components/Common/PageLayout";

const MainPage: React.FC = () => {
  return (
    <React.Fragment>
      <PageLayout>
        <Join />
      </PageLayout>
    </React.Fragment>
  );
};

export default MainPage;
