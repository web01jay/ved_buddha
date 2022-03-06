import React, { useState, useEffect } from "react";
import "./sidebar.css"
import Logo from "../../dist/img/logo.png"
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [activeTab, setActiveTab] = useState();

  function changeTab (String, e) {
    setActiveTab(String)
    e.preventDefault();
  }

  return (
    <aside className="main-sidebar sidebar-dark-primary elevation-4">
      {/* <!-- Brand Logo --> */}
      <div className="d-block">
      <a href={(e)=>{e.preventDefault()}} className="brand-link d-block">
        <img
          src={Logo}
          alt="AdminLTE Logo"
          className="brand-image mx-0"
        //   style={opacity=.8}
        />
        <span className="brand-text font-weight-light">Ved Buddha Admin</span>
      </a>
      </div>

      {/* <!-- Sidebar --> */}
      <div className="sidebar">
        {/* <!-- Sidebar Menu --> */}
        <nav className="mt-2">
          <ul
            className="nav nav-pills nav-sidebar flex-column"
            data-widget="treeview"
            role="menu"
            data-accordion="false"
          >
            <li className="nav-item" onClick={()=>{changeTab('dashboard')}}>
              <Link to="/admin/dashboard" className={`nav-link ${activeTab == 'dashboard' ? 'active' : ''}`}>
                <p>
                  Dashboard
                </p>
              </Link>
            </li>

            <li className="nav-item" onClick={()=>{changeTab('homeBanner')}}>
              <Link to="/admin/home-banner" className={`nav-link ${activeTab == 'homeBanner' ? 'active' : ''}`}>
                <p>
                  Home Banner
                </p>
              </Link>
            </li>

            <li className="nav-item" onClick={()=>{changeTab('homePioneers')}}>
              <Link to="/admin/home-pioneers" className={`nav-link ${activeTab == 'homePioneers' ? 'active' : ''}`}>
                <p>
                  Home Pioneers
                </p>
              </Link>
            </li>

            <li className="nav-item" onClick={()=>{changeTab('categories')}}>
              <Link to="/admin/categories" className={`nav-link ${activeTab == 'categories' ? 'active' : ''}`}>
                <p>
                  Categories
                </p>
              </Link>
            </li>

            <li className="nav-item" onClick={()=>{changeTab('subCategories')}}>
              <Link to="/admin/sub-categories" className={`nav-link ${activeTab == 'subCategories' ? 'active' : ''}`}>
                <p>
                  Sub Categories
                </p>
              </Link>
            </li>
            
            <li className="nav-item" onClick={()=>{changeTab('products')}}>
              <Link to="/admin/products" className={`nav-link ${activeTab == 'products' ? 'active' : ''}`}>
                <p>
                  Produsts
                </p>
              </Link>  
            </li>
            
            

            <li className="nav-item" onClick={()=>{changeTab('conatact')}}>
              <Link to="/admin/dashboard" className={`nav-link ${activeTab == 'conatact' ? 'active' : ''}`}>
                <p>
                  Conatact Messages
                </p>
              </Link>
            </li>

          </ul>
        </nav>
        {/* <!-- /.sidebar-menu --> */}
      </div>
      {/* <!-- /.sidebar --> */}
    </aside>
  );
};

export default Sidebar;
