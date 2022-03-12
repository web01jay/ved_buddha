import React from 'react'
import { Link } from 'react-router-dom'

import Slide01 from "../assets/images/slide01.jpg";
import Slide02 from "../assets/images/slide02.jpg";
import Slide03 from "../assets/images/slide03.jpg";

const ExploreProducts = () => {
  return (
    <>
        <div className="explore-section section-spacer">
            <p className="display-6 text-center mb-4">Explore Our Products</p>
            <div className="row">
              <div className="col-md-4">
                <Link
                  to="/products/category/a"
                  className="category-section d-block"
                >
                  <div className="image-container">
                    <img src={Slide02} alt="category" className="mw-100" />
                  </div>
                  <p className="category-title">Tablet</p>
                </Link>
              </div>
              <div className="col-md-4">
                <Link
                  to="/products/category/b"
                  className="category-section d-block"
                >
                  <div className="image-container">
                    <img src={Slide01} alt="category" className="mw-100" />
                  </div>
                  <p className="category-title">Capsule</p>
                </Link>
              </div>
              <div className="col-md-4">
                <Link
                  to="/products/category/d"
                  className="category-section d-block"
                >
                  <div className="image-container">
                    <img src={Slide03} alt="category" className="mw-100" />
                  </div>
                  <p className="category-title">Soap</p>
                </Link>
              </div>
            </div>
          </div>
    </>
  )
}

export default ExploreProducts