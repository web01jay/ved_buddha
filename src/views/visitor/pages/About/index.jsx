import React from 'react'
import { Link } from "react-router-dom";
import ExploreProducts from '../../components/exploreProducts';

const About = () => {
  return (
    <>
        <section class="breadcumbs-section position-relative">
        <div class="container">
          <div class="section-spacer">
            <p class="text-white display-6 font-weight-700">About Ved Buddha</p>
            <p class="text-white"> <Link to="/" className="text-white"> Home </Link> - About Us</p>
          </div>
        </div>
      </section>
      <section class="page-section section-spacer about-section">
        <div class="container">
          <div class="row">
            <div class="col-md-12">
                <div class="d-flex flex-column ps-0 ps-md-3">
                    <h3 class="display-6 mb-4">About Us</h3>
                    
                    <p class="mb-3">
                        Established in the year 2021, we Ved Buddha India Private Limited, a preeminent organization is engaged in Wholesale Trader of Pharmaceutical, Food Supplement and Cosmetic Products. Our wide range of products are widely known owing to their features such as reliability and safe usage. 
                    </p>
                    <p class="mb-3">
                        We get our products manufactured under strict surveillance by experienced pharmacist according to the rules and guidelines of "WHO" for GMP. The company is lead by professionals having sizeable experience in this field, which helps us to ensure the best quality continuously. We update the knowledge base by continuous vigilance on the Market trends to offer the latest and proven drugs and dosage forms, which can help to achieve cure in much better and speedy way.”
                    </p>
                    
                    <div class="row">
                        <div class="col-md-6">
                            <p class="fs-22 d-flex align-items-center"> <sapn className="me-2 fa fa-bullseye fs-15"></sapn> Our Mission</p>
                            <div class="ps-3">
                                <p class="fs-14">1. Consistent Quality</p>
                                <p class="fs-14">2. On-Time Deliveries</p>
                                <p class="fs-14">3. Well Refined Procedures</p>
                                <p class="fs-14">4. Cost Efficiency</p>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <p class="fs-22 d-flex align-items-center"> <span className="fa fa-eye fs-15 me-2"></span> Our Vision</p>
                            <div class="ps-3">
                                <div class="d-flex">
                                    <p class="fs-14 me-2">1. </p>
                                    <p class="fs-14">To provide lifesaving medicines at affordable and sensible price.</p>
                                </div>
                                <div class="d-flex">
                                    <p class="fs-14 me-2">2. </p>
                                    <p class="fs-14">To remain updated with the latest knowledge and technology in the pharmaceutical industry.</p>
                                </div>
                                <div class="d-flex">
                                    <p class="fs-14 me-2">3. </p>
                                    <p class="fs-14">Working for a healthier tomorrow</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <ExploreProducts />
                    
                </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default About