import Head from 'next/head';
import { useRouter } from 'next/router';
import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import GMATOfficial from './store_item_details/gmat_official';
import GMATQuant from './store_item_details/gmat_quant';
import GMATVerbal from './store_item_details/gmat_verbal';

function StoreItemsDesc(props)
{

    const url = useRouter();
    const item = url.query.item;
    const id = parseInt(url.query.p_id);

    return(
        <div>
            <Head>
                <title>QDS Pro | Store | Description </title>
                <meta name="robots" content="nofollow" />
            </Head>
            <style>
                {`
                    .btn, .btn:hover
                    {
                        color: #fff;
                        background-color: #77bf43;
                    }
                    .back-btn
                    {
                        justify-content: 'center';
                        margin: auto;
                        margin-top: 5%;
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
                                className="white-text banner-title text-center">{item}</h1>
                            </div>
                        </div>
                        {/* main container */}  
                        <div className="section-wrapper"> 
                                <div className="container">
                                    {
                                        id === 1 && (
                                            <div>
                                                <GMATOfficial></GMATOfficial>
                                                <br></br>
                                                <GMATQuant></GMATQuant>
                                                <br></br>
                                                <GMATVerbal></GMATVerbal>
                                            </div>
                                        )
                                    ||
                                        id === 2 && (
                                            <div>
                                                <GMATQuant></GMATQuant>
                                                <br></br>
                                                <GMATVerbal></GMATVerbal>
                                            </div>
                                        )
                                    ||
                                        id === 3 && (
                                            <div>
                                                <GMATOfficial></GMATOfficial>
                                                <br></br>
                                                <GMATQuant></GMATQuant>
                                            </div>
                                        )
                                    ||
                                        id === 4 && (
                                            <div>
                                                <GMATOfficial></GMATOfficial>
                                                <br></br>
                                                <GMATVerbal></GMATVerbal>
                                            </div>
                                        )
                                    ||
                                        id === 5 && (
                                            <div>
                                                <GMATOfficial></GMATOfficial>
                                            </div>
                                        )
                                    ||
                                        id === 6 && (
                                            <div>
                                                <GMATQuant></GMATQuant>
                                            </div>
                                        )
                                    ||
                                        id === 7 && (
                                            <div>
                                                <GMATVerbal></GMATVerbal>
                                            </div>
                                        )
                                    }
                                    <div className="row">
                                        <div className="col-12 text-center">
                                            <a href="/store" className="btn btn-success back-btn">Back to Store</a>
                                        </div>
                                    </div>
                                    
                                </div>
                            </div>
                            
                    </div>
                    <Footer />
                    
                </div>
            </div>
        </div>

    )
}

export default StoreItemsDesc;