import React from 'react';

function InstructionsText(props)
{


    const tempData = {
        course: '',
        name: '',
        questions: [],
        section_n_questions: [],
        section_names: [],
        section_time: [],
        total_marks: 0,
        total_sections: 0,
        total_questions: 0,
        total_time: 0
      };

    const data = props.data === undefined ? tempData :  props.data;
    
    // console.log("Dataaaaaaaa: ",data);
    const totalTime = typeof data === undefined ? "" : data.total_time;
    const sectionTime = data === {} ? "" : data.section_time[0];
    const totalSections = data === {} ? "" : data.total_sections;
    const totalMarks = data === {} ? "" : data.total_marks;
    const totalQuestions = data === {} ? "" : data.total_questions;
    const sectionNames = data === {} ? "" : data.section_names;
    const sectionQuestions = data === {} ? "" : data.section_n_questions;

    return(
        <React.Fragment>
            <style>
            {`
                .m-exam-player
                {
                    height: 100vh;
                }
                .m-text-container
                {
                    width: 100%;
                    margin-left: 0;
                }
                .top-numbers, .icon-pack
                {
                    visibility: hidden;
                }
                .m-instructions-col
                {
                    font-size: 12px;
                    height: 100vh;
                    overflow: auto;
                }
                .m-inst-table
                {
                    border: 1px solid;
                    text-align: center;
                    border-collapse: initial;
                    margin: auto;
                    width: 50%;
                }
                .m-inst-table td
                {
                    border: 1px solid;
                    text-align: center;
                    border-collapse: initial;
                    padding: 1%;
                    height: 20%;
                }
                .m-inst-table-section
                {
                    border: 2px solid;
                    border-collapse: collapse;
                    width: 40%;
                }
                .m-inst-table-section th, td
                {
                    border: 2px solid;
                }
                .m-icon-card
                {
                    width: 20%;
                    height: 20%;
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
            <div className="m-exam-player d-flex">

                <div className="container-fluid m-text-container">
                    <div className="row">
                        <div className="col-12 m-instructions-col text-justify">
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
                            <table className="m-inst-table">
                                <tr>
                                    <td>S No.</td>
                                    <td>Question with Status</td>
                                    <td>Meaning</td>
                                </tr>
                                <tr>
                                    <td>A</td>
                                    <td className="d-flex justify-content-center">
                                        <div className="card m-icon-card ">
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
                                        <div className="card m-icon-card ">
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
                                        <div className="card m-icon-card ">
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
                                        <div className="card m-icon-card ">
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
                                        <div className="card m-icon-card ">
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
                            <table className="m-inst-table">
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
                            <table className="m-inst-table m-inst-table-section">
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

                    </div>
                </div>
            </div>
        </React.Fragment>

    )

}

export default InstructionsText;
