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

function FAQPage() {
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
      </Head>
      <style>
        {`
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
                  FAQs
                </h1>
              </div>
            </div>
            {/* main container */}
            <div className="section-wrapper">
              <ExamsExcelWrapper>
                <Box
                  active={activeFeatureTab === 2}
                  onClick={() => setActiveFeatureTab(2)}
                >
                  <span>Live Online Tutoring</span>
                </Box>

                <Box
                  active={activeFeatureTab === 0}
                  onClick={() => setActiveFeatureTab(0)}
                >
                  <span>Coaching Classes</span>
                </Box>
                 
                  <Box
                  active={activeFeatureTab === 1}
                  onClick={() => setActiveFeatureTab(1)}
                  >
                  <span>Video Lectures</span>
                  </Box>

                <Box
                  active={activeFeatureTab === 3}
                  onClick={() => setActiveFeatureTab(3)}
                >
                  <span>Doubt Solving</span>
                </Box>
                <Box
                  active={activeFeatureTab === 4}
                  onClick={() => setActiveFeatureTab(4)}
                >
                  <span>Home Tutoring</span>
                </Box>
              </ExamsExcelWrapper>

              {activeFeatureTab === 0 ? (
                <div
                  data-aos="zoom-in"
                  data-aos-duration="1500"
                  data-aos-easing="ease-in-linear"
                  id="accordion"
                >
                  <div className="card">
                    <div className="card-header" id="headingOne">
                      <h2 className="mb-0">
                        <button
                          className="btn btn-link"
                          data-toggle="collapse"
                          data-target="#collapseOne"
                          aria-expanded="true"
                          aria-controls="collapseOne"
                        >
                          What differentiates QDS Pro from other Coaching
                          Classes?
                        </button>
                      </h2>
                    </div>
                    <div
                      id="collapseOne"
                      className="collapse show"
                      aria-labelledby="headingOne"
                      data-parent="#accordion"
                    >
                      <div className="card-body">
                        Key highlights of QDS Pro Coaching Classes:-
                        <br />
                        <br />
                        1. Unlimited Access to 24 x 7 Online Doubt Solving
                        Platform
                        <br />
                        2. 2. Coaching from Popular Author Books
                        <br />
                        3. Small Batch Sizes
                        <br />
                        4. 125+ Hours of Classroom Training
                        <br />
                        5. No Visiting Faculties
                        <br />
                        <br />
                        To know more, visit{" "}
                        <a
                          style={{ color: "white" }}
                          href="https://www.qdspro.com/blog/what-differentiates-qds-pro-from-other-mba-coaching-classes/"
                        >
                          https://www.qdspro.com/blog/what-differentiates-qds-pro-from-other-mba-coaching-classes/
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="card">
                    <div className="card-header" id="headingThree">
                      <h2 className="mb-0">
                        <button
                          className="btn btn-link collapsed"
                          data-toggle="collapse"
                          data-target="#collapseThree"
                          aria-expanded="false"
                          aria-controls="collapseThree"
                        >
                          For what all entrance exams do you coach students?
                          What are your key products?
                        </button>
                      </h2>
                    </div>
                    <div
                      id="collapseThree"
                      className="collapse"
                      aria-labelledby="headingThree"
                      data-parent="#accordion"
                    >
                      <div className="card-body">
                        We coach students for all the Management, Bank, Law and
                        Other Entrance exams especially for MBA Entrance exams
                        like GMAT, CAT, GRE, MAH-CET, SAT, NMAT, SNAP, CMAT,
                        BBA, IBPS PO, IIFT, MAT, etc…
                      </div>
                    </div>
                  </div>

                  <div className="card">
                    <div className="card-header" id="headingThree">
                      <h2 className="mb-0">
                        <button
                          className="btn btn-link collapsed"
                          data-toggle="collapse"
                          data-target="#collapseFour"
                          aria-expanded="false"
                          aria-controls="collapseFour"
                        >
                          Do you offer a free demo / trial class?
                        </button>
                      </h2>
                    </div>
                    <div
                      id="collapseFour"
                      className="collapse"
                      aria-labelledby="headingThree"
                      data-parent="#accordion"
                    >
                      <div className="card-body">Yes, we do.</div>
                    </div>
                  </div>

                  <div className="card">
                    <div className="card-header" id="headingThree">
                      <h2 className="mb-0">
                        <button
                          className="btn btn-link collapsed"
                          data-toggle="collapse"
                          data-target="#collapse5"
                          aria-expanded="false"
                          aria-controls="collapse5"
                        >
                          Will you help us if we are unable to clear the paper
                          with the requisite score in the first attempt?
                        </button>
                      </h2>
                    </div>
                    <div
                      id="collapse5"
                      className="collapse"
                      aria-labelledby="headingThree"
                      data-parent="#accordion"
                    >
                      <div className="card-body">
                        Yes, we will. You may continue coaching with us until
                        your next attempt without paying any additional fees.
                      </div>
                    </div>
                  </div>

                  <div className="card">
                    <div className="card-header" id="headingThree">
                      <h2 className="mb-0">
                        <button
                          className="btn btn-link collapsed"
                          data-toggle="collapse"
                          data-target="#collapse6"
                          aria-expanded="false"
                          aria-controls="collapse6"
                        >
                          What is your normal batch size?
                        </button>
                      </h2>
                    </div>
                    <div
                      id="collapse6"
                      className="collapse"
                      aria-labelledby="headingThree"
                      data-parent="#accordion"
                    >
                      <div className="card-body">
                        4 – 5 students. We ensure personalized attention to each
                        and every student.
                      </div>
                    </div>
                  </div>

                  <div className="card">
                    <div className="card-header" id="headingThree">
                      <h2 className="mb-0">
                        <button
                          className="btn btn-link collapsed"
                          data-toggle="collapse"
                          data-target="#collapse7"
                          aria-expanded="false"
                          aria-controls="collapse7"
                        >
                          What if we miss out on a class?
                        </button>
                      </h2>
                    </div>
                    <div
                      id="collapse7"
                      className="collapse"
                      aria-labelledby="headingThree"
                      data-parent="#accordion"
                    >
                      <div className="card-body">
                        You may re-attend the same topic in another ongoing
                        batch.
                      </div>
                    </div>
                  </div>

                  <div className="card">
                    <div className="card-header" id="headingThree">
                      <h2 className="mb-0">
                        <button
                          className="btn btn-link collapsed"
                          data-toggle="collapse"
                          data-target="#collapse8"
                          aria-expanded="false"
                          aria-controls="collapse8"
                        >
                          Where should I complain if I have any grievance?
                        </button>
                      </h2>
                    </div>
                    <div
                      id="collapse8"
                      className="collapse"
                      aria-labelledby="headingThree"
                      data-parent="#accordion"
                    >
                      <div className="card-body">
                        We have set up a suggestion box in the class itself,
                        wherein you can drop your complain anonymously and then
                        we will take care of the rest.
                      </div>
                    </div>
                  </div>

                  <div className="card">
                    <div className="card-header" id="headingThree">
                      <h2 className="mb-0">
                        <button
                          className="btn btn-link collapsed"
                          data-toggle="collapse"
                          data-target="#collapse9"
                          aria-expanded="false"
                          aria-controls="collapse9"
                        >
                          Where can we get to know more about the course
                          details?
                        </button>
                      </h2>
                    </div>
                    <div
                      id="collapse9"
                      className="collapse"
                      aria-labelledby="headingThree"
                      data-parent="#accordion"
                    >
                      <div className="card-body">
                        You may directly contact us for our course details. Our
                        support staff will forward you all the course details
                        for the course enquired by you.
                      </div>
                    </div>
                  </div>

                  <div className="card">
                    <div className="card-header" id="headingThree">
                      <h2 className="mb-0">
                        <button
                          className="btn btn-link collapsed"
                          data-toggle="collapse"
                          data-target="#collapse10"
                          aria-expanded="false"
                          aria-controls="collapse10"
                        >
                          How can we schedule a free demo class?
                        </button>
                      </h2>
                    </div>
                    <div
                      id="collapse10"
                      className="collapse"
                      aria-labelledby="headingThree"
                      data-parent="#accordion"
                    >
                      <div className="card-body">
                        To schedule a free demo class, you may fill the enquiry
                        form available in the Contact Us Page / QDS Pro App.
                        Alternatively; you may directly contact the QDS Pro
                        Team.
                      </div>
                    </div>
                  </div>

                  <div className="card">
                    <div className="card-header" id="headingThree">
                      <h2 className="mb-0">
                        <button
                          className="btn btn-link collapsed"
                          data-toggle="collapse"
                          data-target="#collapse11"
                          aria-expanded="false"
                          aria-controls="collapse11"
                        >
                          How many centres do you have?
                        </button>
                      </h2>
                    </div>
                    <div
                      id="collapse11"
                      className="collapse"
                      aria-labelledby="headingThree"
                      data-parent="#accordion"
                    >
                      <div className="card-body">
                        We are currently operating at two centres – Charni Road
                        and Andheri.
                      </div>
                    </div>
                  </div>
                </div>
              ) : null}
              
               {activeFeatureTab === 1 ? (
                <div
                  data-aos="zoom-in"
                  data-aos-duration="1500"
                  data-aos-easing="ease-in-linear"
                  id="accordion"
                >
                  <div className="card">
                    <div className="card-header" id="newheadingOne">
                      <h2 className="mb-0">
                        <button
                          className="btn btn-link"
                          data-toggle="collapse"
                          data-target="#newQuesOne"
                          aria-expanded="true"
                          aria-controls="newQuesOne"
                        >
                          How can we attend the live classes, access the study
                          material, use the question bank, etc... if we are
                          opting for your online course?
                        </button>
                      </h2>
                    </div>
                    <div
                      id="newQuesOne"
                      className="collapse show"
                      aria-labelledby="newQuesOne"
                      data-parent="#accordion"
                    >
                      <div className="card-body">
                        You will have a personalized dashboard on our online
                        portal (QDS Pro Online Prep) with access to the
                        following:-
                        <br />
                        <br />
                        1. Attending Live Classes
                        <br />
                        2. Study Library (consisting of all Popular Author Books
                        and Publications)
                        <br />
                        3. Question Bank with 20,000+ practice questions,
                        segregated section wise, topic wise, question type wise
                        and difficulty wise
                        <br />
                        4. Homework Assignments
                        <br />
                        5. Practice/Mock Tests.
                        <br />
                        <br />
                        Additionally, you will be able to access all of this on
                        any of your devices, even on your mobile phone, using
                        our mobile app - 'QDS Pro Online Prep'.
                      </div>
                    </div>
                  </div>

                  <div className="card">
                    <div className="card-header" id="newheadingTwo">
                      <h2 className="mb-0">
                        <button
                          className="btn btn-link collapsed"
                          data-toggle="collapse"
                          data-target="#newQuesTwo"
                          aria-expanded="true"
                          aria-controls="newQuesTwo"
                        >
                          What are the key highlights of your Online Prep
                          Courses?
                        </button>
                      </h2>
                    </div>
                    <div
                      id="newQuesTwo"
                      className="collapse"
                      aria-labelledby="newQuesTwo"
                      data-parent="#accordion"
                    >
                      <div className="card-body">
                        <ReactPlayer
                          class="player"
                          style={{ margin: "auto", border: "1px solid black" }}
                          url={`https://www.youtube.com/watch?v=rZPlHa5yJyM`}
                          controls
                        />
                      </div>
                    </div>
                  </div>

                  <div className="card">
                    <div className="card-header" id="newheadingThree">
                      <h2 className="mb-0">
                        <button
                          className="btn btn-link collapsed"
                          data-toggle="collapse"
                          data-target="#newQuesThree"
                          aria-expanded="true"
                          aria-controls="newQuesThree"
                        >
                          How can we book a free trial/demo session?
                        </button>
                      </h2>
                    </div>
                    <div
                      id="newQuesThree"
                      className="collapse"
                      aria-labelledby="newQuesThree"
                      data-parent="#accordion"
                    >
                      <div className="card-body">
                        To Book a free trial / demo, go to{" "}
                        <a href="https://www.qdspro.com/enquiry">
                          <span className="text-white">
                            https://www.qdspro.com/enquiry
                          </span>
                        </a>
                        .
                      </div>
                    </div>
                  </div>

                  <div className="card">
                    <div className="card-header" id="newheadingFour">
                      <h2 className="mb-0">
                        <button
                          className="btn btn-link collapsed"
                          data-toggle="collapse"
                          data-target="#newQuesFour"
                          aria-expanded="true"
                          aria-controls="newQuesFour"
                        >
                          Where can we get to know more about you and your
                          courses?
                        </button>
                      </h2>
                    </div>
                    <div
                      id="newQuesFour"
                      className="collapse"
                      aria-labelledby="newQuesFour"
                      data-parent="#accordion"
                    >
                      <div className="card-body">
                        To know more about us and our courses, you may log on to{" "}
                        <a href="/">
                          <span className="text-white">
                            https://www.qdspro.com/
                          </span>
                        </a>
                        .
                      </div>
                    </div>
                  </div>

                  <div className="card">
                    <div className="card-header" id="newheadingFive">
                      <h2 className="mb-0">
                        <button
                          className="btn btn-link collapsed"
                          data-toggle="collapse"
                          data-target="#newQuesFive"
                          aria-expanded="true"
                          aria-controls="newQuesFive"
                        >
                          What if we are unable to get the desired score in the
                          first attempt?
                        </button>
                      </h2>
                    </div>
                    <div
                      id="newQuesFive"
                      className="collapse"
                      aria-labelledby="newQuesFive"
                      data-parent="#accordion"
                    >
                      <div className="card-body">
                        You may undergo the full course again, without paying
                        any additional fees.
                      </div>
                    </div>
                  </div>

                  <div className="card">
                    <div className="card-header" id="newheadingSix">
                      <h2 className="mb-0">
                        <button
                          className="btn btn-link collapsed"
                          data-toggle="collapse"
                          data-target="#newQuesSix"
                          aria-expanded="true"
                          aria-controls="newQuesSix"
                        >
                          What if we miss out on any class?
                        </button>
                      </h2>
                    </div>
                    <div
                      id="newQuesSix"
                      className="collapse"
                      aria-labelledby="newQuesSix"
                      data-parent="#accordion"
                    >
                      <div className="card-body">
                        Need not worry, we've got you covered! We maintain a
                        checklist to track the progress of all our students, so
                        if you miss out on any class, we have a record of it,
                        when that topic is scheduled again in any of our other
                        batches, we invite you for the same, we have multiple
                        batches running throughout the day.
                      </div>
                    </div>
                  </div>

                  <div className="card">
                    <div className="card-header" id="newheadingSeven">
                      <h2 className="mb-0">
                        <button
                          className="btn btn-link collapsed"
                          data-toggle="collapse"
                          data-target="#newQuesSeven"
                          aria-expanded="true"
                          aria-controls="newQuesSeven"
                        >
                          Do you provided online classes for all your courses ?
                        </button>
                      </h2>
                    </div>
                    <div
                      id="newQuesSeven"
                      className="collapse"
                      aria-labelledby="newQuesSeven"
                      data-parent="#accordion"
                    >
                      <div className="card-body">
                        Yes, we do. All our online classes are conducted on our
                        in-house online tutoring software - ' QDS Pro Online
                        Prep'. To know more, you can log on to{" "}
                        <a href="/">
                          <span className="text-white">
                            https://onlineprep.qdspro.com/
                          </span>
                        </a>
                        .
                      </div>
                    </div>
                  </div>

                  <div className="card">
                    <div className="card-header" id="headingOne">
                      <h2 className="mb-0">
                        <button
                          className="btn btn-link collapsed"
                          data-toggle="collapse"
                          data-target="#collapseOne"
                          aria-expanded="true"
                          aria-controls="collapseOne"
                        >
                          How many students will be there in a live class?
                        </button>
                      </h2>
                    </div>
                    <div
                      id="collapseOne"
                      className="collapse"
                      aria-labelledby="headingOne"
                      data-parent="#accordion"
                    >
                      <div className="card-body">
                        In personalized or individual one – to – one class,
                        there will be only one student in the class. In group
                        classes, the batch size will still be restricted to 4 –
                        5 students, ensuring personalized attention to each and
                        every student.
                      </div>
                    </div>
                  </div>

                  <div className="card">
                    <div className="card-header" id="headingThree">
                      <h2 className="mb-0">
                        <button
                          className="btn btn-link collapsed"
                          data-toggle="collapse"
                          data-target="#collapseThree"
                          aria-expanded="false"
                          aria-controls="collapseThree"
                        >
                          What are the requirements to attend the online
                          classes?
                        </button>
                      </h2>
                    </div>
                    <div
                      id="collapseThree"
                      className="collapse"
                      aria-labelledby="headingThree"
                      data-parent="#accordion"
                    >
                      <div className="card-body">
                        A laptop / desktop / computer / tablet / mobile with an
                        internet connection.
                      </div>
                    </div>
                  </div>

                  <div className="card">
                    <div className="card-header" id="headingThree">
                      <h2 className="mb-0">
                        <button
                          className="btn btn-link collapsed"
                          data-toggle="collapse"
                          data-target="#collapseFour"
                          aria-expanded="false"
                          aria-controls="collapseFour"
                        >
                          What will be the timings of the live classes?
                        </button>
                      </h2>
                    </div>
                    <div
                      id="collapseFour"
                      className="collapse"
                      aria-labelledby="headingThree"
                      data-parent="#accordion"
                    >
                      <div className="card-body">
                        For one to one individual classes, timings will be as
                        per convenience of student. Select your own class time,
                        class duration, class days per week and class start
                        date. For group classes, the class days and class
                        timings are pre-fixed by Team QDS Pro.
                      </div>
                    </div>
                  </div>

                  <div className="card">
                    <div className="card-header" id="headingThree">
                      <h2 className="mb-0">
                        <button
                          className="btn btn-link collapsed"
                          data-toggle="collapse"
                          data-target="#collapse5"
                          aria-expanded="false"
                          aria-controls="collapse5"
                        >
                          What will happen if i miss a live class?
                        </button>
                      </h2>
                    </div>
                    <div
                      id="collapse5"
                      className="collapse"
                      aria-labelledby="headingThree"
                      data-parent="#accordion"
                    >
                      <div className="card-body">
                        If a student missed any class on account of some
                        emergency, the class can be rescheduled. However, it
                        does not mean that the student should make excuses very
                        often to reschedule the class frequently.
                      </div>
                    </div>
                  </div>

                  <div className="card">
                    <div className="card-header" id="headingThree">
                      <h2 className="mb-0">
                        <button
                          className="btn btn-link collapsed"
                          data-toggle="collapse"
                          data-target="#collapse6"
                          aria-expanded="false"
                          aria-controls="collapse6"
                        >
                          Do you offer a free demo class?
                        </button>
                      </h2>
                    </div>
                    <div
                      id="collapse6"
                      className="collapse"
                      aria-labelledby="headingThree"
                      data-parent="#accordion"
                    >
                      <div className="card-body">Yes, we do.</div>
                    </div>
                  </div>

                  <div className="card">
                    <div className="card-header" id="headingThree">
                      <h2 className="mb-0">
                        <button
                          className="btn btn-link collapsed"
                          data-toggle="collapse"
                          data-target="#collapse7"
                          aria-expanded="false"
                          aria-controls="collapse7"
                        >
                          Is it possible to prepare for competitive exams from
                          an online platform, considering that these exams are
                          one of the toughest entrance exams?
                        </button>
                      </h2>
                    </div>
                    <div
                      id="collapse7"
                      className="collapse"
                      aria-labelledby="headingThree"
                      data-parent="#accordion"
                    >
                      <div className="card-body">
                        Yes. It is possible to prepare for any competitive
                        examination on an online platform. What matters is the
                        quality that is delivered irrespective of the medium.
                      </div>
                    </div>
                  </div>

                  <div className="card">
                    <div className="card-header" id="headingThree">
                      <h2 className="mb-0">
                        <button
                          className="btn btn-link collapsed"
                          data-toggle="collapse"
                          data-target="#collapse8"
                          aria-expanded="false"
                          aria-controls="collapse8"
                        >
                          What is your teaching methodology?
                        </button>
                      </h2>
                    </div>
                    <div
                      id="collapse8"
                      className="collapse"
                      aria-labelledby="headingThree"
                      data-parent="#accordion"
                    >
                      <div className="card-body">
                        We have experienced and trained teachers who are highly
                        interactive and friendly while being professional at the
                        same time. Our teachers understand student's level,
                        knowledge base and fundamental concepts. Accordingly,
                        they plan every lecture based on student's individual
                        needs. They focus in making the student's concepts clear
                        starting from basic level to advance level. As a result
                        even the below average students start finding the
                        studies comfortable and become more and more interested
                        for grasping key concepts of the topic. i.e. our
                        teachers create interest in the students for learning.
                        The teachers demonstrate with the concept with live
                        examples and proceed the session while clearing the
                        conceptual doubts
                      </div>
                    </div>
                  </div>

                  <div className="card">
                    <div className="card-header" id="headingThree">
                      <h2 className="mb-0">
                        <button
                          className="btn btn-link collapsed"
                          data-toggle="collapse"
                          data-target="#collapse9"
                          aria-expanded="false"
                          aria-controls="collapse9"
                        >
                          Is there any other platform you have where a student
                          can ask questions except online classes?
                        </button>
                      </h2>
                    </div>
                    <div
                      id="collapse9"
                      className="collapse"
                      aria-labelledby="headingThree"
                      data-parent="#accordion"
                    >
                      <div className="card-body">
                        Yes, you can send your questions on our support email
                        Id, which will be shared to the concerned tutor to
                        discuss during live session, or you may receive an
                        instant reply through email with complete solution.
                      </div>
                    </div>
                  </div>

                  <div className="card">
                    <div className="card-header" id="headingThree">
                      <h2 className="mb-0">
                        <button
                          className="btn btn-link collapsed"
                          data-toggle="collapse"
                          data-target="#collapse10"
                          aria-expanded="false"
                          aria-controls="collapse10"
                        >
                          Do you provide fee discounts to students?
                        </button>
                      </h2>
                    </div>
                    <div
                      id="collapse10"
                      className="collapse"
                      aria-labelledby="headingThree"
                      data-parent="#accordion"
                    >
                      <div className="card-body">
                        Yes. The percentage of discount increases with increase
                        in no. of hours or no. of days you want to study for.
                      </div>
                    </div>
                  </div>

                  <div className="card">
                    <div className="card-header" id="headingThree">
                      <h2 className="mb-0">
                        <button
                          className="btn btn-link collapsed"
                          data-toggle="collapse"
                          data-target="#collapse11"
                          aria-expanded="false"
                          aria-controls="collapse11"
                        >
                          What are the benefits of online classes?
                        </button>
                      </h2>
                    </div>
                    <div
                      id="collapse11"
                      className="collapse"
                      aria-labelledby="headingThree"
                      data-parent="#accordion"
                    >
                      <div className="card-body">
                        1. Online classes are similar to normal classroom
                        coaching. <br />
                        2. More comfortable learning environment. <br />
                        3. Convenience and Flexibility.
                        <br />
                        4. More interaction and greater ability to concentrate.
                        <br />
                        5. Suitable for working professionals
                        <br />
                      </div>
                    </div>
                  </div>
                </div>
              ) : null}

              {activeFeatureTab === 2 ? (
                <div
                  data-aos="zoom-in"
                  data-aos-duration="1500"
                  data-aos-easing="ease-in-linear"
                  id="accordion"
                >
                  <div className="card">
                    <div className="card-header" id="newheadingOne">
                      <h2 className="mb-0">
                        <button
                          className="btn btn-link"
                          data-toggle="collapse"
                          data-target="#newQuesOne"
                          aria-expanded="true"
                          aria-controls="newQuesOne"
                        >
                          How can we attend the live classes, access the study
                          material, use the question bank, etc... if we are
                          opting for your online course?
                        </button>
                      </h2>
                    </div>
                    <div
                      id="newQuesOne"
                      className="collapse show"
                      aria-labelledby="newQuesOne"
                      data-parent="#accordion"
                    >
                      <div className="card-body">
                        You will have a personalized dashboard on our online
                        portal (QDS Pro Online Prep) with access to the
                        following:-
                        <br />
                        <br />
                        1. Attending Live Classes
                        <br />
                        2. Study Library (consisting of all Popular Author Books
                        and Publications)
                        <br />
                        3. Question Bank with 20,000+ practice questions,
                        segregated section wise, topic wise, question type wise
                        and difficulty wise
                        <br />
                        4. Homework Assignments
                        <br />
                        5. Practice/Mock Tests.
                        <br />
                        <br />
                        Additionally, you will be able to access all of this on
                        any of your devices, even on your mobile phone, using
                        our mobile app - 'QDS Pro Online Prep'.
                      </div>
                    </div>
                  </div>

                  <div className="card">
                    <div className="card-header" id="newheadingTwo">
                      <h2 className="mb-0">
                        <button
                          className="btn btn-link collapsed"
                          data-toggle="collapse"
                          data-target="#newQuesTwo"
                          aria-expanded="true"
                          aria-controls="newQuesTwo"
                        >
                          What are the key highlights of your Online Prep
                          Courses?
                        </button>
                      </h2>
                    </div>
                    <div
                      id="newQuesTwo"
                      className="collapse"
                      aria-labelledby="newQuesTwo"
                      data-parent="#accordion"
                    >
                      <div className="card-body">
                        <ReactPlayer
                          class="player"
                          style={{ margin: "auto", border: "1px solid black" }}
                          url={`https://www.youtube.com/watch?v=rZPlHa5yJyM`}
                          controls
                        />
                      </div>
                    </div>
                  </div>

                  <div className="card">
                    <div className="card-header" id="newheadingThree">
                      <h2 className="mb-0">
                        <button
                          className="btn btn-link collapsed"
                          data-toggle="collapse"
                          data-target="#newQuesThree"
                          aria-expanded="true"
                          aria-controls="newQuesThree"
                        >
                          How can we book a free trial/demo session?
                        </button>
                      </h2>
                    </div>
                    <div
                      id="newQuesThree"
                      className="collapse"
                      aria-labelledby="newQuesThree"
                      data-parent="#accordion"
                    >
                      <div className="card-body">
                        To Book a free trial / demo, go to{" "}
                        <a href="https://www.qdspro.com/enquiry">
                          <span className="text-white">
                            https://www.qdspro.com/enquiry
                          </span>
                        </a>
                        .
                      </div>
                    </div>
                  </div>

                  <div className="card">
                    <div className="card-header" id="newheadingFour">
                      <h2 className="mb-0">
                        <button
                          className="btn btn-link collapsed"
                          data-toggle="collapse"
                          data-target="#newQuesFour"
                          aria-expanded="true"
                          aria-controls="newQuesFour"
                        >
                          Where can we get to know more about you and your
                          courses?
                        </button>
                      </h2>
                    </div>
                    <div
                      id="newQuesFour"
                      className="collapse"
                      aria-labelledby="newQuesFour"
                      data-parent="#accordion"
                    >
                      <div className="card-body">
                        To know more about us and our courses, you may log on to{" "}
                        <a href="/">
                          <span className="text-white">
                            https://www.qdspro.com/
                          </span>
                        </a>
                        .
                      </div>
                    </div>
                  </div>

                  <div className="card">
                    <div className="card-header" id="newheadingFive">
                      <h2 className="mb-0">
                        <button
                          className="btn btn-link collapsed"
                          data-toggle="collapse"
                          data-target="#newQuesFive"
                          aria-expanded="true"
                          aria-controls="newQuesFive"
                        >
                          What if we are unable to get the desired score in the
                          first attempt?
                        </button>
                      </h2>
                    </div>
                    <div
                      id="newQuesFive"
                      className="collapse"
                      aria-labelledby="newQuesFive"
                      data-parent="#accordion"
                    >
                      <div className="card-body">
                        You may undergo the full course again, without paying
                        any additional fees.
                      </div>
                    </div>
                  </div>

                  <div className="card">
                    <div className="card-header" id="newheadingSix">
                      <h2 className="mb-0">
                        <button
                          className="btn btn-link collapsed"
                          data-toggle="collapse"
                          data-target="#newQuesSix"
                          aria-expanded="true"
                          aria-controls="newQuesSix"
                        >
                          What if we miss out on any class?
                        </button>
                      </h2>
                    </div>
                    <div
                      id="newQuesSix"
                      className="collapse"
                      aria-labelledby="newQuesSix"
                      data-parent="#accordion"
                    >
                      <div className="card-body">
                        Need not worry, we've got you covered! We maintain a
                        checklist to track the progress of all our students, so
                        if you miss out on any class, we have a record of it,
                        when that topic is scheduled again in any of our other
                        batches, we invite you for the same, we have multiple
                        batches running throughout the day.
                      </div>
                    </div>
                  </div>

                  <div className="card">
                    <div className="card-header" id="newheadingSeven">
                      <h2 className="mb-0">
                        <button
                          className="btn btn-link collapsed"
                          data-toggle="collapse"
                          data-target="#newQuesSeven"
                          aria-expanded="true"
                          aria-controls="newQuesSeven"
                        >
                          Do you provided online classes for all your courses ?
                        </button>
                      </h2>
                    </div>
                    <div
                      id="newQuesSeven"
                      className="collapse"
                      aria-labelledby="newQuesSeven"
                      data-parent="#accordion"
                    >
                      <div className="card-body">
                        Yes, we do. All our online classes are conducted on our
                        in-house online tutoring software - ' QDS Pro Online
                        Prep'. To know more, you can log on to{" "}
                        <a href="/">
                          <span className="text-white">
                            https://onlineprep.qdspro.com/
                          </span>
                        </a>
                        .
                      </div>
                    </div>
                  </div>

                  <div className="card">
                    <div className="card-header" id="headingOne">
                      <h2 className="mb-0">
                        <button
                          className="btn btn-link collapsed"
                          data-toggle="collapse"
                          data-target="#collapseOne"
                          aria-expanded="true"
                          aria-controls="collapseOne"
                        >
                          How many students will be there in a live class?
                        </button>
                      </h2>
                    </div>
                    <div
                      id="collapseOne"
                      className="collapse"
                      aria-labelledby="headingOne"
                      data-parent="#accordion"
                    >
                      <div className="card-body">
                        In personalized or individual one – to – one class,
                        there will be only one student in the class. In group
                        classes, the batch size will still be restricted to 4 –
                        5 students, ensuring personalized attention to each and
                        every student.
                      </div>
                    </div>
                  </div>

                  <div className="card">
                    <div className="card-header" id="headingThree">
                      <h2 className="mb-0">
                        <button
                          className="btn btn-link collapsed"
                          data-toggle="collapse"
                          data-target="#collapseThree"
                          aria-expanded="false"
                          aria-controls="collapseThree"
                        >
                          What are the requirements to attend the online
                          classes?
                        </button>
                      </h2>
                    </div>
                    <div
                      id="collapseThree"
                      className="collapse"
                      aria-labelledby="headingThree"
                      data-parent="#accordion"
                    >
                      <div className="card-body">
                        A laptop / desktop / computer / tablet / mobile with an
                        internet connection.
                      </div>
                    </div>
                  </div>

                  <div className="card">
                    <div className="card-header" id="headingThree">
                      <h2 className="mb-0">
                        <button
                          className="btn btn-link collapsed"
                          data-toggle="collapse"
                          data-target="#collapseFour"
                          aria-expanded="false"
                          aria-controls="collapseFour"
                        >
                          What will be the timings of the live classes?
                        </button>
                      </h2>
                    </div>
                    <div
                      id="collapseFour"
                      className="collapse"
                      aria-labelledby="headingThree"
                      data-parent="#accordion"
                    >
                      <div className="card-body">
                        For one to one individual classes, timings will be as
                        per convenience of student. Select your own class time,
                        class duration, class days per week and class start
                        date. For group classes, the class days and class
                        timings are pre-fixed by Team QDS Pro.
                      </div>
                    </div>
                  </div>

                  <div className="card">
                    <div className="card-header" id="headingThree">
                      <h2 className="mb-0">
                        <button
                          className="btn btn-link collapsed"
                          data-toggle="collapse"
                          data-target="#collapse5"
                          aria-expanded="false"
                          aria-controls="collapse5"
                        >
                          What will happen if i miss a live class?
                        </button>
                      </h2>
                    </div>
                    <div
                      id="collapse5"
                      className="collapse"
                      aria-labelledby="headingThree"
                      data-parent="#accordion"
                    >
                      <div className="card-body">
                        If a student missed any class on account of some
                        emergency, the class can be rescheduled. However, it
                        does not mean that the student should make excuses very
                        often to reschedule the class frequently.
                      </div>
                    </div>
                  </div>

                  <div className="card">
                    <div className="card-header" id="headingThree">
                      <h2 className="mb-0">
                        <button
                          className="btn btn-link collapsed"
                          data-toggle="collapse"
                          data-target="#collapse6"
                          aria-expanded="false"
                          aria-controls="collapse6"
                        >
                          Do you offer a free demo class?
                        </button>
                      </h2>
                    </div>
                    <div
                      id="collapse6"
                      className="collapse"
                      aria-labelledby="headingThree"
                      data-parent="#accordion"
                    >
                      <div className="card-body">Yes, we do.</div>
                    </div>
                  </div>

                  <div className="card">
                    <div className="card-header" id="headingThree">
                      <h2 className="mb-0">
                        <button
                          className="btn btn-link collapsed"
                          data-toggle="collapse"
                          data-target="#collapse7"
                          aria-expanded="false"
                          aria-controls="collapse7"
                        >
                          Is it possible to prepare for competitive exams from
                          an online platform, considering that these exams are
                          one of the toughest entrance exams?
                        </button>
                      </h2>
                    </div>
                    <div
                      id="collapse7"
                      className="collapse"
                      aria-labelledby="headingThree"
                      data-parent="#accordion"
                    >
                      <div className="card-body">
                        Yes. It is possible to prepare for any competitive
                        examination on an online platform. What matters is the
                        quality that is delivered irrespective of the medium.
                      </div>
                    </div>
                  </div>

                  <div className="card">
                    <div className="card-header" id="headingThree">
                      <h2 className="mb-0">
                        <button
                          className="btn btn-link collapsed"
                          data-toggle="collapse"
                          data-target="#collapse8"
                          aria-expanded="false"
                          aria-controls="collapse8"
                        >
                          What is your teaching methodology?
                        </button>
                      </h2>
                    </div>
                    <div
                      id="collapse8"
                      className="collapse"
                      aria-labelledby="headingThree"
                      data-parent="#accordion"
                    >
                      <div className="card-body">
                        We have experienced and trained teachers who are highly
                        interactive and friendly while being professional at the
                        same time. Our teachers understand student's level,
                        knowledge base and fundamental concepts. Accordingly,
                        they plan every lecture based on student's individual
                        needs. They focus in making the student's concepts clear
                        starting from basic level to advance level. As a result
                        even the below average students start finding the
                        studies comfortable and become more and more interested
                        for grasping key concepts of the topic. i.e. our
                        teachers create interest in the students for learning.
                        The teachers demonstrate with the concept with live
                        examples and proceed the session while clearing the
                        conceptual doubts
                      </div>
                    </div>
                  </div>

                  <div className="card">
                    <div className="card-header" id="headingThree">
                      <h2 className="mb-0">
                        <button
                          className="btn btn-link collapsed"
                          data-toggle="collapse"
                          data-target="#collapse9"
                          aria-expanded="false"
                          aria-controls="collapse9"
                        >
                          Is there any other platform you have where a student
                          can ask questions except online classes?
                        </button>
                      </h2>
                    </div>
                    <div
                      id="collapse9"
                      className="collapse"
                      aria-labelledby="headingThree"
                      data-parent="#accordion"
                    >
                      <div className="card-body">
                        Yes, you can send your questions on our support email
                        Id, which will be shared to the concerned tutor to
                        discuss during live session, or you may receive an
                        instant reply through email with complete solution.
                      </div>
                    </div>
                  </div>

                  <div className="card">
                    <div className="card-header" id="headingThree">
                      <h2 className="mb-0">
                        <button
                          className="btn btn-link collapsed"
                          data-toggle="collapse"
                          data-target="#collapse10"
                          aria-expanded="false"
                          aria-controls="collapse10"
                        >
                          Do you provide fee discounts to students?
                        </button>
                      </h2>
                    </div>
                    <div
                      id="collapse10"
                      className="collapse"
                      aria-labelledby="headingThree"
                      data-parent="#accordion"
                    >
                      <div className="card-body">
                        Yes. The percentage of discount increases with increase
                        in no. of hours or no. of days you want to study for.
                      </div>
                    </div>
                  </div>

                  <div className="card">
                    <div className="card-header" id="headingThree">
                      <h2 className="mb-0">
                        <button
                          className="btn btn-link collapsed"
                          data-toggle="collapse"
                          data-target="#collapse11"
                          aria-expanded="false"
                          aria-controls="collapse11"
                        >
                          What are the benefits of online classes?
                        </button>
                      </h2>
                    </div>
                    <div
                      id="collapse11"
                      className="collapse"
                      aria-labelledby="headingThree"
                      data-parent="#accordion"
                    >
                      <div className="card-body">
                        1. Online classes are similar to normal classroom
                        coaching. <br />
                        2. More comfortable learning environment. <br />
                        3. Convenience and Flexibility.
                        <br />
                        4. More interaction and greater ability to concentrate.
                        <br />
                        5. Suitable for working professionals
                        <br />
                      </div>
                    </div>
                  </div>
                </div>
              ) : null}

              {activeFeatureTab === 3 ? (
                <div
                  data-aos="zoom-in"
                  data-aos-duration="1500"
                  data-aos-easing="ease-in-linear"
                  id="accordion"
                >
                  <div className="card">
                    <div className="card-header" id="headingOne">
                      <h2 className="mb-0">
                        <button
                          className="btn btn-link"
                          data-toggle="collapse"
                          data-target="#collapseOne"
                          aria-expanded="true"
                          aria-controls="collapseOne"
                        >
                          What is QDS Pro?
                        </button>
                      </h2>
                    </div>
                    <div
                      id="collapseOne"
                      className="collapse show"
                      aria-labelledby="headingOne"
                      data-parent="#accordion"
                    >
                      <div className="card-body">
                        QDS Pro is a first of its kind platform in India. It
                        primarily serves to resolve the doubts of the students
                        that may arise while they are preparing for management,
                        law, bank and other entrance exams. Doubts pertaining to
                        Quant, Verbal, Logical Reasoning, Data Interpretation
                        and other related Sections are catered to on this
                        platform.
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-header" id="headingTwo">
                      <h2 className="mb-0">
                        <button
                          className="btn btn-link collapsed"
                          data-toggle="collapse"
                          data-target="#collapseTwo"
                          aria-expanded="false"
                          aria-controls="collapseTwo"
                        >
                          How do I use QDS Pro?
                        </button>
                      </h2>
                    </div>
                    <div
                      id="collapseTwo"
                      className="collapse"
                      aria-labelledby="headingTwo"
                      data-parent="#accordion"
                    >
                      <div className="card-body">
                        Once the QDS Pro application is downloaded from Google
                        Play Store, it then becomes a simple 3 step process to
                        post your doubt:- <br />
                        1. Open the QDS Pro App. <br />
                        2. Take a Photo of your Doubt. <br />
                        3. Press the Submit Button.
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-header" id="headingThree">
                      <h2 className="mb-0">
                        <button
                          className="btn btn-link collapsed"
                          data-toggle="collapse"
                          data-target="#collapseThree"
                          aria-expanded="false"
                          aria-controls="collapseThree"
                        >
                          How is it beneficial to me?
                        </button>
                      </h2>
                    </div>
                    <div
                      id="collapseThree"
                      className="collapse"
                      aria-labelledby="headingThree"
                      data-parent="#accordion"
                    >
                      <div className="card-body">
                        Some of the key benefits to the students using QDS Pro
                        are as follows:- <br />
                        1. QDS Pro makes you feel independent. You do not have
                        to keep on requesting the faculty members of your
                        coaching classes to resolve your doubts. <br />
                        2. You can post your doubts at any hour of the night and
                        from any place which basically means that it is an
                        ‘Anytime, Anywhere’ App. <br />
                        3. You get access to a personalized dashboard with a lot
                        of features like Notepad, Utilities, etc. <br />
                        4. It provides quick solutions to all your doubts.{" "}
                        <br />
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-header" id="headingFour">
                      <h2 className="mb-0">
                        <button
                          className="btn btn-link collapsed"
                          data-toggle="collapse"
                          data-target="#collapseFour"
                          aria-expanded="false"
                          aria-controls="collapseFour"
                        >
                          What is so unique about QDS Pro?
                        </button>
                      </h2>
                    </div>
                    <div
                      id="collapseFour"
                      className="collapse"
                      aria-labelledby="headingFour"
                      data-parent="#accordion"
                    >
                      <div className="card-body">
                        Some unique features of QDS Pro are as follows:- <br />
                        1. QDS Pro is a safe, easy, quick and reliable source of
                        getting your doubts resolved. <br />
                        2. At QDS Pro, we have partnered with the best faculty
                        members from leading coaching institutes across India.
                        The doubts posted by the students will be assigned to
                        their respective experts, who will then provide the
                        solutions to these doubts. <br />
                        3. We have designed our own personal, customized study
                        material for students to practice questions from and
                        prepare for their respective entrance exams/aptitude
                        tests.
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-header" id="headingFive">
                      <h2 className="mb-0">
                        <button
                          className="btn btn-link collapsed"
                          data-toggle="collapse"
                          data-target="#collapseFive"
                          aria-expanded="false"
                          aria-controls="collapseFive"
                        >
                          How will I know if I receive a solution?
                        </button>
                      </h2>
                    </div>
                    <div
                      id="collapseFive"
                      className="collapse"
                      aria-labelledby="headingFive"
                      data-parent="#accordion"
                    >
                      <div className="card-body">
                        A notification will be sent to your e-mail address with
                        a link to the solution page as soon as the solution to
                        your query is posted.
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-header" id="headingSix">
                      <h2 className="mb-0">
                        <button
                          className="btn btn-link collapsed"
                          data-toggle="collapse"
                          data-target="#collapseSix"
                          aria-expanded="false"
                          aria-controls="collapseSix"
                        >
                          What if I have a doubt in the solution itself after
                          receiving the solution?
                        </button>
                      </h2>
                    </div>
                    <div
                      id="collapseSix"
                      className="collapse"
                      aria-labelledby="headingSix"
                      data-parent="#accordion"
                    >
                      <div className="card-body">
                        You can report your doubt to the admin using our Live
                        Support System. Your doubt will then be resolved without
                        your account being charged anything for the additional
                        doubt.
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-header" id="headingSeven">
                      <h2 className="mb-0">
                        <button
                          className="btn btn-link collapsed"
                          data-toggle="collapse"
                          data-target="#collapseSeven"
                          aria-expanded="false"
                          aria-controls="collapseSeven"
                        >
                          When can I expect to receive a solution to my doubt?
                        </button>
                      </h2>
                    </div>
                    <div
                      id="collapseSeven"
                      className="collapse"
                      aria-labelledby="headingSeven"
                      data-parent="#accordion"
                    >
                      <div className="card-body">
                        We have achieved the feat of having answered all the
                        doubts within thirty minutes of it being posted, so far.
                        However, we generally tend to provide solutions in about
                        15-20 minutes.
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-header" id="headingEight">
                      <h2 className="mb-0">
                        <button
                          className="btn btn-link collapsed"
                          data-toggle="collapse"
                          data-target="#collapseEight"
                          aria-expanded="false"
                          aria-controls="collapseEight"
                        >
                          What if I am not satisfied with the solution?
                        </button>
                      </h2>
                    </div>
                    <div
                      id="collapseEight"
                      className="collapse"
                      aria-labelledby="headingEight"
                      data-parent="#accordion"
                    >
                      <div className="card-body">
                        You can rate the solution low and can report the same to
                        the admin. The admin will immediately look into the
                        matter and if he feels the same way, your doubt will be
                        re-answered without your account being charged for it.
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-header" id="headingNine">
                      <h2 className="mb-0">
                        <button
                          className="btn btn-link collapsed"
                          data-toggle="collapse"
                          data-target="#collapseNine"
                          aria-expanded="false"
                          aria-controls="collapseNiene"
                        >
                          Upto what time can I access the doubts available on my
                          account?
                        </button>
                      </h2>
                    </div>
                    <div
                      id="collapseNine"
                      className="collapse"
                      aria-labelledby="headingNine"
                      data-parent="#accordion"
                    >
                      <div className="card-body">
                        You can access your account and all the doubts in it for
                        a period of one year from the date you purchase the
                        doubts.
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-header" id="headingTen">
                      <h2 className="mb-0">
                        <button
                          className="btn btn-link collapsed"
                          data-toggle="collapse"
                          data-target="#collapseTen"
                          aria-expanded="false"
                          aria-controls="collapseTen"
                        >
                          How long can I access the solution sent to me?
                        </button>
                      </h2>
                    </div>
                    <div
                      id="collapseTen"
                      className="collapse"
                      aria-labelledby="headingTen"
                      data-parent="#accordion"
                    >
                      <div className="card-body">
                        The solution will stay on your Dashboard permanently.
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-header" id="headingEleven">
                      <h2 className="mb-0">
                        <button
                          className="btn btn-link collapsed"
                          data-toggle="collapse"
                          data-target="#collapseEleven"
                          aria-expanded="false"
                          aria-controls="collapseEleven"
                        >
                          Can I request for some additional study material and
                          practice questions?
                        </button>
                      </h2>
                    </div>
                    <div
                      id="collapseEleven"
                      className="collapse"
                      aria-labelledby="headingEleven"
                      data-parent="#accordion"
                    >
                      <div className="card-body">Yes, you may.</div>
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-header" id="headingTweleve">
                      <h2 className="mb-0">
                        <button
                          className="btn btn-link collapsed"
                          data-toggle="collapse"
                          data-target="#collapseTwelve"
                          aria-expanded="false"
                          aria-controls="collapseTwelve"
                        >
                          What if I do not have any doubts?
                        </button>
                      </h2>
                    </div>
                    <div
                      id="collapseTwelve"
                      className="collapse"
                      aria-labelledby="headingTweleve"
                      data-parent="#accordion"
                    >
                      <div className="card-body">
                        It just goes on to say that you are not preparing enough
                        for the entrance exam. Solving difficult sums and
                        getting doubts is a crucial part of your preparation,
                        especially if you are intending to ace your exams.
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-header" id="headingThirteen">
                      <h2 className="mb-0">
                        <button
                          className="btn btn-link collapsed"
                          data-toggle="collapse"
                          data-target="#collapseThirteen"
                          aria-expanded="false"
                          aria-controls="collapseThirteen"
                        >
                          I seek coaching for my entrance exam. What books would
                          you recommend me additionally?
                        </button>
                      </h2>
                    </div>
                    <div
                      id="collapseThirteen"
                      className="collapse"
                      aria-labelledby="headingThirteen"
                      data-parent="#accordion"
                    >
                      <div className="card-body">
                        We, at QDS Pro, strongly feel that the study material
                        provided by coaching institutes is not sufficient to
                        crack the entrance exams. We, thereby recommend the
                        usage of books written by independent authors for your
                        preparation.
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-header" id="headingFourteen">
                      <h2 className="mb-0">
                        <button
                          className="btn btn-link collapsed"
                          data-toggle="collapse"
                          data-target="#collapseFourteen"
                          aria-expanded="false"
                          aria-controls="collapseFourteen"
                        >
                          I strongly feel that I am not going to get any doubts
                          in the near future. Why should I register myself on
                          QDS Pro?
                        </button>
                      </h2>
                    </div>
                    <div
                      id="collapseFourteen"
                      className="collapse"
                      aria-labelledby="headingFourteen"
                      data-parent="#accordion"
                    >
                      <div className="card-body">
                        We buy car insurance and medical insurance for ourselves
                        even though at times, they remain unused throughout the
                        year because they give us the inner satisfaction that if
                        something goes wrong, we have a contingent plan ready.
                        QDS Pro, work on similar lines. It gives you the
                        assurance that if nobody is able to solve your doubt or
                        the faculty is not available when you need them, QDS Pro
                        will come to your rescue.
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-header" id="headingFifteen">
                      <h2 className="mb-0">
                        <button
                          className="btn btn-link collapsed"
                          data-toggle="collapse"
                          data-target="#collapseFifteen"
                          aria-expanded="false"
                          aria-controls="collapseFifteen"
                        >
                          I feel shy to ask doubts in the middle of a lecture.
                          How will this platform help me?
                        </button>
                      </h2>
                    </div>
                    <div
                      id="collapseFifteen"
                      className="collapse"
                      aria-labelledby="headingFifteen"
                      data-parent="#accordion"
                    >
                      <div className="card-body">
                        This platform will be of great use to you because the
                        doubts that you ask on this platform are kept
                        confidential and are not shared with anyone. The
                        solutions to your doubts will only be sent to you.
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-header" id="headingSixteen">
                      <h2 className="mb-0">
                        <button
                          className="btn btn-link collapsed"
                          data-toggle="collapse"
                          data-target="#collapseSixteen"
                          aria-expanded="false"
                          aria-controls="collapseSixteen"
                        >
                          I have mechanisms available by which I get the
                          solutions to my doubts. Why should I register on QDS
                          Pro?
                        </button>
                      </h2>
                    </div>
                    <div
                      id="collapseSixteen"
                      className="collapse"
                      aria-labelledby="headingSixteen"
                      data-parent="#accordion"
                    >
                      <div className="card-body">
                        The solutions that you would be getting from external
                        sources will not be customized as per your need. At QDS
                        Pro, we provide you with solutions tailor-made to your
                        needs.
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-header" id="headingSeventeen">
                      <h2 className="mb-0">
                        <button
                          className="btn btn-link collapsed"
                          data-toggle="collapse"
                          data-target="#collapseSeventeen"
                          aria-expanded="false"
                          aria-controls="collapseSeventeen"
                        >
                          What if I wish to resolve a doubt pertaining to some
                          exam update, test related instruction, preparation
                          strategy, etc on an urgent basis?
                        </button>
                      </h2>
                    </div>
                    <div
                      id="collapseSeventeen"
                      className="collapse"
                      aria-labelledby="headingSeventeen"
                      data-parent="#accordion"
                    >
                      <div className="card-body">
                        You may use our live support feature available on the
                        mobile app and on the website home page, which will
                        connect you directly to the admin, for immediate
                        response.
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-header" id="headingEighteen">
                      <h2 className="mb-0">
                        <button
                          className="btn btn-link collapsed"
                          data-toggle="collapse"
                          data-target="#collapseEighteen"
                          aria-expanded="false"
                          aria-controls="collapseEighteen"
                        >
                          Can I request for a new feature on the Dashboard
                          depending on my needs?
                        </button>
                      </h2>
                    </div>
                    <div
                      id="collapseEighteen"
                      className="collapse"
                      aria-labelledby="headingEighteen"
                      data-parent="#accordion"
                    >
                      <div className="card-body">
                        Yes, surely you may. We will immediately send your
                        requirement to our web and app development team to see
                        if that feature can be implemented. We constantly try to
                        improvise on the services and the experience that we
                        provide to the users. Your recommendation for a new
                        feature will certainly help us do that.
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-header" id="headingNineteen">
                      <h2 className="mb-0">
                        <button
                          className="btn btn-link collapsed"
                          data-toggle="collapse"
                          data-target="#collapseNineteen"
                          aria-expanded="false"
                          aria-controls="collapseNineteen"
                        >
                          I am a working professional and I do not get
                          sufficient study time to prepare for my exam. Can you
                          help by designing a study plan for me?
                        </button>
                      </h2>
                    </div>
                    <div
                      id="collapseNineteen"
                      className="collapse"
                      aria-labelledby="headingNineteen"
                      data-parent="#accordion"
                    >
                      <div className="card-body">
                        Yes, we can. On your request, our team will develop a
                        nice elaborate study plan for you keeping in mind your
                        working hours i.e. your schedule and your needs.
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-header" id="headingTwenty">
                      <h2 className="mb-0">
                        <button
                          className="btn btn-link collapsed"
                          data-toggle="collapse"
                          data-target="#collapseTwenty"
                          aria-expanded="false"
                          aria-controls="collapseTwenty"
                        >
                          How will the overall experience be like?
                        </button>
                      </h2>
                    </div>
                    <div
                      id="collapseTwenty"
                      className="collapse"
                      aria-labelledby="headingTwenty"
                      data-parent="#accordion"
                    >
                      <div className="card-body">
                        We assure you that your overall experience with us will
                        be beyond your expectations. Most of our core team
                        members have been through the exact same process that
                        you are going through and have encountered the same
                        problems and situations that you would be encountering.
                        So, we know exactly how to help you out. The
                        relationship that you would be experiencing with us will
                        be more of a ‘friend’ and less of 'just another
                        customer'.
                      </div>
                    </div>
                  </div>
                </div>
              ) : null}

              {activeFeatureTab === 4 ? (
                <div
                  data-aos="zoom-in"
                  data-aos-duration="1500"
                  data-aos-easing="ease-in-linear"
                  id="accordion"
                >
                  <div className="card">
                    <div className="card-header" id="headingOne">
                      <h2 className="mb-0">
                        <button
                          className="btn btn-link"
                          data-toggle="collapse"
                          data-target="#collapseOne"
                          aria-expanded="true"
                          aria-controls="collapseOne"
                        >
                          Can I trust MBA Home Tutoring for long time success?
                        </button>
                      </h2>
                    </div>
                    <div
                      id="collapseOne"
                      className="collapse show"
                      aria-labelledby="headingOne"
                      data-parent="#accordion"
                    >
                      <div className="card-body">
                        With right kind of tutoring and with a vast amount of
                        enthusiasm and determination, we think you can trust
                        long-time success with Home-Tutoring. With the right use
                        of it, you can excel on far more in an even better way.
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-header" id="headingTwo">
                      <h2 className="mb-0">
                        <button
                          className="btn btn-link collapsed"
                          data-toggle="collapse"
                          data-target="#collapseTwo"
                          aria-expanded="false"
                          aria-controls="collapseTwo"
                        >
                          Tutoring seems expensive, Should I invest in my money?
                        </button>
                      </h2>
                    </div>
                    <div
                      id="collapseTwo"
                      className="collapse"
                      aria-labelledby="headingTwo"
                      data-parent="#accordion"
                    >
                      <div className="card-body">
                        Yes, it is expensive but it is worth it. If you are
                        looking for quality education than the investment will
                        surely pay off.
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-header" id="headingThree">
                      <h2 className="mb-0">
                        <button
                          className="btn btn-link collapsed"
                          data-toggle="collapse"
                          data-target="#collapseThree"
                          aria-expanded="false"
                          aria-controls="collapseThree"
                        >
                          Why should the tutors be trusted?
                        </button>
                      </h2>
                    </div>
                    <div
                      id="collapseThree"
                      className="collapse"
                      aria-labelledby="headingThree"
                      data-parent="#accordion"
                    >
                      <div className="card-body">
                        These tutors are trained experts in their respective
                        fields. Every tutor is a trusted and recommended
                        professional with years of job experience and good
                        records in their workplaces.
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-header" id="headingFour">
                      <h2 className="mb-0">
                        <button
                          className="btn btn-link collapsed"
                          data-toggle="collapse"
                          data-target="#collapseFour"
                          aria-expanded="false"
                          aria-controls="collapseFour"
                        >
                          Do I have to quit my job, for these Home tutoring
                          classes?
                        </button>
                      </h2>
                    </div>
                    <div
                      id="collapseFour"
                      className="collapse"
                      aria-labelledby="headingFour"
                      data-parent="#accordion"
                    >
                      <div className="card-body">
                        No. We think this is one of the benefits as in why you
                        should opt for Home Tutoring. You need not leave your
                        job; you can schedule class timings according to your
                        schedule with home tutors according to your convenience.
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-header" id="headingFive">
                      <h2 className="mb-0">
                        <button
                          className="btn btn-link collapsed"
                          data-toggle="collapse"
                          data-target="#collapseFive"
                          aria-expanded="false"
                          aria-controls="collapseFive"
                        >
                          What if I don’t like my Home Tutor?
                        </button>
                      </h2>
                    </div>
                    <div
                      id="collapseFive"
                      className="collapse"
                      aria-labelledby="headingFive"
                      data-parent="#accordion"
                    >
                      <div className="card-body">
                        You can request a change to the administration. You can
                        look through various teachers' profiles and you have the
                        authority to choose from them according to their
                        qualifications.
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-header" id="headingSix">
                      <h2 className="mb-0">
                        <button
                          className="btn btn-link collapsed"
                          data-toggle="collapse"
                          data-target="#collapseSix"
                          aria-expanded="false"
                          aria-controls="collapseSix"
                        >
                          What makes home tutoring different?
                        </button>
                      </h2>
                    </div>
                    <div
                      id="collapseSix"
                      className="collapse"
                      aria-labelledby="headingSix"
                      data-parent="#accordion"
                    >
                      <div className="card-body">
                        It is a known fact that Personal teaching is always way
                        more effective than the traditional form.
                        <br />
                        It is a good thing that Indian education system is
                        reforming with these kinds of forms of teaching and we
                        think everyone should make use of it.
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-header" id="headingSeven">
                      <h2 className="mb-0">
                        <button
                          className="btn btn-link collapsed"
                          data-toggle="collapse"
                          data-target="#collapseSeven"
                          aria-expanded="false"
                          aria-controls="collapseSeven"
                        >
                          What benefits can I expect from Home tutors?
                        </button>
                      </h2>
                    </div>
                    <div
                      id="collapseSeven"
                      className="collapse"
                      aria-labelledby="headingSeven"
                      data-parent="#accordion"
                    >
                      <div className="card-body">
                        1. Adjustable practice sessions.
                        <br />
                        2. Go into more profundity on general themes
                        <br />
                        3. Take a general inquiry and lead their understudy to
                        find the appropriate response all alone
                        <br />
                        4. Support their understudy
                        <br />
                        5. Give them instances of muddled ideas
                        <br />
                        6. Improve specialized terms by clarifying them in
                        regular words
                        <br />
                        7. Help the understudy work through past papers
                        <br />
                        8. Work on test method (composing papers, clarifying
                        writings)
                        <br />
                        9. Learn time the board
                        <br />
                        10. Apply the program to regular day to day existence
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-header" id="headingEight">
                      <h2 className="mb-0">
                        <button
                          className="btn btn-link collapsed"
                          data-toggle="collapse"
                          data-target="#collapseEight"
                          aria-expanded="false"
                          aria-controls="collapseEight"
                        >
                          I have heard, home tutoring lacks effectiveness, is it
                          true?
                        </button>
                      </h2>
                    </div>
                    <div
                      id="collapseEight"
                      className="collapse"
                      aria-labelledby="headingEight"
                      data-parent="#accordion"
                    >
                      <div className="card-body">
                        No. With the busy schedule it is the most effective way
                        of education that you can get. It is the perfect way to
                        help candidates to uncover their true potential and
                        develop interest in subjects.
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-header" id="headingNine">
                      <h2 className="mb-0">
                        <button
                          className="btn btn-link collapsed"
                          data-toggle="collapse"
                          data-target="#collapseNine"
                          aria-expanded="false"
                          aria-controls="collapseNiene"
                        >
                          How do I select a Home Tutor for me?
                        </button>
                      </h2>
                    </div>
                    <div
                      id="collapseNine"
                      className="collapse"
                      aria-labelledby="headingNine"
                      data-parent="#accordion"
                    >
                      <div className="card-body">
                        You can check their profiles. Look through their
                        qualifications and reviews. You can request for demo
                        classes. And if their method of teaching is in
                        convenience with you, you can go for it.
                      </div>
                    </div>
                  </div>
                </div>
              ) : null}
              <p className="mt-3">
                Note :- If you have any other questions, you can post it via the
                <a href="/contactus" style={{ color: "#071a36" }}>
                  {" "}
                  <b>Contact Form</b>
                </a>
                . We would be more than happy to answer them.
              </p>
            </div>
            {/* main container */}
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default FAQPage;
