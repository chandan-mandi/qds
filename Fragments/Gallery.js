import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../node_modules/aos/dist/aos.css';
import AOS from 'aos';

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
// firebase.initializeApp(firebaseConfig);
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}
import ReactPlayer from 'react-player';


const VideosLinks = [
  {
    //Coaching Classes
    links: [
      "https://www.youtube.com/watch?v=aakXuMSw8F8",
      "https://youtu.be/f-7eaP5Tntw",
      "https://www.youtube.com/watch?v=aakXuMSw8F8",
      "https://youtu.be/f-7eaP5Tntw",
      //'https://youtu.be/DJkdb3GNAEg'
    ],
  },
  {
    //Video Lectures
    links: [
        "https://www.youtube.com/watch?v=Ovfz6HzRUpE&t=602s",
        "https://www.youtube.com/watch?v=6L0bhcpLbho",
        "https://www.youtube.com/watch?v=YD6GY8H5qiQ",
        "https://www.youtube.com/watch?v=pMFXkdhtf0U",
        "https://www.youtube.com/watch?v=egPJOF-9_Fc",
        "https://www.youtube.com/watch?v=2rOp3_j3BN8",
        "https://www.youtube.com/watch?v=bGn-WfAudBw&t=3s",
        "https://www.youtube.com/watch?v=GKqK24VdjzY",
        "https://www.youtube.com/watch?v=Bp7M3A41ijc",
        "https://www.youtube.com/watch?v=TxBpa7WkbWU&t=9s",
        "https://www.youtube.com/watch?v=VjIZr8BAKM4",
        "https://www.youtube.com/watch?v=HkkiFZHAkOA",
        "https://www.youtube.com/watch?v=0VpvmW5Vp-I",
        "https://www.youtube.com/watch?v=NVlcQSLlxy8&t=477s",
        "https://www.youtube.com/watch?v=ClXIrTXieXI",
        "https://www.youtube.com/watch?v=aEd3RCI0fiI",
        "https://www.youtube.com/watch?v=FkwcgSZEy84",
        "https://www.youtube.com/watch?v=cZDawaqau04",
        "https://www.youtube.com/watch?v=8k9BMR7Bapg",
        "https://www.youtube.com/watch?v=sNOcmTf6WAA",
        "https://www.youtube.com/watch?v=xxVHGbxQwd0",
        "https://www.youtube.com/watch?v=00RCoJgtJmU",
        "https://www.youtube.com/watch?v=TYSt7UimGcQ",
        "https://www.youtube.com/watch?v=h5NjZB8FgxE",
        "https://www.youtube.com/watch?v=JnN7UqkZE1I",
        "https://www.youtube.com/watch?v=EYn3uFyjZZY",
        "https://www.youtube.com/watch?v=QpKKyultqVU",
        "https://www.youtube.com/watch?v=oglVCbPZ9eY",
        "https://www.youtube.com/watch?v=3CnIrvFxTPw",
        "https://www.youtube.com/watch?v=BcBFQTJfdO0",
        "https://www.youtube.com/watch?v=10Vx7RS7HvE&t=6s",
    ],
      
  },
  {
    //Live Online Tutoring
    links: [
      "https://www.youtube.com/watch?v=rZPlHa5yJyM",
      "https://youtu.be/f-7eaP5Tntw",
      "https://www.youtube.com/watch?v=rZPlHa5yJyM",
      "https://youtu.be/f-7eaP5Tntw",
      // 'https://youtu.be/DJkdb3GNAEg'
    ],
  },
  {
    //Doubt Solving
    links: ["https://www.youtube.com/watch?v=15l0rLjN-gI"],
  },
  {
    //Home Tutoring
    links: ["https://www.youtube.com/watch?v=GiQq1Pd41Ss"],
  },
];

class Gallery extends React.Component {

    constructor(props)
    {
        super(props);
        this.state = {
            packagesToShow: 2
        }
        this.slider_ref = React.createRef(null);
    }

    componentDidMount()
    {
        AOS.init();
        if(window.innerWidth <= 963){
            this.setState({packagesToShow: 1});
        } else {
            this.setState({packagesToShow: 2});
        }
    }

    componentWillReceiveProps()
    {
        AOS.refresh();
    }

    render() {
        const index = this.props.activeTab;
        const videoLink = VideosLinks[index].links;
        const col_value = videoLink.length > 1 ? 'col-lg-6' : 'col-12';
        const margin_left = videoLink.length == 1 ? 'more-margin' : '';
        
        
        var settings = {
            dots: false,
            infinite: true,
            speed: 900,
            slidesToShow: this.state.packagesToShow,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 5000,
            pauseOnHover: true,
            adaptiveHeight: true,
            swipeToSlide: true,
            arrows: true
        };
        return (
            <div>
                <div className="container-fluid">
                    <div className="row">
                        {
                            videoLink.length > 2 && this.state.packagesToShow === 2 && (

                                <div id="gallery_left_navigation" className="align-self-center p-0">

                                    <span
                                        href="#"
                                        id="gallery-prev"
                                        className="test-nav-link gray-text fa fa-angle-left"
                                        onClick={() => { this.slider_ref.current.slickPrev() }}
                                    />
    
                                </div>

                            )
                        }


                        <Slider className={"gallery-slide text-center" + " " + margin_left} {...settings} ref={this.slider_ref} >
                        {
                            videoLink.map(video => {

                                return(

                                    <div className={col_value}>
                                    <div
                                        data-aos="fade-right"
                                        data-aos-delay="0"
                                        data-aos-duration="1500"
                                        data-aos-easing="ease-in-linear"
                                        id="testimonial_wrapper" 
                                        style={{ top: '20%', marginLeft: '0%', right: 0, display: "flex", flexDirection: 'column' }}>
                                        
                                        <div class="antenna">  </div>
                                        <div
                                        data-aos="fade-right"
                                        data-aos-delay="0"
                                        data-aos-duration="1500"
                                        data-aos-easing="ease-in-linear"
                                        style={{ marginBottom: 50 }} className="outer-video-section laptop">
                                            <div className="inner-video-section content">
                                                <ReactPlayer class="player" style={{ margin: "auto", border: "1px solid black" }} url={video} controls />
                                                <div class="title-video"><strong>QDS Pro</strong></div>
                                            </div>
                                        </div>
                                        <div class="laptop-base"></div>
                                        <span class="keys"></span>
                                    </div>
                                    </div>
                                )

                            })
                        }
                        </Slider>
                        {
                            videoLink.length > 2 && this.state.packagesToShow === 2 && (

                                <div id="gallery_right_navigation" className="align-self-center">

                                    <span
                                        onClick={() => { this.slider_ref.current.slickNext() }}
                                        id="gallery-next"
                                        className="test-nav-link gray-text fa fa-angle-right"/>

                                </div>
                            )
                        }
                        <style>
                            {`

                            .container-fluid
                            {
                                width: 100%;
                            }
                            .antenna{
                                color:#192f5a;
                                font-weight:bolder;
                                font-size:34px;
                                margin-bottom:-20px;
                            }
                            

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
                            }
                            .player
                            {
                                max-width:100%;
                                height:100px;
                            }
                            
                            .gallery-slide
                            {
                                width: 90%;
                                
                            }
                            .more-margin
                            {
                                margin: auto;
                            }
                            @media (max-width:1440px)
                            {
                                .gallery-slide
                                {
                                    width: 88%;
                                }
                            }
                            @media (max-width: 767px)
                            {
                                .gallery-slide
                                {
                                    width: 100%;
                                }

                            }

                            `}
                        </style>
                    </div>
                </div>
                
            </div>
        );
    }
}

export default Gallery;

