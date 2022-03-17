import React, { useEffect, useState } from 'react';

function ExamSummary(props)
{

    // console.log(props.ansStatus);
    // // console.log(props.status);
    // console.log(props.test);
    // // console.log(props.sections);

    const [score, setScore] = useState(0);


    useState(() => {

        const ansStatus = props.ansStatus;
        const test = props.test === undefined ? [] : props.test;

        var total = 0;

        test.map((section, i) => {

            section.map((question, j) => {

                if(ansStatus[i][j].user_ans !== "")
                {
                    if(question.correctAns === ansStatus[i][j].user_ans)
                    {
                        total += question.marks_plus;
                    }
                    else
                    {
                        total -= question.marks_minus;
                    }
                }
            });
        });    

        setScore(total);
        // console.log("Total: ",total);

    }, []);

    return(

        <React.Fragment>
            <style>
                {`
                    .exam-player
                    {
                        height: 100vh;
                    }
                    .text-container
                    {
                        width: 83%;
                        margin-left: 0;
                    }
                    .profile-container
                    {
                        width: 17%;
                        height: 100%;
                    }
                    .top-numbers, .icon-pack
                    {
                        visibility: hidden;
                    }
                    .instructions-col
                    {
                        font-size: 12px;
                        overflow: auto;
                    }
                    .table-col
                    {
                        height: 80vh;
                        overflow: auto;
                    }
                    .profile-col
                    {
                        float: right;
                        border: 1px solid;
                        height: 100vh;
                    }
                    .profile-img
                    {
                        width: 100%;
                    }
                    .btn-submit
                    {
                        background-color: #007bff;
                        color: #fff;
                        margin-left: 31%;
                        margin-right: 31%;
                    }
                    .btn-submit:hover
                    {
                        color: #fff;
                    }
                    th
                    {
                        font-size: 14px;
                    }
                    td
                    {
                        font-size: 12px;
                    }
                `}
            </style>
            <div className="exam-player d-flex">
                <div className="container-fluid text-container">
                    <div className="row">
                        <div className="col-12 instructions-col pt-4 pb-5 text-center">
                            <h6>Exam Summary</h6>
                        </div>
                        <div className="col-12 table-col text-center">
                        {
                            props.test != null && props.sections != null && props.sections.length > 0 && props.sections.map((section, i) => {

                                return(
                                    <div className="ml-5 mr-5">
                                        <h6 className="text-left">Section {i+1}</h6>
                                        <table className="table">
                                            <thead className="thead-light">
                                                <tr>
                                                    <th>
                                                        Section Name
                                                    </th>
                                                    <th>
                                                        No. of Questions
                                                    </th>
                                                    <th>
                                                        Answered
                                                    </th>
                                                    <th>
                                                        Not Answered
                                                    </th>
                                                    <th>
                                                        Answered and Marked for Review
                                                    </th>
                                                    <th>
                                                        Answered and Not Marked for Review
                                                    </th>
                                                    <th>
                                                        Not Visited
                                                    </th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>
                                                        {section}
                                                    </td>
                                                    <td>
                                                        {props.test[i].length}
                                                    </td>
                                                    <td>
                                                        {props.status[i].answered}
                                                    </td>
                                                    <td>
                                                        {props.status[i].notAnswered}
                                                    </td>
                                                    <td>
                                                        {props.status[i].markedAnswered}
                                                    </td>
                                                    <td>
                                                        {props.status[i].markedNotAnswered}
                                                    </td>
                                                    <td>
                                                        {props.status[i].notVisited}
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                );
                            })
                        }
                        </div>
                        <div className="col-12 text-center">
                            <p>Score: ({score}/{props.maxMarks})</p>
                        </div>
                        <div className="col-12 text-center">
                            <a href="/mock_tests/exam_player/final_confirm" className="btn btn-submit" >Next</a>
                        </div>
                    </div>
                </div>
                <div className="container profile-container">
                    <div className="row">
                        <div className="col-12 profile-col d-flex align-items-center">
                            <img className="profile-img " src="/assets/exam_player/profile.webp" alt="Profile"></img>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>

    )
}

export default ExamSummary;
