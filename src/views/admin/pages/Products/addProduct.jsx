import React, { useEffect, useState } from 'react'
import * as Yup from "yup";
import axios from 'axios';
import { API_URL } from '../../../DataHelpers/API_URL';
import { useHistory } from 'react-router-dom';
import { Formik, Field, Form, ErrorMessage } from 'formik';

const AddProduct = () => {

    const history = useHistory()
    
    const [isSubmitting, setIsSubmitting] = useState();
    const [imageFile, setImageFile] = useState();
    const [category, setCategory] = useState(null);
    const [subCategory, setSubCategory] = useState(null);

    const productSchema = Yup.object().shape({
        productTitle: Yup.string().required("Please enter product Title"),
        productDescription: Yup.string().required("Please enter product Description"),
        productCategory: Yup.string().required("Please enter product Category"),
        productSubCategory: Yup.string().required("Please enter product SubCategory"),
        // productImage: Yup.mixed().test('fileType', "Unsupported File Format", value => {SUPPORTED_FORMATS.includes(value.type)})
    });
    
    useEffect(() => {
        
        const getCategory = async () => {
            await axios.get(`${API_URL}/product-category`)
                .then(res => {
                    setCategory(res.data.data)
                    console.log(res.data.data, 'category')
                })
        }
        getCategory()

        const getSubCategory = async () => {
            await axios.get(`${API_URL}/product-sub-category`)
                .then(res => {
                    setSubCategory(res.data.data)
                    console.log(res.data.data, 'subCategory')
                })
        }
        getSubCategory()

    } , [])
  return (
    <section className='content-section'>
        {isSubmitting === true ? (
            <div className="py-5 text-center">Loading ...</div>
        ) : (
            <>
            <div className="content-header">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-12">
                            <h1 className="mb-0">Add Products</h1>
                        </div>
                    </div>
                </div>
            </div>
            <div className="content-body">
                <div className="container-fluid">
                    <Formik
                        initialValues={{
                            productName: '',
                            productDescription: '',
                            productCategory: '',
                            productSubCategory: '',
                            // productImage: null
                        }}
                        validationSchema={productSchema}
                        onSubmit={ async (values) => {
                            setIsSubmitting(true)
                            try {
                                console.log(values)
                                let formData = new FormData();

                                formData.append('name', values.productName);
                                formData.append('description', values.productDescription);
                                formData.append('category', values.productCategory);
                                formData.append('subCategory', values.productSubCategory);
                                formData.append('image', imageFile);

                                await axios.post(`${API_URL}/product`, formData)
                                    .then((res)=>{
                                        console.log(res, 'res')
                                        history.push('/admin/products')                                        
                                    })
                                    .catch((err)=>{console.log(err)})
                            } catch (err) {
                                console.log(err)
                            }
                            setIsSubmitting(false)
                        }}
                    >
                        <Form encType='multipart/form-data'>

                            <div className="card">
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col-md-4">
                                            <p>Product Name</p>
                                        </div>
                                        <div className="col-md-8">
                                            <div className="form-group mb-3">
                                                {/* <input type="text" name="productName" id="productName" className="form-control" /> */}
                                                <Field name="productName" id="productName" className="form-control" />
                                                <ErrorMessage name="productName" component="div" className="invalid-feedback" />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-md-4">
                                            <p>Product Category</p>
                                        </div>
                                        <div className="col-md-8">
                                            <div className="form-group mb-3">
                                                {/* <Select value={category} onChange={setCategory} options={categoryOptions} /> */}
                                                <Field as="select" placeholder="Category" name="productCategory" id="productCategory" className="form-control" >
                                                    <option value="">Select Category</option>
                                                    {category && category.map((category, index) => {
                                                        return (
                                                            <option key={index} value={category.id}>{category.name}</option>
                                                        )
                                                    })}
                                                </Field>
                                                <ErrorMessage name="productCategory" component="div" className="invalid-feedback" />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-md-4">
                                            <p>Product Sub Category</p>
                                        </div>
                                        <div className="col-md-8">
                                            <div className="form-group mb-3">
                                                {/* <Select value={category} onChange={setCategory} options={categoryOptions} /> */}
                                                <Field as="select" name="productSubCategory" id="productSubCategory" className="form-control" >
                                                    <option value="">Select Sub Category</option>
                                                    {subCategory && subCategory.map((subCategory, index) => {
                                                        return (
                                                            <option key={index} value={subCategory.id}>{subCategory.name}</option>
                                                        )
                                                    })}
                                                </Field>
                                                <ErrorMessage name="productSubCategory" component="div" className="invalid-feedback" />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-md-4">
                                            <p>Product Description</p>
                                        </div>
                                        <div className="col-md-8">
                                            <div className="form-group mb-3">
                                                <Field as="textarea" name="productDescription" id="productDescription" className="form-control" />
                                                <ErrorMessage name="productDescription" component="div" className="invalid-feedback" />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="row mb-3">
                                        <div className="col-md-4">
                                            <p>Product Image</p>
                                        </div>
                                        <div className="col-md-8">
                                            {/* <input type="file" name="productImage" id="productImage" className="form-control my-2" /> */}
                                            <Field 
												type="file"
												name="productImage"
												id="productImage"
												className="form-control"
												onChange={(e) => { setImageFile(e.target.files[0]) }}
											/>
											<ErrorMessage name='productImage' className="invalid-feedback" component='div' />
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-md-12">
                                            <button className="btn btn-primary" type='submit'>Submit</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Form>
                    </Formik>
                </div>
            </div>
        </>)}
    </section>
  )
}

export default AddProduct