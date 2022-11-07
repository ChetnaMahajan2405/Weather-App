import React from "react";
import Image from "../Image";
import loader from "assets/loader.svg";
import "./pageLoader.less";

const PageLoader: React.FC = () => (
  <div className="loader">
    <header className="loader-header">
      <Image src={loader} className="loader-logo" alt="page-loader" />
    </header>
  </div>
);

export default PageLoader;
