import React from 'react';
import Header from "../components/Header";
import Footer from "../components/Footer";
import Head from "next/head";
import { useState, useEffect } from "react";
import DownloadModalForm from "../components/DownloadModalForm";

function Compare() {


    const items = [
        {
            name: "NMIMS",
            established: "In 1981",
            location: "Primarily located in Mumbai but also has campuses at Shirpur, Bangalore, Hyderabad and Indore. ",
            batch_strength: "500",
            bt_ranking: ["29"],
            nirf_ranking: "N.A",
            exam_accepted: "NMAT",
            programs: "Offers both undergraduate and postgraduate courses in management, engineering, commerce, pharmacy, architecture, economics, mathematical sciences, hospitality, science, law, aviation, liberal arts, performing arts, architecture & design.",
            course_fees: "19.8 LAKHS (including hostel fees)",
            avg_score: "190",
            avg_salary: "17.58 lakhs",
            top_companies: "Aviva India, BA Continuum, Kotak Mahindra Bank, IDFC First Bank, Goldman Sachs, Aditya Birla Insurance Brokers, Citibank India, Aditya Birla Capital, Max Life Insurance, HDFC Bank, ICICI Bank, Indus Valley Partners, SBI Life Insurance, Future Supply Chain J, DHL Express, Cognizant, Honeywell, Intellect Design Arena, ICICI Securities, Cartesian Consulting, HP, OYO Rooms, Mahindra Comviva, L&T Infotech, ET Edge by Times Group, ZS Associates, Performics Convonix, ClickLabs"
        },
        {
            name: "SIBM Pune",
            established: "In 1978",
            location: "Pune",
            batch_strength: "180",
            bt_ranking: ["18"],
            nirf_ranking: "N.A",
            exam_accepted: "SNAP",
            programs: "MBA (General), MBA (Innovation & Entrepreneurship), MBA (Leadership & Strategy), MBA Executive",
            course_fees: "20.21 Lakhs",
            avg_score: "90-91 percentile",
            avg_salary: "16 lakhs",
            top_companies: "ICICI Bank, ICICI Prudential, ITC, Kalzoom Kotak life, Aditya Birla grp Airtel, American Express, HDFC bank Hexaware, HSBC, IBM, Whirlpool Wipro, ZYCUS etc. "
        },
        {
            name: "XLRI",
            established: "In 1949",
            location: "Jamshedpur, Jharkhand",
            batch_strength: "Around 540",
            bt_ranking: ["3"],
            nirf_ranking: "7",
            exam_accepted: "XAT",
            programs: "Two-year MBA programs- Postgraduate Diploma in Business Management (PGDBM) and Postgraduate Diploma in Human Resource Management (PGDHRM). It also offers a 15 months General Management Program (GMP) and a doctoral level fellowship program(FPM). ",
            course_fees: "Around 16.8-16 lakhs for PGDM and 5.5 lakhs for FPM",
            avg_score: "96 percentile",
            avg_salary: "23 lakhs",
            top_companies: "KPMG, PwC, The Boston Consulting Group, Accenture Strategy, Microsoft, Amazon, P&G, Aditya Birla Group, ITC, Avendus Capital, Standard Chartered, Capgemini ELITE, Hindustan Unilever, Deloitte, EY, McKinsey, ITC, Colgate Palmolive, Asian Paints, Samsung, Citibank, J.P Morgan Chase, Avendus Capital among others."
        },
        {
            name: "IIMs",
            established: "In 1961",
            location: "Calcutta, Ahmedabad, Kozhikode, Rohtak, Ranchi, Raipur, Tiruchirappalli, Udaipur, Nagpur, Amritsar, Gaya, Sirmaur, Vishakhapatnam, Sambalpur, Jammu ",
            batch_strength: "In all the IIMs put together, it is more than 5000",
            bt_ranking: ["IIM Ahmedabad-1", "Calcutta-2", "Indore-3", "Kozhikode-7", "Shillong-14", "Trichy-16", "Udaipur-21"],
            nirf_ranking: "IIM Bangalore, Ahmedabad, Calcutta, Lucknow, Indore, Kharagpur are at top of NIRF Ranking",
            exam_accepted: "CAT/ GMAT",
            programs: "MDP, AMPM, EGPM, LSM, EMB, AFP, PGP-PMP, PGPPM, PGPSEM, IPM, PGDHRM",
            course_fees: "Around 9-24 lakhs depending upon courses offered",
            avg_score: "Around 80 percentile",
            avg_salary: "20-25 lakhs per annum",
            top_companies: "Aditya Birla Group, CK Birla Group, Emaar, Mahindra, Reliance, RPG and Tata Administrative Services, Flipkart, Amazon, Accenture Strategy, A.T. Kearney, Bain & Co., McKinsey & Co., Monitor Deloitte, Oliver Wyman and The Boston Consulting Group, Barclays, Citi, Credit Suisse, Goldman Sachs, HSBC and JP Morgan, etc."
        },
        {
            name: "SP JAIN",
            established: "In 1981",
            location: "Mumbai",
            batch_strength: "700",
            bt_ranking: ["4"],
            nirf_ranking: "16",
            exam_accepted: "CAT, XAT, GMAT",
            programs: "Several postgraduate full-time programs, such as the Global Management Programme, the Executive Management Programme, and the Family Managed Business Programme. There are also short-term programs such as the Start Your Business Programme, the Grow Your Business Programme, and several Management Development Programmes.",
            course_fees: "Around 17.5 lakhs depending upon the course",
            avg_score: "85 Percentile",
            avg_salary: "23 lakhs",
            top_companies: "Alvarez & Marsal, The Bridgespan Group, Praxis Global Alliance, Bank of America, Landmark Group, Intuit, Cisco, Sabre Partners, Spark Capital, Udaan, BYJU'S, Ola cabs, Swiggy and Dabur."
        },
        {
            name: "KJ SOMAIYA",
            established: "In 1981",
            location: "Mumbai",
            batch_strength: "240",
            bt_ranking: ["25"],
            nirf_ranking: "41",
            exam_accepted: "CAT, XAT, CMAT, GMAT",
            programs: "MBA, MBA Executive, Ph. D, MCA, MBA Part-Time.",
            course_fees: "Around 7-21 lakhs",
            avg_score: "80-90 Percentile",
            avg_salary: "10 lakhs",
            top_companies: "Accenture, Adani, Bajaj, Deloitte, Google, HDFC, HSBC, DCB Bank, ICICI, Kotak, Nestle, Nomura, Oracle, Maruti Suzuki, HCL, L&T, Reliance, TATA, Zomato etc."
        },
        {
            name: "IIFT",
            established: "In 1963",
            location: "Delhi and Kolkata",
            batch_strength: "288",
            bt_ranking: ["11"],
            nirf_ranking: "N.A",
            exam_accepted: "NTA",
            programs: "Two-Year Residential MBA, Ph.D. Course (full-time and part-time), Three-Year Part Time MBA (International Business), Executive Master's in International Business, Course in Export Management, Post Graduate Diploma in International Business Strategy, M.A. Economics (Specialization in Trade and Finance)",
            course_fees: "Around 15 lakhs",
            avg_score: "115.5 out of 300",
            avg_salary: "13.25 lakhs",
            top_companies: "Aditya Birla Group’s Leadership Associate Program (LEAP), Hindustan Coca-Cola Beverages’ Golden Threshold Program, HUL’s Unilever Leadership Internship Program (ULIP) and DE Shaw’s Financial Operations Program etc."
        },
        {
            name: "MDI",
            established: "In 1973",
            location: "Gurgaon, Haryana",
            batch_strength: "299",
            bt_ranking: ["5"],
            nirf_ranking: "12",
            exam_accepted: "CAT, GMAT, MDI Test",
            programs: "Various post graduate diploma programmes. These include full-time and part-time programmes. It also offers fellowship research programmes. PGPM, PGP-HR, PGP-IM, NMP, PGP-EM, PGP-PPM, PT-PGPM, FPM AND EFPM ",
            course_fees: "Around 15.17-25 Lakhs",
            avg_score: "94 percentile",
            avg_salary: "20.13 lakhs",
            top_companies: "Asian Paints, American Express, Coca-Cola, Cognizant GCPL, ITC Limited, L'Oréal, MARS, Nivea, Aditya Birla Retail, HP India, Mother Dairy, Sprinklr, Cipla, Eli Lilly, Novartis etc."
        },
        {
            name: "NITIE",
            established: "In 1963",
            location: "Mumbai",
            batch_strength: "274",
            bt_ranking: ["13"],
            nirf_ranking: "11",
            exam_accepted: "CMAT, CAT",
            programs: "MDPs, UBPs in different areas of Industrial Engineering and Management, PGDIE, PGDIM, PGDPM, PGDMM, PGDISEM, PGPEX-VLFM and Doctoral Level Fellowship Programme",
            course_fees: "93,000-7 lakhs depending upon the course",
            avg_score: "97 percentile",
            avg_salary: "36.80 lakhs",
            top_companies: "Amazon, Deloitte, Flipkart, HUL, ITC, P&G, Philips, PwC US Advisory, Ather Energy, Grofers, IDFC First, McKinsey, RBEI, RBL Bank, SAP Labs, Square Yards etc."
        },
        {
            name: "MICA",
            established: "In 1991",
            location: "Ahmedabad",
            batch_strength: "213",
            bt_ranking: ["N.A"],
            nirf_ranking: "N.A",
            exam_accepted: "CAT, XAT, GMAT",
            programs: "Postgraduate certificate programs in the area of strategic communication and marketing, fellow (doctoral level) programme, post Graduate Diploma in Management (Communications) and Crafting Creative Communication. PGDM-C",
            course_fees: "Around 20 lakhs",
            avg_score: "80 percentile",
            avg_salary: "12.80 lakhs",
            top_companies: "Amazon, Amul, Amway, Bajaj, Cadila, Citi, Cosmos, Decathlon, Deloitte, EY, Flipkart, Gulf Oil, Havells, HCL, HT Media, IBM, L’OREAL, Nestle, Raymond, RBL Bank, Samsung, Sony, TATA, Tolaram Group, USHA, Wipro are some of the prominent brands that recruit."
        },
        {
            name: "ISB HYDERABAD",
            established: "In 2001",
            location: "Hyderabad (Telangana) ",
            batch_strength: "Around 325",
            bt_ranking: ["N.A"],
            nirf_ranking: "N.A",
            exam_accepted: "GMAT, GRE also TOEFL, IELTS, PTE",
            programs: "YLP (IBS, IFS, MIS and MCS), MPPP, ISB Policy Conclave",
            course_fees: "Around 37 lakhs",
            avg_score: "710",
            avg_salary: "Around 20.8 – 28 lakhs",
            top_companies: "Amazon, Flipkart, LEK Consultig, OYO, Samsung, Citibank, ICICI, BCG, HDFC Bank, JP Morgan, Rivigo, Barclays, Matrix, Uber, HSBC, Mckinsey, Reliance, Uber, Microsoft etc."
        },
        {
            name: "JBIMS",
            established: "In 1965",
            location: "Mumbai",
            batch_strength: "120",
            bt_ranking: ["15"],
            nirf_ranking: "N.A",
            exam_accepted: "CAT/ MAHCET",
            programs: "MMS, MSc Finance, MBA Part-time, MHRD",
            course_fees: "6-12 lakhs",
            avg_score: "95 or 93",
            avg_salary: "20.13 Lakhs",
            top_companies: "Accenture, AstraZeneca, BCG, Airtel, Mahindra, McKinsey, Bajaj, Citibank, KPMG, Essar, Godrej, Franklin Templeton, Goldman Sachs, HDFC Bank, HSBC, Bajaj Finserv, Himachal Futuristic Communications, JPMorgan Chase, ICICI Bank, Infosys, Hindustan Unilever, Raymond, Josh Talks, Bisleri, JSW, Kotak Mahindra Bank, DBS, L'OREAL etc."
        },
        {
            name: "TISS",
            established: "In 1936",
            location: "Mumbai, Hyderabad, Tuljapur, Guwahati",
            batch_strength: "4115",
            bt_ranking: ["N.A"],
            nirf_ranking: "32",
            exam_accepted: "TISSNET",
            programs: "offers doctoral degrees in Management and Labour Studies, Disaster Studies, Development Studies, Education, Gender Studies, Health Studies, Law, Media and Cultural Studies, Public Policy, Rural Development and Social Work.",
            course_fees: "40,000- 1 Lakh",
            avg_score: "75 percentile",
            avg_salary: "20.06 lakhs",
            top_companies: "Bajaj Auto, Maruti Suzuki, CitiBank, Accenture, Aon, Deloitte US, Deloitte India, Wipro, Tata Administrative Services, AirTel, GAIL, Intel, Dell EMC, Flipkart, Swiggy, Oyo Rooms, Amazon, Taj Group and many more.."
        },
        {
            name: "FMS",
            established: "In 1954",
            location: "New Delhi",
            batch_strength: "226",
            bt_ranking: ["7"],
            nirf_ranking: "N.A",
            exam_accepted: "CAT",
            programs: "MBA Full Time, MBA Executive, MBA Executive HCA, Management Development, Doctoral Programme",
            course_fees: "10,480",
            avg_score: "Around 13",
            avg_salary: "25.6-23.10 lakhs",
            top_companies: "ABG, Accenture Strategy, Airtel, Bain & Company, Capgemini E.L.I.T.E, EY, Flipkart, Kearney, McKinsey & Company, Shell, TAS, Xiaomi, Amazon, American Express, Cloudtail, Delhivery, Flipkart, Freshworks, Go-MMT, Infoedge, Microsoft, RBS among others."
        },
        {
            name: "SCMHRD Pune",
            established: "In 1971",
            location: "Bangalore, Hyderabad, Nagpur, Nashik, Noida and Pune.",
            batch_strength: "276",
            bt_ranking: ["15, 24"],
            nirf_ranking: "82, 56",
            exam_accepted: "SNAP",
            programs: "MBA, MBA Executive",
            course_fees: "17.43-13.31 Lakhs",
            avg_score: "96 percentile",
            avg_salary: "15.6 Lakhs",
            top_companies: "Aditya Birla Group, Amazon, Bajaj, Birlasoft, Capgemini, Cipla, Cognizant, CRISIL, DBS, Deloitte, Cummins, DCM Shriram, EY, Essar, Genpact, Godrej, Google, HDFC, HSBC, ICICI, HUL, ITC, J P Morgan, Vodafone, Wipro, Yes Bank among many other marquee recruiters."
        },

    ]

    const [searchInput, setSearchInput] = useState({});

    const [filtered, setFiltered] = useState({});
    const [col1, setCol1] = useState({});
    const [col2, setCol2] = useState({});
    const [col3, setCol3] = useState({});
    const [col4, setCol4] = useState({});
    const [showDropdown, setShowDropdown] = useState(false);
    const [filters, setFilters] = useState({
        established: true,
        location: true,
        batch_strength: true,
        bt_ranking: true,
        nirf_ranking: true,
        exam_accepted: true,
        programs: true,
        course_fees: true,
        avg_score: true,
        avg_salary: true,
        top_companies: true
    });
    const [hasFilledForm, setHasFilledForm] = useState(null);

    useEffect(() => {
        $('body').click(function(e){
            if(!e.target.className.includes('dropdown') || e.target.className.includes("s-dropdown-btn-container")){
                setShowDropdown(false);
            }
        });
        setHasFilledForm(localStorage.getItem('compare'))
    });

    useEffect(() => {
        if(hasFilledForm !== null){
            if(new Date(localStorage.getItem('compare')) < new Date()){
                localStorage.removeItem('compare')
                setHasFilledForm(null)
            }
        }
    })


    const handleFilterChange = (fieldName) => {
        setFilters(filters => ({...filters, [fieldName]: !filters[fieldName] }))
    }


    const handleChange = (e, colNum) => {
        // console.log(e.target.value);
        let currentList = [];
        let newList = [];
        setSearchInput(searchInput => ({ ...searchInput, [e.target.name]: e.target.value }))

        if (e.target.value !== "") {
            currentList = items;

            newList = currentList.filter(item => {
                const lc = item.name.toLowerCase();
                const filter = e.target.value.toLowerCase();
                return lc.includes(filter);
            });
        } else {
            newList = [];
        }

        if (colNum === 1) {
            setFiltered({ firstCol: newList });
        } else if (colNum === 2) {
            setFiltered({ secondCol: newList });
        } else if (colNum === 3) {
            setFiltered({ thirdCol: newList });
        } else if (colNum === 4) {
            setFiltered({ fourthCol: newList });
        }
    }


    const handleAddData = (item, colNum) => {

        if(hasFilledForm === null){
            $("#download_files").modal()
        } else {
            if (colNum === 1) {
                setCol1({ item });
                setFiltered({ firstCol: [] });
            } else if (colNum === 2) {
                setCol2({ item });
                setFiltered({ secondCol: [] });
            } else if (colNum === 3) {
                setCol3({ item });
                setFiltered({ thirdCol: [] });
            } else if (colNum === 4) {
                setCol4({ item });
                setFiltered({ fourthCol: [] });
            }
    
    
            setSearchInput(searchInput => ({ ...searchInput, ["col" + colNum]: "" }))
            console.log("ADDED ", item)

        }
        

    }


    const handleRemove = (colNum) => {
        if (colNum === 1) {
            setCol1({});
        } else if (colNum === 2) {
            setCol2({});
        } else if (colNum === 3) {
            setCol3({});
        } else if (colNum === 4) {
            setCol4({});
        }
    }




    return (
      <div>
        <Head>
          <title>QDS Pro Coaching Institute | Compare Colleges </title>
          <meta
            name="description"
            content="You can get a detailed distinction between the colleges in terms of various vital aspects such as its ranking, course fees, average salary, etc..."
          />
        </Head>
        <style>
          {`
                    .s-row-head{
                        -webkit-box-shadow: -1px 6px 13px -1px rgba(0,0,0,0.48);
                        -moz-box-shadow: -1px 6px 13px -1px rgba(0,0,0,0.48);
                        box-shadow: -1px 6px 13px -1px rgba(0,0,0,0.48);
                    }

                    .row .col-head { 
                        height: 150px; 
                        border-right: 1px solid #c2c2c2;
                        margin: 5px;
                        display: flex;
                    }

                    .row .col-head input{
                        justify-content: center;
                        margin: auto;
                        border: none;
                        border-bottom: 1px solid #c2c2c2;
                    }

                    .row .col-head input:focus{
                        outline: none;
                        border-bottom: 1px solid #77bf43;
                    }

                    .row .col-head i.fa-search{
                        margin: auto;
                        color: #77bf43;
                    }


                    .col-content{
                        padding: 10px !important;
                    }


                    .col ul{
                        list-style: none;
                        padding: 0px;
                    }


                    .s-filter-dropdown-container{
                        margin-bottom: 10px;
                    }

                    .s-filter-dropdown-container .dropdown{
                    }  

                    .s-filter-dropdown-container .dropdown button{
                        background: var(--color-green);
                        color: #fff;
                    }
                    .s-filter-dropdown-container .dropdown button:hover{
                        color: #fff;
                    }  
                    


                    .s-content-container{
                        margin-top: 10px;
                        background: #f2f2f2;   
                    }

                    .s-content-container .row{
                        padding: 10px !important ;
                        border-bottom: 1px solid #c2c2c2;
                    }

                    .s-content-container .col-content-title{
                        font-weight: bold;
                        font-size: 18px;
                    }


                    .s-search-list-container{
                        position: absolute;
                        top: 60%;
                        background: #fff;
                        border: 1px solid #c2c2c2;
                        width: 100%;
                        z-index: 1;
                        max-height: 200px;
                        overflow: auto;
                    }

                    .s-search-list-container li{
                        margin: 0px;
                        padding: 10px;
                        cursor: pointer;
                    }

                    .s-search-list-container li:hover{
                        background: #f2f2f2;
                    }


                    .s-college-name-container{
                        margin: auto;
                    }

                    .s-college-name-container p{
                        font-weight: bold;
                        font-size: 20px;
                    }

                    .s-remove-college{
                        color: #77bf43 !important;
                        textShadow: none !important;
                        opacity: 1;
                        position: absolute;
                        top: 0;
                        right: 5px;
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
                    data-aos-duration="500"
                    data-aos-easing="ease-in-linear"
                    className="white-text banner-title"
                  >
                    Compare Colleges
                  </h1>
                </div>
              </div>
              {/* About us title */}
              <div className="section-wrapper">
                <div className="s-filter-dropdown-container">
                  <div className="dropdown s-dropdown-btn-container">
                    <button
                      className="btn btn-secondary btn-lg dropdown-toggle"
                      type="button"
                      onClick={() => setShowDropdown(!showDropdown)}
                      id="dropdownMenuButton"
                    >
                      Filter
                    </button>
                    <div
                      style={{
                        display: showDropdown ? "block" : "none",
                        maxHeight: "170px",
                        overflow: "auto",
                      }}
                      className="dropdown-menu"
                      aria-labelledby="dropdownMenuButton"
                    >
                      <a
                        className="dropdown-item"
                        onClick={handleFilterChange.bind(this, "established")}
                      >
                        Established
                        {filters["established"] ? (
                          <i class="fa fa-times ml-2" aria-hidden="true"></i>
                        ) : (
                          <i class="fa fa-check ml-2" aria-hidden="true"></i>
                        )}
                      </a>
                      <a
                        className="dropdown-item"
                        onClick={handleFilterChange.bind(this, "location")}
                      >
                        Location
                        {filters["location"] ? (
                          <i class="fa fa-times ml-2" aria-hidden="true"></i>
                        ) : (
                          <i class="fa fa-check ml-2" aria-hidden="true"></i>
                        )}
                      </a>
                      <a
                        className="dropdown-item"
                        onClick={handleFilterChange.bind(
                          this,
                          "batch_strength"
                        )}
                      >
                        Batch Strength
                        {filters["batch_strength"] ? (
                          <i class="fa fa-times ml-2" aria-hidden="true"></i>
                        ) : (
                          <i class="fa fa-check ml-2" aria-hidden="true"></i>
                        )}
                      </a>
                      <a
                        className="dropdown-item"
                        onClick={handleFilterChange.bind(this, "bt_ranking")}
                      >
                        BT Ranking
                        {filters["bt_ranking"] ? (
                          <i class="fa fa-times ml-2" aria-hidden="true"></i>
                        ) : (
                          <i class="fa fa-check ml-2" aria-hidden="true"></i>
                        )}
                      </a>
                      <a
                        className="dropdown-item"
                        onClick={handleFilterChange.bind(this, "nirf_ranking")}
                      >
                        NIRF Ranking
                        {filters["nirf_ranking"] ? (
                          <i class="fa fa-times ml-2" aria-hidden="true"></i>
                        ) : (
                          <i class="fa fa-check ml-2" aria-hidden="true"></i>
                        )}
                      </a>
                      <a
                        className="dropdown-item"
                        onClick={handleFilterChange.bind(this, "exam_accepted")}
                      >
                        Exam Accepted
                        {filters["exam_accepted"] ? (
                          <i class="fa fa-times ml-2" aria-hidden="true"></i>
                        ) : (
                          <i class="fa fa-check ml-2" aria-hidden="true"></i>
                        )}
                      </a>
                      <a
                        className="dropdown-item"
                        onClick={handleFilterChange.bind(this, "programs")}
                      >
                        Programs
                        {filters["programs"] ? (
                          <i class="fa fa-times ml-2" aria-hidden="true"></i>
                        ) : (
                          <i class="fa fa-check ml-2" aria-hidden="true"></i>
                        )}
                      </a>
                      <a
                        className="dropdown-item"
                        onClick={handleFilterChange.bind(this, "course_fees")}
                      >
                        Course Fees
                        {filters["course_fees"] ? (
                          <i class="fa fa-times ml-2" aria-hidden="true"></i>
                        ) : (
                          <i class="fa fa-check ml-2" aria-hidden="true"></i>
                        )}
                      </a>
                      <a
                        className="dropdown-item"
                        onClick={handleFilterChange.bind(this, "avg_score")}
                      >
                        Average Score
                        {filters["avg_score"] ? (
                          <i class="fa fa-times ml-2" aria-hidden="true"></i>
                        ) : (
                          <i class="fa fa-check ml-2" aria-hidden="true"></i>
                        )}
                      </a>
                      <a
                        className="dropdown-item"
                        onClick={handleFilterChange.bind(this, "avg_salary")}
                      >
                        Average Salary
                        {filters["avg_salary"] ? (
                          <i class="fa fa-times ml-2" aria-hidden="true"></i>
                        ) : (
                          <i class="fa fa-check ml-2" aria-hidden="true"></i>
                        )}
                      </a>
                      <a
                        className="dropdown-item"
                        onClick={handleFilterChange.bind(this, "top_companies")}
                      >
                        Top Recruting Companies
                        {filters["top_companies"] ? (
                          <i class="fa fa-times ml-2" aria-hidden="true"></i>
                        ) : (
                          <i class="fa fa-check ml-2" aria-hidden="true"></i>
                        )}
                      </a>
                    </div>
                  </div>
                </div>

                <div
                  data-aos="fade-right"
                  data-aos-duration="1000"
                  data-aos-easing="ease-in-linear"
                >
                  <div className="row s-row-head ">
                   {/* <div className="col col-head"></div>*/}
                    <div className="col col-head">
                      {JSON.stringify(col1) === "{}" ? (
                        <>
                          <input
                            onChange={() => handleChange(event, 1)}
                            name="col1"
                            type="text"
                            placeholder="Add a College"
                            value={searchInput.col1}
                          />
                          <i class="fa fa-search" aria-hidden="true"></i>
                          {filtered.firstCol && filtered.firstCol.length > 0 ? (
                            <ul className="s-search-list-container">
                              {filtered.firstCol.map((item, i) => (
                                <li onClick={handleAddData.bind(this, item, 1)}>
                                  {item.name}{" "}
                                </li>
                              ))}
                            </ul>
                          ) : null}
                        </>
                      ) : (
                        <>
                          <div className="s-college-name-container">
                            <p> {col1.item.name} </p>
                          </div>
                          <button
                            type="button"
                            className="close s-remove-college"
                            aria-label="Close"
                            onClick={handleRemove.bind(this, 1)}
                          >
                            <span aria-hidden="true">&times;</span>
                          </button>
                        </>
                      )}
                    </div>
                    <div className="col col-head">
                      {JSON.stringify(col2) === "{}" ? (
                        <>
                          <input
                            onChange={() => handleChange(event, 2)}
                            name="col2"
                            type="text"
                            placeholder="Add a College"
                            value={searchInput.col2}
                          />
                          <i class="fa fa-search" aria-hidden="true"></i>
                          {filtered.secondCol &&
                          filtered.secondCol.length > 0 ? (
                            <ul className="s-search-list-container">
                              {filtered.secondCol.map((item, i) => (
                                <li onClick={handleAddData.bind(this, item, 2)}>
                                  {item.name}{" "}
                                </li>
                              ))}
                            </ul>
                          ) : null}
                        </>
                      ) : (
                        <>
                          <div className="s-college-name-container">
                            <p> {col2.item.name} </p>
                          </div>
                          <button
                            type="button"
                            className="close s-remove-college"
                            aria-label="Close"
                            onClick={handleRemove.bind(this, 2)}
                          >
                            <span aria-hidden="true">&times;</span>
                          </button>
                        </>
                      )}
                    </div>
                    <div className="col col-head">
                      {JSON.stringify(col3) === "{}" ? (
                        <>
                          <input
                            onChange={() => handleChange(event, 3)}
                            name="col3"
                            type="text"
                            placeholder="Add a College"
                            value={searchInput.col3}
                          />
                          <i class="fa fa-search" aria-hidden="true"></i>
                          {filtered.thirdCol && filtered.thirdCol.length > 0 ? (
                            <ul className="s-search-list-container">
                              {filtered.thirdCol.map((item, i) => (
                                <li onClick={handleAddData.bind(this, item, 3)}>
                                  {item.name}{" "}
                                </li>
                              ))}
                            </ul>
                          ) : null}
                        </>
                      ) : (
                        <>
                          <div className="s-college-name-container">
                            <p> {col3.item.name} </p>
                          </div>
                          <button
                            type="button"
                            className="close s-remove-college"
                            aria-label="Close"
                            onClick={handleRemove.bind(this, 3)}
                          >
                            <span aria-hidden="true">&times;</span>
                          </button>
                        </>
                      )}
                    </div>
                    <div className="col col-head">
                      {JSON.stringify(col4) === "{}" ? (
                        <>
                          <input
                            onChange={() => handleChange(event, 4)}
                            name="col4"
                            type="text"
                            placeholder="Add a College"
                            value={searchInput.col4}
                          />
                          <i class="fa fa-search" aria-hidden="true"></i>
                          {filtered.fourthCol &&
                          filtered.fourthCol.length > 0 ? (
                            <ul className="s-search-list-container">
                              {filtered.fourthCol.map((item, i) => (
                                <li onClick={handleAddData.bind(this, item, 4)}>
                                  {item.name}{" "}
                                </li>
                              ))}
                            </ul>
                          ) : null}
                        </>
                      ) : (
                        <>
                          <div className="s-college-name-container">
                            <p> {col4.item.name} </p>
                          </div>
                          <button
                            type="button"
                            className="close s-remove-college"
                            aria-label="Close"
                            onClick={handleRemove.bind(this, 4)}
                          >
                            <span aria-hidden="true">&times;</span>
                          </button>
                        </>
                      )}
                    </div>
                  </div>

                  <div className="s-content-container">
                    <div
                      style={{
                        display: filters["established"] ? "flex" : "none",
                      }}
                      className="row"
                    >
                      <div className="col col-content-title">Established</div>
                      <div className="col col-content">
                        {JSON.stringify(col1) !== "{}" && col1.item.established}
                      </div>
                      <div className="col col-content">
                        {JSON.stringify(col2) !== "{}" && col2.item.established}
                      </div>
                      <div className="col col-content">
                        {JSON.stringify(col3) !== "{}" && col3.item.established}
                      </div>
                      <div className="col col-content">
                        {JSON.stringify(col4) !== "{}" && col4.item.established}
                      </div>
                    </div>
                    <div
                      style={{ display: filters["location"] ? "flex" : "none" }}
                      className="row"
                    >
                      <div className="col col-content-title">Location</div>
                      <div className="col col-content">
                        {JSON.stringify(col1) !== "{}" && col1.item.location}
                      </div>
                      <div className="col col-content">
                        {JSON.stringify(col2) !== "{}" && col2.item.location}
                      </div>
                      <div className="col col-content">
                        {JSON.stringify(col3) !== "{}" && col3.item.location}
                      </div>
                      <div className="col col-content">
                        {JSON.stringify(col4) !== "{}" && col4.item.location}
                      </div>
                    </div>
                    <div
                      style={{
                        display: filters["batch_strength"] ? "flex" : "none",
                      }}
                      className="row"
                    >
                      <div className="col col-content-title">
                        Batch Strength
                      </div>
                      <div className="col col-content">
                        {JSON.stringify(col1) !== "{}" &&
                          col1.item.batch_strength}
                      </div>
                      <div className="col col-content">
                        {JSON.stringify(col2) !== "{}" &&
                          col2.item.batch_strength}
                      </div>
                      <div className="col col-content">
                        {JSON.stringify(col3) !== "{}" &&
                          col3.item.batch_strength}
                      </div>
                      <div className="col col-content">
                        {JSON.stringify(col4) !== "{}" &&
                          col4.item.batch_strength}
                      </div>
                    </div>
                    <div
                      style={{
                        display: filters["bt_ranking"] ? "flex" : "none",
                      }}
                      className="row"
                    >
                      <div className="col col-content-title">BT Ranking</div>
                      <div className="col col-content">
                        {JSON.stringify(col1) !== "{}" && (
                          <ul>
                            {col1.item.bt_ranking.map((bt, i) => (
                              <li key={i}>{bt}</li>
                            ))}
                          </ul>
                        )}
                      </div>
                      <div className="col col-content">
                        {JSON.stringify(col2) !== "{}" && (
                          <ul>
                            {col2.item.bt_ranking.map((bt, i) => (
                              <li key={i}>{bt}</li>
                            ))}
                          </ul>
                        )}
                      </div>
                      <div className="col col-content">
                        {JSON.stringify(col3) !== "{}" && (
                          <ul>
                            {col3.item.bt_ranking.map((bt, i) => (
                              <li key={i}>{bt}</li>
                            ))}
                          </ul>
                        )}
                      </div>
                      <div className="col col-content">
                        {JSON.stringify(col4) !== "{}" && (
                          <ul>
                            {col4.item.bt_ranking.map((bt, i) => (
                              <li key={i}>{bt}</li>
                            ))}
                          </ul>
                        )}
                      </div>
                    </div>
                    <div
                      style={{
                        display: filters["nirf_ranking"] ? "flex" : "none",
                      }}
                      className="row"
                    >
                      <div className="col col-content-title">NIRF Ranking</div>
                      <div className="col col-content">
                        {JSON.stringify(col1) !== "{}" &&
                          col1.item.nirf_ranking}
                      </div>
                      <div className="col col-content">
                        {JSON.stringify(col2) !== "{}" &&
                          col2.item.nirf_ranking}
                      </div>
                      <div className="col col-content">
                        {JSON.stringify(col3) !== "{}" &&
                          col3.item.nirf_ranking}
                      </div>
                      <div className="col col-content">
                        {JSON.stringify(col4) !== "{}" &&
                          col4.item.nirf_ranking}
                      </div>
                    </div>
                    <div
                      style={{
                        display: filters["exam_accepted"] ? "flex" : "none",
                      }}
                      className="row"
                    >
                      <div className="col col-content-title">Exam Accepted</div>
                      <div className="col col-content">
                        {JSON.stringify(col1) !== "{}" &&
                          col1.item.exam_accepted}
                      </div>
                      <div className="col col-content">
                        {JSON.stringify(col2) !== "{}" &&
                          col2.item.exam_accepted}
                      </div>
                      <div className="col col-content">
                        {JSON.stringify(col3) !== "{}" &&
                          col3.item.exam_accepted}
                      </div>
                      <div className="col col-content">
                        {JSON.stringify(col4) !== "{}" &&
                          col4.item.exam_accepted}
                      </div>
                    </div>
                    <div
                      style={{ display: filters["programs"] ? "flex" : "none" }}
                      className="row"
                    >
                      <div className="col col-content-title">Programs</div>
                      <div className="col col-content">
                        {JSON.stringify(col1) !== "{}" && col1.item.programs}
                      </div>
                      <div className="col col-content">
                        {JSON.stringify(col2) !== "{}" &&
                          col2.item.exam_accepted}
                      </div>
                      <div className="col col-content">
                        {JSON.stringify(col3) !== "{}" &&
                          col3.item.exam_accepted}
                      </div>
                      <div className="col col-content">
                        {JSON.stringify(col4) !== "{}" &&
                          col4.item.exam_accepted}
                      </div>
                    </div>
                    <div
                      style={{
                        display: filters["course_fees"] ? "flex" : "none",
                      }}
                      className="row"
                    >
                      <div className="col col-content-title">Course Fees</div>
                      <div className="col col-content">
                        {JSON.stringify(col1) !== "{}" && col1.item.course_fees}
                      </div>
                      <div className="col col-content">
                        {JSON.stringify(col2) !== "{}" && col2.item.course_fees}
                      </div>
                      <div className="col col-content">
                        {JSON.stringify(col3) !== "{}" && col3.item.course_fees}
                      </div>
                      <div className="col col-content">
                        {JSON.stringify(col4) !== "{}" && col4.item.course_fees}
                      </div>
                    </div>
                    <div
                      style={{
                        display: filters["avg_score"] ? "flex" : "none",
                      }}
                      className="row"
                    >
                      <div className="col col-content-title">Average Score</div>
                      <div className="col col-content">
                        {JSON.stringify(col1) !== "{}" && col1.item.avg_score}
                      </div>
                      <div className="col col-content">
                        {JSON.stringify(col2) !== "{}" && col2.item.avg_score}
                      </div>
                      <div className="col col-content">
                        {JSON.stringify(col3) !== "{}" && col3.item.avg_score}
                      </div>
                      <div className="col col-content">
                        {JSON.stringify(col4) !== "{}" && col4.item.avg_score}
                      </div>
                    </div>
                    <div
                      style={{
                        display: filters["avg_salary"] ? "flex" : "none",
                      }}
                      className="row"
                    >
                      <div className="col col-content-title">
                        Average Salary
                      </div>
                      <div className="col col-content">
                        {JSON.stringify(col1) !== "{}" && col1.item.avg_salary}
                      </div>
                      <div className="col col-content">
                        {JSON.stringify(col2) !== "{}" && col2.item.avg_salary}
                      </div>
                      <div className="col col-content">
                        {JSON.stringify(col3) !== "{}" && col3.item.avg_salary}
                      </div>
                      <div className="col col-content">
                        {JSON.stringify(col4) !== "{}" && col4.item.avg_salary}
                      </div>
                    </div>
                    <div
                      style={{
                        display: filters["top_companies"] ? "flex" : "none",
                      }}
                      className="row"
                    >
                      <div className="col col-content-title">
                        Top Recruting Companies
                      </div>
                      <div className="col col-content">
                        {JSON.stringify(col1) !== "{}" &&
                          col1.item.top_companies}
                      </div>
                      <div className="col col-content">
                        {JSON.stringify(col2) !== "{}" &&
                          col2.item.top_companies}
                      </div>
                      <div className="col col-content">
                        {JSON.stringify(col3) !== "{}" &&
                          col3.item.top_companies}
                      </div>
                      <div className="col col-content">
                        {JSON.stringify(col4) !== "{}" &&
                          col4.item.top_companies}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <DownloadModalForm type="compare" />
            </div>
            <Footer />
          </div>
        </div>
      </div>
    );
}

export default Compare;

