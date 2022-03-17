import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { mockTestFireStore } from '../firestore';

function Instructions(props)
{

    const [exam, setExam] = useState("");
    const [test, setTest] = useState("");

    const [totalTime, setTotalTime] = useState(0);

    const [sectionTime, setSectionTime] = useState(0);

    const [totalSections, setTotalSections] = useState(0);

    useEffect(() => {

        const url_str = window.location.href;
        const url = new URL(url_str);
        const exam = url.searchParams.get("exam");
        const test = url.searchParams.get("test");


        setExam(exam);
        setTest(test);

        mockTestFireStore.collection(exam).doc(test).get()
        .then((doc) => {

            var data = doc.data();

            setTotalTime(data.total_time);
            setSectionTime(data.section_time[0]);
            setTotalSections(parseInt(data.total_sections));

        })
        .catch((err) => {
            console.log(err);
            alert("Error while fetching tests");
        });

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
                        height: 90vh;
                        overflow: auto;
                    }
                    .inst-table
                    {
                        border: 1px solid;
                        text-align: center;
                        border-collapse: initial;
                        margin: auto;
                        width: 50%;
                    }
                    .inst-table td
                    {
                        border: 1px solid;
                        text-align: center;
                        border-collapse: initial;
                        padding: 1%;
                    }
                    .btn-col
                    {
                        border-top: 1px solid rgba(0, 0, 0, .3); 
                        position: fixed;
                        bottom: 0;
                        width: 83%;
                        height: 7vh;
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
                    .btn-next
                    {
                        border: 1px solid rgba(0, 0, 0, .3);
                        font-weight: bold;
                        background-color: #fff;
                    }
                    .btn-next:hover
                    {
                        background-color: #fff;
                        color: #000;
                    }
                    .icon-card
                    {
                        width: 25%;
                        height: 25%;
                        border: none;
                    }
                    img
                    {
                        width: 100%;
                    }

                    li
                    {
                        padding-bottom: 2px;
                    }
                
                `}
            </style>
            <div className="exam-player d-flex">
                <div className="container-fluid text-container">
                    <div className="row">
                        <div className="col-12 instructions-col pt-5 text-justify">
                            <p><strong><u>General Instructions: </u></strong></p>
                            <ol>
                                <li> Total duration of the test is <strong>{totalTime}</strong> minutes.
                                <br></br>
                                For PwD Candidates 20 minutes extra time will be allotted to each section. Thus for PwD Candidates total duration of the test is {totalTime + totalSections*20} minutes. </li>
                                <li> The time alloyed to each Section is {sectionTime} minutes ({sectionTime + 20} minutes for PwD candidates). As soon as you start answering a section the clock (displayed on the top right comer of the screen) will start ticking. On completion of {sectionTime} minutes, the clock will stop, the particular section will be locked, the submit button will get activated and you need to click on the submit button. If you do not submit, it will be auto-submitted. On submission/auto-submission a summary of your answers will be displayed on the screen. You can then move to the next Section and start answering. The same process will be repeated for all three Sections.
                                <br></br>
                                For PwD candidates the process will be the same as above except that for each section they will be given {sectionTime + 20} minutes. However, there would be an option for submitting the answers of a section at any point of time after the completion of {sectionTime} minutes. Thus they will have an option to complete the test between {totalTime} minutes and {totalTime + totalSections*20} minutes </li>
                                <li> Candidates are allowed to leave the test hall only after the completion of 180 minutes, in other words only after finishing the test.
                                <br></br>
                                For PwD candidates it is after the completion of the test which is between {totalTime} minutes and {totalTime + totalSections*20} minutes </li>
                                <li> Some Questions will be of multiple choice type (MCQ) with options and some are non-MCQ </li>
                                <li> Your clock will be set at the server. The countdown timer at the top right corner of screen will display the remaining time available for you to complete the Section. When the timer reaches zero, the test for the Section will end by itself. However, PwD candidates could complete a section at any point of time between {sectionTime} minutes and {sectionTime + 20} minutes by clicking the 'submit' button </li>
                                <li> Use the rough pad and pen provided to you for any rough work. <strong>Please note that only one rough pad will be given to you.</strong> Write clearly your name and registration number at the designated place on the rough pad. Submit the rough pad and pen at the end of the examination. </li>
                                <li> You are not allowed to use any calculator and any other computing machine, however an on-screen calculator will be provided, which can be used </li>
                                <li> The Question Palette displayed on the right side of screen will show the status of each question using one of the following symbols </li>
                            </ol>
                            <table className="inst-table">
                                <tr>
                                    <td>S No.</td>
                                    <td>Question with Status</td>
                                    <td>Meaning</td>
                                </tr>
                                <tr>
                                    <td>A</td>
                                    <td className="d-flex justify-content-center">
                                        <div className="card icon-card ">
                                            <img className="card-img" src="/assets/exam_player/gray.webp" alt="Gray Icon" className="icon"></img>
                                            <div className="card-img-overlay d-flex">
                                                <p className="m-auto">1</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td>You have not visited the question yet. </td>
                                </tr>
                                <tr>
                                    <td>B</td>
                                    <td className="d-flex justify-content-center">
                                        <div className="card icon-card ">
                                            <img className="card-img" src="/assets/exam_player/red.webp" alt="Red Icon" className="icon"></img>
                                            <div className="card-img-overlay d-flex text-white">
                                                <p className="m-auto">3</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td>You have visited the question but not answered the same. </td>
                                </tr>
                                <tr>
                                    <td>C</td>
                                    <td className="d-flex justify-content-center">
                                        <div className="card icon-card ">
                                            <img className="card-img" src="/assets/exam_player/green.webp" alt="Green Icon" className="icon"></img>
                                            <div className="card-img-overlay d-flex text-white">
                                                <p className="m-auto">5</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td>You have answered the Question but have not marked for review. </td>
                                </tr>
                                <tr>
                                    <td>D</td>
                                    <td className="d-flex justify-content-center">
                                        <div className="card icon-card ">
                                            <img className="card-img" src="/assets/exam_player/blue.webp" alt="Blue Icon" className="icon"></img>
                                            <div className="card-img-overlay d-flex text-white">
                                                <p className="m-auto">7</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td>You have NOT answered the question but have marked the question for review. </td>
                                </tr>
                                <tr>
                                    <td>E*</td>
                                    <td className="d-flex justify-content-center">
                                        <div className="card icon-card ">
                                            <img className="card-img" src="/assets/exam_player/blue-green.webp" alt="Blue-Green Icon" className="icon"></img>
                                            <div className="card-img-overlay d-flex text-white">
                                                <p className="m-auto">9</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td>You have answered the question as well as marked it for review. </td>
                                </tr>
                            </table>
                            <br></br>
                            <p>
                                *If a question is answered and 'Marked for Review' (Serial No. E), then the answer will be considered for evaluation unless the status is modified by the candidate.
                            </p>
                            <p><strong><u>Navigating to a Question: </u></strong></p>
                            <ol start="9">
                                <li><strong>To answer a question, do the following: </strong></li>
                                <ol type="a">
                                    <li> Click on the question number in the Question Palette to go to that question directly. </li>
                                    <li> Select an answer for a multiple choice type question by clicking on the bubble placed before the choices in the form of radio buttons (o) For Non MCP questions, type in the answer in the space provided on the screen using the on-screen keyboard. </li>
                                    <li> Click on <strong> 'Save &amp; Next' </strong> to save your answer for the current question and then go to the next question.
                                    <br></br>
                                     Alternatively you may click on Mark for Review &amp; Next to save your answer for the current question and also to mark it for review, and then go to the next question.
                                    <br></br>
                                    <strong> Caution: Note that your answer for the current question will not be saved, if you navigate to another question directly by clicking on a question number without clicking 'Save &amp; Next' or 'Mark for Review &amp; Next' button. </strong></li>
                                    <li> You can view all the section-wise questions by clicking on the <strong> 'Question Paper' </strong> button. <strong> This feature is provided, so that if you want you can just see the section-wise question paper at a glance.</strong> </li>
                                </ol>
                            </ol>
                            <p><strong><u>Changing the response: </u></strong></p>
                            <ol start="10">
                                <li><strong>Procedure for answering a multiple choice type question: </strong></li>
                                <ol type="a">
                                    <li>To deselect your chosen answer, click on the <strong> question number </strong> on the palette and click on the <strong> 'Clear Response'. </strong></li>
                                    <li>To change your chosen answer, click on the bubble of another option. To save your changed answer, you MUST click on the <strong> 'Save &amp; Next' </strong> or <strong> 'Mark for Review &amp; Next' </strong>  button.
                                    <br></br>
                                     <strong>Navigating  through sections: </strong></li>
                                    <li>The test has three Sections I Verbal Abilrly and Reading Comprehension (VARC), II. Data Interpretation & Logical Reasoning (SILT) and III. Quantitative Ability (QA), which will be administered in the same order as above. </li>
                                    <li>Sections as above are displayed on the top bar of the screen.</li>
                                    <li>From a section you will be able to move to the next section only after completing 60 minutes the time allocated to each Section.</li>
                                    <li>The Sector you are currently viewing will be highlighted. </li>
                                </ol>
                            </ol>
                        </div>
                        <div className="col-10 btn-col">
                            <Link href={{pathname: "/mock_tests/exam_player/instructions_p2", query: { exam: exam, test: test }}}>
                                <a className="btn btn-next float-right mt-2 mb-1">Next {'>'}</a>
                            </Link>
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

export default Instructions;
