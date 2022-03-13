import React from "react";
import {Link} from 'react-router-dom';

const Dashboard = () => {
  return (
    <section className="content-section">
      <div className="content-header">
        <div className="container-fluid">
          <h1 className="mb2">Dashbaord</h1>
        </div>
      </div>
      <div className="content-body">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12">
              <h1 className="py-5 text-center">Welcome to ved buddha Admin Panel</h1>
            </div>
            
            <div className="col-6">
              {/* <!-- small box --> */}
              <div className="small-box bg-info">
                <div className="inner">
                  <h4>View Banner</h4>
                </div>
                <div className="icon">
                  <i className="ion ion-bag"></i>
                </div>
                <Link to={`/admin/home-banner`} className="small-box-footer">
                  More info <i className="fas fa-arrow-circle-right"></i>
                </Link>
              </div>
            </div>

            <div className="col-6">
              {/* <!-- small box --> */}
              <div className="small-box bg-info">
                <div className="inner">
                  <h4>View Pionners</h4>
                </div>
                <div className="icon">
                  <i className="ion ion-bag"></i>
                </div>
                <Link to={`/admin/home-pioneers`} className="small-box-footer">
                  More info <i className="fas fa-arrow-circle-right"></i>
                </Link>
              </div>
            </div>

            <div className="col-6">
              {/* <!-- small box --> */}
              <div className="small-box bg-info">
                <div className="inner">
                  <h4>View Categories</h4>
                </div>
                <div className="icon">
                  <i className="ion ion-bag"></i>
                </div>
                <Link to={`/admin/categories`} className="small-box-footer">
                  More info <i className="fas fa-arrow-circle-right"></i>
                </Link>
              </div>
            </div>

            <div className="col-6">
              {/* <!-- small box --> */}
              <div className="small-box bg-info">
                <div className="inner">
                  <h4>View Messages</h4>
                </div>
                <div className="icon">
                  <i className="ion ion-bag"></i>
                </div>
                <Link to={`/admin/messages`} className="small-box-footer">
                  More info <i className="fas fa-arrow-circle-right"></i>
                </Link>
              </div>
            </div>

            <div className="col-6">
              {/* <!-- small box --> */}
              <div className="small-box bg-info">
                <div className="inner">
                  <h4>View Produts</h4>
                </div>
                <div className="icon">
                  <i className="ion ion-bag"></i>
                </div>
                <Link to={`/admin/products`} className="small-box-footer">
                  More info <i className="fas fa-arrow-circle-right"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
