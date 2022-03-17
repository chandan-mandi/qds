import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { mockTestFireStore } from '../firestore';


function InstructionsP2(props)
{

    const url = useRouter();
    const exam = url.query.exam;
    const test = url.query.test;

    const [totalTime, setTotalTime] = useState(0);

    const [sectionTime, setSectionTime] = useState(0);

    const [totalSections, setTotalSections] = useState(0);

    const [totalMarks, setTotalMarks] = useState(0);

    const [totalQuestions, setTotalQuestions] = useState(0);

    const [sectionNames, setSectionNames] = useState([]);

    const [sectionQuestions, setSectionQuestions] = useState([]);

    useEffect(() => {

        mockTestFireStore.collection(exam).doc(test).get()
        .then((doc) => {

            var data = doc.data();

            setTotalTime(data.total_time);
            setSectionTime(data.section_time[0]);
            setTotalSections(parseInt(data.total_sections));
            setTotalMarks(data.total_marks);
            setTotalQuestions(data.total_questions);

            setSectionNames(data.section_names);
            setSectionQuestions(data.section_n_questions);

        })
        .catch((err) => {
            console.log(err);
            alert("Error while fetching tests");
        });

    }, []);

    const handleInput = (event) => {

        const name = event.target.name;
        const value = event.target.checked;

        if(value === true)
        {
            $(".btn-submit").prop("disabled", false);
        }
        else
        {
            $(".btn-submit").prop("disabled", true);
        }

    }

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
                        height: 80vh;
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
                    .inst-table th, td
                    {
                        border: 1px solid;
                        text-align: center;
                        border-collapse: initial;
                        padding: 3%;
                    }
                    .inst-table-section
                    {
                        border: 2px solid;
                        border-collapse: collapse;
                        width: 40%;
                    }
                    .inst-table-section th, td
                    {
                        border: 2px solid;
                    }
                    .btn-col
                    {
                        border-top: 1px solid rgba(0, 0, 0, .3); 
                        position: fixed;
                        bottom: 0;
                        width: 83%;
                        height: 18vh;
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
                    .btn-prev
                    {
                        border: 1px solid rgba(0, 0, 0, .3);
                        font-weight: bold;
                        background-color: #fff;
                    }
                    .btn-prev:hover
                    {
                        background-color: #fff;
                        color: #000;
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
                    li
                    {
                        padding-bottom: 2px;
                    }
                    .agree-text
                    {
                        font-size: 12px;
                        width: 98%;
                        float: right;
                    }
                
                `}
            </style>
            <div className="exam-player d-flex">
                <div className="container-fluid text-container">
                    <div className="row">
                        <div className="col-12 instructions-col pt-4 text-justify">
                            <table className="inst-table">
                                <tr>
                                    <td>
                                        <strong>Duration: {totalTime} minutes</strong>
                                    </td>
                                    <td>
                                        <strong>Maximum Marks: </strong> {totalMarks}
                                    </td>
                                </tr>
                            </table>
                            <br></br>
                            <p><strong><u>Read the following instructions carefully.</u></strong></p>
                            <ol>
                                <li> To log-in, enter your Registration Number and password provided to you by the invigilator. Kindly go through the various symbols used in the test and understand their meaning before you start the test. </li>
                                <li> Once you log-in and after the start of the test, you can view all the section-wise questions in the question paper, by clicking on the Question Paper button on the screen. </li>
                                <li> This question paper consists of {sectionNames.length} sections. </li>

                            </ol>
                            <table className="inst-table inst-table-section">
                                <tr>
                                    <th>Section</th>
                                    <th>Test</th>
                                    <th>No. of Qs.</th>
                                </tr>
                                {
                                    sectionNames.map((section , i) => {

                                        return(

                                            <tr>
                                                <td>{i+1}</td>
                                                <td>{section}</td>
                                                <td>{sectionQuestions[i]}</td>
                                            </tr>

                                        )

                                    })
                                }
                                {/* <tr>
                                    <td>I</td>
                                    <td>Verbal Ability and Reading Comprehension (VARC) </td>
                                    <td>34</td>
                                </tr>
                                <tr>
                                    <td>II</td>
                                    <td>Data Interpretation &amp; Logical Reasoning (DILR)</td>
                                    <td>32</td>
                                </tr>
                                <tr>
                                    <td>III</td>
                                    <td>Quantitative Ability (QA) </td>
                                    <td>34</td>
                                </tr> */}
                                <tr>
                                    <td></td>
                                    <td>Total</td>
                                    <td>{totalQuestions}</td>
                                </tr>
                            </table>
                            <br></br>
                            <ol start="4">
                                <li>For Data Interpretation and Logical Reasoning, each situation/scenario may consist, a block of 4 questions. For Reading Comprehension, each passage will consist of a block of 3 or 6 questions. </li>
                                <li> Each question carries 3 marks for every right answer. </li>
                                <li> All questions that are not attempted will result in zero mark . However, wrong answers will result in NEGATIVE marks. For all questions a wrong answer will result in -1 marks. There will NOT be any Negative Marking for Non MCQ questions. </li>
                                <li> The computer allotted to you at the test centre runs on a specialized software that permits only one answer to be selected for the question using a mouse. </li>
                                <li> Your answers shall be updated and saved on a server periodically and also at the end of the test. The test will stop automatically at the end of {totalTime} minutes (or {totalTime + totalSections * 20} minutes for PwD candidates). However the section wise time will be {sectionTime} minutes each ({sectionTime + 20} minutes for PWD/ DA candidate) after which you will not be able to go back to that section. </li>
                                <li> Each MCQ question will have choices out of which only ONE is the correct answer. The candidate has to choose the correct answer by clicking on the radio button (O) placed before the choice. For Non MCQ questions you will have to use the on-screen keyboard and put the answers in the given space. </li>
                                <li> No external/physical calculator is allowed, however an on-screen calculator in the system will be provided. </li>
                                <li> Any charts, graph sheets, and mathematical tables are NOT allowed in the Examination Hall. You may use the rough sheets and pen provided to you at the test centre for all your rough work. The rough sheets and pen need to be returned at the end of the test. </li>
                            </ol>

                            <p className="text-danger"><strong>Note :  Number of MCQ and Non-MCQ types could change in the Test.</strong> </p>

                            <p><strong>Declaration by the candidate: </strong></p>

                            <p>"I have read and understood all the above instructions. I have also read and understood clearly the instructions given on the admit card and shall follow the same. I also understand that in case I am found to violate any of these instructions, my candidature is liable to be cancelled. I also confirm that at the start of the test all the computer hardware allotted to me are in proper working condition.</p>

                            <p>I will not disclose, publish, reproduce, transmit, store, or facilitate transmission and storage of the contents of the exam or any information therein in whole or part thereof in any form or by any means, verbal or written, electronically or mechanically for any purpose. I am aware that this shall be in violation of the Indian Contract Act, 1872 and/or the Copyright Act, 1957 and/or the Information Technology Act, 2000 I am aware that such actions and/or abetment thereof as aforementioned may constitute a cognizable offence punishable with imprisonment for a term up to three years and fine up to Rs. Two Lakhs. I agree to this Non-Disclosure Agreement" </p>
                        </div>
                        <div className="col-10 btn-col">
                            <input type="checkbox" name="agree" onChange={handleInput} />
                            <p className="agree-text mt-1">I have read and understood the instructions. All computer hardware allotted to me are in proper working condition I declare that I am not in possession of / not wearing / not carrying any prohibited gadget like mobile phone, bluetooth devices etc /any prohibited material with me into the Examination Hall.
                            <br /> I agree that in case of not adhering to the instructions, I shall be liable to be debarred from this Test and/or to disciplinary action, which may include ban from future Tests, Examinations. </p>

                            <Link href={{pathname: "/mock_tests/exam_player/instructions", query: { exam: exam, test: test }}}>
                                <a href="/mock_tests/exam_player/instructions" className="btn btn-prev">{'<'} Previous</a>
                            </Link>

                            <Link href={{pathname: "/mock_tests/exam_player/exam_platform", query: { exam: exam, test: test }}}>
                                <a href="/mock_tests/exam_player/exam_player/exam_platform" className="btn btn-lg btn-submit text-center" disabled>I am ready to begin</a>
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

export default InstructionsP2;
