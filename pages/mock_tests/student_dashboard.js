import Link from 'next/link';
import { Router } from 'next/router';
import React, { Component, useState } from 'react';
import Box from '../../components/Box';
import HeaderMockTest from './header';
import TestOverview from './test_overview';

function StudentDashboard(props)
{
    const exams = ["GMAT", "CAT", "GRE", "SAT", "MAH-CET"];

    const [selectedExam, setSelectedExam] = useState("");

    const [testOverview, setTestOverview] = useState(false);

    const handleTestOverview = (exam) => {

        setSelectedExam(exam);
        setTestOverview(true);

    }

    return(

        <React.Fragment className="body-content">
            <style>
                {`
                    .content-container
                    {
                        width: 100%;
                        margin-left: 3rem;
                        margin-right: 3rem;
                        transition: all .5s;
                    }
                    .top-numbers, .icon-pack
                    {
                        visibility: hidden;
                    }
                    .box-component
                    {
                        width: 70%;
                    }
                    .box-component:hover
                    {
                        background-image: linear-gradient(to right, #77bf43 48%, #7ac042 66%, #83c340 78%, #93c83c 89%, #a9cf37 100%, #aacf37);
                    }
                    .chevron
                    {
                        width: 25%;
                    }
                    .exam-name
                    {
                        width: 75%;
                    }
                `}
            </style>
            <HeaderMockTest></HeaderMockTest>
            <div className="container-fluid content-container mt-5">
                <div className="row">
                    <div className="col-12 mb-2">
                        <h2 className="welcomeText">Test Series</h2>
                    </div>
                    {
                        exams.map(exam => {
                            return(
                                
                                <div className="col-sm-4 d-flex">
                                    <Link href={{pathname: "/mock_tests/test_overview", query: { exam: exam }}}>
                                        <Box className="box-component" onClick={() => handleTestOverview(exam)}>
                                            <div className="exam-name text-left">
                                                <span className="fa fa-laptop m-2"></span>    
                                                {exam}
                                            </div>
                                            <div className="text-right chevron">
                                                <span className="fa fa-chevron-right m-2"></span>
                                            </div>
                                        </Box>
                                    </Link>
                                </div>

                            )
                        })
                    }
                </div>
            </div>
        </React.Fragment>
    );

}

export default StudentDashboard;