import Header from "../components/Header";
import Footer from "../components/Footer";
import Head from "next/head";
import React from 'react'
const firebase = require('firebase')
var firebaseConfig = {
    apiKey: "AIzaSyAQa2W4kDr1JyewSSXWqCDDijEN1DPcxuE",
    authDomain: "qdsprowebsiteadmin.firebaseapp.com",
    databaseURL: "https://qdsprowebsiteadmin.firebaseio.com",
    projectId: "qdsprowebsiteadmin",
    storageBucket: "qdsprowebsiteadmin.appspot.com",
    messagingSenderId: "846377315055",
    appId: "1:846377315055:web:846ed4a2071667f14e091a",
    measurementId: "G-4LL22BT1YG"
};
// Initialize Firebase
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}
var categories = [];


firebase.database().ref('users/quiz/UpcomingSeminars').once('value').then(function (snapshot) {
    //  obj =  snapshot.child("Mon Jun 29 2020 15:21:42 GMT+0530 (India Standard Time)/date").val() 
    var ss = (snapshot.val() && snapshot.val().title)
    var s1 = (snapshot.val() && snapshot.val().subtitle)
    var s2 = (snapshot.val() && snapshot.val().info1)
    var s3 = (snapshot.val() && snapshot.val().speaker)
    var s4 = (snapshot.val() && snapshot.val().date)
    var s5 = (snapshot.val() && snapshot.val().time)
    var s6 = (snapshot.val() && snapshot.val().fee)
    var ss1 = (snapshot.val() && snapshot.val().title1)
    var s11 = (snapshot.val() && snapshot.val().subtitle1)
    var s22 = (snapshot.val() && snapshot.val().info11)
    var s32 = (snapshot.val() && snapshot.val().speaker1)
    var s42 = (snapshot.val() && snapshot.val().date1)
    var s52 = (snapshot.val() && snapshot.val().time1)
    var s62 = (snapshot.val() && snapshot.val().fee1)
    var ss11 = (snapshot.val() && snapshot.val().title2)
    var s111 = (snapshot.val() && snapshot.val().subtitle2)
    var s221 = (snapshot.val() && snapshot.val().info12)
    var s321 = (snapshot.val() && snapshot.val().speaker2)
    var s421 = (snapshot.val() && snapshot.val().date2)
    var s521 = (snapshot.val() && snapshot.val().time2)
    var s621 = (snapshot.val() && snapshot.val().fee2)
    $("#st1").append(ss);
    $("#st2").append(s1);
    $("#st3").append(s2);
    $("#st4").append(s3);
    $("#st5").append(s5);
    // $("#st6").append(s4);
    $("#st7").append('Online');
    $("#st8").append(s6);
    $("#st11").append(ss1);
    $("#st12").append(s11);
    $("#st13").append(s22);
    $("#st14").append(s32);
    $("#st15").append(s52);
    // $("#st16").append(s42);
    $("#st17").append('Online');
    $("#st18").append(s62);
    $("#st111").append(ss11);
    $("#st121").append(s111);
    $("#st131").append(s221);
    $("#st141").append(s321);
    $("#st151").append(s521);
    // $("#st161").append(s421);
    $("#st171").append('Online');
    $("#st181").append(s621);
    //LOOPING EACH CHILD AND PUSHING TO ARRAY

}, () => {
    console.log('callback');
    console.log(temp.title)
}).catch(error =>
    console.log(error)
)



function Workshops() {
    var seminarList = [];

    const handleRegister = () => {
        $("#register_seminar").modal()
    }



    seminarList = [

        {
            title: "VERBAL ABILITY",
            subtitle: "Sentence Correction 2 – Pronouns, Modifiers, Parallelism",
            info1: "GMAT | CAT | Other Management Entrance Exams",
            speaker: "Speaker – Somil Shah (Co-Founder, QDS Pro)",
            date: "Sunday, May 9, 2021",
            time: "3:00 pm – 6:00 pm",
            location: "Online",
            fee: "Free",
        },

        {
            title: "VERBAL ABILITY",
            subtitle: "Sentence Correction 1 – Subject-Verb Agreement, Tenses",
            info1: "GMAT | CAT | Other Management Entrance Exams",
            speaker: "Speaker – Somil Shah (Co-Founder, QDS Pro)",
            date: "Sunday, May 16, 2021",
            time: "3:00 pm – 6:00 pm",
            location: "Online",
            fee: "Free",
        },
        {
            title: "QUANTITATIVE APTITUDE",
            subtitle: "Arithmetic 4 – Time, Speed and Distance, Time and Work",
            info1: "GMAT | CAT | Other Management Entrance Exams",
            speaker: "Speaker – Ravina Parikh (Co-Founder, QDS Pro)",
            date: "Sunday, May 23, 2021",
            time: "3:00 pm – 6:00 pm",
            location: "Online",
            fee: "Free",
        },
        {
            title: "QUANTITATIVE APTITUDE",
            subtitle: "Arithmetic 3 – Averages, Mixtures and Alligation",
            info1: "GMAT | CAT | Other Management Entrance Exams",
            speaker: "Speaker – Ravina Parikh (Co-Founder, QDS Pro)",
            date: "Sunday, May 31, 2020",
            time: "3:00 pm – 6:00 pm",
            location: "Online",
            fee: "Free",
        },

        {
            title: "QUANTITATIVE APTITUDE",
            subtitle: "Arithmetic 2 – Simple Interest and Compound Interest, Ratio, Proportion and Variation, Partnership",
            info1: "GMAT | CAT | Other Management Entrance Exams",
            speaker: "Speaker – Ravina Parikh (Co-Founder, QDS Pro)",
            date: "Sunday, May 24, 2020",
            time: "3:00 pm – 6:00 pm",
            location: "Online",
            fee: "Free",
        },

        {
            title: "QUANTITATIVE APTITUDE",
            subtitle: "Arithmetic 1 – Percentages, Profit and Loss",
            info1: "GMAT | CAT | Other Management Entrance Exams",
            speaker: "Speaker – Ravina Parikh (Co-Founder, QDS Pro)",
            date: "Sunday, May 17, 2020",
            time: "3:00 pm – 6:00 pm",
            location: "Online",
            fee: "Free",
        },
        {
            title: "QUANTITATIVE APTITUDE",
            subtitle: "Number System - Advanced",
            info1: "GMAT | CAT | Other Management Entrance Exams",
            speaker: "Speaker – Somil Shah (Co-Founder, QDS Pro)",
            date: "Sunday, May 10, 2020",
            time: "3:00 pm – 6:00 pm",
            location: "Online",
            fee: "Free",
        },
        {
            title: "QUANTITATIVE APTITUDE",
            subtitle: "Number System - Basic",
            info1: "GMAT | CAT | Other Management Entrance Exams",
            speaker: "Speaker – Somil Shah (Co-Founder, QDS Pro)",
            date: "Sunday, May 3, 2020",
            time: "3:00 pm – 6:00 pm",
            location: "Online",
            fee: "Free",
        },
    ]


    return (
      <div>
        <Head>
          <title>QDS Pro Coaching Institute | Upcoming Workshops</title>
          <meta
            name="description"
            content="To stay abreast of our upcoming workshops and seminars, visit our website and check your relevant workshop or seminar to register."
          />
        </Head>
        <style>
          {`
                .s-seminar-container{
                    background-color: #f2f2f2;
                    border-radius: 20px;
                    padding: 1rem;
                    margin: 1rem;
                    box-shadow: 0 1px 5px 5px rgba(0,0,0,.02), 0 2px 5px 0 rgba(0,0,0,.3)
                }

                .s-seminar-title{
                    font-size: 22px;
                    font-weight: bold;
                }

                .s-seminar-content-container{
                    font-size: 18px;
                }

                .s-seminar-content-container i.fa-map-marker{
                    font-size: 18px;
                    color: green;
                    margin-left: 3rem;
                    margin-right: .2rem;
                }

                .s-seminar-fee-container{
                    font-size: 18px;
                }


                form#workshop_register label{
                    font-size: 16px;
                }

                // form#workshop_register .form-group{
                //     margin: 0;
                // }

                @media (max-width: 600px) {
                  .s-seminar-title{
                    font-size: 15px;
                    font-weight: bold;
                  }
                  .s-seminar-content-container {
                    font-size: 14px;
                  }
                  .s-seminar-content-container i.fa-map-marker{
                    font-size: 14px;
                    margin-left: 10px;
                  }
                  .col-sm-2 {
                    padding-left: 15px!important;
                  }
                  .s-seminar-fee-container {
                    font-size: 15px;
                  }
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
                    data-aos-duration="1500"
                    data-aos-easing="ease-in-linear"
                    className="white-text banner-title"
                  >
                    Upcoming Workshops & Seminars
                  </h1>
                </div>
              </div>
              {/* About us title */}
              <div className="section-wrapper">
                <div className="row">
                  <div
                    data-aos="fade-left"
                    data-aos-duration="1500"
                    data-aos-easing="ease-in-linear"
                    id="mydiv1"
                    className="col-sm-12 s-seminar-container "
                  >
                    <div className="row">
                      <div className="col-sm-12">
                        <p className="s-seminar-title" id="st11"></p>
                        <p className="s-seminar-title" id="st12"></p>
                      </div>
                      <div className="col-sm-8 s-seminar-content-container">
                        <div>
                          <p id="st13"></p>
                          <p id="st14"></p>
                          <p id="st15">
                            <span id="st16" className="ml-0">
                              {"Sunday, 19 December , 2021"}
                            </span>
                            <i id="st17" class="fa fa-map-marker">
                              {" "}
                            </i>
                          </p>
                        </div>
                      </div>
                      <div className="col-sm-2 s-seminar-fee-container">
                        <strong id="st18"></strong>
                      </div>
                      <div className="col-sm-2 s-seminar-btn-container">
                        <button
                          onClick={handleRegister}
                          className="btn btn-primary"
                        >
                          Register
                        </button>
                      </div>
                    </div>
                  </div>

                  <div
                    data-aos="fade-right"
                    data-aos-duration="1500"
                    data-aos-easing="ease-in-linear"
                    id="mydiv2"
                    className="col-sm-12 s-seminar-container "
                  >
                    <div className="row">
                      <div className="col-sm-12">
                        <p className="s-seminar-title" id="st111"></p>
                        <p className="s-seminar-title" id="st121"></p>
                      </div>
                      <div className="col-sm-8 s-seminar-content-container">
                        <div>
                          <p id="st131"></p>
                          <p id="st141"></p>
                          <p id="st151">
                            <span id="st161" className="ml-0">
                              {"Sunday, 26 December, 2021"}
                            </span>
                            <i id="st171" class="fa fa-map-marker">
                              {" "}
                            </i>
                          </p>
                        </div>
                      </div>
                      <div className="col-sm-2 s-seminar-fee-container">
                        <strong id="st181"></strong>
                      </div>
                      <div className="col-sm-2 s-seminar-btn-container">
                        <button
                          onClick={handleRegister}
                          className="btn btn-primary"
                        >
                          Register
                        </button>
                      </div>
                    </div>
                  </div>

                  <div
                    data-aos="fade-left"
                    data-aos-duration="1500"
                    data-aos-easing="ease-in-linear"
                    id="mydiv"
                    className="col-sm-12 s-seminar-container "
                  >
                    <div className="row">
                      <div className="col-sm-12">
                        <p className="s-seminar-title" id="st1"></p>
                        <p className="s-seminar-title" id="st2"></p>
                      </div>
                      <div className="col-sm-8 s-seminar-content-container">
                        <div>
                          <p id="st3"></p>
                          <p id="st4"></p>
                          <p id="st5">
                            <span id="st6" className="ml-0">
                              {"Sunday, 2 January, 2022"}
                            </span>
                            <i id="st7" class="fa fa-map-marker">
                              {" "}
                            </i>
                          </p>
                        </div>
                      </div>
                      <div className="col-sm-2 s-seminar-fee-container">
                        <strong id="st8"></strong>
                      </div>
                      <div className="col-sm-2 s-seminar-btn-container">
                        <button
                          onClick={handleRegister}
                          className="btn btn-primary"
                        >
                          Register
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div
                className="modal fade"
                id="register_seminar"
                tabIndex="-1"
                role="dialog"
                aria-labelledby="register_seminar"
                aria-hidden="true"
              >
                <div
                  className="modal-dialog modal-dialog-centered"
                  role="document"
                >
                  <div
                    className="modal-content"
                    style={{
                      backgroundColor: "#213247",
                    }}
                  >
                    <div
                      className="modal-header"
                      style={{
                        backgroundColor: "#213247",
                      }}
                    >
                      <h5 className="modal-title" id="register_modal">
                        Register for the Workshop
                      </h5>
                      <button
                        style={{
                          color: "#77bf43",
                          textShadow: "none",
                          opacity: 1,
                        }}
                        type="button"
                        className="close"
                        data-dismiss="modal"
                        aria-label="Close"
                      >
                        <span aria-hidden="true">&times;</span>
                      </button>
                    </div>
                    <div
                      className="modal-body"
                      style={{
                        backgroundColor: "#213247",
                      }}
                    >
                      <form
                        id="workshop_register"
                        name="workshop_register"
                        method="POST"
                        action="https://formspree.io/xknqejaz"
                      >
                        <input
                          hidden
                          type="text"
                          name="Form Title"
                          value="Workshops and Seminars - Register"
                        />
                        <div class="form-group">
                          {/* <label for="name">Full Name *</label> */}
                          <input
                            required
                            name="Name"
                            type="text"
                            class="form-control"
                            id="name"
                            placeholder="Your Name"
                          />
                        </div>
                        <div class="form-group">
                          {/* <label for="email">Email *</label> */}
                          <input
                            required
                            name="Email"
                            type="email"
                            class="form-control"
                            id="email"
                            placeholder="Email"
                          />
                        </div>
                        <div class="form-group">
                          {/* <label for="mobile">Mobile Number *</label> */}
                          <input
                            required
                            name="Mobile Number"
                            type="number"
                            class="form-control"
                            id="mobile"
                            placeholder="Mobile Number"
                          />
                        </div>
                        <div class="form-group">
                          {/* <label for="entrance">Entrance Exam *</label> */}
                          <input
                            required
                            name="Entrance Exam"
                            type="text"
                            class="form-control"
                            id="entrance"
                            placeholder="Entrance Exam"
                          />
                        </div>
                        {/* <div class="form-group">
                                                <label for="city">City *</label>
                                                <input required name="City" type="text" class="form-control" id="city" placeholder="City (e.g. Mumbai)" />
                                            </div>
                                            <div class="form-group">
                                                <label for="reference">Reference *</label>
                                                <input required name="Reference" type="text" class="form-control" id="reference" placeholder="Reference" />
                                            </div>
                                            <div class="form-group">
                                                <label for="additional_comments">Additional Comments</label>
                                                <input name="Additional Comments" type="text" class="form-control" id="additional_comments" placeholder="Additional Comments" />
                                            </div> */}
                        <button
                          type="button"
                          className="btn btn-primary mr-3 mt-3"
                          data-dismiss="modal"
                          data-toggle="modal"
                          data-target="#register_seminar"
                        >
                          Back
                        </button>
                        <button
                          type="submit"
                          class="btn btn-primary mt-3 pull-right"
                        >
                          Submit
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <Footer />
          </div>
        </div>
      </div>
    );
}

export default Workshops;

