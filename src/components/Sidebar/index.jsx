import React from "react";
import "./sidebar.css"
import Logo from "../../dist/img/logo.png"
import { Link } from "react-router-dom";

const Sidebar = () => {
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
            {/* <!-- Add icons to the links using the .nav-icon class
               with font-awesome or any other icon font library --> */}
            <li className="nav-item">
              <Link to="/dashboard" className="nav-link active">
                <i className="nav-icon fas fa-tachometer-alt"></i>
                <p>
                  Dashboard
                </p>
              </Link>
            </li>
            
            <li className="nav-item">
              <Link to="/products" className="nav-link">
                <i className="nav-icon fas fa-tree"></i>
                <p>
                  Produsts
                </p>
              </Link>
              
            </li>
            
            
            <li className="nav-item">
              <a href={(e)=>{e.preventDefault()}} className="nav-link">
                <i className="far fa-user nav-icon"></i>
                <p>
                  About
                </p>
              </a>
            </li>

            <li className="nav-item">
              <a href={(e)=>{e.preventDefault()}} className="nav-link">
                <i className="nav-icon far fa-envelope"></i>
                <p>
                  Conatact
                </p>
              </a>
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
