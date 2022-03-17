import React, {useState, useEffect} from 'react';
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Box from '../../components/Box';
import styled from 'styled-components';

import Head from 'next/head';
import DownloadModalForm from '../../components/DownloadModalForm';


const ExamsExcelWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  
  @media (min-width: 768px) {
    font-size: 1rem;
    padding: 20px;
  } 

  @media (min-width: 1284px) {
    padding: 30px;
  }

`;


const StudyMaterial = (props) => {

    const [activeFeatureTab, setActiveFeatureTab] = useState(1);
    const [quantitative, setQuantitative] = useState(null);
    const [verbal, setVerbal] = useState(null);



    useEffect(() => {
        // on mount, check for active tab
        let u = new URL(window.location.href);
        console.log(u);
        setQuantitative(localStorage.getItem('quantitative'))
        setVerbal(localStorage.getItem('verbal'))
        let q = u.searchParams.get('q');
        if (q !== null && q !== "1") {
            setActiveFeatureTab(Number(q));
        }
    }, []);

    useEffect(() => {

        if(quantitative !== null){
            if(new Date(localStorage.getItem('quantitative')) < new Date()){
                localStorage.removeItem('quantitative')
                setQuantitative(null)
            }
        }
        if(verbal !== null){
            if(new Date(localStorage.getItem('verbal')) < new Date()){
                localStorage.removeItem('verbal')
                setVerbal(null)
            }
        }
    })

    
    const handleDownload = () => {
        $("#download_files").modal()
    }

    return (
      <div>
        <Head>
          <title>QDS Pro Coaching Institute | Study Material </title>
          <meta
            name="description"
            content="QDS Pro provides various study materials for your preparation. Check this out for amazing material based on quantitative aptitude and verbal ability."
          />
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
                    data-aod-delay="300"
                    data-aos-duration="500"
                    data-aos-easing="ease-in-linear"
                    className="white-text banner-title"
                  >
                    Study Material
                  </h1>
                </div>
              </div>
              {/* main container */}
              <div style={{ width: "80%" }} className="section-wrapper">
                <ExamsExcelWrapper
                  data-aos="fade-down"
                  data-aos-duration="500"
                  data-aos-easing="ease-in-linear"
                  style={{ padding: 0 }}
                >
                  <Box
                    active={activeFeatureTab === 1}
                    onClick={() => setActiveFeatureTab(1)}
                  >
                    <span>Quantitative Aptitude</span>
                  </Box>
                  <Box
                    active={activeFeatureTab === 2}
                    onClick={() => setActiveFeatureTab(2)}
                  >
                    <span>Verbal Ability</span>
                  </Box>
                </ExamsExcelWrapper>

                {activeFeatureTab === 1 && (
                  <div
                    data-aos="fade-right"
                    data-aos-duration="1000"
                    data-aos-easing="ease-in-linear"
                    className="s-study-container"
                    style={{ marginTop: "50px" }}
                  >
                    <div className="row">
                      <div className="col-sm-6 col-md-4">
                        <div class="card">
                          <img
                            class="card-img-top"
                            src="/assets/study_material/quantitative/mental-maths.jpg"
                            alt="Card image cap"
                          />
                          <div class="card-body">
                            <a
                              href="/study_material/mental_maths"
                              class="btn btn-primary pull-right"
                            >
                              Open
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>

                    <DownloadModalForm type="quantitative" />
                  </div>
                )}

                {activeFeatureTab === 2 && (
                  <div
                    data-aos="fade-right"
                    data-aos-duration="1000"
                    data-aos-easing="ease-in-linear"
                    className="s-study-container"
                    style={{ marginTop: "50px" }}
                  >
                    <div className="row">
                      <div className="col-sm-6 col-md-4">
                        <div class="card">
                          <img
                            class="card-img-top"
                            src="/assets/study_material/verbal/VB-01-1.jpg"
                            alt="Card image cap"
                          />
                          <div class="card-body">
                            <a
                              href="/study_material/vocabulary"
                              class="btn btn-primary pull-right"
                            >
                              Open
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>

                    <DownloadModalForm type="verbal" />
                  </div>
                )}
              </div>
            </div>
            <Footer />
          </div>
        </div>
      </div>
    );
}

export default StudyMaterial;

