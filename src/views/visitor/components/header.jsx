import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { API_URL } from "../../DataHelpers/API_URL";

import logo from "../assets/images/logo.png";

const Header = () => {
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const [categories, setCategories] = useState()
  const [subCategories, setSubCategories] = useState()

  const history = useHistory();

  useEffect(() => {
      // API call using axios with get method
      axios({
        method: "get",
        url: `${API_URL}/product-category`,
        responseType: "stream"
      }).then(function (response) {
        console.log(response.data.data)
        setCategories(response.data.data)
        console.log(categories, "categories")
      })
  }, [])

  useEffect(() => {
    // API call using axios with get method
    axios({
      method: "get", 
      url: `${API_URL}/product-sub-category`, 
      responseType: "stream"
    }).then(response => {
      setSubCategories(response.data.data)
      console.log(response.data.data, "subCategories response")
      console.log(subCategories, "subCategories")
    }).catch(error => {console.log(error)})
  },[]);

  useEffect(() => {
    return history.listen((location) => {
      setIsMenuOpen(false)
      setIsCategoryOpen(false)
      window.scroll(0,0)
    });
  }, [history]);

  var toggleMenu = (e) => {
    e.preventDefault();
    setIsMenuOpen(!isMenuOpen);
  };
  var toggleCategory = (e) => {
    e.preventDefault();
    setIsCategoryOpen(!isCategoryOpen);
  };
  return (
    <>
      <header id="header" className="custom-header">
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-sticky p-0 border-0">
            <div className="navbar-brand py-0">
              <Link className="d-inline-block" to="/">
                <img src={logo} alt="logo" />
              </Link>
            </div>
            <div className="d-lg-none">
              <button
                type="button"
                id="hamburger-1"
                className={`navbar-toggle hamburger ${
                  isMenuOpen ? " open " : " collapsed "
                } `}
                onClick={(e) => {
                  toggleMenu(e);
                }}
              >
                <span className="line"></span>
                <span className="line"></span>
                <span className="line"></span>
              </button>
            </div>
            <div
              className={`navbar-collapse  ${
                isMenuOpen ? "open" : " hide  collapse"
              } `}
              id="navbar-navigation"
            >
              <ul className="p-0 nav navbar-nav align-items-baseline ms-auto mt-2 mt-lg-0 align-items-md-baseline align-items-lg-center">
              <li className="nav-item float-right mx-xl-2 mx-xxl-3 my-2 my-lg-0">
                  <Link
                    className="navbar-nav-link font-medium"
                    to="/"
                  >
                    Home
                  </Link>
                </li>
                <li className="nav-item float-right mx-xl-2 mx-xxl-3 my-2 my-lg-0">
                  <Link
                    className="navbar-nav-link font-medium"
                    to="/about"
                  >
                    About Us
                  </Link>
                </li>
                <li className="nav-item float-right mx-xl-2 mx-xxl-3 my-2 my-lg-0 dropdown">
                  <a
                    href={(e)=>{e.preventDefault()}}
                    className="navbar-nav-link font-medium dropdown-toggle"
                    id="navbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Products
                    <span className="fa-angle-down fa ms-2 text-black">{' '}</span>
                  </a>
                  <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                    {categories && categories.slice(0).reverse().map((category, index) => {
                      return (
                        <>
                          <li key={index}>
                            <Link to={`/products/${category.id}`} className="dropdown-item disabled">
                              {category.name}
                            </Link>
                          </li>
                          {subCategories && subCategories.slice(0).reverse().map((subCategory, index) => { return (
                            <>
                              {subCategory.parent_id === category.id && (
                                <li key={index}>
                                  <Link to={`/products/category/${subCategory.id}`} className="dropdown-item">
                                    {subCategory.name}
                                  </Link>
                                </li>
                              )}
                            </>
                          )})}
                          <div className="dropdown-divider"></div>
                        </>
                      )
                    })}
                  </ul>
                </li>
                <li className="nav-item float-right mx-xl-2 mx-xxl-3 my-2 my-lg-0">
                  <Link
                    className="navbar-nav-link font-medium"
                    to="/contact"
                  >
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
