import React, { Suspense, useEffect } from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
// import { Private as PrivateRoute } from "./private";
import { Public as PublicRoute } from "./public";

import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";
import ProductList from "../pages/Products/productList";
import ProductDetail from "../pages/Products/productDetail";

// import Sidebar from "../components/Sidebar";
// import Navbar from "../components/navbar";

const Routes = () => {

    const setMinHeight = () => {
        const main = document.getElementById("main");
        main.style.minHeight = window.innerHeight + "px";
    }

    window.addEventListener("resize", function () {
      setMinHeight();
    });
    useEffect(() => {
      setMinHeight();
    }, []);

  return (
    <Router>
      <main className="main" id="main">
        {/* <Sidebar />        
        <Navbar /> */}
        <Suspense fallback={<div>Component Loading</div>}>
          <Switch>
            <PublicRoute path="/login" component={Login} exact />
            <PublicRoute path="/dashboard" component={Dashboard} exact />
            <PublicRoute path="/products" component={ProductList} exact />
            <PublicRoute path="/products/:id" component={ProductDetail} exact />

            {/* <PrivateRoute path="/users" component={Users} exact />
          <PrivateRoute path="/users/:id" component={UserProfile} exact />
          <PrivateRoute path="/users/:id/posts" component={Posts} exact />
          <PrivateRoute path="/form-post" component={FormPost} exact /> */}

            <PublicRoute path="/" component={Login} exact />
            <PublicRoute path={`*`} component={Dashboard} />
          </Switch>
        </Suspense>
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
      </main>
    </Router>
  );
};

export default Routes;
