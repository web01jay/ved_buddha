import React from "react";

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
            <div className="col-lg-3 col-6">
              {/* <!-- small box --> */}
              <div className="small-box bg-info">
                <div className="inner">
                  <h3>150</h3>

                  <p>Total Produts</p>
                </div>
                <div className="icon">
                  <i className="ion ion-bag"></i>
                </div>
                <a href={(e)=>{e.preventDefault()}} className="small-box-footer">
                  More info <i className="fas fa-arrow-circle-right"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
