import React from "react";
import { Route, Redirect } from "react-router-dom";
import "../assets/css/admin.css";

import Sidebar from "../views/admin/components/Sidebar";
import Navbar from "../views/admin/components/navbar";

export const Private = ({ component: Component, path, exact, ...rest }) => {
  return (
    <>
      <Route
        {...rest}
        render={(props) => {
          // return <Component {...props} />;
          return !localStorage.getItem("access_token") ? (
            <>
              <Sidebar />
              <div className="page-section">
                <Navbar />
                <Component {...props} />
              </div>
              <script
                src="https://cdn.jsdelivr.net/npm/jquery@3.5.1/dist/jquery.slim.min.js"
                integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj"
                crossorigin="anonymous"
              ></script>
              <script
                src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/js/bootstrap.bundle.min.js"
                integrity="sha384-fQybjgWLrvvRgtW6bFlB7jaZrFsaBXjsOMm/tB9LTS58ONXgqbR9W8oWht/amnpF"
                crossorigin="anonymous"
              ></script>
            </>
          ) : (
            <Redirect to="/dashboard" />
          );
        }}
      />
    </>
  );
};

export default Private;
// Private Route
// <>
//   <Route
//     path={path}
//     exact={exact}
//     render={() => {
//       return localStorage.getItem("access_token")  ? (
//         <Component />
//       ) : (
//         <Redirect to="/login" />
//       );
//     }}
//   />
// </>
