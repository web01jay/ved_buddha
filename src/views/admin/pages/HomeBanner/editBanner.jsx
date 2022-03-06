import React, { useEffect, useState } from 'react'
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from "yup";
import axios from 'axios';
import { API_URL } from '../../../DataHelpers/API_URL';

const EditBanner = () => {
    const [isSubmitting, setIsSubmitting] = useState();
    const [currentBanner, setCurrentBanner] = useState()
    const [imageFile, setImageFile] = useState();
    const SUPPORTED_FORMATS  = ['image/jpg', 'image/jpeg', 'image/gif', 'image/png']
    const bannerSchema = Yup.object().shape({
        bannerTitle: Yup.string().required("Please enter Banner Title"),
        bannerDescription: Yup.string().required("Please enter Banner Description"),
        bannerLink: Yup.string().required("Please enter Link"),
        // bannerImage: Yup.mixed().test('fileType', "Unsupported File Format", value => {SUPPORTED_FORMATS.includes(value.type)})
    });

    
    useEffect(()=>{
        setIsSubmitting(true)  
        // axios call
        axios({
            method: "get",
            url: `${API_URL}/banner`,
            responseType: "stream"
        }).then(function (response) {
            setIsSubmitting(true)
            setCurrentBanner(response.data.data)
            console.log(currentBanner, "banners")
            // console.log(response.data.data)
            // console.log(currentBanner)
            setIsSubmitting(false)
        })
    },[])

    
    const fileSelected = (event)=> {setImageFile(event.target.files[0])}
    return (
    <>
    {isSubmitting === true ? (
        <div className="my-5">Submiting</div>
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
                        initialValues={{bannerTitle: '', bannerLink: '', bannerDescription: '', bannerImage: null}}
                        validationSchema={bannerSchema}
                        onSubmit={ async (values) => {
                            setIsSubmitting(true)
                            try {
                                console.log(values)
                                const postBanner = await axios.post(`${API_URL}/banner`, {
                                    title: values.bannerTitle,
                                    description: values.bannerDescription,
                                    bannerLink: values.bannerLink,
                                    // bannerImage: imageFile,
                                })
                                console.log(postBanner)
                                alert("data added")
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
                                                <ErrorMessage name='bannerTitle' />
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
                                                <ErrorMessage name='bannerDescription' />
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
                                                <ErrorMessage name='bannerLink' />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-md-4">
                                            <label htmlFor="bannerImage">Banner Image</label>
                                        </div>
                                        <div className="col-md-8">
                                            <div className="form-group mb-3">
                                                <input type="file" name="bannerImage" id="bannerImage" className="form-control" onChange={(event)=>{fileSelected(event)}} />
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
                        {/* // */} 
                    </Formik>

                </div>
            </div>
        </div>
        </section>
      ) }
    </>
  )
}

export default EditBanner