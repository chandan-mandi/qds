import Head from "next/head";
import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
function ReferAndEarn(props) {
  const faq = [
    {
      question: "I am an existing student of QDS Pro, can I refer my friends?",
      answer:
        "Sure, we're happy to learn you're having a great time with QDS Pro. Please fill the referral form and get a waiver on your balance fees payable, if any or win the referral amount, otherwise.",
    },
    {
      question:
        "I am not an existing student of QDS Pro, can I refer my friends?",
      answer:
        "Sure, no problem, you can still refer to any of your friends, colleagues and/or relatives and earn the referral amount as a part time income.",
    },
    {
      question: "How will I get my referral amount?",
      answer: "You will get your referral amount by NEFT.",
    },
  ];

  const TnC = [
    "Referral amount is non-transferable.",

    "The mode of payment is subject to change, without notice. This change might occur due to market conditions, providers, price changes, errors in advertisements, and other unforeseen circumstances.",

    "No responsibility will be taken by QDS Pro for Referral Submissions that are illegible, lost, misdirected, improperly recorded or not received for any other reason.",

    "In case of any fraudulent use of the program, the company holds rights to withdraw the referral without notice.",

    "QDS Pro reserves the right to terminate and/or modify this offer at any time without prior notice.",

    "The information gathered will be confidential and it will never be sold, exchanged or disclosed to any third party for marketing purposes.",

    "The referral amount shall be paid as soon as the referee submits the second installment.",
  ];

  return (
    <div className="refer_and_earn">
      <Head>
        <title>QDS Pro Coaching Institute | Refer and Earn</title>
        <meta
          name="description"
          content="Refer Your Friends, Colleagues and Relatives To Earn A Monetary Reward!"
        />
      </Head>
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
              Refer and Earn
            </h1>
          </div>
        </div>
      </div>
      <style>
        {`
                    .container-fluid
                    {
                        width: 70%;
                    }
                    .odd-jumbotron
                    {
                        background-color: #e2e2e2;
                    }
                    .even-jumbotron
                    {
                        background-color: #fff;
                    }
                    .title
                    {
                        font-weight: 300;
                        text-align: center;
                    }
                    .img-card
                    {
                        height: 410px;
                        width: 100%;
                    }
                    .form-card
                    {
                        padding: 19px 11px;
                    }
                    .form-title-text
                    {
                        margin-bottom: 19px;
                        color: #213247;
                        font-size: 18px;
                        font-weight: 300;
                    }
                    .form-title
                    {
                        font-size: 14px;
                        line-height: 19px;
                        font-weight: 500;
                        color: #192f5a;
                    }
                    .form-1, .form-2
                    {
                        width: 49%;
                    }
                    .refer-form-submit
                    {
                        width: 50%;
                        margin-top: 2%;
                        border-radius: 40px;
                    }
                    .s-title-1
                    {
                        margin-top: 0;
                        margin-bottom: 10px;
                        font-size: 13px;
                        line-height: 24px;
                        font-weight: 500;
                        letter-spacing: 4px;
                        text-transform: uppercase;
                        color: #213247;
                    }
                    .s-title-2
                    {
                        margin-top: 10px;
                        color: #192f5a;
                        font-size: 35px;
                        line-height: 44px;
                        font-weight: 200;
                    }
                    .section-title:after
                    {
                        width: 3%;
                    }
                    .content-wrapper
                    {
                        display: flex;
                        padding-top: 31px;
                        padding-bottom: 0;
                        -webkit-box-pack: center;
                        justify-content: center;
                    }
                    .how-card
                    {
                        border-radius: 0px;
                        box-shadow: 1px 1px 80px 0 rgba(142,148,150,.19);
                        padding: 31px 20px;
                    }
                    .fa-how
                    {
                        font-size: 35px;
                        font-weight: normal;
                        color: #192f5a;
                    }
                    .how-label
                    {
                        font-size: 16px;
                        line-height: 19px;
                        font-weight: 500;
                        color: #192f5a;
                        text-align: center;
                        text-transform: uppercase;
                        margin-top: 15px;
                    }
                    .how-text
                    {
                        font-size: 14px;
                        line-height: 15px;
                        font-weight: 300;
                        margin-top: 5px;
                        margin-bottom: 10px;
                        color: #192f5a;
                        text-align: justify;
                    }
                    .faq-accordion-container
                    {
                        margin-top: 33px;
                    }
                    .faq-container
                    {
                        padding-top: 9px;
                        padding-bottom: 9px;
                        color: #192f5a;
                    }
                    .qna:hover
                    {
                        cursor: pointer;
                    }
                    .tnc
                    {
                        color: #fff;
                        background-color: #77bf43;
                        justify-content: 'center';
                    }
                    .tnc:hover
                    {
                        color: #fff;
                        background-color: #77bf43;
                    }
                    .tnc-points
                    {
                        font-size: 16px;
                    }
                    @media(max-width: 768px)
                    {
                        .container-fluid
                        {
                            width: 100%;
                        }
                        .form-1, .form-2
                        {
                            width: 100%;
                        }
                        .refer-form-submit
                        {
                            width: 100%;
                            margin-right: 5%;
                        }

                    }
                `}
      </style>
      <div className="jumbotron odd-jumbotron m-0">
        <h2 className="title mb-5">
          Refer Your Friends, Colleagues and Relatives To Earn A Reward!
        </h2>
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-4 p-0">
              <div className="card img-card">
                <img
                  className="card-img h-100"
                  src={"/assets/images/ref_earn.png"}
                  alt="Refer and Earn Image"
                />
              </div>
            </div>
            <div className="col-sm-8 p-0">
              <div className="card form-card pl-5 pr-5">
                <p className="form-title-text pb-2">
                  Wondering how? Just fill in the details shared below, and earn
                  a monetary reward up to Rs. 10,000!
                </p>
                <div className="card-body p-0">
                  <div className="form-1 float-left">
                    <h5 className="form-title">Your Details</h5>
                    <form className="content-container">
                      <div className="form-group">
                        {/* <label htmlFor="Name" id="name-label">Name</label> */}
                        <input
                          required
                          name="Name"
                          type="text"
                          className="form-control"
                          id="name"
                          placeholder="Enter Your Full Name"
                        />
                      </div>
                      <div className="form-group">
                        {/* <label htmlFor="Email" id="email-label">Email Address</label> */}
                        <input
                          required
                          name="Email"
                          type="email"
                          className="form-control"
                          id="email"
                          placeholder="Enter Your Email"
                        />
                      </div>
                      <div className="form-group">
                        {/* <label htmlFor="Mobile Number" id="mobile-label">Mobile Number</label> */}
                        <input
                          required
                          name="Mobile Number"
                          type="text"
                          className="form-control"
                          id="mobile"
                          placeholder="Enter Your Mobile Number"
                        />
                      </div>
                      <div className="form-group">
                        {/* <label htmlFor="course" id="course-label">Course</label> */}
                        <select
                          className="form-control"
                          name="course"
                          id="course"
                          required
                        >
                          <option selected value="">
                            Select Course
                          </option>
                          <option value="GMAT">GMAT + CAT</option>
                          <option value="GMAT">GMAT</option>
                          <option value="CAT">CAT</option>
                          <option value="GRE">GRE</option>
                          <option value="SAT">SAT</option>
                          <option value="MAH-CET">MAH-CET</option>
                        </select>
                      </div>
                    </form>
                  </div>
                  <div className="form-2 float-right">
                    <h5 className="form-title">Your Friend's Details</h5>
                    <form className="content-container">
                      <div className="form-group">
                        {/* <label htmlFor="Name" id="name-label">Name</label> */}
                        <input
                          required
                          name="Name"
                          type="text"
                          className="form-control"
                          id="name"
                          placeholder="Enter Your Full Name"
                        />
                      </div>
                      <div className="form-group">
                        {/* <label htmlFor="Email" id="email-label">Email Address</label> */}
                        <input
                          required
                          name="Email"
                          type="email"
                          className="form-control"
                          id="email"
                          placeholder="Enter Your Email"
                        />
                      </div>
                      <div className="form-group">
                        {/* <label htmlFor="Mobile Number" id="mobile-label">Mobile Number</label> */}
                        <input
                          required
                          name="Mobile Number"
                          type="text"
                          className="form-control"
                          id="mobile"
                          placeholder="Enter Your Mobile Number"
                        />
                      </div>
                      <div className="form-group">
                        {/* <label htmlFor="course" id="course-label">Course</label> */}
                        <select
                          className="form-control"
                          name="course"
                          id="course"
                          required
                        >
                          <option selected value="">
                            Select Course
                          </option>
                          <option value="GMAT">GMAT + CAT</option>
                          <option value="GMAT">GMAT</option>
                          <option value="CAT">CAT</option>
                          <option value="GRE">GRE</option>
                          <option value="SAT">SAT</option>
                          <option value="MAH-CET">MAH-CET</option>
                          <option value="Undecided">Undecided</option>
                        </select>
                      </div>
                    </form>
                  </div>
                  <div className="text-center">
                    <button
                      disabled
                      type="submit"
                      className="btn btn-primary rounded-pill refer-form-submit"
                    >
                      Submit
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="jumbotron even-jumbotron p-4 m-0 pb-5">
        <div className="container-fluid text-center">
          <div className="title-wrapper">
            <h3 className="section-title blue-heading s-title-1">
              Refer &amp; Earn
            </h3>
            <h1 className="s-title-2">How It Works</h1>
          </div>
          <div className="content-wrapper">
            <div className="card-deck deck-container">
              <div className="card how-card">
                <i className="fa fa-users fa-how" aria-hidden="true"></i>
                <h5 className="how-label">Refer A Friend</h5>
                <p className="how-text">
                  Enter both of your details in the form given above.
                </p>
              </div>
              <div className="card how-card">
                <i className="fa fa-how fa-file-text-o" aria-hidden="true"></i>
                <h5 className="how-label">Your Friend Enrolls</h5>
                <p className="how-text">
                  Receive a confirmation from us that your friend has
                  successfully enrolled.
                </p>
              </div>
              <div className="card how-card">
                <i className="fa fa-how fa-inr" aria-hidden="true"></i>
                <h5 className="how-label">You Earn Money</h5>
                <p className="how-text">
                  Receive the referral amount after your friend pays the second
                  installment of the course.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="jumbotron odd-jumbotron m-0 p-4">
        <div className="container-fluid text-center">
          <div className="title-wrapper">
            <h3 className="section-title blue-heading s-title-1">F.A.Q'S</h3>
            <h1 className="s-title-2">Frequently Asked Questions</h1>
          </div>
          <div className="faq-accordion-container">
            <div className="accordion" id="faq-accordion">
              {faq.map((qna, i) => {
                return (
                  <div className="faq-container">
                    <div
                      id="question"
                      className="row qna"
                      data-toggle="collapse"
                      data-target={"#answer-" + i.toString()}
                      aria-expanded="false"
                      aria-controls="answers"
                    >
                      <p className="text-left mb-2">{qna.question}</p>
                    </div>

                    <div
                      className="row collapse qna"
                      id={"answer-" + i.toString()}
                      data-parent="#faq-accordion"
                    >
                      <p className="text-left mt-0 mb-4">{qna.answer}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <div className="jumbotron even-jumbotron m-0">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12 text-center mt-2">
              <a
                href="#referTnC"
                data-toggle="modal"
                data-target="#referTnC"
                className="btn btn-success tnc"
              >
                Terms and Conditions
              </a>
            </div>
            <div
              className="modal fade"
              id="referTnC"
              tabIndex="-1"
              role="dialog"
              aria-labelledby="referTnC"
              aria-hidden="true"
            >
              <div
                className="modal-dialog modal-dialog-centered"
                role="document"
              >
                <div className="modal-content">
                  <div
                    className="modal-header"
                    style={{
                      backgroundColor: "#213247",
                      marginTop: "0px",
                    }}
                  >
                    <h5 className="modal-title" id="referTnC">
                      Terms and Conditions
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
                    className="modal-body tnc-points text-justify"
                    style={{
                      backgroundColor: "#213247",
                    }}
                  >
                    <ol>
                      {TnC.map((tnc) => {
                        return <li className="mb-2 mr-4">{tnc}</li>;
                      })}
                    </ol>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default ReferAndEarn;
