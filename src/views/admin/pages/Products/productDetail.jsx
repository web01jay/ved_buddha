import React, { useState } from "react";

// import Slide01 from "../../assets/images/slide01.jpg";
import Slide01 from "../../../visitor/assets/images/slide01.jpg";

const ProductDetail = () => {
  const [product, setProduct] = useState();

  return (
    <section className="content-section">
      <div className="content-header">
        <div className="container-fluid">
          <h1 className="mb-2">Product Detail</h1>
        </div>
      </div>
      <div className="content-body">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-4">
              <label htmlFor="pName">Product Name</label>
            </div>
            <div className="col-md-8">
              <div className="form-group mb-3 mb-md-4">
                <input
                  type="text"
                  name="pName"
                  id="pName"
                  className="form-control"
                />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4">
              <label htmlFor="pCategory">Product Category</label>
            </div>
            <div className="col-md-8">
              <div className="form-group mb-3 mb-md-4">
                <input
                  type="text"
                  name="pCategory"
                  id="pCategory"
                  className="form-control"
                />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4">
              <label htmlFor="pDescription">Product Description</label>
            </div>
            <div className="col-md-8">
              <div className="form-group mb-3 mb-md-4">
                <textarea
                  name="pDescription"
                  id="pDescription"
                  className="form-control"
                ></textarea>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4">
              <label htmlFor="">Product Image</label>
            </div>
            <div className="col-md-8">
              <div className="mw-25">
                <img src={Slide01} className="mw-100" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetail;
