import Header from "../components/Header";
import Footer from "../components/Footer";
import Head from "next/head";

function RefundsPage() {
  return (
    <div>
      <Head>
        <title>QDS Pro Entrance Exams Coaching Institute | Refund Policy</title>
      </Head>
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
                className="white-text banner-title">Refund Policy</h1>
              </div>
            </div>
            {/* About us title */}
            <div className="section-wrapper">
              <p
              data-aos="fade-right"
              data-aos-duration="1000"
              data-aos-easing="ease-in-linear"
              >
                Following policy is applicable for all the products /services
                that are bought and/or paid for on www.qdspro.com. This policy
                is applicable ONLY for products/services purchased online on
                www.qdspro.com or QDS Pro’s Authorized website if any and NOT
                for any classroom programmes or correspondence courses or test
                series or any other product for which the payment has been made
                at QDS Pro centre.
              </p>
              <ol>
                <li
                data-aos="fade-left"
                data-aos-duration="1000"
                data-aos-easing="ease-in-linear"
                >
                  The fees should be paid in full to avail the product/service.{" "}
                </li>
                <li
                data-aos="fade-right"
                data-aos-duration="1000"
                data-aos-easing="ease-in-linear"
                >
                  Any revision in the course fees /subscription fees / any other
                  fees will be at the discretion of QDS Pro and shall be updated
                  on the website time to time.{" "}
                </li>
                <li
                data-aos="fade-left"
                data-aos-duration="1000"
                data-aos-easing="ease-in-linear"
                >
                  Fees paid for a specific programme are not transferable to any
                  other programme.{" "}
                </li>
                <li
                data-aos="fade-right"
                data-aos-duration="1000"
                data-aos-easing="ease-in-linear"
                >
                  Fees once paid shall not be refunded in any circumstances.{" "}
                </li>
                <li
                data-aos="fade-left"
                data-aos-duration="1000"
                data-aos-easing="ease-in-linear"
                >
                  Fees once paid shall not be adjusted with any other product
                  /service availed subsequently at any QDS Pro centre.{" "}
                </li>
                <li
                data-aos="fade-right"
                data-aos-duration="1000"
                data-aos-easing="ease-in-linear"
                >
                  Courseware, content and Fees may be changed at the discretion
                  of QDS Pro.{" "}
                </li>
                <li
                data-aos="fade-left"
                data-aos-duration="1000"
                data-aos-easing="ease-in-linear"
                >
                  Certain packages purchased by the registered users may be
                  upgraded.{" "}
                </li>
                All the communication in this regard should be addressed to
                qdspro.com
              </ol>
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default RefundsPage;

