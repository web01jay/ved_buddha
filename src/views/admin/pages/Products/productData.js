import React from "react";
import { Link } from "react-router-dom";
import { pDataArray } from "../../../visitor/pages/Products/productData";

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

