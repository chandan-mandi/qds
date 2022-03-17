import React, { Component, Fragment } from 'react';
import Header from "../components/Header";
import Footer from "../components/Footer";
import Table from 'react-bootstrap/Table'
import Head from 'next/head';
import DownloadModalForm from "../components/DownloadModalForm";
//import jsPDF from 'jspdf';  
//import html2canvas from 'html2canvas';


class Input extends Component {
    state = {
        name: '',
        screenCapture: "",
        displayt: false,
        lunch: '',
        selectValue: 'please choose',
        selectValuee: 'please choose',
        date: 'please choose',
        time: 'please choose',
        plan: '',
        mon78: '',
        mon89: '',
        mon910: '',
        mon1011: '',
        mon1112: '',
        mon121p: '',
        mon12p: '',
        mon23p: '',
        mon34p: '',
        mon45p: '',
        mon56p: '',
        mon67p: '',
        mon78p: '',
        mon89p: '',
        mon910p: '',
        mon1011p: '',
        tue78: '',
        tue89: '',
        tue910: '',
        tue1011: '',
        tue1112: '',
        tue121p: '',
        tue12p: '',
        tue23p: '',
        tue34p: '',
        tue45p: '',
        tue56p: '',
        tue67p: '',
        tue78p: '',
        tue89p: '',
        tue910p: '',
        tue1011p: '',
        wed78: '',
        wed89: '',
        wed910: '',
        wed1011: '',
        wed1112: '',
        wed121p: '',
        wed12p: '',
        wed23p: '',
        wed34p: '',
        wed45p: '',
        wed56p: '',
        wed67p: '',
        wed78p: '',
        wed89p: '',
        wed910p: '',
        wed1011p: '',
        th78: '',
        th89: '',
        th910: '',
        th1011: '',
        th1112: '',
        th121p: '',
        th12p: '',
        th23p: '',
        th34p: '',
        th45p: '',
        th56p: '',
        th67p: '',
        th78p: '',
        th89p: '',
        th910p: '',
        th1011p: '',
        fri78: '',
        fri89: '',
        fri910: '',
        fri1011: '',
        fri1112: '',
        fri121p: '',
        fri12p: '',
        fri23p: '',
        fri34p: '',
        fri45p: '',
        fri56p: '',
        fri67p: '',
        fri78p: '',
        fri89p: '',
        fri910p: '',
        fri1011p: '',
        fri78: '',
        sat89: '',
        sat910: '',
        sat1011: '',
        sat1112: '',
        sat121p: '',
        sat12p: '',
        sat23p: '',
        sat34p: '',
        sat45p: '',
        sat56p: '',
        sat67p: '',
        sat78p: '',
        sat89p: '',
        sat910p: '',
        sat1011p: '',
        sub89: '',
        sun910: '',
        sun1011: '',
        sun1112: '',
        sun121p: '',
        sun12p: '',
        sun23p: '',
        sun34p: '',
        sun45p: '',
        sun56p: '',
        sun67p: '',
        sun78p: '',
        sun89p: '',
        sun910p: '',
        sun1011p: '',
        mode: 'Normal',
        ls: ''
    }

    handleScreenCapture = screenCapture => {
        this.setState(
            {
                screenCapture
            },
            () => {
                screenCapture && this.openModal();
            }
        );
    };

    displayNameHandler = (e) => {
        let updatedName = e.target.value;
        this.setState({ name: updatedName });
        //console.log(updatedName);  
    }
    displayLunchHandler = (e) => {
        let updatedName = e.target.value;
        this.setState({ Lunch: updatedName });
        //console.log(updatedName);  
    }
    componentDidMount() {
        var ls = localStorage.getItem('create-time-table')
        this.setState({ ls: ls })
    }
    handleDownloadreg = (e) => {
        if (new Date(localStorage.getItem('create-time-table')) < new Date()) {
            localStorage.removeItem('create-time-table')
            $("#download_files").modal()
        }
        else {
            $("#download_files").modal()
        }

    }
    handleChange = (e) => {
        let updatedName = e.target.value;
        this.setState({ selectValue: updatedName });
    }
    handleDownload = (e) => {


        this.setState({ displayt: true });

        //console.log(updatedName);  
    }
    handleChange = (e) => {
        let updatedName = e.target.value;
        this.setState({ selectValue: updatedName });
    }

    handleChangee = (e) => {
        let updatedName = e.target.value;
        this.setState({ selectValuee: updatedName });
    }
    handleChangeee = (e) => {
        let updatedName = e.target.value;
        this.setState({ date: updatedName });
    }
    handleChangeeee = (e) => {
        let updatedName = e.target.value;
        this.setState({ time: updatedName });
    }
    displayplan = (e) => {
        let updatedName = e.target.value;
        this.setState({ plan: updatedName });
    }
    handlemode = (e) => {
        let updatedName = e.target.value;
        this.setState({ mode: updatedName });
    }
    handlePlan = (e) => {
        console.log(this.state.date)
        console.log(this.state.time)
        console.log(e.target.value)
        let updatedName = e.target.value;
        this.setState({ plan: '' })
        if (this.state.date == 'Monday' && this.state.time == '7:00am-8:00am') {
            this.setState({ mon78: this.state.plan });
        }
        if (this.state.date == 'Monday' && this.state.time == '8:00am-9:00am') {
            this.setState({ mon89: this.state.plan });
        }
        if (this.state.date == 'Monday' && this.state.time == '9:00am-10:00am') {
            this.setState({ mon910: this.state.plan });
        }
        if (this.state.date == 'Monday' && this.state.time == '10:00am-11:00am') {
            this.setState({ mon1011: this.state.plan });
        }
        if (this.state.date == 'Monday' && this.state.time == '11:00am-12:00pm') {
            this.setState({ mon1112: this.state.plan });
        }
        if (this.state.date == 'Monday' && this.state.time == '12:00pm-1:00pm') {
            this.setState({ mon121p: this.state.plan });
        }
        if (this.state.date == 'Monday' && this.state.time == '1:00pm-2:00pm') {
            this.setState({ mon12p: this.state.plan });
        }
        if (this.state.date == 'Monday' && this.state.time == '2:00pm-3:00pm') {
            this.setState({ mon23p: this.state.plan });
        }
        if (this.state.date == 'Monday' && this.state.time == '3:00pm-4:00pm') {
            this.setState({ mon34p: this.state.plan });
        }
        if (this.state.date == 'Monday' && this.state.time == '4:00pm-5:00pm') {
            this.setState({ mon45p: this.state.plan });
        }
        if (this.state.date == 'Monday' && this.state.time == '5:00pm-6:00pm') {
            this.setState({ mon56p: this.state.plan });
        }
        if (this.state.date == 'Monday' && this.state.time == '6:00pm-7:00pm') {
            this.setState({ mon67p: this.state.plan });
        }
        if (this.state.date == 'Monday' && this.state.time == '7:00pm-8:00pm') {
            this.setState({ mon78p: this.state.plan });
        }
        if (this.state.date == 'Monday' && this.state.time == '8:00pm-9:00pm') {
            this.setState({ mon89p: this.state.plan });
        }
        if (this.state.date == 'Monday' && this.state.time == '9:00pm-10:00pm') {
            this.setState({ mon910p: this.state.plan });
        }
        if (this.state.date == 'Monday' && this.state.time == '10:00pm-11:00pm') {
            this.setState({ mon1011p: this.state.plan });
        }
        if (this.state.date == 'Tuesday' && this.state.time == '7:00am-8:00am') {
            this.setState({ tue78: this.state.plan });
        }
        if (this.state.date == 'Tuesday' && this.state.time == '8:00am-9:00am') {
            this.setState({ tue89: this.state.plan });
        }
        if (this.state.date == 'Tuesday' && this.state.time == '9:00am-10:00am') {
            this.setState({ tue910: this.state.plan });
        }
        if (this.state.date == 'Tuesday' && this.state.time == '10:00am-11:00am') {
            this.setState({ tue1011: this.state.plan });
        }
        if (this.state.date == 'Tuesday' && this.state.time == '11:00am-12:00pm') {
            this.setState({ tue1112: this.state.plan });
        }
        if (this.state.date == 'Tuesday' && this.state.time == '12:00pm-1:00pm') {
            this.setState({ tue121p: this.state.plan });
        }
        if (this.state.date == 'Tuesday' && this.state.time == '1:00pm-2:00pm') {
            this.setState({ tue12p: this.state.plan });
        }
        if (this.state.date == 'Tuesday' && this.state.time == '2:00pm-3:00pm') {
            this.setState({ tue23p: this.state.plan });
        }
        if (this.state.date == 'Tuesday' && this.state.time == '3:00pm-4:00pm') {
            this.setState({ tue34p: this.state.plan });
        }
        if (this.state.date == 'Tuesday' && this.state.time == '4:00pm-5:00pm') {
            this.setState({ tue45p: this.state.plan });
        }
        if (this.state.date == 'Tuesday' && this.state.time == '5:00pm-6:00pm') {
            this.setState({ tue56p: this.state.plan });
        }
        if (this.state.date == 'Tuesday' && this.state.time == '6:00pm-7:00pm') {
            this.setState({ tue67p: this.state.plan });
        }
        if (this.state.date == 'Tuesday' && this.state.time == '7:00pm-8:00pm') {
            this.setState({ tue78p: this.state.plan });
        }
        if (this.state.date == 'Tuesday' && this.state.time == '8:00pm-9:00pm') {
            this.setState({ tue89p: this.state.plan });
        }
        if (this.state.date == 'Tuesday' && this.state.time == '9:00pm-10:00pm') {
            this.setState({ tue910p: this.state.plan });
        }
        if (this.state.date == 'Tuesday' && this.state.time == '10:00pm-11:00pm') {
            this.setState({ tue1011p: this.state.plan });
        }
        if (this.state.date == 'Wednesday' && this.state.time == '7:00am-8:00am') {
            this.setState({ wed78: this.state.plan });
        }
        if (this.state.date == 'Wednesday' && this.state.time == '8:00am-9:00am') {
            this.setState({ wed89: this.state.plan });
        }
        if (this.state.date == 'Wednesday' && this.state.time == '9:00am-10:00am') {
            this.setState({ wed910: this.state.plan });
        }
        if (this.state.date == 'Wednesday' && this.state.time == '10:00am-11:00am') {
            this.setState({ wed1011: this.state.plan });
        }
        if (this.state.date == 'Wednesday' && this.state.time == '11:00am-12:00pm') {
            this.setState({ wed1112: this.state.plan });
        }
        if (this.state.date == 'Wednesday' && this.state.time == '12:00pm-1:00pm') {
            this.setState({ wed121p: this.state.plan });
        }
        if (this.state.date == 'Wednesday' && this.state.time == '1:00pm-2:00pm') {
            this.setState({ wed12p: this.state.plan });
        }
        if (this.state.date == 'Wednesday' && this.state.time == '2:00pm-3:00pm') {
            this.setState({ wed23p: this.state.plan });
        }
        if (this.state.date == 'Wednesday' && this.state.time == '3:00pm-4:00pm') {
            this.setState({ wed34p: this.state.plan });
        }
        if (this.state.date == 'Wednesday' && this.state.time == '4:00pm-5:00pm') {
            this.setState({ wed45p: this.state.plan });
        }
        if (this.state.date == 'Wednesday' && this.state.time == '5:00pm-6:00pm') {
            this.setState({ wed56p: this.state.plan });
        }
        if (this.state.date == 'Wednesday' && this.state.time == '6:00pm-7:00pm') {
            this.setState({ wed67p: this.state.plan });
        }
        if (this.state.date == 'Wednesday' && this.state.time == '7:00pm-8:00pm') {
            this.setState({ wed78p: this.state.plan });
        }
        if (this.state.date == 'Wednesday' && this.state.time == '8:00pm-9:00pm') {
            this.setState({ wed89p: this.state.plan });
        }
        if (this.state.date == 'Wednesday' && this.state.time == '9:00pm-10:00pm') {
            this.setState({ wed910p: this.state.plan });
        }
        if (this.state.date == 'Wednesday' && this.state.time == '10:00pm-11:00pm') {
            this.setState({ wed1011p: this.state.plan });
        }
        if (this.state.date == 'Thursday' && this.state.time == '7:00am-8:00am') {
            this.setState({ th78: this.state.plan });
        }
        if (this.state.date == 'Thursday' && this.state.time == '8:00am-9:00am') {
            this.setState({ th89: this.state.plan });
        }
        if (this.state.date == 'Thursday' && this.state.time == '9:00am-10:00am') {
            this.setState({ th910: this.state.plan });
        }
        if (this.state.date == 'Thursday' && this.state.time == '10:00am-11:00am') {
            this.setState({ th1011: this.state.plan });
        }
        if (this.state.date == 'Thursday' && this.state.time == '11:00am-12:00pm') {
            this.setState({ th1112: this.state.plan });
        }
        if (this.state.date == 'Thursday' && this.state.time == '12:00pm-1:00pm') {
            this.setState({ th121p: this.state.plan });
        }
        if (this.state.date == 'Thursday' && this.state.time == '1:00pm-2:00pm') {
            this.setState({ th12p: this.state.plan });
        }
        if (this.state.date == 'Thursday' && this.state.time == '2:00pm-3:00pm') {
            this.setState({ th23p: this.state.plan });
        }
        if (this.state.date == 'Thursday' && this.state.time == '3:00pm-4:00pm') {
            this.setState({ th34p: this.state.plan });
        }
        if (this.state.date == 'Thursday' && this.state.time == '4:00pm-5:00pm') {
            this.setState({ th45p: this.state.plan });
        }
        if (this.state.date == 'Thursday' && this.state.time == '5:00pm-6:00pm') {
            this.setState({ th56p: this.state.plan });
        }
        if (this.state.date == 'Thursday' && this.state.time == '6:00pm-7:00pm') {
            this.setState({ th67p: this.state.plan });
        }
        if (this.state.date == 'Thursday' && this.state.time == '7:00pm-8:00pm') {
            this.setState({ th78p: this.state.plan });
        }
        if (this.state.date == 'Thursday' && this.state.time == '8:00pm-9:00pm') {
            this.setState({ th89p: this.state.plan });
        }
        if (this.state.date == 'Thursday' && this.state.time == '9:00pm-10:00pm') {
            this.setState({ th910p: this.state.plan });
        }
        if (this.state.date == 'Thursday' && this.state.time == '10:00pm-11:00pm') {
            this.setState({ th1011p: this.state.plan });
        }
        if (this.state.date == 'Friday' && this.state.time == '7:00am-8:00am') {
            this.setState({ fri78: this.state.plan });
        }
        if (this.state.date == 'Friday' && this.state.time == '8:00am-9:00am') {
            this.setState({ fri89: this.state.plan });
        }
        if (this.state.date == 'Friday' && this.state.time == '9:00am-10:00am') {
            this.setState({ fri910: this.state.plan });
        }
        if (this.state.date == 'Friday' && this.state.time == '10:00am-11:00am') {
            this.setState({ fri1011: this.state.plan });
        }
        if (this.state.date == 'Friday' && this.state.time == '11:00am-12:00pm') {
            this.setState({ fri1112: this.state.plan });
        }
        if (this.state.date == 'Friday' && this.state.time == '12:00pm-1:00pm') {
            this.setState({ fri121p: this.state.plan });
        }
        if (this.state.date == 'Friday' && this.state.time == '1:00pm-2:00pm') {
            this.setState({ fri12p: this.state.plan });
        }
        if (this.state.date == 'Friday' && this.state.time == '2:00pm-3:00pm') {
            this.setState({ fri23p: this.state.plan });
        }
        if (this.state.date == 'Friday' && this.state.time == '3:00pm-4:00pm') {
            this.setState({ fri34p: this.state.plan });
        }
        if (this.state.date == 'Friday' && this.state.time == '4:00pm-5:00pm') {
            this.setState({ fri45p: this.state.plan });
        }
        if (this.state.date == 'Friday' && this.state.time == '5:00pm-6:00pm') {
            this.setState({ fri56p: this.state.plan });
        }
        if (this.state.date == 'Friday' && this.state.time == '6:00pm-7:00pm') {
            this.setState({ fri67p: this.state.plan });
        }
        if (this.state.date == 'Friday' && this.state.time == '7:00pm-8:00pm') {
            this.setState({ fri78p: this.state.plan });
        }
        if (this.state.date == 'Friday' && this.state.time == '8:00pm-9:00pm') {
            this.setState({ fri89p: this.state.plan });
        }
        if (this.state.date == 'Friday' && this.state.time == '9:00pm-10:00pm') {
            this.setState({ fri910p: this.state.plan });
        }
        if (this.state.date == 'Friday' && this.state.time == '10:00pm-11:00pm') {
            this.setState({ fri1011p: this.state.plan });
        }
        if (this.state.date == 'Saturday' && this.state.time == '7:00am-8:00am') {
            this.setState({ sat78: this.state.plan });
        }
        if (this.state.date == 'Saturday' && this.state.time == '8:00am-9:00am') {
            this.setState({ sati89: this.state.plan });
        }
        if (this.state.date == 'Saturday' && this.state.time == '9:00am-10:00am') {
            this.setState({ sat910: this.state.plan });
        }
        if (this.state.date == 'Saturday' && this.state.time == '10:00am-11:00am') {
            this.setState({ sat1011: this.state.plan });
        }
        if (this.state.date == 'Saturday' && this.state.time == '11:00am-12:00pm') {
            this.setState({ sat1112: this.state.plan });
        }
        if (this.state.date == 'Saturday' && this.state.time == '12:00pm-1:00pm') {
            this.setState({ sat121p: this.state.plan });
        }
        if (this.state.date == 'Saturday' && this.state.time == '1:00pm-2:00pm') {
            this.setState({ sat12p: this.state.plan });
        }
        if (this.state.date == 'Saturday' && this.state.time == '2:00pm-3:00pm') {
            this.setState({ sat23p: this.state.plan });
        }
        if (this.state.date == 'Saturday' && this.state.time == '3:00pm-4:00pm') {
            this.setState({ sat34p: this.state.plan });
        }
        if (this.state.date == 'Saturday' && this.state.time == '4:00pm-5:00pm') {
            this.setState({ sat45p: this.state.plan });
        }
        if (this.state.date == 'Saturday' && this.state.time == '5:00pm-6:00pm') {
            this.setState({ sat56p: this.state.plan });
        }
        if (this.state.date == 'Saturday' && this.state.time == '6:00pm-7:00pm') {
            this.setState({ sat67p: this.state.plan });
        }
        if (this.state.date == 'Saturday' && this.state.time == '7:00pm-8:00pm') {
            this.setState({ sat78p: this.state.plan });
        }
        if (this.state.date == 'Saturday' && this.state.time == '8:00pm-9:00pm') {
            this.setState({ sat89p: this.state.plan });
        }
        if (this.state.date == 'Saturday' && this.state.time == '9:00pm-10:00pm') {
            this.setState({ sat910p: this.state.plan });
        }
        if (this.state.date == 'Saturday' && this.state.time == '10:00pm-11:00pm') {
            this.setState({ sat1011p: this.state.plan });
        }
        if (this.state.date == 'Sunday' && this.state.time == '7:00am-8:00am') {
            this.setState({ sun78: this.state.plan });
        }
        if (this.state.date == 'Sunday' && this.state.time == '8:00am-9:00am') {
            this.setState({ suni89: this.state.plan });
        }
        if (this.state.date == 'Sunday' && this.state.time == '9:00am-10:00am') {
            this.setState({ sun910: this.state.plan });
        }
        if (this.state.date == 'Sunday' && this.state.time == '10:00am-11:00am') {
            this.setState({ sun1011: this.state.plan });
        }
        if (this.state.date == 'Sunday' && this.state.time == '11:00am-12:00pm') {
            this.setState({ sun1112: this.state.plan });
        }
        if (this.state.date == 'Sunday' && this.state.time == '12:00pm-1:00pm') {
            this.setState({ sun121p: this.state.plan });
        }
        if (this.state.date == 'Sunday' && this.state.time == '1:00pm-2:00pm') {
            this.setState({ sun12p: this.state.plan });
        }
        if (this.state.date == 'Sunday' && this.state.time == '2:00pm-3:00pm') {
            this.setState({ sun23p: this.state.plan });
        }
        if (this.state.date == 'Sunday' && this.state.time == '3:00pm-4:00pm') {
            this.setState({ sun34p: this.state.plan });
        }
        if (this.state.date == 'Sunday' && this.state.time == '4:00pm-5:00pm') {
            this.setState({ sun45p: this.state.plan });
        }
        if (this.state.date == 'Sunday' && this.state.time == '5:00pm-6:00pm') {
            this.setState({ sun56p: this.state.plan });
        }
        if (this.state.date == 'Sunday' && this.state.time == '6:00pm-7:00pm') {
            this.setState({ sun67p: this.state.plan });
        }
        if (this.state.date == 'Sunday' && this.state.time == '7:00pm-8:00pm') {
            this.setState({ sun78p: this.state.plan });
        }
        if (this.state.date == 'Sunday' && this.state.time == '8:00pm-9:00pm') {
            this.setState({ sun89p: this.state.plan });
        }
        if (this.state.date == 'Sunday' && this.state.time == '9:00pm-10:00pm') {
            this.setState({ sun910p: this.state.plan });
        }
        if (this.state.date == 'Sunday' && this.state.time == '10:00pm-11:00pm') {
            this.setState({ sun1011p: this.state.plan });
        }
    }
    render() {

        return (
            <div>
                <Head>
                    <title>QDS Pro Entrance Exams Coaching Institute | Dynamic Study Plan </title>
                </Head>
                <style>
                    {`
                    .col-md-6{
                        margin-top: 10px;
                        margin-bottom: 10px;
                    }
                    .col-md-6 .card{
                        box-shadow: 6px 6px 10px #aaaaaa;
                        width: fit-content;
                        margin: auto;
                    }

                    .col-md-6 .card .s-downloads-img{
                        height: 370px;
                        width: 320px;
                    }
                `}
                </style>

                <div className="aboutus-section">
                    <div className="qds-wrapper">
                        <Header />
                        <div>
                            <div className="aboutus-banner">
                                <div className="about-title">
                                    <h1
                                        data-aos="zoom-in"
                                        data-aos-delay="300"
                                        data-aos-duration="1500"
                                        data-aos-easing="ease-in-linear"
                                        className="white-text banner-title">Dynamic Timetable Creator</h1>
                                </div>
                            </div>


                        </div>
                        <div className="dyn">
                            <h4
                                data-aos="fade-right"
                                data-aos-duration="1000"
                                data-aos-easing="ease-in-linear"
                                className="black-text" style={{ marginTop: 5 }}> Start Creating your Timetable </h4>
                            <div
                                data-aos="fade-right"
                                data-aos-duration="1000"
                                data-aos-easing="ease-in-linear"
                                className="form-group">
                                <input className="form-control" type="text" name="firstName" onChange={this.displayNameHandler} value={this.state.name} placeholder='Enter your name' />
                            </div>
                            <div style={{ marginTop: 15 }}></div>
                            <select defaultValue={this.state.mode}
                                onChange={this.handlemode}
                            >

                                <option value="dark">Dark</option>
                                <option value="Normal">Normal</option>

                            </select>
                            <div style={{ marginTop: 15 }}></div>
                            <div
                                data-aos="fade-left"
                                data-aos-duration="1000"
                                data-aos-easing="ease-in-linear"
                                className="form-group">
                                <h5 className="black-text" style={{ marginTop: 30 }}>Lunch Time       Dinner Time</h5>
                            </div>

                            <select defaultValue={this.state.selectValue}
                                onChange={this.handleChange}
                            >
                                <option value="">Select</option>
                                <option value="10:00-11:00am">10:00-11:00am</option>
                                <option value="11:00-12:00pm">11:00-12:00pm</option>
                                <option value="12:00-1:00pm">12:00-1:00pm</option>
                                <option value="1:00-2:00pm">1:00-2:00pm</option>
                                <option value="2:00-3:00pm">2:00-3:00pm</option>
                            </select>
                            <select defaultValue={this.state.selectValuee}
                                onChange={this.handleChangee}
                            >
                                <option value="">Select</option>
                                <option value="5:00-6:00pm">5:00-6:00pm</option>
                                <option value="6:00-7:00pm">6:00-7:00pm</option>
                                <option value="7:00-8:00pm">7:00-8:00pm</option>
                                <option value="8:00-9:00pm">8:00-9:00pm</option>
                                <option value="9:00-10:00pm">9:00-10:00pm</option>
                            </select>

                            <div style={{ marginTop: 10 }}>  </div>
                            <div style={{ marginBottom: 8 }}>  </div>
                            <div
                                data-aos="fade-left"
                                data-aos-duration="1000"
                                data-aos-easing="ease-in-linear"
                                className="form-group">
                                <h5>Select Day & Time</h5>
                            </div>

                            <select defaultValue={this.state.day}
                                onChange={this.handleChangeee}
                            >
                                <option value="">Select</option>
                                <option value="Monday">Monday</option>
                                <option value="Tuesday">Tuesday</option>
                                <option value="Wednesday">Wednesday</option>
                                <option value="Thursday">Thursday</option>
                                <option value="Friday">Friday</option>
                                <option value="Saturday">Saturday</option>
                                <option value="Sunday">Sunday</option>
                            </select>

                            <select defaultValue={this.state.time}
                                onChange={this.handleChangeeee}
                            >
                                <option value="">Select</option>
                                <option value="7:00am-8:00am">7:00am-8:00am</option>
                                <option value="8:00am-9:00am">8:00am-9:00am</option>
                                <option value="9:00am-10:00am">9:00am-10:00am</option>
                                <option value="10:00am-11:00am">10:00am-11:00am</option>
                                <option value="11:00am-12:00pm">11:00am-12:00pm</option>
                                <option value="12:00pm-1:00pm">12:00pm-1:00pm</option>
                                <option value="1:00pm-2:00pm">1:00pm-2:00pm</option>
                                <option value="2:00pm-3:00pm">2:00pm-3:00pm</option>
                                <option value="3:00pm-4:00pm">3:00pm-4:00pm</option>
                                <option value="4:00pm-5:00pm">4:00pm-5:00pm</option>
                                <option value="5:00pm-6:00pm">5:00pm-6:00pm</option>
                                <option value="6:00pm-7:00pm">6:00pm-7:00pm</option>
                                <option value="7:00pm-8:00pm">7:00pm-8:00pm</option>
                                <option value="8:00pm-9:00pm">8:00pm-9:00pm</option>
                                <option value="9:00pm-10:00pm">9:00pm-10:00pm</option>
                                <option value="10:00pm-11:00pm">10:00pm-11:00pm</option>
                            </select>
                            <div style={{ marginTop: 15 }}></div>

                            <div
                                data-aos="fade-right"
                                data-aos-duration="1000"
                                data-aos-easing="ease-in-linear"
                                className="form-group">
                                <input type="text" className="form-control" name="Note" onChange={this.displayplan} value={this.state.plan} placeholder='Enter your plan' />
                            </div>
                            <div
                                data-aos="fade-left"
                                data-aos-duration="1000"
                                data-aos-easing="ease-in-linear"
                                className="form-group">
                                <button onClick={this.handlePlan} className="btn btn-primary btn-sm" title="Adds your information to the Timetable" >
                                    Add to my timetable
                                                        </button>
                            </div>

                            <div style={{ marginTop: 15 }}></div>
                            {this.state.ls !== null ? (<button
                            data-aos="fade-left"
                            data-aos-duration="1000"
                            data-aos-easing="ease-in-linear"
                            onClick={this.handleDownload} className="btn btn-primary btn-sm" title="Display my timetable" >
                                Generate My Timetable
                            </button>
                            ) : (<button 
                                data-aos="fade-left"
                                data-aos-duration="1000"
                                data-aos-easing="ease-in-linear"
                            onClick={this.handleDownloadreg} className="btn btn-primary btn-sm" title="Display my timetable" >
                                Generate My Timetable
                            </button>)}

                        </div>
                        {this.state.displayt ?
                            <div
                            data-aos="zoom-in"
                    data-aos-duration="1000"
                    data-aos-easing="ease-in-linear"
                            >
                                <h3 className="text-center">{this.state.name}</h3>
                                <Table responsive="sm" striped bordered hover variant={this.state.mode}>


                                    <thead>

                                        <tr>
                                            <th>Time/Day</th>
                                            <th>Monday</th>
                                            <th>Tuesday</th>
                                            <th>Wednesday</th>
                                            <th>Thursday</th>
                                            <th>Friday</th>
                                            <th>Saturday</th>
                                            <th>Sunday</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>7:00am-8:00am</td>
                                            <td>{this.state.mon78}</td>
                                            <td>{this.state.tue78}</td>
                                            <td>{this.state.wed78}</td>
                                            <td>{this.state.th78}</td>
                                            <td>{this.state.fri78}</td>
                                            <td>{this.state.sat78}</td>
                                            <td>{this.state.sun78}</td>
                                        </tr>
                                        <tr>
                                            <td>8:00am-9:00am</td>
                                            <td>{this.state.mon89}</td>
                                            <td>{this.state.tue89}</td>
                                            <td>{this.state.wed89}</td>
                                            <td>{this.state.th89}</td>
                                            <td>{this.state.fri89}</td>
                                            <td>{this.state.sat89}</td>
                                            <td>{this.state.sun89}</td>
                                        </tr>
                                        <tr>
                                            <td>9:00am-10:00am</td>
                                            <td>{this.state.mon910}</td>
                                            <td>{this.state.tue910}</td>
                                            <td>{this.state.wed910}</td>
                                            <td>{this.state.th910}</td>
                                            <td>{this.state.fri910}</td>
                                            <td>{this.state.sat910}</td>
                                            <td>{this.state.sun910}</td>
                                        </tr>
                                        <tr>
                                            <td>10:00am-11:00am</td>
                                            {this.state.selectValue == '10:00-11:00am' ? <td>Lunch</td> : <td>{this.state.mon1011}</td>}
                                            {this.state.selectValue == '10:00-11:00am' ? <td>Lunch</td> : <td>{this.state.tue1011}</td>}
                                            {this.state.selectValue == '10:00-11:00am' ? <td>Lunch</td> : <td>{this.state.wed1011}</td>}
                                            {this.state.selectValue == '10:00-11:00am' ? <td>Lunch</td> : <td>{this.state.th1011}</td>}
                                            {this.state.selectValue == '10:00-11:00am' ? <td>Lunch</td> : <td>{this.state.fri1011}</td>}
                                            {this.state.selectValue == '10:00-11:00am' ? <td>Lunch</td> : <td>{this.state.sat1011}</td>}
                                            {this.state.selectValue == '10:00-11:00am' ? <td>Lunch</td> : <td>{this.state.sun1011}</td>}


                                        </tr>
                                        <tr>
                                            <td>11:00am-12:00pm</td>
                                            {this.state.selectValue == '11:00-12:00pm' ? <td>Lunch</td> : <td>{this.state.mon1112}</td>}
                                            {this.state.selectValue == '11:00-12:00pm' ? <td>Lunch</td> : <td>{this.state.tue1112}</td>}
                                            {this.state.selectValue == '11:00-12:00pm' ? <td>Lunch</td> : <td>{this.state.wed1112}</td>}
                                            {this.state.selectValue == '11:00-12:00pm' ? <td>Lunch</td> : <td>{this.state.th1112}</td>}
                                            {this.state.selectValue == '11:00-12:00pm' ? <td>Lunch</td> : <td>{this.state.fri1112}</td>}
                                            {this.state.selectValue == '11:00-12:00pm' ? <td>Lunch</td> : <td>{this.state.sat1112}</td>}
                                            {this.state.selectValue == '11:00-12:00pm' ? <td>Lunch</td> : <td>{this.state.sun1112}</td>}


                                        </tr>
                                        <tr>
                                            <td>12:00pm-1:00pm</td>
                                            {this.state.selectValue == '12:00-1:00pm' ? <td>Lunch</td> : <td>{this.state.mon121p}</td>}
                                            {this.state.selectValue == '12:00-1:00pm' ? <td>Lunch</td> : <td>{this.state.tue121p}</td>}
                                            {this.state.selectValue == '12:00-1:00pm' ? <td>Lunch</td> : <td>{this.state.wed121p}</td>}
                                            {this.state.selectValue == '12:00-1:00pm' ? <td>Lunch</td> : <td>{this.state.th121p}</td>}
                                            {this.state.selectValue == '12:00-1:00pm' ? <td>Lunch</td> : <td>{this.state.fri121p}</td>}
                                            {this.state.selectValue == '12:00-1:00pm' ? <td>Lunch</td> : <td>{this.state.sat121p}</td>}
                                            {this.state.selectValue == '12:00-1:00pm' ? <td>Lunch</td> : <td>{this.state.sun121p}</td>}

                                        </tr>
                                        <tr>
                                            <td>1:00pm-2:00pm</td>
                                            {this.state.selectValue == '1:00-2:00pm' ? <td>Lunch</td> : <td>{this.state.mon12p}</td>}
                                            {this.state.selectValue == '1:00-2:00pm' ? <td>Lunch</td> : <td>{this.state.tue12p}</td>}
                                            {this.state.selectValue == '1:00-2:00pm' ? <td>Lunch</td> : <td>{this.state.wed12p}</td>}
                                            {this.state.selectValue == '1:00-2:00pm' ? <td>Lunch</td> : <td>{this.state.th12p}</td>}
                                            {this.state.selectValue == '1:00-2:00pm' ? <td>Lunch</td> : <td>{this.state.fri12p}</td>}
                                            {this.state.selectValue == '1:00-2:00pm' ? <td>Lunch</td> : <td>{this.state.sat12p}</td>}
                                            {this.state.selectValue == '1:00-2:00pm' ? <td>Lunch</td> : <td>{this.state.sun12p}</td>}

                                        </tr>
                                        <tr>
                                            <td>2:00pm-3:00pm</td>
                                            {this.state.selectValue == '2:00-3:00pm' ? <td>Lunch</td> : <td>{this.state.mon23p}</td>}
                                            {this.state.selectValue == '2:00-3:00pm' ? <td>Lunch</td> : <td>{this.state.tue23p}</td>}
                                            {this.state.selectValue == '2:00-3:00pm' ? <td>Lunch</td> : <td>{this.state.wed23p}</td>}
                                            {this.state.selectValue == '2:00-3:00pm' ? <td>Lunch</td> : <td>{this.state.th23p}</td>}
                                            {this.state.selectValue == '2:00-3:00pm' ? <td>Lunch</td> : <td>{this.state.fri23p}</td>}
                                            {this.state.selectValue == '2:00-3:00pm' ? <td>Lunch</td> : <td>{this.state.sat23p}</td>}
                                            {this.state.selectValue == '2:00-3:00pm' ? <td>Lunch</td> : <td>{this.state.sun23p}</td>}
                                        </tr>
                                        <tr>
                                            <td>3:00pm-4:00pm</td>
                                            <td>{this.state.mon34p}</td>
                                            <td>{this.state.tue34p}</td>
                                            <td>{this.state.wed34p}</td>
                                            <td>{this.state.th34p}</td>
                                            <td>{this.state.fri34p}</td>
                                            <td>{this.state.sat34p}</td>
                                            <td>{this.state.sun34p}</td>
                                        </tr>
                                        <tr>
                                            <td>4:00pm-5:00pm</td>
                                            <td>{this.state.mon45p}</td>
                                            <td>{this.state.tue45p}</td>
                                            <td>{this.state.wed45p}</td>
                                            <td>{this.state.th45p}</td>
                                            <td>{this.state.fri45p}</td>
                                            <td>{this.state.sat45p}</td>
                                            <td>{this.state.sun5p}</td>
                                        </tr>
                                        <tr>
                                            <td>5:00pm-6:00pm</td>
                                            {this.state.selectValuee == '5:00-6:00pm' ? <td>Dinner</td> : <td>{this.state.mon56p}</td>}
                                            {this.state.selectValuee == '5:00-6:00pm' ? <td>Dinner</td> : <td>{this.state.tue56p}</td>}
                                            {this.state.selectValuee == '5:00-6:00pm' ? <td>Dinner</td> : <td>{this.state.wed56p}</td>}
                                            {this.state.selectValuee == '5:00-6:00pm' ? <td>Dinner</td> : <td>{this.state.th56p}</td>}
                                            {this.state.selectValuee == '5:00-6:00pm' ? <td>Dinner</td> : <td>{this.state.fri56p}</td>}
                                            {this.state.selectValuee == '5:00-6:00pm' ? <td>Dinner</td> : <td>{this.state.sat56p}</td>}
                                            {this.state.selectValuee == '5:00-6:00pm' ? <td>Dinner</td> : <td>{this.state.sun56p}</td>}
                                        </tr>
                                        <tr>
                                            <td>6:00pm-7:00pm</td>
                                            {this.state.selectValuee == '6:00-7:00pm' ? <td>Dinner</td> : <td>{this.state.mon67p}</td>}
                                            {this.state.selectValuee == '6:00-7:00pm' ? <td>Dinner</td> : <td>{this.state.tue67p}</td>}
                                            {this.state.selectValuee == '6:00-7:00pm' ? <td>Dinner</td> : <td>{this.state.wed67p}</td>}
                                            {this.state.selectValuee == '6:00-7:00pm' ? <td>Dinner</td> : <td>{this.state.th67p}</td>}
                                            {this.state.selectValuee == '6:00-7:00pm' ? <td>Dinner</td> : <td>{this.state.fri67p}</td>}
                                            {this.state.selectValuee == '6:00-7:00pm' ? <td>Dinner</td> : <td>{this.state.sat67p}</td>}
                                            {this.state.selectValuee == '6:00-7:00pm' ? <td>Dinner</td> : <td>{this.state.sun67p}</td>}
                                        </tr>
                                        <tr>
                                            <td>7:00pm-8:00pm</td>
                                            {this.state.selectValuee == '7:00-8:00pm' ? <td>Dinner</td> : <td>{this.state.mon78p}</td>}
                                            {this.state.selectValuee == '7:00-8:00pm' ? <td>Dinner</td> : <td>{this.state.tue78p}</td>}
                                            {this.state.selectValuee == '7:00-8:00pm' ? <td>Dinner</td> : <td>{this.state.wed78p}</td>}
                                            {this.state.selectValuee == '7:00-8:00pm' ? <td>Dinner</td> : <td>{this.state.th78p}</td>}
                                            {this.state.selectValuee == '7:00-8:00pm' ? <td>Dinner</td> : <td>{this.state.fri78p}</td>}
                                            {this.state.selectValuee == '7:00-8:00pm' ? <td>Dinner</td> : <td>{this.state.sat78p}</td>}
                                            {this.state.selectValuee == '7:00-8:00pm' ? <td>Dinner</td> : <td>{this.state.sun78p}</td>}
                                        </tr>
                                        <tr>
                                            <td>8:00pm-9:00pm</td>
                                            {this.state.selectValuee == '8:00-9:00pm' ? <td>Dinner</td> : <td>{this.state.mon89p}</td>}
                                            {this.state.selectValuee == '8:00-9:00pm' ? <td>Dinner</td> : <td>{this.state.tue89p}</td>}
                                            {this.state.selectValuee == '8:00-9:00pm' ? <td>Dinner</td> : <td>{this.state.wed89p}</td>}
                                            {this.state.selectValuee == '8:00-9:00pm' ? <td>Dinner</td> : <td>{this.state.th89p}</td>}
                                            {this.state.selectValuee == '8:00-9:00pm' ? <td>Dinner</td> : <td>{this.state.fri89p}</td>}
                                            {this.state.selectValuee == '8:00-9:00pm' ? <td>Dinner</td> : <td>{this.state.sat89p}</td>}
                                            {this.state.selectValuee == '8:00-9:00pm' ? <td>Dinner</td> : <td>{this.state.sun89p}</td>}
                                        </tr>
                                        <tr>
                                            <td>9:00pm-10:00pm</td>
                                            {this.state.selectValuee == '9:00-10:00pm' ? <td>Dinner</td> : <td>{this.state.mon910p}</td>}
                                            {this.state.selectValuee == '9:00-10:00pm' ? <td>Dinner</td> : <td>{this.state.tue910p}</td>}
                                            {this.state.selectValuee == '9:00-10:00pm' ? <td>Dinner</td> : <td>{this.state.wed910p}</td>}
                                            {this.state.selectValuee == '9:00-10:00pm' ? <td>Dinner</td> : <td>{this.state.th910p}</td>}
                                            {this.state.selectValuee == '9:00-10:00pm' ? <td>Dinner</td> : <td>{this.state.fri910p}</td>}
                                            {this.state.selectValuee == '9:00-10:00pm' ? <td>Dinner</td> : <td>{this.state.sat910p}</td>}
                                            {this.state.selectValuee == '9:00-10:00pm' ? <td>Dinner</td> : <td>{this.state.sun910p}</td>}
                                        </tr>
                                        <tr>
                                            <td>10:00pm-11:00pm</td>
                                            <td>{this.state.mon1011p}</td>
                                            <td>{this.state.tue1011p}</td>
                                            <td>{this.state.wed1011p}</td>
                                            <td>{this.state.th1011p}</td>
                                            <td>{this.state.fri1011p}</td>
                                            <td>{this.state.sat1011p}</td>
                                            <td>{this.state.sun1011p}</td>
                                        </tr>

                                    </tbody>
                                </Table>

                            </div> : <div></div>
                        }
                        <DownloadModalForm type="create-time-table" />


                        <Footer />
                    </div>
                </div>
            </div>
        );
    }
}

export default Input;

