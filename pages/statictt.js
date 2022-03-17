import React, { Component, Fragment } from 'react';
import DownloadModalForm from "../components/DownloadModalForm";

var StudyAbroad = [

    //ALL GMAT FILES
    {
        imageUrl: "/assets/study_material/staticstudyplan/allposters/5.webp",
        fileUrl: "/assets/study_material/staticstudyplan/studyabroad/PREPARING GMAT IN 1 MONTH.pdf",
        type: "GMAT",
        time: "1"
    },
    {
        imageUrl: "/assets/study_material/staticstudyplan/allposters/22.webp",
        fileUrl: "/assets/study_material/staticstudyplan/studyabroad/PREPARING GMAT IN 3 MONTHS.pdf",
        type: "GMAT",
        time: "3"
    },
    {
        imageUrl: "/assets/study_material/staticstudyplan/allposters/39.png",
        fileUrl: "/assets/study_material/staticstudyplan/studyabroad/PREPARING GMAT IN 6 MONTHS.pdf",
        type: "GMAT",
        time: "6"
    },
    {
        imageUrl: "/assets/study_material/staticstudyplan/allposters/55.png",
        fileUrl: "/assets/study_material/staticstudyplan/studyabroad/PREPARING GMAT IN 12 MONTHS.pdf",
        type: "GMAT",
        time: "12"
    },

    //ALL GRE FILES
    {
        imageUrl: "/assets/study_material/staticstudyplan/allposters/6.png",
        fileUrl: "/assets/study_material/staticstudyplan/studyabroad/PREPARING GRE IN 1 MONTH.pdf",
        type: "GRE",
        time: "1"
    },
    {
        imageUrl: "/assets/study_material/staticstudyplan/allposters/23.png",
        fileUrl: "/assets/study_material/staticstudyplan/studyabroad/PREPARING GRE IN 3 MONTHS.pdf",
        type: "GRE",
        time: "3"
    },
    {
        imageUrl: "/assets/study_material/staticstudyplan/allposters/40.png",
        fileUrl: "/assets/study_material/staticstudyplan/studyabroad/PREPARING GRE IN 6 MONTHS.pdf",
        type: "GRE",
        time: "6"
    },
    {
        imageUrl: "/assets/study_material/staticstudyplan/allposters/56.png",
        fileUrl: "/assets/study_material/staticstudyplan/studyabroad/PREPARING GRE IN 12 MONTHS.pdf",
        type: "GRE",
        time: "12"
    },

    //ALL SAT FILES
    {
        imageUrl: "/assets/study_material/staticstudyplan/allposters/7.png",
        fileUrl: "/assets/study_material/staticstudyplan/studyabroad/PREPARING SAT IN 1 MONTH.pdf",
        type: "SAT",
        time: "1"
    },
    {
        imageUrl: "/assets/study_material/staticstudyplan/allposters/24.png",
        fileUrl: "/assets/study_material/staticstudyplan/studyabroad/PREPARING SAT IN 3 MONTH.pdf",
        type: "SAT",
        time: "3"
    },
    {
        imageUrl: "/assets/study_material/staticstudyplan/allposters/41.png",
        fileUrl: "/assets/study_material/staticstudyplan/studyabroad/PREPARING SAT IN 6 MONTH.pdf",
        type: "SAT",
        time: "6"
    },
    {
        imageUrl: "/assets/study_material/staticstudyplan/allposters/57.png",
        fileUrl: "/assets/study_material/staticstudyplan/studyabroad/PREPARING SAT IN 12 MONTH.pdf",
        type: "SAT",
        time: "12"
    }
];

const Management = [

    //ALL CAT FILES
    {
        imageUrl: "/assets/study_material/staticstudyplan/allposters/4.png",
        fileUrl: "/assets/study_material/staticstudyplan/management/PREPARING FOR CAT IN 1 MONTH.pdf",
        type: "CAT",
        time: "1"
    },
    {
        imageUrl: "/assets/study_material/staticstudyplan/allposters/21.png",
        fileUrl: "/assets/study_material/staticstudyplan/management/PREPARING CAT IN 3 MONTH.pdf",
        type: "CAT",
        time: "3"
    },
    {
        imageUrl: "/assets/study_material/staticstudyplan/allposters/38.png",
        fileUrl: "/assets/study_material/staticstudyplan/management/PREPARING CAT IN 6 MONTHS.pdf",
        type: "CAT",
        time: "6"
    },
    {
        imageUrl: "/assets/study_material/staticstudyplan/allposters/54.png",
        fileUrl: "/assets/study_material/staticstudyplan/management/PREPARING CAT IN 12 MONTHS.pdf",
        type: "CAT",
        time: "12"
    },

    //ALL MAH-CET FILES
    {
        imageUrl: "/assets/study_material/staticstudyplan/allposters/13.png",
        fileUrl: "/assets/study_material/staticstudyplan/management/PREPARING MAH-CET IN 1 MONTH.pdf",
        type: "MAH-CET",
        time: "1"
    },
    {
        imageUrl: "/assets/study_material/staticstudyplan/allposters/30.png",
        fileUrl: "/assets/study_material/staticstudyplan/management/PREPARING MAH-CET IN 3 MONTHS.pdf",
        type: "MAH-CET",
        time: "3"
    },
    {
        imageUrl: "/assets/study_material/staticstudyplan/allposters/47.png",
        fileUrl: "/assets/study_material/staticstudyplan/management/PREPARING MAH-CET IN 6 MONTHS.pdf",
        type: "MAH-CET",
        time: "6"
    },

    //ALL NMAT FILES
    {
        imageUrl: "/assets/study_material/staticstudyplan/allposters/1.png",
        fileUrl: "/assets/study_material/staticstudyplan/management/PREPARING NMAT IN 1 MONTH.pdf",
        type: "NMAT",
        time: "1"
    },
    {
        imageUrl: "/assets/study_material/staticstudyplan/allposters/18.png",
        fileUrl: "/assets/study_material/staticstudyplan/management/PREPARING NMAT IN 3 MONTH.pdf",
        type: "NMAT",
        time: "3"
    },
    {
        imageUrl: "/assets/study_material/staticstudyplan/allposters/35.png",
        fileUrl: "/assets/study_material/staticstudyplan/management/PREPARING NMAT IN 6 MONTH.pdf",
        type: "NMAT",
        time: "6"
    },
    {
        imageUrl: "/assets/study_material/staticstudyplan/allposters/51.png",
        fileUrl: "/assets/study_material/staticstudyplan/management/PREPARING NMAT IN 12 MONTH.pdf",
        type: "NMAT",
        time: "12"
    },

    //ALL SNAP FILES
    {
        imageUrl: "/assets/study_material/staticstudyplan/allposters/3.png",
        fileUrl: "/assets/study_material/staticstudyplan/management/PREPARING SNAP IN 1 MONTH.pdf",
        type: "SNAP",
        time: "1"
    },
    {
        imageUrl: "/assets/study_material/staticstudyplan/allposters/20.png",
        fileUrl: "/assets/study_material/staticstudyplan/management/PREPARING SNAP IN 3 MONTHS.pdf",
        type: "SNAP",
        time: "3"
    },
    {
        imageUrl: "/assets/study_material/staticstudyplan/allposters/37.png",
        fileUrl: "/assets/study_material/staticstudyplan/management/PREPARING SNAP IN 6 MONTHS.pdf",
        type: "SNAP",
        time: "6"
    },
    {
        imageUrl: "/assets/study_material/staticstudyplan/allposters/53.png",
        fileUrl: "/assets/study_material/staticstudyplan/management/PREPARING SNAP IN 12 MONTHS.pdf",
        type: "SNAP",
        time: "12"
    },

    //ALL CMAT FILES
    {
        imageUrl: "/assets/study_material/staticstudyplan/allposters/8.png",
        fileUrl: "/assets/study_material/staticstudyplan/management/PREPARING CMAT IN 1 MONTH.pdf",
        type: "CMAT",
        time: "1"
    },
    {
        imageUrl: "/assets/study_material/staticstudyplan/allposters/25.png",
        fileUrl: "/assets/study_material/staticstudyplan/management/PREPARING CMAT IN 3 MONTHS.pdf",
        type: "CMAT",
        time: "3"
    },
    {
        imageUrl: "/assets/study_material/staticstudyplan/allposters/42.png",
        fileUrl: "/assets/study_material/staticstudyplan/management/PREPARING CMAT IN 6 MONTHS.pdf",
        type: "CMAT",
        time: "6"
    },
    {
        imageUrl: "/assets/study_material/staticstudyplan/allposters/58.png",
        fileUrl: "/assets/study_material/staticstudyplan/management/PREPARING CMAT IN 12 MONTHS.pdf",
        type: "CMAT",
        time: "12"
    },

    //ALL IIFT FILES
    {
        imageUrl: "/assets/study_material/staticstudyplan/allposters/2.png",
        fileUrl: "/assets/study_material/staticstudyplan/management/PREPARING IIFT IN 1 MONTH.pdf",
        type: "IIFT",
        time: "1"
    },
    {
        imageUrl: "/assets/study_material/staticstudyplan/allposters/19.png",
        fileUrl: "/assets/study_material/staticstudyplan/management/PREPARING IIFT IN 3 MONTH.pdf",
        type: "IIFT",
        time: "3"
    },
    {
        imageUrl: "/assets/study_material/staticstudyplan/allposters/36.png",
        fileUrl: "/assets/study_material/staticstudyplan/management/PREPARING IIFT IN 6 MONTHS.pdf",
        type: "IIFT",
        time: "6"
    },
    {
        imageUrl: "/assets/study_material/staticstudyplan/allposters/52.png",
        fileUrl: "/assets/study_material/staticstudyplan/management/PREPARING IIFT IN 12 MONTHS.pdf",
        type: "IIFT",
        time: "12"
    },

    //ALL TISS-NET FILES
    {
        imageUrl: "/assets/study_material/staticstudyplan/allposters/9.png",
        fileUrl: "/assets/study_material/staticstudyplan/management/PREPARING TISS-NET IN 1 MONTH.pdf",
        type: "TISS-NET",
        time: "1"
    },
    {
        imageUrl: "/assets/study_material/staticstudyplan/allposters/26.png",
        fileUrl: "/assets/study_material/staticstudyplan/management/PREPARING TISS-NET IN 3 MONTHS.pdf",
        type: "TISS-NET",
        time: "3"
    },
    {
        imageUrl: "/assets/study_material/staticstudyplan/allposters/43.png",
        fileUrl: "/assets/study_material/staticstudyplan/management/PREPARING TISS-NET IN 6 MONTHS.pdf",
        type: "TISS-NET",
        time: "6"
    },
    {
        imageUrl: "/assets/study_material/staticstudyplan/allposters/59.png",
        fileUrl: "/assets/study_material/staticstudyplan/management/PREPARING TISS-NET IN 12 MONTHS.pdf",
        type: "TISS-NET",
        time: "12"
    }
]

const Bank = [

    //ALL IBPS-PO FILES
    {
        imageUrl: "/assets/study_material/staticstudyplan/allposters/10.png",
        fileUrl: "/assets/study_material/staticstudyplan/bank/PREPARING IBPS PO IN 1 MONTH.pdf",
        type: "IBPSPO",
        time: "1"
    },
    {
        imageUrl: "/assets/study_material/staticstudyplan/allposters/27.png",
        fileUrl: "/assets/study_material/staticstudyplan/bank/PREPARING IBPS PO IN 3 MONTHS.pdf",
        type: "IBPSPO",
        time: "3"
    },
    {
        imageUrl: "/assets/study_material/staticstudyplan/allposters/44.png",
        fileUrl: "/assets/study_material/staticstudyplan/bank/PREPARING IBPS PO IN 6 MONTHS.pdf",
        type: "IBPSPO",
        time: "6"
    },
    {
        imageUrl: "/assets/study_material/staticstudyplan/allposters/60.png",
        fileUrl: "/assets/study_material/staticstudyplan/bank/PREPARING IBPS PO IN 12 MONTHS.pdf",
        type: "IBPSPO",
        time: "12"
    },

    //ALL IBPS-RRB FILES
    {
        imageUrl: "/assets/study_material/staticstudyplan/allposters/11.png",
        fileUrl: "/assets/study_material/staticstudyplan/bank/PREPARATION OF IBPS RRB IN 1 MONTH.pdf",
        type: "IBPSRRB",
        time: "1"
    },
    {
        imageUrl: "/assets/study_material/staticstudyplan/allposters/28.png",
        fileUrl: "/assets/study_material/staticstudyplan/bank/PREPARATION OF IBPS RRB IN 3 MONTHS.pdf",
        type: "IBPSRRB",
        time: "3"
    },
    {
        imageUrl: "/assets/study_material/staticstudyplan/allposters/45.png",
        fileUrl: "/assets/study_material/staticstudyplan/bank/PREPARATION OF IBPS RRB IN 6 MONTHS.pdf",
        type: "IBPSRRB",
        time: "6"
    },
    {
        imageUrl: "/assets/study_material/staticstudyplan/allposters/61.png",
        fileUrl: "public/assets/study_material/staticstudyplan/bank/PREPARATION OF IBPS RRB IN 12 MONTHS.pdf",
        type: "IBPSRRB",
        time: "12"
    },

    //ALL SBI-CLERK FILES
    {
        imageUrl: "/assets/study_material/staticstudyplan/allposters/16.png",
        fileUrl: "/assets/study_material/staticstudyplan/bank/PREPARATION OF SBI CLERK IN 1 MONTH.pdf",
        type: "SBICLERK",
        time: "1"
    },
    {
        imageUrl: "/assets/study_material/staticstudyplan/allposters/33.png",
        fileUrl: "/assets/study_material/staticstudyplan/bank/PREPARING SBI CLERK IN 3  MONTHS.pdf",
        type: "SBICLERK",
        time: "3"
    },
    {
        imageUrl: "/assets/study_material/staticstudyplan/allposters/50.png",
        fileUrl: "/assets/study_material/staticstudyplan/bank/PREPARING SBI CLERK IN 6 MONTHS.pdf",
        type: "SBICLERK",
        time: "6"
    },

    //ALL SBI PO FILES
    {
        imageUrl: "/assets/study_material/staticstudyplan/allposters/14.png",
        fileUrl: "/assets/study_material/staticstudyplan/bank/PREPARATION OF SBI PO IN 1 MONTH.pdf",
        type: "SBIPO",
        time: "1"
    },
    {
        imageUrl: "/assets/study_material/staticstudyplan/allposters/31.png",
        fileUrl: "/assets/study_material/staticstudyplan/bank/PREPARING SBI PO IN 3 MONTHS.pdf",
        type: "SBIPO",
        time: "3"
    },
    {
        imageUrl: "/assets/study_material/staticstudyplan/allposters/48.png",
        fileUrl: "/assets/study_material/staticstudyplan/bank/PREPARING SBI PO IN 6 MONTHS.pdf",
        type: "SBIPO",
        time: "6"
    },
    {
        imageUrl: "/assets/study_material/staticstudyplan/allposters/63.png",
        fileUrl: "/assets/study_material/staticstudyplan/bank/PREPARING SBI PO IN 12 MONTHS.pdf",
        type: "SBIPO",
        time: "12"
    },

    //ALL SBI SO FILES
    {
        imageUrl: "/assets/study_material/staticstudyplan/allposters/15.png",
        fileUrl: "/assets/study_material/staticstudyplan/bank/PREPARING SBI SO IN 1 MONTH.pdf",
        type: "SBISO",
        time: "1"
    },
    {
        imageUrl: "/assets/study_material/staticstudyplan/allposters/32.png",
        fileUrl: "/assets/study_material/staticstudyplan/bank/PREPARING SBI SO IN 3 MONTHS.pdf",
        type: "SBISO",
        time: "3"
    },
    {
        imageUrl: "/assets/study_material/staticstudyplan/allposters/49.png",
        fileUrl: "/assets/study_material/staticstudyplan/bank/PREPARING SBI SO IN 6 MONTHS.pdf",
        type: "SBISO",
        time: "6"
    },

    //ALL RBI GRADE B FILES
    {
        imageUrl: "/assets/study_material/staticstudyplan/allposters/17.png",
        fileUrl: "/assets/study_material/staticstudyplan/bank/PREPARING RBI GRADE B IN 1 MONTH.pdf",
        type: "RBIGRADEB",
        time: "1"
    },
    {
        imageUrl: "/assets/study_material/staticstudyplan/allposters/34.png",
        fileUrl: "/assets/study_material/staticstudyplan/bank/PREPARING RBI GRADE B IN 3 MONTHS.pdf",
        type: "RBIGRADEB",
        time: "3"
    }
]



class staticplan extends Component {
    state = {
        examType: '',
        exam: '',
        time: '',
        all: '',
        vocabulary: 'a',
        FilesArray: [],
        ls: '',
        dataLoaded: false
    }
    componentDidMount() {
        var ls = localStorage.getItem('create-time-table')
        this.setState({ ls: ls })
    }

    handleDownload = () => {

        if (new Date(localStorage.getItem('create-time-table')) < new Date()) {
            localStorage.removeItem('create-time-table')
            $("#download_files").modal()
        }
        else if (this.state.ls == null) {
            $("#download_files").modal()
        }

    }
    handleExamType = (e) => {
        let type = e.target.value;
        console.log(type);
        this.setState({ examType: type });
    }

    handleexam = (e) => {
        let updatedName = e.target.value;
        this.setState({ exam: updatedName });

    }
    handletime = (e) => {
        let updatedTime = e.target.value;
        this.setState({ time: updatedTime });


    }
    handlePlan = (e) => {

        let dataSet = [];
        const exam = this.state.exam;

        //DATA SET ACCORDING TO EXAM TYPE
        switch (this.state.examType) {
            case "StudyAbroad": {
                dataSet = [...StudyAbroad];
                break;
            }
            case "Management": {
                dataSet = [...Management];
                break;
            }
            case "Bank": {
                dataSet = [...Bank];
                break;
            }
            default: {
                dataSet = [...StudyAbroad, ...Management, ...Bank];
                break;
            }
        };

        //IF USERS NEEDS FOR SPECIFIC EXAMS
        if (exam != "ALL") {
            switch (this.state.time) {
                case "1": {

                    let data;
                    data = dataSet.filter(function (el) {
                        return el.type == exam && el.time == "1";
                    });
                    return setTimeout(() => {
                        this.setState({ FilesArray: data })
                    }, 0);
                };

                case "3": {

                    let data;
                    data = dataSet.filter(function (el) {
                        return el.type == exam && el.time == "3";
                    });
                    return setTimeout(() => {
                        this.setState({ FilesArray: data })
                    }, 0);

                };

                case "6": {

                    let data;
                    data = dataSet.filter(function (el) {
                        return el.type == exam && el.time == "6";
                    });
                    return setTimeout(() => {
                        this.setState({ FilesArray: data })
                    }, 0);

                };

                case "12": {

                    let data;
                    data = dataSet.filter(function (el) {
                        return el.type == exam && el.time == "12";
                    });
                    return setTimeout(() => {
                        this.setState({ FilesArray: data })
                    }, 0);

                };

                case "ALL": {

                    let data;
                    data = dataSet.filter(function (el) {
                        return el.type == exam;
                    });
                    return setTimeout(() => {
                        this.setState({ FilesArray: data })
                    }, 0);

                };
            }
        }
        //ALL EXAMS
        else {
            switch (this.state.time) {
                case "1": {

                    let data;
                    data = dataSet.filter(function (el) {
                        return el.time == "1";
                    });
                    return setTimeout(() => {
                        this.setState({ FilesArray: data })
                    }, 0);
                };

                case "3": {

                    let data;
                    data = dataSet.filter(function (el) {
                        return el.time == "3";
                    });
                    return setTimeout(() => {
                        this.setState({ FilesArray: data })
                    }, 0);

                };

                case "6": {

                    let data;
                    data = dataSet.filter(function (el) {
                        return el.time == "6";
                    });
                    return setTimeout(() => {
                        this.setState({ FilesArray: data })
                    }, 0);

                };

                case "12": {

                    let data;
                    data = dataSet.filter(function (el) {
                        return el.time == "12";
                    });
                    return setTimeout(() => {
                        this.setState({ FilesArray: data })
                    }, 0);

                };

                case "ALL": {

                    let data;
                    data = dataSet;
                    return setTimeout(() => {
                        this.setState({ FilesArray: data })
                    }, 0);

                };
            }
        }
    }


    render() {

        const examType = this.state.examType;

        return (
            <>
                <div>
                    <style>
                        {`
                    .col-md-3{
                        margin-top: 10px;
                        margin-bottom: 10px;
                    }
                    .col-md-3 .card{
                        box-shadow: 0px 6px 10px #aaaaaa;
                    }

                    .btn{
                        background-color: #192f5a;
                        color: #fff;
                    }
                    .btn:hover{
                        color: #fff;
                    }
                    .hideDown{
                        display:none;
                    }
                `}
                    </style>

                    {/* main container */}
                    <div style={{ width: '100%' }} className="section-wrapper">
                        <div className="s-study-container" >
                            <h2
                            data-aos="fade-right"
                            data-aos-duration="1000"
                            data-aos-easing="ease-in-linear"
                            className="black-text" style={{ marginBottom: 50 }}> Enter the details to get your study plan now ! </h2>

                            <table
                            data-aos="fade-left"
                            data-aos-duration="1000"
                            data-aos-easing="ease-in-linear"
                            style={{ width: '100%' }}>
                                <thead>
                                    <th><h4>Select Exam Type</h4></th>
                                    <th><h4>Select Exam</h4></th>
                                    <th><h4>Select Preparation Time</h4></th>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>
                                            <select defaultValue={this.state.examType}
                                                onChange={this.handleExamType}
                                                className="form-control"
                                                style={{ maxWidth: '100%', minWidth: '100%' }}
                                            >
                                                <option value="">Select</option>
                                                <option value="StudyAbroad">Study Abroad</option>
                                                <option value="Management">Management</option>
                                                <option value="Bank">Bank</option>
                                                <option value="ALL">ALL</option>
                                            </select>
                                        </td>
                                        <td>
                                            <select defaultValue={this.state.exam}
                                                onChange={this.handleexam}
                                                className="form-control"
                                                style={{ maxWidth: '100%', minWidth: '100%' }}
                                            >
                                                <option value="">Select</option>

                                                {(examType === "StudyAbroad" || examType === "ALL") &&
                                                    <>
                                                        <option value="GMAT">GMAT</option>
                                                        <option value="GRE">GRE</option>
                                                        <option value="SAT">SAT</option>
                                                    </>}

                                                {(examType === "Management" || examType === "ALL") &&
                                                    <>
                                                        <option value="CAT">CAT</option>
                                                        <option value="MAH-CET">MAH-CET</option>
                                                        <option value="NMAT">NMAT</option>
                                                        <option value="SNAP">SNAP</option>
                                                        <option value="CMAT">CMAT</option>
                                                        <option value="IIFT">IIFT</option>
                                                        <option value="TISS-NET">TISS-NET</option>
                                                    </>}

                                                {(examType === "Bank" || examType === "ALL") &&
                                                    <>
                                                        <option value="IBPSPO">IBPS PO</option>
                                                        <option value="IBPSRRB">IBPS RRB</option>
                                                        <option value="SBICLERK">SBI Clerk</option>
                                                        <option value="SBIPO">SBI PO</option>
                                                        <option value="SBISO">SBI SO</option>
                                                        <option value="RBIGRADEB">RBI GRADE B</option>
                                                    </>}

                                                <option value="ALL">ALL</option>

                                            </select>
                                        </td>
                                        <td>
                                            <select defaultValue={this.state.time}
                                                onChange={this.handletime}
                                                className="form-control"
                                                style={{ maxWidth: '80%', minWidth: '80%' }}
                                            >
                                                <option value="">Select</option>
                                                <option value="1">1 Month</option>
                                                <option value="3">3 Months</option>
                                                {this.state.exam !== "RBIGRADEB" && <><option value="6">6 Months</option>
                                                    {(this.state.exam !== "MAH-CET" && this.state.exam !== "SBICLERK" && this.state.exam !== "SBISO") && <option value="12">1 Year</option>}</>}
                                                <option value="ALL">ALL</option>

                                            </select>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>

                            <div className="form-group" style={{ marginTop: 40 }}>
                                <button onClick={this.handlePlan} className="btn btn-primary btn-lg" title="Displays study plans made by our experts" >
                                    Show
                                </button>
                            </div>



                            <div className="row">

                                {this.state.FilesArray.map((f, i) => (
                                    <div
                                    data-aos="zoom-out"
                                    data-aos-delay="200"
                                    data-aos-duration="1000"
                                    data-aos-easing="ease-in-linear"
                                    key={i} className="col-sm-6 col-md-3">
                                        <div class="card">
                                            <img class="card-img-top" src={f.imageUrl} alt="Card image cap" />
                                            <div class="card-body">

                                                {this.state.ls !== null ? (
                                                    <a target="_blank" href={f.fileUrl} class="btn pull-right">
                                                        Download <i class="fa fa-download" aria-hidden="true"></i>
                                                    </a>
                                                ) : (
                                                        <button onClick={this.handleDownload} className="btn pull-right" >
                                                            Download <i class="fa fa-download" aria-hidden="true"></i>
                                                        </button>
                                                    )}
                                            </div>
                                        </div>
                                    </div>
                                ))}

                            </div>
                        </div>
                    </div>
                </div>


                <DownloadModalForm type="download-pdfs" />
            </>

        );
    }
}


export default staticplan;

