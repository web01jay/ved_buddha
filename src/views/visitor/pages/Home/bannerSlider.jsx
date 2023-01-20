import React, { useState, useEffect } from "react";
import { API_URL, IMAGE_URL } from "../../../DataHelpers/API_URL";
import SwiperCore, { Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import axios from "axios";
import { Link } from "react-router-dom";

import DefaultSlider from "../../assets/images/slide01.jpg";

const BannerSlider = () => {
    const [banners, setBanners] = useState([]);
    const [isLoading, setIsLoading] = useState()

    SwiperCore.use([Autoplay])

    useEffect(() => {
		setIsLoading(true)
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
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);
  return (
        <div className="slider">
            <>
                {isLoading === true ? (
                    <p className="py-5 text-center">Loading ...</p>
                ) : (
                    <>
                        <Swiper navigation={true} modules={[Navigation, Autoplay]} className="mySwiper" loop={true} autoplay={{ delay: 2000 }}>
                            {banners && banners.map( (banner, index) => { 
                                return (
                                    <SwiperSlide className="item" key={index}>
                                        {banner.image == null ? (
                                            <img src={DefaultSlider} alt={banner.title} />
                                        ) : (
                                            <img src={`${IMAGE_URL}/banner/${banner.image}`} alt={banner.title} />
                                        )}
                                        {banner.title.length > 5 ? (
                                            <>
                                            {banner.link == null || banner.link === "null" ? null :
                                                <div className="item-description ps-3 pe-5 py-5">
                                            <h1 className="fs-22">{banner.title}</h1>
                                            <h6 className="py-4 fs-18">
                                                {banner.description}
                                            </h6>
                                            <Link to={banner.link} className="border-bottom text-white">
                                                View More
                                            </Link>
                                        </div>
                                            }
                                            </>
                                        ) : (null)}
                                </SwiperSlide>
                                )
                            } )}
                        </Swiper>
                    </>
                ) }
            </>
          </div>
  )
}

export default BannerSlider