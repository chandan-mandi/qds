import React, {useState} from 'react';
import Header from "../components/Header";
import Footer from "../components/Footer";
import 'react-phone-number-input/style.css'
import PhoneInput, {isValidPhoneNumber} from 'react-phone-number-input'
import Head from 'next/head';



function ContactPage() {

  const [phoneNumber, setPhoneNumber] = useState();
  const [isError, setIsError] = useState(false);


  function validateMyForm(e){
    console.log(phoneNumber);
    if(!isValidPhoneNumber(phoneNumber)){
      e.preventDefault();
      setPhoneNumber('');
      setIsError(true);
      console.log("INVALID");
      return false;
    }

    console.log("VALID");
    return true;
  }

  function onSelectChange(event) {
    console.log(event.target.value);
  }

  function myNavFunc(area) {
    switch (area) {
      case "Charni": {
        // If it's an iPhone..
        if (
          navigator.platform.indexOf("iPhone") != -1 ||
          navigator.platform.indexOf("iPod") != -1 ||
          navigator.platform.indexOf("iPad") != -1
        )
          window.open("https://goo.gl/maps/EV7mMe1BXttgRSc3A");
        //"maps://www.google.com/maps/dir/?api=1&travelmode=driving&layer=traffic&destination=[YOUR_LAT],[YOUR_LNG]");
        else window.open("https://goo.gl/maps/EV7mMe1BXttgRSc3A"); //"https://www.google.com/maps/dir/?api=1&travelmode=driving&layer=traffic&destination=[YOUR_LAT],[YOUR_LNG]");
        break;
      }
      case "Andheri": {
        if (
          navigator.platform.indexOf("iPhone") != -1 ||
          navigator.platform.indexOf("iPod") != -1 ||
          navigator.platform.indexOf("iPad") != -1
        )
          window.open("https://goo.gl/maps/2SrFuYQEGt18q6jx7");
        //"maps://www.google.com/maps/dir/?api=1&travelmode=driving&layer=traffic&destination=[YOUR_LAT],[YOUR_LNG]");
        else window.open("https://goo.gl/maps/2SrFuYQEGt18q6jx7"); //"https://www.google.com/maps/dir/?api=1&travelmode=driving&layer=traffic&destination=[YOUR_LAT],[YOUR_LNG]");
        break;
      }
      default:
        break;
    }
  }
  return (
    <div>
      <Head>
        <title>QDS Pro Entrance Exams Coaching Institute | Contact Us</title>
        <meta
          name="description"
          content="Contact QDS Pro Entrance Exams Coaching Institute and/or send us your queries to know more about all our courses - GMAT, CAT, GRE, SAT, MAH-CET, etc..."
        />
      </Head>
      <div className="page-loader">
        <div className="clock" />
      </div>
      {/* page loader */}
      <div className="contact-us">
        <div className="qds-wrapper">
          <Header />
          <style>
            {`

              .contact-us .mobile-header{
                margin-top:10px;
              }
              .contact-us .mobile-qds-logo{
                padding-top:10px;
              }

              .signup-section {
                text-align: center;
                background: url(assets/images/2.webp) no-repeat;
                background-size: cover;
                color: #fff;
                padding: 60px 20px;
              }

              .contact-us-section {
                background: url('assets/images/map.jpg') no-repeat;
                background-size: cover;
                background-attachment: fixed;
              }
              .cont-wrapper{
                height:75%;
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
              #contact_form{
                min-height:fit-content;
                height:300px;
              }
              @media (max-width:768px)
              {
                #contact_form{
                  height:400px;
                }
                .cont-wrapper{
                  padding-top:100px;
                }
              }

              @media (max-width:579.5px)
              {
                .cont-wrapper{
                  height:50%;
                }
              }
              .mouse-pointer{
                cursor:pointer
              }
          `}
          </style>
          <div className="contact-us-section">
            <img src="./public/assets/images/qds-logo.png" />
            <div className="cont-wrapper">
              <div
                data-aos="fade-right"
                data-aos-delay="1000"
                data-aos-duration="1500"
                data-aos-easing="ease-in-linear"
                style={{ paddingBottom:"0px", borderBottom:"100px" }}
                className="contact-detail-card qds-box-shadow"
              >
                <div className="details-wrapper">
                  <div
                   style={{
                              display: "flex",
                              flexDirection: "column",
                              alignItems: "center",
                              justifyContent: "center",
                              marginBottom: "-19px" }}
                  >            
                  <img
                    src="/assets/images/qds-logo.png"
//                     style={{ width: "70px", marginLeft: "25px" }}
                    style={{ height: "111px", marginTop: "-61px" , marginLeft: "-3px" }}
                  />
                  <p
                    className="s-header-logo-subtitle"
                    style={{
                      marginLeft: "20px",
                      fontSize: "10px",
                      width: "180px",
                    }}
                  >
                    A Complete Hand-Holding...!
                  </p>
                  </div>
                  <h5 className="white-text mb-2">Contact Us</h5>
                  <div className="contact-us-details">
                    <p className="mr-b-30 white-text mouse-pointer">
                      Branches:
                      <a
                        onClick={() => myNavFunc("Charni")}
                        title="Click To See On Google Maps"
                      >
                        &nbsp;Charni Road
                      </a>
                      -
                      <a
                        onClick={() => myNavFunc("Andheri")}
                        title="Click To See On Google Maps"
                      >
                        Andheri
                      </a>
                    </p>
                    <p className="mr-b-30 ">
                      <i class="fa fa-whatsapp" style={{fontSize: "22px",marginRight: "4.7px",position:"relative",top: "4px",left: "1px",color: "#8ac541" }} />
                      {" "}
                      <span className="white-text"></span>
                      <a
                        className="blue-text"
                        href="https://api.whatsapp.com/send?phone=919920715001"
                        target="_blank"
                        title="WhatsApp Us"
                      >
                        {" "}
                        +91 99207 15001
                      </a>
                    </p>
                    <p className="mr-b-30 ">
                      <img
                        src="/assets/images/icon/mobile.webp"
                        alt="Phone Image 2"
                        style={{ color: "#fff" }}
                      />{" "}
                      <span className="white-text"></span>
                      <a
                        className="blue-text"
                        href="tel:+91 73033 15003"
                        target="_blank"
                        title="Call Us"
                      >
                        {" "}
                        +91 73033 15003
                      </a>
                    </p>
                    <p className="mr-b-30">
                      <img
                        src="/assets/images/icon/mobile.webp"
                        alt="Phone Image 3"
                        style={{ color: "#fff" }}
                      />{" "}
                      <span className="white-text"></span>
                      <a
                        className="blue-text"
                        href="tel:+91 73033 15004"
                        target="_blank"
                        title="Call Us"
                      >
                        {" "}
                        +91 73033 15004
                      </a>
                    </p>
                    <p className="mr-b-30">
                    <i class="fa fa-envelope green mr-2 mt-4 "></i>{" "}
                      <span className="white-text"></span>{" "}
                      <a
                        className="blue-text"
                        href="mailto:admin@qdspro.com"
                        target="_blank"
                        title="Email Us"
                      >
                        admin@qdspro.com
                      </a>
                      <br />
                      <i class="fa fa-envelope green mr-2 mt-4 "></i>{" "}
                      <span className="white-text"></span>{" "}   
                      <a
                        className="blue-text"
                        href="mailto:support@qdspro.com"
                        target="_blank"
                        title="Email Us"
                      >
                        support@qdspro.com
                      </a>
                    </p>
                    <p className="social-link text-center">
                      <a
                        href=" https://www.google.com/search?hl=en&source=hp&ei=LyNKYMLhA4bl9QO5vZKQBA&iflsig=AINFCbYAAAAAYEoxP4yX8LYLhYYMQyep1bcMOP39uNrw&q=QDS+Pro&oq=QDS+Pro&gs_lcp=Cgdnd3Mtd2l6EAMyCwguEMcBEK8BEJMCMgUIABDJAzICCAAyAggAMgIIADICCAAyBggAEBYQHjIGCAAQFhAeMgYIABAWEB4yBggAEBYQHjoFCAAQsQM6CAguELEDEIMBOggILhDHARCjAjoFCC4QsQM6CAgAELEDEIMBOggILhDHARCvAVDdD1i9G2CbIGgBcAB4AIABpQGIAYwHkgEDMC43mAEAoAEBqgEHZ3dzLXdperABAA&sclient=gws-wiz&ved=0ahUKEwiCtfP6s6jvAhWGcn0KHbmeBEIQ4dUDCAc&uact=5"
                        target="_blank"
                        title="Google"
                      >
                        {/* <img src="/assets/images/icon/twitter.webp"> */}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          x="0px"
                          y="0px"
                          width={31}
                          height={31}
                          viewBox="0 0 172 172"
                          style={{
                            fill: "#000000",
                            borderRadius: "50%",
                            backgroundColor: "white",
                          }}
                        >
                          <g transform="translate(43,43) scale(0.5,0.5)">
                            <g
                              fill="none"
                              fillRule="nonzero"
                              stroke="none"
                              strokeWidth={1}
                              strokeLinecap="butt"
                              strokeLinejoin="miter"
                              strokeMiterlimit={10}
                              strokeDasharray
                              strokeDashoffset={0}
                              fontFamily="none"
                              fontWeight="none"
                              fontSize="none"
                              textAnchor="none"
                              style={{ mixBlendMode: "normal" }}
                            >
                              <path
                                d="M0,172v-172h172v172z"
                                fill="none"
                                stroke="none"
                              />
                              <g
                                id="original-icon"
                                fill="#192f5a"
                                stroke="none"
                              >
                                <path d="M86.02239,17.2c-38.00627,0 -68.82239,30.8052 -68.82239,68.8c0,37.9948 30.81613,68.8 68.82239,68.8c57.39067,0 70.32032,-53.27987 64.93672,-80.26667h-7.62578h-13.00078h-44.33255v22.93333h44.36614c-5.10025,19.76997 -23.004,34.4 -44.36614,34.4c-25.32987,0 -45.86667,-20.5368 -45.86667,-45.86667c0,-25.32987 20.5368,-45.86667 45.86667,-45.86667c11.51827,0 22.01108,4.27563 30.06641,11.2875l16.29297,-16.28177c-12.23494,-11.1456 -28.48912,-17.93906 -46.33698,-17.93906z" />
                              </g>
                            </g>
                          </g>
                        </svg>
                      </a>
                      <a
                        href="https://facebook.com/qdspro"
                        target="_blank"
                        title="Facebook"
                      >
                        {/* <img src="/assets/images/icon/facebook.webp"> */}
                        <i className="fa fa-facebook circle" />
                      </a>
                      <a
                        href="https://twitter.com/qdspro"
                        target="_blank"
                        title="Twitter"
                      >
                        {/* <img src="/assets/images/icon/twitter.webp"> */}
                        <i className="fa fa-twitter circle" />
                      </a>
                    </p>
                    <p className="social-link text-center">
                      <a
                        href="https://instagram.com/qds_pro"
                        target="_blank"
                        title="Instagram"
                      >
                        {/* <img src="/assets/images/icon/insta.webp"> */}
                        <i className="fa fa-instagram circle" />
                      </a>
                      <a
                        href="https://www.youtube.com/channel/UCThSB8MetfOBMlK28t9ilXA/"
                        target="_blank"
                        title="YouTube"
                      >
                        <i className="fa fa-youtube-play circle" />
                      </a>
                      <a
                        href="https://www.linkedin.com/company/qds-pro"
                        title="LinkedIn"
                      >
                        <i class="fa fa-linkedin circle" />
                      </a>
                    </p>
                    <p className="social-link" style={{ display:"flex", justifyContent:"center", }}>
                      <a
                        href="https://in.pinterest.com/qdspro/"
                        title="Pinterest"
                      >
                        <i class="fa fa-pinterest circle" />
                      </a>
                      <a
                        href="https://www.youtube.com/channel/UCThSB8MetfOBMlK28t9ilXA/"
                        target="_blank"
                        title="Youtube"
                         style={{ visibility:"hidden" }}
                      >
                        <i className="fa fa-youtube-play circle" />
                      </a>
                       <a
                        href="https://www.youtube.com/channel/UCThSB8MetfOBMlK28t9ilXA/"
                        target="_blank"
                        title="Youtube"
                        style={{ visibility:"hidden" }}
                      >
                        <i className="fa fa-youtube-play circle" />
                      </a>
                    </p>
                  </div>
                </div>
              </div>
              <div className="contact-us-form clearfix qds-box-shadow">
                <div
                  data-aos="fade-left"
                  data-aos-delay="1000"
                  data-aos-duration="1500"
                  data-aos-easing="ease-in-linear"
                  className="form-wrapper"
                >
                  <h2 className="black-text" style={{ marginTop: 1 }}>
                    Get in Touch
                  </h2>
                  <p className="gray-text">Feel free to drop a line below!</p>
                  {isError ? (
                    <div class="alert alert-danger" role="alert">
                      Please enter valid phone number.
                    </div>
                  ) : (
                    ""
                  )}
                  <div>
                    <form
                      id="contact_form"
                      name="contact"
                      method="POST"
                      onSubmit={validateMyForm}
                      action="https://formspree.io/mlepvjvd"
                    >
                      <div className="form-group">
                        <input
                          required
                          type="text"
                          className="form-control"
                          name="name"
                          id="name"
                          placeholder="Your Name"
                        />
                      </div>
                      <div className="form-group">
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
                        <PhoneInput
                          name="mobile"
                          id="mobile_number"
                          placeholder="Mobile Number"
                          value={phoneNumber}
                          onChange={setPhoneNumber}
                        />
                      </div>
                      <div className="form-group">
                        <textarea
                          required
                          className="form-control"
                          id="exampleFormControlTextarea1"
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
                        SEND
                      </button>
                    </form>
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

export default ContactPage

