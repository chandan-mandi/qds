import React, { useEffect, useRef, useState } from 'react';
import Countdown from '../timer/countdown';
import Calculator from '../calculator/main_component';
import InstructionsP2 from './instructions_p2';
import Instructions from './instructions';
import InstructionsText from './instructions_text';
import QuestionPaper from './question_paper';
import ExamSummary from './summary';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { mockTestFireStore } from '../firestore';


function ExamPlatform(props)
{

    const url = useRouter();
    const exam = url.query.exam;
    const testName = url.query.test;

    const [fetched, setFetched] = useState(false);
    const [examOver, setExamOver] = useState(false);

    const tempData = {

        course: "",
        name: "",
        questions: [],
        section_n_questions: [],
        section_names: [],
        section_time: [],
        total_marks: 0,
        total_sections: 0,
        total_questions: 0,
        total_time: 0
    }


    const tempTest = [
        {

            questionType: "qt",
            questionText: "qT",
            optIndex: 4,
            optArr: [], 
            options: {

                opt1: "o1",
                opt2: "o1",
                opt3: "o1",
                opt4: "o1"

            },
            marks_plus: 0,
            marks_minus: 0,
            img: "",
            correctAns: ""
        }
    ];

    const [data, setData] = useState(tempData);
    const [group, setGroup] = useState([]);

    const [testId, setTestId] = useState(0);
    const [test, setTest] = useState(tempTest);

    const [statusArr, setStatusArr] = useState([]);
    const [countArr, setCountArr] = useState([]);

    const [allAnswers, setAllAnswers] = useState([]);
    const [allCount, setAllCount] = useState(countArr);

    const [begin, setBegin] = useState(true);
    const [status, setStatus] = useState([]);

    const [initialCount, setInitialCount] = useState(0);

    const [time, setTime] = useState(0);

    const [ minutes, setMinutes ] = useState(0);
    const [seconds, setSeconds ] =  useState(0);

    useEffect(() => {

        mockTestFireStore.collection(exam).doc(testName).get()
        .then((doc) => {

            var data = doc.data();
            setData(data);

            var questions = Object.values(data.questions);
            // console.log("Type: ",typeof questions);

            questions = questions.map((section, i) => {

                return section.map((q, i) => {

                    q["status"] = "Not Answered";
                    return q;

                });
            });

            setGroup(questions);

            // console.log("Q: ",questions);

            // console.log(data);
            // console.log(test[0].questionType);
            return [questions, data];

        })
        .then(([questions, data]) => {

            // console.log("GRoup: ",data);
            setTest(questions[0]);

            setInitialCount(questions[0].length - 1);

            var tempStatusArr = Array(questions[0].length);
            tempStatusArr.fill({});
            tempStatusArr = tempStatusArr.map((x, i) => ({
                id: i,
                status: "Not Answered",
                user_ans: "",
                ans_index: ""
            }));

            setStatus(tempStatusArr);

            var tempCountArr = Array(questions.length);
            questions.map((g, i) => {

                tempCountArr[i] = {
                    notAnswered: 0,
                    answered: 0,
                    notVisited: g.length,
                    markedAnswered: 0,
                    markedNotAnswered: 0
                }

            });

            setAllCount(tempCountArr);
            // console.log("Time", data.section_time[0]);
            setMinutes(data.section_time[0]);
            setSeconds(0);

        });

    }, []);

    useEffect(()=>{
        let myInterval = setInterval(() => {
            if (seconds > 0)
            {
                setSeconds(seconds - 1);
            }
            if (seconds === 0)
            {
                if (minutes === 0)
                {
                    // console.log("Status: ", status);
                    //setSeconds(10);

                    setAllAnswers(prev => [...allAnswers, status]);

                    let countStatus = allCount;
                    countStatus[testId] = {
                        notAnswered: countNotAnswered,
                        answered: countAnswered,
                        notVisited: countNotVisited,
                        markedAnswered: countMarkedAnswered,
                        markedNotAnswered: countMarkedNotAnswered
                    }

                    setAllCount(countStatus);

                    var tempStatus = statusArr;
                    tempStatus.push(status);
                    setStatusArr(tempStatus);

                    if(testId < (groupArr.length - 1))
                    {
                        //setIndex(0);
                        setTestId(prev => prev + 1);
                        setTest(group[testId+1]);

                    }
                    else
                    {
                        $("#timeUpModal").modal();
                    }
                    // console.log("All: ", allAnswers);
                    // console.log("Counts: ", allCount);
                }
                else
                {
                    setMinutes(minutes - 1);
                    setSeconds(59);
                }
            }
        }, 1000)
        return ()=> {
            clearInterval(myInterval);
        };
    }, [minutes, seconds]);

    const handleSubmit = () => {

        // console.log("Status: ", status);
        //setSeconds(10);

        setAllAnswers(prev => [...allAnswers, status]);

        let countStatus = allCount;
        countStatus[testId] = {
            notAnswered: countNotAnswered,
            answered: countAnswered,
            notVisited: countNotVisited,
            markedAnswered: countMarkedAnswered,
            markedNotAnswered: countMarkedNotAnswered
        }

        setAllCount(countStatus);

        var tempStatus = statusArr;
        tempStatus.push(status);
        setStatusArr(tempStatus);

        if(testId < (groupArr.length - 1))
        {
           // setIndex(0);
            setTestId(prev => prev + 1);
            setTest(group[testId+1]);

        }
        else
        {
            $("#timeUpModal").modal();
        }
        // console.log("All: ", allAnswers);
        // console.log("Counts: ", allCount);

    }

    // const [examOver, setExamOver] = useState(false);

    // const [testId, setTestId] = useState(0);
    // const [test, setTest] = useState(group[0]);

    // var statusArr = Array(test.length);
    // statusArr.fill({});
    // statusArr = statusArr.map((x, i) => ({
    //     id: i,
    //     status: "Not Answered",
    //     user_ans: "",
    //     ans_index: ""
    // }));

    // var countArr = Array(group.length);
    // group.map((g, i) => {

    //     countArr[i] = {
    //         notAnswered: 0,
    //         answered: 0,
    //         notVisited: g.length,
    //         markedAnswered: 0,
    //         markedNotAnswered: 0
    //     }

    // })

    const [sectionNames, setSectionNames] = useState(["Section 1", "Section 2","Section 3"]);

    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const [q_index, setIndex] = useState(0);
    const [ans, setAns] = useState("");

    const [iconUrl, setIconUrl] = useState("/assets/exam_player/gray.webp");
    const [iconStatus, setIconStatus] = useState("Not Visited");

    const [countNotVisited, setCountNotVisited] = useState(initialCount);
    const [countNotAnswered, setCountNotAnswered] = useState(1);
    const [countAnswered, setCountAnswered] = useState(0);
    const [countMarkedNotAnswered, setCountMarkedNotAnswered] = useState(0);
    const [countMarkedAnswered, setCountMarkedAnswered] = useState(0);

    const [ulCountNotVisited, setUlCountNotVisited] = useState(initialCount);
    const [ulCountNotAnswered, setUlCountNotAnswered] = useState(1);
    const [ulCountAnswered, setUlCountAnswered] = useState(0);
    const [ulCountMarkedNotAnswered, setUlCountMarkedNotAnswered] = useState(0);
    const [ulCountMarkedAnswered, setUlCountMarkedAnswered] = useState(0);

    const notVisitedUrl = "/assets/exam_player/gray.webp";
    const notAnsweredUrl = "/assets/exam_player/red.webp";
    const answeredUrl = "/assets/exam_player/green.webp";
    const markNotAnsweredUrl = "/assets/exam_player/blue.webp";
    const markAnsweredUrl = "/assets/exam_player/blue-green.webp";

    // const [isHoverOpen1, setIsHoverOpen1] = useState(false);

    const groupArr = new Array(parseInt(data.total_sections)).fill(0);
    const [ulGroupNo, setUlGroupNo] = useState(-1);

    const markResponse = () => {

        setBegin(false);

        if(test[q_index].questionType === "fillBlanks")
        {
            var mcq_id = 'input[name=mcq' + q_index + ']';
        }
        else
        {
            var mcq_id = 'input[name=mcq' + q_index + ']:checked';
        }
        var icon_id = '#icon-' + (q_index);

        if($(mcq_id).val())
        {
            if(status[q_index].status === "Not Answered")
            {
                setCountNotAnswered(prev => prev - 1);
            }
            else if(status[q_index].status === "Answered")
            {
                setCountAnswered(prev => prev - 1);
            }
            else if(status[q_index].status === "Marked and Not Answered")
            {
                setCountMarkedNotAnswered(prev => prev - 1);
            }


            if(status[q_index].status !== "Marked and Answered")
            {
                setCountMarkedAnswered(prev => prev + 1);
            }

            let newArr = [...status];
            newArr[q_index].user_ans = ans;
            newArr[q_index].status = "Marked and Answered";
            setStatus(newArr);

            // setStatus(prev => {
            //     prev[q_index].user_ans = ans,
            //     prev[q_index].status = "Marked and Answered"
            // });

            $(icon_id).attr("src", markAnsweredUrl);
        }
        else
        {
            if(status[q_index].status === "Not Answered")
            {
                setCountNotAnswered(prev => prev - 1);
            }
            else if(status[q_index].status === "Answered")
            {
                setCountAnswered(prev => prev - 1);
            }
            else if(status[q_index].status === "Marked and Answered")
            {
                setCountMarkedAnswered(prev => prev - 1);
            }

            if(status[q_index].status !== "Marked and Not Answered")
            {
                setCountMarkedNotAnswered(prev => prev + 1);
            }

            let newArr = [...status];
            newArr[q_index].user_ans = "";
            newArr[q_index].status = "Marked and Not Answered";
            setStatus(newArr);

            // setStatus(prev => {
            //     prev[q_index].user_ans = "",
            //     prev[q_index].status = "Marked and Not Answered"
            // });


            $(icon_id).attr("src", markNotAnsweredUrl);
        }

        if((q_index + 1) >= test.length)
        {
            setIndex(0);
        }
        else
        {
            setIndex(prev => prev + 1);
        }

    }

    const clearResponse = () => {

        var mcqid;
        if(test[q_index].questionType === "fillBlanks")
        {
            mcqid = 'input[name=mcq' + q_index + ']';
        }
        else
        {
            mcqid = 'input[name=mcq' + q_index + ']:checked';
        }

        var icon_id = '#icon-' + (q_index);

        // setStatus(prev => {
        //     prev[q_index].user_ans = "",
        //     prev[q_index].status = "Not Answered"
        // });

        if(test[q_index].questionType === "fillBlanks")
        {
            $(mcqid).val("");
        }
        else
        {
            $(mcqid).prop('checked',false);
        }

        $(icon_id).attr("src", notAnsweredUrl);

        if(status[q_index].status === "Answered")
        {
            setCountAnswered(prev => prev - 1);
        }
        else if(status[q_index].status === "Marked and Answered")
        {
            setCountMarkedAnswered(prev => prev - 1);
        }
        else if(status[q_index].status === "Marked and Not Answered")
        {
            setCountMarkedNotAnswered(prev => prev - 1);
        }

        if(status[q_index].status !== "Not Answered")
        {
            setCountNotAnswered(prev => prev + 1);
        }
        let newArr = [...status];
        newArr[q_index].user_ans = "";
        newArr[q_index].ans_index = "";
        newArr[q_index].status = "Not Answered";
        setStatus(newArr);

    }

    const saveResponse = () => {

        setBegin(false);

        var mcq_id;
        if(test[q_index].questionType === "fillBlanks")
        {
            mcq_id = 'input[name=mcq' + q_index + ']';
        }
        else
        {
            mcq_id = 'input[name=mcq' + q_index + ']:checked';
        }

        var icon_id = '#icon-' + (q_index);

        if(status[q_index].status === "Not Answered")
        {
            setCountNotAnswered(prev => prev - 1);
        }
        else if(status[q_index].status === "Marked and Answered")
        {
            setCountMarkedAnswered(prev => prev - 1);
        }
        else if(status[q_index].status === "Marked and Not Answered")
        {
            setCountMarkedNotAnswered(prev => prev - 1);
        }

        if(status[q_index].status !== "Answered")
        {
            setCountAnswered(prev => prev + 1);
        }

        let newArr = [...status];

        if($(mcq_id).val())
        {
            newArr[q_index].user_ans = $(mcq_id).val();
        }

        newArr[q_index].status = "Answered";
        setStatus(newArr);

            // setStatus(prev => {
            //     prev[q_index].user_ans = ans,
            //     prev[q_index].status = "Answered"
            // });

        $(icon_id).attr("src", answeredUrl);

        if((q_index + 1) >= test.length)
        {
            setIndex(0);
        }
        else
        {
            setIndex(prev => prev + 1);
        }
    }

    useEffect(() => {

        $(".s-group-ul").hide();

        // $(".btn-submit").prop("disabled", true);
        // $(".btn-submit").css("cursor", "not-allowed");

        $("#group-" + testId).addClass("active");
        $("group-icon-" + testId).addClass("icon-active");

        var temp = testId - 1;
        $("#group-" + temp).removeClass("active");
        $("group-icon-" + temp).removeClass("icon-active");

        setBegin(true);

        // var tempStatus = statusArr;
        // tempStatus.push(status);
        // setStatusArr(tempArr);

        var tempStatusArr = Array(test.length);
        tempStatusArr.fill({});
        tempStatusArr = tempStatusArr.map((x, i) => ({
            id: i,
            status: "Not Answered",
            user_ans: "",
            ans_index: ""
        }));

        setStatus(tempStatusArr);

        // setStatus(statusArr);

        var icon_id = '#icon-0';
        $(icon_id).attr("src", notAnsweredUrl);
        

        console.log("Question Type: ", test[0].questionType);
        if(test[0].questionType === "fillBlanks")
        {
            var mcqid = 'input[name=mcq0]';
            $(mcqid).val("");    
        }
        else
        {
            var mcqid = 'input[name=mcq0]';
            $(mcqid).prop('checked',false);
        }

        let tempArr = new Array(test.length).fill(0);

        tempArr.map((t, i) => {

            if(i > 0)
            {
                let t_icon_id = "#icon-" + i;
                $(t_icon_id).attr("src", notVisitedUrl);
            }

        });



        setIconUrl(notVisitedUrl);
        setIconStatus("Not Visited");

        setCountNotVisited(test.length - 1);
        setCountNotAnswered(1);
        setCountAnswered(0);
        setCountMarkedAnswered(0);
        setCountMarkedNotAnswered(0);
        setIndex(0);

        setMinutes(data.section_time[testId]);
        setSeconds(0);
        // setTime(data.section_time[testId]);


        // var mcqid = 'input[name=mcq' + q_index + ']';
        // var icon_id = '#icon-' + (q_index);

        // $(mcqid).prop('checked',false);
        // $(icon_id).attr("src", notAnsweredUrl);

        setAns("");

        // console.log("Indexxxxxxxxxxxxx: " + testId);

    }, [test]);

    useEffect(() => {

        var icon_id = '#icon-' + (q_index);
        var mcqid;

        if(test[q_index].questionType === "fillBlanks")
        {
            mcqid = 'input[name=mcq' + q_index + ']';
        }
        else
        {
            mcqid = 'input[name=mcq' + q_index + ']:checked';
        }

        if(begin === false)
        {
            if(status[q_index].status === "Not Answered" || status[q_index].status === "Marked and Not Answered")
            {
                if(test[q_index].questionType === "fillBlanks")
                {
                    // var mcqid = 'input[name=mcq' + q_index + ']';
                    $(mcqid).val("");
                }
                else
                {
                    // var mcqid = 'input[name=mcq' + q_index + ']';
                    $(mcqid).prop('checked',false);
                }
            }
            else
            {
                if(test[q_index].questionType === "fillBlanks")
                {
                    // var mcqid = 'input[name=mcq' + q_index + ']';
                    $(mcqid).val(status[q_index].user_ans);
                }
                else
                {
                    if(status[q_index].ans_index === "")
                    {
                        $(mcqid).prop('checked',false);
                    }
                    $(status[q_index].ans_index).prop('checked',true);
                }
            }

            if(status[q_index].status === "Answered")
            {
                $(icon_id).attr("src", answeredUrl);
            }
            else if(status[q_index].status === "Marked and Answered")
            {
                $(icon_id).attr("src", markAnsweredUrl);
            }
            else if(status[q_index].status === "Marked and Not Answered")
            {
                $(icon_id).attr("src", markNotAnsweredUrl);
            }
            else if(status[q_index].status === "Not Answered" && countNotVisited > 0 && countNotAnswered < test.length)
            {
                $(icon_id).attr("src", notAnsweredUrl);
                setCountNotAnswered(prev => prev + 1);
                setCountNotVisited(prev => prev - 1);
            }

        }
        else
        {
            $('#icon-0').attr("src", notAnsweredUrl);
            if(test[0].questionType === "fillBlanks")
            {
                let qid = 'input[name=mcq0]';
                $(qid).val("");    
            }
            else
            {
                var qid = 'input[name=mcq0]';
                $(qid).prop('checked',false);
            }
        }

    }, [q_index]);

    const gotoQuestion = (index) => {

        setBegin(false);
        setIndex(index);

    }

    const setAnswer = (event) => {

        var name = event.target.name;
        var value = event.target.value;

        var mcq_id = 'input[name=mcq' + q_index + ']:checked';
        var opt_index = "#" + $(mcq_id).prop("id");

        let newArr = [...status];
        newArr[q_index].ans_index = opt_index;
        setStatus(newArr);

        setAns(value);

    }

    const setFillBlankAnswer = (event) => {

        var name = event.target.name;
        var value = event.target.value;

        // console.log(q_index);
        var mcq_id = 'input[name=mcq' + q_index + ']';
        let newArr = [...status];

        newArr[q_index].user_ans = value;
        setStatus(newArr);

        setAns(value);

        // console.log(status);

    }

    // const timesUp = (isTimeLeft) => {

    //     console.log(isTimeLeft);
    //     if(isTimeLeft === true)
    //     {
    //         console.log(statusArr);
    //         setTime(20000);
    //         setTestId(prev => prev + 1);
    //         setTest(group[testId+1]);
    //     }
    // }

    // useEffect(() => {


    //     console.log("end");
    //     $('script').each(function() {


    //     console.log("out");
    //         if (this.src === 'https://embed.tawk.to/5f8371244704467e89f68498/default') {

    //     console.log("in");
    //             this.parentNode.removeChild( this );
    //         }

    //     console.log("outin");
    //     });
    //     console.log("end");

    // })

    const seeGroupStatus = (groupNo, section) => {

        $(".s-group-ul").show();

        if(section === "section")
        {
            $(".dropdown-title").html("Section Name");
            $(".s-group-ul").css("top", 120);
            $(".s-group-ul").css("left", 5);

        }
        else
        {

            $(".dropdown-title").html("Group " + (groupNo + 1));
            $(".s-group-ul").css("top", "80%");
            $(".s-group-ul").css("left", (groupNo)*105);
        }

        setUlGroupNo(groupNo);

        if(groupNo === testId)
        {
            setUlCountAnswered(countAnswered);
            setUlCountNotAnswered(countNotAnswered);
            setUlCountNotVisited(countNotVisited);
            setUlCountMarkedAnswered(countMarkedAnswered);
            setUlCountMarkedNotAnswered(countMarkedNotAnswered);
        }
        else
        {
            setUlCountAnswered(allCount[groupNo].answered);
            setUlCountNotAnswered(allCount[groupNo].notAnswered);
            setUlCountNotVisited(allCount[groupNo].notVisited);
            setUlCountMarkedAnswered(allCount[groupNo].markedAnswered);
            setUlCountMarkedNotAnswered(allCount[groupNo].markedNotAnswered);
        }

    }

    // if(fetched)
    // {
    //     return <div>Loading...</div>
    // }
    // else
    // {
    if(examOver)
    {
        return <ExamSummary test={group} sections={data.section_names} status={allCount} ansStatus={statusArr} maxMarks={data.total_marks}></ExamSummary>
    }

    else
    {
        return(

            <React.Fragment>
                <style>
                {`
                    .s-dropdown-ul{
                        box-shadow: 6px 6px 10px #aaaaaa;
                        padding: 0;
                        display: flex;
                        flex-direction: column;
                        position: absolute;
                        background-color: white;
                        width: fit-content;
                        right: 0;
                        top: 80%;
                        z-index: 1;
                    }
                    .s-group-ul{
                        box-shadow: 6px 6px 10px #aaaaaa;
                        padding-left: 1%;
                        display: flex;
                        flex-direction: column;
                        position: absolute;
                        background-color: white;
                        width: 20%;
                        left: 0;
                        top: 80%;
                        z-index: 1;
                    }
                    .dropdown-title
                    {
                        border-bottom: 1px solid;
                        padding-bottom: 5px;
                        width: 90%;
                    }
                    .top-numbers, .icon-pack
                    {
                        visibility: hidden;
                    }    
                    .dashboard-nav
                    {
                        background-color: #192f5a;
                    }
                    .logo
                    {
                        width: 7%;
                        border-right: 1px solid white;
                    }
                    .welcomeText
                    {
                        font-weight: bold;
                    }
                    .div-2
                    {
                        background-color: #000;
                        color: #fff;
                        height: fit-content;
                        font-size: 13px;
                    }
                    .text-container
                    {
                        width: 84%;
                        margin-left: 0;
                    }
                    
                    .q-col
                    {
                        height: 53vh;
                        overflow-y: scroll;
                    }
                    .group-col
                    {   
                        background-color: lightgray;
                        display: inline;
                    }
                    .time-col
                    {
                        border-bottom: 1px solid rgba(0, 0, 0, .3);
                    }
                    .section-col
                    {
                        border-bottom: 1px solid rgba(0, 0, 0, .3);
                        width: fit-content;
                    }
                    .marking-col
                    {
                        border-bottom: 1px solid rgba(0, 0, 0, .3);
                    }
                    .empty-col
                    {   
                        background-color: #192f5a;
                        height: 25px;
                    }
                    .invisible
                    {
                        visibility: hidden;
                    }
                    .btn-col
                    {
                        border-top: 1px solid rgba(0, 0, 0, .3); 
                        position: fixed;
                        bottom: 0;
                        width: 84%;
                        height: 8vh;
                    }
                    .btn-section, .btn-other, .btn-other:hover
                    {
                        background-color: #fff;
                        color: #000;
                        font-size: 14px;
                        border: 1px solid rgba(0, 0, 0, .3);
                    }
                    .active, .btn-save, .btn-save:hover
                    {
                        background-color: #007bff;
                        color: #fff;
                    }
                    .icon-active
                    {
                        color: #fff;
                    }
                    .text
                    {
                        font-size: 13px;
                    }
                    .time-text
                    {
                        margin-left: auto;
                    }
                    .section-text
                    {
                    margin-left: auto;
                    }
                    .calc-icon
                    {
                        margin-left: auto;
                    }
                    .section-name
                    {
                        background-color: #192f5a;
                        color: #fff;
                        width: fit-content;
                        padding: 1px;
                        padding-left: 1%;
                        padding-right: 1%;
                        margin: 0;
                    }

                    .profile-container
                    {
                        width: 16%;
                        height: 100%;
                    }
                    .profile-col
                    {
                        float: right;
                        border: 1px solid;
                        // height: 87vh;
                    }
                    .profile-img
                    {
                        width: 100%;
                        height: 100px;
                    }
                    .profile-text
                    {
                        position: absolute;
                        bottom: 0;
                        font-size: 14px;
                        color: #192f5a;
                    }
                    .submit-btn-col
                    {
                        //border-top: 1px solid rgba(0, 0, 0, .3); 
                        position: fixed;
                        bottom: 0;
                        width: 18%;
                        height: 8vh;
                        background-color: #e2e2e2;
                    }

                    .icon-card
                    {
                        width: 25%;
                        height: 80%;
                        border: none;
                    }

                    .icon-card-last
                    {
                        width: 12%;
                        height: 80%;
                        border: none;
                    }
                    
                    .q-icon-card
                    {
                        width: 100%;
                        height: 7%;
                        border: none; 
                    }
                    
                    .group-icon-card
                    {
                        width: 10%;
                        height: 80%;
                        border: none;
                    }

                    img
                    {
                        width: 100%;
                    }
                    .ans-text
                    {
                        font-size: 10px;
                        margin: 0;
                    }
                    .card-img-overlay
                    {
                        bottom: 20px;
                    }
                    .modal
                    {
                        width: 85%;
                        height: 100vh;
                        margin: auto;
                    }
                    .inst-modal-dialog
                    {
                        max-width: 100%;
                        max-height: 100%;
                        margin: auto;
                        padding: 0;
                    }
                    .q-img
                    {
                        width: 25%;
                    }
                    `}
                </style>
                <div className="container-fluid dashboard-nav ">
                    <div className="row text-white">
                        <div className="col-12 d-flex pl-4">
                            <img src="/assets/images/qds-logo.webp" alt="Logo" className="logo pr-3"></img>
                            <h6 className="welcomeText align-self-center pl-3">{data.name}</h6>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 div-2">
                            <p className="float-right mb-2 mt-2">
                                <span className="fa fa-file-text text-success pr-2"  data-toggle="modal" data-target="#questionModal"></span>{' '}Question Paper
                                <span className="fa fa-info-circle text-info pl-3 pr-2" data-toggle="modal" data-target="#instModal"></span>{' '}Instructions
                            </p>
                        </div>
                    </div>
                </div>
                <div className="question-container d-flex">
                    <div className="container-fluid text-container">
                        <div className="row">
                            <div className="col-12 group-col  p-1">
                                <p className="m-0 float-left">
                                    <span>
                                        {groupArr.map((g, i) => {

                                            return(
                                                <span>
                                                <button className="btn btn-section  mr-2 mb-1" id={"group-" + i} onMouseOver={() => seeGroupStatus(i)}  onMouseOut={() => {$(".s-group-ul").hide()}}>
                                                    Group { i + 1 +" "}
                                                    <span id={"group-icon-" + i} className="fa fa-info-circle fa-lg "></span>
                                                </button>
                                                {/* {isHoverOpen1 && ( */}
                                                <ul className="s-group-ul" style={{left: "5px"}}>
                                                    <div className="icon-col dropdown-title">
                                                        {"Group " + (ulGroupNo + 1)}
                                                    </div>
                                                    <div className="icon-col d-flex pt-2 pr-0">
                                                        <div className="card group-icon-card mr-1">
                                                            <img className="card-img" src="/assets/exam_player/green.webp" alt="Green Icon" className="icon"></img>
                                                            <div className="card-img-overlay d-flex p-1 text-white">
                                                                <p className="m-auto text">{ulCountAnswered}</p>
                                                            </div>
                                                        </div>
                                                        <p className="ans-text">Answered</p>
                                                    </div>
                                                    <div className="icon-col d-flex pt-2 pl-0">
                                                        <div className="card group-icon-card mr-1">
                                                            <img className="card-img" src="/assets/exam_player/red.webp" alt="Red Icon" className="icon"></img>
                                                            <div className="card-img-overlay d-flex p-0 text-white">
                                                                <p className="m-auto text">{ulCountNotAnswered}</p>
                                                            </div>
                                                        </div>
                                                        <p className="ans-text">Not Answered</p>
                                                    </div>
                                                    <div className="icon-col d-flex pt-2 pr-0">
                                                        <div className="card group-icon-card mr-1">
                                                            <img className="card-img" src="/assets/exam_player/gray.webp" alt="Gray Icon" className="icon"></img>
                                                            <div className="card-img-overlay d-flex p-0 text-white">
                                                                <p className="m-auto text">{ulCountNotVisited}</p>
                                                            </div>
                                                        </div>
                                                        <p className="ans-text">Not Visited</p>
                                                    </div>
                                                    <div className="icon-col d-flex pt-2 pl-0 pr-0">
                                                        <div className="card group-icon-card mr-1">
                                                            <img className="card-img" src="/assets/exam_player/blue.webp" alt="Blue Icon" className="icon"></img>
                                                            <div className="card-img-overlay d-flex p-0 text-white">
                                                                <p className="m-auto text">{ulCountMarkedNotAnswered}</p>
                                                            </div>
                                                        </div>
                                                        <p className="ans-text">Marked for Review</p>
                                                    </div>
                                                    <div className="icon-col d-flex pt-2 pr-0 pb-2">
                                                        <div className="card group-icon-card mr-1">
                                                            <img className="card-img" src="/assets/exam_player/blue-green.webp" alt="Blue-Green Icon" className="icon"></img>
                                                            <div className="card-img-overlay d-flex p-1 text-white">
                                                                <p className="m-auto text">{ulCountMarkedAnswered}</p>
                                                            </div>
                                                        </div>
                                                        <p className="ans-text">Answered &amp; Marked for Review <br/> (Will be considered for evaluation)</p>
                                                    </div>
                                                </ul>
                                                {/* )} */}
                                            </span>
                                            )
                                            })
                                        }

                                    </span>
                                </p>
                                <div className="s-dropdown-container float-right" >
                                    <span onClick={() => setIsDropdownOpen(!isDropdownOpen)} ><span className="fa fa-calculator text-success fa-lg float-right h-100 pt-2 pb-2"><i className="fa fa-sort-down float-right"></i></span> </span>
                                    {isDropdownOpen && (
                                        <ul className="s-dropdown-ul" >
                                            <Calculator dropdown={setIsDropdownOpen}></Calculator>
                                        </ul>
                                    )}
                                </div>
                                {/* <p className="float-right"> */}
                                    {/* <span className="fa fa-calculator text-success fa-lg float-right h-100 pt-2 pb-2"></span> */}
                                {/* </p> */}
                            </div>
                            <div className="col-12 time-col pl-2">
                                <p className="text">
                                    <span className="float-left  mt-2 mb-2">Section</span>
                                    <span className="text float-right time-text mt-2 mb-2">
                                        <strong>
                                            Time Left: {" "}
                                            { minutes === 0 && seconds === 0
                                                ? <span> 00:00</span>
                                                : <span> {minutes < 10 ? `0${minutes}` : minutes}:{seconds < 10 ?  `0${seconds}` : seconds}</span>
                                            }
                                            {/* <Countdown timesUp={timesUp} newTime={time}></Countdown>  */}
                                        </strong>
                                    </span>
                                </p>
                            </div>
                            <div className="col-12 section-col pl-2">
                                <div className="section-name">
                                    <p className="text  mb-2 mt-2" onMouseOver={() => seeGroupStatus(testId, "section")} onMouseOut={() => {$(".s-group-ul").hide()}}>{data.section_names[testId]} <span className="fa fa-info-circle fa-lg text-info"></span></p>
                                </div>
                            </div>
                            <div className="col-12 marking-col pl-2">
                                <p className="float-left text text-danger mb-2 mt-2"><strong>Question Type: {test[q_index].questionType === 'fillBlanks' ? "Fill up the blanks" : "Multiple Choice Questions"}</strong></p>
                                <p className="float-right text mb-2 mt-2"><strong>Mark(s) for correct answer {test[q_index].marks_plus} | Negative Marks {test[q_index].marks_minus}</strong></p>
                            </div>
                            <div className="col-12 empty-col ">
                                <p className="invisible">
                                    Empty Col
                                </p>
                            </div>
                            <div className="col-12 q-col">
                                <div>
                                    <h6 className="mt-2">Question {q_index + 1}</h6>
                                    <hr className="m-0"></hr>
                                    <p>{test[q_index].questionText}</p>
                                    {
                                        test[q_index].questionType === "fillBlanks" && (

                                            <form id={"questionForm-" + q_index}>
                                                <input onChange={setFillBlankAnswer} type="text" name={"mcq" + q_index} id={"opt1-" + q_index}></input>
                                            </form>

                                        )
                                    }
                                    {
                                        test[q_index].questionType !== "fillBlanks" && (


                                        <form id={"questionForm-" + q_index}>
                                            <input onChange={setAnswer} type="radio" name={"mcq" + q_index} id={"opt1-" + q_index} value="1"></input>
                                            {" "}
                                            <label htmlFor={"opt1-" + q_index}>{test[q_index].options.opt1}</label><br />

                                            <input onChange={setAnswer} type="radio" name={"mcq" + q_index} id={"opt2-" + q_index} value="2"></input>
                                            {" "}
                                            <label htmlFor={"opt2-" + q_index}>{test[q_index].options.opt2}</label><br />

                                            <input onChange={setAnswer} type="radio" name={"mcq" + q_index} id={"opt3-" + q_index} value="3"></input>
                                            {" "}
                                            <label htmlFor={"opt3-" + q_index}>{test[q_index].options.opt3}</label><br />

                                            <input onChange={setAnswer} type="radio" name={"mcq" + q_index} id={"opt4-" + q_index} value="4"></input>
                                            {" "}
                                            <label htmlFor={"opt4-" + q_index}>{test[q_index].options.opt4}</label><br />

                                            {
                                                test[q_index].optArr.map((o, k) => {
                                                    return(
                                                        <div>
                                                            <input onChange={setAnswer} type="radio" name={"mcq" + q_index} id={"opt" + (5+k) + "-" + q_index} value={5 + k}></input>
                                                            {" "}
                                                            <label htmlFor={"opt" + (5+k) + "-" + q_index}>{test[q_index].options["opt" + (5+k)]}</label><br />
                                                        </div>
                                                    )

                                                })
                                            }
                                        </form>

                                        )
                                    }
                                </div>
                            {/* <img src="/assets/images/enquire-now.webp" className="q-img" alt="Image for Question"></img> */}
                            </div>
                            <div className="col-12 btn-col">
                                <button className="btn btn-other mt-2 mr-2" onClick={() => markResponse()}>Mark for Review &amp; Next</button>
                                <button className="btn btn-other mt-2 ml-2" onClick={() => clearResponse()}>Clear Response</button>
                                <button className="btn btn-save float-right mt-2" onClick={() => saveResponse()}>Save &amp; Next</button>
                            </div>
                        </div>
                    </div>
                    <div className="container profile-container">
                        <div className="row">
                            <div className="col-5 profile-col d-flex align-items-center">
                                <img className="profile-img " src="/assets/exam_player/profile.webp" alt="Profile"></img>
                            </div>
                            <div className="col-7">
                                <h6>Username</h6>
                                <a href="#" className="profile-text">Profile</a>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-6 icon-col d-flex pt-2 pr-0">
                                <div className="card icon-card mr-1">
                                    <img className="card-img" src="/assets/exam_player/green.webp" alt="Green Icon" className="icon"></img>
                                    <div className="card-img-overlay d-flex p-1 text-white">
                                        <p className="m-auto text">{countAnswered}</p>
                                    </div>
                                </div>
                                <p className="ans-text">Answered</p>
                            </div>
                            <div className="col-6 icon-col d-flex pt-2 pl-0">
                                <div className="card icon-card mr-1">
                                    <img className="card-img" src="/assets/exam_player/red.webp" alt="Red Icon" className="icon"></img>
                                    <div className="card-img-overlay d-flex p-0 text-white">
                                        <p className="m-auto text">{countNotAnswered}</p>
                                    </div>
                                </div>
                                <p className="ans-text">Not Answered</p>
                            </div>
                            <div className="col-6 icon-col d-flex pt-2 pr-0">
                                <div className="card icon-card mr-1">
                                    <img className="card-img" src="/assets/exam_player/gray.webp" alt="Gray Icon" className="icon"></img>
                                    <div className="card-img-overlay d-flex p-0 text-white">
                                        <p className="m-auto text">{countNotVisited}</p>
                                    </div>
                                </div>
                                <p className="ans-text">Not Visited</p>
                            </div>
                            <div className="col-6 icon-col d-flex pt-2 pl-0 pr-0">
                                <div className="card icon-card mr-1">
                                    <img className="card-img" src="/assets/exam_player/blue.webp" alt="Blue Icon" className="icon"></img>
                                    <div className="card-img-overlay d-flex p-0 text-white">
                                        <p className="m-auto text">{countMarkedNotAnswered}</p>
                                    </div>
                                </div>
                                <p className="ans-text">Marked for Review</p>
                            </div>
                            <div className="col-12 icon-col d-flex pt-2 pr-0 pb-2">
                                <div className="card icon-card-last mr-1">
                                    <img className="card-img" src="/assets/exam_player/blue-green.webp" alt="Blue-Green Icon" className="icon"></img>
                                    <div className="card-img-overlay d-flex p-1 text-white">
                                        <p className="m-auto text">{countMarkedAnswered}</p>
                                    </div>
                                </div>
                                <p className="ans-text">Answered &amp; Marked for Review <br/> (Will be considered for evaluation)</p>
                            </div>

                            <div className="col-12 empty-col text-white">
                                <p className="text">Section Name</p>
                            </div>
                            <div className="col-12">
                                <p className="text p-0 m-0"><strong>Choose a question</strong></p>
                            </div>
                            <br />
                            {
                                test.map((q,i) => {

                                    return(
                                        <div className="col-3 mb-2">

                                            <div className="card q-icon-card" onClick={() => gotoQuestion(i)}>
                                                <img className="card-img status-icons" id={"icon-" + (i)} src={iconUrl} alt="Icon" className="icon"></img>
                                                <div className="card-img-overlay d-flex p-1 ">
                                                    <p className="m-auto text text-white">{i+1}</p>
                                                </div>
                                            </div>

                                        </div>
                                    );
                                })
                            }

                        </div>
                        <div className="row">
                            <div className="col-12 submit-btn-col">
                                <button className="btn btn-other mt-2">Save for Later</button>
                                <button onClick={handleSubmit} className="btn btn-save btn-submit mt-2 ml-2">Submit</button>
                            </div>
                        </div>
                    </div>
                    <div className="modal fade" id="instModal" role="dialog">
                        <div className="modal-dialog inst-modal-dialog">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h6 className="modal-title">Instructions</h6>
                                    <button style={{ color: '#77bf43', textShadow: 'none', opacity: 1 }} type="button" className="close" data-dismiss="modal">&times;</button>
                                </div>
                                <div className="modal-body">
                                    <InstructionsText data={data}></InstructionsText>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="modal fade" id="questionModal" role="dialog">
                        <div className="modal-dialog inst-modal-dialog">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h6 className="modal-title">Question Paper</h6>
                                    <button style={{ color: '#77bf43', textShadow: 'none', opacity: 1 }} type="button" className="close" data-dismiss="modal">&times;</button>
                                </div>
                                <div className="modal-body">
                                    <QuestionPaper questions={data.questions[testId]} section={data.section_names[testId]}></QuestionPaper>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="modal fade" id="timeUpModal" role="dialog">
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h6 className="modal-title">Exam Time Up</h6>
                                </div>
                                <div className="modal-body text-center">
                                    <p>Time Up! Click Ok to Submit Scores</p>
                                    <a href="#" onClick={() => setExamOver(true)}  className="btn btn-primary mt-3">OK</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </React.Fragment>

        );
    }
// }
}




export default ExamPlatform;



/* <a className="btn btn-section mr-2 mb-1" onMouseMove={() => setIsHoverOpen1(!isHoverOpen1)} >
        Group 1 {" "}
        <span className="fa fa-info-circle fa-lg text-info"></span>
    </a>
    {isHoverOpen1 && (
        <ul className="s-group-ul" style={{left: "5px"}}>
            <div className="icon-col dropdown-title">
                Group 1
            </div>
            <div className="icon-col d-flex pt-2 pr-0">
                <div className="card group-icon-card mr-1">
                    <img className="card-img" src="/assets/exam_player/green.png" alt="Green Icon" className="icon"></img>
                    <div className="card-img-overlay d-flex p-1 text-white">
                        <p className="m-auto text">{countAnswered}</p>
                    </div>
                </div>
                <p className="ans-text">Answered</p>
            </div>
            <div className="icon-col d-flex pt-2 pl-0">
                <div className="card group-icon-card mr-1">
                    <img className="card-img" src="/assets/exam_player/red.png" alt="Red Icon" className="icon"></img>
                    <div className="card-img-overlay d-flex p-0 text-white">
                        <p className="m-auto text">{countNotAnswered}</p>
                    </div>
                </div>
                <p className="ans-text">Not Answered</p>
            </div>
            <div className="icon-col d-flex pt-2 pr-0">
                <div className="card group-icon-card mr-1">
                    <img className="card-img" src="/assets/exam_player/gray.png" alt="Gray Icon" className="icon"></img>
                    <div className="card-img-overlay d-flex p-0 ">
                        <p className="m-auto text">{countNotVisited}</p>
                    </div>
                </div>
                <p className="ans-text">Not Visited</p>
            </div>
            <div className="icon-col d-flex pt-2 pl-0 pr-0">
                <div className="card group-icon-card mr-1">
                    <img className="card-img" src="/assets/exam_player/blue.png" alt="Blue Icon" className="icon"></img>
                    <div className="card-img-overlay d-flex p-0 text-white">
                        <p className="m-auto text">{countMarkedNotAnswered}</p>
                    </div>
                </div>
                <p className="ans-text">Marked for Review</p>
            </div>
            <div className="icon-col d-flex pt-2 pr-0 pb-2">
                <div className="card group-icon-card mr-1">
                    <img className="card-img" src="/assets/exam_player/blue-green.png" alt="Blue-Green Icon" className="icon"></img>
                    <div className="card-img-overlay d-flex p-1 text-white">
                        <p className="m-auto text">{countMarkedAnswered}</p>
                    </div>
                </div>
                <p className="ans-text">Answered &amp; Marked for Review <br/> (Will be considered for evaluation)</p>
            </div>
        </ul>
    )}

    <a className="btn btn-section mr-2 mb-1">
        Group 2 {" "}
        <span className="fa fa-info-circle fa-lg text-info"></span>

        <div className="s-dropdown-container float-right" >
            <span onClick={() => setIsDropdownOpen(!isDropdownOpen)} ><span className="fa fa-calculator text-success fa-lg float-right h-100 pt-2 pb-2"><i className="fa fa-sort-down float-right"></i></span> </span>
            {isDropdownOpen && (
                <ul className="s-dropdown-ul" >
                    <Calculator dropdown={setIsDropdownOpen}></Calculator>
                </ul>
            )}
        </div>
    </a>
    <a className="btn btn-section mr-2 mb-1">
        Group 3 {" "}
        <span className="fa fa-info-circle fa-lg text-info"></span>
        <div className="s-dropdown-container float-right" >
            <span onClick={() => setIsDropdownOpen(!isDropdownOpen)} ><span className="fa fa-calculator text-success fa-lg float-right h-100 pt-2 pb-2"><i className="fa fa-sort-down float-right"></i></span> </span>
            {isDropdownOpen && (
                <ul className="s-dropdown-ul" >
                    <Calculator dropdown={setIsDropdownOpen}></Calculator>
                </ul>
            )}
        </div>
    </a> */


    /*

    const url = useRouter();
    const exam = url.query.exam;
    const testName = url.query.test;

    const [examOver, setExamOver] = useState(false);


    const [group, setGroup] = useState([]);

    const [testId, setTestId] = useState(0);
    const [test, setTest] = useState(group[0]);

    const [statusArr, setStatusArr] = useState([]);
    const [countArr, setCountArr] = useState([]);

    useEffect(() => {

        mockTestFireStore.collection(exam).doc(testName).get()
        .then((doc) => {

            var data = doc.data();
            var questions = Object.values(data.questions);
            setGroup(questions);

            console.log(questions);

            var tempStatusArr = Array(test.length);
            tempStatusArr.fill({});
            tempStatusArr = tempStatusArr.map((x, i) => ({
                id: i,
                status: "Not Answered",
                user_ans: "",
                ans_index: ""
            }));

            setStatusArr(tempStatusArr);

            var tempCountArr = Array(group.length);
            group.map((g, i) => {

                tempCountArr[i] = {
                    notAnswered: 0,
                    answered: 0,
                    notVisited: g.length,
                    markedAnswered: 0,
                    markedNotAnswered: 0
                }

            });

            setCountArr(tempCountArr);


        })

    }, []);

    */

    /*

    const tgroup = [
        [
            {
                questionText: "QuestionText 1",
                option_1: "Option 1.1",
                option_2: "Option 2",
                option_3: "Option 3",
                option_4: "Option 4",
                answer: "Option 1",
                user_ans: "",
                status: "Not Answered"
            },
            {
                questionText: "QuestionText 2",
                option_1: "Option 1.2",
                option_2: "Option 2",
                option_3: "Option 3",
                option_4: "Option 4",
                answer: "Option 1",
                user_ans: "",
                status: "Not Answered"
            },
            {
                questionText: "QuestionText 3",
                option_1: "Option 1.3",
                option_2: "Option 2",
                option_3: "Option 3",
                option_4: "Option 4",
                answer: "Option 1",
                user_ans: "",
                status: "Not Answered"
            },
            {
                questionText: "QuestionText 4",
                option_1: "Option 1.4",
                option_2: "Option 2",
                option_3: "Option 3",
                option_4: "Option 4",
                answer: "Option 1",
                user_ans: "",
                status: "Not Answered"
            },
        ],

        [
            {
                question: "Question 2.1",
                option_1: "Option 1.1",
                option_2: "Option 2",
                option_3: "Option 3",
                option_4: "Option 4",
                answer: "Option 1",
                user_ans: "",
                status: "Not Answered"
            },
            {
                question: "Question 2.2",
                option_1: "Option 1.2",
                option_2: "Option 2",
                option_3: "Option 3",
                option_4: "Option 4",
                answer: "Option 1",
                user_ans: "",
                status: "Not Answered"
            },
            {
                question: "Question 2.3",
                option_1: "Option 1.3",
                option_2: "Option 2",
                option_3: "Option 3",
                option_4: "Option 4",
                answer: "Option 1",
                user_ans: "",
                status: "Not Answered"
            }
        ],

        [
            {
                question: "Question 3.1",
                option_1: "Option 1.1",
                option_2: "Option 2",
                option_3: "Option 3",
                option_4: "Option 4",
                answer: "Option 1",
                user_ans: "",
                status: "Not Answered"
            },
            {
                question: "Question 3.2",
                option_1: "Option 1.2",
                option_2: "Option 2",
                option_3: "Option 3",
                option_4: "Option 4",
                answer: "Option 1",
                user_ans: "",
                status: "Not Answered"
            }
        ]
    ];
     */
