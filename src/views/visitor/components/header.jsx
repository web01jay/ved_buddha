import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";

import logo from "../assets/images/logo.png";

const Header = () => {
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const history = useHistory();

  useEffect(() => {
    return history.listen((location) => {
      // console.log(`You changed the page to: ${location.pathname}`);
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
                    className="fa-angle-down fa ms-2 text-black dropdown-toggle"
                    id="navbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                    onClick={(e)=>{toggleCategory(e)}}
                  >{' '}</a>
                  <ul
                    className={`dropdown-menu ${isCategoryOpen ? ' show ' : ''}`}
                    // className="dropdown-menu"
                    aria-labelledby="navbarDropdown"
                  >
                    <li>
                      <Link className="dropdown-item" to="/products">
                        TABLET, CAPSULE, SYRUP
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/products">
                        Gel, Ointment, Cream, Lotion
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/products">
                        Dental Products
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/products">
                        Ear, Nasal Drops
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/products">
                        Nutraceuticals
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/products">
                        Cosmetics
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
