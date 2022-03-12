import React, { useState, useEffect } from "react";
import { pDataArray } from "./productData";
import Slide01 from "../../assets/images/slide01.jpg";
import { Link, useHistory, useParams } from "react-router-dom";
import axios from "axios";
import { API_URL, IMAGE_URL } from "../../../DataHelpers/API_URL";

const CategoryProducts = () => {
  const { catId } = useParams();
  const history = useHistory();

  const [pData, setPData] = useState([]);
  const [isLoading, setIsLoading] = useState()

  useEffect(() => {
    setIsLoading(true)
    axios({
      method: "get",
      url: `${API_URL}/product`,
    }).then(function (response) {
      setPData(response.data.data)
      console.log(response.data.data, "productData");
    });
    setIsLoading(false)
  }, []);

  console.log(pData, "productData");

  return (
    <>
      <section className="breadcumbs-section position-relative">
        <div className="container">
          <div className="section-spacer">
            <p className="text-white display-6 font-weight-700">Products</p>
            <p className="text-white">
              {" "}
              <Link to="/" className="text-white">
                {" "}
                Home{" "}
              </Link>{" "}
              - Products
            </p>
          </div>
        </div>
      </section>
      <section className="page-section section-spacer">
        <div className="container">
          {isLoading ? (
            <p className="py-5 text-center">Loading ...</p>
          ) : (
          <div className="row">
            {pData.map((product, index) => (
              <>
                {product.sub_category_id == catId ? (
                  <>
                    <div key={index} className="col-12 col-sm-6 col-lg-4">
                      <Link
                        to={`/products/details/${product.id}`}
                        className="product-card"
                      >
                        <div className="image-container">
                          <img src={`${IMAGE_URL}/products/${product.image}`} alt="product image" />
                        </div>
                        <p className="image-title">{product.name} </p>
                      </Link>
                    </div>
                  </>
                ) : (
                  "  "
                )}
              </>
            ))}
          </div>
          )}
        </div>
      </section>
    </>
  );
};

export default CategoryProducts;
