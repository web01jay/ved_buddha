import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { pDataArray } from "./productData";
import Slide01 from "../../assets/images/slide01.jpg";
import { useHistory, useParams } from "react-router-dom";

const ProductDetails = () => {
  const { pageId } = useParams();
  const history = useHistory();
  console.log(pageId);

  const [pData, setPData] = useState([]);

  useEffect(() => {
    setPData(pDataArray);
  }, []);

  let splitDescription = (str) => {
    let arr = str.split("\n")
    return arr
  }

  return (
    <>
      <section className="breadcumbs-section position-relative">
        <div className="container">
          <div className="section-spacer">
            <p className="text-white display-6 font-weight-700">Product Details</p>
            <p className="text-white">
              {" "}
              <Link to="/" className="text-white">
                {" "}
                Home{" "}
              </Link>{" "}
              -{" "}
              <Link to="/products" className="text-white">
                {" "}
                Products{" "}
              </Link>{" "}
              - Product Detail
            </p>
          </div>
        </div>
      </section>
      <section className="page-section section-spacer">
        <div className="container">
          <div>
            {pData.map((product, pId) => (
              <div className="row" key={pId}>
                {product.pId == pageId ? (
                  <>
                    <div className="col-md-6 col-lg-5">
                      <div className="image-container">
                        <img src={Slide01} alt="" className="mw-100" />
                      </div>
                    </div>
                    <div className="col-md-6 col-lg-7">
                      <div className="d-flex flex-column ps-0 ps-md-3">
                        <h3 className="display-6">{product.pName}</h3>
                        <b className="mb-3">{product.cName} : {product.subCName ? product.subCName : ''} </b>
                        <div className="mb-3">
                          {splitDescription(product.pDescription).map((desc) => (
                            <p className="mb-0">{desc}</p>
                          ))}
                        </div>
                      </div>
                    </div>
                  </>
                ) : (
                  " "
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductDetails;
