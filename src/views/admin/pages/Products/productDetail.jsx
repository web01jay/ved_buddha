import axios from 'axios';
import { API_URL, IMAGE_URL } from '../../../DataHelpers/API_URL';
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";

// import Slide01 from "../../assets/images/slide01.jpg";
import Slide01 from "../../../visitor/assets/images/slide01.jpg";
import { newProductDetails } from "./productData";

const ProductDetail = () => {
  const { pId } = useParams();
  const [products, setProducts] = useState();
  const [isLoading, setIsLoading] = useState(false);

  const getData = async axios => {
    setIsLoading(true);
    await axios({
      method: "get",
      url: `${API_URL}/product/${pId}`,
      // responseType: "stream"
    }).then(function (response) {
      setProducts(response.data.data);
      setIsLoading(false);
    });
  }

  useEffect(()=> {
    setIsLoading(true)
    // axios api call to get all products
    // axios({
    //   method: "get",
    //   url: `${API_URL}/product`,
    // }).then(function (response) {
    //   await setProducts(response.data.data)
    //   console.log(response.data.data, "productData");
    // });
    // console.log(pId)
    getData(axios);
    setIsLoading(false)
  },[isLoading])

  return (
    <section className="content-section">
      {isLoading === true ? (
        <div className='py-5 text-center'>Loading ...</div>
      ) : (
        <>
          <div className="content-header">
            <div className="container-fluid">
              <div className="row">
                <div className="col-md-6">
                  <h1 className="mb-2">Product Detail</h1>
                </div>
                <div className="col-md-6">
                  <div className="w-100 text-md-right">
                    <Link to={`/admin/products/${pId}/edit`} className="btn btn-primary">Edit Product</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="content-body">
            <div className="container-fluid">
              <div className="card mx-3">
                <div className="card-body">
                
                <div className="row">
                      <div className="row">
                        <div className="col-md-4">
                          <p>Product Name</p>
                        </div>
                        <div className="col-md-8">
                          <p>{products && products.name}</p>
                        </div>
                      </div>

                      <div className="row">
                        <div className="col-md-4">
                          <p>Product Description</p>
                        </div>
                        <div className="col-md-8">
                          {products && products.description.split("\n").map((item, index) => { return( <p key={index}>{item}</p> )})}
                        </div>
                      </div>

                      <div className="row">
                        <div className="col-md-4">
                          <p>Product Image</p>
                        </div>
                        <div className="col-md-8">
                          {products &&
                            <img src={`
                            ${IMAGE_URL}/products/${products.image}`} alt="product image" height="100px" width="100px" />
                          }
                        </div>
                      </div>
                    </div>  

                </div>
              </div>
              
            </div>
          </div>
        </>
      )}
    </section>
  );
};

export default ProductDetail;
