import React, { Suspense, useEffect } from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import { Private as PrivateRoute } from "./private";
import { Public as PublicRoute } from "./public";

import Login from "../views/admin/pages/Login";
import Dashboard from "../views/admin/pages/Dashboard";
import ProductList from "../views/admin/pages/Products/productList";
import ProductDetail from "../views/admin/pages/Products/productDetail";
import HomeBanner from "../views/admin/pages/HomeBanner";
import AddBanner from "../views/admin/pages/HomeBanner/addBanner";
import EditBanner from "../views/admin/pages/HomeBanner/editBanner";
import HomePioneers from "../views/admin/pages/HomePioneers";
import AddPioneers from "../views/admin/pages/HomePioneers/addPioneer";
import EditPioneers from "../views/admin/pages/HomePioneers/editPioneers";
import Categories from "../views/admin/pages/Categories";
import EditCategories from "../views/admin/pages/Categories/editCategories";
import SubCategories from "../views/admin/pages/Categories/SubCategories";
import EditProducts from "../views/admin/pages/Products/editProducts";
import EditSubCategory from "../views/admin/pages/Categories/SubCategories/editSubCategory";

import Home from "../views/visitor/pages/Home";
import About from "../views/visitor/pages/About";
import Contact from "../views/visitor/pages/Contact";
import Products from "../views/visitor/pages/Products";
import ProductDetails from "../views/visitor/pages/Products/productDetails";
import CategoryProducts from "../views/visitor/pages/Products/categoryProduct";

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
      window.scroll(0,0)
    }, []);

  return (
    <Router>
      <main className="main" id="main">
        {/* <Sidebar />        
        <Navbar /> */}
        <Suspense fallback={<div>Component Loading</div>}>
          <Switch>
            <PrivateRoute path="/admin/login" component={Login} exact />
            <PrivateRoute path="/admin/dashboard" component={Dashboard} exact />
            <PrivateRoute path="/admin/products" component={ProductList} exact />
            <PrivateRoute path="/admin/products/:pId" component={ProductDetail} exact />
            <PrivateRoute path="/admin/products/add" component={EditProducts} exact />
            <PrivateRoute path="/admin/products/:pId/edit" component={EditProducts} exact />
            <PrivateRoute path="/admin/home-banner" component={HomeBanner} exact />
            <PrivateRoute path="/admin/home-banner/add" component={AddBanner} exact />
            <PrivateRoute path="/admin/home-banner/:bId/edit" component={EditBanner} exact />
            <PrivateRoute path="/admin/home-pioneers" component={HomePioneers} exact />
            <PrivateRoute path="/admin/home-pioneers/add" component={AddPioneers} exact />
            <PrivateRoute path="/admin/home-pioneers/edit" component={EditPioneers} exact />
            <PrivateRoute path="/admin/categories" component={Categories} exact />
            <PrivateRoute path="/admin/categories/:cId/edit" component={EditCategories} exact />
            <PrivateRoute path="/admin/categories/add" component={EditCategories} exact />
            <PrivateRoute path="/admin/sub-categories/:sId" component={SubCategories} exact />
            <PrivateRoute path="/admin/sub-categories/add" component={EditSubCategory} exact />
            <PrivateRoute path="/admin/sub-categories/:sId/edit" component={EditSubCategory} exact />

            <PublicRoute path="/about" component={About} exact />
            <PublicRoute path="/contact" component={Contact} exact />
            <PublicRoute path="/products" component={Products} exact />
            <PublicRoute path="/products/details/:pageId" component={ProductDetails} exact />
            <PublicRoute path="/products/category/:catId" component={CategoryProducts} exact />

            {/* <PrivateRoute path="/users" component={Users} exact />
          <PrivateRoute path="/users/:id" component={UserProfile} exact />
          <PrivateRoute path="/users/:id/posts" component={Posts} exact />
          <PrivateRoute path="/form-post" component={FormPost} exact /> */}

            <PublicRoute path="/" component={Home} exact />
            <PublicRoute path={`*`} component={Home} />
          </Switch>
        </Suspense>
      </main>
    </Router>
  );
};

export default Routes;
