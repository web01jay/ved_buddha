import React, { useEffect, useState } from 'react'
import Select from 'react-select';

import { useParams } from 'react-router-dom';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from "yup";
import axios from 'axios';
import { API_URL } from '../../../../DataHelpers/API_URL';
import { useHistory } from 'react-router-dom';

const EditSubCategory = () => {

    const { sId } = useParams();
    const history = useHistory();

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [currentProduct, setCurrentProduct] = useState([]);
    const [imageFile, setImageFile] = useState();
    const [subCategory, setSubCategory] = useState();

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios(`${API_URL}/product-sub-category/${sId}`);
            setSubCategory(result.data.data);
            console.log(subCategory, 'sub-category');
        };
        fetchData();
    },[])

    const categoryOptions = [
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' },
      ];
  return (
    <section className="content-section">
        <div className="content-header">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-12">
                        <h1 className="mb-0">Edit Sub Categories</h1>
                    </div>
                </div>
            </div>
        </div>   
        <div className="content-body">
            <div className="container-fluid">
                <div className="card">
                    <div className="card-header">
                        <p className="card-title mb-0">
                            Edit Sub Category
                        </p>
                    </div>
                    <div className="card-body">
                        
                        <div className="row">
                            <div className="col-md-4">
                                <p>
                                    Sub Category Name
                                </p>
                            </div>
                            <div className="col-md-8">
                                <div className="form-group mb-3">
                                    <input type="text" name="subCategoryName" id="subCategoryName" className="form-control" />
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-md-4">
                                <p>
                                    Parent Category Name
                                </p>
                            </div>
                            <div className="col-md-8">
                                <div className="form-group mb-3">
                                    <Select />
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div> 
    </section>
  )
}

export default EditSubCategory