import Head from "next/head";
import React, { useEffect, useState } from "react";
import Box from "../components/Box";
import Footer from "../components/Footer";
import Header from "../components/Header";

function ProPeer(props) {
  const options = [
    "Enroll Together",
    "Avail Huge Group Discounts",
    "Create Your Own Batch",
    "Learn Together",
    "Achieve Together",
  ];

  return (
    <div className="pro_peer">
      <Head>
        <title> QDS Pro Coaching Institute | Peer Program</title>
        <meta
          name="description"
          content="Wish there was a batch with Only You and Your Friends? No External Involvement? That too at Extremely Discounted Course Fees? Here it is!"
        />
      </Head>
      <Header />
      <div>
        <div className="aboutus-banner">
          <div className="about-title">
            <h1
              data-aos="zoom-in"
              data-aos-delay="300"
              data-aos-duration="500"
              data-aos-easing="ease-in-linear"
              className="white-text banner-title"
            >
              QDS Pro Peer Program
            </h1>
          </div>
        </div>
      </div>
      <style>
        {`
                    .container-fluid
                    {
                        width: 85%;
                    }
                    .title
                    {
                        font-weight: 300;
                    }
                    .pro-peer-banner
                    {
                        width: 100%;
                    }
                    .flow-chart
                    {
                        display: flex;
                    }
                    .box-points
                    {
                        cursor: auto;
                        width: 100%;
                        height: 5em;
                        background-image: linear-gradient(to right, #77bf43 48%, #7ac042 66%, #83c340 78%, #93c83c 89%, #a9cf37 100%, #aacf37);
                    }
                    .thead
                    {
                        background-color: #192f5a;
                        color: #fff;
                    }
                    .vertical-line-right
                    {
                        border-right: 1px solid;
                        border-color: #192f5a;
                        padding-right: 5%;
                    }
                    .vertical-line-left
                    {
                        border-left: 1px solid;
                        border-color: #192f5a;
                        padding-left: 5%;
                    }
                    .tnc
                    {
                        color: #fff;
                        background-color: #77bf43;
                        justify-content: 'center';
                        margin: auto;
                        margin-top: 5%;
                    }
                    .tnc:hover
                    {
                        color: #fff;
                        background-color: #77bf43;
                    }
                    .tnc-points
                    {
                        font-size: 16px;
                    }
                    .icon
                    {
                        width: 25%;
                    }
                    #fa-icon-right
                    {
                        visibility: visible;
                    }
                    #fa-icon-down
                    {
                        visibility: hidden;
                        width: 0%;
                    }
                    @media(max-width: 768px)
                    {
                        .flow-chart
                        {
                            display: block;
                        }
                        .icon
                        {
                            width: 100%;
                        }
                        #fa-icon-right
                        {
                            visibility: hidden;
                            width: 0%;
                        }
                        #fa-icon-down
                        {
                            visibility: visible;
                            padding-top: 2%;
                            padding-bottom: 2%;
                        }
                        .vertical-line-right
                        {
                            border-right: none;
                            padding-right: 0%;
                        }
                        .vertical-line-left
                        {
                            border: none;
                            padding-left: 0%;
                        }
                        .table-title
                        {
                            font-size: 14px;
                        }
                        .table-data
                        {
                            font-size: 12px;
                        }
                    }

                    @media(max-width: 600px){
                        .mobileFont{
                            font-size: 1rem !important;
                        }
                    }
                `}
      </style>
      <div className="container-fluid mt-5 mb-5">
        <div className="row text-center">
          <div className="col-12">
            <h2
              className="title"
              data-aos="fade-right"
              data-aos-delay="0"
              data-aos-duration="1000"
              data-aos-easing="ease-in-linear"
            >
              Wish there was a batch with Only You and Your Friends ?
            </h2>
          </div>
          <div className="col-12">
            <h2
              className="title"
              data-aos="fade-left"
              data-aos-delay="100"
              data-aos-duration="1000"
              data-aos-easing="ease-in-linear"
            >
              No External Involvement ?
            </h2>
          </div>
          <div className="col-12">
            <h2
              className="title"
              data-aos="fade-right"
              data-aos-delay="200"
              data-aos-duration="1000"
              data-aos-easing="ease-in-linear"
            >
              That too at Extremely Discounted Course Fees ?
            </h2>
          </div>
          <div className="col-12">
            <h2
              className="title"
              data-aos="fade-left"
              data-aos-delay="300"
              data-aos-duration="1000"
              data-aos-easing="ease-in-linear"
            >
              Here it is!
            </h2>
          </div>
        </div>
      </div>
      <div className="jumbotron p-0">
        <img
          className="pro-peer-banner"
          src="/assets/images/pro_peer_program.webp"
          alt="QDS Pro Peer Program Banner"
        ></img>
      </div>
      <div className="container-fluid mt-5 mb-5">
        <div className="row">
          {options.map((opt, index) => {
            return (
              <div className="col-sm align-self-center justify-content-center flow-chart m-0 p-0">
                <Box
                  className="box-points"
                  data-aos="fade"
                  data-aos-delay="300"
                  data-aos-duration="1000"
                  data-aos-easing="ease-in-linear"
                >
                  {opt}
                </Box>
                {index !== options.length - 1 && (
                  <div className="d-flex align-self-center justify-content-center icon">
                    <span
                      className="fa fa-long-arrow-right fa-lg align-self-center"
                      id="fa-icon-right"
                    ></span>
                    <span
                      className="fa fa-long-arrow-down fa-lg align-self-center"
                      id="fa-icon-down"
                    ></span>
                  </div>
                )}
              </div>
            );
          })}
        </div>
        <div className="row">
          <div
            className="col-sm-6 mt-5 vertical-line-right"
            data-aos="fade-right"
            data-aos-delay="300"
            data-aos-duration="1000"
            data-aos-easing="ease-in-linear"
          >
            <table class="table text-center">
              <thead className="thead">
                <tr>
                  <th scope="col" className="table-title">
                    Group Of
                  </th>
                  <th scope="col" className="table-title">
                    Waiver on Course Fees
                  </th>
                </tr>
              </thead>
              <tbody className="table-data">
                <tr>
                  <td>10 or more</td>
                  <td>30%</td>
                </tr>
                <tr>
                  <td>5 to 9</td>
                  <td>25%</td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>20%</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>15%</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>10%</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div
            className="col-sm-6 mt-5 vertical-line-left"
            data-aos="fade-left"
            data-aos-delay="300"
            data-aos-duration="1000"
            data-aos-easing="ease-in-linear"
          >
            <h3>Enquire Now</h3>
            <form className="content-container mt-4">
              <div className="form-group">
                {/* <label htmlFor="Name" id="name-label">Name</label> */}
                <input
                  required
                  name="Name"
                  type="text"
                  className="form-control"
                  id="name"
                  placeholder="Enter Your Full Name"
                />
              </div>
              <div className="form-group">
                {/* <label htmlFor="Email" id="email-label">Email Address</label> */}
                <input
                  required
                  name="Email"
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="Enter Your Email"
                />
              </div>
              <div className="form-group">
                {/* <label htmlFor="Mobile Number" id="mobile-label">Mobile Number</label> */}
                <input
                  required
                  name="Mobile Number"
                  type="text"
                  className="form-control"
                  id="mobile"
                  placeholder="Enter Your Mobile Number"
                />
              </div>
              <div className="form-group">
                {/* <label htmlFor="course" id="course-label">Course</label> */}
                <select
                  className="form-control"
                  name="course"
                  id="course"
                  required
                >
                  <option selected value="">
                    Select Course
                  </option>
                  <option value="GMAT">GMAT + CAT</option>
                  <option value="GMAT">GMAT</option>
                  <option value="CAT">CAT</option>
                  <option value="GRE">GRE</option>
                  <option value="SAT">SAT</option>
                  <option value="MAH-CET">MAH-CET</option>
                </select>
              </div>
              <div className="form-group">
                <button
                  disabled
                  type="submit"
                  className="btn btn-primary float-right"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="row">
          <div className="col-12 text-center mt-2">
            <a
              href="#termsAndConditions"
              data-toggle="modal"
              data-target="#termsAndConditions"
              className="btn btn-success tnc"
            >
              Terms and Conditions
            </a>
          </div>
          <div
            className="modal fade"
            id="termsAndConditions"
            tabIndex="-1"
            role="dialog"
            aria-labelledby="termsAndConditions"
            aria-hidden="true"
          >
            <div className="modal-dialog modal-dialog-centered" role="document">
              <div
                className="modal-content"
                style={{
                  backgroundColor: "#213247",
                }}
              >
                <div
                  className="modal-header"
                  style={{
                    backgroundColor: "#213247",
                  }}
                >
                  <h5 className="modal-title" id="termsAndConditions">
                    Terms and Conditions
                  </h5>
                  <button
                    style={{
                      color: "#77bf43",
                      textShadow: "none",
                      opacity: 1,
                    }}
                    type="button"
                    className="close"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div
                  className="modal-body tnc-points text-justify"
                  style={{
                    backgroundColor: "#213247",
                  }}
                >
                  <ol>
                    <li className="mb-2 mr-4">
                      This offer is valid only for enrolled QDS Pro students.
                    </li>
                    <li className="mb-2 mr-4">
                      This offer is valid only on Group enrollments.
                    </li>
                    <li className="mb-2 mr-4">
                      This offer is non-transferable.
                    </li>
                    <li className="mb-2 mr-4">
                      The decision of the management will be final and binding
                      and QDS Pro reserves the right to withdraw this offer at
                      any point of time without prior intimation.
                    </li>
                    <li className="mb-2 mr-4">
                      This offer cannot be clubbed with any other Offer.
                    </li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default ProPeer;
