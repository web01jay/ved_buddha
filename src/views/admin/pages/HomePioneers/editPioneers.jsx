import React, { useEffect, useState } from 'react'
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from "yup";
import axios from 'axios';
import { API_URL } from '../../../DataHelpers/API_URL';
import  { useParams } from 'react-router-dom';
import { useHistory } from 'react-router-dom';

const EditPioneers = () => {

    const { pId } = useParams();  

    const [isSubmitting, setIsSubmitting] = useState();
    const [currentPioneer, setCurrentPioneer] = useState()
    const [imageFile, setImageFile] = useState();
    const pioneerSchema = Yup.object().shape({
        pioneerName: Yup.string().required("Please enter Pioneer Name"),
        pioneerDescription: Yup.string().required("Please enter Pioneer Description"),
        // pioneerImage: Yup.mixed().test('fileType', "Unsupported File Format", value => {SUPPORTED_FORMATS.includes(value.type)})
    });

    
    useEffect(()=>{
        setIsSubmitting(true)  
        // axios call
        axios({
            method: "get",
            url: `${API_URL}/pioneer/${pId}`,
            responseType: "stream"
        }).then(function (response) {
            setIsSubmitting(true)
            setCurrentPioneer(response.data.data)
            console.log(currentPioneer, "banners")
            // console.log(response.data.data)
            // console.log(currentBanner)
            setIsSubmitting(false)
        })
    },[])

    
    const fileSelected = (event)=> {setImageFile(event.target.files[0])}

    const history = useHistory();

  return (
    <>
    {isSubmitting === true ? (
        <div className="my-5">Loading</div>
      ) : (
    <section className='content-section'>
        <div className="content-header">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-6">
                        <h1 className="mb-0">Edit Home Banner</h1>
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
                                <p className='card-title mb-0'>Pioneer Number: </p>
                            </div>
                        </div>
                    </div>
                    {currentPioneer &&
                        <Formik
                            initialValues={{pioneerName: currentPioneer.name, pioneerDescription: currentPioneer.description, pioneerImage: null}}
                            validationSchema={pioneerSchema}
                            onSubmit={ async (values) => {
                                setIsSubmitting(true);

                                let formData = new FormData();
                                formData.append('_method', "put");
                                formData.append('name', values.pioneerName);
                                formData.append('description', values.pioneerDescription);
                                formData.append('image', imageFile);
                            
                                await axios.post(`${API_URL}/pioneer/${pId}`, formData).then(res => {
                                    // check if the request is successful
                                    // console.log('res', res);
                                    history.push('/admin/home-pioneers');
                                    console.log(res)
                                })
                                .catch(function (error){
                                    console.log('error', error);
                                });
                               
                                setIsSubmitting(false)
                            }}
                        >
                        <Form encType='multipart/form-data'>
                        <div className="card-body">
                            <div className="row">
                                
                                <div className="col-md-4">
                                    <p>Pioneer Name</p>
                                </div>
                                <div className='col-md-8'>
                                    <div className="from-group mb-3">
                                        {/* <input type="text" name="pioneerName" id="pioneerName" className="form-control" /> */}
                                        <Field className='form-control' id='pioneerName' name='pioneerName' />
                                        <ErrorMessage name='pioneerName' />
                                    </div>
                                </div>

                                <div className="col-md-4">
                                    <p>Pioneer Description</p>
                                </div>
                                <div className='col-md-8'>
                                    <div className="form-group mb-3">
                                        {/* <input type="text" name="pioneerDescription" id="pioneerDescription" className="form-control" /> */}
                                        <Field as="textarea" className='form-control' id='pioneerDescription' name='pioneerDescription' />
                                        <ErrorMessage name='pioneerDescription' />
                                    </div>
                                </div>

                                <div className="col-md-4">
                                    <p>Pioneer Image</p>
                                </div>
                                <div className='col-md-8'>
                                    <div className="form-group mb-3">
                                        {/* <input type="file" name="pioneerImage" id="pioneerImage" className="form-control" onChange={(e)=>{fileSelected(e)}} /> */}
                                        <Field 
                                            type="file"
                                            name="pioneerImage"
                                            id="pioneerImage"
                                            className="form-control"
                                            onChange={(e) => { setImageFile(e.target.files[0]) }}
                                        />
                                        <ErrorMessage name='pioneerImage' className="text-danger" component='p' />
                                    </div>
                                </div>

                                <div className="col-md-12">
                                    <button className="btn btn-primary" type='submit' >Submit</button>
                                </div>

                            </div>
                        </div>
                        </Form>
                        </Formik>
                    }   
                </div>
            </div>
        </div>
    </section>
      )}
    </>
  )
}

export default EditPioneers