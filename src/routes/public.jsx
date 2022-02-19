import React, {useEffect} from "react";
import { Route, Redirect } from "react-router-dom";
import "../assets/css/visitor.css";

import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../node_modules/bootstrap/dist/js/bootstrap.js';
import '../../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';
import '../../node_modules/bootstrap/dist/js/bootstrap.esm.js';

import Header from "../views/visitor/components/header";
import Footer from "../views/visitor/components/footer";

export const Public = ({ component: Component, ...rest }) => {
  const setMinHeight = () => {
    const main = document.getElementsByClassName("main-page-section")[0];
    main.style.minHeight = window.innerHeight + "px";
  };

  window.addEventListener("resize", function () {
    setMinHeight();
  });
  useEffect(() => {
    setMinHeight();
    window.scroll(0, 0);
  }, []);

  console.log("load public");

  window.addEventListener("scroll", () => {
    if (document.documentElement.scrollTop > 8) {
      document
        .getElementsByClassName("custom-header")[0]
        .classList.add("sticky");
    } else {
      document
        .getElementsByClassName("custom-header")[0]
        .classList.remove("sticky");
    }
  });

  return (
    <>
      <Route
        {...rest}
        render={(props) => {
          // return <Component {...props} />;
          return !localStorage.getItem("access_token") ? (
            <>
              <Header />
              <div className="main-page-section">
                <Component {...props} />
              </div>
              <Footer />
            </>
          ) : (
            <Redirect to="/dashboard" />
          );
        }}
      />
    </>
  );
};

export default Public;
