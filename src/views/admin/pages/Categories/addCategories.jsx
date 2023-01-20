import React, { useState, useEffect } from 'react'
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from "yup";
import axios from 'axios';
import { API_URL } from '../../../DataHelpers/API_URL';
import { useHistory } from 'react-router-dom';


const AddCategories = () => {

    const history = useHistory();

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [imageFile, setImageFile] = useState();

    const categorySchema = Yup.object().shape({
        categoryName: Yup.string().required('Category Name is required'),
    })
  return (
    <section className='content-section'>
        <div className="content-header">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-12">
                        <h1 className="mb-0">Add Categories</h1>
                    </div>
                </div>
            </div>
        </div>
        {isSubmitting === true ? (
            <div className="py-5 text-center">Loading ...</div>
        ) : (
        <div className="content-body">
            <div className="container-fluid">
                <Formik className="card" initialValues={{categoryName:''}} validationSchema={categorySchema} onSubmit={ async (values) => {
                    setIsSubmitting(true)
                    try {
                        let formData = new FormData();

                        formData.append('categoryName', values.categoryName);

                        if (imageFile) {
                            formData.append('image', imageFile);
                        }

                        await axios.post(`${API_URL}/product-category`, formData)
                            .then(() => {
                                setIsSubmitting(false)
                                history.push('/admin/categories')
                            })
                            .catch(err => {
                                console.log(err)
                            })
                    } catch(err) {
                        console.log(err)
                    }
                    setIsSubmitting(false)
                }}>
                    <div className='card-header'>
                        <div className="row">
                            <div className="col-md-12">
                                <p className="card-title mb-0">
                                    Category:     
                                </p>
                            </div>
                        </div>    
                    </div>
                    <div className="card-body">
                        <div className="row">
                            <div className="col-md-4">
                                <p>
                                    Category Name    
                                </p>
                            </div>
                            <div className="col-md-8">
                                <div className="col-md-8">
                                    <div className="form-group mb-3">
                                        <input type="text" name="categoryName" id="categoryName" className="form-control" />
                                    </div>
                                </div>    
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-4">
                                <p>Category Image</p>
                            </div>
                            <div className="col-md-8">
                                <div className="col-md-8">
                                    <div className="form-group mb-3">
                                        <input type="file" name="categoryImage" id="categoryImage" className="form-control" />
                                    </div>
                                </div>    
                            </div>
                        </div>
                    </div>
                </Formik>
            </div>
        </div>
        )}
    </section>
  )
}

export default AddCategories