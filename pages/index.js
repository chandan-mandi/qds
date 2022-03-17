
import React, { useEffect, useState } from 'react';
import styled, { css } from 'styled-components';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Pricing from '../Fragments/Pricing';
import CoachingClassPackages from '../Fragments/CoachingClassPackages';
import LiveOnlinePackages from '../Fragments/LiveOnlinePackages';
import HomeTutoringPackages from '../Fragments/HomeTutoringPackages';


import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';

import StepZilla from "react-stepzilla";
import Step1 from '../components/create-tutor-form/Step1';
import Step2 from '../components/create-tutor-form/Step2';
import Step3 from '../components/create-tutor-form/Step3';
import Step4 from '../components/create-tutor-form/Step4';
import Gallery from '../Fragments/Gallery';
import CompareCoachingClasses from '../Fragments/CompareCoachingClasses';
import CompareOnlinePrepCompanies from '../Fragments/CompareOnlinePrepCompanies';
import HomeTutor from "../public/assets/images/home-tutor.jpg";
import Popup from "../components/Popup";

import "../node_modules/aos/dist/aos.css";
import AOS from 'aos';
import PopularCourses from './popular_courses';
import NewsLetter from '../Fragments/NewsLetter';

const firebase = require('firebase');
var abc = ''
var firebaseConfig = {
	apiKey: "AIzaSyAQa2W4kDr1JyewSSXWqCDDijEN1DPcxuE",
	authDomain: "qdsprowebsiteadmin.firebaseapp.com",
	databaseURL: "https://qdsprowebsiteadmin.firebaseio.com",
	projectId: "qdsprowebsiteadmin",
	storageBucket: "qdsprowebsiteadmin.appspot.com",
	messagingSenderId: "846377315055",
	appId: "1:846377315055:web:846ed4a2071667f14e091a",
	measurementId: "G-4LL22BT1YG"
};
// Initialize Firebase
//firebase.initializeApp(firebaseConfig);
if (!firebase.apps.length) {
	firebase.initializeApp(firebaseConfig);
}
var que;
var que2;
var que3;
var query = firebase.database().ref("users/quiz/examheaders").orderByKey();
query.once("value")
	.then(function (snapshot) {
		que = (snapshot.val() && snapshot.val().first)
		que2 = (snapshot.val() && snapshot.val().second)
		que3 = (snapshot.val() && snapshot.val().third)

		var featuretitle = (snapshot.val() && snapshot.val().featuretitle)
		var featuredes = (snapshot.val() && snapshot.val().featuredes)
		var featuretitle1 = (snapshot.val() && snapshot.val().featuretitle1)
		var featuredes1 = (snapshot.val() && snapshot.val().featuredes1)
		var featuretitle2 = (snapshot.val() && snapshot.val().featuretitle2)
		var featuredes2 = (snapshot.val() && snapshot.val().featuredes2)
		var featuretitle3 = (snapshot.val() && snapshot.val().featuretitle3)
		var featuredes3 = (snapshot.val() && snapshot.val().featuredes3)
		var featuretitle4 = (snapshot.val() && snapshot.val().featuretitle4)
		var featuredes4 = (snapshot.val() && snapshot.val().featuredes4)
		$("#1f").append(que);
		$("#2f").append(que2);
		$("#3f").append(que3);

		$("#featurepara").append(featuredes);
		$("#featuretitle").append(featuretitle);
		$("#featurepara1").append(featuredes1);
		$("#featuretitle1").append(featuretitle1);
		$("#featurepara2").append(featuredes2);
		$("#featuretitle2").append(featuretitle2);
		$("#featurepara3").append(featuredes3);
		$("#featuretitle3").append(featuretitle3);
		$("#featurepara4").append(featuredes4);
		$("#featuretitle4").append(featuretitle4);

	}, () => {


	}).catch(error =>
		console.log(error)
	)

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
	  padding-top: 0px;
  }

`;

const Box = styled.div`
  width: 33%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 88px;
  color: white;
  padding: 18px;
  border-radius: 10px;
  font-size: 0.8rem;
  text-align: center;
  background-color: #192f5a;
  transition: ease all 0.4s;
  margin: 5px;
  cursor: pointer;
  outline: 0;

  ${props => props.active && css`background-image: linear-gradient(to right, #77bf43 48%, #7ac042 66%, #83c340 78%, #93c83c 89%, #a9cf37 100%, #aacf37);`}
  

  &:before {
	content: ' ';
	position: absolute;
	width: 0;
	height: 0;
  	left: auto;
	right: auto;
  	top: auto;
	bottom: -20px;
	border: 10px solid;
	border-color: ${props => props.active === true ? '#77bf43 transparent transparent transparent' : 'transparent'};
	
  }

  @media (min-width: 768px) {
  	font-size: 1rem;
  }	

  @media (min-width: 1284px) {
  	font-size: 1.3rem;
  }
`;

const ExamBox = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 88px;
  color: white;
  padding: 18px;
  border-radius: 10px;
  font-size: 0.90rem;
  text-align: center;
  background-color: #192f5a;
  transition: ease all 0.4s;
  margin: 0px;
  &:hover
  {
	background-image: linear-gradient(to right, #77bf43 48%, #7ac042 66%, #83c340 78%, #93c83c 89%, #a9cf37 100%, #aacf37);
  }
  &:active
  {
	background-image: linear-gradient(to right, #77bf43 48%, #7ac042 66%, #83c340 78%, #93c83c 89%, #a9cf37 100%, #aacf37);
  }
  @media (min-width: 768px) {
  	font-size: 1rem;
  }	

  @media (min-width: 1284px) {
  	font-size: 1.3rem;
  }
`;

const ExamBoxContainer = styled.div`
	padding: 5px;
`;

const ExamBoxWrapper = styled.div`
	padding: 10px;
	  

	  @media (min-width: 768px) {
	  	font-size: 1rem;
	  	padding: 20px;
	  }	

	  @media (min-width: 1284px) {
		  padding: 50px;
		  padding-top: 0px;
	  }
`;

const SecondClass = styled.div`
	padding: 20px;
`;

const FeatureSet = styled.div`

`;

const FeatureTitle = styled.h2`
	font-size: 1rem;
	color: #192f5a;
	font-weight: 400;
	text-align: center;
	padding: 20px;
	@media (min-width: 1024px) {
		font-size: 1.3rem;
	}
`;

const SectionTitle = styled.h2`
	padding: 0;
	color: #0a2830;
	font-weight: 700;
	margin: 10px;
	@media (min-width: 1024px) {
		font-size: 2rem;
	}
`;

const FeatureSubtitle = styled.p`
	text-align: center;
	max-width: 500px;
	margin: auto;
`;


const bannerThumbnails = [
	{
		image: "https://firebasestorage.googleapis.com/v0/b/qdsprowebsiteadmin.appspot.com/o/backgroundimageqds%2FBanner-1-updated.png?alt=media&token=58597011-930a-4a2a-aafa-1b6295fca6ea",
		text: "Our Services",
	},
	{
		image: "assets/images/new-banners/2.webp",
		text: "Offline Classes' Resumption",
	},
	{
		image: "assets/images/new-banners/3.webp",
		text: "New GMAT Courses",
	},
	{
		image: "assets/images/new-banners/4.webp",
		text: "GMAT Hybrid Course",
	},
	{
		image: "assets/images/new-banners/5.webp",
		text: "GMAT Last Minute Reviser Course",
	},
	{
		image: "assets/images/new-banners/6.webp",
		text: "2 Days To Crack GMAT Course",
	},
	{
		image: "assets/images/new-banners/7.webp",
		text: "'Personalized + Professional' Learning Approach",
	},
	{
		image: "assets/images/new-banners/8.webp",
		text: "Your Journey At QDS Pro",
	},
	{
		image: "assets/images/new-banners/9.webp",
		text: "QDS Pro vs. Others",
	},
	{
		image: "assets/images/coaching-class-banner-new.webp",
		text: "Coaching Classes",
	},
	{
		image: "https://firebasestorage.googleapis.com/v0/b/qdsprowebsiteadmin.appspot.com/o/backgroundimageqds%2Fvideo-banner-3-updated-2.png?alt=media&token=03f969ab-46c1-4350-8824-b32214ea6688",
		text: "Video Lectures",
	},
	{
		image: "assets/images/live-online-banner-new-edited.webp",
		text: "Live Online Tutoring",
	},
	{
		image: "assets/images/qdsdoubt-without-background-edited.webp",
		text: "Doubt Solving",
	},
	{
		image: "/assets/images/homesteps/step-1.webp",
		text: "Doubt Solving App's Working",
	},
	{
		image: "/assets/images/home-tutoring-banner-edited.webp",
		text: "Home Tutoring",
	},

]

function HomeSlider() {
  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);

  let slider_ref = React.useRef(null);
  var settings = {
    dots: true,
    infinite: true,
    speed: 2000,
    fade: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
  };

  let slider_thumbnails_ref = React.useRef(null);
  const settingsThumbs = {
    slidesToShow: 2,
    slidesToScroll: 1,
    dots: false,
    infinite: true,
    autoplay: false,
    speed: 2000,
    autoplaySpeed: 5000,
    cssEase: "linear",
    swipeToSlide: true,
    focusOnSelect: true,
    variableWidth: true,
    centerMode: false,
    pauseOnHover: true,
    // responsive: [
    // 	{
    // 	  breakpoint: 1024,
    // 	  settings: {
    // 		slidesToShow: 3,
    // 		slidesToScroll: 3
    // 	  }
    // 	},
    // 	{
    // 	  breakpoint: 600,
    // 	  settings: {
    // 		slidesToShow: 2,
    // 		slidesToScroll: 2,
    // 		initialSlide: 2
    // 	  }
    // 	},
    // 	{
    // 	  breakpoint: 480,
    // 	  settings: {
    // 		slidesToShow: 1,
    // 		slidesToScroll: 1
    // 	  }
    // 	}
    //   ]
  };

  useEffect(() => {
    setNav1(slider_ref.current);
    setNav2(slider_thumbnails_ref.current);

    // $('.thumbnail-slider-wrap').hover(function() {
    // 	// $(".home-banner").css("height", "90vh")
    // 	$(this).fadeTo(1, 1, "linear");
    // },function() {
    // 	// $(".home-banner").css("height", "100vh")
    // 	$(this).fadeTo(1, 0, "linear");
    // });
  }, []);

  const changeSlide = () => {
    var slideno = $(this).data("slide");
    //console.log(slideno);
  };

// const handleExit = () => {
//     if(!localStorage.getItem('first_time_visit')){
// 	var audio = new Audio("/assets/sound/pop_up.mp3");
//     audio.play();
// 	$("#myModal").modal();
// 	localStorage.setItem('first_time_visit', true);
// 	}
	 
// };
// 	function clearStorage() {
//     let session = sessionStorage.getItem("ref");

//     if (session == null) {
//       localStorage.removeItem("first_time_visit");
//     }
//     sessionStorage.setItem("ref", 1);
//   	}
//    useEffect(() => {
//     	document.addEventListener("mouseout", handleExit);
// 	   clearStorage();
// 	   handleExit();
//    }, []);
 
  return (
	  <>
		<Popup/>
      <div className="banners">
        <div className="home-banner text-center" style={{ top: "20%" }}>
          <Slider
            className="home-banner-slider"
            {...settings}
            ref={slider_ref}
            asNavFor={nav2}
          >
            <div className="about-title home-title banner-slide-nov-14">
              {/* <img src="/assets/images/banner-3.webp" className="img-fluid" alt=""> */}
            </div>
            {[2, 3, 4, 5, 6, 7, 8, 9].map((i) => {
              return (
                <img
                  className={"about-title home-title new-banner-common"}
                  src={"/assets/images/new-banners/" + i.toString() + ".webp"}
                  alt="Banner"
                ></img>
              );
            })}
            <div className="about-title home-title banner-slide-dec-07 s-banner-buttons ">
              <div>
                <Link href={{ pathname: "/enquiry", query: { activeTab: 1 } }}>
                  <button
                    className="btn btn-primary btn-lg"
                    style={{ margin: "20px", color: "white" }}
                    title="Enquire Now"
                  >
                    Enquire Now
                  </button>
                </Link>

                <Link
                  href={{
                    pathname: "/enquiry",
                    query: { activeTab: 6, select: 0 },
                  }}
                >
                  <button
                    className="btn btn-primary btn-lg"
                    style={{ margin: "20px", color: "white" }}
                    title="Book a Free Demo Session"
                  >
                    Book a Free Demo Session
                  </button>
                </Link>
              </div>
            </div>
            <div className="about-title home-title banner-slide-dec-14 s-banner-buttons">
              <Link href={{ pathname: "/enquiry", query: { activeTab: 2 } }}>
                <button
                  className="btn btn-primary btn-lg"
                  style={{ marginBottom: "10px", color: "white" }}
                  title="Enquire Now"
                >
                  Enquire Now
                </button>
              </Link>
            </div>

            <div className="about-title home-title banner-slide-4 s-banner-buttons">
              <div>
                <Link href={{ pathname: "/enquiry", query: { activeTab: 3 } }}>
                  <button
                    className="btn btn-primary btn-lg"
                    style={{ margin: "10px", color: "white" }}
                    title="Enquire Now"
                  >
                    Enquire Now
                  </button>
                </Link>
                <Link
                  href={{
                    pathname: "/enquiry",
                    query: { activeTab: 6, select: 2 },
                  }}
                >
                  <button
                    className="btn btn-primary btn-lg"
                    style={{ margin: "10px", color: "white" }}
                    title="Book a Free Demo Session"
                  >
                    Book a Free Demo Session
                  </button>
                </Link>
              </div>
              {/* <img src="/assets/images/banner-3.webp" className="img-fluid" alt=""> */}
            </div>

            <div className="about-title home-title banner-slide-1 s-banner-buttons ">
              {/* <h3 className="white-text banner-heading-h3">Quick Doubt Solving</h3>
						<p className="white-text quick-doubt-solvin-banner-text">
							Fastest 24 X 7 Online Doubt Solving Platform for Management <br />
				(especially MBA Entrance Exams), Bank, Law and Other Entrance Exams.
				</p> */}
              <div>
                <Link href={{ pathname: "/enquiry", query: { activeTab: 4 } }}>
                  <button
                    className="btn btn-primary btn-lg"
                    style={{
                      marginTop: "10px",
                      marginBottom: "5px",
                      color: "white",
                    }}
                    title="Enquire Now"
                  >
                    Enquire Now
                  </button>
                </Link>
              </div>
            </div>
            {/* steps */}
            <div className="home-steps-section">
              <StepSlider />
            </div>
            {/* <div className>
						<p className="white-text banner-text-p intro-p">
							INTRODUCING FOR THE FIRST TIME{" "}
						</p>
						<h2 className="white-text banner-heading-h2 slider-3-head">
							OPPORTUNITY TO EXPRESS YOUR SATISFACTION LEVEL
						</h2>
						<p className="white-text slider-3-p">
							Rate The Solutions That You Receive for Every Doubt That You Post On A
							Scale Of
						</p>

						<div>
							<section>
								<div className="loader loader-9">
									<svg
										className="loader-star star1"
										version="1.1"
										xmlns="http://www.w3.org/2000/svg"
										xmlnsXlink="http://www.w3.org/1999/xlink"
										x="0px"
										y="0px"
										width="50px"
										height="50px"
										viewBox="0 0 23.172 23.346"
										xmlSpace="preserve"
									>
										<polygon
											fill="#fbd543"
											points="11.586,0 8.864,8.9 0,8.9 7.193,14.447 4.471,23.346 11.586,17.84 18.739,23.346 16.77,14.985 23.172,8.9 14.306,8.9"
										/>
									</svg>
									<svg
										className="loader-star star2"
										version="1.1"
										xmlns="http://www.w3.org/2000/svg"
										xmlnsXlink="http://www.w3.org/1999/xlink"
										x="0px"
										y="0px"
										width="50px"
										height="50px"
										viewBox="0 0 23.172 23.346"
										xmlSpace="preserve"
									>
										<polygon
											fill="#fbd543"
											points="11.586,0 8.864,8.9 0,8.9 7.193,14.447 4.471,23.346 11.586,17.84 18.739,23.346 16.77,14.985 23.172,8.9 14.306,8.9  "
										/>
									</svg>
									<svg
										className="loader-star star3"
										version="1.1"
										xmlns="http://www.w3.org/2000/svg"
										xmlnsXlink="http://www.w3.org/1999/xlink"
										x="0px"
										y="0px"
										width="50px"
										height="50px"
										viewBox="0 0 23.172 23.346"
										xmlSpace="preserve"
									>
										<polygon
											fill="#fbd543"
											points="11.586,0 8.864,8.9 0,8.9 7.193,14.447 4.471,23.346 11.586,17.84 18.739,23.346 16.77,14.985 23.172,8.9 14.306,8.9  "
										/>
									</svg>
									<svg
										className="loader-star star4"
										version="1.1"
										xmlns="http://www.w3.org/2000/svg"
										xmlnsXlink="http://www.w3.org/1999/xlink"
										x="0px"
										y="0px"
										width="50px"
										height="50px"
										viewBox="0 0 23.172 23.346"
										xmlSpace="preserve"
									>
										<polygon
											fill="#fbd543"
											points="11.586,0 8.864,8.9 0,8.9 7.193,14.447 4.471,23.346 11.586,17.84 18.739,23.346 16.77,14.985 23.172,8.9 14.306,8.9  "
										/>
									</svg>
									<svg
										className="loader-star star5"
										version="1.1"
										xmlns="http://www.w3.org/2000/svg"
										xmlnsXlink="http://www.w3.org/1999/xlink"
										x="0px"
										y="0px"
										width="50px"
										height="50px"
										viewBox="0 0 23.172 23.346"
										xmlSpace="preserve"
									>
										<polygon
											fill="#fbd543"
											points="11.586,0 8.864,8.9 0,8.9 7.193,14.447 4.471,23.346 11.586,17.84 18.739,23.346 16.77,14.985 23.172,8.9 14.306,8.9  "
										/>
									</svg>
								</div>
							</section>
						</div>
						<p className="white-text extra-txt">
							If unsatisfied, Receive Another <strong>SOLUTION</strong> From Another
				<strong>Expert</strong>
						</p>
						<h3 className="care-text">Because We Care !</h3>
						<p />
					</div> */}

            {/* <div className="speaker-slide">
						<p className="white-text banner-slider-head-3">
							Get access to customized and personalized study material all in one
				place <strong>(the best possible in the industry)</strong>
						</p>
						<div className="image-text-wrapper">
							<div className="left-img-text">
								<p className="badge-green-text ribbon-container">
									<span>Quant</span>
								</p>
								<p className="white-text img-para">Permutations and Combinations</p>
								<p className="white-text img-para">Probability</p>
								<p className="white-text img-para">Time, Speed and Distance</p>
								<p className="white-text img-para">Time &amp; Work...</p>
							</div>
							<div>
								<img src="/assets/images/devider.webp" className="devider-img" />
							</div>
							<div className="right-img-text">
								<p className="badge-green-text-reverse ribbon-container right-ribbon-container">
									<span>Verbal</span>
								</p>
								<p className="white-text img-para">Vocabulary Words A-Z</p>
								<p className="white-text img-para">and lots more...</p>
							</div>
							<img src="/assets/images/speaker.webp" className="speaker-img" />
						</div>
					</div> */}

            {/* Banner Home Tutoring */}
            <div className="about-title home-title banner-home-tutoring s-banner-buttons">
              <div>
                <Link href={{ pathname: "/enquiry", query: { activeTab: 5 } }}>
                  <button
                    className="btn btn-primary btn-lg"
                    style={{ margin: "20px", color: "white" }}
                    title="Enquire Now"
                  >
                    Enquire Now
                  </button>
                </Link>
                <Link
                  href={{
                    pathname: "/enquiry",
                    query: { activeTab: 6, select: 4 },
                  }}
                >
                  <button
                    className="btn btn-primary btn-lg"
                    style={{ margin: "20px", color: "white" }}
                    title="Book a Free Demo Session"
                  >
                    Book a Free Demo Session
                  </button>
                </Link>
              </div>
              {/* <img src="/assets/images/banner-3.webp" className="img-fluid" alt=""> */}
            </div>

            {/*
					<div className="about-title home-title banner-slide-new-1 bn-1">
						<div className="road-step-container">
							<h2 className="white-text banner-1-heading">
								Your entrance Exam <br />
					Preparation Journey with QDS PRO
				</h2>
							<div className="h-100 d-flex">
								<div className="box-display-inline">
									<div className="banner-steps-box step-text-1">
										<h4 className="steps-heading">Career Counseling</h4>
										<p className="steps-sub-text">
											- Admin Shortlist institutes and entrance exams for you after
											doing SWOT Analysis
						</p>
									</div>
								</div>
								<div className="box-display-inline">
									<div className="banner-steps-box step-text-2">
										<h4 className="steps-heading">Study Planner</h4>
										<p className="steps-sub-text">
											- Create Study plan using our system
						<br />- Request admin to create study plan based on your
						requirements, work timings, etc.
						</p>
									</div>
								</div>
								<div className="box-display-inline">
									<div className="banner-steps-box step-text-3">
										<h4 className="steps-heading">Video Lectures</h4>
										<p className="steps-sub-text">
											- Learn all concepts and their application thoroughly in
											absolute details
						<br />- All videos directly from the GMAT 99 percentile and
						Founder and CEO of QDS Pro, <strong>Mr. Somil Shah</strong>
										</p>
									</div>
								</div>
								<div className="box-display-inline">
									<div className="banner-steps-box step-text-4">
										<h4 className="steps-heading">Study Material</h4>
										<p className="steps-sub-text">
											- Customized
						<br />
						- Unlimited pool of questions.
						<br />- No need to refer to any other material whatsoever
						</p>
									</div>
								</div>
							</div>
						// 	<div className="banner-container">
						//     <img src="/assets/images/banner-1-step.webp" alt="" className="img-fluid">
						//   </div>
						</div>
					</div>
					<div className="about-title home-title banner-slide-new-2 bn-2">
						<div className="road-step-container">
							<h2 className="white-text banner-1-heading">A Way Towards Success</h2>
							<div className="h-100 d-flex">
								<div className="box-display-inline">
									<div className="banner-steps-box step-2-text-1">
										<h4 className="steps-heading">Doubt Solving</h4>
										<p className="steps-sub-text">
											- Fastest 24 X 7 Quick Doubt Solving
						</p>
									</div>
								</div>
								<div className="box-display-inline">
									<div className="banner-steps-box step-2-text-3">
										<h4 className="steps-heading">Mock test</h4>
										<p className="steps-sub-text">
											- Plenty of mock tests and detailed analysis
						<br />- Partner with the best player in the Mock test Industry
						</p>
									</div>
								</div>
								<div className="box-display-inline">
									<div className="banner-steps-box step-2-text-2">
										<h4 className="steps-heading">Test Taking strategies</h4>
										<p className="steps-sub-text">
											- Last minute revision material
						<br />- Experts guide students on 'How to take your paper so
						that you maximize your scores'
						</p>
									</div>
								</div>
								<div className="box-display-inline">
									<div className="banner-steps-box step-2-text-4">
										<h4 className="steps-heading">Success</h4>
										<p className="steps-sub-text">
											- Wish you great success for your academic program
						</p>
									</div>
								</div>
							</div>
						// 	 <div className="banner-container">
						//     <img src="/assets/images/banner-1-step.webp" alt="" className="img-fluid">
						//   </div>
						</div>
					</div>

				*/}
          </Slider>

          <div className="paginator-hm">
            <span
              className="h-prev"
              id="h-prev"
              onClick={() => {
                slider_ref.current.slickPrev();
              }}
            >
              <i className="fa fa-chevron-left" />
            </span>
            <span
              className="h-next"
              id="h-next"
              onClick={() => {
                slider_ref.current.slickNext();
              }}
            >
              <i className="fa fa-chevron-right" />
            </span>
          </div>

          <div className="thumbnail-slider-wrap">
            <style>
              {`
						.thumbnail-slider-wrap
						{
							height: fit-content;
							margin-left: 0%;
							margin-right: 0%;
							margin-top:7% ;
							background-color: #192f5a;
							width: 87%;
							margin-left: auto;
							margin-right: auto;
						}
						@media (max-width: 1440px) { 
							.thumbnail-slider-wrap{
								margin-top: 10% ;
							}
						}
						.thumbnail-slider-wrap .slick-list
						{
							height: 95px;
							margin-top: 3%;
						}
						@media (max-width:768px)
						{
							.thumbnail-slider-wrap .slick-list
							{
								height: 40px;
								margin-top: 25%;
							}
						}
						@media (max-width:420px)
						{
							.thumbnail-slider-wrap .slick-list
							{
								height: 40px;
								margin-top: 36%;
							}
						}
						@media (max-width:360px)
						{
							.thumbnail-slider-wrap .slick-list
							{
								height: 40px;
								margin-top: 29%;
							}
						}
						.thumbnail-slider-wrap .slick-slide
						{
							margin-left: 2px;
						}
						.box-thumb
						{
							//background-image: linear-gradient(to right, #77bf43 48%, #7ac042 66%, #83c340 78%, #93c83c 89%, #a9cf37 100%, #aacf37);
							// width: 90%;
							// position: relative;
							// display: flex;
							// align-items: center;
							// justify-content: center;
							 height: 35px;
							 color: white;
							// padding: 18px;
							// border-radius: 10px;
							// text-align: center;
							 background-color: #192f5a;
							// transition: ease all 0.4s;
							// margin: 5px;
							// cursor: pointer;
							// outline: 0;
							// margin-top: 10px;
							border: 0px;
							font-size: 14px; 
							
						}
						.slick-active .box-thumb
						{
							background-color: #192f5a;
						}
						.slick-current .box-thumb
						{
							background-image: linear-gradient(to right, #77bf43 48%, #7ac042 66%, #83c340 78%, #93c83c 89%, #a9cf37 100%, #aacf37);
						}
						.box-thumb:hover
						{
							background-image: linear-gradient(to right, #77bf43 48%, #7ac042 66%, #83c340 78%, #93c83c 89%, #a9cf37 100%, #aacf37);	
						}
						// .slick-current .card-img-thumbnail
						// {
						// 	border: solid 5px #fff;	
						// }
						// .slick-current .thumbnail-text
						// {
						// 	font-size: large;	
						// }
						// .thumbnail-card
						// {
						// 	background: url(https://firebasestorage.googleapis.com/v0/b/qdsprowebsiteadmin.appspot.com/o/backgroundimageqds%2F1.png?alt=media&token=bafa7dc2-d97b-40b8-a276-67551444c9bb) no-repeat;
						// }
						// .card-img-thumbnail
						// {
						// 	height: 95px;
						// 	filter: brightness(50%);
						// }
						// .thumbnail-text
						// {
						// 	font-weight: 500;
						// }

						.slick-prev:before {
							font-size: 0px;
						}
						  
						.slick-next:before {
							font-size: 0px;
						}

						.thumbnail-arrows
						{
							margin-top: -100px;
						}
						@media screen and (max-width: 768px) {
							
							.thumbnail-arrows{
								margin-top: -45px;
							}
						}
						@media screen and (max-width: 420px) {
							
							.thumbnail-arrows{
								margin-top: 80px;
							}
						}
						.th-prev
						{
							margin-left: -8%;
						}
						.th-next
						{
							margin-right: -8%;
						}
						// @media (max-width: 1440px) { 
						// 	.thumbnail-slider-wrap .slick-list{
						// 		margin-top: 6% ;
						// 	}
						// }
						// @media (max-width: 1280px) { 
						// 	.thumbnail-slider-wrap .slick-list{
						// 		margin-top: 60px ;
						// 	}
						// }
						.thumb-ticker
						{
							background-color: #192f5a;
							height: 100%;
							z-index: 1
						}
						`}
            </style>
            {/* <marquee className="thumb-ticker" behavior="scroll" direction="right">
						<div className="d-flex">
							{bannerThumbnails.map((slide) =>

								<p className="box-thumb mr-2 p-2">
									{slide.text}
								</p>

							)}
						</div>
					</marquee> */}
          </div>
        </div>
      </div>
    </>
  );
}

function TestimonialSlider({ sliderItems }) {
	let slider_ref = React.useRef(null);
	var settings = {
		dots: false,
		infinite: true,
		speed: 900,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 4000,
		pauseOnHover: true,
		adaptiveHeight: true
	};
	return (
    <div
      id="testimonial_wrapper"
      style={{ top: "20%", left: 0, right: 0 }}
      className="testimonial-wrapper"
    >
      <div
        id="testimonial_left_navigation"
        className="testimonial_navigation_container"
      >
        <span
          href="#"
          id="testimonial-prev"
          className="test-nav-link gray-text fa fa-angle-left"
          style={{ padding: "0px", marginLeft: "60px" }}
          onClick={() => {
            slider_ref.current.slickPrev();
          }}
        />
      </div>

      <Slider
        className="testimonial-slide text-center"
        {...settings}
        ref={slider_ref}
        style={{ width: "88%" }}
      >
        {sliderItems.map((s) => (
          <div className="testimonial-carousal-container">
            <div className="testimonial-carousal">
              <div className="testimonial-img">
                <img src={s.img_src} alt={`${s.name}'s Profile Photo`} />
              </div>
              <p className="testimonial-content">{s.testimonial}</p>
              <h3>- {s.name}</h3>
            </div>
          </div>
        ))}
      </Slider>

      <div
        id="testimonial_right_navigation"
        className="testimonial_navigation_container"
      >
        <span
          onClick={() => {
            slider_ref.current.slickNext();
          }}
          id="testimonial-next"
					className="test-nav-link gray-text fa fa-angle-right"
					style={{marginRight:"200px", padding:"0px"}}
        />
      </div>
    </div>
  );
}







function StepSlider() {
	let slider_ref = React.useRef(null);
	var settings = {
		dots: false,
		infinite: true,
		speed: 500,
		fade: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 2000,
		pauseOnHover: false,
		arrows: false
	};
	return (
		<div id="">

			<Slider className="steps-container" {...settings} ref={slider_ref}>
				<div className="step-1 all-steps">
					<div className="row">
						<div className="col-lg-6">
							<h2 className="white-text">Step 1</h2>
							<h3 className="white-text">Open the QDS Pro App</h3>
						</div>
						<div className="col-lg-6">
							<img
								src="/assets/images/homesteps/step-1.webp"
								alt="Open The QDS Pro App"
							/>
						</div>
					</div>
				</div>
				{/* step2 */}
				<div className="step-2 all-steps">
					<div className="row">
						<div className="col-lg-6">
							<h2 className="white-text">Step 2</h2>
							<h3 className="white-text">Take The Photo Of Your Doubt</h3>
						</div>
						<div className="col-lg-6">
							<img
								src="/assets/images/homesteps/step-2.webp"
								alt="Open The QDS Pro App"
							/>
						</div>
					</div>
				</div>
				{/* step 3 */}
				<div className="step-3 all-steps">
					<div className="row">
						<div className="col-lg-6">
							<h2 className="white-text">Step 3</h2>
							<h3 className="white-text">Press The Submit Button</h3>
						</div>
						<div className="col-lg-6">
							<img
								src="/assets/images/homesteps/step-3.webp"
								alt="Open The QDS Pro App"
							/>
						</div>
					</div>
				</div>
			</Slider>


		</div>
	);
}

function ExamSlider({ items }) {
	let slider_ref = React.useRef(null);
	var settings = {
		dots: false,
		infinite: true,
		speed: 500,
		slidesToScroll: 1,
		rows: 8 < items.length ? 2 : 1,
		slidesToShow: 8 < items.length ? 8 : items.length,
		autoplay: true,
		autoplaySpeed: 2000,
		pauseOnHover: false,
		arrows: false,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 4,
					slidesToScroll: 1,
					infinite: true,
					dots: true,
					rows: 1,
				}
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 6,
					rows: 2,
					slidesToScroll: 2,
					initialSlide: 2
				}
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 3,
					rows: 2,
					slidesToScroll: 1
				}
			}
		]
	};


	return (
		<div id="">
			<Slider className="" {...settings} ref={slider_ref}>
				{
					items.map((item, i) => {
						return (

							<ExamBoxContainer key={i}>
								<Link href={{pathname: "/popular_courses", query: {course: item}}}>
									<a>
										<ExamBox>{item}</ExamBox>
									</a>
								</Link>
							</ExamBoxContainer>

						)
					})
				}
			</Slider>
		</div>
	);
}

const HomePage = () => {

	const [activeExamExcelTab, setActiveExamExcelTab] = React.useState(0);
	const [activeFeatureTab, setActiveFeatureTab] = React.useState(2);
	const [showExit, setShowExit] = React.useState(false);


	const [form, setForm] = useState({});
	const [checkbox1, setCheckbox1] = useState(false);
	const [checkbox2, setCheckbox2] = useState(false);


	const handleSubmit = (event) => {

		console.log(JSON.stringify(form))
		fetch("https://getform.io/f/0b5524c2-f754-468e-b761-47d71f460032", {
			method: "POST",
			headers: {
				Accept: "application/json",
			},
			body: JSON.stringify(form)
		})
			.then(response => {
				console.log(response)
				return response.text();
			})
			.then(data => {
				$('body').html(data);
			});
	}

	function handleInputChange(event) {
		event.persist();
		setForm(form => ({ ...form, [event.target.name]: event.target.value }));
	}

	function handleCheckbox(value) {
		if (value === 1) {
			setCheckbox1(!checkbox1)
		} else {
			setCheckbox2(!checkbox2)
		}
	}


	const router = useRouter();

	useEffect(() => {
		// on mount, check for active tab

		let u = new URL(window.location.href);
		let activeFeatureTab = u.searchParams.get('activeFeatureTab');
		if (activeFeatureTab !== null) {
			setActiveFeatureTab(Number(activeFeatureTab));
		}

		AOS.init();
	}, []);

	const steps =
		[
			{ name: 'Step 1', component: <Step1 values={form} onChange={handleInputChange} /> },
			{ name: 'Step 2', component: <Step2 values={form} onChange={handleInputChange} /> },
			{
				name: 'Step 3',
				component: <Step3
					values={form}
					onChange={handleInputChange}
					onCheckbox={handleCheckbox}
					checkbox1={checkbox1}
					checkbox2={checkbox2}
				/>
			},
			{
				name: 'Step 4',
				component: <Step4
					values={form}
					onChange={handleInputChange}
					onSubmit={handleSubmit}
					checkbox1={checkbox1}
					checkbox2={checkbox2}
				/>
			},
		]


	const handleActiveFeatureTabClick = (activeTab) => {
		setActiveFeatureTab((activeTab));
		router.push(`/?activeFeatureTab=${activeTab}`);
	}

	//["GMAT", "CAT", "MAH-CET", "GRE", "SAT", "BBA", "NMAT", "SNAP", "CMAT", "XAT", "IIFT", "MAT", "TISS-NET", "ATMA", "OMET"],

	let exam_list = [
		["GMAT", "CAT", "GRE", "SAT", "MAH-CET"],
		["IBPS PO", "SBI PO", "Bank Clerical", "RBI Grade A and Grade B", "Other"],
		["CLAT", "AILET", "SLAT", "MAH Law CET (5 year)", "LSAT India", "MAH Law CET (3 year)", "DU LLB", "Other"]
	];

	let feature_set_list = [
		[
			{
				title: "Smart Technology-Enabled Classrooms",
				subtitle: <FeatureSubtitle>Get the best coaching class experience at our coaching centres, which are designed and equipped with the modern teaching facilities like complete terminals with internet, LCDs, OHP Slide, Projectors, Public Address System, and much more... A state of the art infrastructural facility developed to support the sound process of teaching and learning.</FeatureSubtitle>
			},
			{
				title: "Small Batch Size of 4-5 Students",
				subtitle: <FeatureSubtitle>Small batch size of 4-5 students, ensuring personalized attention to each and every student. Now, no more hesitation in getting your doubts cleared, in this familiar environment.
				</FeatureSubtitle>
			},
			{
				title: "Highly Experienced Faculties",
				subtitle: <FeatureSubtitle>Highly experienced, lead faculties, who have previously served at other leading coaching institutes, they know you better than you do!</FeatureSubtitle>
			},
			{
				title: "Rigorous Classroom Training",
				subtitle: <FeatureSubtitle>Expect a very rigorous, thorough and intense preparation for your entrance exam.</FeatureSubtitle>
			},
			{
				title: "Study from Popular Author Books and Publication in addition to QDS Pro Study Material",
				subtitle: <FeatureSubtitle>'Only' coaching institute that prepares students from all popular author books and publications, in addition to its own customised study ma
					terial, to get you prepared even for the most difficult questions.</FeatureSubtitle>
			},
			{
				title: "Free Demo Session",
				subtitle: <FeatureSubtitle>Attend a free live demo session or request a free recorded demo session, before enrolling for the course.</FeatureSubtitle>
			},
			{
				title: "Regular Homework Assignments & Periodic Practice Tests",
				subtitle: <FeatureSubtitle>Regular Homework assignments to keep the students engaged in the entrance exam prep and periodic practice tests to track the progress of all the students.</FeatureSubtitle>
			},
			{
				title: "Get Access to a Huge Repository of Study Material & Question Bank on the QDS Pro Online Prep Portal",
				subtitle: <FeatureSubtitle>Study Library with all the ebooks of all the popular author books and publications, Question Bank with more than 20,000 practice questions, segregated section wise, topic wise and difficulty wise.</FeatureSubtitle>
			},
			{
				title: "Wide Range of Customised Packages",
				subtitle: <FeatureSubtitle>Choose from a wide range of Packages, customised to suit your requirements.</FeatureSubtitle>
			},
		],
		[
			{
				title: "Classroom-Like Learning Experience",
				subtitle: <FeatureSubtitle>Get a classroom-like learning experience at the comfort of your house.</FeatureSubtitle>
			},
			{
				title: "Thorough Conceptual Understanding",
				subtitle: <FeatureSubtitle>All the concepts from the very, very basic to the most advanced level covered in a very structured manner.</FeatureSubtitle>
			},
			{
				title: "Save Money, Time and Efforts",
				subtitle: <FeatureSubtitle>Get access to world class content at your fingertips, at extremely affordable prices.</FeatureSubtitle>
			},
			{
				title: "Unbelievable Convenience and Flexibility",
				subtitle: <FeatureSubtitle>Watch the video lectures 'Anytime, Anywhere'.</FeatureSubtitle>
			},
			{
				title: "Watch Free Trailers",
				subtitle: <FeatureSubtitle>Watch Trailer of each video lecture for Free, to gain an insight on what all is going to be covered in that particular video lecture, and then decide if you'd like to go ahead with the course.</FeatureSubtitle>
			},
			{
				title: "Accessible on Multiple Devices",
				subtitle: <FeatureSubtitle>Access the video lectures on any of your devices - computer, laptop, tablet, smart phone, etc...</FeatureSubtitle>
			},
			{
				title: "Doubt Solving",
				subtitle: <FeatureSubtitle>Get unlimited access to our 24 x 7 online doubt solving portal.</FeatureSubtitle>
			}
		],
		[
			{
				title: "Dedicated Platform for Virtual Classroom-Like Experience (accessible on all devices)",
				subtitle: <FeatureSubtitle>Get the best live online tutoring experience on our dedicated 'QDS Pro Online Prep' portal. Feel at a coaching centre, from the comfort of your house. Gain access to all the highly advanced tools and equipments in our classroom.</FeatureSubtitle>
			},
			{
				title: "Small Batch Size of 4-5 Students",
				subtitle: <FeatureSubtitle>Small batch size of 4-5 students, ensuring personalized attention to each and every student. Now, no more hesitation in getting your doubts cleared, in this familiar environment.</FeatureSubtitle>
			},
			{
				title: "Highly Experienced Faculties",
				subtitle: <FeatureSubtitle>Highly experienced, lead faculties, who have previously served at other leading coaching institutes, they know you better than you do!</FeatureSubtitle>
			},
			{
				title: "Rigorous Classroom Training",
				subtitle: <FeatureSubtitle>Expect a very rigorous, thorough and intense preparation for your entrance exam.</FeatureSubtitle>
			},
			{
				title: "Study from Popular Author Books and Publication in addition to QDS Pro Study Material",
				subtitle: <FeatureSubtitle>'Only' coaching institute that prepares students from all popular author books and publications, in addition to its own customised study material, to get you prepared even for the most difficult questions.</FeatureSubtitle>
			},
			{
				title: "Free Demo Session",
				subtitle: <FeatureSubtitle>Attend a free live demo session or request a free recorded demo session, before enrolling for the course.</FeatureSubtitle>
			},
			{
				title: "Regular Homework Assignments & Periodic Practice Tests",
				subtitle: <FeatureSubtitle>Regular Homework assignments to keep the students engaged in the entrance exam prep and periodic practice tests to track the progress of all the students.</FeatureSubtitle>
			},
			{
				title: "Huge Repository of Study Material & Question Bank on QDS Pro Online Prep Portal",
				subtitle: <FeatureSubtitle>Study Library with all the ebooks of all the popular author books and publications, Question Bank with more than 20,000 practice questions, segregated section wise, topic wise and difficulty wise.</FeatureSubtitle>
			},
			{
				title: "Unbelievable Convenience and Flexibility",
				subtitle: <FeatureSubtitle>Attend the classes anytime, from anywhere, using any device.</FeatureSubtitle>
			},
			{
				title: "Wide Range of Customised Packages",
				subtitle: <FeatureSubtitle>Choose from a wide range of Packages, customised to suit your requirements.</FeatureSubtitle>
			},

		],
		[
			{
				title: "Live Online Doubt Solving Sessions",
				subtitle: <FeatureSubtitle>Opt for any number of Live Online Doubt Solving Sessions with our Expert Faculties.</FeatureSubtitle>
			},
			{
				title: "Instant Video Solutions",
				subtitle: <FeatureSubtitle>Get Instant Video Solutions to all your doubts from all the popular author books and publications.</FeatureSubtitle>
			},
			{
				title: "Quick, Reliable and Comprehensible Explanatory Answers",
				subtitle: <FeatureSubtitle>Get Quick, Reliable and Comprehensible Explanatory Answers to Any of your doubts from Any of your books at Any hour of the day.</FeatureSubtitle>
			},
			{
				title: "Mock Tests Review Sessions",
				subtitle: <FeatureSubtitle>Mock Test Review Sessions to review your mock tests, to identify your strengths and weaknesses (SWOT Analysis), to discuss shortcuts, test-taking strategies, etc...</FeatureSubtitle>
			},
			{
				title: "Valuable Feedback",
				subtitle: <FeatureSubtitle>Provide your Valuable Feedback on Any type of Doubt Solving Service that you opt for.</FeatureSubtitle>
			}
		],
		[
			{
				title: "Tutoring at Your Doorstep",
				subtitle: <FeatureSubtitle>Get tutored for your entrance exams by our expert faculties, at the comfort of your own house.</FeatureSubtitle>
			},
			{
				title: "Highly Experienced Faculties",
				subtitle: <FeatureSubtitle>Highly experienced, lead faculties, who have previously served at other leading coaching institutes, they know you better than you do!</FeatureSubtitle>
			},
			{
				title: "One-To-One Interactive Sessions",
				subtitle: <FeatureSubtitle>Attend One-To-One Interactive Sessions in a familiar atmosphere, learn at your own pace and ask any number of doubts, with no hesitation.</FeatureSubtitle>
			},
			{
				title: "Fully Customised Study Methodology and Study Plan",
				subtitle: <FeatureSubtitle>Our faculties will design a personally customised study plan and class schedule, in line with the requirements of the student. The study plan will be reviewed and revised periodically, based on the progress of the student.</FeatureSubtitle>
			},
			{
				title: "Day-to-Day Track of Student's Progress",
				subtitle: <FeatureSubtitle>Our executives would be continuously monitoring and tracking the progress of the student, ensuring that the student's test preparation is done in a very structured manner and no stone is left unturned in his preparation.</FeatureSubtitle>
			},
			{
				title: "Unbelievable Convenience and Flexibility",
				subtitle: <FeatureSubtitle>Learn at the comfort of your house, on your preferred days and preferred timings. Save money, time and efforts.</FeatureSubtitle>
			},
			{
				title: "Get Access to a Huge Repository of Study Material & Question Bank on the QDS Pro Online Prep Portal",
				subtitle: <FeatureSubtitle>Study Library with all the ebooks of all the popular author books and publications, Question Bank with more than 20,000 practice questions, segregated section wise, topic wise and difficulty wise.</FeatureSubtitle>
			},
			{
				title: "Continuous Two-Way Feedback",
				subtitle: <FeatureSubtitle>Our executives would be continuously seeking feedback from both the student and the faculty, to ensure the smooth conduct of classes and to address the grievances of the student, if any.</FeatureSubtitle>
			}
		],


	];

	let enquire_list = ["QDS Pro Coaching Classes", "QDS Pro Video Lectures", "QDS Pro Online Live Tutoring", "ONLINE DOUBT SOLVING - 'ANYTIME, ANYWHERE'"];

	let cta_list = [
		{
			button_name: 'Enquire Now',
			link: '/enquiry',
			activeTab: 1
		},
		{
			button_name: 'Enquire Now',
			link: '/enquiry',
			activeTab: 2

		},
		{
			button_name: 'Enquire Now',
			link: '/enquiry',
			activeTab: 3
		},
		{
			button_name: 'Try for free',
			link: 'https://app.qdspro.com',
		},
		{
			button_name: 'Enquire Now',
			link: '/enquiry',
			activeTab: 5
		},
	];



	let sliderItemsArray = [
		//Coaching Classes Testimonials
		[
			{
				img_src: '/assets/images/sruchi.webp',
				testimonial: `Attended the QDS Pro GMAT classes under Somils' guidance and I have to say I haven't had the chance to meet such a dedicated, up-to-date and involved teacher in a while! The batch size was kept to a maximum of 5 so that each of us got to receive personal attention for our own queries and also got the opportunity to brain storm as a group when required. There was a customized study plan for each of us based on our respective strengths and weaknesses and Somil has gone out of his way to accommodate my timeline of completing a 3 month course in a period of 2 and a half months without missing out on any study material and getting us all set for the exam. Highly recommended for - 1) Scoring well, 2) Learning from a teacher who truly wants you to be able to give it your very best, 3) Learning some COOL Somil tricks to adapt to questions better.`,
				name: 'Sruchi Kewalramani'
			},
			{
				img_src: '/assets/images/photo.webp',
				testimonial: `I had a major fear in attempting the GMAT exam until i met Somil Shah. He convinced me in no time that he would prepare me for this exam in the best possible manner with least wastage of time. He gave me a super demo className which was the major fear overcoming factor for me to realise that I can actually accomplish this! Over the course of the training, his patience and teaching skills were amazing. I highly recommend all individuals who want to pursue the GMAT exam to give team QDS Pro a chance and I’m sure everyone will be extremely pleased with the experience. Good luck to Somil, Team QDS and all the future students.`,
				name: 'Kushal Kakad'
			},
			{
				img_src: '/assets/images/sindhuja.webp',
				testimonial: `I have been training under Somil Shah for about 3 months now and my experience here has been the absolute best. Somil makes sure the classes are rigorous yet very interactive and easy to follow. He is very particular on having small sized batches so he can do justice to the time and effort that every student puts in. The simplicity with which he is able to explain concepts and ideas tells you how thorough he is with what he teaches. His notes are comprehensive, detailed and foolproof. I cannot recommend QDS Pro enough.`,
				name: 'Sindhuja Bheesette'
			},
			{
				img_src: 'https://lh4.googleusercontent.com/-qFEQeC-RjTM/AAAAAAAAAAI/AAAAAAAAAAA/ghRSmHhNHKw/s40-c-rp-mo-br100/photo.jpg',
				testimonial: 'I am taking the GMAT one to one classes from Somil sir for the past three months and it is undoubtedly an exceptional coaching institute. Somil Sir has the dedication and the passion only to teach the students first and then think about money later, that’s make him and the coaching institute unique. I am sure with help of Somil sir, I will get my desired scored in GMAT. By the way I am working professional and for people like us, it is the best choice....',
				name: 'Saswat Patel'
			},
			{
				img_src: 'https://lh4.googleusercontent.com/-dbPwbbxxS24/AAAAAAAAAAI/AAAAAAAAAAA/NuisBwfU0SI/w60-h60-p-rp-mo-br100/photo.jpg',
				testimonial: `QDS Pro is very skilled in their ways of teaching and I am speaking from personal experience as I am currently taking classes. They have made learning GMAT very easy for me. Teachers like Soumil Sir and Ravina Ma’am, have the knowledge and the ability to help any student get a score of their desire. And the personal attention they provide to every student is unparalleled to any other institution. Very Highly Recommended!`,
				name: 'Nikhil Vichare'
			},
			{
				img_src: '/assets/images/yashmehta.webp',
				testimonial: `In my case I am the only student in andheri branch still somil sir and raveena Maam come to andheri branch from charni road to attend a single student so it doesn’t matter how many students are there in a batch you can choose any of the branch and timing as per your comfort both the aspects are took into consideration plus doubts of every student is considered individually overall everything perfect about the className. The faculty is amazing and a very friendly environment.`,
				name: 'Yash Mehta'
			}
		],
		[
			{
				img_src: '/assets/images/photo.webp',
				testimonial: `It has been an amazing experience at QDS Pro. The best part of the institute is that all the services are under one roof so I did not have to go here and there for collecting bits and pieces for my prep. The Team has been supportive throughout the journey. Thanks Team QDS Pro.`,
				name: 'Yashesh Sanghvi'
			},
			{
				img_src: '/assets/images/photo.webp',
				testimonial: `I have been here for my preparation of CAT exam. What I really liked about this institute is that they have given each and everything that they have promised and that also in time. Rather I would say they deliver far more than what they actually say. I had few customizations for the services during my preparation, which were all taken care of. I would recommend QDS Pro to all my friends and relatives.`,
				name: 'Akash Tolani'
			},
			{
				img_src: '/assets/images/photo.webp',
				testimonial: `I was able to achieve my targets with the help of QDS Pro lectures. The teaching is of high quality covering all the concepts. I saw my mock test scores increasing due to the rigorous practice that I underwent under QDS Pro. A big thumbs up for this fantastic institute.`,
				name: 'Sonali Savla'
			},
			{
				img_src: '/assets/images/photo.webp',
				testimonial: `I was a little worried about my preparation but as soon as I joined QDS Pro, besides their amazing methodology of teaching, they also motivate students and continuously guide them throughout the entire preparation; hence, I was no longer in stress. Cheers to QDS Pro classes and their efforts which are changing lives of so many students.`,
				name: 'Pinal Vakharia'
			},
			{
				img_src: '/assets/images/photo.webp',
				testimonial: `I am more than happy that I was a part of QDS Pro Coaching institute. Faculty here give their full efforts behind training the students. They make sure that the student is following each and every concept. They also have a very one to one connect with all the students which help them tracking the progress of each and every student. I would highly recommend this institute to all the folks.`,
				name: 'Payal Morakhia'
			},
		],
		//Live ONline Tutoring Testimonials
		[
			{
				img_src: 'https://lh6.googleusercontent.com/-CZqKGR_rUDg/AAAAAAAAAAI/AAAAAAAAAAA/gkMvmkVyaKc/w60-h60-p-rp-mo-br100/photo.jpg',
				testimonial: `After attending numerous trial classes from different institutes in Mumbai, I finally made an informed decision and joined QDS Pro for my GMAT exam. Hands down, if you're looking for an elaborate coaching institute with REAL personal attention, then QDS is the place for you. There are a lot of well known institutes which are good but rush through the syllabus or have so many students that they don't give personal attention (believe me because I have taken trial classes at multiple centres). You can even ask for free trial session here and see it for yourself. I do not have any regrets. Even during pandemic, the entire syllabus was covered online in such a smooth way that I now prefer online coaching over offline coaching.`,
				name: 'Khushmi Chheda'
			},
			{
				img_src: '/assets/images/photo.webp',
				testimonial: `One of the best coaching institutes which really helps students to achieve the desired score.Teachers here our very hardworking and explain the concepts multiple times and  Somil sir especially his teaching style is amazing.Both the quants and verbal teaching is fabulous.Also the coaching material provided is more than sufficient to crack the GMAT exam.I would recommend everyone if you are looking to prepare for GMAT or any competitive exam without any doubt join QDSPRO.Thanks a lot QDS PRO Team for your super efforts.`,
				name: 'Abdul Hasan Buddha'
			},
			{
				img_src: '/assets/images/photo.webp',
				testimonial: `Qds pro is the best coaching institute for MBA entrance exams. Unlikely other institute who focus on professionalism rather than studying QDS pro focuses on studying with a personal touch. The sessions are interactive and always flexible with timings. The main thing is the concepts which are cleared in detail with the help of many examples. I personally would suggest to take demo session and then you would end up joining it . The main thing for teaching institute is understanding each and every students mind and working with them in the same way and that is the motto of QDS pr.`,
				name: 'Adit Mehta'
			},
			{
				img_src: 'https://lh5.googleusercontent.com/-pKjamLkGQsI/AAAAAAAAAAI/AAAAAAAAAAA/QaN51gQWgqY/w60-h60-p-rp-mo-br100/photo.jpg',
				testimonial: `I've attended GMAT quant classes at QDS both in person and online since COVID19. I can honestly say the teaching is excellent - QDS' style is to go from the basic to advanced level to make sure that your fundamentals are solid and then push you to answer the most difficult questions. The instructors are some of the friendliest people you'll ever meet and class sizes are small. Definitely recommended.`,
				name: 'Paul Clewett'
			},
			{
				img_src: 'https://lh6.googleusercontent.com/-JbfujVYfVj8/AAAAAAAAAAI/AAAAAAAAAAA/bl8C5HEoynM/w60-h60-p-rp-mo-br100/photo.jpg',
				testimonial: `I couldn't think of any other class than QDS Pro for my GMAT preparation. The faculties are absolutely helpful and focused solely on your prep in the best possible way according to your schedule. I would strongly anyone who is looking for GMAT prep or any other MBA entrance exams to try their demo class and then decide. I'm sure you will definitely end up joining them.`,
				name: 'Sagar Goyal'
			},
			{
				img_src: '/assets/images/photo.webp',
				testimonial: `QDS Pro exceeds expectations! Unlike other coaching institutes focused on 'getting done', the attitude & proficiency of faculty at QDS Pro is amazing. Concepts are key and the teaching method is very interactive fostering learning-by-doing. I am a current student and I am very happy with the preparation.`,
				name: 'Simran Prabhani'
			}
		],
		[

			{
				img_src: '/assets/images/admin.webp',
				testimonial: 'QDS Pro was an engaging experience. The solutions provided were precise and convincing. I am really thankful to the entire team of QDS Pro to have helped me prepare for all my management entrance exams and for their timeliness.',
				name: 'Pratik Shejwadkar'
			},
			{
				img_src: '/assets/images/testimonial-3.webp',
				testimonial: `fastest 24 x 7 Online Doubt Solving Platform in India👍
	    	      Best ever Platform for Management, Bank, Law & Other
	    	      Entrance 👍 Good experienced👌⭐⭐⭐⭐⭐`,
				name: 'Prem Shah'
			},
			{
				img_src: '/assets/images/photo.webp',
				testimonial: `I came to know about QDS Pro website and app through one of my friend. I was sceptical in trying it first but on using it my perception has changed. With growing technology this is the best use one can put it to. My doubts were solved as good as I was sitting in front of a professor and asking him face to face. The response was very quick and in a very simple and elaborative way. I would advise every entrance exam student to try this app. I have also subscribed to the paid version of the same.`,
				name: 'Ankit Shah'
			},
			{
				img_src: '/assets/images/photo.webp',
				testimonial: `QDS Pro is the best online doubt solving platform when it comes to any entrance exam preparation. My son has been using the platform for solving all his Quant and Verbal doubts and he is very happy with the services provided by the platform. We thank QDS Pro and it's team for providing this amazing doubt solving service.`,
				name: 'Neelam Shah'
			},
			{
				img_src: '/assets/images/photo.webp',
				testimonial: `QDS Pro in an excellent online doubt solving platform for all types of entrance exams. It is very quick , userfriendly and reliable doubt solving program. The best feature of this platform is that it is anytime - anywhere app.`,
				name: 'Priyank Kothari'
			},
			{
				img_src: '/assets/images/testimonial-4.webp',
				testimonial: `QDS Pro is just amazing the user experience is next level.
	    	      My doubts were solved in just few minutes. Packages
	    	      provided by team QDS Pro are worth for money. Getting our
	    	      doubts solved just for few sum of money which can give us
	    	      an upper edge from others i think it&apos;s a wise decision.
	    	      #jab hamare pass hai QDS Pro toh kyu lena hai Tension Bro.`,
				name: 'Yash Shah'
			},
			{
				img_src: '/assets/images/testimonial-5.webp',
				testimonial: `It's a website for quick solving for your doubts that
	    	      occur to you during your exams. A perfect all in one app
	    	      with best possible features overall a good experience.`,
				name: 'Yashvi Shah'
			},
			{
				img_src: '/assets/images/photo.webp',
				testimonial: 'QDS Pro is an excellent doubt solving program. Very Happy with this app. Helped me a lot in my journey. The quickest and easiest way of solving ur doubts anywhere anytime.',
				name: 'Nishank Kothari'
			},
			{
				img_src: '/assets/images/testimonial-2.webp',
				testimonial: `Very nice website. It really helped to solve my doubts
	    	      instantly. Somil Shah professor is very brilliant`,
				name: 'Dhruvesh Parikh'
			},
			{
				img_src: '/assets/images/photo.webp',
				testimonial: 'QDS pro is very nice app. It helped in solving my problems very quickly',
				name: 'Bijal Shah'
			}
		],
		[
			{
				img_src: '/assets/images/photo.webp',
				testimonial: 'I had an amazing experience with home tutoring service at QDS Pro. The Faculty assigned to me was highly qualified and helped me prepare for my exams thoroughly. He was extremely flexible and adaptable to my requirements in terms of teaching methodology. ',
				name: 'Abhishek Singh'
			},
			{
				img_src: '/assets/images/photo.webp',
				testimonial: 'One thing that I really liked about this Institute is that there was complete handholding right from the beginning till the end. In case if I was facing any minor issue,  that also if I report to the admin, they make sure that they consult with the faculty and get that incorporated in my preparation. Overall my journey was super and i would recommend everyone to join this institute.',
				name: 'Rajat Patel'
			},
			{
				img_src: '/assets/images/photo.webp',
				testimonial: 'I loved the tutoring service at QDS Pro Coaching Institute. The whole service was customized as per my requirements in terms of study material, study plan, teaching pedagogy, timings etc. The process was completely flexible and convenient, at the same time, rigorous in terms preparation.',
				name: 'Aashit Saxena'
			},
			{
				img_src: '/assets/images/photo.webp',
				testimonial: 'My parents and I are extremely happy with the home tutoring service offered by QDS Pro. The Faculty tracked my progress regularly which helped in being on the right track, time to time. The Faculty was excellent and was able to improve my scores considerably. Thanks QDS Pro for helping me achieve my dreams. Guys, this is the place where your dreams will come true! ',
				name: 'Monica Kelkar'
			},
			{
				img_src: '/assets/images/photo.webp',
				testimonial: 'The classes were of high quality and the faculty prepared me diligently. The whole program was well designed and the whole process was smooth. We are glad to have taken this service and would recommend everyone to join this institute. ',
				name: 'Ashutosh Banerjee'
			},

		],

	]

	return (
		<div>
			<Head>
				<title>QDS Pro Entrance Exams Coaching Institute</title>
				<meta name="description" content="Free Access to Study Material, Question Bank, Doubt Solving, Mock Tests!, Personalized Batch of 4-5 Students, Epitome of Quality Prep, You Order We Serve!" />
				<meta name="keywords" content="qdspro, QDSPro, Online Test Preparation, GMAT Preparation, CAT Preparation,Entrance Exams, QDS Pro Entrance Exams Coaching Institute, MBA Entrance, SAT,NMAT,SNAP,IBPSPO,XAT,RBI-GRADE B "></meta>

				{/* Essential Tags For Social Platforms */}
				{/* TITLE: QDS Pro Entrance Exams Coaching Institute DESCRIPTION: QDS Pro is the one stop solution for all the entrance exams preparation related needs, especially for MBA entrance exams like GMAT, GRE, CAT, SAT, NMAT, SNAP, XAT etc.*/}
				<meta property="og:title" content="QDS Pro -Best GMAT, CAT, GRE, SAT, MAH-CET, etc. Coaching" />
				<meta property="og:description" content="Free Access to Study Material, Question Bank, Doubt Solving, Mock Tests!, Personalized Batch of 4-5 Students, Epitome of Quality Prep, You Order We Serve!"/>
				<meta property="og:image" content="/assets/images/QDSProMetaCoverImage.webp" />
				<meta property="og:url" content="https://www.qdspro.com/" />
				<meta name="twitter:card" content="Free Access to Study Material, Question Bank, Doubt Solving, Mock Tests!, Personalized Batch of 4-5 Students, Epitome of Quality Prep, You Order We Serve!"></meta>

			</Head>
			{/* page loader */}

			<div className="aboutus-section">
				<div className="qds-wrapper">
					<Header />
					<style>
						{`

					.new-banner-common
					{
						background-size: contain;
						position: relative;
						left: 0%;
						padding: 2% 20%;
						height: 80vh;
						width: 100%;
						background-position: center;
					}

					.home-banner {
						width:auto;
						height: 100vh;
						background: url(https://firebasestorage.googleapis.com/v0/b/qdsprowebsiteadmin.appspot.com/o/backgroundimageqds%2F1.png?alt=media&token=bafa7dc2-d97b-40b8-a276-67551444c9bb) no-repeat;
						background-size: cover;
						background-position: center;
						background-attachment: fixed;
					}

					.banner-slide-nov-14 {
						background: url(https://firebasestorage.googleapis.com/v0/b/qdsprowebsiteadmin.appspot.com/o/backgroundimageqds%2FBanner-1-updated.png?alt=media&token=58597011-930a-4a2a-aafa-1b6295fca6ea);
						background-repeat: no-repeat;
						/* background-size: contain; */
						background-size: 75%;
						background-position: center;
						height: 80vh;
						width:auto;
					  }

					.banner-slide-dec-07 {
					  background: url('/assets/images/coaching-class-banner-new.webp');
					  background-repeat: no-repeat;
					  /* background-size: contain; */
					  background-size: 55%;
					  background-position: top;
					  height: 80vh;
					  width:auto;
					}
			

					.banner-slide-dec-14 {
						position: relative;
						left: 0;
						width: 0;
						background: url(https://firebasestorage.googleapis.com/v0/b/qdsprowebsiteadmin.appspot.com/o/backgroundimageqds%2Fvideo-banner-3-updated-2.png?alt=media&token=03f969ab-46c1-4350-8824-b32214ea6688);
						background-repeat: no-repeat;
						background-size: 45%;
						background-position: top;
						height: 80vh;
						width:auto;

					}

					.banner-home-tutoring{
						background: url('/assets/images/home-tutoring-banner-edited.webp');
						background-repeat: no-repeat;
						background-size: contain;
						background-position: top;
						height: 80vh;
						width:auto;
						background-size: 54%;
					}

					.banner-slide-1{
						background: url(assets/images/qdsdoubt-without-background-edited.webp);
						background-repeat: no-repeat;
						background-size: contain;
						background-position: top;
						height: 80vh;
						width:auto;
						background-size: 40%;
					}
				
					.testimonial-section {
						padding-bottom: 30px;
					}

					#testimonial_wrapper {
					  display: flex;
					  align-items: center;
					  margin: auto;
					}

					.testimonial-wrapper{
						height:400px;
					}
					@media (max-width:768px)
					{
						.new-banner-common
						{
							padding: 30% 0%;
						}
						.testimonial-wrapper{
							height:1000px;
						}
					}


					.testimonial_navigation_container {
					  display: flex;
					  align-items: center;
					  justify-content: center;
					  flex-direction: column;
					}

					@media screen and (max-width: 420px) {
					  .testimonial_navigation_container {
					    display: none;
					  }
					}

					.s-banner-buttons{
						display: flex !important;
						flex-direction: row;
						justify-content: center;
						align-items: flex-end;
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
						transition: width 0s ease-out;
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
						transition: width 0s ease-out;
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

					.s-services-text{
						font-size: 30px;
					}

					@media(max-width: 768px)
					{	
						.s-content:hover .s-description{
							width: 70%;
							margin-top: 0%;
							font-size: 10px;
						}
	
						.s-content:hover .titleDiv{
							
							padding: 0%;
							margin: 0%;
							width: 30%;
							disply: block;
						}

						.featureTitle
						{
							font-size: 12px;
						}
					}

					@media(max-width: 700px){
						.s-services-text{
							font-size: 18px;
						}
					}

					.s-single-step{
						padding-left: 60px;
						padding-right: 60px;
					}
					.s-single-step label{
						font-weight: bold;
					}
					.s-single-step label.form-check-label{
						font-weight: normal;
					}

					.step-progress .col-sm-12{
						margin: auto;
						background: #192f5a;
						color: #fff;
						padding: 20px;
						border-radius: 20px;
					}

					@keyframes fadeIn{0%{opacity:0}100%{opacity:1}}

                
					.s-single-step{
						animation-name: fadeIn;
						animation-duration: 1.2s;
					}

					.coaching-classes-package-section{						height:1100px;
						overflow-y:auto;
						overflow-x:hidden;
						height:1100px;
					}

					.live-online-package-section{
                        overflow-y:auto;
						overflow-x:hidden;
						height:1100px;
					}

					.home-tutor-package-section{
						height:1100px;
						overflow-y:auto;
						overflow-x:hidden;
					}

					@media(max-width: 768px){ 
						.coaching-classes-package-section{
							height:1400px;
							overflow-y:auto;
						}
						.live-online-package-section{
							overflow-y:auto;
							height:1500px;
						}
						.home-tutor-package-section{
							overflow-y:auto;
							height:1500px;
						}
					}

					.popular-course-section
					{
						background-color: #e2e2e2;
					}

					.why-qds-section
					{
						background-color: #e2e2e2;
					}

					.top-section
					{
						margin-bottom: 0px;
					}

				`}
					</style>

					<HomeSlider />
					{/* <HomeSliderThumbnails></HomeSliderThumbnails> */}

					<div id="exams_we_excel" className="popular-course-section">

						<div className="heading-section top-section"
								data-aos="zoom-out"
								data-aos-duration="1500"
								data-aos-easing="ease-in-linear"
							>
								<SectionTitle>Our Most Popular Courses</SectionTitle>
							</div>

						{/* <ExamsExcelWrapper>
							<Box active={activeExamExcelTab === 0} onClick={() => {

								setActiveExamExcelTab(0)
							}}><span id='1f'></span></Box>
							<Box active={activeExamExcelTab === 1} onClick={() => setActiveExamExcelTab(1)}><span span="true" id='2f'></span></Box>
							<Box active={activeExamExcelTab === 2} onClick={() => setActiveExamExcelTab(2)}><span span="true" id='3f'></span></Box>
						</ExamsExcelWrapper> */}

						<ExamBoxWrapper>
							<ExamSlider items={exam_list[0]} />
							{/* {activeExamExcelTab } */}
						</ExamBoxWrapper>
					</div>



					<SecondClass>
						<div className="heading-section top-section"
								data-aos="zoom-out"
								data-aos-duration="1500"
								data-aos-easing="ease-in-linear"
							>
								<SectionTitle>Our Services</SectionTitle>
						</div>
						<div id="s-services-section" style={{ maxHeight: 'fit-content' }}>
							<ExamsExcelWrapper>
								<Box active={activeFeatureTab === 2} onClick={handleActiveFeatureTabClick.bind(this, 2)}><span className="s-services-text" >Live Online Tutoring</span></Box>
								<Box active={activeFeatureTab === 0} onClick={handleActiveFeatureTabClick.bind(this, 0)}><span className="s-services-text" >Coaching Classes</span></Box>
							</ExamsExcelWrapper>
							<ExamsExcelWrapper>
								<Box active={activeFeatureTab === 1} onClick={handleActiveFeatureTabClick.bind(this, 1)}><span className="s-services-text" >Video Lectures</span></Box>
								<Box active={activeFeatureTab === 3} onClick={handleActiveFeatureTabClick.bind(this, 3)}><span className="s-services-text" >Doubt Solving</span></Box>
								<Box active={activeFeatureTab === 4} onClick={handleActiveFeatureTabClick.bind(this, 4)}><span className="s-services-text" >Home Tutoring</span></Box>
							</ExamsExcelWrapper>
						</div>
						<div className="why-qds-section">
							<div>
								<div className="heading-section"
									data-aos="zoom-out"
									data-aos-duration="1500"
									data-aos-easing="ease-in-linear"
								>
									<SectionTitle>Why QDS Pro?</SectionTitle>
								</div>
							</div>
							{/* Card toggle */}
							<div className="qds-cards">
								<div className="bv-example-row">
									{
										feature_set_list[activeFeatureTab].map((feature, i) => {
											// return (
											// 	<FeatureSet>
											// 		<div className="holdingbox">
											// 			<div className="leftbox">
											// 				<div className=" card-title">
											// 						{feature.title}
											// 				</div>
											// 			</div>
											// 			<div className="card rightbox">
											// 				<p className="card-text content">
											// 					{feature.subtitle}
											// 				</p>
											// 			</div>
											// 		</div>
											// 	</FeatureSet>
											// );
											return (
												<div key={i} className="s-content">
													<div className="titleDiv" >
													<h2
														data-aos="zoom-out"
														data-aos-delay="300"
														data-aos-duration="1500"
														data-aos-easing="ease-in-linear"
														className="featureTitle">
														{feature.title}{/*toUpperCase()*/}
													</h2>
													</div>
													<p className="s-description text-justify">
														{feature.subtitle}
													</p>
												</div>
											);
										})
									}
									{/**{activeFeatureTab == 0 ? <div className="s-content">
										<h2 id='featuretitle' className="featureTitle">

										</h2>
										<p id='featurepara' className="s-description">

										</p>
									</div>
										: null
									}
									{activeFeatureTab == 1 ? <div className="s-content">
										<h2 id='featuretitle1' className="featureTitle">

										</h2>
										<p id='featurepara1' className="s-description">

										</p>
									</div>
										: null
									}
									{activeFeatureTab == 2 ? <div className="s-content">
										<h2 id='featuretitle2' className="featureTitle">

										</h2>
										<p id='featurepara2' className="s-description">

										</p>
									</div>
										: null
									}
									{activeFeatureTab == 3 ? <div className="s-content">
										<h2 id='featuretitle3' className="featureTitle">

										</h2>
										<p id='featurepara3' className="s-description">

										</p>
									</div>
										: null
									}
									{activeFeatureTab == 4 ? <div className="s-content">
										<h2 id='featuretitle4' className="featureTitle">

										</h2>
										<p id='featurepara4' className="s-description">

										</p>
									</div>
										: null
									}*/}

								</div>
							</div>
						</div>
					</SecondClass>







					{/* signup section  */}
					<div className="signup-section" style={{ width: 'auto', maxHeight: '100%' }}>
						<h3
							data-aos="fade-left"
							data-aos-delay="0"
							data-aos-duration="1500"
							data-aos-easing="ease-in-linear"
							className="banner-heading-h3">
							{enquire_list[activeFeatureTab]}
						</h3>
						<h2
							data-aos="fade-right"
							data-aos-delay="0"
							data-aos-duration="1500"
							data-aos-easing="ease-in-linear"
							className="banner-heading-h2">Are You Ready to Start?</h2>
						{activeFeatureTab === 3 ? (
							<a
								href={cta_list[activeFeatureTab].link}
								className="btn btn-primary btn-lg"
								title="Try for free "
								data-aos="zoom-in"
								data-aos-delay="0"
								data-aos-duration="1500"
								data-aos-easing="ease-in-linear"
							>
								{cta_list[activeFeatureTab].button_name}
							</a>
						) : (
								<Link
									href={{
										pathname: cta_list[activeFeatureTab].link,
										query: { activeTab: cta_list[activeFeatureTab].activeTab }
									}}
								>
									<button
										className="btn btn-primary btn-lg"
										style={{ margin: '40px', color: 'white' }}
										title="Enquire Now"
										data-aos="zoom-in"
										data-aos-delay="0"
										data-aos-duration="1500"
										data-aos-easing="ease-in-linear"
									>
										{cta_list[activeFeatureTab].button_name}
									</button>
								</Link>
							)}
						{activeFeatureTab === 0 || activeFeatureTab === 2 || activeFeatureTab === 4 ? (
							<Link
								href={{
									pathname: "/enquiry",
									query: { activeTab: 6, select: activeFeatureTab }
								}}
							>
								<button
									className="btn btn-primary btn-lg"
									style={{ margin: '40px', color: 'white' }}
									title="Book a Free Demo Session"
									data-aos="zoom-in"
									data-aos-delay="0"
									data-aos-duration="1500"
									data-aos-easing="ease-in-linear"
								>
									Book a Free Demo Session
		</button>
							</Link>
						) : (
								""
							)}
					</div>

					{/* {
						activeFeatureTab === 0 ? (
							<div className="coaching-classes-package-section">
								<div className="packages-section">
									<div className="heading-section">
										<h1 className="heading-text">Packages and Pricing</h1>
									</div>
									<CoachingClassPackages activeFeatureTab={activeFeatureTab} />
								</div>
							</div>
						) : null
					}

					{
						activeFeatureTab === 2 ? (
							<div className="live-online-package-section">
								<div className="packages-section">
									<div className="heading-section">
										<h1 className="heading-text">Packages and Pricing</h1>
									</div>
									<LiveOnlinePackages activeFeatureTab={activeFeatureTab} />
								</div>
							</div>
						) : null
					} */}


					{
						activeFeatureTab === 4 ? (
							<div className="home-tutor-package-section">
								<div className="packages-section">
									<div className="heading-section">
										<h1 className="heading-text">Packages and Pricing</h1>
									</div>
									<HomeTutoringPackages activeFeatureTab={activeFeatureTab} />
								</div>
							</div>
						) : null
					}



					{
						activeFeatureTab === 2 || activeFeatureTab === 4 ? (
							<div style={{ background: "#f7f7f7" }} >
								<div className="heading-section">
									<SectionTitle>Create Your Own Tutor with QDS Pro !</SectionTitle>
								</div>

								<div className="s-create-tutor-content">
									<div style={{ marginTop: "10px", marginLeft: "50px", marginRight: "50px" }} >
										<p style={{ fontSize: "20px" }}>
											Why fall into the hassle of attending multiple calls to check what fits you best. Leave that to us, quickly help us with a few pointers mentioned below and we shall get you the exact fit !
										</p>
										<p style={{ fontSize: "20px" }}>
											Take a free demo session with the tutor of your choice, your exact fit and be confident before you start with your preparation!
										</p>


									</div>
									<div style={{ paddingBottom: "60px" }} className='step-progress'>
										<div className="row">
											<div className="col-sm-12 col-md-8"
												data-aos="fade-in-left"
												data-aos-delay="0"
												data-aos-duration="1500"
												data-aos-easing="ease-in-linear"
											>
												<p style={{ fontSize: "20px", fontStyle: "italic", textAlign: "center", color: "#77bf43" }}>
													We intend to give back to the students the powers they deserve.
												</p>

												<div className="text-center">
													<StepZilla backButtonText="Back" steps={steps} />
												</div>
											</div>
										</div>
									</div>
								</div>


							</div>
						) : (
								null
							)
					}

					{/* Comparision Tables */}

					{activeFeatureTab === 0 && <div className="testimonial-section"

					>
						<div className="heading-section">
							<h1 className="heading-text">Compare Coaching Classes</h1>
						</div>

						<div
							style={{ display: 'flex', justifyContent: 'center' }}>
							<CompareCoachingClasses />
						</div>
					</div>}

					{activeFeatureTab === 2 && <div className="testimonial-section"
						data-aos="fade-left"
						data-aos-duration="500"
						data-aos-easing="ease-in-sine"
					>
						<div className="heading-section">
							<h1 className="heading-text">Compare Online Test Prep Companies</h1>
						</div>

						<div style={{ display: 'flex', justifyContent: 'center' }}>
							<CompareOnlinePrepCompanies />
						</div>
					</div>}



					{/* testimonial and it's styles */}

					<div className="testimonial-section">
						<div className="heading-section">
							<h1 className="heading-text">Student Testimonials</h1>
						</div>
						<TestimonialSlider sliderItems={sliderItemsArray[activeFeatureTab]} />

						<a style={{
							display: 'block',
							color: '#77bf43',
							fontSize: '1.3rem',
							textAlign: 'center',
							fontWeight: 400,
							marginTop: 20
						}} href={`/faq?q=${activeFeatureTab}`}>To know more, check out our <span style={{ textDecoration: 'underline' }}>FAQ&apos;s.</span></a>

					</div>


                                        {activeFeatureTab === 1 ?  (
						<div style={{ backgroundColor: "rgb(247,247,247)", paddingBottom: "30px" }} className="gallery-section">
							<div className="heading-section">
								<h1 className="heading-text">Watch Free Trailers</h1>
							</div>

							<Gallery activeTab={activeFeatureTab} />
						</div>
					) : (
					        ""
					)}
					{activeFeatureTab === 0 || activeFeatureTab === 2 || activeFeatureTab === 3 || activeFeatureTab === 4 ?  (
						<div style={{ backgroundColor: "rgb(247,247,247)", paddingBottom: "30px" }} className="gallery-section">
							<div className="heading-section">
								<h1 className="heading-text">Photos and Videos Gallery</h1>
							</div>

							<Gallery activeTab={activeFeatureTab} />
						</div>
					) : (
					        ""
					)}

					<NewsLetter></NewsLetter>
					<Footer setActiveFeatureTab={setActiveFeatureTab} />
				</div>
			</div>
			<a href="#!" id="return-to-top">
				<i className="fa fa-chevron-up" />
			</a>
			
		</div>
	);
}

export default HomePage;

/* Old Data for Why QDS Pro Section */

/*Live Online Tutoring

{
	title: "Experienced Faculties",
	subtitle: <FeatureSubtitle>Opportunity to learn from highly experienced faculties who have served at leading coaching institutes across the country and have been recruited by us after multiple screening rounds.</FeatureSubtitle>
},
{
	title: "Unlimited 24 x 7 Online Doubt Solving Services",
	subtitle: <FeatureSubtitle>Get all your doubts solved even outside the live classes by using our mobile app and accessing our 24 x 7 Online Doubt Solving Services, now no longer waiting for faculties or requesting them to come and solve your doubts.</FeatureSubtitle>
},
{
	title: "Free Demo / Trial Session",
	subtitle: <FeatureSubtitle>Get free demo / trial sessions with two faculties, shortlisted based on your requirements, and then select the one that you would like to go ahead with for your exam preparation.</FeatureSubtitle>
},
{
	title: "Flawless Online Tools - Virtual Classroom",
	subtitle: <FeatureSubtitle>Get access to highly advanced tools and equipments for these live online classes like whiteboard with all features, screen sharing, ability to share videos and presentations, etc...</FeatureSubtitle>
},
{
	title: "Unbelievable Convenience & Flexible Timings",
	subtitle: <FeatureSubtitle>Complete convenience, attend these online sessions from any place, using any device, the session timings will be flexible, to accommodate the requirements of the students. <a href="https://www.qdspro.com/blog/what-differentiates-qds-pro-online-tutoring-from-other-online-tutoring-service-providers-for-various-entrance-exams">Know More</a></FeatureSubtitle>
}
*/

/*Coaching Classes

{
	title: "Unlimited access to our in-house 24 x 7 Online Doubt Solving Platform.",
	subtitle: <FeatureSubtitle>All the students will be given Unlimited access to our in-house  24 x 7 Online Doubt Solving Platform.</FeatureSubtitle>
},
{
	title: "Coaching from Popular Author Books and Publications",
	subtitle: <FeatureSubtitle>Don't restrict your preparation to customised study material, which is of basic difficulty level, practise from Popular Author Books and Publications like Sarvesh Verma, Arun Sharma, R. S. Aggarwal, Official Guides, etc... at QDS Pro</FeatureSubtitle>
},
{
	title: "Small Batch Sizes",
	subtitle: <FeatureSubtitle>Batch Size of only 4 - 5 students, ensuring personalized attention to each and every student.</FeatureSubtitle>
},
{
	title: "150+ Hours of Rigorous Classroom Training",
	subtitle: <FeatureSubtitle>No upper cap on the number of hours that we train you for. We keep on coaching students till the time they feel adequately prepared and confident to go for their exams.</FeatureSubtitle>
},
{
	title: "Free Career Counseling Services",
	subtitle: <FeatureSubtitle>You may drop in at any of our centres for a free career counseling session to decide which entrance exams to appear for, how to prepare for it, what business schools to target, etc...</FeatureSubtitle>
}
*/

/* Video Lectures
{
	title: "Classroom - Like Learning Experience",
	subtitle: <FeatureSubtitle>Experience the same offline classroom feel at home on your desktop, laptop, television, mobile,...</FeatureSubtitle>
},
{
	title: "Learn All Concepts Thoroughly",
	subtitle: <FeatureSubtitle>Learn all the concepts from the very basic to the most advanced from the GMAT 99%iler himself, there will be no need for you to refer to any other material whatsoever, once you are through with these video lectures.</FeatureSubtitle>
},
{
	title: "Accessible on Multiple Devices",
	subtitle: <FeatureSubtitle>Access the video lectures from your computer, laptop, smart television, tablet, smart phone, etc...</FeatureSubtitle>
},
{
	title: "Save Money, Time and Efforts",
	subtitle: <FeatureSubtitle>Get access to world className content at your fingertips, at reasonable prices, study at your own pace and time</FeatureSubtitle>
},
{
	title: "Watch Teasers and Trailers for Free",
	subtitle: <FeatureSubtitle>Watch Teasers and Trailers of each video lecture for free, to gain an insight on what all is going to get covered in that particular video lecture, and then decide if you'd like to go ahead with the course.</FeatureSubtitle>
}
*/

/* Doubt Solving
{
	title: "Fastest 24 X 7 Online Doubt Solving Platform",
	subtitle: <FeatureSubtitle>Get reliable and elaborate solutions to all your doubts on real time basis, almost instantly.</FeatureSubtitle>
},
{
	title: "Customized Study Material",
	subtitle: <FeatureSubtitle>Get access to free customized study material (best possible in the industry), for different Quant, Verbal, Logic and DI topics segregated level wise.</FeatureSubtitle>
},
{
	title: "World Class Faculty For Solving Your Doubts",
	subtitle: <FeatureSubtitle>Experienced faculties hand-picked from leading coaching institutes to solve your doubts, to your satisfaction.</FeatureSubtitle>
}
*/

/*

{
	title: "One–To–One Interactive Sessions",
	subtitle: <FeatureSubtitle>Attend one-to-one interactive sessions in a familiarized atmosphere, learn at your own pace and ask any number of doubts, with no hesitation.</FeatureSubtitle>
},
{
	title: "Unlimited access to 24*7 Online Doubt Solving Platform",
	subtitle: <FeatureSubtitle>Get all your doubts solved even outside the home classes by using our mobile app and accessing our 24 x 7 Online Doubt Solving Services, now no more waiting for faculties or requesting them to come and solve your doubts.</FeatureSubtitle>
},
{
	title: "Fully Customised Study Methodology and Study Plan",
	subtitle: <FeatureSubtitle>Our faculty will design a personally customised study plan and className schedule in line with the requirements of the student. The study plan will be reviewed and revised periodically, based on the progress of the student.</FeatureSubtitle>
},
{
	title: "Unbelievable Convenience and Flexibility",
	subtitle: <FeatureSubtitle>Learn at the comfort of your home, on your preferable days and timings, as per your availability. Save money, time and efforts.</FeatureSubtitle>
},
{
	title: "Day to Day Track of Student’s Progress",
	subtitle: <FeatureSubtitle>We would be continuously monitoring and tracking the progress of the student, ensuring that the student’s test preparation is done in a very structured manner and no stone is left unturned in his/her preparation.</FeatureSubtitle>
},
{
	title: "Continuous Feedback - Two Way",
	subtitle: <FeatureSubtitle>Our executives will personally seek feedback from both the student and the faculty on a timely basis, to ensure that the classes are running smoothly and to address the grievances of the student, if any.</FeatureSubtitle>
},
{
	title: "Get Access To Our QDS Pro Online Prep App",
	subtitle: <FeatureSubtitle>Get access to the soft copies of all the popular books written by well-known authors and publication houses for your entrance exam, 10,000+ practice questions, dedicated forum, motivational column, blogs, regular exam updates, etc… on our QDS Pro Online Prep App.</FeatureSubtitle>
}
̥
*/
