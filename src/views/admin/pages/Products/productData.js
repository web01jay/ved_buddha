import React from "react";
import { Link } from "react-router-dom";

export const columns = [
  {
    name: "Sr. No.",
    selector: (row) => row.id,
    sortable: true,
  },
  {
    name: "Product Name",
    selector: (row) => row.title,
    sortable: true,
  },
  {
    name: "Category",
    selector: (row) => row.category,
    sortable: true,
  },
  {
    name: "Actions",
    center: true,
    cell: (row) => {
      return (
        <>
          <Link to={`/products/${row.id}`} className="mr-2"> View </Link>
          <a
            href={(e) => {
              e.preventDefault();
            }}
            className="edit mr-2"
          >
            Edit
          </a>
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

export const listData = [
  {
    id: 1,
    title: "VEDNAC-PS",
    category: "Analgesic",
  },
  {
    id: 2,
    title: "VEDNAC-P",
    category: "Analgesic",
  },
  {
    id: 3,
    title: "VEDAMOL - 650",
    category: "Analgesic",
  },
  {
    id: 4,
    title: "VEDICAMOL",
    category: "Analgesic",
  },
];

export const productDetails = [
  {
    id: 1,
    title: "VEDNAC-PS",
    category: "Analgesic",
    discription: "Acelofenac + Paracetamol + Serratiopeptidose",
    imgURL: "https://source.unsplash.com/random",
  },
  {
    id: 2,
    title: "VEDNAC-P",
    category: "Analgesic",
    discription: "Acelofenac + Paracetamol",
    imgURL: "https://source.unsplash.com/random",
  },
  {
    id: 3,
    title: "VEDAMOL - 650",
    category: "Analgesic",
    discription: "Paracetamol – 650",
    imgURL: "https://source.unsplash.com/random",
  },
  {
    id: 4,
    title: "VEDICAMOL",
    category: "Analgesic",
    discription: "Diclofenac Sodium + Paracetamol",
    imgURL: "https://source.unsplash.com/random",
  },
];
