import React, { useEffect, useState } from 'react'
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from "yup";
import axios from 'axios';
import { API_URL, BASE_URL, IMAGE_URL } from '../../../DataHelpers/API_URL';
import { useParams, useHistory } from "react-router-dom";

const EditBanner = () => {
    const history = useHistory();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [currentBanner, setCurrentBanner] = useState(null);
    const [imageFile, setImageFile] = useState();
    const [currentBannerImageUrl, setCurrentBannerImageUrl] = useState('');
    const [currentBannerImageObject, setCurrentBannerImageObject] = useState(null);
    const [currentBannerImageBase64, setCurrentBannerImageBase64] = useState('')
    const SUPPORTED_FORMATS  = ['image/jpg', 'image/jpeg', 'image/gif', 'image/png']
    const bannerSchema = Yup.object().shape({
        bannerTitle: Yup.string().nullable(),
        bannerDescription: Yup.string().nullable(),
        bannerLink: Yup.string().nullable(),
        // bannerImage: Yup.mixed().test('fileType', "Unsupported File Format", value => {SUPPORTED_FORMATS.includes(value.type)})
    });

	const { bId } = useParams();

    
    useEffect(()=>{
        setIsSubmitting(true)  

        const getImageObject = async (imageName) => {
            const bannerImageUrl = `${IMAGE_URL}/banner/${imageName}`
            setCurrentBannerImageUrl(bannerImageUrl)
            try {
                const response = await axios({
                    method: 'get',
                    url: bannerImageUrl,
                    responseType: 'blob'
                })
                // const response = await fetch(`${bannerImageUrl}`)
                console.log("get image object response", response)
                const objectURL = URL.createObjectURL(response.data)
                const reader = new FileReader();
                setCurrentBannerImageObject(reader.readAsDataURL(objectURL))
            } catch (error) {
                console.log('error from image console', error)
            }
        }

        function convertImgToBase64(url, callback) {
            const img = new Image();
            img.crossOrigin = 'Anonymous';
            img.onload = function() {
              const canvas = document.createElement('canvas');
              const ctx = canvas.getContext('2d');
              let dataURL;
              canvas.width = this.naturalWidth;
              canvas.height = this.naturalHeight;
              ctx.drawImage(this, 0, 0);
              dataURL = canvas.toDataURL('image/jpeg');
              callback(dataURL);
            };
            img.src = url;
          }

          

        // axios call
        // axios.defaults.headers.put['Content-Type'] = 'application/x-www-form-urlencoded';
        // axios.defaults.headers.post['Content-Type'] = 'multipart/form-data';

        axios({
            method: "get",
            url: `${API_URL}/banner/${bId}`,
            // responseType: "stream"
        }).then(function (response) {
            setIsSubmitting(true)
            setCurrentBanner(response.data.data)
            console.log(response.data.data, "banners")
            getImageObject(response.data.data.image)
            convertImgToBase64(`${IMAGE_URL}/banner/${response.data.data.image}`, function(base64Img) {
                console.log("base64Img", base64Img);
                setCurrentBannerImageBase64(base64Img)
              })
            // console.log(response.data.data)
            // console.log(currentBanner)
            setIsSubmitting(false)
        })
    },[])

    const previewImageStyle = {height: '100px', width: '100px'}

    return (<>
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
					{currentBanner && 
                    <Formik
						initialValues={{
							bannerTitle: currentBanner.title,
							bannerLink: currentBanner.link,
							bannerDescription: currentBanner.description,
							bannerImage: null
						}}
                        validationSchema={bannerSchema}
                        onSubmit={ async (values) => {
                            setIsSubmitting(true);
                            let formData = new FormData();

                            formData.append('_method', "put");
                            formData.append('title', values.bannerTitle);
                            formData.append('description', values.bannerDescription);
                            formData.append('link', values.bannerLink);
                            if (imageFile !== undefined && imageFile !== null) {
                                formData.append('image', imageFile);
                            } else if (currentBannerImageBase64 !== undefined && currentBannerImageBase64 !== null ) {
                                formData.append('image', currentBannerImageBase64);
                            }
                            
                            await axios.post(`${API_URL}/banner/${bId}`, formData).then(res => {
                                // check if the request is successful
                                // console.log('res', res);
                                history.push('/admin/home-banner');
                                })
                                .catch(function (error){
                                console.log('error', error);
                                });
                               
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
                                                <img src={currentBannerImageBase64} style={previewImageStyle} alt='current object' />
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
                        {/* // */} 
                    </Formik>
					}
                </div>
            </div>
        </div>
        </section>
      ) }
    </>
  )
}

export default EditBanner