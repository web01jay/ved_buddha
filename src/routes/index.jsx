import React, { Suspense, useEffect } from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import { Private as PrivateRoute } from "./private";
import { Public as PublicRoute } from "./public";

import Login from "../views/admin/pages/Login";
import Dashboard from "../views/admin/pages/Dashboard";
import ProductList from "../views/admin/pages/Products/productList";
import ProductDetail from "../views/admin/pages/Products/productDetail";
import Home from "../views/visitor/pages/Home";
import About from "../views/visitor/pages/About";
import Contact from "../views/visitor/pages/Contact";
import Products from "../views/visitor/pages/Products";
import ProductDetails from "../views/visitor/pages/Products/productDetails";
import { history } from "../history.js";

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
    <Router history={history}>
      <main className="main" id="main">
        {/* <Sidebar />        
        <Navbar /> */}
        <Suspense fallback={<div>Component Loading</div>}>
          <Switch>
            <PrivateRoute path="/admin/login" component={Login} exact />
            <PrivateRoute path="/admin/dashboard" component={Dashboard} exact />
            <PrivateRoute path="/admin/products" component={ProductList} exact />
            <PrivateRoute path="/admin/products/:id" component={ProductDetail} exact />

            <PublicRoute path="/about" component={About} exact />
            <PublicRoute path="/contact" component={Contact} exact />
            <PublicRoute path="/products" component={Products} exact />
            <PublicRoute path="/products/details" component={ProductDetails} exact />

            {/* <PrivateRoute path="/users" component={Users} exact />
          <PrivateRoute path="/users/:id" component={UserProfile} exact />
          <PrivateRoute path="/users/:id/posts" component={Posts} exact />
          <PrivateRoute path="/form-post" component={FormPost} exact /> */}

            <PublicRoute path="/" component={Home} exact />
            <PublicRoute path={`*`} component={Dashboard} />
          </Switch>
        </Suspense>
      </main>
    </Router>
  );
};

export default Routes;
