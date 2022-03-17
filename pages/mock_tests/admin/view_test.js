import { withRouter } from 'next/router';
import React from 'react';
import { Component } from 'react';
import { ListGroupItem } from 'react-bootstrap';
import { mockTestFireStore } from '../firestore';

class ViewTest extends Component
{

    constructor(props)
    {
        super(props);
        this.state = {

            name: "",
            course: "",
            n_sections: 0,

            section_names: [],
            section_time: [],
            section_n_questions: [],

            total_questions: 0,
            total_time: 0,
            total_marks: 0,

            questionsArr : [],

            sectionArr : [],

        }

        
    }

    componentDidMount()
    {

        const course = this.props.router.query.course;
        const testname = this.props.router.query.name;

        mockTestFireStore.collection(course).doc(testname).get()
        .then((doc) => {

            var data = doc.data();
            
            var questions = Object.values(data.questions);
            
            this.setState({

                name: data.name,
                course: data.course,
                section_names: data.section_names,
                section_n_questions: data.section_n_questions,
                section_time: data.section_time,
                n_sections: data.total_sections,
                total_marks: data.total_marks,
                total_questions: data.total_questions,
                total_time: data.total_time,
                questionsArr: questions

            });

        })
        .then(() => {
            
            var tempArr = new Array(this.state.n_sections).fill(0);
            this.setState({sectionArr: tempArr});
            
            console.log(this.state)
        })
        .catch((err) => alert("Error Fetching Details: " + err));

        console.log(this.state);
    }

    render(){

        return(

            <React.Fragment>
                <style>
                {`
                    .dashboard-nav
                    {
                        background-color: #192f5a;
                        transition: all .5s;
                    }
                    .logo
                    {
                        width: 10%;
                        border-right: 1px solid white;
                    }
                    .welcomeText
                    {
                        font-weight: 200;    
                    }
                    .top-numbers, .icon-pack
                    {
                        visibility: hidden;
                    }
                    .content-container
                    {
                        margin: auto;
                        margin-top: 3rem;
                        width: 85%;
                    }
                    .line
                    {
                        border-top: 2px solid #192f5a;
                    }
                    input:read-only, textarea:read-only
                    {
                        border: 1px solid;
                        border-radius: 5px;
                        padding-left: 10px;
                    }
                `}
                </style>
                <div className="container-fluid dashboard-nav p-2">
                    <div className="row p-3 text-white">
                        <div className="col-10 d-flex pl-4">
                            <img src="/assets/images/qds-logo.png" alt="Logo" className="logo pr-3"></img>   
                            <h4 className="welcomeText align-self-center pl-3">{this.state.course + ": " + this.state.name}</h4>                    
                        </div> 
                        <div className="col-2 align-self-center">
                            <a href="/mock_tests/login" className="float-right mr-5 text-white">Logout</a>
                        </div>
                    </div>
                </div>
                <div className="container-fluid content-container">
                    <form className="mt-3 ml-3">
                        <div className="form-row">
                            <div className="form-group col-sm-4">
                                <label htmlFor="name">Name of the Test</label>
                                <input readOnly className=" form-control-plaintext" name="name" id="name" value={this.state.name}></input>
                            </div>
                            <div className="form-group col-sm-4">
                                <label htmlFor="course">Course</label>
                                <input readOnly name="course" id="course" className=" form-control-plaintext" value={this.state.course}>
                                </input>
                            </div>
                            <div className="form-group col-sm-4">
                                <label htmlFor="n_sections">Number of Sections{' '}</label>
                                <input readOnly className=" form-control-plaintext" name="n_sections" id="n_sections" value={this.state.n_sections}></input>
                            </div>
                        </div>
                        {
                            (    
                                <div className="questions" >
                                
                                    {
                                        this.state.sectionArr.map((s, i) => {

                                        return(
                                                <div className="form-row">
                                                    <div className="form-group col-sm-4">
                                                        <label htmlFor="section_name">Name of the Section{' ' + (i+1)}</label>
                                                        <input readOnly className=" form-control-plaintext" name="section_names" id={"section_name_" + (i+1)} value={this.state.section_names[i]}></input> 
                                                    </div>
                                                    <div className="form-group col-sm-4">
                                                        <label htmlFor="section_time">Time for the Section{' ' + (i+1)}(minutes)</label>
                                                        <input readOnly className=" form-control-plaintext" name="section_time" id={"section_time_" + (i+1)} value={this.state.section_time[i]} ></input> 
                                                    </div>
                                                    <div className="form-group col-sm-4">
                                                        <label htmlFor="section_name">Number of questions for the Section{' ' + (i+1)}</label>
                                                        <input readOnly className=" form-control-plaintext" name="section_n_questions" id={"section_n_questions_" + (i+1)} value={this.state.section_n_questions[i]} ></input> 
                                                    </div>
                                                </div>
                                            );
                                        })
                                    }

                                    <hr className="line"></hr>
                                </div>
                            )
                            
                        }

                        
                        {
                            (
                                
                                <div >
                                
                                {
                                    this.state.sectionArr.map((s, i) => {

                                    var arr = new Array(this.state.section_n_questions[i]).fill(0);

                                    return(

                                        <div>

                                            <h4 className="welcomeText">Section {i+1} : {this.state.section_names[i]}</h4>
                                                <div className="form-row">
                                                    {arr.map((a, j) => {

                                                        return(
                                                            <div>
                                                                <div className="form-group col-sm-12 mt-3">
                                                                    <h6>Question {j+1}</h6>
                                                                </div>    

                                                                <div className="form-group col-sm-12">
                                                                    <label htmlFor="questionType">Question Type</label>
                                                                    <input readOnly name="questionType" id={"questionType" + (i+1) + "." + (j+1)} className=" form-control-plaintext" value={this.state.questionsArr[i][j].questionType === "fillBlanks" ? "Fill the Blanks" : "MCQ"}></input>
                                                                </div>
                                                                
                                                                <div className="form-group col-sm-12">
                                                                    <label htmlFor="questionText">Question</label><br />
                                                                    <textarea readOnly name="questionText" id={"questionType" + (i+1) + "." + (j+1)} rows="6" cols="50" value={this.state.questionsArr[i][j].questionText}></textarea>
                                                                </div>

                                                                {   
                                                                    this.state.questionsArr[i][j].questionType === "MCQ" && 

                                                                        <div className="form-group col-sm-12 radioBtns" id={"radioBtns" + (i+1) + "." + (j+1)}>

                                                                            <input readOnly type="radio" name={"mcq" + (i+1) + "." + (j+1)} id={"opt1-" + (i+1) + "." + (j+1)} checked={this.state.questionsArr[i][j].correctAns === "1" ? true : false } ></input>
                                                                            {" "}
                                                                            <label htmlFor={"opt1-" + (i+1) + "." + (j+1)}>
                                                                            
                                                                                <input readOnly className=" form-control-plaintext" name="lbl1"  id={"lbl1-" + (i+1) + "." + (j+1)} value={this.state.questionsArr[i][j].options.opt1}></input>
                                                                                
                                                                            </label><br />

                                                                            <input readOnly type="radio" name={"mcq" + (i+1) + "." + (j+1)} id={"opt2-" + (i+1) + "." + (j+1)} checked={this.state.questionsArr[i][j].correctAns === "2" ? true : false }></input>
                                                                            {" "}
                                                                            <label htmlFor={"opt2-" + (i+1) + "." + (j+1)}>
                                                                            
                                                                                <input readOnly className=" form-control-plaintext" name="lbl2" id={"lbl2-" + (i+1) + "." + (j+1)} value={this.state.questionsArr[i][j].options.opt2}></input>
                                                                                
                                                                            </label><br />
                                                                            

                                                                            <input readOnly type="radio" name={"mcq" + (i+1) + "." + (j+1)} id={"opt3-" + (i+1) + "." + (j+1)} checked={this.state.questionsArr[i][j].correctAns === "3" ? true : false }></input>
                                                                            {" "}
                                                                            <label htmlFor={"opt3-" + (i+1) + "." + (j+1)}>
                                                                                
                                                                                <input readOnly className=" form-control-plaintext" name="lbl3" id={"lbl3-" + (i+1) + "." + (j+1)} value={this.state.questionsArr[i][j].options.opt3}></input>
                                                                                
                                                                            </label><br />
                                                                            
                                                                            <input readOnly type="radio" name={"mcq" + (i+1) + "." + (j+1)} id={"opt4-" + (i+1) + "." + (j+1)} checked={this.state.questionsArr[i][j].correctAns === "4" ? true : false }></input>
                                                                            {" "}
                                                                            <label id={"lbl4-" + (i+1) + "." + (j+1)} htmlFor={"opt4-" + (i+1) + "." + (j+1)}>
                                                                                
                                                                                <input readOnly className=" form-control-plaintext" name="lbl4" id={"lbl4-" + (i+1) + "." + (j+1)} value={this.state.questionsArr[i][j].options.opt4}></input>
                                                                                
                                                                            </label><br />
                                                                            {
                                                                                this.state.questionsArr[i][j].optCount > 4 && this.state.questionsArr[i][j].optArr.map((o, l) => {


                                                                                    return(

                                                                                        <div>
                                                                                            <input readOnly type="radio" name={"mcq" + (i+1) + "." + (j+1)} id={"opt4-" + (i+1) + "." + (j+1)} checked={this.state.questionsArr[i][j].correctAns === (5+l).toString() ? true : false }></input>
                                                                                            {" "}
                                                                                            <label htmlFor={"opt" + (5+l) + "-" + (i+1) + "." + (j+1)}>
                                                                                                
                                                                                                <input readOnly className="form-control-plaintext" name={"lbl" + (5+l)} id={"lbl" + (5+l) + "-" + (i+1) + "." + (j+1)} value={this.state.questionsArr[i][j].options["opt" + (5+l)]}></input>
                                                                                                
                                                                                            </label><br />
                                                                                        </div>
                                                                                    )
                                                                                })
                                                                            }

                                                                    </div>

                                                                }

                                                                {
                                                                    this.state.questionsArr[i][j].questionType === "fillBlanks" && 

                                                                    <div className="form-group col-sm-12 blankAns" id={"blankAns" + (i+1) + "." + (j+1)}>
                                                                        <label htmlFor="fill">Answer {" "}</label><br/>
                                                                        <input readOnly id={"fill" + (i+1) + "." + (j+1)} name="fillAns" value={this.state.questionsArr[i][j].correctAns} className=" form-control-plaintext"></input>
                                                                    </div>

                                                                }
                                                                <div className="form-group col-sm-12">
                                                                    <label htmlFor="marks_plus">Marks for correct answer</label>
                                                                    <input readOnly className=" form-control-plaintext" name="marks_plus" id={"marks_plus" + (i+1) + "." + (j+1)} value={this.state.questionsArr[i][j].marks_plus} ></input> 
                                                                </div>
                                                                <div className="form-group col-sm-12">
                                                                    <label htmlFor="marks_minus">Negative marking</label>
                                                                    <input readOnly className=" form-control-plaintext" name="marks_minus" id={"marks_minus" + (i+1) + "." + (j+1)} value={this.state.questionsArr[i][j].marks_minus} ></input> 
                                                                </div>
                                                                {/* <div className="form-group col-sm-12">
                                                                    <label htmlFor="img">Select image: {" "}</label><br/>
                                                                    <input type="file" id={"img" + (i+1) + "." + (j+1)} name="img" accept="image/*"></input>
                                                                </div> */}
                                                                
                                                            </div>
                                                            );
                                                        })    
                                                    }

                                                    {/* <div className="form-group col-sm-12 text-center">
                                                        <a className="btn btn-info text-white">Submit Section</a>
                                                    </div>    */}
                                                </div>
                                                
                                                <hr className="line"></hr>
                                        </div>
                                        )
                                    })

                                }

                                </div>
                            )
                            
                        }
                        <div className="form-row">
                            <div className="form-group col-sm-4">
                                <label htmlFor="section_name">Total Time (in minutes)</label>
                                <input readOnly className=" form-control-plaintext" name="total_time" id="total_time" value={this.state.total_time}></input>
                            </div>
                            <div className="form-group col-sm-4">
                                <label htmlFor="section_name">Total Number of Questions</label>
                                <input readOnly className=" form-control-plaintext" name="total_questions" id="total_questions" value={this.state.total_questions}></input>
                            </div>
                            <div className="form-group col-sm-4">
                                <label htmlFor="section_name">Maximum Marks</label>
                                <input readOnly className=" form-control-plaintext" name="total_marks" id="total_marks" value={this.state.total_marks}></input>
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="form-group mt-5 col-sm-12 text-center">
                                <a href="/mock_tests/admin/admin_dashboard" className="btn btn-info offset-1 col-2 text-white">
                                <span className="fa fa-chevron-left m-2"></span> Back to Dashboard </a>
                            </div>
                        </div>

                    </form>
                </div>
            </React.Fragment>

        )

    }
}

export default withRouter(ViewTest);