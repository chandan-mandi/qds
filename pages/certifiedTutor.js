import React from "react";
import Head from "next/head";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Box from "../components/Box";
import styled from "styled-components";

const SectionTitle = styled.h2`
  padding: 0;
  color: #0a2830;
  font-weight: 700;
  margin: 10px;
  text-transform: capitalize;
  @media (min-width: 1024px) {
    font-size: 2rem;
  }
`;
function CertifiedTutor(props) {
  const levels = [
    {
      name: "Basic Tutor",
      description:
        "Learn how to create a strong and persuasive tutor profile, how to interact with students and how to deliver content.",
    },
    {
      name: "Intermediate Tutor",
      description:
        "Learn about the free tutoring softwares and other test prep resources available online, in addition to everything covered in the Basic Tutor Course.",
    },
    {
      name: "Advanced Tutor",
      description:
        "Learn how to create and sell courses online, in addition to everything covered in the Intermediate Tutor Course.",
    },
    {
      name: "Master Tutor",
      description:
        "Learn how to curate your own content, how to structure your entire course and what study material to recommend your students for difference entrance exams, in addition to everything covered in the Advanced Tutor Course.",
    },
  ];

  const certificationPoints = [
    "Higher Credibility",
    "Develop Behavioural Analytical Skills",
    "Improved Pedagogy",
    "Hone Problem Solving Skills",
    "Better Job Opportunities",
    "Get Aligned with Industry's Best Practices",
    "Overall Personality Development",
    "Higher Remuneration",
  ];

  return (
    <div className="certifiedTutor">
      <Head>
        <title>Become a QDS Pro Certified Tutor</title>
        <meta
          name="description"
          content="To know more about our institute and our courses you can download the brochure and/or prospectus here"
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
              className="white-text banner-title text-center"
            >
              Become a QDS Pro Certified Tutor
            </h1>
          </div>
        </div>
      </div>
      <style>
        {`
                    .certification-container
                    {
                        width: 85%;
                    }
                    .levels-container
                    {
                        width: 100%;
                        background-color: #e2e2e2;
                    }
                    .box-points
                    {
                        cursor: auto;
                        width: 100%;
                        height: 50px;
                        background-image: linear-gradient(to right, #77bf43 48%, #7ac042 66%, #83c340 78%, #93c83c 89%, #a9cf37 100%, #aacf37);
                    }
                    .box-point-last
                    {
                        width: 20%;
                    }
                    .tutor-form-row
                    {
                        width: 100%;
                    }
                    .tutor-form-group
                    {
                        display: flex;
                        background-color: #192f5a;
                        color: #fff;
                        border: 2px solid #192f5a;
                    }
                    .tutor-form-control
                    {
                        background-color: #192f5a;
                        color: #fff;
                        border-radius: 0px;
                        border: 2px solid #192f5a;
                    }
                    .tutor-btn 
                    {
                        width: 100%;
                        height: 100%;
                    }
                    
                    .tutor-form-control::-webkit-input-placeholder 
                    {
                       color: #fff;
                    }
                    .tutor-form-control:-moz-placeholder 
                    {
                        color: #fff;
                    }
                    .tutor-form-control::-moz-placeholder 
                    {
                        color: #fff;
                    }
                    .tutor-form-control::placeholder 
                    {
                        color: #fff;
                    }
                    .tutor-form-control:-ms-input-placeholder 
                    {
                        color: #fff;
                    }
                    .master-workshop
                    {
                        background-color: #e2e2e2;
                        //background-image: linear-gradient(to bottom, rgba(0,0,0,0.5) 0%,rgba(0,0,0,0.5)),url("https://stepinlogic.com/wp-content/uploads/2019/09/risk.jpg");
                        background-image: url("/assets/images/master-class.webp");
                        background-repeat: no-repeat;
                        background-size: cover;
                        background-position: left;
                    }
                    .enquire
                    {
                        // background-image: linear-gradient(to bottom, rgba(0,0,0,0.5) 0%,rgba(0,0,0,0.5)),url("https://c0.wallpaperflare.com/preview/497/990/361/answer-ask-badge-blue.jpg");
                        background-image: url("/assets/images/enquire-now.webp");
                        background-repeat: no-repeat;
                        background-size: cover;
                        background-position: top;
                    }
                    .levels
                    {
                        font-size: 1.2rem;
                    }

                    .featureTitle{
						font-size: 1.6rem;
						color: #192f5a;
						font-weight: bold;
						text-align: center;
						padding: 20px;
						@media (min-width: 1024px) {
							font-size: 1.3rem;
						}
					}

					.s-content{
						
						border-bottom: 1px solid #7f7f7f;
						&:last-of-type {
							border-bottom: none;
						}
						margin: auto;
						padding: 0 4em;
						z-index: 2;
					}

					.s-content:hover {
						height: 16em;
					}

					@media (max-width: 400px) { 
						.s-content:hover{
							max-height: fit-content ;
						}
					}
					@media (min-width: 400px) and (max-width: 480px)  { 
						.s-content:hover{
							max-height: fit-content ;
						}
					} 
					@media (min-width: 481px) and (max-width: 900px) { 
						.s-content:hover{
							max-height: fit-content ;
						}
					} 
					
					
					.s-description {
						width: 0%;
						display: flex;
						height: 0;
						opacity: 0;
						visibility: hidden;
						font-size: 1.2rem;
						transition: width 1.25s ease-out;
					}
					
					.s-content:hover .s-description{
						height: 100%;
						width: 70%;
						opacity: 1;
						visibility: visible;
						background-color: #e2e2e2;
						color: #192f5a;
						float: right;
						display: flex;
						align-items: center;
						justify-content: center;
						padding: 0%;
						margin: 0%;
					}

					.titleDiv
					{
						width: 100%;
						transition: width 1.25s ease-out;
					}

					.s-content:hover .titleDiv{
						opacity: 1;
						visibility: visible;
						float: left;
						width: 30%;
						height: 100%;
						display: flex;
						align-items: center;
						justify-content: center;
						background-color: #e2e2e2;
					}
                    @media(max-width: 768px)
					{	
						.s-content:hover .s-description{
							width: 70%;
							margin-top: 0%;
							font-size: 12px;
						}
	
						.s-content:hover .titleDiv{
							
							padding: 0%;
							margin: 0%;
							width: 30%;
							disply: block;
						}

						.featureTitle
						{
							font-size: 16px;
						}
					}
		  
		  
		   @media screen and (max-width:360px){
                                #enquire{
                                             margin-top: -25px;
                                          }

                                #newsSection{
                                             margin-top: -135px;
                                          }
                                .form-row{
                                             margin-top:-70px;
                                          }
    }
					
                
                `}
      </style>
      <div className="container-fluid certification-container mt-5 mb-2">
        <div className="row">
          <div className="col-12 mb-2 text-center">
            <SectionTitle className="mb-4">Why Certification ? </SectionTitle>
            {/* <h2 data-aos="fade-right"
                            data-aos-delay="300"
                            data-aos-duration="1000"
                            data-aos-easing="ease-in-linear"
                            className="section-title">
                            Why Certification ?
                        </h2> */}
          </div>
          {certificationPoints.map((point) => {
            return (
              <div className="col-6 pb-2">
                <Box
                  className="box-points"
                  data-aos="fade"
                  data-aos-delay="300"
                  data-aos-duration="1000"
                  data-aos-easing="ease-in-linear"
                >
                  {point}
                </Box>
              </div>
            );
          })}
          <div className="col-12 mb-2 d-flex align-self-center justify-content-center">
            <Box
              className="box-points box-point-last"
              data-aos="fade"
              data-aos-delay="300"
              data-aos-duration="1000"
              data-aos-easing="ease-in-linear"
            >
              &amp; lots more...
            </Box>
          </div>
        </div>
      </div>
      <div className="container-fluid levels-container mt-0 mb-0">
        <div className="row">
          <div className="col-12 mb-2 text-center mt-4">
            <SectionTitle className="mb-4">
              Levels of Certification
            </SectionTitle>
            {/* <h2 data-aos="fade-right"
                            data-aos-delay="300"
                            data-aos-duration="1000"
                            data-aos-easing="ease-in-linear"
                            className="section-title">

                            Levels of Certification
                        </h2> */}
          </div>
          <div className="col-12">
            <div className="qds-cards">
              <div className="bv-example-row">
                {levels.map((level, i) => {
                  return (
                    <div key={i} className="s-content">
                      <div className="titleDiv">
                        <h2
                          data-aos="zoom-out"
                          data-aos-delay="300"
                          data-aos-duration="1500"
                          data-aos-easing="ease-in-linear"
                          className="featureTitle"
                        >
                          {level.name}
                          {/*toUpperCase()*/}
                        </h2>
                      </div>
                      <p className="s-description text-justify text-center">
                        {level.description}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
            {/* <ol className="pl-4 levels"
                            data-aos="fade-left"
                            data-aos-delay="300"
                            data-aos-duration="1000"
                            data-aos-easing="ease-in-linear">

                            <li>Basic Tutor</li>
                            <li>Intermediate Tutor</li>
                            <li>Advanced Tutor</li>
                            <li>Master Tutor</li>
                        </ol> */}
          </div>
        </div>
      </div>
      <div
        className="jumbotron m-0 master-workshop"
        data-aos="fade"
        data-aos-delay="300"
        data-aos-duration="1000"
        data-aos-easing="ease-in-linear"
      >
        <div className="d-flex align-self-center justify-content-center text-center">
          <SectionTitle className="mb-5" style={{ backgroundImage: "none" }} id="enquire">
            Enquire Now
          </SectionTitle>
        </div>
        <br />
        <br />
        <div className="col-12">
          <form className="content-container d-flex align-self-center justify-content-center">
            <div className="form-row tutor-form-row">
              <div className="form-group tutor-form-group col-md-3 p-0">
                <i className="fa fa-user-o align-self-center p-2 "></i>
                <input
                  required
                  name="Name"
                  type="text"
                  className="form-control tutor-form-control"
                  id="name"
                  placeholder="Enter Your Full Name"
                />
              </div>
              <div className="form-group tutor-form-group col-md-2 p-0">
                <i className="fa fa-envelope-o align-self-center p-2"></i>
                <input
                  required
                  name="Email"
                  type="email"
                  className="form-control tutor-form-control"
                  id="email"
                  placeholder="Enter Your Email"
                />
              </div>
              <div className="form-group tutor-form-group col-md-2 p-0">
                <i className="fa fa-mobile align-self-center p-2"></i>
                <input
                  required
                  name="Mobile Number"
                  type="text"
                  className="form-control tutor-form-control"
                  id="mobile"
                  placeholder="Enter Your Mobile No."
                />
              </div>
              <div className="form-group tutor-form-group col-md-2 p-0">
                <select
                  className="form-control tutor-form-control"
                  name="course"
                  id="course"
                  required
                >
                  <option selected value="">
                    Select Course
                  </option>
                  <option value="GMAT">GMAT</option>
                  <option value="CAT">CAT</option>
                  <option value="GRE">GRE</option>
                  <option value="SAT">SAT</option>
                  <option value="MAH-CET">MAH-CET</option>
                  <option value="ALL">ALL</option>
                </select>
              </div>
              <div className="form-group tutor-form-group col-md-2 p-0">
                <select
                  className="form-control tutor-form-control"
                  name="level"
                  id="level"
                  required
                >
                  <option selected value="">
                    Select Level
                  </option>
                  <option value="GMAT">Basic Tutor</option>
                  <option value="CAT">Intermediate Tutor</option>
                  <option value="GRE">Advanced Tutor</option>
                  <option value="SAT">Master Tutor</option>
                  <option value="ALL">ALL</option>
                </select>
              </div>
              <div className="form-group col-md-1 p-0">
                <button
                  disabled
                  type="submit"
                  className="btn btn-primary tutor-btn"
                >
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
        <br />
        <br />
        <br />
        <br /> <br />
        <br />
        <div className="d-flex align-self-center justify-content-center text-center">
          <SectionTitle className="mb-5 " id="newsSection">
            Subscribe to our Free Master Workshops
          </SectionTitle>
        </div>
        <br />
        <br />
        <div className="col-12">
          <form className="content-container d-flex align-self-center justify-content-center">
            <div className="form-row tutor-form-row">
              <div className="form-group tutor-form-group col-md-3 p-0">
                <i className="fa fa-user-o align-self-center p-2 "></i>
                <input
                  required
                  name="Name"
                  type="text"
                  className="form-control tutor-form-control"
                  id="name"
                  placeholder="Enter Your Full Name"
                />
              </div>
              <div className="form-group tutor-form-group col-md-3 p-0">
                <i className="fa fa-envelope-o align-self-center p-2"></i>
                <input
                  required
                  name="Email"
                  type="email"
                  className="form-control tutor-form-control"
                  id="email"
                  placeholder="Enter Your Email"
                />
              </div>
              <div className="form-group tutor-form-group col-md-3 p-0">
                <i className="fa fa-mobile align-self-center p-2"></i>
                <input
                  required
                  name="Mobile Number"
                  type="text"
                  className="form-control tutor-form-control"
                  id="mobile"
                  placeholder="Enter Your Mobile Number"
                />
              </div>
              <div className="form-group tutor-form-group col-md-2 p-0">
                <select
                  className="form-control tutor-form-control"
                  name="course"
                  id="course"
                  required
                >
                  <option selected value="">
                    Select Course
                  </option>
                  <option value="GMAT">GMAT</option>
                  <option value="CAT">CAT</option>
                  <option value="GRE">GRE</option>
                  <option value="SAT">SAT</option>
                  <option value="MAH-CET">MAH-CET</option>
                  <option value="ALL">ALL</option>
                </select>
              </div>

              <div className="form-group col-md-1 p-0">
                <button
                  disabled
                  type="submit"
                  className="btn btn-primary tutor-btn"
                >
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default CertifiedTutor;
