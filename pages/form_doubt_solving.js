import React, {useState, useRef, useEffect} from 'react';
import Header from "../components/Header";
import Footer from "../components/Footer";
import PhoneInput, {isValidPhoneNumber} from 'react-phone-number-input'
import 'react-phone-number-input/style.css'
import Head from "next/head";

function FormDoubtSolving() {

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
          <title>QDS Pro Coaching Institute | Doubt Solving</title>
          <meta
            name="description"
            content="QDS Pro provides 24*7 Online Doubt Solving Services. We receive ample of doubts globally on a daily basis. Collaborate with us to be a doubt solving expert."
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
                    padding-left: 0;
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
                  <div ref={myRef} className="contact-us-form clearfix  ">
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
                        Join us as a Doubt Solving Expert
                      </h2>
                      <p
                        data-aos="zoom-in"
                        data-aos-duration="500"
                        data-aos-easing="ease-in-sine"
                        className="mt-5 mb-5"
                      >
                        QDS Pro provides 24*7 Online Doubt Solving Services. We
                        receive ample of doubts on a daily basis from across the
                        globe. So, we are looking forward to collaborate with
                        you on this fruitful journey of answering students'
                        doubts. We would be assigning you doubts of the
                        students, matching your subject expertise. Kindly fill
                        and submit this form and mail us your resume at
                        admin@qdspro.com at the earliest, so that our team can
                        get in touch with you for further discussions.
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
                          action="https://formspree.io/mgenqaqz"
                        >
                          <input
                            hidden
                            type="text"
                            name="Form Title"
                            value="Join us as Doubt Solving Expert "
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

                          <label>
                            Which type of entrance exams do you specialize in ?{" "}
                            <span className="required-field">*</span>{" "}
                          </label>
                          <div className="checkbox-div checkbox-group required">
                            <div className="form-group">
                              <input
                                name="study abroad"
                                class="form-check-input"
                                type="hidden"
                                value="No"
                                id="check1"
                              />
                              <input
                                name="study abroad"
                                class="form-check-input"
                                type="checkbox"
                                value="Yes"
                                id="check1"
                              />
                              <label class="form-check-label" for="check1">
                                Study Abroad
                              </label>
                            </div>
                            <div className="form-group">
                              <input
                                name="management"
                                class="form-check-input"
                                type="hidden"
                                value="No"
                                id="check2"
                              />
                              <input
                                name="management"
                                class="form-check-input"
                                type="checkbox"
                                value="Yes"
                                id="check2"
                              />
                              <label class="form-check-label" for="check2">
                                Management
                              </label>
                            </div>
                            <div className="form-group">
                              <input
                                name="Bank"
                                class="form-check-input"
                                type="hidden"
                                value="No"
                                id="check3"
                              />
                              <input
                                name="Bank"
                                class="form-check-input"
                                type="checkbox"
                                value="Yes"
                                id="check3"
                              />
                              <label class="form-check-label" for="check3">
                                Bank
                              </label>
                            </div>
                            <div className="form-group">
                              <input
                                name="Law"
                                class="form-check-input"
                                type="hidden"
                                value="No"
                                id="check3"
                              />
                              <input
                                name="Law"
                                class="form-check-input"
                                type="checkbox"
                                value="Yes"
                                id="check3"
                              />
                              <label class="form-check-label" for="check3">
                                Law
                              </label>
                            </div>
                            <div className="form-group">
                              <input
                                name="government"
                                class="form-check-input"
                                type="hidden"
                                value="No"
                                id="check3"
                              />
                              <input
                                name="government"
                                class="form-check-input"
                                type="checkbox"
                                value="Yes"
                                id="check3"
                              />
                              <label class="form-check-label" for="check3">
                                Government
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

                          <div className="form-group">
                            <label for="entrance">
                              Specify the names of Entrance Exams{" "}
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
                            Which sections do you specialize in ?
                            <span className="required-field">*</span>{" "}
                          </label>
                          <div className="checkbox-div checkbox-group required">
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
                                name="Legal Aptitude"
                                class="form-check-input"
                                type="hidden"
                                value="No"
                                id="check1"
                              />
                              <input
                                name="Legal Aptitude"
                                class="form-check-input"
                                type="checkbox"
                                value="Yes"
                                id="check1"
                              />
                              <label class="form-check-label" for="check1">
                                Legal Aptitude
                              </label>
                            </div>

                            <div className="form-group">
                              <input
                                name="General Knowledge / Current Affairs"
                                class="form-check-input"
                                type="hidden"
                                value="No"
                                id="check3"
                              />
                              <input
                                name="General Knowledge / Current Affairs"
                                class="form-check-input"
                                type="checkbox"
                                value="Yes"
                                id="check3"
                              />
                              <label class="form-check-label" for="check3">
                                General Knowledge and Current Affairs
                              </label>
                            </div>
                            <div className="form-group">
                              <input
                                name="Computer Awareness"
                                class="form-check-input"
                                type="hidden"
                                value="No"
                                id="check3"
                              />
                              <input
                                name="Computer Awareness"
                                class="form-check-input"
                                type="checkbox"
                                value="Yes"
                                id="check3"
                              />
                              <label class="form-check-label" for="check3">
                                Computer Awareness
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

                          <div className="form-group">
                            <label for="teaching-experience">
                              How many years of teaching experience do you have
                              in the aforementioned courses?{" "}
                              <span className="required-field">*</span>{" "}
                            </label>
                            <input
                              required
                              type="text"
                              className="form-control"
                              name="teaching-experience"
                              id="teaching-experience"
                              placeholder="Your answer"
                            />
                          </div>

                          <div className="form-group">
                            <label for="Faculty-experience">
                              Have you served as a Visiting Faculty at any
                              coaching institute? Kindly name the institute and
                              describe your experience.{" "}
                              <span className="required-field">*</span>{" "}
                            </label>
                            <input
                              required
                              type="text"
                              className="form-control"
                              name="Faculty-experience"
                              id="Faculty-experience"
                              placeholder="Your answer"
                            />
                          </div>
                          <div className="form-group">
                            <label for="appeared-entrance">
                              Have you appeared for any of the aforementioned
                              entrance exams? If yes, please specify your scores
                              (Note: If shortlisted, you will be requested to
                              provide transcripts for the same).{" "}
                              <span className="required-field">*</span>{" "}
                            </label>
                            <input
                              required
                              type="text"
                              className="form-control"
                              name="appeared-entrance"
                              id="appeared-entrance"
                              placeholder="Your answer"
                            />
                          </div>

                          <div className="form-group">
                            <label for="availability_doubt_solving">
                              Will you be available for solving doubts 24*7? If
                              not, then what are your suitable days and timings
                              for Doubt Solving?{" "}
                              <span className="required-field">*</span>{" "}
                            </label>
                            <input
                              required
                              type="text"
                              className="form-control"
                              name="availability_doubt_solving"
                              id="availability_doubt_solving"
                              placeholder="Your answer"
                            />
                          </div>

                          <div className="form-group">
                            <label for="avg_revert_time">
                              Average time you would take to revert back to the
                              student with the solution of their doubt? Kindly
                              note we provide detailed explanatory solutions for
                              their doubt. Solution can either be written on the
                              platform or on paper (in which case a photograph
                              of the same needs to be uploaded)
                              <span className="required-field">*</span>{" "}
                            </label>
                            <input
                              required
                              type="text"
                              className="form-control"
                              name="avg_revert_time"
                              id="avg_revert_time"
                              placeholder="Your answer"
                            />
                          </div>

                          <div className="form-group">
                            <label for="what-diff-you">
                              What differentiates you from other faculties, who
                              have similar subject expertise?{" "}
                              <span className="required-field">*</span>{" "}
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              name="what-diff-you"
                              id="what-diff-you"
                              placeholder="Your answer"
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

export default FormDoubtSolving;