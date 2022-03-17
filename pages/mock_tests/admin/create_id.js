import React, { useState } from 'react';
import { mockTestFireStore } from '../firestore';

function CreateID(props)
{
    const initialData = {
        fullname: "",
        username: "",
        password: "",
        courses: [],
        scores: {}
    }

    const [id, setID] = useState(initialData);

    const handleChange = (e) => {

        var tempData = id;
        const name = e.target.name;
        const value = e.target.value;

        if(name === "course")
        {
            let index = tempData.courses.indexOf(value);
            if( index === -1)
            {
                tempData.courses.push(value);
            }
            else
            {
                tempData.courses.splice(index, 1);
            }
        }
        else
        {
            tempData[name] = value;
        }

        setID(tempData);

    }

    const handleSubmit = () => {
        
        var tempData = id;
        for(let i = 0; i < tempData.courses.length; i++)
        {
            tempData.scores[tempData.courses[i]] = {}
        }

        setID(tempData);

        mockTestFireStore.collection("auth").doc(id.fullname).set(id)
        .then(() => alert("Student ID created successfully!!"))
        .catch((err) => alert("Error Creating Student ID : " + err + "!!"));
        
        // alert(JSON.stringify(id));
        // location.reload();

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
                        width: 50%;
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
                            <img src="/assets/images/qds-logo.png" alt="Logo" className="logo pr-3"></img>   
                            <h4 className="welcomeText align-self-center pl-3">Create Student ID</h4>                    
                        </div> 
                        <div className="col-2 align-self-center">
                            <a href="/mock_tests/login" className="float-right mr-5 text-white">Logout</a>
                        </div>
                    </div>
                </div>
                <div className="container-fluid content-container">
                    <div className="row">
                        <div className="col-12">
                            <h2 className="welcomeText">Create a student ID</h2>
                        </div>    
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <form className="mt-3 ml-3">
                                <div className="form-row">
                                    <div className="form-group col-sm-12">
                                        <label htmlFor="fullname">Name of the student</label>
                                        <input required className="form-control" placeholder="Enter Student Name" type="text" id="fullname" name="fullname" onChange={handleChange}></input>
                                    </div>
                                </div>
                                <div className="form-row">
                                    <div className="form-group col-sm-12">
                                        <label htmlFor="username">Username</label>
                                        <input required className="form-control" placeholder="Enter Username" type="text" id="username" name="username" onChange={handleChange}></input>
                                    </div>
                                </div>
                                <div className="form-row">
                                    <div className="form-group col-sm-12">
                                        <label htmlFor="password">Password</label>
                                        <input required className="form-control" placeholder="Enter Password" type="text" id="password" name="password" onChange={handleChange}></input>
                                    </div>
                                </div>
                                <div className="form-row">
                                    <div className="form-group col-sm-12">
                                        <div className="form-check">
                                            <input required className="form-check-input" type="checkbox" onChange={handleChange} name="course" id="course1" value="GMAT"></input>
                                            <label className="form-check-label" htmlFor="course1">GMAT</label>
                                        </div>
                                        <div className="form-check">
                                            <input required className="form-check-input" type="checkbox" onChange={handleChange} name="course" id="course2" value="CAT"></input>
                                            <label className="form-check-label" htmlFor="course2">CAT</label>
                                        </div>
                                        <div className="form-check">
                                            <input required className="form-check-input" type="checkbox" onChange={handleChange} name="course" id="course3" value="GRE"></input>
                                            <label className="form-check-label" htmlFor="course3">GRE</label>
                                        </div>
                                        <div className="form-check">
                                            <input required className="form-check-input" type="checkbox" onChange={handleChange} name="course" id="course4" value="SAT"></input>
                                            <label className="form-check-label" htmlFor="course4">SAT</label>
                                        </div>
                                        <div className="form-check">
                                            <input required className="form-check-input" type="checkbox" onChange={handleChange} name="course" id="course5" value="MAH-CET"></input>
                                            <label className="form-check-label" htmlFor="course5">MAH-CET</label>
                                        </div>
                                    </div>
                                </div>
                                <div className="form-row">
                                    <div className="form-group col-sm-12 text-center">
                                        <button onClick={handleSubmit} className="btn btn-primary">Submit</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
        </React.Fragment>
    );

}

export default CreateID;