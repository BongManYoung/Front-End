import React from "react";
import Login from "Components/Login";
import PageLayout from "Components/Common/PageLayout";

const LoginPage: React.FC = () => {
  return (
    <React.Fragment>
      <PageLayout>
        <Login />
      </PageLayout>
    </React.Fragment>
  );
};

export default LoginPage;
