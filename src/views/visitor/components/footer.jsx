import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png";

import { pDataArray } from "../pages/Products/productData";

const Footer = () => {
  const [pData, setPData] = useState([]);

  useEffect(() => {
    setPData(pDataArray);
  }, []);

  return (
    <>
      <footer className="cutom-footer position-relative py-3">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6 col-lg-3">
              <div className="d-flex flex-column">
                <img src={logo} className="mw-100 mx-5 px-2" alt="logo" />
                <p className="text-center">VISION TO ERASE DISEASE</p>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 offset-lg-6 text-center text-md-start">
              <p className="mb-0 font-weight-semi-bold">
                Contact details
              </p>
              <div className="py-1">
                <p className="d-flex justify-content-center justify-content-md-start">
                  <span className="fa fa-map me-2 pt-2"></span>
                  <span>
                    1, Back Side of Yatri Shed Domuhan, <br /> Nr. Jatak Bodhgaya Dobhi Road, <br /> Bodh-Gaya, Gaya, Bihar, PIN - 824234 
                  </span>
                </p>
                <p className="d-flex justify-content-center justify-content-md-start">
                  <span className="fa fa-receipt me-2 pt-2"></span>
                  <a href="mailto:4ved4all@gmail.com" className="text-white">
                    4ved4all@gmail.com
                  </a>
                </p>
              </div>
            </div>
            <div className="col-md-12">
              <p className="text-center pt-3 border-top text-white">
                Copyright © 2022 Ved Buddha India Pvt. Ltd. | All Rights
                Reserved
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
