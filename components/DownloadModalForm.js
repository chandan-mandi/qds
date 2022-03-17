import React from 'react';

const DownloadModalForm = (props) => {


    const closeModal = () => {
        $(`#download_files`).modal('hide');
        $('body').removeClass('modal-open');
        $('.modal-backdrop').remove();
    }


    const handleSubmit = () => {
        var oneday = new Date();
        // 2 minutes of interval to download
        // oneday.setTime(oneday.getTime() + 2000 * 60);
        // 24 hours of interval to download
        oneday.setHours(oneday.getHours()  + 24);
        try {
            localStorage.setItem(props.type, oneday);
        }
        catch (e) { 
            console.log(e)
        }

    }


    return (
      <div>
        <style>
          {`
                    form#download_files label{
                        font-size: 16px;
                    }
                `}
        </style>

        <div
          className="modal fade"
          id="download_files"
          tabIndex="-1"
          role="dialog"
          aria-labelledby="download_files"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div
                className="modal-header"
                style={{
                  backgroundColor: "#213247",
                }}
              >
                <h5 className="modal-title" id="register_modal">
                  {props.type === "create-time-table"
                    ? "Register to Create Time-Table"
                    : props.type === "compare"
                    ? "Register to Compare Colleges"
                    : "Register to Download"}
                </h5>
                <button
                  style={{ color: "#77bf43", textShadow: "none", opacity: 1 }}
                  type="button"
                  className="close"
                  onClick={closeModal}
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
                  id="download_files"
                  name="download_files"
                  method="POST"
                  onSubmit={handleSubmit}
                  action="https://formspree.io/mjvazydz"
                >
                  {props.type === "quantitative" && (
                    <input
                      hidden
                      type="text"
                      name="Form Title"
                      value="Quantitative Aptitude - Study Material"
                    />
                  )}
                  {props.type === "verbal" && (
                    <input
                      hidden
                      type="text"
                      name="Form Title"
                      value="Verbal Ability - Study Material"
                    />
                  )}
                  {props.type === "download" && (
                    <input
                      hidden
                      type="text"
                      name="Form Title"
                      value="Downloads"
                    />
                  )}
                  {props.type === "compare" && (
                    <input
                      hidden
                      type="text"
                      name="Form Title"
                      value="Compare Colleges"
                    />
                  )}
                  {props.type === "create-time-table" && (
                    <input
                      hidden
                      type="text"
                      name="Form Title"
                      value="Create time table"
                    />
                  )}
                  {props.type === "download-pdfs" && (
                    <input
                      hidden
                      type="text"
                      name="Form Title"
                      value="Download PDF - Static Study Plan"
                    />
                  )}
                  <div class="form-group">
                    <label for="name">Full Name *</label>
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
                    <label for="email">Email *</label>
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
                    <label for="mobile">Mobile Number *</label>
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
                    <label for="entrance">Entrance Exam *</label>
                    <input
                      required
                      name="Entrance Exam"
                      type="text"
                      class="form-control"
                      id="entrance"
                      placeholder="Entrance Exam"
                    />
                  </div>

                  <button
                    type="submit"
                    class="btn btn-primary mt-3 mb-1 pull-right"
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
}


export default DownloadModalForm;