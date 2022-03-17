import Header from "../components/Header";
import Footer from "../components/Footer";
import Head from "next/head";

function TermsPage() {
  return (
    <div>
      <Head>
        <title>QDS Pro Coaching Institute | Terms and Conditions</title>
        <meta
          name="description"
          content="Kindly read the Terms and Conditions carefully as it sets out the terms of a legally binding agreement between you (the reader) and QDS Pro Coaching Institute."
        />
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
                  data-aos-duration="1000"
                  data-aos-easing="ease-in-linear"
                  className="white-text banner-title"
                >
                  Terms &amp; Conditions
                </h1>
              </div>
            </div>
            {/* About us title */}
            <div className="section-wrapper">
              {/*<h2>Disclaimer</h2>*/}
              <p
                data-aos="fade-right"
                data-aos-duration="500"
                data-aos-easing="ease-in-linear"
              >
                This Site/Service is owned and operated by QDS Pro. By accessing
                this website you agree to abide by and be bound by the Terms and
                Conditions set out in this document. QDS Pro reserves the right
                to modify the terms and conditions ("Terms") of the Service
                without any prior notification. You are advised to regularly
                review the Terms. If you do not agree with any of the Terms and
                any amendments thereto, you must not use this site/service.
              </p>
              <p
                data-aos="fade-left"
                data-aos-duration="500"
                data-aos-easing="ease-in-linear"
              >
                The information displayed on this site is provided on a 'best
                efforts' and 'as is' basis without any warranties of any kind,
                including, but not limited to any implied warranties of
                merchantability or fitness for any particular purpose. The users
                of qdspro.com claim the entire responsibility for the selection
                and use of the service(s) and neither QDS Pro nor any of its
                information providers, licensers, employees or agents shall have
                any liability for any errors, malfunctions, defects, loss of
                data, resulting from the use or inability to use the service. In
                no event shall the liability of QDS Pro, if any, exceed the
                amount paid, if any, by the user. While utmost care is taken to
                provide correct and up to date information, QDS Pro does not
                warrant the accuracy, completeness and timely availability of
                the information provided on the site and accepts no
                responsibility or liability for any error or omission in any
                information provided on the site nor does the site claim to be
                comprehensive in its coverage of examinations (either
                competitive or otherwise in nature) and/or of the various
                educational programmes conducted in India.
              </p>
              <p
                data-aos="fade-right"
                data-aos-duration="500"
                data-aos-easing="ease-in-linear"
              >
                This site contains information about various academic programs
                offered by institutes and/or institutions as well as about
                various examinations that are conducted by them or by
                independent parties/third parties in India. This information has
                been compiled from various sources, including primary research
                conducted by, or on behalf of QDS Pro, as well as secondary or
                desk research. QDS Pro will in no event be liable for any
                direct, incidental, consequential or indirect damages arising
                out of the use of or inability to use and/or for any delay in
                the service provided by the site. THE INFORMATION AVAILABLE ON
                THIS SITE IS FOR GENERAL INFORMATION PURPOSES.
              </p>
              <p
                data-aos="fade-left"
                data-aos-duration="500"
                data-aos-easing="ease-in-linear"
              >
                Any product purchased online on www.qdspro.com is
                non-transferable and is intended for the sole use of the buyer
                only.
              </p>
              <p
                data-aos="fade-right"
                data-aos-duration="500"
                data-aos-easing="ease-in-linear"
              >
                You agree that are using qdspro.com at your sole risk. This Site
                displays advertisements and links provided by advertisers. You
                agree and understand that QDS Pro neither owns nor
                operates/controls any information or services provided on such
                third party websites. You further agree and understand that such
                links do not constitute an endorsement by QDS Pro of any such
                sites and are provided only as a convenience. QDS Pro is not
                responsible for the content or links displayed on such sites.
              </p>
              <p
                data-aos="fade-left"
                data-aos-duration="500"
                data-aos-easing="ease-in-linear"
              >
                This site is created and controlled by QDS Pro, which is based
                in Mumbai, India; as such the laws of India shall apply; courts
                in Mumbai shall have jurisdiction in respect of all the terms,
                conditions and disclaimers. Use of qdspro.com and all the
                services provided therein is unauthorized in any jurisdiction
                that does not give effect to all provisions of these terms and
                conditions, including, without limitation, this paragraph. You
                agree to indemnify and hold QDS Pro, its subsidiaries,
                affiliates, officers and employees, harmless from any claim,
                demand, or damage, including reasonable attorneys' fees,
                asserted by any third party due to or arising out of your use of
                or conduct on the Site.
              </p>
              <p
                data-aos="fade-right"
                data-aos-duration="500"
                data-aos-easing="ease-in-linear"
              >
                QDS Pro expressly disclaims any warranties whether express or
                implied about the suitability, reliability, availability,
                timeliness, correctness, completeness, quality, continuity,
                performance, fitness of products, services contained/displayed
                within this site for any purpose. All such information,
                software, products, services and related graphics are provided
                "as is" without warranty of any kind. QDS Pro hereby also
                disclaims all warranties and conditions with regard to this
                service, software, products and services, including all implied
                warranties and conditions of merchantability, fitness for a
                particular purpose, workmanlike effort, title and
                non-infringement.
              </p>
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default TermsPage;

