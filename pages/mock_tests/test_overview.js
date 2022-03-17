import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { mockTestFireStore } from './firestore';
import HeaderMockTest from './header';

function TestOverview(props)
{
    const url = useRouter();
    const exam = url.query.exam;

    const [tests, setTests] = useState([]); 

    const [nameModal, setNameModal] = useState("");
    const [timeModal, setTimeModal] = useState("");

    const [fetched, setFetched] = useState(false);

    useEffect(() => {

        var tempArr = [];
        mockTestFireStore.collection(exam).get()
        .then((snapshot) => {

            if(snapshot.size > 0)
            {
                snapshot.forEach((doc) => {
                tempArr = tests;
                tempArr.push(doc.data());

                });
            }
            console.log("Temp Data: ",tempArr);
            return tempArr;

        })
        .then((tempArr) => {

            setTests(tempArr)
            setFetched(true);
            console.log("Actual Data: ",tests);
        
        })
        .catch((err) => {
            console.log(err);
            alert("Error while fetching tests");
        });


    }, []);

    const openExamPlayer = () => {

        window.open(`${window.location.origin}/mock_tests/exam_player/instructions?exam=${exam}&test=${nameModal}`, 'Popup', `channelmode,fullscreen,height=${screen.height},width=${screen.width}`)
        $("#beginModal").modal('hide');

    }

    const setModalData = (name, time) => {

        setNameModal(name);
        setTimeModal(time);

    }
    return(

        <React.Fragment>
            <style>
                {`
                    .content-container
                    {
                        width: 100%;
                        margin-left: 3rem;
                        margin-right: 3rem;
                        transition: all .5s;
                    }
                    .top-numbers, .icon-pack
                    {
                        visibility: hidden;
                    }
                    .title
                    {
                        font-weight: 500;
                    }
                    .modal-text
                    {
                        font-size: 16px;
                    }
                    .thead
                    {
                        background-color: #213247;
                        color: #fff;
                    }
                    th
                    {
                        width: 30%;
                    }

                `}
            </style>
            <HeaderMockTest email={props.email}></HeaderMockTest>
            <div className="container-fluid content-container mt-5">
                <div className="row">
                    <div className="col-12 mb-2">
                        <h3 className="title">{exam}</h3>
                    </div>
                    <div className="col-12 mb-2">
                        <p className="content">Click on any of the below listed {exam} mock test to begin.</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 mb-2">
                        <div className="table-responsive">
                            <div className="table table-hover">
                                <thead className="thead">
                                    <tr>
                                        <th>Test Name</th>
                                        <th>Time</th>
                                        <th>Status</th>
                                        <th>Score</th>
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
                                                <a href="#" data-toggle="modal" data-target="#beginModal" onClick={() => setModalData(doc.name, doc.total_time)}>
                                                    <th>{doc.name}</th>
                                                </a>
                                                <th>{doc.total_time} min</th>
                                                <th>-</th>
                                                <th>-</th>
                                            </tr>

                                        );

                                    })
                                }
                                </tbody>
                            </div>
                        </div>
                    </div>
                </div> 
                <div className="modal fade" id="beginModal" role="dialog">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h4 className="modal-title">Begin Mock Test</h4>
                                <button style={{ color: '#77bf43', textShadow: 'none', opacity: 1 }} type="button" className="close" data-dismiss="modal">&times;</button>
                            </div>
                            <div className="modal-body">
                                <h6 className="title">Course Name: {exam}</h6>
                                <h6 className="title">Test Name: {nameModal}</h6>
                                <p className="modal-text">Test Time Limit: {timeModal} min</p>
                                <button type="button" className="btn btn-primary mr-3 mt-3" data-dismiss="modal" data-toggle="modal" data-target="#beginModal">Close</button>
                                <a href="#" onClick={openExamPlayer} className="btn btn-primary mt-3 pull-right">Launch</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </React.Fragment>

    )
}

export default TestOverview;