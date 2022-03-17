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

const LiveOnlineOtherPackages = (props) => {

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
    var GmatPointers= [" Learn from GMAT 99%iler",
                    " Unlimited Access to 24 x 7 Online Doubt Solving Platform",
                    " Study from Popular Author Books & Publications (GMAT Official Guides, Manhattan Prep, Veritas Prep, Kaplan, etc)",
                    " Daily Homework Worksheets / Assignments",
                    " Master Workshops - Mental Math, Motivational Sessions",
                    " Reviser Classes, Mock Test Reviews "]
    var CatPointers=[
                    " Learn from CAT 99+%iler",
                     " Unlimited Access to 24 x 7 Online Doubt Solving Platform",
                    " Study from Fully Customized Study Material",
                    " Daily Homework Worksheets / Assignments",
                    " Master Workshops - Mental Math, Motivational Sessions, etc...",
                    " Reviser Classes, Mock Test Reviews",
    ]
    var MahCetPointers=[
                    " Unlimited Access to 24 x 7 Online Doubt Solving Platform",
                    " Study from Fully Customized Study Material",
                    " Daily Homework Worksheets / Assignments",
                    " Master Workshops - Mental Math, Motivational Sessions, etc...",
                    " Reviser Classes, Mock Test Reviews",
                ]
    var GrePointers=[
                    " Unlimited Access to 24 x 7 Online Doubt Solving Platform",
                    " Study from Popular Author Books & Publications (GRE Official Guides, Manhattan Prep, Veritas Prep, Kaplan, etc...)",
                    " Daily Homework Worksheets / Assignments",
                    " Master Workshops - Mental Math, Motivational Sessions, etc...",
                    " Reviser Classes, Mock Test Reviews"]
    var SatPointers = [
                    " Learn from GMAT 99%iler",
                    " Unlimited Access to 24 x 7 Online Doubt Solving Platform",
                    " Study from Popular Author Books & Publications (SAT Official Guide, Kaplan, The Princeton Review, etc...)",
                    " Daily Homework Worksheets / Assignments",
                    " Master Workshops - Mental Math, Motivational Sessions, etc...",
                    " Reviser Classes, Mock Test Reviews"
                ]
    let OtherPackagesArray = [
        [
            {
                title: 'GMAT Online Quant Package (IR Included)',
                pointers: GmatPointers.concat(
                     [
                    " 100+ Hours of Rigorous Online-Classroom Training",
                     " 15,000+ GMAT Quant Practice Questions Segregated Topic-Wise & Difficulty-Wise",
                    " 25+ GMAT Quant Mock Tests & much more..."
                ])
            },
            {
                title: 'GMAT Online Verbal Package (AWA Included)',
                pointers: GmatPointers.concat( [
                    " 40+ Hours of Rigorous Online-Classroom Training",
                    " 5,000+ GMAT Verbal Practice Questions Segregated Topic-Wise & Difficulty-Wise",
                    " 25+ GMAT Verbal Mock Tests  & much more...",
                ])
            },
            {
                title: 'GMAT Online Crash Course Package',
                pointers: GmatPointers.concat([
                   " 80+ Hours of Rigorous Online-Classroom Training",
                    " 15,000+ GMAT Practice Questions Segregated Topic-Wise & Difficulty-Wise",
                    " 10+ GMAT Full-Length Computer Adaptive Tests & much more...",
                ])
            },
            {
                title: 'GMAT Online Super Week Package',
                pointers: GmatPointers.concat([ 
                    " 80+ Hours of Rigorous Online-Classroom Training (7 days x 12 hours per day)"," 15,000+ GMAT Practice Questions Segregated Topic-Wise & Difficulty-Wise",
                    " 5+ GMAT Full-Length Computer Adaptive Tests"
                ])
            }
        ],
        
        [
            {
                title: 'CAT Online Quant Package',
                pointers: CatPointers.concat( [
                    " 80+ Hours of Rigorous Online-Classroom Training",
                    " 15,000+ CAT Quant Practice Questions Segregated Topic-Wise",
                    " 35+ CAT Quant Mock Tests & much more...",
                ])
            },
            {
                title: 'CAT Online Verbal Package',
                pointers:CatPointers.concat([
                    " 40+ Hours of Rigorous Online-Classroom Training",
                    " 5,000+ CAT Verbal Practice Questions Segregated Topic-Wise",
                    " 35+ CAT Verbal Mock Tests & much more...",
                ])
            },
            {
                title: 'CAT Online Quant, DI and LR Package',
                pointers: CatPointers.concat([
                    " 100+ Hours of Rigorous Online-Classroom Training",
                    " 20,000+ CAT Quant, DI and LR Practice Questions Segregated Topic-Wise",
                    " 50+ CAT Quant, DI and LR Mock Tests & much more...",
                ])
            }
        ],

        [
            {
                title: 'MAH-CET Online Quant Package (DI Included)',
                pointers:MahCetPointers.concat( [
                    " 70+ Hours of Rigorous Online-Classroom Training",
                    " 15,000+ MAH-CET Quant Practice Questions Segregated Topic-Wise",
                    " 35+ MAH-CET Quant Mock Tests  & much more..."
                ])
            },
            {
                title: 'MAH-CET Online Verbal Package',
                pointers:MahCetPointers.concat( [
                    " 30+ Hours of Rigorous Online-Classroom Training",
                    " 5,000+ MAH-CET Verbal Practice Questions Segregated Topic-Wise",
                    " 35+ MAH-CET Verbal Mock Tests  & much more..."
                    ])
            },
            {
                title: 'MAH-CET Online Quant, DI and LR Package',
                pointers: MahCetPointers.concat([
                    " 90+ Hours of Rigorous Online-Classroom Training",
                    " 20,000+ MAH-CET Quant, DI and LR Practice Questions Segregated Topic-Wise",
                    " 50+ MAH-CET Quant, DI and LR Mock Tests & much more..."
                ])
            }
        ],

        [
            {
                title: 'GRE Online Quant Package',
                pointers:GrePointers.concat( [
                    " 40+ Hours of Rigorous Online-Classroom Training",
                    " 15,000+ GRE Quant Practice Questions Segregated Topic-Wise",
                    " 25+ GRE Quant MockTests & much more...",
                ])
            },
            {
                title: 'GRE Online Verbal Package (Analytical Writing Included)',
                pointers: GrePointers.concat([
                    " 30+ Hours of Rigorous Online-Classroom Training",
                    " 5,000+ GRE Verbal Practice Questions Segregated Topic-Wise",
                    " 25+ GRE Verbal MockTests & much more...",
                ])

            }
        ],

        [
            {
                title: 'SAT Online Math Package',
                pointers: SatPointers.concat([
                    " 40+ Hours of Rigorous Online-Classroom Training",
                    " 7,500+ SAT Math Practice Questions Segregated Topic-Wise",
                    " 25+ SAT Math Mock Tests & much more...",
                ])
            },
            {
                title: 'SAT Online English Package (Essay Included)',
                pointers:SatPointers.concat( [
                    " 30+ Hours of Rigorous Online-Classroom Training",
                    " 2,500+ SAT English Practice Questions Segregated Topic-Wise",
                    " 25+ SAT English Mock Tests & much more...",
                ])
            }
        ],

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
                                                            query: { activeTab: 3 }
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
                                                            query: { activeTab: 6, select: 2 }
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
                                                            query: { activeTab: 7, select: 2 }
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
                                                                    style={{ margin: '15px' }}
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

export default LiveOnlineOtherPackages;

