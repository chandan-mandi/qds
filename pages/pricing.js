import Header from "../components/Header";
import Footer from "../components/Footer";
import Pricing from '../Fragments/Pricing';

import Head from 'next/head';

function AboutPage() {
  return (
    <div>
      <Head>
        <title>QDS Pro Entrance Exams Coaching Institute | Fees Packages</title>
        <meta name="robots" content="noindex, nofollow" />
        {/* <meta name="description" content="Visit the website to know more about the pricing and fees packages of QDS Pro Entrance Exams Coaching Institute" /> */}
      </Head>
      <div className="page-loader">
        <div className="clock" />
      </div>
      {/* page loader */}
      <div className="aboutus-section">
        <div className="qds-wrapper">
          <Header />
          <style>
            {`
              .aboutus-banner{
                height:100vh;
              }
            `}
          </style>
          <div className="aboutus-banner">
            <div className="about-title">
              <h1
              data-aos="zoom-in"
              data-aos-delay="300"
              data-aos-duration="500"
              data-aos-easing="ease-in-linear"
              className="white-text banner-title">Pricing</h1>
            </div>
          </div>
          <Pricing />
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default AboutPage;

