import React, { useState,useEffect,useRef } from "react";
import Link from 'next/link';
import Login from "../pages/mock_tests/login";
//import ClickAwayListener from "@material-ui/core/ClickAwayListener";
//import ClickAwayListener from "react-click-away-listener";

function Header() {

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isDropdownOpen2, setIsDropdownOpen2] = useState(false);
  const [joinUsDropdown, setJoinUsDropdown] = useState(false);
  const [findUsDropdown, setFindUsDropdown] = useState(false);
  const [centresDropdown, setCentresDropdown] = useState(false);
  const [startedDropDown, setStartedDropdown] = useState(false);
  const node = useRef();

  function centresDropdownHandler() {
    setCentresDropdown(!centresDropdown);
    setFindUsDropdown(false);
    setJoinUsDropdown(false);
  }

  function joinUsDropdownHandler() {
    setJoinUsDropdown(!joinUsDropdown)
    setFindUsDropdown(false)
    setCentresDropdown(false);
  }
  function findUsDropdownHandler() {
    setFindUsDropdown(!findUsDropdown)
    setJoinUsDropdown(false)
    setCentresDropdown(false);
  }

  const handleDropdownOpen = () => {

    setIsDropdownOpen(!isDropdownOpen);
    setIsDropdownOpen2(false);
    setStartedDropdown(false);

  }

  const handleDropdownOpen2 = () => {

    setIsDropdownOpen(false);
    setIsDropdownOpen2(!isDropdownOpen2);
    setStartedDropdown(false);

  }

  const handleStartedDropdown = () => {

    setIsDropdownOpen(false);
    setIsDropdownOpen2(false);
    setStartedDropdown(!startedDropDown);

  }
  const closeDropdown = () => {
    setIsDropdownOpen(false)
    setIsDropdownOpen2(false)
    setFindUsDropdown(false)
    setCentresDropdown(false)
    setJoinUsDropdown(false)
  }
  useEffect(() => {
    // add when mounted
    document.addEventListener("mousedown", handleClick);
    // return function to be called when unmounted
    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  }, []);
  const handleClick = e => {
  if (node.current.contains(e.target)) {
    // inside click
    return;
  }
    // outside click 
    closeDropdown();
    // if (centresDropdown) {
    //   centresDropdownHandler()
    // }
    // if (joinUsDropdown) {
    //   joinUsDropdownHandler()
    // }
    // if (findUsDropdown) {
    //   findUsDropdownHandler()
    // }
    // if (isDropdownOpen) {
    //   handleDropdownOpen()
    // }
    // if (isDropdownOpen2) {
    //   handleDropdownOpen2()
    // }
  };
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

  return (
    <div ref={node}>
      <style>
        {`
        .s-navbar-container{
          padding-left: 10px;
        }

        .s-dropdown-container{
          cursor: pointer;
        }

        .s-sub-dropdown-container{
          color: #192f5a !important;
          width: 250px;
          padding: 10px;
          font-size: 18px !important;
        }

        .s-sub-dropdown-container:hover{
          background-image: linear-gradient(to right,#77bf43 48%,#7ac042 66%,#83c340 78%,#93c83c 89%,#a9cf37 100%,#aacf37);
          color: white !important;
          overflow: hidden;
        }

        .s-sub-dropdown-container ul{
          box-shadow: 6px 6px 10px #aaaaaa;
          position: absolute;
          left: 250px;
          top: 57px;
        }

        .centres-list ul{
          top:170px;
        }

        .s-sub-dropdown-container-2{
          color: #192f5a !important;
          width: 250px;
          padding: 10px;
          font-size: 18px !important;
        }

        .s-sub-dropdown-container-2:hover{
          background-image: linear-gradient(to right,#77bf43 48%,#7ac042 66%,#83c340 78%,#93c83c 89%,#a9cf37 100%,#aacf37);
          color: white !important;
          overflow: hidden;
        }

        .s-sub-dropdown-container-2 ul{
          box-shadow: 6px 6px 10px #aaaaaa;
          position: absolute;
          left: 250px;
          top: 112px;
        }
        
        .s-dropdown-ul{
          box-shadow: 6px 6px 10px #aaaaaa;
          padding: 0;
          display: flex;
          flex-direction: column;
          position: absolute;
          background-color: white;
          width: 250px;
        }

        .custom-dropdown-get-started{
          right: 2%;
          
        }
        .s-dropdown-ul a{
          color: #192f5a !important;
          width: 250px;
          padding: 10px;
          font-size: 18px;
        }
        .s-dropdown-ul a:hover{
          background-image: linear-gradient(to right,#77bf43 48%,#7ac042 66%,#83c340 78%,#93c83c 89%,#a9cf37 100%,#aacf37);
          color: white !important;
          overflow: hidden;
        }






        .s-dropdown-ul-mobile{
          box-shadow: 6px 6px 10px #aaaaaa;
          padding: 0;
          display: flex;
          flex-direction: column;
          background-color: white;
          
        }
        .s-dropdown-ul-mobile a{
          color: #192f5a !important;
          padding: 10px;
          font-size: 18px;
        }
        .s-dropdown-ul-mobile a:hover{
          background-image: linear-gradient(to right,#77bf43 48%,#7ac042 66%,#83c340 78%,#93c83c 89%,#a9cf37 100%,#aacf37);
          color: white !important;
          overflow: hidden;
        }



        .s-sub-dropdown-container-mobile{
          color: #192f5a !important;
          padding: 10px;
          width: 200px;
          list-style: none;
          font-size: 18px;
        }

        
        .s-sub-dropdown-container-mobile:hover{
          background-image: linear-gradient(to right,#77bf43 48%,#7ac042 66%,#83c340 78%,#93c83c 89%,#a9cf37 100%,#aacf37);
          color: white !important;
        }

        .qds-header{
          padding-top:10px;
        }
        .mobile-header{
          margin-top:80px;
        }
        .top-numbers-list li{
        }
        #menuToggle{
          margin-top:-40px;
        }
        .mobile-qds-logo{
          margin-top:-10px;
          padding-bottom:20px;
        }
        .mobile-qds-logo img{
          margin-top:-30px;
        }
        @media (max-width:800px)
        {
          .mobile-header{
            margin-top:50px;
          }
          #menuToggle{
            margin-top:-25px;
          }
        }
        @media (max-width:900px)
				{
          .mobile-qds-logo img{
            width:110px!important;
          }
          .s-contact-details-section a{
            margin:0!important;
          }
        }
        @media (max-width:768px)
				{
          .mobile-qds-logo img{
            width:110px!important;
          }
        }
//         @media (max-width:500px)
// 				{
//           .mobile-header{
//             margin-top:90px;
//           }
//         }
//         @media (max-width:380px)
// 				{
//           .mobile-header{
//             margin-top:85px;
//           }
//           #menuToggle{
//             margin-top:-40px;
//           }
//         }
//         @media (max-width:300px)
// 				{
//           .mobile-header{
//             margin-top:100px;
//           }
//         }

   @media screen and (max-width:360px){
    .top-numbers ul li a{
        font-size:8px;
    }
    .top-numbers{
        margin-top:70px;
    }    
    #firstMail{
            position:relative;
            bottom:19px;
        }
      .mobile-qds-logo a img{
            position:relative;
            top:-35px;
        }

        .mobile-qds-logo p{
            position:relative;
            top:-40px;
	    left:7px;
                width: 105px !important;
        }

      .mobile-qds-logo {
             width: 22px;
      }
        #menuToggle{
            position:relative;
            top:0px;
        }
    }

        `}
      </style>
      {/* QDS Header Starts here */}
      <div className="qds-header">
        <div className="qds-logo">
          <a href="/index">
            <img src="/assets/images/qds-logo.webp" alt="QDS Pro Logo" />
          </a>
          <p className="s-header-logo-subtitle">A Complete Hand-Holding...!</p>
        </div>
        <div className="menu-section">
          <ul className="s-navbar-container">
            <li>
              <a href="/" title="Home">
                Home
              </a>
            </li>

            <li>
              <a href="/aboutus" title="About Us">
                About Us
              </a>
            </li>

            <li>
              <a href="/#exams_we_excel" title="Popular Courses">
              Popular Courses
              </a>
            </li>

            <li>
              <a href="http://onlineprep.qdspro.com" title="Online Prep">
                Online Prep
              </a>
            </li>

            <li>
              <a href="/blog" title="Blog">
                Blog
              </a>
            </li>
            {/* <ClickAwayListener */}
            {/* mouseEvent="onMouseDown"
              touchEvent="onTouchStart"
              onClickAway={() => setIsDropdownOpen(false)}
            > */}
            <li className="s-dropdown-container" title="Connect with us">
              <span onClick={() => handleDropdownOpen(!isDropdownOpen)}>
                Connect with us <i className="fa fa-sort-down"></i>
              </span>
              {isDropdownOpen && (
                <ul className="s-dropdown-ul">
                  <a href="/contactus" title="Contact Us">
                    Contact Us
                  </a>
                  <li
                    className="s-sub-dropdown-container"
                    onClick={joinUsDropdownHandler}
                  >
                    Join Us <i className="fa fa-caret-right"></i>
                    {joinUsDropdown && (
                      <ul className="s-dropdown-ul">
                        <a href="/form_live_tutor" title="Join us as tutor">
                          Online Tutor
                        </a>
                        <a
                          href="/form_doubt_solving"
                          title="Join us as a Doubt solving expert"
                        >
                          Doubt Solving Expert
                        </a>
                        <a
                          href="/form_home_tutoring"
                          title="Join us as a Home tutor"
                        >
                          Home Tutor
                        </a>
                        <a
                          href="/form_employee_intern"
                          title="Join us as an Intern/employee"
                        >
                          Intern/Employee
                        </a>
                      </ul>
                    )}
                  </li>
                  <a
                    href="/certifiedTutor"
                    title="Become a QDS Pro Certified Tutor"
                  >
                    Become a QDS Pro <br /> Certified Tutor
                  </a>
                  <li
                    className="s-sub-dropdown-container-2"
                    onClick={findUsDropdownHandler}
                  >
                    Find Us <i className="fa fa-caret-right"></i>
                    {findUsDropdown && (
                      <ul className="s-dropdown-ul">
                        <a
                          href=" https://www.google.com/search?hl=en&source=hp&ei=LyNKYMLhA4bl9QO5vZKQBA&iflsig=AINFCbYAAAAAYEoxP4yX8LYLhYYMQyep1bcMOP39uNrw&q=QDS+Pro&oq=QDS+Pro&gs_lcp=Cgdnd3Mtd2l6EAMyCwguEMcBEK8BEJMCMgUIABDJAzICCAAyAggAMgIIADICCAAyBggAEBYQHjIGCAAQFhAeMgYIABAWEB4yBggAEBYQHjoFCAAQsQM6CAguELEDEIMBOggILhDHARCjAjoFCC4QsQM6CAgAELEDEIMBOggILhDHARCvAVDdD1i9G2CbIGgBcAB4AIABpQGIAYwHkgEDMC43mAEAoAEBqgEHZ3dzLXdperABAA&sclient=gws-wiz&ved=0ahUKEwiCtfP6s6jvAhWGcn0KHbmeBEIQ4dUDCAc&uact=5"
                          target="_blank"
                          title="Google"
                        >
                          {" "}
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            x="0px"
                            y="0px"
                            width="20"
                            height="20"
                            viewBox="0 0 172 172"
                            style={{
                              fill: "#000000;",
                              backgroundColor: "white",
                              borderRadius: "50%",
                            }}
                          >
                            <g
                              fill="none"
                              fill-rule="nonzero"
                              stroke="none"
                              stroke-width="1"
                              stroke-linecap="butt"
                              stroke-linejoin="miter"
                              stroke-miterlimit="10"
                              stroke-dasharray=""
                              stroke-dashoffset="0"
                              font-family="none"
                              font-weight="none"
                              font-size="none"
                              text-anchor="none"
                              style={{ mixBlendMode: "normal" }}
                            >
                              <path d="M0,172v-172h172v172z" fill="none"></path>
                              <g fill="#192f5a">
                                <path d="M89.42656,165.12c-43.63156,0 -79.13344,-35.48844 -79.13344,-79.12c0,-43.63156 35.50187,-79.12 79.13344,-79.12c19.76656,0 38.68656,7.32344 53.29312,20.62656l2.66063,2.43219l-26.09563,26.09563l-2.41875,-2.06938c-7.65937,-6.5575 -17.40156,-10.17219 -27.43937,-10.17219c-23.27375,0 -42.22063,18.93344 -42.22063,42.20719c0,23.27375 18.94688,42.20719 42.22063,42.20719c16.78344,0 30.04625,-8.57312 36.29469,-23.17969h-39.73469v-35.62281l77.57469,0.1075l0.57781,2.72781c4.04469,19.20219 0.80625,47.44781 -15.5875,67.65781c-13.57188,16.72969 -33.45938,25.22219 -59.125,25.22219z"></path>
                              </g>
                            </g>
                          </svg>
                          &nbsp;Google
                        </a>
                        <a href="https://facebook.com/qdspro" title="Facebook">
                          <i className="fa fa-facebook" /> Facebook
                        </a>
                        <a href="https://twitter.com/qdspro" title="Twitter">
                          <i className="fa fa-twitter" /> Twitter
                        </a>
                        <a
                          href="https://instagram.com/qds_pro"
                          title="Instagram"
                        >
                          <i className="fa fa-instagram" /> Instagram
                        </a>
                        <a
                          href="https://www.youtube.com/channel/UCThSB8MetfOBMlK28t9ilXA/"
                          title="YouTube"
                        >
                          <i className="fa fa-youtube-play" /> YouTube
                        </a>
                        <a
                          href="https://www.linkedin.com/company/qds-pro"
                          title="LinkedIn"
                        >
                          <i className="fa fa-linkedin" /> LinkedIn
                        </a>
                        <a
                          href="https://in.pinterest.com/qdspro/"
                          title="Pinterest"
                        >
                          <i className="fa fa-pinterest" /> Pinterest
                        </a>
                      </ul>
                    )}
                  </li>
                  <li
                    className="s-sub-dropdown-container centres-list"
                    onClick={centresDropdownHandler}
                  >
                    Centres <i className="fa fa-caret-right"></i>
                    {centresDropdown && (
                      <ul className="s-dropdown-ul">
                        <a
                          style={{ cursor: "pointer" }}
                          onClick={() => myNavFunc("Charni")}
                          title="Click To See On Google Maps"
                        >
                          Charni Road
                        </a>
                        <a
                          style={{ cursor: "pointer" }}
                          onClick={() => myNavFunc("Andheri")}
                          title="Click To See On Google Maps"
                        >
                          Andheri
                        </a>
                      </ul>
                    )}
                  </li>
                </ul>
              )}
            </li>
            {/* </ClickAwayListener>
            <ClickAwayListener 
              mouseEvent="onMouseDown"
              touchEvent="onTouchStart"
              onClickAway={() => setIsDropdownOpen2(false)}
            >*/}

            <li className="s-dropdown-container" title="Free Resources">
              <span onClick={() => handleDropdownOpen2()}>
                Free Resources <i className="fa fa-sort-down"></i>
              </span>
              {isDropdownOpen2 && (
                <ul className="s-dropdown-ul">
                  <a href="/workshops" title="Upcoming Workshops & Seminars">
                    Upcoming Workshops & Seminars
                  </a>
                  <a href="/study_planner" title="Study Planner">
                    Study Planner
                  </a>
                  <a href="/compare" title="Compare Colleges">
                    Compare Colleges
                  </a>
                  <a href="/study_material/materials" title="Study Material">
                    Study Material
                  </a>
                  <a href="/downloads" title="Downloads">
                    Downloads
                  </a>
                </ul>
              )}
            </li>
            {/* </ClickAwayListener> */}
            <li>
              <a href="/enquiry" title="Enquiry">
                Enquiry
              </a>
            </li>

            {/* <li>
              <a href="/faq" title="FAQs">
                FAQs
              </a>
            </li> */}

            <li className="s-dropdown-container">
              <span onClick={() => handleStartedDropdown()}>
                <a
                  className="btn btn-primary btn-lg"
                  href="#"
                  title="Get Started"
                >
                  Get Started{" "}
                  <i className="fa fa-sort-down align-self-center"></i>
                </a>
              </span>
              {startedDropDown && (
                <ul className="s-dropdown-ul custom-dropdown-get-started">
                  <a
                    href="https://onlineprep.qdspro.com/"
                    title="Live Online Tutoring"
		    target="_blank"  
                  >
                    Live Online Tutoring
                  </a>
		  <a href="https://qdsprotests.tcyonline.com/"  title="Practice Tests" target="_blank">
                    Practice Tests   
                  </a>
                  <a href="https://app.qdspro.com/" title="Doubt Solving" target="_blank">
                    Doubt Solving
                  </a>
                </ul>
              )}
            </li>
          </ul>
        </div>
      </div>
      {/* Header end here */}

      {/* Mobile header */}
      <nav role="navigation" className="mobile-only-display mobile-header">
        <div className="mobile-qds-logo">
          <a href="/">
            <img src="/assets/images/qds-logo.webp" alt="QDS Pro Logo" />
          </a>
          <p className="s-header-logo-subtitle">A Complete Hand-Holding...!</p>
        </div>
        <div id="menuToggle">
          <input type="checkbox" />
          <span />
          <span />
          <span />
          <ul id="menu">
            <p>
              <a href="/" title="Home">
                Home
              </a>
            </p>
            <p>
              <a href="/aboutus" title="About Us">
                About Us
              </a>
            </p>
            <p>
              <a href="http://onlineprep.qdspro.com" title="Online Prep">
                Online Prep
              </a>
            </p>

            <p
              style={{ color: "#77bf43" }}
              onClick={() => handleDropdownOpen()}
            >
              {" "}
              Connect with us <i className="fa fa-sort-down"></i>{" "}
            </p>
            {isDropdownOpen && (
              <ul className="s-dropdown-ul-mobile">
                <a href="/contactus" title="Contact Us">
                  Contact Us
                </a>
                <li
                  className="s-sub-dropdown-container-mobile"
                  onClick={joinUsDropdownHandler}
                >
                  Join Us <i className="fa fa-caret-down"></i>
                  {joinUsDropdown && (
                    <ul className="s-dropdown-ul-mobile">
                      <a href="/form_live_tutor" title="Join us as live tutor">
                        Live Online Tutor
                      </a>
                      <a
                        href="/form_doubt_solving"
                        title="Join us as a Doubt solving expert"
                      >
                        Doubt Solving Expert
                      </a>
                      <a
                        href="/form_home_tutoring"
                        title="Join us as a Home tutor"
                      >
                        Home Tutor
                      </a>
                      <a
                        href="/form_employee_intern"
                        title="Join us as an Intern/employee"
                      >
                        Intern/Employee
                      </a>
                    </ul>
                  )}
                </li>
                <a
                  href="/certifiedTutor"
                  title="Become a QDS Pro Certified Tutor"
                >
                  Become a QDS Pro <br /> Certified Tutor
                </a>

                <li
                  className="s-sub-dropdown-container-mobile"
                  onClick={findUsDropdownHandler}
                >
                  Find Us <i className="fa fa-caret-down"></i>
                  {findUsDropdown && (
                    <ul className="s-dropdown-ul-mobile">
                      <a href="https://facebook.com/qdspro" title="Facebook">
                        <i className="fa fa-facebook" /> Facebook
                      </a>
                      <a href="https://twitter.com/qdspro" title="Twitter">
                        <i className="fa fa-twitter" /> Twitter
                      </a>
                      <a href="https://instagram.com/qds_pro" title="Instagram">
                        <i className="fa fa-instagram" /> Instagram
                      </a>
                      <a
                        href="https://www.youtube.com/channel/UCThSB8MetfOBMlK28t9ilXA/"
                        title="Youtube"
                      >
                        <i className="fa fa-youtube-play" /> Youtube
                      </a>
                      <a
                        href="https://www.linkedin.com/company/qds-pro"
                        title="LinkedIn"
                      >
                        <i className="fa fa-linkedin" /> LinkedIn
                      </a>
                      <a
                        href="https://in.pinterest.com/qdspro/"
                        title="Pinterest"
                      >
                        <i className="fa fa-pinterest" /> Pinterest
                      </a>
                    </ul>
                  )}
                </li>
                <li
                  className="s-sub-dropdown-container-mobile"
                  onClick={centresDropdownHandler}
                >
                  Centres <i className="fa fa-caret-down"></i>
                  {centresDropdown && (
                    <ul className="s-dropdown-ul-mobile">
                      <a
                        style={{ cursor: "pointer" }}
                        onClick={() => myNavFunc("Charni")}
                        title="Click To See On Google Maps"
                      >
                        Charni Road
                      </a>
                      <a
                        style={{ cursor: "pointer" }}
                        onClick={() => myNavFunc("Andheri")}
                        title="Click To See On Google Maps"
                      >
                        Andheri
                      </a>
                    </ul>
                  )}
                </li>
              </ul>
            )}
            <p
              style={{ color: "#77bf43" }}
              onClick={() => handleDropdownOpen2()}
            >
              Free Resources <i className="fa fa-sort-down"></i>
            </p>
            {isDropdownOpen2 && (
              <ul className="s-dropdown-ul-mobile">
                <a href="/workshops" title="Upcoming Workshops & Seminars">
                  Upcoming Workshops & Seminars
                </a>
                <a href="/study_planner" title="Study Planner">
                  Study Planner
                </a>
                <a href="/compare" title="Compare Colleges">
                  Compare Colleges
                </a>
                <a href="/study_material/materials" title="Study Material">
                  Study Material
                </a>
                <a href="/downloads" title="Downloads">
                  Downloads
                </a>
              </ul>
            )}

            {/*<p>
              <a href="/pricing" title="Pricing">
                Pricing
              </a>
            </p>*/}

            <p>
              <a href="/contactus" title="Contact Us">
                Contact Us
              </a>
            </p>
            <p>
              <a href="/enquiry" title="Enquiry">
                Enquiry
              </a>
            </p>
            <p>
              <a href="/faq" title="FAQs">
                FAQs
              </a>
            </p>
            <p>
              <a href="/blog" title="Blog">
                Blog
              </a>
            </p>
            <p onClick={() => handleStartedDropdown()}>
              <a
                className="btn btn-primary btn-lg"
                href="#"
                title="Get Started"
              >
                Get Started{" "}
                <i className="fa fa-sort-down align-self-center"></i>
              </a>
            </p>
            {startedDropDown && (
              <ul className="s-dropdown-ul-mobile">
                <a
                  href="https://onlineprep.qdspro.com/"
                  title="Live Online Tutoring"
                >
                  Live Online Tutoring
                </a>
                <a href="https://app.qdspro.com/" title="Doubt Solving">
                  Doubt Solving
                </a>
                {/* <a href="/mock_tests/login" title="Mock Test">
                    Mock Test
                  </a> */}
              </ul>
            )}
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Header;

