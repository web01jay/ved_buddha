import React from "react";
import { Route, Redirect } from "react-router-dom";
import "../assets/css/visitor.css";

import Header from "../views/visitor/components/header";
import Footer from "../views/visitor/components/footer";

export const Public = ({ component: Component, ...rest }) => {
  console.log("load public");

  return (
    <>
      <Route
        {...rest}
        render={(props) => {
          // return <Component {...props} />;
          return !localStorage.getItem("access_token")  ? (
            <>
              <Header />      
              <div className="page-section">
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
