import React, { useState, useEffect } from "react";
import { pDataArray } from "./productData";

import Slide01 from "../../assets/images/slide01.jpg";
import Slide02 from "../../assets/images/slide02.jpg";
import Slide03 from "../../assets/images/slide03.jpg";
import { Link } from "react-router-dom";

const Products = () => {
  const [pData, setPData] = useState([]);

  useEffect(() => {
    setPData(pDataArray);
  }, [])
  
  console.log(pData, "productData")

  return (
    <>
      <section className="breadcumbs-section position-relative">
        <div className="container">
          <div className="section-spacer">
            <p className="text-white display-6 font-weight-700">Products</p>
            <p className="text-white"> <Link to="/" className="text-white"> Home </Link> - Products</p>
          </div>
        </div>
      </section>
      <section className="page-section section-spacer">
        <div className="container">
          <div className="row">
            {pData.map((product, pId) => (
              <div key={pId} className="col-12 col-sm-6 col-lg-4">
                <Link to={`/products/details/${product.pId}`} className="product-card">
                  <div className="image-container">
                    <img src={Slide01} alt="product image" />
                  </div>
                  <p className="image-title">{product.pName} </p>
                </Link>
              </div>
            ))}
            {/* {pDataArray.slice(0, 5).map((product, pId) => (
              <div key={pId} className="col-12 col-sm-6 col-lg-4">
                <Link to="./products/details" className="product-card">
                  <div className="image-container">
                    <img src={Slide01} alt="product image" />
                  </div>
                  <p className="image-title">Product Number {product.pId} </p>
                </Link>
              </div>
            ))} */}

            {/* <div className="col-12 col-sm-6 col-lg-4">
              <a href="./product-details.html" className="product-card">
                <div className="image-container">
                  <img src={Slide01} alt="product image" />
                </div>
                <p className="image-title">Product Number 1</p>
              </a>
            </div>
            <div className="col-12 col-sm-6 col-lg-4">
              <a href="./product-details.html" className="product-card">
                <div className="image-container">
                  <img src={Slide02} alt="product image" />
                </div>
                <p className="image-title">Product Number 2</p>
              </a>
            </div>
            <div className="col-12 col-sm-6 col-lg-4">
              <a href="./product-details.html" className="product-card">
                <div className="image-container">
                  <img src={Slide03} alt="product image" />
                </div>
                <p className="image-title">Product Number 3</p>
              </a>
            </div>

            <div className="col-12 col-sm-6 col-lg-4">
              <a href="./product-details.html" className="product-card">
                <div className="image-container">
                  <img src={Slide01} alt="product image" />
                </div>
                <p className="image-title">Product Number 4</p>
              </a>
            </div>
            <div className="col-12 col-sm-6 col-lg-4">
              <a href="./product-details.html" className="product-card">
                <div className="image-container">
                  <img src={Slide02} alt="product image" />
                </div>
                <p className="image-title">Product Number 5</p>
              </a>
            </div>
            <div className="col-12 col-sm-6 col-lg-4">
              <a href="./product-details.html" className="product-card">
                <div className="image-container">
                  <img src={Slide03} alt="product image" />
                </div>
                <p className="image-title">Product Number 6</p>
              </a>
            </div>

            <div className="col-12 col-sm-6 col-lg-4">
              <a href="./product-details.html" className="product-card">
                <div className="image-container">
                  <img src={Slide01} alt="product image" />
                </div>
                <p className="image-title">Product Number 7</p>
              </a>
            </div>
            <div className="col-12 col-sm-6 col-lg-4">
              <a href="./product-details.html" className="product-card">
                <div className="image-container">
                  <img src={Slide02} alt="product image" />
                </div>
                <p className="image-title">Product Number 8</p>
              </a>
            </div>
            <div className="col-12 col-sm-6 col-lg-4">
              <a href="./product-details.html" className="product-card">
                <div className="image-container">
                  <img src={Slide03} alt="product image" />
                </div>
                <p className="image-title">Product Number 9</p>
              </a>
            </div> */}
          </div>
        </div>
      </section>
    </>
  );
};

export default Products;
