import React from "react";

import Slide01 from "../../assets/images/slide01.jpg";

const ProductDetails = () => {
  return (
    <>
      <section class="breadcumbs-section position-relative">
        <div class="container">
          <div class="section-spacer">
            <p class="text-white display-6 font-weight-700">Product Details</p>
            <p class="text-white">Home - Products - Product Detail</p>
          </div>
        </div>
      </section>
      <section class="page-section section-spacer">
        <div class="container">
          <div class="row">
            <div class="col-md-6 col-lg-5">
              <div class="image-container">
                <img src={Slide01} alt="" class="mw-100" />
              </div>
            </div>
            <div class="col-md-6 col-lg-7">
              <div class="d-flex flex-column ps-0 ps-md-3">
                <h3 class="display-6">Product Details</h3>
                <b class="mb-3">Category 1</b>
                <p class="mb-3">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Consectetur autem illo doloremque ratione eos aspernatur
                  reprehenderit culpa error sequi veritatis, architecto hic
                  aperiam adipisci, distinctio saepe facere molestiae omnis.
                  Quo?
                </p>
                <p class="mb-3">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Consectetur autem illo doloremque ratione eos aspernatur
                  reprehenderit culpa error sequi veritatis, architecto hic
                  aperiam adipisci, distinctio saepe facere molestiae omnis.
                  Quo?
                </p>
                <p class="mb-3">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Consectetur autem illo doloremque ratione eos aspernatur
                  reprehenderit culpa error sequi veritatis, architecto hic
                  aperiam adipisci, distinctio saepe facere molestiae omnis.
                  Quo?
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductDetails;
