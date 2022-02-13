import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="cutom-footer position-relative py-3">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-3">
              <div className="d-flex flex-column">
                <img src="./images/logo.png" className="mx-100" alt="" />
                <p className="text-center">VISION to ERASE DISEASE</p>
              </div>
            </div>
            <div className="col-md-9">
              <p className="text-end text-white">
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
