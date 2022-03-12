import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { API_URL, IMAGE_URL } from '../../../DataHelpers/API_URL';

const HomeBanner = () => {
    const [banners, setBanners] = useState();
    const [isLoading, setIsLoading] = useState(true)

	useEffect(() => {
		// setIsLoading(true)
		// axios call
		axios({
			method: "get",
			url: `${API_URL}/banner`,
			// responseType: "stream"
		}).then(function (response) {
			setBanners(response.data.data)
			console.log(banners, "banners")
			setIsLoading(false)
		})
	}, [isLoading]);

	const deleteBanner = async (bannerID) => {
		setIsLoading(true)
		await axios.delete(`${API_URL}/banner/${bannerID}`)
			.then(res => alert(res.data.message))
			.catch(err => console.log({ err }))
			.finally(() => setIsLoading(false));
    }
  return (
    <section className='content-section'>
        <>
          {isLoading === true ? (
            <p className="text-center my-5">Loading</p>
          ) : (
              <>
                <div className="content-header">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-md-6">
                                <h1 className="mb-0">Home Banner</h1>
                            </div>
                            <div className="col-md-6">
                                <div className="d-flex align-items-center justify-content-end w-100 text-right">
                                    <Link to="/admin/home-banner/add" className="btn btn-primary">
                                        Add Banner
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="content-body">
                    <div className="container-fluid">

                        {banners && banners.map( (banner, index) => { 
                            return(
                            <div className='card' key={index}>
                                <div className="card-header">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <p className='card-title mb-0'>Banner Number: {banner.id}</p>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="text-right">
                                                <Link to={`/admin/home-banner/${banner.id}/edit`} className="btn btn-primary ml-2  ">
                                                    Edit Banner
                                                </Link>
													<button className="btn btn-primary ml-2" onClick={() => {
														if (window.confirm("Are you sure you want to delete this banner?")) {
															deleteBanner(`${banner.id}`);
														}
													}}>
                                                    Delete Banner
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-body">
                                    <div className="row">
                                        
                                        <div className="col-md-4">
                                            <p>Banner Title</p>
                                        </div>
                                        <div className='col-md-8'>
                                            <p>{banner.title}</p>
                                        </div>

                                        <div className="col-md-4">
                                            <p>Banner Description </p>
                                        </div>
                                        <div className='col-md-8'>
                                            <p>{banner.description} </p>
                                        </div>

                                        <div className="col-md-4">
                                            <p>Banner Link</p>
                                        </div>
                                        <div className='col-md-8'>
                                            <p>{banner.link ?? '-'}</p>
                                        </div>

                                        <div className="col-md-4">
                                            <p>Banner Image</p>
                                        </div>
                                        <div className='col-md-8'>
                                            <img src={`${IMAGE_URL}/banner/${banner.image}`} alt="bannerImage" height="100px" width="100px" />
                                        </div>

                                    </div>
                                </div>
                            </div>
                        )})}
                    </div>
                </div>
            </>
          )}
        </>
    </section>
  )
}

export default HomeBanner