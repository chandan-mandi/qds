import Header from "../components/Header";
import Footer from "../components/Footer";
import Head from "next/head";


function ExamsPage() {
  return (
    <div>
        <Head>
          <title>QDS Pro Entrance Exams Coaching Institute | Exams </title>
        </Head>
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
                className="white-text banner-title">Courses (Exams)</h1>
              </div>
            </div>
            {/* About us title */}
            {/* PFD links section */}
            <div className="mission-vision-section section-wrapper">
              <ul
              data-aos="zoom-in-left"
              data-aos-duration="1500"
              data-aos-easing="ease-in-linear"
              className="pdf-list">
                <li>
                  <a
                    href="https://firebasestorage.googleapis.com/v0/b/qdsprowebsiteadmin.appspot.com/o/examdetails%2FCommon%20Admission%20Test%20(CAT)%20Details.pdf?alt=media&token=55a3e9ec-3492-4f6c-ae54-bea0c62eb453"
                    target="_blank"
                  >
                    <i className="fa fa-file-pdf-o" aria-hidden="true" /> Common
                    Admission Test (CAT) Details
                  </a>
                </li>
                <li>
                  <a
                    href="https://firebasestorage.googleapis.com/v0/b/qdsprowebsiteadmin.appspot.com/o/examdetails%2FCommon%20Management%20Admission%20Test%20(CMAT)%20Details.pdf?alt=media&token=3d7b6448-230c-4d64-b446-e6f1ab6b833a"
                    target="_blank"
                  >
                    <i className="fa fa-file-pdf-o" aria-hidden="true" /> Common
                    Management Admission Test (CMAT) Details
                  </a>
                </li>
                <li>
                  <a
                    href="https://firebasestorage.googleapis.com/v0/b/qdsprowebsiteadmin.appspot.com/o/examdetails%2FGraduate%20Management%20Admission%20Test%20(GMAT)%20Details.pdf?alt=media&token=66402663-b8c3-4a58-be98-4a5178d4133e"
                    target="_blank"
                  >
                    <i className="fa fa-file-pdf-o" aria-hidden="true" />{" "}
                    Graduate Management Admission Test (GMAT) Details
                  </a>
                </li>
                <li>
                  <a
                    href="https://firebasestorage.googleapis.com/v0/b/qdsprowebsiteadmin.appspot.com/o/examdetails%2FGraduate%20Record%20Examinations%20(GRE)%20Details.pdf?alt=media&token=639804f4-80ae-4bbb-bce3-08feff89cfbd"
                    target="_blank"
                  >
                    <i className="fa fa-file-pdf-o" aria-hidden="true" />{" "}
                    Graduate Record Examinations (GRE) Details
                  </a>
                </li>
                <li>
                  <a
                    href="https://firebasestorage.googleapis.com/v0/b/qdsprowebsiteadmin.appspot.com/o/examdetails%2FMaharashtra%20-%20Common%20Entrance%20Test%20(MAH-CET)%20Details.pdf?alt=media&token=082a2b88-afcf-41bf-aab2-71db34820fc2"
                    target="_blank"
                  >
                    <i className="fa fa-file-pdf-o" aria-hidden="true" />{" "}
                    Maharashtra - Common Entrance Test (MAH-CET) Details
                  </a>
                </li>
                <li>
                  <a
                    href="https://firebasestorage.googleapis.com/v0/b/qdsprowebsiteadmin.appspot.com/o/examdetails%2FNMIMS%20(Narsee%20Monjee%20Institute%20of%20Management%20Studies)%20Management%20Aptitude%20Test%20(NMAT)%20Details.pdf?alt=media&token=52f548c1-7589-47d3-84ca-861f4e0b95f4"
                    target="_blank"
                  >
                    <i className="fa fa-file-pdf-o" aria-hidden="true" /> NMIMS
                    (Narsee Monjee Institute of Management Studies) Management
                    Aptitude Test (NMAT) Details
                  </a>
                </li>
                <li>
                  <a
                    href="https://firebasestorage.googleapis.com/v0/b/qdsprowebsiteadmin.appspot.com/o/examdetails%2FScholastic%20Assessment%20Test%20(SAT)%20Details.pdf?alt=media&token=63a84378-d035-489f-92cb-ef332ab0e31d"
                    target="_blank"
                  >
                    <i className="fa fa-file-pdf-o" aria-hidden="true" />{" "}
                    Scholastic Assessment Test (SAT) Details
                  </a>
                </li>
                <li>
                  <a
                    href="https://firebasestorage.googleapis.com/v0/b/qdsprowebsiteadmin.appspot.com/o/examdetails%2FSymbiosis%20National%20Aptitude%20Test%20(SNAP)%20Details.pdf?alt=media&token=105b96a0-ef18-470f-a4cd-bccffbf5eaf4"
                    target="_blank"
                  >
                    <i className="fa fa-file-pdf-o" aria-hidden="true" />{" "}
                    Symbiosis National Aptitude Test (SNAP) Details
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default ExamsPage
