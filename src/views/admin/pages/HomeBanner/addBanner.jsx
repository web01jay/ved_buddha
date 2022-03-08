import React, { useEffect, useState } from 'react'
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from "yup";
import axios from 'axios';
import { API_URL } from '../../../DataHelpers/API_URL';
import { useHistory } from 'react-router-dom';

const AddBanner = () => {
	const history = useHistory();
    const [isSubmitting, setIsSubmitting] = useState();
    const [imageFile, setImageFile] = useState();
    const SUPPORTED_FORMATS  = ['image/jpg', 'image/jpeg', 'image/gif', 'image/png']
    const bannerSchema = Yup.object().shape({
        bannerTitle: Yup.string().required("Please enter Banner Title"),
        bannerDescription: Yup.string().required("Please enter Banner Description"),
        bannerLink: Yup.string().required("Please enter Link"),
        // bannerImage: Yup.mixed().test('fileType', "Unsupported File Format", value => {SUPPORTED_FORMATS.includes(value.type)})
    });
    
    const fileSelected = (event)=> {setImageFile(event.target.files[0])}
    return (
    <>
    {isSubmitting === true ? (
        <div className="my-5">Loading</div>
      ) : (
        <section className='content-section'>
            <div className="content-header">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-12">
                        <h1 className="mb-0">Home Banner</h1>
                    </div>
                </div>
            </div>
        </div>
        <div className="content-body">
            <div className="container-fluid">
                <div className='card'>
                    <div className="card-header">
                        <div className="row">
                            <div className="col-md-12">
                                <p className='card-title mb-0'>Banner Number: </p>
                            </div>
                        </div>
                    </div>
                    <Formik
                        initialValues={{bannerTitle: '', bannerLink: '', bannerDescription: '', 
                        // bannerImage: null
                    }}
                        validationSchema={bannerSchema}
                        onSubmit={ async (values) => {
                            setIsSubmitting(true)
                            try {
                                console.log(values)
                                // const postBanner = await axios.put(`${API_URL}/banner`, {
                                //     title: values.bannerTitle,
                                //     description: values.bannerDescription,
                                //     bannerLink: values.bannerLink,
                                //     // bannerImage: imageFile,
                                // })
                                let formData = new FormData();

                                // formData.append('_method', "put");
                                formData.append('title', values.bannerTitle);
                                formData.append('description', values.bannerDescription);
                                formData.append('link', values.bannerLink);
                                formData.append('image', imageFile);
                                
                                const postBanner = await axios.post(`${API_URL}/banner`, formData).then(res => {
									    // check if the request is successful
									console.log('res', res);
									history.push('/admin/home-banner');
								})
								.catch(function (error){
								console.log('error', error);
								});
                                
								console.log(postBanner)
								
                                // console.log(postBanner)
                                // alert("data added")
                            } catch (err) {
                                console.log(err)
                            }
                            setIsSubmitting(false)
                        }}
                    >
                        {/* {({values, fileSelected}) => { */}
                            <Form encType='multipart/form-data'>
                                <div className="card-body">
                                    
                                    <div className="row">
                                        <div className="col-md-4">
                                            <label htmlFor="bannerTitle">Banner Title</label>
                                        </div>
                                        <div className="col-md-8">
                                            <div className="form-group mb-3">
                                                <Field className="form-control" name="bannerTitle" id="bannerTitle" />
                                                <ErrorMessage name='bannerTitle' className="text-danger" component='p' />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-md-4">
                                            <label htmlFor="bannerDescription">Banner Description</label>
                                        </div>
                                        <div className="col-md-8">
                                            <div className="form-group mb-3">
                                                <Field className="form-control" name="bannerDescription" id="bannerDescription" />
                                                <ErrorMessage name='bannerDescription' className="text-danger" component='p' />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-md-4">
                                            <label htmlFor="bannerLink">Banner Link</label>
                                        </div>
                                        <div className="col-md-8">
                                            <div className="form-group mb-3">
                                                <Field className="form-control" name="bannerLink" id="bannerLink" />
                                                <ErrorMessage name='bannerLink' className="text-danger" component='p' />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-md-4">
                                            <label htmlFor="bannerImage">Banner Image</label>
                                        </div>
                                        <div className="col-md-8">
                                            <div className="form-group mb-3">
											{/* <input type="file" name="bannerImage" id="bannerImage" className="form-control" onChange={(event)=>{fileSelected(event)}} /> */}
											<Field 
												type="file"
												name="bannerImage"
												id="bannerImage"
												className="form-control"
												onChange={(e) => { setImageFile(e.target.files[0]) }}
											/>
											<ErrorMessage name='bannerImage' className="text-danger" component='p' />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-md-12">
                                            <button className="btn btn-primary" type='submit' >Submit</button>
                                        </div>    
                                    </div>

                                </div>
                            </Form>
                        {/* }} */}
                    </Formik>

                </div>
            </div>
        </div>
        </section>
      ) }
    </>
  )
}

export default AddBanner