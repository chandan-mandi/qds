import React from 'react';

function QuestionPaper(props)
{

    var questions = props.questions;
    if(questions)
    {
        questions = Object.values(questions);
    }
    return(

        <React.Fragment>
            <style>
            {`
                .q-text
                {
                    font-size: 16px;
                }
                .q-subtext
                {
                    font-size: 12px;
                }
            `}
            </style>
            <div className="container-fluid">
                <div className="row">
                    <h4>Section: {props.section}</h4>
                </div>
                {
                    questions != null && questions.length > 0 && questions.map((question, i) => {

                        return(

                            <div className="row">
                                <div className="col-12">
                                    <p className="q-text">
                                        Q-{i+1}) 
                                        {" " + question.questionText}
                                    </p>
                                </div>
                                <div className="col-12">
                                    <p className="q-subtext">
                                        <span>Question Type: {question.questionType === "fillBlanks" ? "Fill up the blanks" : "Multiple Choice Question"}</span> 
                                        <br/>
                                        <span>Marks for correct answer: {question.marks_plus} | Negative marks: {question.marks_minus}</span>
                                    </p> 
                                </div>
                            </div>


                        )

                    })
                }
            </div>

        </React.Fragment>

    )
}

export default QuestionPaper;