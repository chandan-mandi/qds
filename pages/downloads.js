import React, {useState, useEffect} from 'react';
import Header from "../components/Header";
import Footer from "../components/Footer";

import Head from 'next/head';
import DownloadModalForm from '../components/DownloadModalForm';


const Downloads = (props) => {

    const [download, setDownload] = useState(null);

    useEffect(() => {
        setDownload(localStorage.getItem('download'))
    });

    useEffect(() => {
        if(download !== null){
            if(new Date(localStorage.getItem('download')) < new Date()){
                localStorage.removeItem('download')
                setDownload(null)
            }
        }
    })

    const handleDownload = () => {
        $("#download_files").modal()
    }
    
    return (
        <div>
            <Head>
                <title>QDS Pro Entrance Exams Coaching Institute | Downloads </title>
                <meta name="description" content="To know more about our institute and our courses you can download the brochure and/or prospectus here"/>
            </Head>
            <style>
                {`
                    .col-md-6{
                        margin-top: 5px;
                        margin-bottom: 5px;
                    }
                    .col-md-6 .card{
                        box-shadow: 6px 6px 10px #aaaaaa;
                        width: 57%;
                        margin: auto;
                    }

                    .col-md-6 .card .s-downloads-img{
                        height: 100%;
                        width: 50%;
                    }
                `}
            </style>
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
                                className="white-text banner-title">Downloads</h1>
                            </div>
                        </div>
                        {/* main container */}
                        <div style={{ width: '70%' }} className="section-wrapper"> 
                            <div className="s-study-container">
                                <div className="row">

                                    <div
                                    data-aos="fade-right"
                                    data-aos-duration="1000"
                                    data-aos-easing="ease-in-linear"
                                    className="col-sm-6 col-md-6">
                                        <div class="card">
                                            <img class="card-img-top s-downloads-img " src="https://firebasestorage.googleapis.com/v0/b/qdsprowebsiteadmin.appspot.com/o/downloadbrochures%2Fbrochure-01.png?alt=media&token=45def693-d427-4d5f-9c32-ab1de1c668d1" alt="Card image cap" style={{width:'100%'}} />
                                            <div class="card-body">
                                                
                                                    { download !== null ? (
                                                        <a target="_blank" href="#" class="btn btn-primary pull-right">
                                                            Download <i class="fa fa-download" aria-hidden="true"></i>
                                                        </a>
                                                    ) : (
                                                        <button onClick={handleDownload} className="btn btn-primary pull-right" >
                                                            Download <i class="fa fa-download" aria-hidden="true"></i>
                                                        </button>
                                                    ) }
                                            </div>
                                        </div>
                                    </div>

                                    <div
                                    data-aos="fade-left"
                                    data-aos-duration="1000"
                                    data-aos-easing="ease-in-linear"
                                    className="col-sm-6 col-md-6">
                                        <div class="card">
                                            <img class="card-img-top s-downloads-img" src="https://firebasestorage.googleapis.com/v0/b/qdsprowebsiteadmin.appspot.com/o/downloadbrochures%2Fprospectus-01.png?alt=media&token=8454f0ff-dfab-45ee-bf71-9da831508946" alt="Card image cap" style={{width:'100%'}} />
                                            <div class="card-body">
                                                    
                                                    { download !== null ? (
                                                        <a target="_blank" href="#" class="btn btn-primary pull-right">
                                                            Download <i class="fa fa-download" aria-hidden="true"></i>
                                                        </a>
                                                    ) : (
                                                        <button onClick={handleDownload} className="btn btn-primary pull-right" >
                                                            Download <i class="fa fa-download" aria-hidden="true"></i>
                                                        </button>
                                                    ) }
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
    
                        <DownloadModalForm type="download" />

                    </div>
                    <Footer />
                </div>
            </div>
        </div>
    );
}

export default Downloads;

