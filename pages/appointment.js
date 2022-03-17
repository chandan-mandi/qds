import React from "react";
import { InlineWidget } from "react-calendly";
import Header from "../components/Header";
import Footer from "../components/Footer";
import styled, { css } from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const Calendly = () => {
  return (
    <>
      {""}
      <div style={{ top: "0", position: "relative" }}>
        <Header />
      </div>
      {""}
      <div className="aboutus-section">
        <div className="">
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
                  Book an Appointment
                </h1>
              </div>
            </div>
          </div>
          <div style={{height:"700px"}}>
            <InlineWidget
              url="https://calendly.com/qdspro/15min?back=1&month=2021-03"
              style={{ minWidth: "480px", height: "630px" }}
            />
          </div>
          <Footer />
        </div>
      </div>
    </>
  );
};
export default Calendly;
