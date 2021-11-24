import React from "react";
import Footer from "../Footer";
import Header from "../Header";

const PageLayout: React.FunctionComponent = ({ children }) => {
  return (
    <React.Fragment>
      <Header />
      <main className="page_layout">{children}</main>
      <Footer />
    </React.Fragment>
  );
};

export default PageLayout;
