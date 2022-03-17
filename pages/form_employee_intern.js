import React, {useState, useRef, useEffect} from 'react';
import Header from "../components/Header";
import Footer from "../components/Footer";
import PhoneInput, {isValidPhoneNumber} from 'react-phone-number-input'
import 'react-phone-number-input/style.css'

import Head from 'next/head';

function FormEmployeeIntern() {

    const [phoneNumber1, setPhoneNumber1] = useState();
    const [phoneNumber2, setPhoneNumber2] = useState();
    const [isError, setIsError] = useState(false);

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

    return (
      <div>
        <Head>
          <title>QDS Pro Coaching Institute | Intern | Employee</title>
          <meta
            name="description"
            content="Join QDS Pro as an Intern/Employee and become a part of one stop solution for all the entrance exams preparation related needs, especially for MBA."
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

            @media (max-width:768px)
            {
                .contact-us-form{
                    width: 100%;
                    padding: 0;
                    padding-right: 90px;
                }
                .form-wrapper{
                    width: 100%;
                    min-width:80vw;
                }
            }

        `}
        </style>
        <div className="page-loader">
          <div className="clock" />
        </div>
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
                    Join Us
                  </h1>
                </div>
              </div>
              {/* About us title */}
              <div className="section-wrapper">
                <div id="accordion">
                  <div ref={myRef} className="contact-us-form clearfix ">
                    {isError ? (
                      <div class="alert alert-danger" role="alert">
                        Please enter valid phone number.
                      </div>
                    ) : (
                      ""
                    )}
                    <div className="form-wrapper">
                      <h2
                        style={{ marginTop: 20 }}
                        className="black-text text-center"
                      >
                        Join us as an Intern/Employee
                      </h2>
                      <p
                        data-aos="zoom-in"
                        data-aos-duration="500"
                        data-aos-easing="ease-in-sine"
                        className="mt-5 mb-5"
                      >
                        QDS Pro is what it is today only because of the sincere
                        efforts put in by its interns and employees, day in and
                        day out. QDS Pro highly values its interns and employees
                        and their well-being. We warmly welcome you to be a part
                        of our QDS Pro Family!
                      </p>
                      <div>
                        <form
                          data-aos="flip-right"
                          data-aos-duration="1500"
                          data-aos-easing="ease-in-linear"
                          id="contact_form"
                          name="contact"
                          method="POST"
                          // onSubmit={validateMyForm}
                          action="https://formspree.io/mnqgrprw"
                        >
                          <input
                            hidden
                            type="text"
                            name="Form Title"
                            value="Join us as an Intern/Employee"
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

                          <label for="gender">
                            Gender<span className="required-field">*</span>{" "}
                          </label>
                          <div className="radio-div">
                            <div class="form-check">
                              <input
                                class="form-check-input"
                                type="radio"
                                name="gender"
                                id="exampleRadios1"
                                value="Male"
                                required
                              />
                              <label
                                class="form-check-label"
                                for="exampleRadios1"
                              >
                                Male
                              </label>
                            </div>
                            <div class="form-check">
                              <input
                                class="form-check-input"
                                type="radio"
                                name="gender"
                                id="exampleRadios2"
                                value="Female"
                              />
                              <label
                                class="form-check-label"
                                for="exampleRadios2"
                              >
                                Female
                              </label>
                            </div>
                            <div class="form-check">
                              <input
                                class="form-check-input"
                                type="radio"
                                name="gender"
                                id="exampleRadios3"
                                value="Prefer not to say"
                              />
                              <label
                                class="form-check-label"
                                for="exampleRadios3"
                              >
                                Prefer not to say
                              </label>
                            </div>
                            <div class="form-check">
                              <input
                                class="form-check-input"
                                type="radio"
                                name="gender"
                                id="exampleRadios4"
                                value="Other"
                              />
                              <label
                                class="form-check-label"
                                for="exampleRadios4"
                              >
                                Other
                              </label>
                            </div>
                          </div>

                          <div className="form-group">
                            <label for="birth-date">
                              Birth Date{" "}
                              <span className="required-field">*</span>{" "}
                            </label>
                            <input
                              required
                              type="date"
                              className="form-control"
                              name="birth-date"
                              id="birth-date"
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
                            <label for="location">
                              City <span className="required-field">*</span>{" "}
                            </label>
                            <input
                              required
                              type="text"
                              className="form-control"
                              name="location"
                              id="location"
                              placeholder="(eg. Mumbai)"
                            />
                          </div>

                          <label for="hire-as">
                            Hire as an <span className="required-field">*</span>{" "}
                          </label>
                          <div className="radio-div">
                            <div class="form-check">
                              <input
                                class="form-check-input"
                                type="radio"
                                name="hire-as"
                                id="exampleRadios5"
                                value="Employee"
                                required
                              />
                              <label
                                class="form-check-label"
                                for="exampleRadios5"
                              >
                                Employee
                              </label>
                            </div>
                            <div class="form-check">
                              <input
                                class="form-check-input"
                                type="radio"
                                name="hire-as"
                                id="exampleRadios6"
                                value="Intern"
                              />
                              <label
                                class="form-check-label"
                                for="exampleRadios6"
                              >
                                Intern
                              </label>
                            </div>
                          </div>

                          <div className="form-group">
                            <label for="qualification">
                              Highest Qualification{" "}
                              <span className="required-field">*</span>{" "}
                            </label>
                            <input
                              required
                              type="text"
                              className="form-control"
                              name="qualification"
                              id="qualification"
                            />
                          </div>

                          <div className="form-group">
                            <label for="field-of-work">
                              Preferable field of work{" "}
                              <span className="required-field">*</span>{" "}
                            </label>
                            <input
                              required
                              type="text"
                              className="form-control"
                              name="field-of-work"
                              id="field-of-work"
                            />
                          </div>
                          <div className="form-group">
                            <label for="Experience">
                              Work Experience in the above-mentioned field{" "}
                              <span className="required-field">*</span>{" "}
                            </label>
                            <input
                              required
                              type="text"
                              className="form-control"
                              name="Experience"
                              id="Experience"
                              placeholder="(if any in detail)"
                            />
                          </div>

                          <div className="form-group">
                            <label for="Projects">
                              Projects <span className="required-field">*</span>{" "}
                            </label>
                            <input
                              required
                              type="text"
                              className="form-control"
                              name="Projects"
                              id="Projects"
                            />
                          </div>

                          <div className="form-group">
                            <label for="expected-salary">
                              Expected Salary / Stipend (per month){" "}
                              <span className="required-field">*</span>{" "}
                            </label>
                            <input
                              required
                              type="text"
                              className="form-control"
                              name="expected-salary"
                              id="expected-salary"
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

                          <div className="form-group">
                            <label for="photo">
                              Upload your photo{" "}
                              <span className="required-field">*</span>{" "}
                            </label>
                            <br />
                            <input
                              type="file"
                              id="photo"
                              name="photo"
                              accept="image/*"
                              required
                            />
                          </div>

                          <div className="form-group">
                            <label for="resume">
                              Upload your resume{" "}
                              <span className="required-field">*</span>{" "}
                            </label>
                            <br />
                            <input
                              type="file"
                              id="resume"
                              name="resume"
                              required
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
              </div>
            </div>
            <Footer />
          </div>
        </div>
      </div>
    );
}

export default FormEmployeeIntern;