import React, { useEffect, useState } from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../node_modules/aos/dist/aos.css';
import {GMAT} from './batch_details/gmat_batches';
import {CAT} from './batch_details/cat_batches';
import {GRE} from './batch_details/gre_batches';
import {SAT} from './batch_details/sat_batches';
import {MAH_CET} from './batch_details/mahcet_batches';



function UpcomingBatches(props)
{

    const course = props.course;
    const [batchCourse, setBatchCourse] = useState([]);

    useEffect(() => {


        if(course === 'GMAT')
            setBatchCourse(GMAT);
        else if(course === 'CAT')
            setBatchCourse(CAT);
        else if(course === 'GRE')
            setBatchCourse(GRE);
        else if(course === 'SAT')
            setBatchCourse(SAT);
        else if(course === 'MAH-CET')
            setBatchCourse(MAH_CET);
            


    }, [batchCourse])

    return (
      <div className="container-fluid">
        <div className="row">
          {batchCourse.map((batch) => {
            return (
              <div className="col-4 mt-5">
                <div
                  data-aos="fade-right"
                  data-aos-delay="0"
                  data-aos-duration="1500"
                  data-aos-easing="ease-in-linear"
                  id="testimonial_wrapper"
                  style={{
                    marginLeft: "0%",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  {/* <div className="bar-1 align-self-center"></div> */}
                  <div className="bar-2 align-self-center"></div>
                  <div className="inner-section">
                    <div class="container content">
                      <div className="row">
                        <div className="col-3 align-self-center mt-3">
                          <div className="p-2 bg-white text-large">
                            <strong>{batch.date}</strong>
                          </div>
                        </div>
                        <div className="col-9 mt-3 align-self-center text-large">
                          <strong>{batch.batch_size}</strong>
                          <br></br>
                          <strong>{batch.batch_type}</strong>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-2 mt-2 text-left">
                          <span className="fa fa-file-o fa-lg"></span>
                        </div>
                        <div className="col-10 mt-2 text-large text-left p-0">
                          <strong>{batch.duration}</strong>
                        </div>
                        <div className="col-2 mt-2 text-left">
                          <span className="fa fa-calendar fa-lg"></span>
                        </div>
                        <div className="col-10 mt-2 text-large text-left p-0">
                          <strong>{batch.days}</strong>
                        </div>
                        <div className="col-2 mt-2 text-left">
                          <span className="fa fa-clock-o fa-lg"></span>
                        </div>
                        <div className="col-10 mt-2 text-large text-left p-0">
                          <strong>{batch.timings}</strong>
                        </div>
                        <div className="col-2 mt-2 mb-4 text-left">
                          <span className="fa fa-users fa-lg"></span>
                        </div>
                        <div className="col-10 mt-2 text-large text-left p-0">
                          <p class="seats-animation blink">
                          <marquee behavior="alternate" direction="right" width="101px" scrollamount="3">
                            <strong>{batch.seats} Seats Left</strong>
                            </marquee>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bar-3 align-self-center">
                    <button
                      className="reserve btn btn-2x float-right"
                      data-toggle="modal"
                      data-target="#reserveSpot"
                    >
                      Reserve Your Spot{" "}
                      <span className="fa fa-hand-pointer-o"></span>
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div
          className="modal fade"
          id="reserveSpot"
          tabIndex="-1"
          role="dialog"
          aria-labelledby="democlass"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div
                className="modal-header"
                style={{ backgroundColor: "#213247" }}
              >
                <h5 className="modal-title" id="exampleModalLongTitle">
                  Reserve Your Spot
                </h5>
                <button
                  style={{ color: "#77bf43", textShadow: "none", opacity: 1 }}
                  type="button"
                  class="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div
                className="modal-body"
                style={{ backgroundColor: "#213247", padding: "25px" }}
              >
                <form
                  id="popup-form-4"
                  name="popup-form-4"
                  method="POST"
                  action="https://formspree.io/moqkbeze"
                >
                  <input
                    hidden
                    type="text"
                    name="Form Title"
                    value="Popup - Request a Recorded Version of the Demo Session"
                  />
                  <div className="form-group">
                    <input
                      required
                      name="Name"
                      type="text"
                      className="form-control"
                      id="name"
                      placeholder="Your Name"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      required
                      name="Email"
                      type="email"
                      className="form-control"
                      id="email"
                      placeholder="Email"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      required
                      name="Mobile Number"
                      type="text"
                      className="form-control"
                      id="mobile"
                      placeholder="Mobile Number"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      hidden
                      required
                      name="Entrance Exam"
                      type="text"
                      className="form-control"
                      id="entrance"
                      placeholder={course}
                      value={course}
                    />
                  </div>
                  <div className="form-group text-justify">
                    <p>
                      <small>
                        <strong>Note : </strong> You will receive the
                        registration from our QDS Pro Online Prep Team within 12
                        hours of the submission of this form.
                      </small>
                    </p>
                  </div>
                  <button
                    type="button"
                    className="btn btn-primary mr-3 mt-3"
                    data-dismiss="modal"
                    data-toggle="modal"
                    data-target="#reserveSpot"
                  >
                    Back
                  </button>
                  <button
                    type="submit"
                    className="btn btn-primary mt-3 pull-right"
                  >
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
        <style>
          {`

                .text-large
                {
                    font-size: large;
                    color: #000;
                }

                .container-fluid
                {
                    width: 90%;
                }

                .fa
                {
                    color: #fff;
                }

                .bar-1
                {
                    width: 20%;
                    border:12px solid #192f5a;
                    border-bottom:8px solid #192f5a;
                    border-radius:2px;
                }
                .bar-2
                {
                    width: 50%;
                    border:12px solid #192f5a;
                    border-bottom:8px solid #192f5a;
                    border-radius:2px;
                }
                .bar-3
                {
                    margin-top: -5%;
                    width: 50%;
                    border: 4px solid #192f5a;
                    //border-bottom:8px solid #192f5a;
                    border-radius:2px;
                }
                .reserve
                {
                    width: 100%;
                    background-image: linear-gradient(to right, #77bf43 48%, #7ac042 66%, #83c340 78%, #93c83c 89%, #a9cf37 100%, #aacf37);
                    border-radius: 0%;
                    padding-left: 2%;
                    padding-right: 2%;
                }
                .content{
                    width:100%;
                    text-align:center;
                    background-image: linear-gradient(to right, #77bf43 48%, #7ac042 66%, #83c340 78%, #93c83c 89%, #a9cf37 100%, #aacf37);
                    padding-top:5px;
                    color:#77bf43;
                    color:#fff;
                    border: 4px solid linear-gradient(to right, #77bf43 48%, #7ac042 66%, #83c340 78%, #93c83c 89%, #a9cf37 100%, #aacf37);
                    border-radius:8px;
                }
            
                .inner-section{
                    width:100%;
                    border: 4px solid #192f5a;
                    border-radius:12px;

                }
                // .seats-animation {
                //     width: 100px;
                //     height: 100px;
                //     position: relative;
                //     animation-name: seatsAnim;
                //     animation-duration: 0.5s;
                //     animation-iteration-count: 4;
                //     animation-direction: alternate;  
                // }

                // @keyframes seatsAnim {
                // 0%   { left:0px; top:0px;}
                // 25%  { left:8px; top:0px;}
                // 50% { left:-8px; top:0px;}
                // 100% { left:0px; top:0px;}
                //     }   
                .seats-animation{    
                  -webkit-animation: shake 0.3s ease-in-out 0.3s infinite alternate;
              }

                  @-webkit-keyframes shake {
                  // from {
                  //     -webkit-transform: rotate(3deg);
                  // }
                  // to {
                  //   -webkit-transform-origin:center center;
                  //   -webkit-transform: rotate(-3deg);
                  // }
              //   0% {
                   
              //     opacity: 1.0;
              //     -webkit-transform: scale(1.0) rotate(0deg);
              //   }
              //   33% {
              //      opacity: 0.75;
              //     -webkit-transform: scale(1.1) rotate(-2deg);
              //   }
              //   67% {
              //      opacity: 0.5;
              //     -webkit-transform: scale(1.1) rotate(2deg);
              //   }
              //   100% {
              //     opacity: 1.0;
              //     -webkit-transform: scale(1.0) rotate(0deg);
              //   }
              //  }
        `}
        </style>
      </div>
    );   
}

export default UpcomingBatches;
