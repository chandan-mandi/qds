import React from "react";
import Link from "next/link";
import {EmailShareButton, FacebookShareButton, LinkedinShareButton, TwitterShareButton, WhatsappShareButton, PinterestShareButton} from 'react-share';
import Axios from "axios";
import Popup from "../components/Popup";
//import Appointment from '../pages/appointment'
const Footer = (props) => {
  function myNavFunc(area) {

    switch (area) {
      case 'Charni': {
        // If it's an iPhone..
        if ((navigator.platform.indexOf("iPhone") != -1)
          || (navigator.platform.indexOf("iPod") != -1)
          || (navigator.platform.indexOf("iPad") != -1))
          window.open('https://goo.gl/maps/EV7mMe1BXttgRSc3A');//"maps://www.google.com/maps/dir/?api=1&travelmode=driving&layer=traffic&destination=[YOUR_LAT],[YOUR_LNG]");
        else
          window.open('https://goo.gl/maps/EV7mMe1BXttgRSc3A')//"https://www.google.com/maps/dir/?api=1&travelmode=driving&layer=traffic&destination=[YOUR_LAT],[YOUR_LNG]");
        break;
      }
      case 'Andheri': {
        if ((navigator.platform.indexOf("iPhone") != -1)
          || (navigator.platform.indexOf("iPod") != -1)
          || (navigator.platform.indexOf("iPad") != -1))
          window.open('https://goo.gl/maps/2SrFuYQEGt18q6jx7');//"maps://www.google.com/maps/dir/?api=1&travelmode=driving&layer=traffic&destination=[YOUR_LAT],[YOUR_LNG]");
        else
          window.open('https://goo.gl/maps/2SrFuYQEGt18q6jx7')//"https://www.google.com/maps/dir/?api=1&travelmode=driving&layer=traffic&destination=[YOUR_LAT],[YOUR_LNG]");
        break;
      }
      default: break;
    }
  }

  // const shareLinkedIn = () => {


  //     let user_id;

  //     Axios.get("https://api.linkedin.com/v2/me")
  //     .then((res) => {
  //       user_id = res.id;
  //     })
  //     .catch((err) => console.log(err));

  //     Axios.post("https://api.linkedin.com/v2/ugcPosts", {

  //         "author": user_id,
  //         "lifecycleState": "PUBLISHED",
  //         "specificContent": {
  //             "com.linkedin.ugc.ShareContent": {
  //                 "shareCommentary": {
  //                     "text": "Hello World! This is my first Share on LinkedIn!"
  //                 },
  //                 "shareMediaCategory": "NONE"
  //             }
  //         },
  //         "visibility": {
  //             "com.linkedin.ugc.MemberNetworkVisibility": "PUBLIC"
  //         }
  //     })
  //     .then((res) => {
  //       console.log(res);
  //     })
  //     .catch((err) => console.log(err));

  // }

  const handleRefer = () => {

    $('#referModal').modal();

    $(window).on("scroll",function() {
      $('#referModal').modal('hide');
    });

  }
  
   const shareGmat = () => {

    $('#shareGmat').modal();

    $(window).on("scroll",function() {
      $('#shareGmat').modal('hide');
    });

  }
   
   const shareGre = () => {

    $('#shareGre').modal();

    $(window).on("scroll",function() {
      $('#shareGre').modal('hide');
    });

  }
   
   const shareCat = () => {

    $('#shareCat').modal();

    $(window).on("scroll",function() {
      $('#shareCat').modal('hide');
    });

  }
   
     const shareSat = () => {

    $('#shareSat').modal();

    $(window).on("scroll",function() {
      $('#shareSat').modal('hide');
    });

  }
     
  const shareMahcet = () => {

    $('#shareMahcet').modal();

    $(window).on("scroll",function() {
      $('#shareMahcet').modal('hide');
    });

  }

  const popular_courses = ["GMAT", "CAT", "GRE", "SAT", "MAH-CET"];

  return (
    <div className="qds-footer">
      <style>
        {`

          .s-footer-container{
            color: #fff !important;
            padding-bottom: 0rem;
            margin-bottom: 0px;
            width: 100%;
            margin-left: auto;
            margin-right: auto;
          }

          .s-contact-details-section a{
            color: #fff;
            margin: 10px;
          }
          .green{
            color: #77bf43;
          }

          
          .s-list-unstyled{
            list-style: none;
            padding: 0;
          }

          ul li{
            margin-top: 10px;
          }
          ul li a{
            color: #fff !important;
          }

          .s-quick-links-col{
            padding: 0;
          }

          .fa-mobile{
            font-size: 24px;
          }

          @media (max-width: 550px){
            .s-quick-links-col{
              padding: 15px;
            }

            .footer-logo-img{
              width: 150px;
            }
  
          }
          .link-to-apps{
            display:flex;
            max-width:180px;
            font-size:15px;
            height:65px;
            padding:7px;
            margin:5px;
            // background-color:#77bf43;
            background-color:#000;  
            border-radius:12px;
            //box-shadow:0 2px 5px #77bf43;
            transition:all 0.1s linear;
          }
          .link-to-apps:hover{
            transform:scale(95%);
          }
          .app-logo{
            min-width:45px;
            max-height:100%;
            display:flex;
            padding:0px;
            width:40px;
            height:65px;
          }
          .app-logo-play-store{
            padding-left:3px;
            padding-right:2px;
          }
          .app-logo-apple{
            padding:3%;
            min-width:45px;
            color: #fff;
          }
          .app-logo-apple img{
            width:40px;
            margin-left:4px;
          }
          .logo-item{
            align-self:center;
            max-height:50px;
            max-width:100%;
            position:relative;
            top:-5px;
          }
          .app-info{
            max-width:70%;
            //padding:13px 0px 0px 0px;
            line-height:1.1em;
            color:black;
            // background-color:#77bf43;
            background-color: #000;
            margin:-6px;
            margin-left:5px;
            border-bottom-right-radius:10px;
            border-top-right-radius:10px;
            //overflow:hidden;
            max-width:100%;
            font-weight:550;
            font-size:12px;
            color:#fff;
          }
          .app-info-online-prep{
            padding:0;
            padding-left:5px;
            padding-right:5px;
            //padding-top:10px;
          }
          .all-app-links{
            position:relative;
            display:grid;
            grid-template-columns:50% 50%;
            width:400px;
          }
          .my-class-apps{
            display:flex;
            justify-content:flex-end;
          }
          @media (max-width:768px)
          {
            .my-class-apps{
              justify-content:center;
            }
            .all-app-links{
              min-width:90vw;
            }
            .footer-four-copyright{
              padding: 0px!important
            }
          }
          .footer-row-icons-address{
            border:4px solid red;
          }

          /*New Footer Changes*/
          .footer-last-row{
            width:100vw;
            display:grid;
            grid-template-columns:18% 42% 40%;
            grid-template-rows: 60% 40%;
            grid-gap:0;
            height: 280px;
          }

          .footer-one-contact{
            grid-column:1/2;
            padding-left:20px;
            position:relative;
            top:-130px;
            max-width:100%;
            overflow-wrap:break-word;
          }
          .footer-two-address{
            grid-column:2/3;
            padding:0px;
            position:relative;
            top: -64px;
            width: 84%;
          }
          .footer-three-apps{
            grid-column:3/4;
            margin-top: 2%;
          }
          

          .all-app-links{
            width:100%;
            max-height:180px;
            margin:0;
            padding:0;
            max-width:400px;
          }

          /*Updated Footer Changes*/
          
          .s-services-col
          {
            padding-right: 3%;
            margin-right: -2%;
          }

          .s-discount-col
          {
            margin-left: 1%;
            margin-right: 2%;
          }

          .s-reach-col
          {
            margin-left: 0px;
          }

          .s-blogs-col
          {
            margin-right: 1%;
          }

          .s-course-col
          {
            margin-right: -2%;
            width:140px
          }

          .footer-four-copyright
          {
            grid-column:1/4;
            width:272px;
            position:relative;
            left: 40%;
            margin-top: -1%;
          }
          .copyright-line
          {
            text-align: center;
            position:relative;
            top:75px;
          }
          .qds-brand
          {
            //color: linear-gradient(to right, #77bf43 48%, #7ac042 66%, #83c340 78%, #93c83c 89%, #a9cf37 100%, #aacf37);
            color: #a9cf37;
            font-weight: bold;
          }
          .icons-refer
          {
            margin: 2%;
            margin-left: 5%;
            margin-right: 5%;
          }
          
          @media (max-width:1280px)
          {
            .footer-four-copyright
            {
              padding: 15px;
            }
          }

          @media (max-width:1100px)
          {
            .footer-one-contact{
              top:-180px;
            }
          }

          @media (max-width:900px)
          {
            .footer-one-contact{
              top:-12px;
            }
            .footer-one-contact{
              padding-left:0;
            }
            .social-link a{
              padding-right: 10px;
            }
            .fa-mobile{
              font-size: 18px;
            }
            .footer-two-address{

              position:unset;
             
            }
            .footer-last-row
            {
              max-height: fit-content;
            }
            .footer-four-copyright
            {
              margin-top: 0%;
            }
            .s-header-logo-subtitle{
              font-size:7px!important;
              width: auto;
              clear: left;
              padding-left: 15px;
            }
            .footer-logo img {
              width: 110px;
            }
            .qds-footer{
              font-size: 12px;
              float:left;
            }
            .col-sm-2{
              padding-left: 0;
            }
          }

          @media (max-width:768px)
          {
            .footer-last-row{
              border:none;
              grid-template-columns:30% 70%;
              grid-template-rows:60% 40%;
            }
            .footer-one-contact{
              grid-column:1/2;
              grid-row:1/2;
              //top:-400px;
              max-width:80%;
            }
            .footer-two-address{
              grid-column:1/3;
              grid-row:2/3;
              max-height:fit-content;
              padding:13px;
              max-width:100%;
              margin-top:-400px;
            }
            .footer-three-apps{
              grid-column:2/3;
              grid-row:1/2;
              max-height:180px;
              margin-top: 15%;
            }
            
            .all-app-links{
              position:unset;
             
              overflow:hidden;
              display:grid;
              grid-template-columns:50% 50%;
              max-width:100%;
              min-width:unset;
            }
            .s-discount-col
            {
              margin-left: 4%;
              margin-right: 2%;
            }
            .s-header-logo-subtitle{
              font-size:7px!important;
              width: auto;
              clear: left;
            }            
            .footer-logo img {
              width: 110px;
            }
            .qds-footer{
              font-size: 12px;
              float:left;
            }
          }

          @media (max-width:580px)
          {
            .footer-one-contact{
              position:unset;
              max-width:unset;
            }
            .s-discount-col
            {
              width:100%;
            }
          }

          @media (max-width:550px)
          {
            .footer-last-row{
              grid-template-rows:repeat(3,1fr);
              max-width:85vw;
            }
            .footer-one-contact{
              grid-row:1/2;
              grid-column:1/3;
            }
            .footer-three-apps{
              grid-row:2/3;
              grid-column:1/3;
            }
            .footer-two-address{
              grid-row:3/4;
              grid-column:1/3;
              min-width:100%;
              margin-top:-70px;
            }
          }

          @media (max-width:420px)
          {
            .app-info{
              //padding:13px 0px 0px 0px;
              padding-right: 2px;
              font-size:12px;
            }
            .app-info-online-prep{
              padding:0;
              padding-left:3px;
              padding-right:5px;
              //padding-top:10px;
              font-size:12px;
            }
          }

          @media (max-width:350px)
          {
            .app-info{
              font-size:10px;
            }
            .app-info-online-prep{
              font-size:10px;
            }
          }
          
          
     @media screen and (max-width:480px){
       .col-sm-2{
            position:relative;
        }
        .col-sm-2 a img{
            width:90px;
            position:relative;
            left:-20px;
            top: -20px;
        }

        .s-header-logo-subtitle{
            position:relative;
            top:-25px;
            left:-25px;
        }
        .footer-services{
             margin-left: 39%;
              font-size: 10px;
              margin-top: -98px;
        }

        .footer-courses{
           font-size: 11px;
    margin-top: -164px;
    position: relative;
    right: -72%;
        }
        .footer-blogs{
            display:none;
        }
        .footer-discount{
            font-size: 10px;
    margin-left: -14px;
    margin-top: -102px;
            position:relative;
            z-index:100;
            width:74px;
        }

        .footer-discount p{
            position:relative;
            top:12px;
        }
        .footer-links{
    font-size: 10px;
    margin-left: 65%;
        }

        .footer-reach{
             font-size: 10px;
    margin-top: -207px;
    margin-left: 16%;
    width: 154px;
        }

        .footer-session{
            margin-left:-42px;
        }

        .s-contact-details-section{
            font-size:10px;
            position:relative;
            top:6%;
            left:6%;
        }

        .social-link{
            display:none;
        }

        .all-app-links{
               display: flex;
    flex-direction: column;
    overflow: initial;
    margin-top: -211px;
    margin-left: 50%;
        }
        .link-to-apps{
            height: 34px;
        }

        .app-logo img {
       width: 23px;
    margin-left: 10px;
}
        .app-info{
            font-size:10px;
        }

        .footer-two-address{
    position: relative;
    top: -30px;
        }

        .footer-last-row{
            height: 406px;
        }

           .copyright-line p{
               margin-top: -43%;
    position: relative;
    right: 35%;
        }
          
        `}
      </style>
      <div className="footer-logo clearfix">
        <div className="s-footer-container">
          <div className="row">
            <div className="col-sm-2">
              <a href="/" className="footer-logo-img">
                <img src="/assets/images/qds-logo.webp" alt="QDS Pro Logo" />
              </a>
              <p
                className="s-header-logo-subtitle"
                style={{ fontSize: "13px", width: "200px" }}
              >
                A Complete Hand-Holding...!
              </p>
            </div>

            <div className="col-sm-2 pr-0 s-services-col">
              <div className="footer-services">
                <p>
                  <b>Our Services</b>
                </p>
                <ul className="s-list-unstyled">
                  <li>
                    {props.setActiveFeatureTab ? (
                      <a
                        onClick={() => props.setActiveFeatureTab(2)}
                        href="#s-services-section"
                      >
                        Live Online Tutoring
                      </a>
                    ) : (
                      <a href="#s-services-section">Live Online Tutoring</a>
                    )}
                  </li>
                  <li>
                    {props.setActiveFeatureTab ? (
                      <a
                        onClick={() => props.setActiveFeatureTab(0)}
                        href="/#s-services-section"
                      >
                        Coaching Classes
                      </a>
                    ) : (
                      <a href="/#s-services-section">Coaching Classes</a>
                    )}
                  </li>
                  <li>
                    {props.setActiveFeatureTab ? (
                      <a
                        onClick={() => props.setActiveFeatureTab(1)}
                        href="/#s-services-section"
                      >
                        Video Lectures
                      </a>
                    ) : (
                      <a href="/#s-services-section">Video Lectures</a>
                    )}
                  </li>

                  <li>
                    {props.setActiveFeatureTab ? (
                      <a
                        onClick={() => props.setActiveFeatureTab(3)}
                        href="#s-services-section"
                      >
                        Doubt Solving
                      </a>
                    ) : (
                      <a href="#s-services-section">Doubt Solving</a>
                    )}
                  </li>
                  <li>
                    {props.setActiveFeatureTab ? (
                      <a
                        onClick={() => props.setActiveFeatureTab(4)}
                        href="#s-services-section"
                      >
                        Home Tutoring
                      </a>
                    ) : (
                      <a href="#s-services-section">Home Tutoring</a>
                    )}
                  </li>
                </ul>
              </div>
            </div>

                <div className="footer-courses" style={{ paddingLeft:"23px",paddingRight:"25px", }}>
                  <b>Popular Courses</b>
                <ul className="s-list-unstyled">
                  {popular_courses.map((course) => {
                    return (
                      <Link
                        href={{
                          pathname: "/popular_courses",
                          query: { course },
                        }}
                      >
                        <li>
                          <a href="/popular_courses">{course}</a>
                        </li>
                      </Link>
                    );
                  })}
                  <li>{/* <a href="/course_poibps">Bank PO/IBPS</a> */}</li>
                  {/* <li>
                    <a href="/course_gmat">GMAT</a>
                  </li>
                  <li>
                    <a href="/course_cat">CAT</a>
                  </li>
                  <li>
                    <a href="/course_gre">GRE</a>

                  </li>
                  <li>
                    <a href="/course_sat">SAT</a>
                  </li>
                  <li>
                    <a href="/course_mahcet">MAH-CET</a>
                  </li> */}
            </ul>
            </div>
            <div className="s-discount-col " >
              <div className="footer-discount">
                <p>
                  <b>Avail Discounts</b>
                </p>
                <ul className="s-list-unstyled">
                  <li>
                    <a href="/pro_peer">
                      QDS Pro Peer
                      <br />
                      Program
                    </a>
                  </li>
                  <li>
                    <a href="/refer_and_earn">Refer and Earn</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-sm-2 s-blogs-col">
              <div className="footer-blogs">
                <p className="">
                  <a href="https://www.qdspro.com/blog/" style={{ color: '#FFF' }}>Blogs</a>
                </p>
                <ul className="s-list-unstyled">
                  <li>
                    <a href="https://www.qdspro.com/blog/what-differentiates-qds-pro-from-other-mba-coaching-classes/">
                      What differentiates QDS Pro from other MBA Coaching
                      Classes?
                    </a>
                  </li>
                  <li>
                    <a href="https://www.qdspro.com/blog/what-differentiates-qds-pro-online-tutoring-from-other-online-tutoring-service-providers-for-various-entrance-exams/">
                      What differentiates QDS Pro Online Tutoring from other
                      ...Read more
                    </a>
                  </li>
                  <li>
                    <a href="https://www.qdspro.com/blog/what-are-some-of-the-harsh-realities-of-leading-mba-entrance-exams-coaching-classes-2/">
                      What are some of the harsh realities of leading MBA
                      Entrance ...Read More
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-sm-1 s-quick-links-col ">
              <div className="footer-links">
                <p className="">
                  <b>Quick Links</b>
                </p>
                <ul className="s-list-unstyled">
                  <li>
                    <a href="/aboutus">About Us</a>
                  </li>
                  <li>
                    <a href="/contactus">Contact Us</a>
                  </li>
                  <li>
                    <a href="/faq">FAQs</a>
                  </li>
                  <li>
                    <a href="/store">Store</a>
                  </li>
                  <li>
                    <a href="/terms">Terms & Conditions</a>
                  </li>
                  <li>
                    <a href="/privacy">Privacy Policy</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="footer-reach col-sm-2 s-reach-col">
              <div>
                <p className="">
                  <b>Reach Us</b>
                </p>
                <ul className="s-list-unstyled">
                  <li>
                    <a href="https://onlineprep.qdspro.com/">
                      QDS Pro Online Prep
                    </a>
                  </li>
                  <li>
                    <a href="/enquiry">Enquiry Forms</a>
                  </li>
                  <li>
                  <button className="footer-session" data-dismiss="modal" data-toggle="modal" data-target="#democlass" 
                      style={{
                         border: "none",
                         background: "none",
                         color: "white",
                         width: "248px",
                         position: "relative",
                         left: "-15px",
                         outline: "0",
                         cursor: "pointer",
                      }} >
                  Book a Free Live Demo Session</button>
                  </li>
                   <li>
                    <a href="/book_appointment">Book an Appointment</a>
                  </li>
                  {/* <li>
                    <Link
                      href={{
                        pathname: "/appointment",
                      }}
                    >
                      <a>Book an appointment</a>
                    </Link>
                  </li> */}
                  <li>
                    <a href="/form_live_tutor">
                      Join us as a Live Online Tutor
                    </a>
                  </li>
                  <li>
                    <a href="/form_employee_intern">
                      Join us as an Intern/Employee
                    </a>
                  </li>
                  <li>
                    <a href="#referModal" onClick={handleRefer}>
                      Refer to a Friend
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="footer-last-row">
              {/* Footer Contact Section */}
              <div className="footer-one-contact">
                <div className="s-contact-details-section mt-2">
                  <p>
                    <b>Contact Details</b>
                  </p>
                  <i class="fa fa-whatsapp green mr-1"></i>
                  <a href="https://api.whatsapp.com/send?phone=919920715001" target="_blank">+91-99207 15001</a>
                  <br />
                  <i class="fa fa-mobile green mr-2"></i>
                  <a href="tel:+91 7303315003" target="_blank">+91-73033 15003</a>
                  <br />
                  <i class="fa fa-mobile green mr-2"></i>
                  <a href="tel:+91 7303315004" target="_blank">+91-73033 15004</a>
                  <br />
                  <i class="fa fa-envelope green mr-2 mt-4 "></i>
                  <a style={{ margin: 0 }} href="mailto:admin@qdspro.com">
                    admin@qdspro.com
                  </a>
                  <br />
                  <i class="fa fa-envelope green mr-2 mt-4 "></i>
                  <a style={{ margin: 0 }} href="mailto:admin@qdspro.com">
                    support@qdspro.com
                  </a>
                  <br />
                </div>
                <p className="social-link mt-4">
                  <a
                    href=" https://www.google.com/search?hl=en&source=hp&ei=LyNKYMLhA4bl9QO5vZKQBA&iflsig=AINFCbYAAAAAYEoxP4yX8LYLhYYMQyep1bcMOP39uNrw&q=QDS+Pro&oq=QDS+Pro&gs_lcp=Cgdnd3Mtd2l6EAMyCwguEMcBEK8BEJMCMgUIABDJAzICCAAyAggAMgIIADICCAAyBggAEBYQHjIGCAAQFhAeMgYIABAWEB4yBggAEBYQHjoFCAAQsQM6CAguELEDEIMBOggILhDHARCjAjoFCC4QsQM6CAgAELEDEIMBOggILhDHARCvAVDdD1i9G2CbIGgBcAB4AIABpQGIAYwHkgEDMC43mAEAoAEBqgEHZ3dzLXdperABAA&sclient=gws-wiz&ved=0ahUKEwiCtfP6s6jvAhWGcn0KHbmeBEIQ4dUDCAc&uact=5"
                    target="_blank"
                    title="Google"
                  >
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
                          <g id="original-icon" fill="#192f5a" stroke="none">
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
                    {/* <img src="assets/images/icon/facebook.webp"> */}
                    <i className="fa fa-facebook circle" />
                  </a>
                  <a
                    href="https://twitter.com/qdspro"
                    target="_blank"
                    title="Twitter"
                  >
                    {/* <img src="assets/images/icon/twitter.webp"> */}
                    <i className="fa fa-twitter circle" />
                  </a>
                </p>

                <p className="social-link mt-3">
                  <a
                    href="https://instagram.com/qds_pro"
                    target="_blank"
                    title="Instagram"
                  >
                    {/* <img src="assets/images/icon/insta.webp"> */}
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
                    target="_blank"
                    title="LinkedIn"
                  >
                    <i class="fa fa-linkedin circle" />
                  </a>
                </p>

                <p className="social-link mt-3">
                  <a href="https://in.pinterest.com/qdspro/" target="_blank" title="Pinterest">
                    <i class="fa fa-pinterest circle" />
                  </a>
                </p>
              </div>

              {/* Footer Address Section */}
              <div className="footer-two-address mt-0">
                <p style={{ cursor: "pointer" }}>
                  <a
                    onClick={() => myNavFunc("Charni")}
                    title="Click To See On Google Maps"
                  >
                    <b className="mr-1">
                      <i style={{ color: "red" }} class="fa fa-map-marker"></i>{" "}
                      Charni Road Branch :
                    </b>
                    Office No. 4, 2nd Floor, Aradhana Co-op Housing Society,
                    R.R. Marg, Near Central Plaza Cinema, Charni Road East,
                    South Mumbai, Mumbai - 400 004 (2 mins walking from Charni
                    Road Railway Station)
                  </a>
                </p>
                <p style={{ cursor: "pointer" }}>
                  <a
                    onClick={() => myNavFunc("Andheri")}
                    title="Click To See On Google Maps"
                  >
                    <b className="mr-1">
                      <i style={{ color: "red" }} class="fa fa-map-marker"></i>{" "}
                      Andheri Branch :
                    </b>
                    B/404, 4th floor, Vertex Vikas Building, Opposite Andheri
                    Metro Station, Andheri East, Mumbai - 400 069 (2 mins
                    walking from Andheri Railway Station)
                  </a>
                </p>
              </div>

              {/* Footer App Icons Section */}
              <div className="footer-three-apps my-class-apps">
                <div className="all-app-links">
                  <a
                    href="https://apps.apple.com/ec/app/qds-pro/id1451725252?l=en"
                    // className="appstore-icon"
                    target="_blank"
                    title="Get QDS Pro App on the App Store"
                  >
                    <div className="link-to-apps">
                      <div className="app-logo app-logo-apple">
                        {/*<span className="fa fa-apple fa-3x"></span>*/}
                        <img src="https://www.freepnglogos.com/uploads/apple-logo-png/apple-logo-png-transparent-svg-vector-bie-supply-29.png" alt="App Store Icon" className="mt-2 logo-item" style={{ marginLeft: "2px!important", marginBottom: "3px!important", }} /> 
                      </div>
                      <div className="app-info align-self-center">
                        Download QDS Pro App
                      </div>
                    </div>
                  </a>
                  {/* New ONline Prep Links  */}
                  <a
                    href="https://apps.apple.com/app/id1503889186"
                    // className="appstore-icon"
                    target="_blank"
                    title="Get QDS Pro Online Prep App on the App Store"
                  >
                    <div className="link-to-apps">
                      <div className="app-logo app-logo-apple">
                        {/* <span className="fa fa-apple fa-3x"></span>*/}
                         <img src="https://www.freepnglogos.com/uploads/apple-logo-png/apple-logo-png-transparent-svg-vector-bie-supply-29.png" alt="App Store Icon" className="mt-2 logo-item"  /> 
                      </div>
                      <div className="app-info app-info-online-prep align-self-center">
                        Download QDS Pro Online Prep App
                      </div>
                    </div>
                  </a>
                  <a
                    href="https://play.google.com/store/apps/details?id=com.qdspro.qdspro"
                    // className="appstore-icon mr-0 mr-lg-2 mt-3 mt-lg-0"
                    target="_blank"
                    title="Get QDS Pro App on Google Play"
                  >
                    <div className="link-to-apps link-to-apps-play-store">
                      <div className="app-logo app-logo-play-store">
                        <img
                          src="/assets/images/icon/play_store_icon.webp"
                          alt="App Store Icon"
                          className="mt-2 logo-item"
                        />
                      </div>
                      <div className="app-info app-info-play-store align-self-center">
                        Download QDS Pro App
                      </div>
                    </div>
                    {/*<img src="/assets/images/icon/Google_Play.svg" alt="Google Play Icon" width="200px" className="mt-2" />*/}
                  </a>
                  <a
                    href="https://play.google.com/store/apps/details?id=com.qdspro.courses"
                    // className="appstore-icon mr-0 mt-lg-0"
                    target="_blank"
                    title="Get QDS Pro Online Prep App on Google Play"
                  >
                    <div className="link-to-apps link-to-apps-play-store">
                      <div className="app-logo app-logo-play-store">
                        <img
                          src="/assets/images/icon/play_store_icon.webp"
                          alt="App Store Icon"
                          className="mt-2 logo-item"
                        />
                      </div>
                      <div className="app-info app-info-play-store app-info-online-prep align-self-center">
                        Download QDS Pro Online Prep App
                      </div>
                    </div>
                    {/*<img src="/assets/images/icon/Google_Play.svg" alt="Google Play Icon" width="200px" className="mt-2" />*/}
                  </a>
                </div>
              </div>
              <div className="footer-four-copyright">
                <div className="copyright-line">
                  <p>
                    &#169; 2021 <span className="qds-brand">QDS Pro</span>, All
                    Rights Reserved.
                  </p>
                </div>
              </div>
            </div>

            <div class="modal fade" id="referModal" role="dialog">
              <div class="modal-dialog">
                <div class="modal-content" style={{ alignItems: "center", }}>
                  <div
                    class="modal-header"
                    style={{
                      backgroundColor: "#213247",
                           width: "655px",
                    }}
                  >
                    <p class="modal-title">Refer to a Friend</p>
                    <button
                      style={{
                        color: "#77bf43",
                        textShadow: "none",
                        opacity: "1",
                        display:"contents"     
                      }}
                      type="button"
                      class="close"
                      data-dismiss="modal"
                    >
                      &times;
                    </button>
                  </div>
                  <div
                    class="modal-body text-center"
                    style={{
                      backgroundColor: "#213247",
                           width:"655px",
                    }}
                  >
                    <WhatsappShareButton
                      className="icons-refer"
                      url="www.qdspro.com"
                      title="Honestly speaking, preparation journey at QDS Pro has been a life changing experience for me. I loved it all and I believe you will love it too, hence please check out www.qdspro.com, its one stop shop for all the entrance exams preparation related needs!"
                    >
                      <a title="Whatsapp" href="#">
                        <i
                          className="icons fa fa-whatsapp"
                          style={{
                            backgroundColor: "rgb(77, 194, 71)",
                            color: "#fff",
                          }}
                        ></i>
                      </a>
                    </WhatsappShareButton>

                    <FacebookShareButton
                      className="icons-refer"
                      url={"www.qdspro.com"}
                      quote={
                        "Honestly speaking, preparation journey at QDS Pro has been a life changing experience for me. I loved it all and I believe you will love it too, hence please check out www.qdspro.com, its one stop shop for all the entrance exams preparation related needs!"
                      }
                    >
                      <a title="Facebook" href="#">
                        <i
                          className="icons fa fa-facebook"
                          style={{
                            backgroundColor: "rgb(59, 89, 152)",
                            color: "#fff",
                          }}
                        ></i>
                      </a>
                    </FacebookShareButton>
                    
                    <TwitterShareButton
                      className="icons-refer"
                      url={"www.qdspro.com"}
                      title={
                        "Honestly speaking, preparation journey at QDS Pro has been a life changing experience for me. I loved it all and I believe you will love it too, hence please check out www.qdspro.com, its one stop shop for all the entrance exams preparation related needs!"
                      }
                    >
                      <a title="Twitter" href="#">
                        <i
                          className="icons fa fa-twitter"
                          style={{
                            backgroundColor: "rgb(29, 161, 242)",
                            color: "#fff",
                          }}
                        ></i>
                      </a>
                    </TwitterShareButton>

                    {/* <a title="Instagram" className="icons-refer" href="https://www.instagram.com/qds_pro/"><i className="icons fa fa-instagram" style={{backgroundColor:'#f11061',color:'#fff'}}></i></a> */}

                     <LinkedinShareButton
                        className="icons-refer"
                        title="QDS Pro"
                        url="www.qdspro.com"
                        summary="Honestly speaking, preparation journey at QDS Pro has been a life changing experience for me. I loved it all and I believe you will love it too, hence please check out www.qdspro.com, its one stop shop for all the entrance exams preparation related needs!">

                        <a title="LinkedIn" href="#" ><i className="icons fa fa-linkedin" style={{backgroundColor:'rgb(0, 119, 181)',color:'#fff'}}></i></a>

                      </LinkedinShareButton>

                    <EmailShareButton
                      className="icons-refer"
                      url="www.qdspro.com"
                      subject="QDS Pro"
                      body="Honestly speaking, preparation journey at QDS Pro has been a life changing experience for me. I loved it all and I believe you will love it too, hence please check out www.qdspro.com, its one stop shop for all the entrance exams preparation related needs!"
                    >
                      <a title="Email" href="#">
                        <i
                          className="icons fa fa-envelope"
                          style={{
                            backgroundColor: "rgb(132, 132, 132)",
                            color: "#fff",
                          }}
                        ></i>
                      </a>
                    </EmailShareButton>
                      <PinterestShareButton
                        className="icons-refer"
                        title="QDS Pro"
                        url={"www.qdspro.com"}
                        media="/assets/images/logo-2.png"
                        description="Honestly speaking, preparation journey at QDS Pro has been a life changing experience for me. I loved it all and I believe you will love it too, hence please check out www.qdspro.com, its one stop shop for all the entrance exams preparation related needs!">

                        <a title="Pinterest" href="#" ><i className="icons fa fa-pinterest" style={{backgroundColor:'rgb(203, 32, 39)',color:'#fff'}}></i></a>

                      </PinterestShareButton>
                  </div>
                </div>
              </div>
            </div>

            <div class="modal fade" id="shareGmat" role="dialog">
              <div class="modal-dialog">
                <div class="modal-content" style={{ alignItems: "center", }}>
                  <div
                    class="modal-header"
                    style={{
                      backgroundColor: "#213247",
                           width: "655px",
                    }}
                  >
                    <p class="modal-title">Refer to a Friend</p>
                    <button
                      style={{
                        color: "#77bf43",
                        textShadow: "none",
                        opacity: "1",
                        display:"contents",     
                      }}
                      type="button"
                      class="close"
                      data-dismiss="modal"
                    >
                      &times;
                    </button>
                  </div>
                  <div
                    class="modal-body text-center"
                    style={{
                      backgroundColor: "#213247",
                           width:"655px",
                    }}
                  >
                    <WhatsappShareButton
                      className="icons-refer"
                      url="https://www.qdspro.com/popular_courses?course=GMAT"
                      title="Gmat Honestly speaking, preparation journey at QDS Pro has been a life changing experience for me. I loved it all and I believe you will love it too, hence please check out www.qdspro.com, its one stop shop for all the entrance exams preparation related needs!"
                    >
                      <a title="Whatsapp" href="#">
                        <i
                          className="icons fa fa-whatsapp"
                          style={{
                            backgroundColor: "rgb(77, 194, 71)",
                            color: "#fff",
                          }}
                        ></i>
                      </a>
                    </WhatsappShareButton>

                    <FacebookShareButton
                      className="icons-refer"
                      url={"https://www.qdspro.com/popular_courses?course=GMAT"}
                      quote={
                        "Honestly speaking, preparation journey at QDS Pro has been a life changing experience for me. I loved it all and I believe you will love it too, hence please check out www.qdspro.com, its one stop shop for all the entrance exams preparation related needs!"
                      }
                    >
                      <a title="Facebook" href="#">
                        <i
                          className="icons fa fa-facebook"
                          style={{
                            backgroundColor: "rgb(59, 89, 152)",
                            color: "#fff",
                          }}
                        ></i>
                      </a>
                    </FacebookShareButton>
                    
                    <TwitterShareButton
                      className="icons-refer"
                      url={"https://www.qdspro.com/popular_courses?course=GMAT"}
                      title={
                        "Honestly speaking, preparation journey at QDS Pro has been a life changing experience for me. I loved it all and I believe you will love it too, hence please check out www.qdspro.com, its one stop shop for all the entrance exams preparation related needs!"
                      }
                    >
                      <a title="Twitter" href="#">
                        <i
                          className="icons fa fa-twitter"
                          style={{
                            backgroundColor: "rgb(29, 161, 242)",
                            color: "#fff",
                          }}
                        ></i>
                      </a>
                    </TwitterShareButton>

                    {/* <a title="Instagram" className="icons-refer" href="https://www.instagram.com/qds_pro/"><i className="icons fa fa-instagram" style={{backgroundColor:'#f11061',color:'#fff'}}></i></a> */}

                     <LinkedinShareButton
                        className="icons-refer"
                        title="QDS Pro"
                        url="https://www.qdspro.com/popular_courses?course=GMAT"
                        summary="Honestly speaking, preparation journey at QDS Pro has been a life changing experience for me. I loved it all and I believe you will love it too, hence please check out www.qdspro.com, its one stop shop for all the entrance exams preparation related needs!">

                        <a title="LinkedIn" href="#" ><i className="icons fa fa-linkedin" style={{backgroundColor:'rgb(0, 119, 181)',color:'#fff'}}></i></a>

                      </LinkedinShareButton>

                    <EmailShareButton
                      className="icons-refer"
                      url="https://www.qdspro.com/popular_courses?course=GMAT"
                      subject="QDS Pro"
                      body="Honestly speaking, preparation journey at QDS Pro has been a life changing experience for me. I loved it all and I believe you will love it too, hence please check out www.qdspro.com, its one stop shop for all the entrance exams preparation related needs!"
                    >
                      <a title="Email" href="#">
                        <i
                          className="icons fa fa-envelope"
                          style={{
                            backgroundColor: "rgb(132, 132, 132)",
                            color: "#fff",
                          }}
                        ></i>
                      </a>
                    </EmailShareButton>
                      <PinterestShareButton
                        className="icons-refer"
                        title="QDS Pro"
                        url={"https://www.qdspro.com/popular_courses?course=GMAT"}
                        media="/assets/images/logo-2.png"
                        description="Honestly speaking, preparation journey at QDS Pro has been a life changing experience for me. I loved it all and I believe you will love it too, hence please check out www.qdspro.com, its one stop shop for all the entrance exams preparation related needs!">

                        <a title="Pinterest" href="#" ><i className="icons fa fa-pinterest" style={{backgroundColor:'rgb(203, 32, 39)',color:'#fff'}}></i></a>

                      </PinterestShareButton>
                       
                  </div>
                </div>
              </div>
            </div>
            
              <div class="modal fade" id="shareGre" role="dialog">
              <div class="modal-dialog">
                <div class="modal-content" style={{ alignItems: "center", }}>
                  <div
                    class="modal-header"
                    style={{
                      backgroundColor: "#213247",
                           width: "655px",
                    }}
                  >
                    <p class="modal-title">Refer to a Friend</p>
                    <button
                      style={{
                        color: "#77bf43",
                        textShadow: "none",
                        opacity: "1",
                        display:"contents",     
                      }}
                      type="button"
                      class="close"
                      data-dismiss="modal"
                    >
                      &times;
                    </button>
                  </div>
                  <div
                    class="modal-body text-center"
                    style={{
                      backgroundColor: "#213247",
                           width:"655px",
                    }}
                  >
                    <WhatsappShareButton
                      className="icons-refer"
                      url="https://www.qdspro.com/popular_courses?course=GMAT"
                      title="Gre Honestly speaking, preparation journey at QDS Pro has been a life changing experience for me. I loved it all and I believe you will love it too, hence please check out www.qdspro.com, its one stop shop for all the entrance exams preparation related needs!"
                    >
                      <a title="Whatsapp" href="#">
                        <i
                          className="icons fa fa-whatsapp"
                          style={{
                            backgroundColor: "rgb(77, 194, 71)",
                            color: "#fff",
                          }}
                        ></i>
                      </a>
                    </WhatsappShareButton>

                    <FacebookShareButton
                      className="icons-refer"
                      url={"https://www.qdspro.com/popular_courses?course=GMAT"}
                      quote={
                        "Honestly speaking, preparation journey at QDS Pro has been a life changing experience for me. I loved it all and I believe you will love it too, hence please check out www.qdspro.com, its one stop shop for all the entrance exams preparation related needs!"
                      }
                    >
                      <a title="Facebook" href="#">
                        <i
                          className="icons fa fa-facebook"
                          style={{
                            backgroundColor: "rgb(59, 89, 152)",
                            color: "#fff",
                          }}
                        ></i>
                      </a>
                    </FacebookShareButton>
                    
                    <TwitterShareButton
                      className="icons-refer"
                      url={"https://www.qdspro.com/popular_courses?course=GMAT"}
                      title={
                        "Honestly speaking, preparation journey at QDS Pro has been a life changing experience for me. I loved it all and I believe you will love it too, hence please check out www.qdspro.com, its one stop shop for all the entrance exams preparation related needs!"
                      }
                    >
                      <a title="Twitter" href="#">
                        <i
                          className="icons fa fa-twitter"
                          style={{
                            backgroundColor: "rgb(29, 161, 242)",
                            color: "#fff",
                          }}
                        ></i>
                      </a>
                    </TwitterShareButton>

                    {/* <a title="Instagram" className="icons-refer" href="https://www.instagram.com/qds_pro/"><i className="icons fa fa-instagram" style={{backgroundColor:'#f11061',color:'#fff'}}></i></a> */}

                     <LinkedinShareButton
                        className="icons-refer"
                        title="QDS Pro"
                        url="https://www.qdspro.com/popular_courses?course=GMAT"
                        summary="Honestly speaking, preparation journey at QDS Pro has been a life changing experience for me. I loved it all and I believe you will love it too, hence please check out www.qdspro.com, its one stop shop for all the entrance exams preparation related needs!">

                        <a title="LinkedIn" href="#" ><i className="icons fa fa-linkedin" style={{backgroundColor:'rgb(0, 119, 181)',color:'#fff'}}></i></a>

                      </LinkedinShareButton>

                    <EmailShareButton
                      className="icons-refer"
                      url="https://www.qdspro.com/popular_courses?course=GMAT"
                      subject="QDS Pro"
                      body="Honestly speaking, preparation journey at QDS Pro has been a life changing experience for me. I loved it all and I believe you will love it too, hence please check out www.qdspro.com, its one stop shop for all the entrance exams preparation related needs!"
                    >
                      <a title="Email" href="#">
                        <i
                          className="icons fa fa-envelope"
                          style={{
                            backgroundColor: "rgb(132, 132, 132)",
                            color: "#fff",
                          }}
                        ></i>
                      </a>
                    </EmailShareButton>
                      <PinterestShareButton
                        className="icons-refer"
                        title="QDS Pro"
                        url={"https://www.qdspro.com/popular_courses?course=GMAT"}
                        media="/assets/images/logo-2.png"
                        description="Honestly speaking, preparation journey at QDS Pro has been a life changing experience for me. I loved it all and I believe you will love it too, hence please check out www.qdspro.com, its one stop shop for all the entrance exams preparation related needs!">

                        <a title="Pinterest" href="#" ><i className="icons fa fa-pinterest" style={{backgroundColor:'rgb(203, 32, 39)',color:'#fff'}}></i></a>

                      </PinterestShareButton>
                       
                  </div>
                </div>
              </div>
            </div>

 <div class="modal fade" id="shareCat" role="dialog">
              <div class="modal-dialog">
                <div class="modal-content" style={{ alignItems: "center", }}>
                  <div
                    class="modal-header"
                    style={{
                      backgroundColor: "#213247",
                           width: "655px",
                    }}
                  >
                    <p class="modal-title">Refer to a Friend</p>
                    <button
                      style={{
                        color: "#77bf43",
                        textShadow: "none",
                        opacity: "1",
                        display:"contents",     
                      }}
                      type="button"
                      class="close"
                      data-dismiss="modal"
                    >
                      &times;
                    </button>
                  </div>
                  <div
                    class="modal-body text-center"
                    style={{
                      backgroundColor: "#213247",
                           width:"655px",
                    }}
                  >
                    <WhatsappShareButton
                      className="icons-refer"
                      url="https://www.qdspro.com/popular_courses?course=GMAT"
                      title="Cat Honestly speaking, preparation journey at QDS Pro has been a life changing experience for me. I loved it all and I believe you will love it too, hence please check out www.qdspro.com, its one stop shop for all the entrance exams preparation related needs!"
                    >
                      <a title="Whatsapp" href="#">
                        <i
                          className="icons fa fa-whatsapp"
                          style={{
                            backgroundColor: "rgb(77, 194, 71)",
                            color: "#fff",
                          }}
                        ></i>
                      </a>
                    </WhatsappShareButton>

                    <FacebookShareButton
                      className="icons-refer"
                      url={"https://www.qdspro.com/popular_courses?course=GMAT"}
                      quote={
                        "Honestly speaking, preparation journey at QDS Pro has been a life changing experience for me. I loved it all and I believe you will love it too, hence please check out www.qdspro.com, its one stop shop for all the entrance exams preparation related needs!"
                      }
                    >
                      <a title="Facebook" href="#">
                        <i
                          className="icons fa fa-facebook"
                          style={{
                            backgroundColor: "rgb(59, 89, 152)",
                            color: "#fff",
                          }}
                        ></i>
                      </a>
                    </FacebookShareButton>
                    
                    <TwitterShareButton
                      className="icons-refer"
                      url={"https://www.qdspro.com/popular_courses?course=GMAT"}
                      title={
                        "Honestly speaking, preparation journey at QDS Pro has been a life changing experience for me. I loved it all and I believe you will love it too, hence please check out www.qdspro.com, its one stop shop for all the entrance exams preparation related needs!"
                      }
                    >
                      <a title="Twitter" href="#">
                        <i
                          className="icons fa fa-twitter"
                          style={{
                            backgroundColor: "rgb(29, 161, 242)",
                            color: "#fff",
                          }}
                        ></i>
                      </a>
                    </TwitterShareButton>

                    {/* <a title="Instagram" className="icons-refer" href="https://www.instagram.com/qds_pro/"><i className="icons fa fa-instagram" style={{backgroundColor:'#f11061',color:'#fff'}}></i></a> */}

                     <LinkedinShareButton
                        className="icons-refer"
                        title="QDS Pro"
                        url="https://www.qdspro.com/popular_courses?course=GMAT"
                        summary="Honestly speaking, preparation journey at QDS Pro has been a life changing experience for me. I loved it all and I believe you will love it too, hence please check out www.qdspro.com, its one stop shop for all the entrance exams preparation related needs!">

                        <a title="LinkedIn" href="#" ><i className="icons fa fa-linkedin" style={{backgroundColor:'rgb(0, 119, 181)',color:'#fff'}}></i></a>

                      </LinkedinShareButton>

                    <EmailShareButton
                      className="icons-refer"
                      url="https://www.qdspro.com/popular_courses?course=GMAT"
                      subject="QDS Pro"
                      body="Honestly speaking, preparation journey at QDS Pro has been a life changing experience for me. I loved it all and I believe you will love it too, hence please check out www.qdspro.com, its one stop shop for all the entrance exams preparation related needs!"
                    >
                      <a title="Email" href="#">
                        <i
                          className="icons fa fa-envelope"
                          style={{
                            backgroundColor: "rgb(132, 132, 132)",
                            color: "#fff",
                          }}
                        ></i>
                      </a>
                    </EmailShareButton>
                      <PinterestShareButton
                        className="icons-refer"
                        title="QDS Pro"
                        url={"https://www.qdspro.com/popular_courses?course=GMAT"}
                        media="/assets/images/logo-2.png"
                        description="Honestly speaking, preparation journey at QDS Pro has been a life changing experience for me. I loved it all and I believe you will love it too, hence please check out www.qdspro.com, its one stop shop for all the entrance exams preparation related needs!">

                        <a title="Pinterest" href="#" ><i className="icons fa fa-pinterest" style={{backgroundColor:'rgb(203, 32, 39)',color:'#fff'}}></i></a>

                      </PinterestShareButton>
                       
                  </div>
                </div>
              </div>
            </div>
            
              <div class="modal fade" id="shareSat" role="dialog">
              <div class="modal-dialog">
                <div class="modal-content" style={{ alignItems: "center", }}>
                  <div
                    class="modal-header"
                    style={{
                      backgroundColor: "#213247",
                           width: "655px",
                    }}
                  >
                    <p class="modal-title">Refer to a Friend</p>
                    <button
                      style={{
                        color: "#77bf43",
                        textShadow: "none",
                        opacity: "1",
                        display:"contents",     
                      }}
                      type="button"
                      class="close"
                      data-dismiss="modal"
                    >
                      &times;
                    </button>
                  </div>
                  <div
                    class="modal-body text-center"
                    style={{
                      backgroundColor: "#213247",
                           width:"655px",
                    }}
                  >
                    <WhatsappShareButton
                      className="icons-refer"
                      url="https://www.qdspro.com/popular_courses?course=GMAT"
                      title="Sat Honestly speaking, preparation journey at QDS Pro has been a life changing experience for me. I loved it all and I believe you will love it too, hence please check out www.qdspro.com, its one stop shop for all the entrance exams preparation related needs!"
                    >
                      <a title="Whatsapp" href="#">
                        <i
                          className="icons fa fa-whatsapp"
                          style={{
                            backgroundColor: "rgb(77, 194, 71)",
                            color: "#fff",
                          }}
                        ></i>
                      </a>
                    </WhatsappShareButton>

                    <FacebookShareButton
                      className="icons-refer"
                      url={"https://www.qdspro.com/popular_courses?course=GMAT"}
                      quote={
                        "Honestly speaking, preparation journey at QDS Pro has been a life changing experience for me. I loved it all and I believe you will love it too, hence please check out www.qdspro.com, its one stop shop for all the entrance exams preparation related needs!"
                      }
                    >
                      <a title="Facebook" href="#">
                        <i
                          className="icons fa fa-facebook"
                          style={{
                            backgroundColor: "rgb(59, 89, 152)",
                            color: "#fff",
                          }}
                        ></i>
                      </a>
                    </FacebookShareButton>
                    
                    <TwitterShareButton
                      className="icons-refer"
                      url={"https://www.qdspro.com/popular_courses?course=GMAT"}
                      title={
                        "Honestly speaking, preparation journey at QDS Pro has been a life changing experience for me. I loved it all and I believe you will love it too, hence please check out www.qdspro.com, its one stop shop for all the entrance exams preparation related needs!"
                      }
                    >
                      <a title="Twitter" href="#">
                        <i
                          className="icons fa fa-twitter"
                          style={{
                            backgroundColor: "rgb(29, 161, 242)",
                            color: "#fff",
                          }}
                        ></i>
                      </a>
                    </TwitterShareButton>

                    {/* <a title="Instagram" className="icons-refer" href="https://www.instagram.com/qds_pro/"><i className="icons fa fa-instagram" style={{backgroundColor:'#f11061',color:'#fff'}}></i></a> */}

                     <LinkedinShareButton
                        className="icons-refer"
                        title="QDS Pro"
                        url="https://www.qdspro.com/popular_courses?course=GMAT"
                        summary="Honestly speaking, preparation journey at QDS Pro has been a life changing experience for me. I loved it all and I believe you will love it too, hence please check out www.qdspro.com, its one stop shop for all the entrance exams preparation related needs!">

                        <a title="LinkedIn" href="#" ><i className="icons fa fa-linkedin" style={{backgroundColor:'rgb(0, 119, 181)',color:'#fff'}}></i></a>

                      </LinkedinShareButton>

                    <EmailShareButton
                      className="icons-refer"
                      url="https://www.qdspro.com/popular_courses?course=GMAT"
                      subject="QDS Pro"
                      body="Honestly speaking, preparation journey at QDS Pro has been a life changing experience for me. I loved it all and I believe you will love it too, hence please check out www.qdspro.com, its one stop shop for all the entrance exams preparation related needs!"
                    >
                      <a title="Email" href="#">
                        <i
                          className="icons fa fa-envelope"
                          style={{
                            backgroundColor: "rgb(132, 132, 132)",
                            color: "#fff",
                          }}
                        ></i>
                      </a>
                    </EmailShareButton>
                      <PinterestShareButton
                        className="icons-refer"
                        title="QDS Pro"
                        url={"https://www.qdspro.com/popular_courses?course=GMAT"}
                        media="/assets/images/logo-2.png"
                        description="Honestly speaking, preparation journey at QDS Pro has been a life changing experience for me. I loved it all and I believe you will love it too, hence please check out www.qdspro.com, its one stop shop for all the entrance exams preparation related needs!">

                        <a title="Pinterest" href="#" ><i className="icons fa fa-pinterest" style={{backgroundColor:'rgb(203, 32, 39)',color:'#fff'}}></i></a>

                      </PinterestShareButton>
                       
                  </div>
                </div>
              </div>
            </div>
             
             <div class="modal fade" id="shareMahcet" role="dialog">
              <div class="modal-dialog">
                <div class="modal-content" style={{ alignItems: "center", }}>
                  <div
                    class="modal-header"
                    style={{
                      backgroundColor: "#213247",
                           width: "655px",
                    }}
                  >
                    <p class="modal-title">Refer to a Friend</p>
                    <button
                      style={{
                        color: "#77bf43",
                        textShadow: "none",
                        opacity: "1",
                        display:"contents",     
                      }}
                      type="button"
                      class="close"
                      data-dismiss="modal"
                    >
                      &times;
                    </button>
                  </div>
                  <div
                    class="modal-body text-center"
                    style={{
                      backgroundColor: "#213247",
                           width:"655px",
                    }}
                  >
                    <WhatsappShareButton
                      className="icons-refer"
                      url="https://www.qdspro.com/popular_courses?course=GMAT"
                      title="Mahcet Honestly speaking, preparation journey at QDS Pro has been a life changing experience for me. I loved it all and I believe you will love it too, hence please check out www.qdspro.com, its one stop shop for all the entrance exams preparation related needs!"
                    >
                      <a title="Whatsapp" href="#">
                        <i
                          className="icons fa fa-whatsapp"
                          style={{
                            backgroundColor: "rgb(77, 194, 71)",
                            color: "#fff",
                          }}
                        ></i>
                      </a>
                    </WhatsappShareButton>

                    <FacebookShareButton
                      className="icons-refer"
                      url={"https://www.qdspro.com/popular_courses?course=GMAT"}
                      quote={
                        "Honestly speaking, preparation journey at QDS Pro has been a life changing experience for me. I loved it all and I believe you will love it too, hence please check out www.qdspro.com, its one stop shop for all the entrance exams preparation related needs!"
                      }
                    >
                      <a title="Facebook" href="#">
                        <i
                          className="icons fa fa-facebook"
                          style={{
                            backgroundColor: "rgb(59, 89, 152)",
                            color: "#fff",
                          }}
                        ></i>
                      </a>
                    </FacebookShareButton>
                    
                    <TwitterShareButton
                      className="icons-refer"
                      url={"https://www.qdspro.com/popular_courses?course=GMAT"}
                      title={
                        "Honestly speaking, preparation journey at QDS Pro has been a life changing experience for me. I loved it all and I believe you will love it too, hence please check out www.qdspro.com, its one stop shop for all the entrance exams preparation related needs!"
                      }
                    >
                      <a title="Twitter" href="#">
                        <i
                          className="icons fa fa-twitter"
                          style={{
                            backgroundColor: "rgb(29, 161, 242)",
                            color: "#fff",
                          }}
                        ></i>
                      </a>
                    </TwitterShareButton>

                    {/* <a title="Instagram" className="icons-refer" href="https://www.instagram.com/qds_pro/"><i className="icons fa fa-instagram" style={{backgroundColor:'#f11061',color:'#fff'}}></i></a> */}

                     <LinkedinShareButton
                        className="icons-refer"
                        title="QDS Pro"
                        url="https://www.qdspro.com/popular_courses?course=GMAT"
                        summary="Honestly speaking, preparation journey at QDS Pro has been a life changing experience for me. I loved it all and I believe you will love it too, hence please check out www.qdspro.com, its one stop shop for all the entrance exams preparation related needs!">

                        <a title="LinkedIn" href="#" ><i className="icons fa fa-linkedin" style={{backgroundColor:'rgb(0, 119, 181)',color:'#fff'}}></i></a>

                      </LinkedinShareButton>

                    <EmailShareButton
                      className="icons-refer"
                      url="https://www.qdspro.com/popular_courses?course=GMAT"
                      subject="QDS Pro"
                      body="Honestly speaking, preparation journey at QDS Pro has been a life changing experience for me. I loved it all and I believe you will love it too, hence please check out www.qdspro.com, its one stop shop for all the entrance exams preparation related needs!"
                    >
                      <a title="Email" href="#">
                        <i
                          className="icons fa fa-envelope"
                          style={{
                            backgroundColor: "rgb(132, 132, 132)",
                            color: "#fff",
                          }}
                        ></i>
                      </a>
                    </EmailShareButton>
                      <PinterestShareButton
                        className="icons-refer"
                        title="QDS Pro"
                        url={"https://www.qdspro.com/popular_courses?course=GMAT"}
                        media="/assets/images/logo-2.png"
                        description="Honestly speaking, preparation journey at QDS Pro has been a life changing experience for me. I loved it all and I believe you will love it too, hence please check out www.qdspro.com, its one stop shop for all the entrance exams preparation related needs!">

                        <a title="Pinterest" href="#" ><i className="icons fa fa-pinterest" style={{backgroundColor:'rgb(203, 32, 39)',color:'#fff'}}></i></a>

                      </PinterestShareButton>
                       
                  </div>
                </div>
              </div>
            </div>

            {/* ACTUAL FOOTER ITEMS ARE HERE */}
            {/*<div className="row footer-row-icons-address">
            <div className="col-sm-12 my-class-apps">
              <div className="all-app-links">
                <a
                  href="https://apps.apple.com/ec/app/qds-pro/id1451725252?l=en"
                  // className="appstore-icon"
                  target="_blank"
                  title="Get QDS Pro App on the App Store"
                >
                  <div className="link-to-apps">
                    <div className="app-logo app-logo-apple">
                        <img src="/assets/images/icon/apple_icon.webp" alt="App Store Icon" className="mt-2 logo-item" />
                    </div>
                    <div className="app-info">
                        Download QDS Pro App
                    </div>
                  </div>
                </a>
                {/* New ONline Prep Links  *
                <a
                  href="https://apps.apple.com/app/id1503889186"
                  // className="appstore-icon"
                  target="_blank"
                  title="Get QDS Pro Online Prep App on the App Store"
                >
                  <div className="link-to-apps">
                    <div className="app-logo app-logo-apple">
                        <img src="/assets/images/icon/apple_icon.webp" alt="App Store Icon" className="mt-2 logo-item" />
                    </div>
                    <div className="app-info app-info-online-prep">
                        Download QDS Pro Online Prep App
                    </div>
                  </div>
                </a>
                <a
                  href="https://play.google.com/store/apps/details?id=com.qdspro.qdspro"
                  // className="appstore-icon mr-0 mr-lg-2 mt-3 mt-lg-0"
                  target="_blank"
                  title="Get QDS Pro App on Google Play"
                >
                  <div className="link-to-apps link-to-apps-play-store">
                    <div className="app-logo app-logo-play-store">
                        <img src="/assets/images/icon/play_store_icon.webp" alt="App Store Icon" className="mt-2 logo-item" />
                    </div>
                    <div className="app-info app-info-play-store">
                        Download QDS Pro App
                    </div>
                  </div>
                  {/*<img src="/assets/images/icon/Google_Play.svg" alt="Google Play Icon" width="200px" className="mt-2" />*
                </a>
                <a
                  href="https://play.google.com/store/apps/details?id=com.qdspro.courses"
                  // className="appstore-icon mr-0 mt-lg-0"
                  target="_blank"
                  title="Get QDS Pro Online Prep App on Google Play"
                >
                  <div className="link-to-apps link-to-apps-play-store">
                    <div className="app-logo app-logo-play-store">
                        <img src="/assets/images/icon/play_store_icon.webp" alt="App Store Icon" className="mt-2 logo-item" />
                    </div>
                    <div className="app-info app-info-play-store app-info-online-prep">
                        Download QDS Pro Online Prep App
                    </div>
                  </div>
                  {/*<img src="/assets/images/icon/Google_Play.svg" alt="Google Play Icon" width="200px" className="mt-2" />*
                </a>
                </div>
                </div>

            <div className="col-sm-12 mt-3">
              <p style={{cursor:'pointer'}}>
                <a onClick={() => myNavFunc('Charni')} title="Click To See On Google Maps">
                <b className="mr-2" >
                  <i style={{ color: 'red' }} class="fa fa-map-marker"></i> Charni Road Branch :
                </b>
                Office No. 4, 2nd Floor, Aradhana Co-op Housing Society, R.R. Marg, Near Central Plaza Cinema, Charni Road East, South Mumbai, Mumbai - 400 004 (2 mins walking from Charni Road Railway Station)
                </a>
              </p>
              <p style={{cursor:'pointer'}}>
                <a onClick={() => myNavFunc('Andheri')} title="Click To See On Google Maps">
                <b className="mr-2">
                  <i style={{ color: 'red' }}  class="fa fa-map-marker"></i> Andheri Branch :
                </b>
                B/404, 4th floor, Vertex Vikas Building, Opposite Andheri Metro Station, Andheri East, Mumbai - 400 069 (2 mins walking from Andheri Railway Station)
                </a>
              </p>
            </div>
                </div>*/}
          </div>
        </div>
      </div>
    </div>
  );
}



export default Footer;
















// function Footer1() {
//   return (
//     <div className="qds-footer">
//       <div className="footer-logo clearfix">
//         <a href="index.html" className="footer-logo-img">
//           <img src="assets/images/qds-logo.webp" />
//         </a>
//         {/* <a
//           href="https://apps.apple.com/ec/app/qds-pro/id1451725252?l=en"
//           className="appstore-icon"
//           target="_blank"
//           title="Get App on the App Store"
//         >
//           <img src="assets/images/icon/app_store_icon.webp" />
//         </a>
//         <a
//           href="https://play.google.com/store/apps/details?id=com.qdspro.qdspro"
//           className="appstore-icon mr-0 mr-lg-2 mt-3 mt-lg-0"
//           target="_blank"
//           title="Get App on Google Play"
//         >
//           <img src="assets/images/icon/Google_Play.svg" />
//         </a> */}
//       </div>
//       <div>
//         <div className="row">
//           <div className="col-lg-6 no-padding-mobile">
//             <style>{`
// 				.address {
//           color: white;
// 				}
//             `}
//             </style>
//             <p style={{ float: 'left', marginRight: '20px', padding: '10px' }} className="address">
//               QDS Pro Coaching Classes
//               <br />
//               Office No. 24, 2nd Floor,
//               <br />
//               Aradhana Co-op Housing Society,
//               <br />
//               R.R. Marg, Near Central Plaza Cinema,
//               <br />
//               Charni Road East, South Mumbai,
//               <br />
//               Mumbai - 400 004
//               <br />
//               (2 mins walking from Charni Road Railway Station)
//             </p>
//             <p className="address">
//               QDS Pro Coaching Classes
//               <br />
//               B/404, 4th floor,
//               <br />
//               Vertex Vikas Building,
//               <br />
//               Opposite Andheri Metro Station,
//               <br />
//               Andheri East,
//               <br />
//               Mumbai - 400069
//               <br />
//               (2 mins walking from Andheri Railway Station)
//               <br />
//             </p>
//             <p>
//               <img src="assets/images/icon/mobile.webp" />
//               <span className="white-text">Phone:</span>
//               <a
//                 className="blue-text"
//                 href="tel:+91 9920715001"
//                 target="_blank"
//                 title="Call Us"
//               >
//                 {" "}
//                 +91 99207 15001 ,
//               </a>
//               <a
//                 className="blue-text"
//                 href="tel:+91 73033 15003"
//                 target="_blank"
//                 title="Call Us"
//               >
//                 {" "}
//                 +91 73033 15003 ,
//               </a>{" "}
//               <a
//                 className="blue-text"
//                 href="tel:+91 73033 15004"
//                 target="_blank"
//                 title="Call Us"
//               >
//                 +91 73033 15004
//               </a>
//             </p>
//             <p>
//               <img src="assets/images/icon/email.webp" />{" "}
//               <span className="white-text">E-mail:</span>{" "}
//               <a
//                 className="blue-text"
//                 href="mailto:admin@qdspro.com"
//                 target="_blank"
//                 title="Email Us"
//               >
//                 {" "}
//                 admin@qdspro.com
//               </a>
//             </p>
//             <p className="social-link">
//               <a
//                 href="https://facebook.com/qdspro"
//                 target="_blank"
//                 title="facebook"
//               >
//                 {/* <img src="assets/images/icon/facebook.webp"> */}
//                 <i className="fa fa-facebook circle" />
//               </a>
//               <a
//                 href="https://twitter.com/qdspro"
//                 target="_blank"
//                 title="twitter"
//               >
//                 {/* <img src="assets/images/icon/twitter.webp"> */}
//                 <i className="fa fa-twitter circle" />
//               </a>
//               <a
//                 href="https://instagram.com/qds_pro"
//                 target="_blank"
//                 title="instagram"
//               >
//                 {/* <img src="assets/images/icon/insta.webp"> */}
//                 <i className="fa fa-instagram circle" />
//               </a>
//               <a
//                 href="https://www.youtube.com/channel/UCThSB8MetfOBMlK28t9ilXA/"
//                 target="_blank"
//                 title="Youtube"
//               >
//                 <i className="fa fa-youtube-play circle" />
//               </a>
//             </p>
//           </div>
//           <div className="col-lg-6 no-padding-mobile">
//             <div style={{ marginLeft: '100px' }} className="footer-link">
//               <div className="footer-page-link row">
//                 <div className="col-lg-4 right-page-link">
//                   <p>
//                     <a href="#" className="blue-text">
//                       Our Services
//                     </a>
//                   </p>
//                   <p>
//                     <a href="/#exams_we_excel" className="blue-text">
//                       Courses (Exam)
//                     </a>
//                   </p>
//                   <p>
//                     <a href="/blog" className="blue-text">
//                       Blog
//                     </a>
//                   </p>

//                   <p>
//                     <a href="/aboutus" className="blue-text">
//                       About Us
//                     </a>
//                   </p>




//                   {/* <p><a href="#" class="blue-text">Our Services</a></p> */}
//                 </div>

//                 <div className="col-lg-4 padding--left-60">
//                   <p>
//                     <a href="/contactus" className="blue-text">
//                       Contact Us
//                     </a>
//                   </p>

//                   <p>
//                     <a href="/faq" className="blue-text">
//                       FAQs
//                     </a>
//                   </p>

//                   <p>
//                     <a href="/privacy" className="blue-text">
//                       Privacy Policy
//                     </a>
//                   </p>

//                   <p>
//                     <a href="/terms" className="blue-text">
//                       Terms &amp; Conditions
//                     </a>
//                   </p>

//                   {/* <p><a href="#" class="blue-text">Our Services</a></p> */}
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="clearfix footer-copyright">
          <p className="m-0" style={{}}>© 2019, QDS Pro, All Rights Reser</p>
//         </div>
//       </div>
//     </div>
//   );
// }

