import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";

// import Slide01 from "../../assets/images/slide01.jpg";
import Slide01 from "../../../visitor/assets/images/slide01.jpg";
import { newProductDetails } from "./productData";

const ProductDetail = () => {
  const { pId } = useParams();
  const [product, setProduct] = useState();
  useEffect(()=> {
    // => [...product, newProductDetails]
    setProduct(newProductDetails[pId])
    
    console.log(newProductDetails, "newProductDetails")
    console.log(pId)
    console.log(product)
  },[])

  return (
    <section className="content-section">
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
                <div className="col-md-4">
                  <p>Product Name</p>
                </div>
                <div className="col-md-8">
                  <p>Product Naame</p>
                </div>
              </div>

              <div className="row">
                <div className="col-md-4">
                  <p>Product Category</p>
                </div>
                <div className="col-md-8">
                  <p>Product Category</p>
                </div>
              </div>

              <div className="row">
                <div className="col-md-4">
                  <p>Product Sub Category</p>
                </div>
                <div className="col-md-8">
                  <p>Product Sub Category</p>
                </div>
              </div>

              <div className="row">
                <div className="col-md-4">
                  <p>Product Description</p>
                </div>
                <div className="col-md-8">
                  <p>Product Description</p>
                </div>
              </div>

              <div className="row">
                <div className="col-md-4">
                  <p>Product Image</p>
                </div>
                <div className="col-md-8">
                  <img src="https://dummyimage.com/500x500/000/fff&text=Image" alt="product image" height="100px" width="100px" />
                </div>
              </div>


            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default ProductDetail;
