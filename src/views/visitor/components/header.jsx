import React, {useState} from "react";
import { Link } from "react-router-dom";

import logo from "../assets/images/logo.png"

const Header = () => {
  const [isCategoryOpen, setIsCategoryOpen] = useState()
  const [isMenuOpen, setIsMenuOpen] = useState()
  return (
    <>
      <header id="header" className="custom-header">
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-sticky p-0 border-0">
            <div className="navbar-brand py-0">
              <a className="d-inline-block" href="./index.html">
                <img src={logo} alt="logo" />
              </a>
            </div>
            <div className="d-lg-none">
              <button
                type="button"
                id="hamburger-1"
                className="collapsed navbar-toggle hamburger"
              >
                <span className="line"></span>
                <span className="line"></span>
                <span className="line"></span>
              </button>
            </div>
            <div
              className="hide navbar-collapse collapse"
              id="navbar-navigation"
            >
              <ul className="p-0 nav navbar-nav align-items-baseline ms-auto mt-2 mt-lg-0 align-items-md-baseline align-items-lg-center">
                <li className="nav-item float-right mx-xl-2 mx-xxl-3 my-2 my-lg-0">
                  <Link
                    className="navbar-nav-link font-medium"
                    to="/about"
                  >
                    About Us
                  </Link>
                </li>
                <li className="nav-item float-right mx-xl-2 mx-xxl-3 my-2 my-lg-0 dropdown">
                  <Link
                    className="navbar-nav-link font-medium"
                    to="/products"
                  >
                    Products
                  </Link>
                  <a
                    href=" "
                    className="dropdown-toggle fa-angle-up ms-2"
                    id="navbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  ></a>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdown"
                  >
                    <li>
                      <Link
                        className="dropdown-item"
                        to="/products/details"
                      >
                        TABLET
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="dropdown-item"
                        to="/products/details"
                      >
                        CAPSULE
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="dropdown-item"
                        to="/products/details"
                      >
                        SYRUP
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="dropdown-item"
                        to="/products/details"
                      >
                        GEL
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="dropdown-item"
                        to="/products/details"
                      >
                        Ointment
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="dropdown-item"
                        to="/products/details"
                      >
                        Cream
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="dropdown-item"
                        to="/products/details"
                      >
                        Lotion
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="dropdown-item"
                        to="/products/details"
                      >
                        Energy Drinks
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="dropdown-item"
                        to="/products/details"
                      >
                        Protein Powder
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="dropdown-item"
                        to="/products/details"
                      >
                        Multivitamin Tablet
                      </Link>
                    </li>
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
