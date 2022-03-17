import React, {useState, useRef, useEffect} from 'react';
import Header from "../components/Header";
import Footer from "../components/Footer";
import Box from '../components/Box';
import styled from 'styled-components';

import PhoneInput, {isValidPhoneNumber} from 'react-phone-number-input'
import 'react-phone-number-input/style.css'
import Head from 'next/head';


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

const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop)   

const EnquiryPage = (props) => {
    
    const [activeFeatureTab, setActiveFeatureTab] = useState(1);
    const [phoneNumber1, setPhoneNumber1] = useState();
    const [phoneNumber2, setPhoneNumber2] = useState();
    const [isError, setIsError] = useState(false);
    const [formTitle, setFormTitle] = useState("");
    const [selectedService, setSelectedService] = useState("coaching-classes");


    const [screenWidth, setScreenWidth] = useState(null);

    useEffect(() => {
        function updateWindowDimensions() {
            // console.log(window.innerWidth);
            setScreenWidth(window.innerWidth);
        }   
        window.addEventListener("resize", updateWindowDimensions);
        updateWindowDimensions();
        return function cleanup() {
            window.removeEventListener("resize", updateWindowDimensions)
        }
    }, []);



    // console.log(props.url.query);
    const myRef = useRef(null)

    function validateMyForm(e){
    // console.log(phoneNumber1);
    // console.log(phoneNumber2);

    if(!isValidPhoneNumber(phoneNumber1)){
        e.preventDefault();
        setPhoneNumber1('');
        setPhoneNumber2('');
        scrollToRef(myRef);
        setIsError(true);
        // console.log("INVALID");
        return false;
    }
    
    // console.log("VALID");
    return true;
    }

    useEffect(() => {
        if(activeFeatureTab === 1){
            setFormTitle("Coaching Classes Enquiry Form");
        } else if(activeFeatureTab === 2){
            setFormTitle("Video Lectures Enquiry Form");
        } else if(activeFeatureTab === 3){
            setFormTitle("Live Online Tutoring Enquiry Form");
        } else if(activeFeatureTab === 4){
            setFormTitle("Doubt Solving Enquiry Form");
        } else if(activeFeatureTab === 5){
            setFormTitle("Home Tutoring Enquiry Form");
        } else if(activeFeatureTab === 6){
            setFormTitle("Book a Free Trial / Demo Session");
        } else if(activeFeatureTab === 7){
            setFormTitle("Book a Free Career Counseling Session");
        }
    }, [activeFeatureTab])

    useEffect(() => {
        // on mount, check for active tab
        let u = new URL(window.location.href);
        console.log(u);
        
        let q = u.searchParams.get('q');
        let activeTab = u.searchParams.get('activeTab');
        let selectedService = u.searchParams.get('select');
        if(selectedService === '0'){
            setSelectedService("coaching-classes")
        } else if(selectedService === '2'){
            setSelectedService("live-online-tutoring")
        } else if(selectedService === '4'){
            setSelectedService('home-tutoring')
        }

        if (q !== null && q !== "1") {
            setActiveFeatureTab(Number(q));
        }
        if (activeTab !== null) {
            scrollToRef(myRef);
            setActiveFeatureTab(Number(activeTab));
        }

    }, []);

    return (
      <div>
        <Head>
          <title>QDS Pro Entrance Exams Coaching Institute | Enquiry </title>
          <meta
            name="description"
            content="For any kind of query/ for booking a Free Trial or Demo Session, visit the enquiry section of the website of QDS Pro Entrance Exams Coaching Institute."
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
                box-shadow: 0px 0px 4px #0066ff;
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
                    Enquiry
                  </h1>
                </div>
              </div>
              {/* main container */}
              <div
                ref={myRef}
                style={{ width: "95%" }}
                className="section-wrapper"
              >
                {screenWidth >= 1000 ? (
                  <ExamsExcelWrapper
                    data-aos="zoom-in"
                    data-aos-duration="1500"
                    data-aos-easing="ease-in-linear"
                    style={{ padding: 0 }}
                  >
                    <Box
                      active={activeFeatureTab === 1}
                      onClick={() => setActiveFeatureTab(1)}
                    >
                      <span>Coaching Classes</span>
                    </Box>
                    <Box
                      active={activeFeatureTab === 2}
                      onClick={() => setActiveFeatureTab(2)}
                    >
                      <span>Video Lectures</span>
                    </Box>
                    <Box
                      active={activeFeatureTab === 3}
                      onClick={() => setActiveFeatureTab(3)}
                    >
                      <span>Live Online Tutoring</span>
                    </Box>
                    <Box
                      active={activeFeatureTab === 4}
                      onClick={() => setActiveFeatureTab(4)}
                    >
                      <span>Doubt Solving</span>
                    </Box>
                    <Box
                      active={activeFeatureTab === 5}
                      onClick={() => setActiveFeatureTab(5)}
                    >
                      <span>Home Tutoring</span>
                    </Box>
                    <Box
                      active={activeFeatureTab === 6}
                      onClick={() => setActiveFeatureTab(6)}
                    >
                      <span>Book a Free Trial / Demo Session</span>
                    </Box>
                    <Box
                      active={activeFeatureTab === 7}
                      onClick={() => setActiveFeatureTab(7)}
                    >
                      <span style={{ fontSize: "18px" }}>
                        Book Free Career Counseling Session
                      </span>
                    </Box>
                  </ExamsExcelWrapper>
                ) : (
                  <>
                    <ExamsExcelWrapper
                      data-aos="zoom-in"
                      data-aos-duration="1500"
                      data-aos-easing="ease-in-linear"
                      style={{ padding: 0 }}
                    >
                      <Box
                        active={activeFeatureTab === 1}
                        onClick={() => setActiveFeatureTab(1)}
                      >
                        <span>Coaching Classes</span>
                      </Box>
                      <Box
                        active={activeFeatureTab === 2}
                        onClick={() => setActiveFeatureTab(2)}
                      >
                        <span>Video Lectures</span>
                      </Box>
                      <Box
                        active={activeFeatureTab === 3}
                        onClick={() => setActiveFeatureTab(3)}
                      >
                        <span>Live Online Tutoring</span>
                      </Box>
                    </ExamsExcelWrapper>
                    <ExamsExcelWrapper
                      data-aos="zoom-in"
                      data-aos-duration="1500"
                      data-aos-easing="ease-in-linear"
                    >
                      <Box
                        active={activeFeatureTab === 4}
                        onClick={() => setActiveFeatureTab(4)}
                      >
                        <span>Doubt Solving</span>
                      </Box>
                      <Box
                        active={activeFeatureTab === 5}
                        onClick={() => setActiveFeatureTab(5)}
                      >
                        <span>Home Tutoring</span>
                      </Box>
                    </ExamsExcelWrapper>
                    <ExamsExcelWrapper
                      data-aos="zoom-in"
                      data-aos-duration="1500"
                      data-aos-easing="ease-in-linear"
                    >
                      <Box
                        active={activeFeatureTab === 6}
                        onClick={() => setActiveFeatureTab(6)}
                      >
                        <span>Book a Free Trial / Demo Session</span>
                      </Box>
                      <Box
                        active={activeFeatureTab === 7}
                        onClick={() => setActiveFeatureTab(7)}
                      >
                        <span>Book a Free Career Counseling Session</span>
                      </Box>
                    </ExamsExcelWrapper>
                  </>
                )}

                {activeFeatureTab === 1 ||
                activeFeatureTab === 3 ||
                activeFeatureTab === 5 ? (
                  <div id="accordion">
                    <div className="contact-us-form clearfix ">
                      {isError ? (
                        <div class="alert alert-danger" role="alert">
                          Please enter valid phone number.
                        </div>
                      ) : (
                        ""
                      )}
                      <div className="form-wrapper">
                        <h2
                          data-aos="fade-left"
                          data-aos-duration="1500"
                          data-aos-easing="ease-in-linear"
                          style={{ marginTop: 20 }}
                          className="black-text text-center"
                        >
                          {formTitle}
                        </h2>
                        <div
                          data-aos="fade-right"
                          data-aos-duration="1500"
                          data-aos-easing="ease-in-linear"
                        >
                          <form
                            id="contact_form"
                            name="contact"
                            method="POST"
                            onSubmit={validateMyForm}
                            action="https://formspree.io/xrgydpjj"
                          >
                            <input
                              hidden
                              type="text"
                              name="Form Title"
                              value={formTitle}
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
                              <label for="mobile_number1">
                                Mobile Number{" "}
                                <span className="required-field">*</span>{" "}
                              </label>
                              <PhoneInput
                                name="mobile 1"
                                id="mobile_number1"
                                placeholder="Mobile Number"
                                value={phoneNumber1}
                                onChange={setPhoneNumber1}
                              />
                            </div>
                            <div className="form-group">
                              <label for="mobile_number2">
                                Alternate Mobile Number
                              </label>
                              <PhoneInput
                                name="mobile 2"
                                id="mobile_number2"
                                placeholder="Alternate Mobile Number"
                                value={phoneNumber2}
                                onChange={setPhoneNumber2}
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
                              <label for="location">
                                Location{" "}
                                <span className="required-field">*</span>{" "}
                              </label>
                              <input
                                required
                                type="text"
                                className="form-control"
                                name="location"
                                id="location"
                                placeholder="Location (eg. Andheri)"
                              />
                            </div>
                            <div className="form-group">
                              <label for="entrance">
                                Name of Entrance Exams{" "}
                                <span className="required-field">*</span>{" "}
                              </label>
                              <input
                                required
                                type="text"
                                className="form-control"
                                name="entrance"
                                id="entrance"
                                placeholder="Name of the Entrance Exams (eg. GMAT, CAT, etc...) "
                              />
                            </div>
                            <label>
                              Full Course / Sectional Course{" "}
                              <span className="required-field">*</span>{" "}
                            </label>
                            <div className="checkbox-div checkbox-group required">
                              <div className="form-group">
                                <input
                                  name="fullcourse"
                                  class="form-check-input"
                                  type="hidden"
                                  value="No"
                                  id="check1"
                                />
                                <input
                                  name="fullcourse"
                                  class="form-check-input"
                                  type="checkbox"
                                  value="Yes"
                                  id="check1"
                                />
                                <label class="form-check-label" for="check1">
                                  Full Course
                                </label>
                              </div>
                              <div className="form-group">
                                <input
                                  name="Quantitative Aptitude"
                                  class="form-check-input"
                                  type="hidden"
                                  value="No"
                                  id="check2"
                                />
                                <input
                                  name="Quantitative Aptitude"
                                  class="form-check-input"
                                  type="checkbox"
                                  value="Yes"
                                  id="check2"
                                />
                                <label class="form-check-label" for="check2">
                                  Quantitative Aptitude
                                </label>
                              </div>
                              <div className="form-group">
                                <input
                                  name="Verbal Ability"
                                  class="form-check-input"
                                  type="hidden"
                                  value="No"
                                  id="check3"
                                />
                                <input
                                  name="Verbal Ability"
                                  class="form-check-input"
                                  type="checkbox"
                                  value="Yes"
                                  id="check3"
                                />
                                <label class="form-check-label" for="check3">
                                  Verbal Ability
                                </label>
                              </div>
                              <div className="form-group">
                                <input
                                  name="Logical Reasoning"
                                  class="form-check-input"
                                  type="hidden"
                                  value="No"
                                  id="check3"
                                />
                                <input
                                  name="Logical Reasoning"
                                  class="form-check-input"
                                  type="checkbox"
                                  value="Yes"
                                  id="check3"
                                />
                                <label class="form-check-label" for="check3">
                                  Logical Reasoning
                                </label>
                              </div>
                              <div className="form-group">
                                <input
                                  name="Data Interpretation"
                                  class="form-check-input"
                                  type="hidden"
                                  value="No"
                                  id="check3"
                                />
                                <input
                                  name="Data Interpretation"
                                  class="form-check-input"
                                  type="checkbox"
                                  value="Yes"
                                  id="check3"
                                />
                                <label class="form-check-label" for="check3">
                                  Data Interpretation
                                </label>
                              </div>
                              <div className="form-group">
                                <input
                                  name="Analytical Writing Assessment"
                                  class="form-check-input"
                                  type="hidden"
                                  value="No"
                                  id="check3"
                                />
                                <input
                                  name="Analytical Writing Assessment"
                                  class="form-check-input"
                                  type="checkbox"
                                  value="Yes"
                                  id="check3"
                                />
                                <label class="form-check-label" for="check3">
                                  Analytical Writing Assessment
                                </label>
                              </div>
                              <div className="form-group">
                                <input
                                  name="Integrated Reasoning"
                                  class="form-check-input"
                                  type="hidden"
                                  value="No"
                                  id="check3"
                                />
                                <input
                                  name="Integrated Reasoning"
                                  class="form-check-input"
                                  type="checkbox"
                                  value="Yes"
                                  id="check3"
                                />
                                <label class="form-check-label" for="check3">
                                  Integrated Reasoning
                                </label>
                              </div>
                              <div className="form-group">
                                <input
                                  name="General Awareness / General Knowledge / Current Affairs"
                                  class="form-check-input"
                                  type="hidden"
                                  value="No"
                                  id="check3"
                                />
                                <input
                                  name="General Awareness / General Knowledge / Current Affairs"
                                  class="form-check-input"
                                  type="checkbox"
                                  value="Yes"
                                  id="check3"
                                />
                                <label class="form-check-label" for="check3">
                                  General Awareness / General Knowledge /
                                  Current Affairs
                                </label>
                              </div>
                              <div className="form-group">
                                <input
                                  name="Other"
                                  class="form-check-input"
                                  type="hidden"
                                  value="No"
                                  id="check3"
                                />
                                <input
                                  name="Other"
                                  class="form-check-input"
                                  type="checkbox"
                                  value="Yes"
                                  id="check3"
                                />
                                <label class="form-check-label" for="check3">
                                  Other
                                </label>
                              </div>
                            </div>

                            <label for="preferable-batch">
                              Preferable Batch{" "}
                              <span className="required-field">*</span>{" "}
                            </label>
                            <div className="radio-div">
                              <div class="form-check">
                                <input
                                  class="form-check-input"
                                  type="radio"
                                  name="preferable-batch"
                                  id="exampleRadios1"
                                  value="Weekday"
                                  required
                                />
                                <label
                                  class="form-check-label"
                                  for="exampleRadios1"
                                >
                                  Weekday
                                </label>
                              </div>
                              <div class="form-check">
                                <input
                                  class="form-check-input"
                                  type="radio"
                                  name="preferable-batch"
                                  id="exampleRadios2"
                                  value="Weekend"
                                />
                                <label
                                  class="form-check-label"
                                  for="exampleRadios2"
                                >
                                  Weekend
                                </label>
                              </div>
                              <div class="form-check">
                                <input
                                  class="form-check-input"
                                  type="radio"
                                  name="preferable-batch"
                                  id="exampleRadios3"
                                  value="Either"
                                />
                                <label
                                  class="form-check-label"
                                  for="exampleRadios3"
                                >
                                  Either
                                </label>
                              </div>
                            </div>

                            <div className="form-group">
                              <label for="preferred-timings">
                                Preferred Timings{" "}
                                <span className="required-field">*</span>{" "}
                              </label>
                              <input
                                required
                                type="text"
                                className="form-control"
                                name="preferred-timings"
                                id="preferred-timings"
                                placeholder="Preferred Timings"
                              />
                            </div>
                            <div className="form-group">
                              <label for="reference">
                                Reference{" "}
                                <span className="required-field">*</span>{" "}
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                name="reference"
                                id="reference"
                                placeholder="Reference"
                              />
                            </div>
                            <div className="form-group">
                              <label for="additional-comments">
                                Additional Comments
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                name="additional-comments"
                                id="additional-comments"
                                placeholder="Additional Comments"
                              />
                            </div>

                            <p id="my-form-status" />
                            <button
                              id="my-form-button"
                              type="submit"
                              className="btn btn-primary btn-lg"
                            >
                              SUBMIT
                            </button>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : null}
                {activeFeatureTab === 2 || activeFeatureTab === 4 ? (
                  <div id="accordion">
                    <div className="contact-us-form clearfix ">
                      {isError ? (
                        <div class="alert alert-danger" role="alert">
                          Please enter valid phone number.
                        </div>
                      ) : (
                        ""
                      )}
                      <div className="form-wrapper">
                        <h2
                          data-aos="fade-left"
                          data-aos-duration="1500"
                          data-aos-easing="ease-in-linear"
                          style={{ marginTop: 20 }}
                          className="black-text text-center"
                        >
                          {formTitle}
                        </h2>
                        <div
                          data-aos="fade-right"
                          data-aos-duration="1500"
                          data-aos-easing="ease-in-linear"
                        >
                          <form
                            id="contact_form"
                            name="contact"
                            method="POST"
                            onSubmit={validateMyForm}
                            action="https://formspree.io/xdowjebq"
                          >
                            <input
                              hidden
                              type="text"
                              name="Form Title"
                              value={formTitle}
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
                              <label for="mobile_number1">
                                Mobile Number{" "}
                                <span className="required-field">*</span>{" "}
                              </label>
                              <PhoneInput
                                name="mobile 1"
                                id="mobile_number1"
                                placeholder="Mobile Number"
                                value={phoneNumber1}
                                onChange={setPhoneNumber1}
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
                              <label for="yourmessage">
                                Your Message{" "}
                                <span className="required-field">*</span>{" "}
                              </label>
                              <textarea
                                required
                                className="form-control"
                                id="yourmessage"
                                name="message"
                                rows={3}
                                placeholder="Your Message"
                                defaultValue={""}
                              />
                            </div>

                            <p id="my-form-status" />
                            <button
                              id="my-form-button"
                              type="submit"
                              className="btn btn-primary btn-lg"
                            >
                              SUBMIT
                            </button>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : null}

                {activeFeatureTab === 6 || activeFeatureTab === 7 ? (
                  <div id="accordion">
                    {isError ? (
                      <div class="alert alert-danger" role="alert">
                        Please enter valid phone number.
                      </div>
                    ) : (
                      ""
                    )}
                    <div className="contact-us-form clearfix ">
                      <div className="form-wrapper">
                        <h2
                          data-aos="fade-left"
                          data-aos-duration="1500"
                          data-aos-easing="ease-in-linear"
                          style={{ marginTop: 20 }}
                          className="black-text text-center"
                        >
                          {formTitle}
                        </h2>
                        <div
                          data-aos="fade-right"
                          data-aos-duration="1500"
                          data-aos-easing="ease-in-linear"
                        >
                          <form
                            id="contact_form"
                            name="contact"
                            method="POST"
                            onSubmit={validateMyForm}
                            action="https://formspree.io/xaypkekw"
                          >
                            <input
                              hidden
                              type="text"
                              name="Form Title"
                              value={formTitle}
                            />

                            <div className="form-group">
                              <label for="selected-service">
                                Select your Service{" "}
                                <span className="required-field">*</span>{" "}
                              </label>
                              <select
                                className="s-custom-select"
                                id="selected-service"
                                value={selectedService}
                                name="selected-service"
                                onChange={(e) =>
                                  setSelectedService(e.target.value)
                                }
                              >
                                <option value="coaching-classes">
                                  Coaching Classes
                                </option>
                                <option value="live-online-tutoring">
                                  Live Online Tutoring
                                </option>
                                <option value="home-tutoring">
                                  Home Tutoring
                                </option>
                              </select>
                            </div>
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
                              <label for="mobile_number1">
                                Mobile Number{" "}
                                <span className="required-field">*</span>{" "}
                              </label>
                              <PhoneInput
                                name="mobile 1"
                                id="mobile_number1"
                                placeholder="Mobile Number"
                                value={phoneNumber1}
                                onChange={setPhoneNumber1}
                              />
                            </div>
                            <div className="form-group">
                              <label for="mobile_number2">
                                Alternate Mobile Number
                              </label>
                              <PhoneInput
                                name="mobile 2"
                                id="mobile_number2"
                                placeholder="Alternate Mobile Number"
                                value={phoneNumber2}
                                onChange={setPhoneNumber2}
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
                              <label for="location">
                                Location{" "}
                                <span className="required-field">*</span>{" "}
                              </label>
                              <input
                                required
                                type="text"
                                className="form-control"
                                name="location"
                                id="location"
                                placeholder="Location (eg. Andheri)"
                              />
                            </div>
                            <div className="form-group">
                              <label for="entrance">
                                Name of Entrance Exams{" "}
                                <span className="required-field">*</span>{" "}
                              </label>
                              <input
                                required
                                type="text"
                                className="form-control"
                                name="entrance"
                                id="entrance"
                                placeholder="Name of the Entrance Exams (eg. GMAT, CAT, etc...) "
                              />
                            </div>

                            <div className="form-group">
                              <label for="preferred-timings">
                                Preferred Days and Timings{" "}
                                <span className="required-field">*</span>{" "}
                              </label>
                              <input
                                required
                                type="text"
                                className="form-control"
                                name="preferred-days-timings"
                                id="preferred-days-timings"
                                placeholder="Preferred Days and Timings"
                              />
                            </div>
                            {selectedService === "coaching-classes" ? (
                              <>
                                <label for="preferable-batch">
                                  Preferred Centre{" "}
                                  <span className="required-field">*</span>{" "}
                                </label>
                                <div className="radio-div">
                                  <div class="form-check">
                                    <input
                                      class="form-check-input"
                                      type="radio"
                                      name="preferred-centre"
                                      id="exampleRadios1"
                                      value="Charni Road"
                                      required
                                    />
                                    <label
                                      class="form-check-label"
                                      for="exampleRadios1"
                                    >
                                      Charni Road
                                    </label>
                                  </div>
                                  <div class="form-check">
                                    <input
                                      class="form-check-input"
                                      type="radio"
                                      name="preferred-centre"
                                      id="exampleRadios2"
                                      value="Andheri"
                                    />
                                    <label
                                      class="form-check-label"
                                      for="exampleRadios2"
                                    >
                                      Andheri
                                    </label>
                                  </div>
                                  <div class="form-check">
                                    <input
                                      class="form-check-input"
                                      type="radio"
                                      name="preferred-centre"
                                      id="exampleRadios3"
                                      value="Either"
                                    />
                                    <label
                                      class="form-check-label"
                                      for="exampleRadios3"
                                    >
                                      Either
                                    </label>
                                  </div>
                                </div>
                              </>
                            ) : (
                              ""
                            )}

                            <div className="form-group">
                              <label for="reference">
                                Reference{" "}
                                <span className="required-field">*</span>{" "}
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                name="reference"
                                id="reference"
                                placeholder="Reference"
                              />
                            </div>
                            <div className="form-group">
                              <label for="additional-comments">
                                Additional Comments
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                name="additional-comments"
                                id="additional-comments"
                                placeholder="Additional Comments"
                              />
                            </div>

                            <p id="my-form-status" />
                            <button
                              id="my-form-button"
                              type="submit"
                              className="btn btn-primary btn-lg"
                            >
                              SUBMIT
                            </button>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : null}
              </div>
              {/* main container */}
            </div>
            <Footer />
          </div>
        </div>
      </div>
    );
}

export default EnquiryPage;

