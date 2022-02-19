import React, { useState, useEffect } from "react";
import { pDataArray } from "./productData";
import Slide01 from "../../assets/images/slide01.jpg";
import { Link, useHistory, useParams } from "react-router-dom";

const CategoryProducts = () => {
  const { catId } = useParams();
  const history = useHistory();

  const [pData, setPData] = useState([]);

  useEffect(() => {
    setPData(pDataArray);
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
          <div className="row">
            {pData.map((product, pId) => (
              <>
                {product.subCId == catId ? (
                  <>
                    <div key={pId} className="col-12 col-sm-6 col-lg-4">
                      <Link
                        to={`/products/details/${product.pId}`}
                        className="product-card"
                      >
                        <div className="image-container">
                          <img src={Slide01} alt="product image" />
                        </div>
                        <p className="image-title">{product.pName} </p>
                      </Link>
                    </div>
                  </>
                ) : (
                  "  "
                )}
              </>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default CategoryProducts;
