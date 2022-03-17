import React, { useState, useRef } from "react";
import { Button, Modal } from "react-bootstrap";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import ReactPlayer from "react-player/youtube";

const videoModal = (props) => {
  const [show, setShow] = useState(false);
  var { link } = props;
  const outsideClickHandler=()=>{
    if (setShow) {
      setShow = useState(false);
    }
  }
  return (
    <>
      <head>
        <style>
          {`
          .title-video{
            width:100%;
              text-align:center;
              background-color:#192f5a;
              padding-top:5px;
              color:#77bf43;
              color:#fff;                    
            }
            .outer-video-section{
              display:flex;
              justify-content:center;
            }
            .inner-video-section{
              width:95vw;
              max-width:520px;
              border:12px solid #192f5a;
              border-bottom:8px solid #192f5a;
              border-radius:12px;
            }
            .laptop-base{
              height:40px;
              width:20px;
              background-color:#192f5a;
              position:relative;
              top:-60px;
              z-index:0;
              margin-left:395px;
            }
          .antenna{
            color:#192f5a;
            font-weight:bolder;
            font-size:34px;
            margin-bottom:10px;
          }
          .keys{
          height:20px;
          width:120px;
          min-width:150px;
          background-color:#192f5a;
          border-radius:10px;
          position:relative;
          top:-60px;
          z-index:5;
          margin-left:335px
          }          
          `}
        </style>
      </head>
      <Button variant="primary" onClick={() => setShow(!show)}>
        Watch Video
      </Button>
      
      <ClickAwayListener mouseEvent="onMouseDown"
        touchEvent="onTouchStart"
        onClickAway={() => setShow(false)}>
      <Modal
        show={show}
        onHide={() => setShow(!show)}
        backdrop="static"
        keyboard={false}
      >
        {/* <Modal.Header>
          <Modal.Title>
            <button
              style={{ color: "#77bf43", opacity: 1 }}
              type="button"
              className="close"
              onClick={() => setShow(!show)}
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </Modal.Title>
        </Modal.Header> */}
        <Modal.Body>
          <center>
            {/* <ReactPlayer url={link} playing={true} controls /> */}
            <div>
              <div
                id="testimonial_wrapper"
                style={{
                  top: "20%",
                  marginLeft: "0%",
                  right: 0,
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <div class="antenna"> </div>
                <div
                  style={{ marginBottom: 50 }}
                  className="outer-video-section laptop"
                >
                  <div className="inner-video-section content">
                    <ReactPlayer url={link} playing={true} controls width="100%"/>
                    <div class="title-video">
                      <strong>QDS Pro</strong>
                    </div>
                  </div>
                </div>
                <div class="laptop-base"></div>
                <span class="keys"></span>
              </div>
            </div>{" "}
          </center>
        </Modal.Body>
        </Modal>
      </ClickAwayListener>
    </>
  );
};

export default videoModal;
