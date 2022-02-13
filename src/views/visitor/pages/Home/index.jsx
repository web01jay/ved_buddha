import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import Slide01 from "../../assets/images/slide01.jpg";
import Slide02 from "../../assets/images/slide02.jpg";
import Slide03 from "../../assets/images/slide03.jpg";

const Home = () => {
  return (
    <>
      <section className="banner-section position-relative">
        <div className="container">
          <div className="slider">
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper" loop={true}>
              <SwiperSlide className="item">
                <img src={Slide01} alt="Slide01" />
                <div className="item-description ps-3 pe-5 py-5">
                  <h1 className="fs-22">Pharmaceutical Products</h1>
                  <h6 className="py-4 fs-18">
                    Every human being is the author of his own health” - We at
                    VED do care to maintain and restore by the prevention and
                    treatment of illness.
                  </h6>
                  <a className="border-bottom text-white" href="#">
                    View More
                  </a>
                </div>
              </SwiperSlide>
              <SwiperSlide className="item">
                <img src={Slide02} alt="Slide02" />
                <div className="item-description ps-3 pe-5 py-5">
                  <h1 className="fs-22">Nutraceutical Products</h1>
                  <h6 className="py-4 fs-18">
                    Health is the greatest gift”. Secure your gift with Ved food
                    supplements.
                  </h6>
                  <a className="border-bottom text-white" href="#">
                    View More
                  </a>
                </div>
              </SwiperSlide>
              <SwiperSlide className="item">
                <img src={Slide03} alt="Slide03" />
                <div className="item-description ps-3 pe-5 py-5">
                  <h1 className="fs-22">Cosmetic Products</h1>
                  <h6 className="py-4 fs-18">
                    Designed for personal care and skin care to be used to
                    cleanse or protect the body or skin.
                  </h6>
                  <a className="border-bottom text-white" href="#">
                    View More
                  </a>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </section>
      <section className="bord-section section-spacer about-section">
        <div className="container">
          <p className="display-6 mb-4 text-center">Pioneers of Ved Buddha</p>
          <div className="row">
            <div className="col-md-3">
              <div className="category-section d-block">
                <div className="image-container">
                  <img src={Slide02} alt="category" className="mw-100" />
                </div>
                <p className="category-title fs-20 font-weight-semi-bold">
                  Mr. Arvind
                </p>
                <p className="text-center">
                  Mr. Arvind, a Pharmaceutical entrepreneur, believes that “To
                  keep the body in good health is a duty”. He is, successfully
                  running his own WHO approved pharmaceutical manufacturing set
                  up at Changodar, Ahmedabad. Now, he aims to serve the society
                  by providing quality products with cost effectiveness.{" "}
                </p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="category-section d-block">
                <div className="image-container">
                  <img src={Slide01} alt="category" className="mw-100" />
                </div>
                <p className="category-title fs-20 font-weight-semi-bold">
                  Mr. Vivek Kumar
                </p>
                <p className="text-center">
                  Mr. Vivek, a young entrepreneur, has worked at Pharmaceutical
                  companies and having in-depth knowledge of Pharmaceutical,
                  Food-Supplements and Nutraceuticals Products.{" "}
                </p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="category-section d-block">
                <div className="image-container">
                  <img src={Slide03} alt="category" className="mw-100" />
                </div>
                <p className="category-title fs-20 font-weight-semi-bold">
                  Mrs. Gunjan Kumari
                </p>
                <p className="text-center">
                  Mrs. Gunjan Kumari is a woman entrepreneur. She believes that
                  creating health awareness is an effective way to prevent the
                  spread of diseases affecting the community as a whole.{" "}
                </p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="category-section d-block">
                <div className="image-container">
                  <img src={Slide03} alt="category" className="mw-100" />
                </div>
                <p className="category-title fs-20 font-weight-semi-bold">
                  Mrs. Gunjan Kumari
                </p>
                <p className="text-center">
                  Mrs. Gunjan Kumari is a woman entrepreneur. She believes that
                  creating health awareness is an effective way to prevent the
                  spread of diseases affecting the community as a whole.{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="ved-section section-spacer">
        <div className="container">
          <p className="fs-38 mb-0 font-weight-semi-bold">VED</p>
          <p className="fs-38 mb-3">VISION TO ERASE DISEASE</p>
          <p className="fs-14">
            Creating healthy community and helping to build the empire which can
            inspire to spread humanity
          </p>
        </div>
      </section>
      <section className="about-section">
        <div className="container">
          <div className="explore-section section-spacer">
            <p className="display-6 text-center mb-4">Explore Our Products</p>
            <div className="row">
              <div className="col-md-4">
                <a
                  href="./pages/products.html"
                  className="category-section d-block"
                >
                  <div className="image-container">
                    <img src={Slide02} alt="category" className="mw-100" />
                  </div>
                  <p className="category-title">Category 1</p>
                </a>
              </div>
              <div className="col-md-4">
                <a
                  href="./pages/products.html"
                  className="category-section d-block"
                >
                  <div className="image-container">
                    <img src={Slide01} alt="category" className="mw-100" />
                  </div>
                  <p className="category-title">Category 2</p>
                </a>
              </div>
              <div className="col-md-4">
                <a
                  href="./pages/products.html"
                  className="category-section d-block"
                >
                  <div className="image-container">
                    <img src={Slide03} alt="category" className="mw-100" />
                  </div>
                  <p className="category-title">Category 3</p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <script>
        $(document).ready(function (){" "}
        {$(".owl-carousel").owlCarousel({
          loop: true,
          center: true,
          margin: 10,
          nav: true,
          responsive: {
            0: {
              items: 1,
            },
            600: {
              items: 1,
            },
            1000: {
              items: 1,
            },
          },
        })}
        )
      </script> */}
    </>
  );
};

export default Home;
