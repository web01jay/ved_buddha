import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from "yup";
import axios from 'axios';
import { API_URL } from '../../../DataHelpers/API_URL';

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState();
  const contactScheme = Yup.object().shape({
    name: Yup.string().required("Please enter your name"),
    email: Yup.string()
      .email("Please enter a valid email")
      .required("Please enter your email"),
    subject: Yup.string().required("Please enter subject"),
    message: Yup.string().required("Please enter your message"),
  })
  return (
    <>
      <section className="breadcumbs-section position-relative">
        <div className="container">
          <div className="section-spacer">
            <p className="text-white display-6 font-weight-700">Contact Us</p>
            <p className="text-white"> <Link to="/" className="text-white"> Home </Link>  - Contact Us</p>
          </div>
        </div>
      </section>
      <section className="page-section section-spacer">
        <div className="container">
          <div className="row">
            <div className="col-md-5">
              <div className="contact-card p-3 p-lg-5">
                <h1 className="display-6 pb-3">Contact Details</h1>
                <div>
                  <div className="row align-items-center mb-2">
                    <div className="col-md-1">
                      <i className="fa fa-building mt-1"></i>
                    </div>
                    <div className="col-md-11">
                      <p className="font-weight-600 fs-20 mb-0">Our Address</p>
                    </div>
                  </div>
                  <div className="row mb-3">
                    <div className="col-md-11 offset-md-1">
                      <p className="fs-16 mb-0">1, Back Side of Yatri Shed Domuhan,</p>
                      <p className="fs-16 mb-0">Nr. Jatak Bodhgaya Dobhi Road,</p>
                      <p className="fs-16 mb-0">Bodh-Gaya, Gaya,</p>
                      <p className="fs-16 mb-0">Bihar, PIN - 824234</p>
                    </div>
                  </div>
                </div>
                <div className="row align-items-center mb-3">
                  <div className="col-md-1">
                    <i className="fa fa-mail-bulk mt-1"></i>
                  </div>
                  <div className="col-md-11">
                    <p className="font-weight-600 fs-20 mb-0">Our mail box</p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-11 offset-md-1">
                    <a
                      href="mailto:4ved4all@gmail.com"
                      className="text-white fs-16"
                    >
                      4ved4all@gmail.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-7">
              <div className="d-block mt-5 mt-md-0">
                {isSubmitting === true ? (
                  <div className="py-5 text-center">
                    Sending ... </div>
                    ) : (
                  <Formik
                    initialValues={{
                      name: "",
                      email: "",
                      subject: "",
                      message: "",
                    }}
                    validationSchema={contactScheme}
                    onSubmit={ async (values, { setSubmitting }) => {
                      setIsSubmitting(true);
                      try {
                        console.log(values)
                        let formData = FormData()

                        formData.append('name', values.name)
                        formData.append('email', values.email)
                        formData.append('subject', values.subject)
                        formData.append('message', values.message)

                        await axios.post(`${API_URL}/contact/create`, formData)
                          .then(res => {
                            console.log(res, 'res')
                          }).catch(err => {
                            console.log(err, 'err')
                          });
                      } catch (err) {
                        console.log(err);
                      }
                      setIsSubmitting(false);
                    }}
                  >
                    <Form>

                      <div className="row">
                        <div className="col-lg-12 col-xl-8 offset-xl-2">
                          <p className="mb-3">
                            If you have any query in mind please free to contact us.
                          </p>
                        </div>
                        <div className="col-lg-6 col-xl-4 offset-xl-2">
                          <div className="form-group mb-3">
                            <label for="" className="form-control-label">
                              Name
                            </label>
                            {/* <input type="text" name="" id="" className="form-control" /> */}
                            <Field name="name" id="name" type="text" className="form-control" />
                            <ErrorMessage name="name" component="div" className="invalid-feedback" />
                          </div>
                        </div>
                        <div className="col-lg-6 col-xl-4">
                          <div className="form-group mb-3">
                            <label for="" className="form-control-label">
                              Email{" "}
                            </label>
                            {/* <input type="text" name="" id="" className="form-control" /> */}
                            <Field name="email" id="email" type="text" className="form-control" />
                            <ErrorMessage name="email" component="div" className="invalid-feedback" />
                          </div>
                        </div>
                        <div className="col-lg-12 col-xl-8 offset-xl-2">
                          <div className="form-group mb-3">
                            <label for="" className="form-control-label">
                              Subject
                            </label>
                            {/* <input type="text" name="" id="" className="form-control" /> */}
                            <Field name="subject" id="subject" type="text" className="form-control" />
                            <ErrorMessage name="subject" component="div" className="invalid-feedback" />
                          </div>
                        </div>
                        <div className="col-lg-12 col-xl-8 offset-xl-2">
                          <div className="form-group mb-3">
                            <label for="" className="form-control-label">
                              Message
                            </label>
                            {/* <textarea
                              name=""
                              id=""
                              cols="30"
                              rows="5"
                              className="form-control"
                            ></textarea> */}
                            <Field as="textarea" name="message" id="message" type="text" className="form-control" />
                            <ErrorMessage name="message" component="div" className="invalid-feedback" />
                          </div>
                        </div>
                        <div className="col-lg-12 col-xl-8 offset-xl-2">
                          <button type="submit" className="btn btn-outline">Submit</button>
                        </div>
                      </div>
                    </Form>
                  </Formik>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="map-section">
        <div className="container-fluid px-0">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d57991.00739105392!2d84.9436635935561!3d24.71184023569998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sBodhgaya%20Dobhi%20Road%2C%20Bodh-Gaya%2C%20Gaya%2C%20Bihar%2C%20PIN%20-%20824234%20%20!5e0!3m2!1sen!2sin!4v1644223717686!5m2!1sen!2sin"
            className="mapDiv"
            allowfullscreen=""
            loading="lazy"
          ></iframe>
        </div>
      </section>
    </>
  );
};

export default Contact;
