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
  return (
    <>
      {/* .filter((e) => e.title === condition) */}
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
                {/* <div className={product.pId == pageId ? "d-block" : "d-none"}>kkjnkjnkjk</div> */}
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
                        <b className="mb-3">{product.cName}</b>
                        <p className="mb-3">
                          {product.pDescription ? product.pDescription : " "}
                        </p>
                      </div>
                    </div>
                  </>
                ) : (
                  " "
                )}
              </div>
            ))}
            {/* <div className="col-md-6 col-lg-5">
              <div className="image-container">
                <img src={Slide01} alt="" className="mw-100" />
              </div>
            </div>
            <div className="col-md-6 col-lg-7">
              <div className="d-flex flex-column ps-0 ps-md-3">
                <h3 className="display-6">Product Details</h3>
                <b className="mb-3">Category 1</b>
                <p className="mb-3">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Consectetur autem illo doloremque ratione eos aspernatur
                  reprehenderit culpa error sequi veritatis, architecto hic
                  aperiam adipisci, distinctio saepe facere molestiae omnis.
                  Quo?
                </p>
                <p className="mb-3">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Consectetur autem illo doloremque ratione eos aspernatur
                  reprehenderit culpa error sequi veritatis, architecto hic
                  aperiam adipisci, distinctio saepe facere molestiae omnis.
                  Quo?
                </p>
                <p className="mb-3">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Consectetur autem illo doloremque ratione eos aspernatur
                  reprehenderit culpa error sequi veritatis, architecto hic
                  aperiam adipisci, distinctio saepe facere molestiae omnis.
                  Quo?
                </p>
              </div>
            </div> */}
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductDetails;
