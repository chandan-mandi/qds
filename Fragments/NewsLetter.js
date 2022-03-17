import React from 'react';
import styled from 'styled-components';

const SectionTitle = styled.h2`
	padding: 0;
	color: #000;
	font-weight: 700;
    margin: 10px;
    text-transform: capitalize;
	@media (min-width: 1024px) {
		font-size: 2rem;
	}
`;


function NewsLetter(props)
{
    return(
        <div>
            <style>
                {`
                    .newsletter-jumbotron
                    {
                        background-color: #fff; 
                        color: #000;
                        background-image: url("/assets/images/newsletter.webp");
                        background-repeat: no-repeat;
                        background-size: cover;
                        background-position: right;
                    }
                    .content
                    {
                        margin: 2%;
                    }
                    .content .dot {
                        float: left;
                        width: 8px;
                        height: 8px;
                        border-radius: 90%;
                        background-color: #000;
                        display: none;
                        margin-top: 10px;
                        margin-right: 10px;
                    }
                    .content-container
                    {
                        width: 100%;
                        word-break: break-all;
                    }
                    .dot-icon
                    {
                        font-size: 8px;
                    }
                    .newsletter-form-row
                    {
                        width: 100%;
                    }
                    .newsletter-form-group
                    {
                        display: flex;
                        background-color: #213247;
                        color: #fff;
                        border: 2px solid #213247;
                    }
                    .newsletter-form-control
                    {
                        background-color: #213247;
                        color: #fff;
                        border-radius: 0px;
                        border: 2px solid #213247;
                    }
                    .newsletter-btn 
                    {
                        width: 100%;
                        height: 100%;
                    }
                    
                    .newsletter-form-control::-webkit-input-placeholder 
                    {
                       color: #fff;
                    }
                    .newsletter-form-control:-moz-placeholder 
                    {
                        color: #fff;
                    }
                    .newsletter-form-control::-moz-placeholder 
                    {
                        color: #fff;
                    }
                    .newsletter-form-control::placeholder 
                    {
                        color: #fff;
                    }
                    .newsletter-form-control:-ms-input-placeholder 
                    {
                        color: #fff;
                    }
                    @media (max-width:600px){
                        .flexDirection{
                            flex-direction: column;
                         }   
                         .fa.fa-circle.dot-icon.align-self-center{
                             display: none;
                         }
                         .content .dot {
                            display:block;
                        } 
                    }

                `}
            </style>
            <div className="jumbotron m-0 newsletter-jumbotron"
                    data-aos="fade-down" 
                    data-aos-delay="0"
                    data-aos-duration="1000"
                    data-aos-easing="ease-in-linear">
                <div className="d-flex align-self-center justify-content-center text-center">
                    <SectionTitle>Subscribe to our newsletter</SectionTitle>
                </div>
                <div>
                    <p className="content-container d-flex align-self-center justify-content-center flexDirection">
                    <i className="fa fa-circle dot-icon align-self-center"></i>
                        <span className="content"><span className="dot"></span>College &amp; University Notifications</span>
                        <i className="fa fa-circle dot-icon align-self-center"></i>
                        <span className="content"><span className="dot"></span>Exam Notifications</span>
                        <i className="fa fa-circle dot-icon align-self-center"></i>
                        <span className="content"><span className="dot"></span>News Updates</span>
                        <i className="fa fa-circle dot-icon align-self-center"></i>
                        <span className="content"><span className="dot"></span>Daily Quizzes</span>
                        <i className="fa fa-circle dot-icon align-self-center"></i>
                        <span className="content"><span className="dot"></span>Blog Articles</span>
                        <i className="fa fa-circle dot-icon align-self-center"></i>
                        <span className="content"><span className="dot"></span>&amp; much more</span>
                    </p>
                </div>
                <div>
                    <form className="content-container d-flex align-self-center justify-content-center"> 
                        <div className="form-row newsletter-form-row">
                            <div className="form-group newsletter-form-group col-md-3 p-0">
                                <i className="fa fa-user-o align-self-center p-2 "></i>
                                <input required name="Name" type="text" className="form-control newsletter-form-control" id="name" placeholder="Enter Your Full Name" />
                            </div>
                            <div className="form-group newsletter-form-group col-md-3 p-0">
                                <i className="fa fa-envelope-o align-self-center p-2"></i>
                                <input required name="Email" type="email" className="form-control newsletter-form-control" id="email" placeholder="Enter Your Email" />
                            </div>
                            <div className="form-group newsletter-form-group col-md-3 p-0">
                                <i className="fa fa-mobile align-self-center p-2"></i>
                                <input required name="Mobile Number" type="text" className="form-control newsletter-form-control" id="mobile" placeholder="Enter Your Mobile Number" />
                            </div>
                            <div className="form-group newsletter-form-group col-md-2 p-0">
                                <select className="form-control newsletter-form-control" name="course" id="course" required>
                                    <option selected value="">Select Course</option>
                                    <option value="GMAT">GMAT</option>
                                    <option value="CAT">CAT</option>
                                    <option value="GRE">GRE</option>
                                    <option value="SAT">SAT</option>
                                    <option value="MAH-CET">MAH-CET</option>
                                    <option value="ALL">ALL</option>
                                </select>
                            </div>
                            <div className="form-group col-md-1 p-0">
                                <button disabled type="submit" className="btn btn-primary newsletter-btn">Submit</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default NewsLetter;