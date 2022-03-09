import React, { useEffect, useState } from 'react';
import { useHistory } from "react-router-dom";
import DataTable from 'react-data-table-component';
import { columns, listData, newProductDetails } from './productData';
import axios from 'axios';
import { API_URL } from '../../../DataHelpers/API_URL';

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
    });

    // set state
    // setProducts(newProductDetails);
    // setColumn(columns)
  }, []);
  
  return (
    <div className="content-section">
      {/* content title */}
      <div className="content-header">
        <div className="container-fluid">
          <h1 className="mb-2">
            Products
          </h1>
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
