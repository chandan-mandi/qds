
import React from 'react';
import { Component } from 'react';
import AdminDashboard from './admin/admin_dashboard';
import StudentDashboard from './student_dashboard';

class Login extends Component{

    constructor(props)
    {
        super(props);
        this.state = {
            email: '',
            emailError: '',
            password: '',
            passwordError: '',
            loginType: '',
            loginTypeError: '',
            validCredentials: false,
            invalidCredentials: "",
            login: false,
            adminLogin: false
        }
    }

    validate = (name, value) => {

        let errorMssg = '';
        switch(name){

            case 'email' : 

                if(value.length > 0)
                {
                    let validEmail = /^([a-z0-9.-]+)@([a-z-]+)\.([a-z]{3,8})(.[a-z]{2-8})?$/; 
                    let isValid = validEmail.test(value);
                    if(!isValid)
                    {
                        errorMssg = "Invalid Email ID";
                    }
                }
                else
                {
                    errorMssg = "Required";
                }
                this.setState({emailError: errorMssg});
                break;

            case 'password' : 
                
                if(!value.length > 0)
                {
                    errorMssg = "Required";
                }
                this.setState({passwordError: errorMssg});
                break;

            default: break;

        }
        
    }

    handleChange = (event) => {
        
        var name = event.target.name;
        var value = event.target.value;
        
        this.setState({ invalidCredentials: ""});

        if(name !== "loginType")
        {    
            this.validate(name,value);
        }
        
        this.setState({[name]: value});

        if(name === "password")
        {
            if(this.state.loginType === "student" && value === "qdspro")
            {
                this.setState({ login: true, adminLogin: false});
                // this.setState({ validCredentials: true, login: true, adminLogin: false });
            }
            else if(this.state.loginType === "admin" && value === "admin@qdspro")
            {
                this.setState({ adminLogin: true, login: false });
                // this.setState({ validCredentials: true, login: true, adminLogin: true });
            }
            else
            {
                this.setState({ adminLogin: false, login: false });
            }
        }


    }

    handleReset = () => {

        this.setState({
            email: '',
            emailError: '',
            password: '',
            passwordError: '',
            validCredentials: false,
            invalidCredentials: "",
        });


    }

    handleLogin = (event) => {

        event.preventDefault();

        console.log(this.state);
        
        if(this.state.email === ""  || this.state.password === "")
        {
            this.setState({ emailError: "Required", passwordError: "Required"});
        }
        else if(this.state.emailError !== ""  || this.state.passwordError !== "")
        {
            this.setState({ invalidCredentials:  "Invalid Credentials"});
        }
        else
        {
            this.setState({ invalidCredentials: "Invalid Login-Type/Username/Password"})
            
            // if(this.state.loginType === "student" && this.state.password === "qdspro")
            // {
            //     this.setState({ login: true, adminLogin: false});
            //     // this.setState({ validCredentials: true, login: true, adminLogin: false });
            // }
            // else if(this.state.loginType === "admin" && this.state.password === "admin@qdspro")
            // {
            //     this.setState({ adminLogin: true, login: false });
            //     // this.setState({ validCredentials: true, login: true, adminLogin: true });
            // }
            // else
            // {
            //     this.setState({ invalidCredentials: "Invalid Login-Type/Username/Password"})
            // }
        }

    }

    render()
    {

        if(this.state.validCredentials)
        {
            if(!this.state.adminLogin)
                return(
                    <StudentDashboard email={this.state.email}></StudentDashboard>
                );
            else
                return <AdminDashboard></AdminDashboard>
        }

        else
            return(
                <React.Fragment>
                    
                    <style>
                        {`
                            .top-numbers, .icon-pack
                            {
                                visibility: hidden;
                            }
                        

                        `}
                    </style>
                    <div className="container-fluid d-flex align-items-center justify-content-center mt-5 p-2 p-md-5">
                        <div className="row pt-5 pb-5 m-2 p-md-5 m-md-5 login">
                            <div className="col-12">
                                <h1>Login</h1> 
                            </div>
                            <div className="col-12">
                                <hr className="bg-dark"></hr>
                                
                                <div>
                                    <span className={`fa ${this.state.invalidCredentials ?  'fa-times' : ''}`}>{' ' + this.state.invalidCredentials}</span>
                                </div>
                                <form onReset={this.handleReset}>
                                    <div className="form-group">
                                        <label htmlFor="login_type">Login As:{' '}</label>
                                        <span className="float-right"><span className={`fa ${this.state.loginTypeError ? "fa-times" : ""}`}>{' ' + this.state.loginTypeError}</span></span>
                                        <select required name="loginType" id="loginType" className="form-control" onChange={this.handleChange}>
                                            <option value="" selected>Select Login Type</option>
                                            <option value="student">Student</option>
                                            <option value="admin">Admin</option>
                                        </select>
                                        
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="email">Username{' '}</label>
                                        <span className="float-right"><span className={`fa ${this.state.emailError ? "fa-times" : ""}`}>{' ' + this.state.emailError}</span></span>
                                        <input required type="text" className="form-control" name="email" id="email" placeholder="Email ID"
                                                onChange={this.handleChange}></input>
                                        
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="password">Password{' '}</label>
                                        <span className="float-right"><span className={`fa ${this.state.passwordError ? "fa-times" : ""}`}>{' ' + this.state.passwordError}</span></span>
                                        <input required type="password" className="form-control" name="password" id="password" placeholder="Password"
                                                onChange={this.handleChange}></input>
                                        
                                    </div>
                                    <div className="form-group mt-5">
                                        {
                                            this.state.login === false && this.state.adminLogin === false && <a href="/mock_tests/student_dashboard" type="submit" className="btn btn-success offset-1 col-5 float-right text-white" onClick={this.handleLogin}>Login</a>
                                        }
                                        {
                                            this.state.login === true && <a href="/mock_tests/student_dashboard" type="submit" className="btn btn-success offset-1 col-5 float-right text-white" >Login</a>
                                        }
                                        {
                                            this.state.adminLogin === true && <a href="/mock_tests/admin/admin_dashboard" type="submit" className="btn btn-success offset-1 col-5 float-right text-white" >Login</a>
                                        }
                                      
                                        <button type="reset"  className="btn btn-danger col-5 text-white">Reset</button>
                                    </div>
                                    
                                </form>
                            </div>
                        </div>
                    </div>
                </React.Fragment>
            );
    }
}

export default Login;