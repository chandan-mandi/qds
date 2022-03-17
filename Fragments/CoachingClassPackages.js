import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Link from 'next/link';

const PackageContainer = styled.div`
    display: flex;  
    @media (min-width: 1024px) {
        display: flex;
    }
`;

const Package = styled.div`
    flex: 1;
    display: flex;
    padding: 10px;
    height: 875px;

    @media (max-width: 700px ){
        height: auto;
    }
`;

const CoachingClassPackages = (props) => {

    const [screenWidth, setScreenWidth] = useState(null);
    const [packagesToShow, setPackagesToShow] = useState(2);

    useEffect(() => {
        function updateWindowDimensions() {
            // console.log(window.innerWidth);
            setScreenWidth(window.innerWidth);
            if(window.innerWidth <= 963){
                setPackagesToShow(1);
            } else {
                setPackagesToShow(2);
            }
        }   
        window.addEventListener("resize", updateWindowDimensions);
        updateWindowDimensions();
        return function cleanup() {
            window.removeEventListener("resize", updateWindowDimensions)
        }
    }, []);

    let CoachingClassPackagesArray = [
        {
            ref_id: 0,
            title: "GMAT Comprehensive Package",
            pointers: [
                " Learn from GMAT 99%iler",
                " 125+ Hours of Rigorous Classroom Training",
                " Unlimited Access to 24 x 7 Online Doubt Solving Platform",
                " Study from Popular Author Books & Publications (GMAT Official Guides, Manhattan Prep, Veritas Prep, Kaplan, etc...)",
                " Daily Homework Worksheets / Assignments",
                " 20,000+ GMAT Practice Questions Segregated Topic-Wise & Difficulty-Wise",
                " 15+ GMAT Full-Length Computer Adaptive Tests",
                " Master Workshops - Mental Math, Vocabulary Building, Motivational Sessions, etc...",
                " Reviser Classes, Mock Test Reviews & much more..."
            ]
        },
        {
            ref_id: 1,
            title: "CAT Comprehensive Package",
            pointers: [
                " Learn from GMAT 99%iler",
                " 200+ Hours of Rigorous Classroom Training",
                " Unlimited Access to 24 x 7 Online Doubt Solving Platform",
                " Study from Popular Author Books & Publications (Arun Sharma, Sarvesh Verma, Nishit K. Sinha, etc...)",
                " Daily Homework Worksheets / Assignments",
                " 20,000+ CAT Practice Questions Segregated Topic-Wise",
                " 25+ Mock Tests",
                " Master Workshops - Mental Math, Vocabulary Building, Motivational Sessions, etc...",
                " Reviser Classes, Mock Test Reviews & much more...",
            ]
        },
        {
            ref_id: 2,
            title: "MAH-CET Comprehensive Package",
            pointers: [
                " Learn from GMAT 99%iler",
                " 150+ Hours of Rigorous Classroom Training",
                " Unlimited Access to 24 x 7 Online Doubt Solving Platform",
                " Study from Popular Author Books & Publications (R.S. Aggarwal, Disha Publications, Arihant Publications, etc...)",
                " Daily Homework Worksheets / Assignments",
                " 20,000+ MAH-CET Practice Questions Segregated Topic-Wise",
                " 25+ Mock Tests",
                " Master Workshops - Mental Math, Vocabulary Building, Motivational Sessions, etc...",
                " Reviser Classes, Mock Test Reviews & much more..."
            ]
        },
        {
            ref_id: 3,
            title: "GRE Comprehensive Package",
            pointers: [
                " Learn from GMAT 99%iler",
                " 125+ Hours of Rigorous Classroom Training",
                " Unlimited Access to 24 x 7 Online Doubt Solving Platform",
                " Study from Popular Author Books & Publications (GRE Official Guides, Manhattan Prep, Veritas Prep, Kaplan, etc...)",
                " Daily Homework Worksheets / Assignments",
                " 20,000+ GRE Practice Questions Segregated Topic-Wise",
                " 15+ MockTests",
                " Master Workshops - Mental Math, Vocabulary Building, Motivational Sessions, etc...",
                " Reviser Classes, Mock Test Reviews & much more..."
            ]
        },
        {
            ref_id: 4,
            title: "SAT Comprehensive Package",
            pointers: [
                " Learn from GMAT 99%iler",
                " 125+ Hours of Rigorous Classroom Training",
                " Unlimited Access to 24 x 7 Online Doubt Solving Platform",
                " Study from Popular Author Books & Publications (SAT Official Guide, Kaplan, The Princeton Review, etc...)",
                " Daily Homework Worksheets / Assignments",
                " 10,000+ SAT Practice Questions Segregated Topic-Wise",
                " 15+ Mock Tests",
                " Master Workshops - Mental Math, Vocabulary Building, Motivational Sessions, etc...",
                " Reviser Classes, Mock Test Reviews & much more..."
            ]
        },
        {
            ref_id: 5,
            title: "IELTS Comprehensive Package",
            pointers: [
                " Learn from Master IELTS Trainer",
                " 50+ Hours of Rigorous Classroom Training",
                " Unlimited Access to 24 x 7 Online Doubt Solving Platform",
                " Study from Popular Author Books & Publications (The Official Cambridge Guide, Barron's, etc...)",
                " Daily Homework Worksheets / Assignments",
                " Module-Wise Practice Questions",
                " 25+ Mock Tests",
                " Master Workshops - Vocabulary Building, Personality Development, Motivational Sessions, etc...",
                " Reviser Classes, Mock Test Reviews & much more..."
            ]
        }
    ]

    let slider_ref = React.useRef(null);
    var settings = {
        dots: false,
        infinite: true,
        speed: 900,
        slidesToShow: packagesToShow,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        pauseOnHover: true,
        adaptiveHeight: true
    };
    return (
        <div id="testimonial_wrapper" style={{ top: '20%', left: 0, right: 0, display: "flex" }}>
            { packagesToShow === 2  && (
                <div
                id="testimonial_left_navigation"
                className="testimonial_navigation_container"
                >
                    <span
                        href="#"
                        id="testimonial-prev"
                        className="test-nav-link gray-text fa fa-angle-left"
                        onClick={() => { slider_ref.current.slickPrev() }}
                    />
                </div>
            )}
            

            <Slider className="testimonial-slide text-center" {...settings} ref={slider_ref} style={{ width: "90%" }} >
                {

                    CoachingClassPackagesArray.map((p, i) => (
                        <div key={i} style={{ flex: 1 }} className="packages-section">
                            <div className="addon-section">
                                {/* addon card list */}
                                <PackageContainer>
                                    <Package>
                                        <div className="add-on-card w-100">
                                            <h4 className="card-title text-center border-bottom">
                                                {p.title}
                                            </h4>
                                            <div className="p-2 card-details">
                                                <div className="text-center">
                                                    <p className="white-text addon-sub-text text-left">
                                                        {
                                                            p.pointers.map((pointer, i) => (
                                                                <p key={i} style={{ fontSize: '20px' }} ><i class="fa fa-hand-o-right"></i> {pointer} </p>
                                                            ))
                                                        }
                                                    </p>

                                                    <div >
                                                        <Link
                                                            href={{
                                                                pathname: "/enquiry",
                                                                query: { activeTab: 1 }
                                                            }}
                                                        >
                                                            <button
                                                                className="btn btn-primary btn-lg"
                                                                style={{ margin: '5px' }}
                                                                title="Enquiry"
                                                            >
                                                                Enquiry
                                                            </button>
                                                        </Link>
                                                        <Link
                                                            href={{
                                                                pathname: "/enquiry",
                                                                query: { activeTab: 6, select: 0 }
                                                            }}
                                                        >
                                                            <button
                                                                className="btn btn-primary btn-lg"
                                                                style={{ margin: '5px' }}
                                                                title="Book a Demo"
                                                            >
                                                                Book a Demo
                                                            </button>
                                                        </Link>
                                                        <Link
                                                            href={{
                                                                pathname: "/enquiry",
                                                                query: { activeTab: 7, select: 0 }
                                                            }}
                                                        >
                                                            { packagesToShow === 1 ? (
                                                                <button    
                                                                    className="btn btn-primary btn-lg"
                                                                    style={{ margin: '5px' }}
                                                                    title="Book a Free Career Counseling Session"
                                                                >
                                                                    Book a Free Career <br /> Counseling Session
                                                                </button>
                                                                    
                                                                ) : (
                                                                    <button
                                                                        className="btn btn-primary btn-lg"
                                                                        style={{ margin: '5px' }}
                                                                        title="Book a Free Career Counseling Session"
                                                                    >
                                                                    Book a Free Career Counseling Session
                                                                </button>
                                                                ) }
                                                            
                                                        </Link>
                                                        {p.ref_id !== 5 && (
                                                            <Link
                                                            href={{
                                                                pathname: "/otherpackages",
                                                                //category is based on index page services
                                                                query: {category: 0, select: p.ref_id }
                                                            }}
                                                        >
                                                            <button
                                                                className="btn btn-primary btn-lg"
                                                                style={{ margin: '5px' }}
                                                                title="Other Packages"
                                                            >
                                                                Other Packages
                                                            </button>
                                                        </Link>

                                                        )}
                                                        
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                    </Package>
                                </PackageContainer>
                            </div>
                        </div>
                    ))
                }
            </Slider>

            { packagesToShow === 2  && (
                <div
                id="testimonial_right_navigation"
                className="testimonial_navigation_container"
                >
                    <span

                        onClick={() => { slider_ref.current.slickNext() }}
                        id="testimonial-next"
                        className="test-nav-link gray-text fa fa-angle-right"
                    />
                </div>

            )}

            
        </div>
    );
}

export default CoachingClassPackages;

