import React, { useState, useRef, useEffect } from 'react';
import Header from "../components/Header";
import Footer from "../components/Footer";
import styled from 'styled-components';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CoachingClassOtherPackages from '../Fragments/CoachingClassOtherPackages';
import LiveOnlineOtherPackages from '../Fragments/LiveOnlineOtherPackages';
import HomeTutoringOtherPackages from '../Fragments/HomeTutoringOtherPackages';


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


const OtherPackagesPage = (props) => {

  const [selectedCategory, setSelectedCategory] = useState(0);

  useEffect(() => {
    // on mount, check for active tab
    let u = new URL(window.location.href);

    let selected = u.searchParams.get('category');
    setSelectedCategory(Number(selected));
}, []);



    return (
        <div>
            <style>{`
            .testimonial-section {
                padding-bottom: 30px;
              }

              #testimonial_wrapper {
                display: flex;
                align-items: center;
                margin: auto;
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
                                data-aos-duration="500"
                                data-aos-easing="ease-in-linear"
                                className="white-text banner-title">Other Packages</h1>
                            </div>
                        </div>
                    </div>

                    <div className="packages-section">
                        {/* <div className="heading-section">
                            <h3 className="heading-text">Other Packages</h3>
                        </div> */}

                        { selectedCategory === 0 && (
                          <CoachingClassOtherPackages />
                        ) }

                        { selectedCategory === 2 && (
                          <LiveOnlineOtherPackages />
                        ) }

                        { selectedCategory === 4 && (
                          <HomeTutoringOtherPackages />
                        ) }
                    </div>


                    <Footer />
                </div>
            </div>
        </div>
    );
}

export default OtherPackagesPage;

