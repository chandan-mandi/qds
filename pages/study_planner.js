import React, { useState, useEffect } from 'react';
import Header from "../components/Header";
import Footer from "../components/Footer";
import StaticStudyPlan from "./statictt";
import Box from '../components/Box';
import styled from 'styled-components';

import Head from 'next/head';
import DownloadModalForm from '../components/DownloadModalForm';
import Link from 'next/link';
import { useRouter } from 'next/router';


const ExamsExcelWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  
  @media (min-width: 768px) {
    font-size: 1rem;
    padding: 20px;
  } 

  @media (min-width: 1284px) {
    padding: 30px;
  }

`;


const StudyPlanner = (props) => {


    const [activeFeatureTab, setActiveFeatureTab] = useState(1);
    const [radioBtn, setRadioBtn] = useState();
    // const [formList, setFormList] = useState([1])

    // const [showRegister, setShowRegister] = useState(null);

    // useEffect(() => {
    //     setShowRegister(localStorage.getItem('create-time-table'))
    // });

    // useEffect(() => {
    //     if(showRegister !== null){
    //         if(new Date(localStorage.getItem('create-time-table')) < new Date()){
    //             localStorage.removeItem('create-time-table')
    //             setShowRegister(null)
    //         }
    //     }
    // })

    useEffect(() => {
        // on mount, check for active tab
        let u = new URL(window.location.href);

        let q = u.searchParams.get('q');
        let activeTab = u.searchParams.get('activeTab');
        if (q !== null && q !== "1") {
            setActiveFeatureTab(Number(q));
        }

        // if(activeFeatureTab === 3 && showRegister === null){
        //     $("#download_files").modal()
        // }

    });


    // const handleAddForm = () => {
    //     if(showRegister === null){
    //         $("#download_files").modal()
    //     } else {
    //         setFormList(formList.concat(formList.length + 1))
    //     }
    // }


    const handleChange = (e) => {
        setRadioBtn(e.target.value)
    }

    return (
      <div>
        <Head>
          <title>QDS Pro Coaching Institute | Study Planner </title>
          <meta
            name="description"
            content="Use our free Study Planner to manage your time effectively. You can simply request admin to create a timetable for you/ you can create your own timetable."
          />
        </Head>
        <style>
          {`
            .contact-us-form{
                width: 100%;
                padding: 0;
                padding-left: 90px;
                padding-right: 90px;
            }
            .form-wrapper{
                width: 100%;
            }
            .PhoneInputInput{
                border: none !important;
                outline: none !important;
                box-shadow: none !important;
                background: #f1f4f5 !important;
                color: #495057;
                padding: .375rem .75rem;
                border-radius: .25rem;
            }

            .checkbox-div{
                background: rgb(241, 244, 245) !important;
                padding: 10px;
                padding-left: 40px;
                border-radius: .25rem;
            }
            .radio-div{
                background: rgb(241, 244, 245) !important;
                padding: 20px;
                border-radius: .25rem;
            }

            .required-field{
                color: red;
            }

            .s-custom-select{
                padding: 10px;
                border-radius: 10px;
                margin-left: 20px;
            }
            .s-custom-select:focus{
                outline: none;
                
            }

            @media (max-width: 700px){
                .contact-us-form{
                    padding-left: 10px;
                    padding-right: 10px;
                }
            }

        `}
        </style>
        {/* page loader */}
        <div className="aboutus-section">
          <div className="qds-wrapper">
            <Header />
            <div>
              <div className="aboutus-banner">
                <div className="about-title">
                  <h1
                    data-aos="zoom-in"
                    data-aos-delay="300"
                    data-aos-duration="1500"
                    data-aos-easing="ease-in-linear"
                    className="white-text banner-title"
                  >
                    Study Planner
                  </h1>
                </div>
              </div>
              {/* main container */}
              <div style={{ width: "95%" }} className="section-wrapper">
                <ExamsExcelWrapper
                  data-aos="zoom-out"
                  data-aos-delay="0"
                  data-aos-duration="1500"
                  data-aos-easing="ease-in-linear"
                  style={{ padding: 0 }}
                >
                  <Box
                    active={activeFeatureTab === 1}
                    onClick={() => setActiveFeatureTab(1)}
                  >
                    <span>Request Admin</span>
                  </Box>
                  <Box
                    active={activeFeatureTab === 2}
                    onClick={() => setActiveFeatureTab(2)}
                  >
                    <span>Create Time-Table</span>
                  </Box>
                  <Box
                    active={activeFeatureTab === 3}
                    onClick={() => setActiveFeatureTab(3)}
                  >
                    <span>Static Study Plans</span>
                  </Box>
                  <Box
                    active={activeFeatureTab === 4}
                    onClick={() => setActiveFeatureTab(4)}
                  >
                    <span>Build Yourself</span>
                  </Box>
                </ExamsExcelWrapper>

                {activeFeatureTab === 1 && (
                  <div className="mt-5" id="accordion">
                    <div className="contact-us-form clearfix">
                      <div className="form-wrapper">
                        <div>
                          <form
                            data-aos="fade-up"
                            data-aos-delay="200"
                            data-aos-duration="1500"
                            data-aos-easing="ease-in-linear"
                            id="request_admin_form"
                            name="request_admin_form"
                            method="POST"
                            action="https://formspree.io/xrgydpvo"
                          >
                            <input
                              hidden
                              type="text"
                              name="Form Title"
                              value="Request Admin to Create Customized Study Plan"
                            />
                            <div className="form-group">
                              <label for="name">
                                Full Name{" "}
                                <span className="required-field">*</span>{" "}
                              </label>
                              <input
                                required
                                type="text"
                                className="form-control"
                                name="name"
                                id="name"
                                placeholder="Full Name"
                              />
                            </div>
                            <div className="form-group">
                              <label for="email">
                                Email <span className="required-field">*</span>{" "}
                              </label>
                              <input
                                required
                                type="email"
                                className="form-control"
                                name="email"
                                id="email"
                                placeholder="Email"
                              />
                            </div>
                            <div className="form-group">
                              <label for="mobile">
                                Mobile Number{" "}
                                <span className="required-field">*</span>{" "}
                              </label>
                              <input
                                required
                                type="number"
                                className="form-control"
                                name="mobile"
                                id="mobile"
                                placeholder="Mobile Number"
                              />
                            </div>
                            <div className="form-group">
                              <label for="entrance">
                                Entrance Exam{" "}
                                <span className="required-field">*</span>{" "}
                              </label>
                              <input
                                required
                                type="text"
                                className="form-control"
                                name="entrance"
                                id="entrance"
                                placeholder="Entrance Exam"
                              />
                            </div>
                            <div className="form-group">
                              <label for="date_of_exam">
                                Approximate Date of the Exam
                                <span className="required-field">*</span>{" "}
                              </label>
                              <input
                                required
                                type="date"
                                className="form-control"
                                name="date_of_exam"
                                id="date_of_exam"
                              />
                            </div>
                            <div className="form-group radio-div">
                              <div class="form-check">
                                <input
                                  onChange={handleChange}
                                  class="form-check-input"
                                  type="radio"
                                  name="batch_type"
                                  id="exampleRadios4"
                                  value="Student"
                                  required
                                />
                                <label
                                  class="form-check-label"
                                  for="exampleRadios4"
                                >
                                  Student
                                </label>
                              </div>
                              <div class="form-check">
                                <input
                                  onChange={handleChange}
                                  class="form-check-input"
                                  type="radio"
                                  name="batch_type"
                                  id="exampleRadios5"
                                  value="Working Professional"
                                />
                                <label
                                  class="form-check-label"
                                  for="exampleRadios5"
                                >
                                  Working Professional
                                </label>
                              </div>
                              <div class="form-check">
                                <input
                                  onChange={handleChange}
                                  class="form-check-input"
                                  type="radio"
                                  name="batch_type"
                                  id="exampleRadios6"
                                  value="Student with Internship"
                                />
                                <label
                                  class="form-check-label"
                                  for="exampleRadios6"
                                >
                                  Student with Internship
                                </label>
                              </div>
                            </div>

                            {radioBtn !== "Student" && (
                              <div className="form-group">
                                <label for="working_days">
                                  Working Days and Work Timings{" "}
                                  <span className="required-field">*</span>{" "}
                                </label>
                                <input
                                  required
                                  type="text"
                                  className="form-control"
                                  name="working_days"
                                  id="working_days"
                                  placeholder="Working Days and Work Timings"
                                />
                              </div>
                            )}

                            <div className="form-group">
                              <label for="additional_comments">
                                Additional Comments{" "}
                              </label>
                              <textarea
                                type="text"
                                className="form-control"
                                name="additional_comments"
                                id="additional_comments"
                                placeholder="If you have any specific requirements, you can mention it here. (For e.g. if you wish to create a study plan only for a particular section, or only for specific topics in a particular sections, or if you intend to start your exam preparation on a later date, etc...)"
                              />
                            </div>

                            <button
                              type="submit"
                              className="btn btn-primary pull-right"
                            >
                              Submit
                            </button>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* { activeFeatureTab === 3 && (
                                    <div className="mt-5" id="accordion">
                                        <div className="contact-us-form clearfix qds-box-shadow">
                                            <div  className="form-wrapper">

                                                { formList.map((f,i) => (
                                                    <div key={f} className=" m-3 s-single-form-container" style={{border: "1px solid black", padding: "20px", borderRadius: "20px"}} >
                                                        <div  className="form-group">
                                                            <label for="title" >Title</label>
                                                            <input
                                                                required
                                                                type="text"
                                                                className="form-control"
                                                                name="title"
                                                                id="title"
                                                            />
                                                        </div>
                                                        <div className="form-group">
                                                            <label for="from">From</label>
                                                            <input
                                                                required
                                                                type="text"
                                                                className="form-control"
                                                                name="from"
                                                                id="from"
                                                            />
                                                        </div>
                                                        <div className="form-group">
                                                            <label for="to" >To</label>
                                                            <input
                                                                required
                                                                type="text"
                                                                className="form-control"
                                                                name="to"
                                                                id="to"
                                                            />
                                                        </div>

                                                    </div>
                                                
                                                )) }

                                                <button 
                                                    className="mt-3 btn btn-primary pull-right " 
                                                    type="button"
                                                    onClick={handleAddForm}
                                                >
                                                    +
                                                </button>
                                            </div>

                                        </div>
                                    </div>
                                ) } */}

                {activeFeatureTab === 2 ? (
                  <div className="mt-5" id="accordion">
                    <div className="contact-us-form clearfix">
                      <div className="form-wrapper">
                        <div>
                          <Link
                            href={{
                              pathname: "/dynamictt",
                              query: { activeTab: 2 },
                            }}
                          >
                            <button
                              className="btn btn-primary text-center"
                              title="Make your Own Timetable strategy with this tool"
                            >
                              Create Dynamic Time Table
                            </button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : null}
                {activeFeatureTab === 3 ? (
                  <div className="mt-5" id="accordion">
                    <div className="contact-us-form clearfix">
                      <div className="form-wrapper">
                        <div>
                          <StaticStudyPlan />
                        </div>
                      </div>
                    </div>
                  </div>
                ) : null}
              </div>
              {/* main container */}

              <DownloadModalForm type="create-time-table" />
            </div>
            <Footer />
          </div>
        </div>
      </div>
    );
}

export default StudyPlanner;

