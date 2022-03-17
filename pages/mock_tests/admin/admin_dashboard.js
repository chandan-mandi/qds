import React, { useState } from 'react';
import Link from 'next/link';
import Box from '../../../components/Box';
import { mockTestFireStore } from '../firestore';
import { Router } from 'next/router';

function AdminDashboard(props)
{
    const [viewTest, setViewTest] = useState(false);
    const [displayTable, setDisplayTable] = useState(false);

    const [course, setCourse] = useState("");

    const [tests, setTests] = useState([]); 

    const [fetched, setFetched] = useState(false);

    const displayTests = () => {

        setDisplayTable(true);
        setFetched(false);

        var tempArr = [];
        
        if(course !== "")
        {
            mockTestFireStore.collection(course).get()
            .then((snapshot) => {

                if(snapshot.size > 0)
                {
                    snapshot.forEach((doc) => {

                        tempArr.push(doc.data());

                    });
                }
                console.log("Temp Data: ",tempArr);
                return tempArr;

            })
            .then((tempArr) => {

                setTests(tempArr)
                setFetched(true);
                //console.log("Actual Data: ",tests);
            
            })
            .catch((err) => {
                console.log(err);
                alert("Error while fetching tests");
            });
        }

    };

    const handleChange = (event) => {

        setCourse(event.target.value);
        setDisplayTable(false);

    }

    const deleteDocument = (course, docname) => {

        if(confirm("Do you want to really delete the test: " + docname))
        {
            mockTestFireStore.collection(course).doc(docname).delete()
            .then(() => {
                alert(docname + " deleted successfully");
            })
            .catch((err) => {
                alert("Error Deleting " + docname + ": " + err);
            })
        }
        displayTests();
        
    }

    return(

        <React.Fragment>
            <style>
            {`
                 .dashboard-nav
                 {
                     background-color: #192f5a;
                     transition: all .5s;
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
                 .box-component
                 {
                     width: 75%;
                     margin: auto;
                     margin-top: 1rem;
                 }
                 .box-component:hover
                 {
                    background-image: linear-gradient(to right, #77bf43 48%, #7ac042 66%, #83c340 78%, #93c83c 89%, #a9cf37 100%, #aacf37);
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
                 .thead
                {
                    background-color: #213247;
                    color: #fff;
                }
                th
                {
                    width: 100vw;
                }

            `}
            </style>
            <div className="container-fluid dashboard-nav p-2">
                <div className="row p-3 text-white">
                    <div className="col-10 d-flex pl-4">
                        <img src="/assets/images/qds-logo.webp" alt="Logo" className="logo pr-3"></img>
                        <h4 className="welcomeText align-self-center pl-3">Welcome, Admin</h4>
                    </div>
                    <div className="col-2 align-self-center">
                        <a href="/mock_tests/login" className="float-right mr-5 text-white">Logout</a>
                    </div>
                </div>
            </div>
            <div className="container-fluid content-container text-center">
                <div className="row">
                    <div className="col-12 mb-2">
                        <h2 className="welcomeText">Create New Resources</h2>
                    </div>
                    <div className="col-6">
                        <a href="/mock_tests/admin/create_id">
                            <Box className="box-component">
                                <div className="exam-name text-left">
                                    <span className="fa fa-id-badge m-2"></span>    
                                    Create A New Student ID
                                </div>
                                <div className="text-right chevron">
                                    <span className="fa fa-chevron-right m-2"></span>
                                </div>
                            </Box>
                        </a>                        
                    </div>
                    <div className="col-6">
                        <a href="/mock_tests/admin/create_test">
                            <Box className="box-component">
                                <div className="exam-name text-left">
                                    <span className="fa fa-file-text-o m-2"></span>
                                    Create A New Test
                                </div>
                                <div className="text-right chevron">
                                    <span className="fa fa-chevron-right m-2"></span>
                                </div>
                            </Box>
                        </a>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 mb-2 mt-5">
                        <h2 className="welcomeText">View Resources</h2>
                    </div>
                    <div className="col-6">
                        <Box className="box-component">
                            <div className="exam-name text-left">
                                <span className="fa fa-id-badge m-2"></span>
                                    View Student ID
                            </div>
                            <div className="text-right chevron">
                                <span className="fa fa-chevron-right m-2"></span>
                            </div>
                        </Box>
                    </div>
                    <div className="col-6">
                        <Box className="box-component" onClick={() => setViewTest(true)}>
                            <div className="exam-name text-left">
                                <span className="fa fa-file-text-o m-2"></span>
                                    View Test
                            </div>
                            <div className="text-right chevron">
                                <span className="fa fa-chevron-right m-2"></span>
                            </div>
                        </Box>
                    </div>
                </div>
                <div className="row">
                {
                    viewTest && (
                        
                        <div className="col-12 p-5">
                            <div className="form-row">
                                <div className="form-group offset-3 col-6">
                                    <label htmlFor="course">Select A Course{' '}</label>
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="form-group offset-2 col-6">
                                    <select required name="course" id="course" className="form-control" onChange={handleChange}>
                                        <option value="" selected>Select Course</option>
                                        <option value="CAT">CAT</option>
                                        <option value="SAT">SAT</option>
                                        <option value="GRE">GRE</option>
                                        <option value="GMAT">GMAT</option>
                                        <option value="MAH-CET">MAH-CET</option>
                                    </select>    
                                </div>
                                <div className="form-group col-2">
                                    <button className="btn btn-primary w-100" onClick={displayTests}>View</button>
                                </div>
                            </div>
                        </div>
                    )
                }
                </div>
                <div className="row">
                {
                    displayTable && (

                        <div className="col-12 test-col">

                            <h4 className="welcomeText text-left mb-3">Course: {course}</h4>
                            <div className="table-responsive">
                                <div className="table table-hover">
                                    <thead className="thead">
                                        <tr>
                                            <th>Test Name</th>
                                            <th>Time</th>
                                            <th></th>
                                            <th></th>
                                            <th></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                    {
                                        fetched === false && <span className="fa fa-circle-o-notch fa-spin fa-fw"></span>
                                    }
                                    {
                                        tests.length === 0 && fetched === true && <p className="modal-text">No tests to display</p>
                                    }
                                    {
                                        tests.length > 0 && fetched === true && tests.map((doc, i) => {


                                            return(

                                                <tr>
                                                    
                                                    <th>{doc.name}</th>
                                                    
                                                    <th>{doc.total_time} min</th>
                                                    
                                                    <th>
                                                        <Link href={{pathname: "/mock_tests/admin/view_test", query: {course: course, name: doc.name}}}>
                                                            <a className="btn btn-primary text-white">View</a>
                                                        </Link>
                                                    </th>
                                                    
                                                    <th>
                                                        <Link href={{pathname: "/mock_tests/admin/update_test", query : {course: course, name: doc.name}}}>
                                                            <a className="btn btn-info text-white">Update</a>
                                                        </Link>
                                                    </th>
                                                    
                                                    <th>
                                                        <a className="btn btn-danger text-white" onClick={() => deleteDocument(course, doc.name)}>Delete</a>
                                                    </th>

                                                </tr>

                                            );

                                        })
                                    }
                                    </tbody>
                                </div>
                            </div>
                        </div>
                    )
                }
                </div>
            </div>


        </React.Fragment>

    )
}

export default AdminDashboard;
