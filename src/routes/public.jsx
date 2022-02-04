import React from "react";
import { Route, Redirect } from "react-router-dom";

import Sidebar from "../components/Sidebar";
import Navbar from "../components/navbar";

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
              <Sidebar />        
              <div className="page-section">
                <Navbar />
                <Component {...props} />
              </div>
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
