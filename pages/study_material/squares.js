import React, {useState, useEffect} from 'react';
import Header from "../../components/Header";
import Footer from "../../components/Footer";

import Head from 'next/head';
import DownloadModalForm from '../../components/DownloadModalForm';



const Squares = (props) => {

    const [squares, setSquares] = useState(null);

    useEffect(() => {
        setSquares(localStorage.getItem('quantitative'))
    }, []);

    useEffect(() => {
        if(squares !== null){
            if(new Date(localStorage.getItem('quantitative')) < new Date()){
                localStorage.removeItem('quantitative')
                setSquares(null)
            }
        }
    })



    const handleDownload = () => {
        $("#download_files").modal()
    }


    return (
        <div>
            <Head>
                <title>QDS Pro Entrance Exams Coaching Institute | Study Material | Squares </title>
            </Head>
            <style>
                {`
                    .col-md-4{
                        margin-top: 10px;
                        margin-bottom: 10px;
                    }
                    .col-md-4 .card{
                        box-shadow: 6px 6px 10px #aaaaaa;
                    }

                    .btn{
                        background-color: #192f5a;
                        color: #fff;
                    }
                    .btn:hover{
                        color: #fff;
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
                                data-aos-duration="1000"
                                data-aos-easing="ease-in-linear"
                                className="white-text banner-title">Squares</h1>
                            </div>
                        </div>
                        {/* main container */}
                        <div style={{ width: '80%' }} className="section-wrapper">
                            <div className="s-study-container" >
                                <div
                                data-aos="zoom-out-left"
                                data-aos-duration="1000"
                                data-aos-easing="ease-in-linear"
                                className="row">
                                    <div className="col-sm-6 col-md-4">
                                        <div class="card">
                                            <img class="card-img-top" src="/assets/study_material/quantitative/sq1-01.webp" alt="Card image cap" />
                                            <div class="card-body">
                                                { squares !== null ? (
                                                    <a target="_blank" href="/assets/study_material/quantitative/Squares 1 - 250.pdf" class="btn pull-right">
                                                        Download <i class="fa fa-download" aria-hidden="true"></i>
                                                    </a>
                                                ) : (
                                                    <button onClick={handleDownload} className="btn pull-right" >
                                                        Download <i class="fa fa-download" aria-hidden="true"></i>
                                                    </button>
                                                ) }

                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-sm-6 col-md-4">
                                        <div class="card">
                                            <img class="card-img-top" src="/assets/study_material/quantitative/sq2-01.webp" alt="Card image cap" />
                                            <div class="card-body">
                                                { squares !== null ? (
                                                    <a target="_blank" href="/assets/study_material/quantitative/Squares 251 - 500.pdf" class="btn pull-right">
                                                        Download <i class="fa fa-download" aria-hidden="true"></i>
                                                    </a>
                                                ) : (
                                                    <button onClick={handleDownload} className="btn pull-right" >
                                                        Download <i class="fa fa-download" aria-hidden="true"></i>
                                                    </button>
                                                ) }

                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-sm-6 col-md-4">
                                        <div class="card">
                                            <img class="card-img-top" src="/assets/study_material/quantitative/sq3-01.webp" alt="Card image cap" />
                                            <div class="card-body">

                                                { squares !== null ? (
                                                    <a target="_blank" href="/assets/study_material/quantitative/Squares 501 - 750.pdf" class="btn pull-right">
                                                        Download <i class="fa fa-download" aria-hidden="true"></i>
                                                    </a>
                                                ) : (
                                                    <button onClick={handleDownload} className="btn pull-right" >
                                                        Download <i class="fa fa-download" aria-hidden="true"></i>
                                                    </button>
                                                ) }


                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-sm-6 col-md-4">
                                        <div class="card">
                                            <img class="card-img-top" src="/assets/study_material/quantitative/sq4-01.webp" alt="Card image cap" />
                                            <div class="card-body">

                                                { squares !== null ? (
                                                    <a target="_blank" href="/assets/study_material/quantitative/Squares 751 - 1000.pdf" class="btn pull-right">
                                                        Download <i class="fa fa-download" aria-hidden="true"></i>
                                                    </a>
                                                ) : (
                                                    <button onClick={handleDownload} className="btn pull-right" >
                                                        Download <i class="fa fa-download" aria-hidden="true"></i>
                                                    </button>
                                                ) }
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>


                        <DownloadModalForm type="quantitative" />

                    </div>
                    <Footer />
                </div>
            </div>
        </div>
    );
}

export default Squares;

