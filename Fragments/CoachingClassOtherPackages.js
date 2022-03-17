import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Link from 'next/link';

const PackageContainer = styled.div`
  @media (min-width: 1024px) {
    display: flex;  
    
  }
  
`;

const Package = styled.div`
  flex: 1;
  display: flex;
  padding: 10px;
  height: 770px;

  @media (max-width: 700px ){
    height: auto;
}
`;

const CoachingClassOtherPackages = (props) => {

    const [screenWidth, setScreenWidth] = useState(null);
    const [packagesToShow, setPackagesToShow] = useState(2);
    const [selectedPackage, setSelectedPackage] = useState(0);

    useEffect(() => {
        function updateWindowDimensions() {
            // console.log(window.innerWidth);
            setScreenWidth(window.innerWidth);
            if (window.innerWidth <= 963) {
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


    useEffect(() => {
        // on mount, check for active tab
        let u = new URL(window.location.href);

        let selected = u.searchParams.get('select');
        setSelectedPackage(selected);
    }, []);

    let OtherPackagesArray = [
        [
            {
                title: "GMAT Quant Package (IR Included)",
                pointers: [
                    " Learn from GMAT 99%iler",
                    " 100+ Hours of Rigorous Classroom Training",
                    " Unlimited Access to 24 x 7 Online Doubt Solving Platform",
                    " Study from Popular Author Books & Publications (GMAT Official Guides, Manhattan Prep, Veritas Prep, Kaplan, etc...)",
                    " Daily Homework Worksheets / Assignments",
                    " 15,000+ GMAT Quant Practice Questions Segregated Topic-Wise & Difficulty-Wise",
                    " 25+ GMAT Quant Mock Tests",
                    " Master Workshops - Mental Math, Motivational Sessions, etc...",
                    " Reviser Classes, Mock Test Reviews & much more..."
                ]
            },
            {
                title: "GMAT Verbal Package (AWA Included)",
                pointers: [
                    " Learn from GMAT 99%iler",
                    " 40+ Hours of Rigorous Classroom Training",
                    " Unlimited Access to 24 x 7 Online Doubt Solving Platform",
                    " Study from Popular Author Books & Publications (GMAT Official Guides, Manhattan Prep, Veritas Prep, Kaplan, etc...)",
                    " Daily Homework Worksheets / Assignments",
                    " 5,000+ GMAT Verbal Practice Questions Segregated Topic-Wise & Difficulty-Wise",
                    " 25+ GMAT Verbal Mock Tests",
                    " Master Workshops - Vocabulary Building, Motivational Sessions, etc...",
                    " Reviser Classes, Mock Test Reviews & much more..."
                ]
            },
            {
                title: "GMAT Crash Course Package",
                pointers: [
                    " Learn from GMAT 99%iler",
                    " 80+ Hours of Rigorous Classroom Training",
                    " Unlimited Access to 24 x 7 Online Doubt Solving Platform",
                    " Study from Popular Author Books & Publications (GMAT Official Guides, Manhattan Prep, Veritas Prep, Kaplan, etc...)",
                    " Daily Homework Worksheets / Assignments",
                    " 15,000+ GMAT Practice Questions Segregated Topic-Wise & Difficulty-Wise",
                    " 10+ GMAT Full-Length Computer Adaptive Tests",
                    " Master Workshops - Mental Math, Vocabulary Building, Motivational Sessions, etc...",
                    " Reviser Classes, Mock Test Reviews & much more..."
                ]
            },
            {
                title: "GMAT Super Week Package",
                pointers: [
                    " Learn from GMAT 99%iler",
                    " 80+ Hours of Rigorous Classroom Training (7 days x 12 hours per day)",
                    " Unlimited Access to 24 x 7 Online Doubt Solving Platform",
                    " Study from Popular Author Books & Publications (GMAT Official Guides, Manhattan Prep, Veritas Prep, Kaplan, etc...)",
                    " Daily Homework Worksheets / Assignments",
                    " 15,000+ GMAT Practice Questions Segregated Topic-Wise & Difficulty-Wise",
                    " 5+ GMAT Full-Length Computer Adaptive Tests",
                    "Mental Math Workshops"
                ]
            }
        ],

        [
            {
                title: "CAT Quant Package",
                pointers: [
                    " Learn from GMAT 99%iler",
                    " 125+ Hours of Rigorous Classroom Training",
                    " Unlimited Access to 24 x 7 Online Doubt Solving Platform",
                    " Study from Popular Author Books & Publications (Arun Sharma, Sarvesh Verma, Nishit K. Sinha, etc...)",
                    " Daily Homework Worksheets / Assignments",
                    " 15,000+ CAT Quant Practice Questions Segregated Topic-Wise",
                    " 35+ CAT Quant Mock Tests",
                    " Master Workshops - Mental Math, Motivational Sessions, etc...",
                    " Reviser Classes, Mock Test Reviews & much more..."
                ]
            },
            {
                title: "CAT Verbal Package",
                pointers: [
                    " Learn from GMAT 99%iler",
                    " 50+ Hours of Rigorous Classroom Training",
                    " Unlimited Access to 24 x 7 Online Doubt Solving Platform",
                    " Study from Popular Author Books & Publications (Arun Sharma, Nishit K. Sinha, etc...)",
                    " Daily Homework Worksheets / Assignments",
                    " 5,000+ CAT Verbal Practice Questions Segregated Topic-Wise",
                    " 35+ CAT Verbal Mock Tests",
                    " Master Workshops - Vocabulary Building, Motivational Sessions, etc...",
                    " Reviser Classes, Mock Test Reviews & much more..."
                ]
            },
            {
                title: "CAT Quant, DI and LR Package",
                pointers: [
                    " Learn from GMAT 99%iler",
                    " 175+ Hours of Rigorous Classroom Training",
                    " Unlimited Access to 24 x 7 Online Doubt Solving Platform",
                    " Study from Popular Author Books & Publications (Arun Sharma, Sarvesh Verma Nishit K. Sinha, etc...)",
                    " Daily Homework Worksheets / Assignments",
                    " 20,000+ CAT Quant, DI and LR Practice Questions Segregated Topic-Wise",
                    " 50+ CAT Quant, DI and LR Mock Tests",
                    " Master Workshops - Mental Math, Motivational Sessions, etc...",
                    " Reviser Classes, Mock Test Reviews & much more..."
                ]
            },
            {
                title: "CAT Crash Course Package",
                pointers: [
                    " Learn from GMAT 99%iler",
                    " 150+ Hours of Rigorous Classroom Training",
                    " Unlimited Access to 24 x 7 Online Doubt Solving Platform",
                    " Study from Popular Author Books & Publications (Arun Sharma, Sarvesh Verma, Nishit K. Sinha, etc...)",
                    " Daily Homework Worksheets / Assignments",
                    " 15,000+ CAT Practice Questions Segregated Topic-Wise",
                    " 20+ Mock Tests",
                    " Master Workshops - Mental Math, Vocabulary Building, Motivational Sessions, etc...",
                    " Reviser Classes, Mock Test Reviews & much more..."
                ]
            },
            {
                title: "CAT Super Month Package",
                pointers: [
                    " Learn from GMAT 99%iler",
                    " 180+ Hours of Rigorous Classroom Training (30 days x 6 hours per day)",
                    " Unlimited Access to 24 x 7 Online Doubt Solving Platform",
                    " Study from Popular Author Books & Publications (Arun Sharma, Sarvesh Verma, Nishit K. Sinha, etc...)",
                    " Daily Homework Worksheets / Assignments",
                    " 15,000+ CAT Practice Questions Segregated Topic-Wise",
                    " 10+ Mock Tests",
                    "Mental Math Workshops",
                ]
            }
        ],


        [
            {
                title: "MAH-CET Quant Package (DI Included)",
                pointers: [
                    " Learn from GMAT 99%iler",
                    " 100+ Hours of Rigorous Classroom Training",
                    " Unlimited Access to 24 x 7 Online Doubt Solving Platform",
                    " Study from Popular Author Books & Publications (R.S. Aggarwal, Disha Publications, Arihant Publications, etc...)",
                    " Daily Homework Worksheets / Assignments",
                    " 15,000+ MAH-CET Quant Practice Questions Segregated Topic-Wise",
                    " 35+ MAH-CET Quant Mock Tests",
                    " Master Workshops - Mental Math, Motivational Sessions, etc...",
                    " Reviser Classes, Mock Test Reviews & much more...",
                ]
            },
            {
                title: "MAH-CET Verbal Package",
                pointers: [
                    " Learn from GMAT 99%iler",
                    " 40+ Hours of Rigorous Classroom Training",
                    " Unlimited Access to 24 x 7 Online Doubt Solving Platform",
                    " Study from Popular Author Books & Publications (R.S. Aggarwal, Disha Publications, Arihant Publications, etc...)",
                    " Daily Homework Worksheets / Assignments",
                    " 5,000+ MAH-CET Verbal Practice Questions Segregated Topic-Wise",
                    " 35+ MAH-CET Verbal Mock Tests",
                    " Master Workshops - Vocabulary Building, Motivational Sessions, etc...",
                    " Reviser Classes, Mock Test Reviews & much more...",
                ]
            },
            {
                title: "MAH-CET Quant, DI and LR Package",
                pointers: [
                    " Learn from GMAT 99%iler",
                    " 135+ Hours of Rigorous Classroom Training",
                    " Unlimited Access to 24 x 7 Online Doubt Solving Platform",
                    " Study from Popular Author Books & Publications (R.S. Aggarwal, Disha Publications, Arihant Publications, etc...)",
                    " Daily Homework Worksheets / Assignments",
                    " 20,000+ MAH-CET Quant, DI and LR Practice Questions Segregated Topic-Wise",
                    " 50+ MAH-CET Quant, DI and LR Mock Tests",
                    " Master Workshops - Mental Math, Motivational Sessions, etc...",
                    " Reviser Classes, Mock Test Reviews & much more...",
                ]
            },
            {
                title: "MAH-CET Crash Course Package",
                pointers: [
                    " Learn from GMAT 99%iler",
                    " 120+ Hours of Rigorous Classroom Training",
                    " Unlimited Access to 24 x 7 Online Doubt Solving Platform",
                    " Study from Popular Author Books & Publications (R.S. Aggarwal, Disha Publications, Arihant Publications, etc...)",
                    " Daily Homework Worksheets / Assignments",
                    " 15,000+ MAH-CET Practice Questions Segregated Topic-Wise",
                    " 20+ Mock Tests",
                    " Master Workshops - Mental Math, Vocabulary Building, Motivational Sessions, etc...",
                    " Reviser Classes, Mock Test Reviews & much more...",
                ]
            },
            {
                title: "MAH-CET Super Month Package",
                pointers: [
                    " Learn from GMAT 99%iler",
                    " 150+ Hours of Rigorous Classroom Training (30 days x 5 hours per day)",
                    " Unlimited Access to 24 x 7 Online Doubt Solving Platform",
                    " Study from Popular Author Books & Publications (R.S. Aggarwal, Disha Publications, Arihant Publications, etc...)",
                    " Daily Homework Worksheets / Assignments",
                    " 15,000+ MAH-CET Practice Questions Segregated Topic-Wise",
                    " 10+ Mock Tests",
                    " Mental Math Workshops",
                ]
            }
        ],


        [
            {
                title: "GRE Quant Package",
                pointers: [
                    " Learn from GMAT 99%iler",
                    " 100+ Hours of Rigorous Classroom Training",
                    " Unlimited Access to 24 x 7 Online Doubt Solving Platform",
                    " Study from Popular Author Books & Publications (GRE Official Guides, Manhattan Prep, Veritas Prep, Kaplan, etc...)",
                    " Daily Homework Worksheets / Assignments",
                    " 15,000+ GRE Quant Practice Questions Segregated Topic-Wise",
                    " 25+ GRE Quant MockTests",
                    " Master Workshops - Mental Math, Motivational Sessions, etc...",
                    " Reviser Classes, Mock Test Reviews & much more...",
                ]
            },
            {
                title: "GRE Verbal Package (Analytical Writing Included)",
                pointers: [
                    " Learn from GMAT 99%iler",
                    " 40+ Hours of Rigorous Classroom Training",
                    " Unlimited Access to 24 x 7 Online Doubt Solving Platform",
                    " Study from Popular Author Books & Publications (GRE Official Guides, Manhattan Prep, Veritas Prep, Kaplan, etc...)",
                    " Daily Homework Worksheets / Assignments",
                    " 5,000+ GRE Verbal Practice Questions Segregated Topic-Wise",
                    " 25+ GRE Verbal MockTests",
                    " Master Workshops - Vocabulary Building, Motivational Sessions, etc...",
                    " Reviser Classes, Mock Test Reviews & much more...",
                ]
            },
            {
                title: "GRE Crash Course Package",
                pointers: [
                    " Learn from GMAT 99%iler",
                    " 80+ Hours of Rigorous Classroom Training",
                    " Unlimited Access to 24 x 7 Online Doubt Solving Platform",
                    " Study from Popular Author Books & Publications (GRE Official Guides, Manhattan Prep, Veritas Prep, Kaplan, etc...)",
                    " Daily Homework Worksheets / Assignments",
                    " 15,000+ GRE Practice Questions Segregated Topic-Wise",
                    " 10+ MockTests",
                    " Master Workshops - Mental Math, Vocabulary Building, Motivational Sessions, etc...",
                    " Reviser Classes, Mock Test Reviews & much more...",
                ]
            },
            {
                title: "GRE Super Week Package",
                pointers: [
                    " Learn from GMAT 99%iler",
                    " 80+ Hours of Rigorous Classroom Training (7 days x 12 hours per day)",
                    " Unlimited Access to 24 x 7 Online Doubt Solving Platform",
                    " Study from Popular Author Books & Publications (GRE Official Guides, Manhattan Prep, Veritas Prep, Kaplan, etc...)",
                    " Daily Homework Worksheets / Assignments",
                    " 15,000+ GRE Practice Questions Segregated Topic-Wise",
                    " 5+ MockTests",
                    " Mental Math Workshops",
                ]
            }
        ],

        [
            {
                title: "SAT Math Package",
                pointers: [
                    " Learn from GMAT 99%iler",
                    " 100+ Hours of Rigorous Classroom Training",
                    " Unlimited Access to 24 x 7 Online Doubt Solving Platform",
                    " Study from Popular Author Books & Publications (SAT Official Guide, Kaplan, The Princeton Review, etc...)",
                    " Daily Homework Worksheets / Assignments",
                    " 7,500+ SAT Math Practice Questions Segregated Topic-Wise",
                    " 25+ SAT Math Mock Tests",
                    " Master Workshops - Mental Math, Motivational Sessions, etc...",
                    " Reviser Classes, Mock Test Reviews & much more...",
                ]
            },
            {
                title: "SAT English Package (Essay Included)",
                pointers: [
                    " Learn from GMAT 99%iler",
                    " 50+ Hours of Rigorous Classroom Training",
                    " Unlimited Access to 24 x 7 Online Doubt Solving Platform",
                    " Study from Popular Author Books & Publications (SAT Official Guide, Kaplan, The Princeton Review, etc...)",
                    " Daily Homework Worksheets / Assignments",
                    " 2,500+ SAT English Practice Questions Segregated Topic-Wise",
                    " 25+ SAT English Mock Tests",
                    " Master Workshops - Vocabulary Building, Motivational Sessions, etc...",
                    " Reviser Classes, Mock Test Reviews & much more...",
                ]
            },
            {
                title: "SAT Crash Course Package",
                pointers: [
                    " Learn from GMAT 99%iler",
                    " 80+ Hours of Rigorous Classroom Training",
                    " Unlimited Access to 24 x 7 Online Doubt Solving Platform",
                    " Study from Popular Author Books & Publications (SAT Official Guide, Kaplan, The Princeton Review, etc...)",
                    " Daily Homework Worksheets / Assignments",
                    " 10,000+ SAT Practice Questions Segregated Topic-Wise",
                    " 10+ Mock Tests",
                    " Master Workshops - Mental Math, Vocabulary Building, Motivational Sessions, etc...",
                    " Reviser Classes, Mock Test Reviews & much more...",
                ]
            },
            {
                title: "SAT Super Week Package",
                pointers: [
                    " Learn from GMAT 99%iler",
                    " 80+ Hours of Rigorous Classroom Training (7 days x 12 hours per day)",
                    " Unlimited Access to 24 x 7 Online Doubt Solving Platform",
                    " Study from Popular Author Books & Publications (SAT Official Guide, Kaplan, The Princeton Review, etc...)",
                    " Daily Homework Worksheets / Assignments",
                    " 10,000+ SAT Practice Questions Segregated Topic-Wise",
                    " 5+ Mock Tests",
                    " Mental Math Workshops",
                ]
            }
        ]

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
        <div id="testimonial_wrapper" style={{ top: '20%', left: 0, right: 0 }}>
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

            <Slider className="testimonial-slide text-center" {...settings} ref={slider_ref} style={{ width: "90%" }} >
                {

                    OtherPackagesArray[selectedPackage].map((p, i) => (

                        <div key={i} className="packages-section">
                            <div className="addon-section pt-5">
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
                                                        {packagesToShow === 1 ? (
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

                                                            )}

                                                    </Link>


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
        </div>
    );
}

export default CoachingClassOtherPackages;

