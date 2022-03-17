import React, {useState, useEffect} from 'react';
import Header from "../../components/Header";
import Footer from "../../components/Footer";

import Head from 'next/head';
import DownloadModalForm from '../../components/DownloadModalForm';



const Vocabulary = (props) => {

    const [vocabulary, setVocabulary] = useState(null);

    useEffect(() => {
        setVocabulary(localStorage.getItem('verbal'))
    });

    useEffect(() => {
        if(vocabulary !== null){
            if(new Date(localStorage.getItem('verbal')) < new Date()){
                localStorage.removeItem('verbal')
                setVocabulary(null)
            }
        }
    })



    const handleDownload = () => {
        $("#download_files").modal()
    }

    const FilesArray = [
        {
            imageUrl: "/assets/study_material/verbal/A-01-1.webp",
            fileUrl: "https://firebasestorage.googleapis.com/v0/b/qdsprowebsiteadmin.appspot.com/o/vocabulary%2FVocabulary%20Words%20-%20A.pdf?alt=media&token=d34e2aed-31c6-4218-a6bd-09b26d372e4d"
        },
        {
            imageUrl: "/assets/study_material/verbal/B-01.webp",
            fileUrl: "https://firebasestorage.googleapis.com/v0/b/qdsprowebsiteadmin.appspot.com/o/vocabulary%2FVocabulary%20Words%20-%20B.pdf?alt=media&token=b64e9365-cb6e-46af-bbd4-d5efdc9cf70b"
        },
        {
            imageUrl: "/assets/study_material/verbal/c-01.webp",
            fileUrl: "https://firebasestorage.googleapis.com/v0/b/qdsprowebsiteadmin.appspot.com/o/vocabulary%2FVocabulary%20Words%20-%20C.pdf?alt=media&token=b64e9365-cb6e-46af-bbd4-d5efdc9cf70b"
        },
        {
            imageUrl: "/assets/study_material/verbal/d-01.webp",
            fileUrl: "https://firebasestorage.googleapis.com/v0/b/qdsprowebsiteadmin.appspot.com/o/vocabulary%2FVocabulary%20Words%20-%20D.pdf?alt=media&token=0b77d264-ed23-492c-ab0f-b5196a32ee45"
        },
        {
            imageUrl: "/assets/study_material/verbal/e-01.webp",
            fileUrl: "https://firebasestorage.googleapis.com/v0/b/qdsprowebsiteadmin.appspot.com/o/vocabulary%2FVocabulary%20Words%20-%20E.pdf?alt=media&token=0b77d264-ed23-492c-ab0f-b5196a32ee45"
        },
        {
            imageUrl: "/assets/study_material/verbal/F-01.webp",
            fileUrl: "https://firebasestorage.googleapis.com/v0/b/qdsprowebsiteadmin.appspot.com/o/vocabulary%2FVocabulary%20Words%20-%20F.pdf?alt=media&token=8ea184a8-b2e6-4ccc-aff2-421e637f5962"
        },
        {
            imageUrl: "/assets/study_material/verbal/g-01.webp",
            fileUrl: "https://firebasestorage.googleapis.com/v0/b/qdsprowebsiteadmin.appspot.com/o/vocabulary%2FVocabulary%20Words%20-%20G.pdf?alt=media&token=15e0f75e-21d8-465e-b208-6a5f70c1cf5f"
        },
        {
            imageUrl: "/assets/study_material/verbal/H-01.webp",
            fileUrl: "https://firebasestorage.googleapis.com/v0/b/qdsprowebsiteadmin.appspot.com/o/vocabulary%2FVocabulary%20Words%20-%20H.pdf?alt=media&token=eea70300-3d76-49ba-951e-1519674f713c"
        },
        {
            imageUrl: "/assets/study_material/verbal/i-01-01.webp",
            fileUrl: "https://firebasestorage.googleapis.com/v0/b/qdsprowebsiteadmin.appspot.com/o/vocabulary%2FVocabulary%20Words%20-%20I.pdf?alt=media&token=15f32ca9-39c9-4e4b-a7de-ac0e1d682d64"
        },
        {
            imageUrl: "/assets/study_material/verbal/J-01.webp",
            fileUrl: "https://firebasestorage.googleapis.com/v0/b/qdsprowebsiteadmin.appspot.com/o/vocabulary%2FVocabulary%20Words%20-%20J.pdf?alt=media&token=7f25ad77-b948-4672-9f27-52571a3f4780"
        },
        {
            imageUrl: "/assets/study_material/verbal/K-01.webp",
            fileUrl: "https://firebasestorage.googleapis.com/v0/b/qdsprowebsiteadmin.appspot.com/o/vocabulary%2FVocabulary%20Words%20-%20K.pdf?alt=media&token=19fcf598-b864-474a-8f19-ccee63dd88e9"
        },
        {
            imageUrl: "/assets/study_material/verbal/L-01.webp",
            fileUrl: "https://firebasestorage.googleapis.com/v0/b/qdsprowebsiteadmin.appspot.com/o/vocabulary%2FVocabulary%20Words%20-%20L.pdf?alt=media&token=bc73cf5f-bcc4-48c6-a40b-2bdc78da9c52"
        },
        {
            imageUrl: "/assets/study_material/verbal/M-01.webp",
            fileUrl: "https://firebasestorage.googleapis.com/v0/b/qdsprowebsiteadmin.appspot.com/o/vocabulary%2FVocabulary%20Words%20-%20M.pdf?alt=media&token=e285cd7b-dc9b-4d5b-83f1-f4211332b7ba"
        },
        {
            imageUrl: "/assets/study_material/verbal/N-01.webp",
            fileUrl: "https://firebasestorage.googleapis.com/v0/b/qdsprowebsiteadmin.appspot.com/o/vocabulary%2FVocabulary%20Words%20-%20N.pdf?alt=media&token=b55c3e75-48f3-4585-9797-630b4d37a407"
        },
        {
            imageUrl: "/assets/study_material/verbal/O-01.webp",
            fileUrl: "https://firebasestorage.googleapis.com/v0/b/qdsprowebsiteadmin.appspot.com/o/vocabulary%2FVocabulary%20Words%20-%20O.pdf?alt=media&token=b9a6541b-2c4f-427c-8e28-60bf6a98f48d"
        },
        {
            imageUrl: "/assets/study_material/verbal/P-01.webp",
            fileUrl: "https://firebasestorage.googleapis.com/v0/b/qdsprowebsiteadmin.appspot.com/o/vocabulary%2FVocabulary%20Words%20-%20P.pdf?alt=media&token=90e22795-1f27-46c7-8909-eec7354b848d"
        },
        {
            imageUrl: "/assets/study_material/verbal/Q-01.webp",
            fileUrl: "https://firebasestorage.googleapis.com/v0/b/qdsprowebsiteadmin.appspot.com/o/vocabulary%2FVocabulary%20Words%20-%20Q.pdf?alt=media&token=2e2cbabc-dd49-4dc3-ac4b-0da9b18289d7"
        },
        {
            imageUrl: "/assets/study_material/verbal/R-01.webp",
            fileUrl: "https://firebasestorage.googleapis.com/v0/b/qdsprowebsiteadmin.appspot.com/o/vocabulary%2FVocabulary%20Words%20-%20R.pdf?alt=media&token=aaf6e5d3-9261-416a-b3ea-5ca62dd921c8"
        },
        {
            imageUrl: "/assets/study_material/verbal/S-01.webp",
            fileUrl: "https://firebasestorage.googleapis.com/v0/b/qdsprowebsiteadmin.appspot.com/o/vocabulary%2FVocabulary%20Words%20-%20S.pdf?alt=media&token=f3d7f763-b621-4146-9466-044265db2c43"
        },
        {
            imageUrl: "/assets/study_material/verbal/T-01.webp",
            fileUrl: "https://firebasestorage.googleapis.com/v0/b/qdsprowebsiteadmin.appspot.com/o/vocabulary%2FVocabulary%20Words%20-%20T.pdf?alt=media&token=ebb60594-5093-43a8-8c81-da316cce0e6e"
        },
        {
            imageUrl: "/assets/study_material/verbal/U-01.webp",
            fileUrl: "https://firebasestorage.googleapis.com/v0/b/qdsprowebsiteadmin.appspot.com/o/vocabulary%2FVocabulary%20Words%20-%20U.pdf?alt=media&token=8778eedc-31c8-4cae-8a17-9fe3a8f0d160"
        },
        {
            imageUrl: "/assets/study_material/verbal/V-01.webp",
            fileUrl: "https://firebasestorage.googleapis.com/v0/b/qdsprowebsiteadmin.appspot.com/o/vocabulary%2FVocabulary%20Words%20-%20V.pdf?alt=media&token=f568c8ff-4d74-42c3-bf29-fa25382766fb"
        },
        {
            imageUrl: "/assets/study_material/verbal/W-01.webp",
            fileUrl: "https://firebasestorage.googleapis.com/v0/b/qdsprowebsiteadmin.appspot.com/o/vocabulary%2FVocabulary%20Words%20-%20W.pdf?alt=media&token=5f27130d-549d-4e8c-9ea6-5028c3f916fa"
        },
        {
            imageUrl: "/assets/study_material/verbal/X-01.webp",
            fileUrl: "https://firebasestorage.googleapis.com/v0/b/qdsprowebsiteadmin.appspot.com/o/vocabulary%2FVocabulary%20Words%20-%20X.pdf?alt=media&token=e81835d1-3bec-42de-bcd1-2af139567343"
        },
        {
            imageUrl: "/assets/study_material/verbal/Y-01.webp",
            fileUrl: "https://firebasestorage.googleapis.com/v0/b/qdsprowebsiteadmin.appspot.com/o/vocabulary%2FVocabulary%20Words%20-%20Y.pdf?alt=media&token=5f9f8745-1239-4eaa-be17-9000de361e8b"
        },
        {
            imageUrl: "/assets/study_material/verbal/Z-01.webp",
            fileUrl: "https://firebasestorage.googleapis.com/v0/b/qdsprowebsiteadmin.appspot.com/o/vocabulary%2FVocabulary%20Words%20-%20Z.pdf?alt=media&token=333a7c82-f576-4f6d-a85b-48e22139d225"
        },


    ]

    return (
        <div>
            <Head>
                <title>QDS Pro Entrance Exams Coaching Institute | Study Material | Squares </title>
            </Head>
            <style>
                {`
                    .col-md-3{
                        margin-top: 10px;
                        margin-bottom: 10px;
                    }
                    .col-md-3 .card{
                        box-shadow: 0px 6px 10px #aaaaaa;
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
                                className="white-text banner-title">Vocabulary</h1>
                            </div>
                        </div>
                        {/* main container */}
                        <div style={{ width: '80%' }} className="section-wrapper">
                            <div className="s-study-container" >
                                <div className="row">

                                    { FilesArray.map((f,i) => (
                                        <div
                                        data-aos={i%2==0 ? "fade-right":"fade-left"}
                                        data-aos-duration="1000"
                                        data-aos-easing="ease-in-linear"
                                        key={i} className="col-sm-6 col-md-3">
                                            <div class="card">
                                                <img class="card-img-top" src={f.imageUrl} alt="Card image cap" />
                                                <div class="card-body">

                                                    { vocabulary !== null ? (
                                                        <a target="_blank" href={f.fileUrl} class="btn pull-right">
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
                                    )) }


                                </div>
                            </div>
                        </div>


                        <DownloadModalForm type="verbal" />

                    </div>
                    <Footer />
                </div>
            </div>
        </div>
    );
}

export default Vocabulary;

