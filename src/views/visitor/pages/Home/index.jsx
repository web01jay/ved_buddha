import React from "react";
import ExploreProducts from "../../components/exploreProducts";
import BannerSlider from "./bannerSlider";
import PartnersPioneers from "./partnersPioneers";

const Home = () => {
  return (
    <>
      <section className="banner-section position-relative">
        <div className="container">
          <BannerSlider />
        </div>
      </section>
      <section className="bord-section section-spacer about-section">
        <div className="container">
          <p className="display-6 mb-4 text-center">Pioneers of Ved Buddha</p>
          <PartnersPioneers />
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
          <ExploreProducts />
        </div>
      </section>
    </>
  );
};

export default Home;
