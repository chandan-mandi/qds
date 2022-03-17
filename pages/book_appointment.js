import Header from "../components/Header";
import Footer from "../components/Footer";
import Box from "../components/Box";
import styled from "styled-components";
import Head from "next/head";
import ReactPlayer from "react-player";
import Link from "next/link";

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

function appointmentPage() {
  const [activeFeatureTab, setActiveFeatureTab] = React.useState(0);

  React.useEffect(() => {
    // on mount, check for active tab
    let u = new URL(window.location.href);
    let q = u.searchParams.get("q");
    if (q !== null && q !== "1") {
      setActiveFeatureTab(Number(q));
    }
  }, []);

  return (
    <div>
      <Head>
        <title>QDS Pro Entrance Exams Coaching Institute | FAQs</title>
        <meta
          name="description"
          content="Visit the website to know about the frequently asked questions about entrance exam preparation related needs on QDS Pro Entrance Exams Coaching Institute."
        />
     <script type="text/javascript" src="https://assets.calendly.com/assets/external/widget.js" async></script>
      </Head>
      <style>
        {`
        body{
        overflow: hidden !important;
        }
        #accordion button {
          width: 100% !important;
          text-align: left !important;
          font-size: 1.3rem;
          white-space: normal !important;
          word-wrap: break-word;
          color: #fff !important;
        }

        #accordion .card-header {
          background-color: #213247 !important;
        }

        #accordion .btn-link:hover,
        #accordion .btn-link:active,
        #accordion .btn-link:focus {
          text-decoration: none !important;
        }

        #accordion .card-body {
          background-color: #77bf43 !important;
          color: #fff !important;
        }
        a{
          color: black;
          transition:all ease .5s
        }
        a:hover{
          color:#77bf43 !important;
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
                  Book an Appointment                
                </h1>
              </div>
            </div>
            {/* main container */}
            <div className="section-wrapper">
                  <div class="calendly-inline-widget" data-url="https://calendly.com/qdspro" style={{minWidth:"320px",  height:"630px"}}></div>
            </div>
            {/* main container */}
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default appointmentPage;
