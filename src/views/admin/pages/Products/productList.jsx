import React, { useEffect, useState } from 'react';
import { useHistory } from "react-router-dom";
import DataTable from 'react-data-table-component';
import { columns, listData, newProductDetails } from './productData';
import axios from 'axios';
import { API_URL } from '../../../DataHelpers/API_URL';
import { Link } from 'react-router-dom';

const ProductList = () => {

  // define state
  const [products, setProducts] = useState();
  const [column, setColumn] = useState();

  // define history
  const history = useHistory();

  useEffect(() => {
    // axios api call to get all products
    axios({
      method: "get",
      url: `${API_URL}/product`,
    }).then(function (response) {
      setProducts(response.data.data)
      setColumn(columns)
      console.log(response.data.data, "productData");
    });
  }, []);
  
  return (
    <div className="content-section">
      {/* content title */}
      <div className="content-header">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-6">
              <h1 className="mb-2">
                Products
              </h1>
            </div>
            <div className="col-md-6">
              <div className="text-right">
                <Link to="/admin/products/product/add" className="btn btn-primary">Add Product</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="content-body">
        <div className="container-fluid">
        <DataTable
            columns={column}
            data={products}
            pagination
        />
        </div>
      </div>
    </div>
  )
};

export default ProductList;
