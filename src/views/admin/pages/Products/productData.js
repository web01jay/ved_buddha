import React from "react";
import { Link } from "react-router-dom";
import { pDataArray } from "../../../visitor/pages/Products/productData";

export const columns = [
  {
    name: "Sr. No.",
    selector: (row) => row.pId,
    sortable: true,
  },
  {
    name: "Product Name",
    selector: (row) => row.pName,
    sortable: true,
  },
  {
    name: "Category",
    selector: (row) => row.cName,
    sortable: true,
  },
  {
    name: "Actions",
    center: true,
    cell: (row) => {
      return (
        <>
          <Link to={`/admin/products/${row.pId}`} className="mr-2"> View </Link>
          <Link to={`/admin/products/${row.pId}/edit`} className="mr-2"> Edit </Link>
          <a
            href={(e) => {
              e.preventDefault();
            }}
            className="delete"
          >
            Delete
          </a>
        </>
      );
    },
  },
];

export const newProductDetails = pDataArray

