import React, { useEffect, useState } from 'react'
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { useParams } from 'react-router-dom';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from "yup";
import axios from 'axios';
import { API_URL } from '../../../DataHelpers/API_URL';
import { useHistory } from 'react-router-dom';

const EditProducts = () => {
    
    const SUPPORTED_FORMATS  = ['image/jpg', 'image/jpeg', 'image/gif', 'image/png']

    const { pId } = useParams();
    const history = useHistory();

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [currentProduct, setCurrentProduct] = useState([]);
    const [imageFile, setImageFile] = useState();

    const productSchema = Yup.object().shape({
        productName: Yup.string().required("Please enter product Title"),
        productDescription: Yup.string().required("Please enter product Description"),
        productCategory: Yup.string().required("Please enter product Category"),
        productSubCategory: Yup.string().required("Please enter product SubCategory"),
        // productImage: Yup.mixed().test('fileType', "Unsupported File Format", value => {SUPPORTED_FORMATS.includes(value.type)})
    });

    useEffect(()=>{
        setIsSubmitting(true)  
        // axios call
        // axios.defaults.headers.put['Content-Type'] = 'application/x-www-form-urlencoded';
        // axios.defaults.headers.post['Content-Type'] = 'multipart/form-data';

        axios({
            method: "get",
            url: `${API_URL}/product/${pId}`,
            // responseType: "stream"
        }).then(function (response) {
            setIsSubmitting(true)
            setCurrentProduct(response.data.data[0])
            // console.log(response.data.data[0], "products")
            setIsSubmitting(false)
        })
    },[])

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
                                <h1 className="mb-0">Edit Products</h1>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="content-body">
                    <div className="container-fluid">
                        {/* {console.log(currentProduct, "currentProduct")} */}
                        {
                            currentProduct && 
                            currentProduct?.name && 
                            currentProduct?.description && 
                            currentProduct?.category && 
                            currentProduct?.sub_category &&

                            <Formik
                                initialValues={{
                                    productName: currentProduct.name,
                                    productDescription: currentProduct.description,
                                    productCategory: currentProduct.category.name,
                                    productSubCategory: currentProduct.sub_category.name,
                                    productImage: null,
                                }}
                                validationSchema={productSchema}

                                onSubmit={ async (values) => {
                                    // console.log(values, "values submit called")
                                    setIsSubmitting(true);
                                    let formData = new FormData();
        
                                    formData.append('_method', "put");
                                    formData.append('name', values.productName);
                                    formData.append('description', values.productDescription);
                                    formData.append('category_id', currentProduct.category_id);
									formData.append('sub_category_id', currentProduct.sub_category_id);
									if (imageFile) {
										formData.append('image', imageFile);
									}
                                    
                                    await axios.post(`${API_URL}/product/${pId}`, formData).then(res => {
                                        // check if the request is successful
                                        // console.log('res', res);
                                        history.push(`/admin/products/${pId}`);
                                        })
                                        .catch(function (error){
                                            console.log('error', error);
                                        });
                                       
                                    setIsSubmitting(false)
                                }}

                                // onSubmit = { async (values) => {
                                //     setIsSubmitting(true)
                                //     let formData = new FormData();

                                //     formData.append('_method', "put");
                                //     formData.append('name', values.productName);
                                //     formData.append('description', values.productDescription);
                                //     formData.append('category_id', currentProduct.category_id);
                                //     formData.append('sub_category_id', currentProduct.sub_Category_id);
                                //     formData.append('image', imageFile);

                                //     await axios.post(`${API_URL}/product/${pId}`, formData).then(res => {
                                //         // check if the request is successful
                                //         // console.log('res', res);
                                //         history.push(`/admin/products/${pId}`);
                                //         alert("Product Updated Successfully")
                                //         console.log(res, "res")
                                //         })
                                //         .catch(function (error){
                                //             console.log('error', error);
                                //         });
                                       
                                //     setIsSubmitting(false)
                                // } }
                                
                            >
                                <Form encType='multipart/form-data'>
                                    <div className="card">
                                        <div className="card-header">
                                            <div className="row">
                                                <div className="col-md-4">
                                                    <p>Product Name</p>
                                                </div>
                                                <div className="col-md-8">
                                                    <div className="form-group mb-3">
                                                        {/* <input type="text" name="productName" id="productName" className="form-control" /> */}
                                                        <Field 
                                                            name="productName"
                                                            id="productName"
                                                            type="text"
                                                            className="form-control"
                                                            placeholder="Product Name"
                                                        />
                                                        <ErrorMessage name="productName" component="div" className="invalid-feedback" />
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="row">
                                                <div className="col-md-4">
                                                    <p>Product Description</p>
                                                </div>
                                                <div className="col-md-8">
                                                    <div className="form-group mb-3">
                                                        {/* <Editor
                                                            editorState={editorState}
                                                            // toolbarClassName="toolbarClassName"
                                                            toolbarHidden
                                                            wrapperClassName="bg-white border"
                                                            editorClassName="editorClass px-2"
                                                            onEditorStateChange={setEditorState}
                                                        /> */}
                                                        <Field 
                                                            name="productDescription"
                                                            id="productDescription"
                                                            as="textarea"
                                                            className="form-control editor"
                                                            placeholder="Product Description"
                                                        />
                                                        <ErrorMessage name="productDescription" component="div" className="invalid-feedback" />
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="row">
                                                <div className="col-md-4">
                                                    <p>Product Category</p>
                                                </div>
                                                <div className="col-md-8">
                                                    <div className="form-group mb-3">
                                                        <Field 
                                                            name="productCategory"
                                                            id="productCategory"
                                                            type="text"
                                                            className="form-control"
                                                            placeholder="Product Category"
                                                            
                                                        />
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
                                                        <Field 
                                                            name="productSubCategory"
                                                            id="productSubCategory"
                                                            type="text"
                                                            className="form-control"
                                                            placeholder="Product Sub Category"
                                                            
                                                        />
                                                        <ErrorMessage name="productSubCategory" component="div" className="invalid-feedback" />
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="row mb-3">
                                                <div className="col-md-4">
                                                    <p>Product Image</p>
                                                </div>
                                                <div className="col-md-8">
                                                    <Field 
                                                        type="file"
                                                        name="productImage"
                                                        id="productImage"
                                                        className="form-control"
                                                        onChange={(e) => { setImageFile(e.target.files[0]) }}
                                                    />
                                                    <ErrorMessage name='productImage' className="invalid-feedback" component='p' />
                                                    {/* <input type="file" name="productImage" id="productImage" className="form-control my-2" /> */}
                                                    {/* <img src="https://dummyimage.com/500x500/000/fff&text=Image" alt="product image" height="100px" width="100px" /> */}
                                                </div>
                                            </div>

                                            <div className="row">
                                                <div className="col-md-12">
                                                    <button className="btn btn-primary" type='submit' >Submit</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Form>
                            </Formik>
                        }
                    </div>
                </div>
            </>
        )}
    </section>
  )
}

export default EditProducts