import React, { useEffect } from "react";
// import { useBeforeunload } from "react-beforeunload";
const firebase = require("firebase");
var firebaseConfig = {
  apiKey: "AIzaSyAQa2W4kDr1JyewSSXWqCDDijEN1DPcxuE",
  authDomain: "qdsprowebsiteadmin.firebaseapp.com",
  databaseURL: "https://qdsprowebsiteadmin.firebaseio.com",
  projectId: "qdsprowebsiteadmin",
  storageBucket: "qdsprowebsiteadmin.appspot.com",
  messagingSenderId: "846377315055",
  appId: "1:846377315055:web:846ed4a2071667f14e091a",
  measurementId: "G-4LL22BT1YG",
};
// Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
firebase
  .database()
  .ref("users/quiz")
  .once("value")
  .then(function (snapshot) {
    var ss = snapshot.val() && snapshot.val().messagemodal;
    $("#messagemodal").append(ss);
  })
  .catch((error) => console.log(error));

const Popup = () => {
  const closeModal = (modalId) => {
    $(`#${modalId}`).modal("hide");
    $("body").removeClass("modal-open");
    $(".modal-backdrop").remove();
  };
  
  return (
    <div className="container">
      <style>
        {`  .modal-content{
              background-color: #213247 !important;
              padding: 0 !important;
              box-shadow: 0 2px 10px 10px rgba(255,255,255,.2), 0 2px 5px 0 rgba(255,255,255,.3)
                        
            }
                    .modal-title{
                        color: white;
                    }

                    button.close{
                        color: white;
                    }

                    .popup-btn-group{
                        text-align: center;
                    }

                    .popup-btn-group .btn{
                        margin: 5px;
                    }

                `}
      </style>
      <div
        className="modal fade"
        id="myModal"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="myModal"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <p
                className="modal-title"
                id="exampleModalLongTitle"
                style={{ paddingTop: "0px", marginTop: "0px" }}
              >
                <b>Already Leaving? Wait a second...</b>
              </p>
              <button
                style={{ color: "#77bf43", textShadow: "none", opacity: 1 }}
                type="button"
                className="close"
                onClick={closeModal.bind(this, "myModal")}
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <div className="popup-btn-group">
                <div>
                  <button
                    className="btn btn-primary"
                    data-dismiss="modal"
                    data-toggle="modal"
                    data-target="#query"
                  >
                    Have a Query ?
                  </button>
                </div>

                <div>
                  <button
                    className="btn btn-primary"
                    data-dismiss="modal"
                    data-toggle="modal"
                    data-target="#democlass"
                  >
                    Want a Free Live Demo Session ?
                  </button>
                </div>
                
                <div>
                  <button
                    className="btn btn-primary"
                    data-dismiss="modal"
                    data-toggle="modal"
                    data-target="#counseling"
                  >
                    Want a Free Career Counseling Session ?
                  </button>
                </div>
                
                <div>
                  <button
                    className="btn btn-primary"
                    data-dismiss="modal"
                    data-toggle="modal"
                    data-target="#recordedversion"
                  >
                    Request a Recorded Version of the Demo Session
                  </button>
                </div>
                <div>
                  <button
                    className="btn btn-primary"
                    data-dismiss="modal"
                    data-toggle="modal"
                    data-target="#prospectus"
                  >
                    Request Course Prospectus
                  </button>
                </div>
                <div>
                  <p id="messagemodal"></p>{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="modal fade"
        id="query"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="query"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <p
                className="modal-title"
                id="exampleModalLongTitle"
                style={{ fontSize: "25px", marginTop: "0px" }}
              >
                <b>Have a Query ?</b>
              </p>
              <button
                style={{ color: "#77bf43", textShadow: "none", opacity: 1 }}
                type="button"
                className="close"
                onClick={closeModal.bind(this, "query")}
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <form
                id="popup-form-1"
                name="popup-form-1"
                method="POST"
                action="https://formspree.io/xjvazyzz"
              >
                <input
                  hidden
                  type="text"
                  name="Form Title"
                  defaultValue="Popup - Have a Query ?"
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
                    required
                    name="Entrance Exam"
                    type="text"
                    className="form-control"
                    id="entrance"
                    placeholder="Entrance Exam"
                  />
                </div>
                <textarea
                  required
                  name="Query"
                  className="form-control"
                  id="query"
                  rows="3"
                  placeholder="Query"
                ></textarea>
                <div className="form-group">
                  <p>
                    <small>
                      <strong>Note : </strong> Your query will be resolved
                      within 12 hours of the submission of this form.
                    </small>
                  </p>
                </div>
                <button
                  type="button"
                  className="btn btn-primary mr-3 mt-3"
                  data-dismiss="modal"
                  data-toggle="modal"
                  data-target="#myModal"
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

      <div
        className="modal fade"
        id="counseling"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="counseling"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <p
                className="modal-title"
                id="exampleModalLongTitle"
                style={{ fontSize: "23px", marginTop: "0px" }}
              >
                <b>Want a Free Career Counseling Session ? </b>
              </p>
              <button
                style={{ color: "#77bf43", textShadow: "none", opacity: 1 }}
                type="button"
                className="close"
                onClick={closeModal.bind(this, "counseling")}
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <form
                id="popup-form-2"
                name="popup-form-2"
                method="POST"
                action="https://formspree.io/maypkekg"
              >
                <input
                  hidden
                  type="text"
                  name="Form Title"
                  value="Popup - Want a Free Career Counseling Session ?"
                  readOnly
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
                    required
                    name="Entrance Exam"
                    type="text"
                    className="form-control"
                    id="entrance"
                    placeholder="Entrance Exam"
                  />
                </div>
                <div className="form-group">
                  <input
                    name="Preferable Day"
                    type="text"
                    className="form-control"
                    id="preferable-day"
                    placeholder="Preferable Days (if any)"
                  />
                </div>
                <div className="form-group">
                  <input
                    name="Preferable Time"
                    type="text"
                    className="form-control"
                    id="preferable-time"
                    placeholder="Preferable Timings (if any)"
                  />
                </div>
                <div className="form-group">
                  <p>
                    <small>
                      <strong>Note : </strong> You will receive a call from our
                      chief counselor within 12 hours of the submission of this
                      form.
                    </small>
                  </p>
                </div>
                <button
                  type="button"
                  className="btn btn-primary mr-3 mt-3"
                  data-dismiss="modal"
                  data-toggle="modal"
                  data-target="#myModal"
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

      <div
        className="modal fade"
        id="democlass"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="democlass"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <p
                className="modal-title"
                id="exampleModalLongTitle"
                style={{ fontSize: "25px", marginTop: "0px" }}
              >
                <b>Want a Free Live Demo Session ? </b>
              </p>
              <button
                style={{ color: "#77bf43", textShadow: "none", opacity: 1 }}
                type="button"
                className="close"
                onClick={closeModal.bind(this, "democlass")}
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <form
                id="popup-form-3"
                name="popup-form-3"
                method="POST"
                action="https://formspree.io/xlepvjkr"
              >
                <input
                  hidden
                  type="text"
                  name="Form Title"
                  value="Popup - Want a Free Demo Session ?"
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
                    required
                    name="Entrance Exam"
                    type="text"
                    className="form-control"
                    id="entrance"
                    placeholder="Entrance Exam"
                  />
                </div>
                <div className="form-group">
                  <input
                    required
                    name="Preferable Days"
                    type="text"
                    className="form-control"
                    id="preferable-Day"
                    placeholder="Preferable Days (if any)"
                  />
                </div>
                <div className="form-group">
                  <input
                    required
                    name="Preferable Time"
                    type="text"
                    className="form-control"
                    id="preferable-time"
                    placeholder="Preferable Timings (if any)"
                  />
                </div>
                <div className="form-group">
                  <p style={{fontSize:"22px", marginTop:"15px", marginBottom:"15px"}}>
                    <small>
                      <strong>Note : </strong>You will receive a mail from our
                      QDS Pro Online Prep Team within 12 hours of the submission
                      of this form, with all the details of the next Free Demo
                      Session.
                    </small>
                  </p>
                </div>
                <button
                  type="button"
                  className="btn btn-primary mr-3"
                  data-dismiss="modal"
                  data-toggle="modal"
                  data-target="#myModal"
                >
                  Back
                </button>
                <button
                  type="submit"
                  className="btn btn-primary pull-right"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div
        className="modal fade"
        id="recordedversion"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="democlass"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <p
                className="modal-title"
                id="exampleModalLongTitle"
                style={{ fontSize: "25px", marginTop: "0px" }}
              >
                <b> Request a Recorded Version of the Demo Session </b>
              </p>
              <button
                style={{ color: "#77bf43", textShadow: "none", opacity: 1 }}
                type="button"
                className="close"
                onClick={closeModal.bind(this, "recordedversion")}
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
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
                    required
                    name="Entrance Exam"
                    type="text"
                    className="form-control"
                    id="entrance"
                    placeholder="Entrance Exam"
                  />
                </div>
                <div className="form-group">
                  <p>
                    <small>
                      <strong>Note : </strong> You will receive a mail from our
                      QDS Pro Online Prep Team within 12 hours of the submission
                      of this form, with all the details to access the recorded
                      version of the demo session.
                    </small>
                  </p>
                </div>
                <button
                  type="button"
                  className="btn btn-primary mr-3 mt-3"
                  data-dismiss="modal"
                  data-toggle="modal"
                  data-target="#myModal"
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

      <div
        className="modal fade"
        id="prospectus"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="democlass"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <p
                className="modal-title"
                id="exampleModalLongTitle"
                style={{ fontSize: "23px", marginTop: "0px"}}
              >
                <b> Request Course Prospectus</b>
              </p>
              <button
                style={{ color: "#77bf43", textShadow: "none", opacity: 1 }}
                type="button"
                className="close"
                onClick={closeModal.bind(this, "prospectus")}
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <form
                id="popup-form-5"
                name="popup-form-5"
                method="POST"
                action="https://formspree.io/moqkbeze"
              >
                <input
                  hidden
                  type="text"
                  name="Form Title"
                  value="Popup - Request Course Prospectus"
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
                  <select
                    required
                    name="Entrance Exam"
                    className="form-control"
                    id="entrance"
                    placeholder="Entrance Exam">
                      <option>GMAT</option>
                      <option>CAT</option>
                      <option>MHCET</option>
                      <option>SAT</option>
                      <option>GRE</option>
                    </select>
                  
                </div>
                <div className="form-group">
                  <p>
                    <small>
                      <strong>Note : </strong> You will receive your desired
                      Course Prospectus via Whatsapp or mail within 12 hours of
                      the submission of this form.
                    </small>
                  </p>
                </div>
                <button
                  type="button"
                  className="btn btn-primary mr-3 mt-3"
                  data-dismiss="modal"
                  data-toggle="modal"
                  data-target="#myModal"
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
    </div>
  );
};

export default Popup;
