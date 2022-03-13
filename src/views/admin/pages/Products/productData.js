import React from "react";
import { Link } from "react-router-dom";
import axios from 'axios'
import { API_URL } from '../../../DataHelpers/API_URL';
import { pDataArray } from "../../../visitor/pages/Products/productData";

const deleteProducts = async (productID) => {
  await axios.delete(`${API_URL}/product/${productID}`)
    .then(res => {console.log(res)})
    .catch(err => {console.log(err)})
}

export const columns = [
  {
    name: "Sr. No.",
    selector: (row) => row.id,
    sortable: true,
  },
  {
    name: "Product Name",
    selector: (row) => row.name,
    sortable: true,
  },
  {
    name: "Category",
    selector: (row) => row.category.name,
    sortable: true,
  },
  {
    name: "Actions",
    center: true,
    cell: (row, index) => {
      return (
        <>
          <Link to={`/admin/products/${row.id}`} className="mr-2"> View </Link>
          <Link to={`/admin/products/${row.id}/edit`} className="mr-2"> Edit </Link>
          <button className="btn delete" onClick={()=>{
            if (window.confirm(`Are you sure you want to delete Product ${row.id} ?`)) {
              deleteProducts(row.id)
            }
          }}>
            Delete
          </button>
        </>
      );
    },
  },
];

export const newProductDetails = pDataArray

