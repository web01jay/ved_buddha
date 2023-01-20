import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";
import { API_URL, IMAGE_URL } from "../../../DataHelpers/API_URL";

import DefaultImage from "../../assets/images/slide01.jpg"

const ProductDetails = () => {
  const { pageId } = useParams();
  
  console.log(pageId);

  const [pData, setPData] = useState([]);
  const [isLoading, setIsLoading] = useState()

  useEffect(() => {

    setIsLoading(true)

    // get product data
    axios({
      method: "get",
      url: `${API_URL}/product/${pageId}`,
    }).then(function (response) {
      setPData(response.data.data[0])
      console.log(response.data.data, "productData");
    });

    setIsLoading(false)

  }, []);

  return (
    <>
      {isLoading ? (
        <p className="py-5 text-center">Loading ...</p>
      ) : (
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
                  <span className="text-white">
                    {" "}
                    Products{" "}
                  </span>{" "}
                  - Product Detail
                </p>
              </div>
            </div>
          </section>
          <section className="page-section section-spacer">
            <div className="container">
              <div>
                {pData && (
                  <div className="row">
                    <div className="col-md-6 col-lg-5">
                      <div className="image-container">
                        {pData.image == null || pData.image == undefined 
                          ? <img src={DefaultImage} alt={pData.name} className="mw-100" />
                          : <img src={`${IMAGE_URL}/products/${pData.image}`} alt={pData.name} className="mw-100" />
                        }
                      </div>
                    </div>
                    <div className="col-md-6 col-lg-7">
                      <div className="d-flex flex-column ps-0 ps-md-3">
                        <h3 className="display-6">{pData.name}</h3>
                        <b className="mb-3">{pData.category && pData.category.name} : {pData.sub_category && pData.sub_category.name}</b>
                        {/* <b className="mb-3">{pData.category.name} : {pData.sub_category.name} </b> */}
                        <div className="mb-3">
                          {pData.description && pData.description.split("\n").map((item, index) => { return( <p key={index}>{item}</p> )})}
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </section>
        </>
      )}
    </>
  );
};

export default ProductDetails;
