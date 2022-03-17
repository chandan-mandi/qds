import React from 'react';
import { Component } from 'react';
import { mockTestFireStore, mockTestStorage } from '../firestore';

class CreateTest extends Component
{
    constructor(props)
    {
        super(props);
        this.state = {

            name: "",
            course: "",
            n_sections: 0,

            //per section
            section_names: [],
            section_time: [],
            section_n_questions: [],

            //Auto Calculate
            total_questions: 0,
            total_time: 0,
            total_marks: 0,

            //To Upload
            questionsArr : [],

            //temp arrays
            sectionArr : [],

            //template object
            testObj : {

                questionType: "",
                questionText: "",
                optCount: 4,
                optArr: [],
                options: {

                    opt1: "",
                    opt2: "",
                    opt3: "",
                    opt4: ""

                },
                marks_plus: 0,
                marks_minus: 0,
                img: "",
                correctAns: ""
            }

        }


    }

    componentDidMount()
    {

        $(".questions").hide();
    }

    handleChange = (event) => {

        var name = event.target.name;
        var value = event.target.value;

        if(name === "n_sections")
        {
            if(parseInt(value) > 0)
            {
                var arr = new Array(parseInt(value));
                arr.fill(0);
                var tempArr = new Array(parseInt(value));
                tempArr.fill([]);
            }
            else
            {
                var arr = new Array(0);
                arr.fill(0);
                var tempArr = new Array(0);
                tempArr.fill([]);
            }
            this.setState({sectionArr: arr, questionsArr: tempArr});

        }

        this.setState({[name] : value});


    }

    handleSectionDetails = () => {

        var proceed = true;
        
        for(var j=0; j < this.state.n_sections; j++)
        {
            if(isNaN(parseInt($("#section_n_questions_" + (j+1)).val())) || parseInt($("#section_n_questions_" + (j+1)).val()) < 1)
            {
                proceed = false;
                break;
            }
        }
        
        if(proceed)
        {
            var nameTempArr = [];
            var timeTempArr = [];
            var qTempArr = [];

            var tempTotalTime = 0;
            var tempTotalQuestions = 0

            this.state.sectionArr.map((s, i) => {

                let name = $("#section_name_" + (i+1)).val();
                let time =  parseInt($("#section_time_" + (i+1)).val());
                let n_questions = parseInt($("#section_n_questions_" + (i+1)).val());
                
                nameTempArr.push(name);
                timeTempArr.push(time);
                qTempArr.push(n_questions);

                tempTotalTime += time;
                tempTotalQuestions += n_questions;
                
            });

            var tempArr = this.state.questionsArr; 

            if(this.state.questionsArr[0].length === 0)
            {
                for(let i=0; i<tempArr.length; i++)
                {
                    tempArr[i] = new Array(qTempArr[i]);
                    for(let j=0; j<tempArr[i].length; j++)
                    {
                        tempArr[i][j] = {

                            questionType: "",
                            questionText: "",
                            optCount: 4,
                            optArr: [],
                            options: {
            
                                opt1: "",
                                opt2: "",
                                opt3: "",
                                opt4: ""
            
                            },
                            marks_plus: 0,
                            marks_minus: 0,
                            img: "",
                            correctAns: ""
                        }
            
                    }
                }
            }

            
            this.setState({
                    
                section_names: nameTempArr, 
                section_time: timeTempArr,
                section_n_questions: qTempArr,
                total_time: tempTotalTime,
                total_questions: tempTotalQuestions,

                questionsArr: tempArr

            });

            // console.log("Test: ",this.state.questionsArr);
            // console.log("Temp: ",tempArr);
        
            $(".questions").show();

            $("#n_sections").prop("readOnly", true);

            
            $(".n_questions").prop("readOnly", true);
        }
    }

    handleQuestions = (event, sid, qid) => {

        var name = event.target.name;
        var value = event.target.value;

        var tempArr = this.state.questionsArr;

        if(name === "questionType")
        {
            if(value === "MCQ")
            {
                tempArr[sid][qid]["questionType"] = value;
            }
            else
            {
                tempArr[sid][qid].questionType = value;
            }
        }
        if(name === "questionText")
        {
            tempArr[sid][qid].questionText = value;
        }
        if(name === "lbl1")
        {
            tempArr[sid][qid].options.opt1 = value;
        }
        if(name === "lbl2")
        {
            tempArr[sid][qid].options.opt2 = value;
        }
        if(name === "lbl3")
        {
            tempArr[sid][qid].options.opt3 = value;
        }
        if(name === "lbl4")
        {
            tempArr[sid][qid].options.opt4 = value;
        }
        if(name === "fillAns" || name.slice(0,3) === "mcq")
        {
            tempArr[sid][qid].correctAns = value;
        }
        if(name === "marks_plus")
        {
            tempArr[sid][qid].marks_plus = parseInt(value);
        }
        if(name === "marks_minus")
        {
            tempArr[sid][qid].marks_minus = parseInt(value);
        }
        if(name === "img")
        {
            tempArr[sid][qid].img = event.target.files[0];
            console.log(event.target.files[0]);
        }

        this.setState({questionsArr: tempArr});
        console.log(this.state.questionsArr);

    }

    handleOptions = (event, sid, qid) => {

        var name = event.target.name;
        var value = event.target.value;

        var tempArr = this.state.questionsArr;

        if(name.slice(0,3) === "mcq")
        {
            tempArr[sid][qid].correctAns = value;
        }
        else
        {
            let optName = "opt" + name.slice(3,name.length);
            tempArr[sid][qid].options[optName] = value;
        }

        this.setState({questionsArr: tempArr});
        console.log(this.state.questionsArr);


    }
    addOptions =  (sid, qid) => {
        
        let tempArr = this.state.questionsArr;

        let tempCountArr = new Array(tempArr[sid][qid].optCount - 3);
        tempCountArr.fill(0);
        tempArr[sid][qid].optArr = [...tempCountArr];

        // this.setState({optArr: tempCountArr});

        let newOptField = "opt" + (tempArr[sid][qid].optCount + 1); 
        tempArr[sid][qid].options[newOptField] = "";
        tempArr[sid][qid].optCount += 1; 

        this.setState({questionsArr: tempArr});
        // this.setState({optCount: this.state.optCount + 1});
        
        console.log(tempArr, this.state.questionsArr);
    }

    removeOption = (sid, qid) => {

        let tempArr = this.state.questionsArr;
        
        let tempCountArr = new Array(tempArr[sid][qid].optCount - 5);
        tempCountArr.fill(0);
        tempArr[sid][qid].optArr = [...tempCountArr];

        // this.setState({optArr: tempCountArr});

        let newOptField = "opt" + (tempArr[sid][qid].optCount); 
        delete tempArr[sid][qid].options[newOptField];
        
        console.log(newOptField + " value is " + tempArr[sid][qid].options[newOptField]);
        tempArr[sid][qid].optCount -= 1; 

        this.setState({questionsArr: tempArr});
        // this.setState({optCount: this.state.optCount - 1});

        console.log(tempArr, this.state.questionsArr);
    }
 
    submitSection = () => {

        var total = 0;

        // var tempArr = this.state.questionsArr;

        // for(let i=0; i<tempArr.length; i++)
        // {
        //     for(let j=0; j<tempArr[i].length; j++)
        //     {
        //         var imgObj = tempArr[i][j].img;
        //         if(imgObj !== "")
        //         {
        //             const storageRef = mockTestFireStore.storage.ref();
        //             const fileRef = storageRef.child(imgObj.name);
        //             fileRef.put(imgObj).then(() => {
        //                 alert("File Uploaded");
        //             })
        //             .catch(() => {
        //                 alert("Error Uploading a file");
        //             });
        //             // const upload = mockTestStorage.ref(`${this.state.name}/${this.state.course}/${imgObj.name}`).put(imgObj);
        //         }

        //     }
        // }

        this.state.questionsArr.map((section, i) => {

            section.map((group, j) => {

                total += group.marks_plus;

            } )

        });


        this.setState({total_marks: total});

    }

    handleSubmit = (event) => {

        event.preventDefault();

        var qObj = {};

        Object.assign(qObj, this.state.questionsArr);

        const testObj = {

            name: this.state.name,

            course: this.state.course,

            total_sections: parseInt(this.state.n_sections),

            section_names: this.state.section_names,

            section_time: this.state.section_time,

            section_n_questions: this.state.section_n_questions,

            total_questions: this.state.total_questions,

            total_time: this.state.total_time,

            total_marks: this.state.total_marks,

            questions: qObj

        }

        console.log(qObj);
        
        mockTestFireStore.collection(testObj.course).doc(testObj.name).get()
        .then((docSnapshot) => {

            if(docSnapshot.exists)
            {
                alert("Mock Test named " + testObj.name + " already exists in course " + testObj.course + "!!");
            }
            else
            {
                mockTestFireStore.collection(testObj.course).doc(testObj.name).set(testObj)
                .then(() => alert("Test Created Successfully"))
                .then(() => location.reload())
                .catch(err => {
                    alert("Error Creating/Submitting the test");
                    console.log(err);
                });
            }

        });

        

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
                `}
                </style>
                <div className="container-fluid dashboard-nav p-2">
                    <div className="row p-3 text-white">
                        <div className="col-10 d-flex pl-4">
                            <img src="/assets/images/qds-logo.webp" alt="Logo" className="logo pr-3"></img>
                            <h4 className="welcomeText align-self-center pl-3">Create a new test</h4>
                        </div>
                        <div className="col-2 align-self-center">
                            <a href="/mock_tests/login" className="float-right mr-5 text-white">Logout</a>
                        </div>
                    </div>
                </div>
                <div className="container-fluid content-container">
                    <div className="row">
                        <div className="col-12">
                            <h2 className="welcomeText">Fill up the following details.</h2>
                        </div>
                    </div>
                    <form className="mt-3 ml-3" onSubmit={this.handleSubmit}>
                        <div className="form-row">
                            <div className="form-group col-sm-4">
                                <label htmlFor="name">Name of the test{' '}</label>
                                <input required type="text" className="form-control" name="name" id="name" placeholder="Name of the test" onChange={this.handleChange}></input>
                            </div>
                            <div className="form-group col-sm-4">
                                <label htmlFor="course">Course{' '}</label>
                                <select required name="course" id="course" className="form-control" onChange={this.handleChange}>
                                    <option value="" selected>Select Course</option>
                                    <option value="CAT">CAT</option>
                                    <option value="SAT">SAT</option>
                                    <option value="GRE">GRE</option>
                                    <option value="GMAT">GMAT</option>
                                    <option value="MAH-CET">MAH-CET</option>
                                </select>
                            </div>
                            <div className="form-group col-sm-4">
                                <label htmlFor="n_sections">Number of Sections{' '}</label>
                                <input required type="number" className="form-control" name="n_sections" id="n_sections" placeholder="Number of Sections" onChange={this.handleChange}></input>
                            </div>
                        </div>
                        {
                            this.state.sectionArr.length > 0 && (

                                <div className="questions" >

                                {
                                    this.state.sectionArr.map((s, i) => {

                                    return(
                                            <div className="form-row">
                                                <div className="form-group col-sm-4">
                                                    <label htmlFor="section_name">Name of the Section{' ' + (i+1)}</label>
                                                    <input required type="text" className="form-control" name="section_names" id={"section_name_" + (i+1)} placeholder="Section Name" ></input>
                                                </div>
                                                <div className="form-group col-sm-4">
                                                    <label htmlFor="section_time">Time for the Section{' ' + (i+1)}</label>
                                                    <input required type="number" className="form-control" name="section_time" id={"section_time_" + (i+1)} placeholder="Section Time (in minutes)" ></input>
                                                </div>
                                                <div className="form-group col-sm-4">
                                                    <label htmlFor="section_n_questions">Number of questions for the Section{' ' + (i+1)}</label>
                                                    <input required type="number" className="form-control n_questions" name="section_n_questions" id={"section_n_questions_" + (i+1)} placeholder="Number of Questions" ></input> 
                                                </div>
                                            </div>
                                        );
                                    })
                                }

                                    <div className="form-row">
                                        <div className="form-group col-12 text-center">
                                            <a className="btn btn-info text-white" onClick={this.handleSectionDetails}>Confirm</a>
                                        </div>
                                    </div>
                                    <hr className="line"></hr>
                                </div>
                            )

                        }


                        {
                            this.state.total_questions > 0 && (

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
                                                                <div className="form-group col-sm-12">
                                                                    <h6>Question {j+1}</h6>
                                                                </div>
                                                                <div className="form-group col-sm-12">
                                                                    <label htmlFor="questionType">Select Question Type</label>
                                                                    <select required name="questionType" id={"questionType" + (i+1) + "." + (j+1)} className="form-control" onChange={(e) => this.handleQuestions(e, i, j)}>
                                                                        <option value="" selected>Select Question Type</option>
                                                                        <option value="MCQ">MCQ</option>
                                                                        <option value="fillBlanks">Fill the Blanks</option>
                                                                    </select>
                                                                </div>
                                                                <div className="form-group col-sm-12">
                                                                    <label htmlFor="questionText">Enter the Question</label><br />
                                                                    <textarea name="questionText" id={"questionType" + (i+1) + "." + (j+1)} rows="6" cols="50" onChange={(e) => this.handleQuestions(e, i, j)}></textarea>
                                                                </div>

                                                                {
                                                                    this.state.questionsArr[i][j].questionType === "MCQ" &&

                                                                        <div className="form-group col-sm-12 radioBtns" id={"radioBtns" + (i+1) + "." + (j+1)}>

                                                                            <input type="radio" name={"mcq" + (i+1) + "." + (j+1)} id={"opt1-" + (i+1) + "." + (j+1)} value="1" onChange={(e) => this.handleQuestions(e,i, j )}></input>
                                                                            {" "}
                                                                            <label htmlFor={"opt1-" + (i+1) + "." + (j+1)}>

                                                                                <input type="text" name="lbl1" onChange={(e) => this.handleQuestions(e, i, j)}  id={"lbl1-" + (i+1) + "." + (j+1)}></input>

                                                                            </label><br />

                                                                            <input type="radio" name={"mcq" + (i+1) + "." + (j+1)} id={"opt2-" + (i+1) + "." + (j+1)} value="2" onChange={(e) => this.handleQuestions(e,i, j )}></input>
                                                                            {" "}
                                                                            <label htmlFor={"opt2-" + (i+1) + "." + (j+1)}>

                                                                                <input type="text" name="lbl2" onChange={(e) => this.handleQuestions(e, i, j)} id={"lbl2-" + (i+1) + "." + (j+1)}></input>

                                                                            </label><br />


                                                                            <input type="radio" name={"mcq" + (i+1) + "." + (j+1)} id={"opt3-" + (i+1) + "." + (j+1)} value="3" onChange={(e) => this.handleQuestions(e,i, j )}></input>
                                                                            {" "}
                                                                            <label htmlFor={"opt3-" + (i+1) + "." + (j+1)}>

                                                                                <input type="text" name="lbl3" onChange={(e) => this.handleQuestions(e, i, j)} id={"lbl3-" + (i+1) + "." + (j+1)}></input>

                                                                            </label><br />

                                                                            <input type="radio" name={"mcq" + (i+1) + "." + (j+1)} id={"opt4-" + (i+1) + "." + (j+1)} value="4" onChange={(e) => this.handleQuestions(e,i, j )}></input>
                                                                            {" "}
                                                                            <label id={"lbl4-" + (i+1) + "." + (j+1)} htmlFor={"opt4-" + (i+1) + "." + (j+1)}>

                                                                                <input type="text" name="lbl4" onChange={(e) => this.handleQuestions(e, i, j)} id={"lbl4-" + (i+1) + "." + (j+1)}></input>

                                                                            </label><br />
                                                                            {
                                                                                this.state.questionsArr[i][j].optCount > 4 && this.state.questionsArr[i][j].optArr.map((o, l) => {

                                                                                    return(

                                                                                        <div>
                                                                                            <input type="radio" name={"mcq" + (i+1) + "." + (j+1)} id={"opt4-" + (i+1) + "." + (j+1)} value={5+l} onChange={(e) => this.handleOptions(e, i, j)}></input>
                                                                                            {" "}
                                                                                            <label htmlFor={"opt" + (5+l) + "-" + (i+1) + "." + (j+1)}>
                                                                                                
                                                                                                <input type="text" name={"lbl" + (5+l)} onChange={(e) => this.handleOptions(e, i, j)} id={"lbl" + (5+l) + "-" + (i+1) + "." + (j+1)}></input>
                                                                                                
                                                                                                <span className="fa fa-times ml-3" onClick={() => this.removeOption(i, j)}></span>
                                                                                            </label><br />
                                                                                        </div>
                                                                                    )
                                                                                })
                                                                            }

                                                                            <a className="btn btn-primary" onClick={() => this.addOptions(i, j)}><span className="fa fa-plus fa-sm"> Add Option</span></a>
                                                                    </div>

                                                                }

                                                                {
                                                                    this.state.questionsArr[i][j].questionType === "fillBlanks" &&

                                                                    <div className="form-group col-sm-12 blankAns" id={"blankAns" + (i+1) + "." + (j+1)}>
                                                                        <label htmlFor="fill">Enter the answer {" "}</label><br/>
                                                                        <input required type="text" onChange={(e) => this.handleQuestions(e, i, j)} id={"fill" + (i+1) + "." + (j+1)} name="fillAns"></input>
                                                                    </div>

                                                                }
                                                                <div className="form-group col-sm-12">
                                                                    <label htmlFor="marks_plus">Marks for correct answer</label>
                                                                    <input required type="number" className="form-control" name="marks_plus" id={"marks_plus" + (i+1) + "." + (j+1)} onChange={(e) => this.handleQuestions(e, i, j)} placeholder="Marks for correct answer" ></input>
                                                                </div>
                                                                <div className="form-group col-sm-12">
                                                                    <label htmlFor="marks_minus">Negative marking</label>
                                                                    <input required type="number" className="form-control" name="marks_minus" id={"marks_minus" + (i+1) + "." + (j+1)} onChange={(e) => this.handleQuestions(e, i, j)} placeholder="Negative marking" ></input>
                                                                </div>
                                                                <div className="form-group col-sm-12">
                                                                    <label htmlFor="img">Select image: {" "}</label><br/>
                                                                    <input type="file" id={"img" + (i+1) + "." + (j+1)} name="img" accept="image/*" onChange={(e) => this.handleQuestions(e, i, j)}></input>
                                                                </div>
                                                            </div>
                                                            );
                                                        })
                                                    }

                                                    <div className="form-group col-sm-12 text-center">
                                                        <a className="btn btn-info text-white" onClick={this.submitSection}>Submit Section</a>
                                                    </div>
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
                                <input required type="number" className="form-control" name="total_time" id="total_time" placeholder="Total Time"  value={this.state.total_time}></input>
                            </div>
                            <div className="form-group col-sm-4">
                                <label htmlFor="section_name">Total Number of Questions</label>
                                <input required type="number" className="form-control" name="total_questions" id="total_questions" placeholder="Total Questions" value={this.state.total_questions}></input>
                            </div>
                            <div className="form-group col-sm-4">
                                <label htmlFor="section_name">Maximum Marks</label>
                                <input required type="number" className="form-control" name="total_marks" id="total_marks" placeholder="Total Marks" value={this.state.total_marks}></input>
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="form-group mt-5 col-sm-12 text-center">
                                <a href="/mock_tests/admin/admin_dashboard" className="btn btn-info col-2 text-white float-left"><span className="fa fa-chevron-left m-2"></span> Back to Dashboard</a>
                                <button type="submit" className="btn btn-success offset-1 col-2 text-white float-right">Submit</button>
                            </div>
                        </div>

                    </form>
                </div>
            </React.Fragment>

        )


    }
}

export default CreateTest;
