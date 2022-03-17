import React from 'react';
import {Fade} from 'react-awesome-reveal';

function CompareOnlinePrepCompanies() {


    const QDSProData = {
    
        mediumOfConductingClasses: ["Dedicated Online Tutoring Solution (Virtual Classroom-Like Experience)","QDS Pro Online Prep"],
        accessibleOn: ["All Devices","QDS Pro Online Prep App"],
        batchSize : ["Private Tutoring(1-on-1)","Batch Tutoring(3-4 Students)"],
        courseDuration:["150+ Hours - GMAT","240+ Hours - CAT" ],
        doubtSolving:["Unlimited Access to 24 x 7 Online Doubt Solving Services","(QDS Pro Doubt Solving Mobile App)"],
        demoSession: "Yes",
        customizedStudyPlan: "Yes",
        homeworkAssignments: "Yes",
        periodicPracticeTests: "Yes",
        studyMaterial: "QDS Pro Study Material + Popular Author Books and Publications",
        quesBank: ["20,000+ Practice Questions","(segregated section-wise, topic-wise and difficulty wise)"],
        masterWorkshops: ["Mental Math Workshops","Vocabulary Building Workshops","Motivational Sessions"],
        freeCarrierCounselling: "Yes",
        convenienceFlexibility: "Yes",
        doubtSolvingSessions:"Regular",
        reviserClasses : "Yes",
        mockTestsAndReviews : [["Mock Tests","Yes"],["Review","Yes"]],
        overallApproach : "Perfect Blend of Personalized & Professional Learning Approach"    
    }

    const OthersData = {

        mediumOfConductingClasses: "Zoom / Skype / Google Meet",
        accessibleOn: "Laptop / Computer" ,
        batchSize: ["Private Tutoring(1-on-1)","Batch Tutoring(20-25 Students)"],
        courseDuration: ["60 Hours - GMAT","120 Hours - CAT"] ,
        doubtSolving: "Request Faculties!",
        demoSession: "Yes",
        customizedStudyPlan: "No",
        homeworkAssignments: "No",
        periodicPracticeTests: "No",
        studyMaterial: "Only Coaching Institute's Study Material",
        quesBank: ["Around 5,000 Practice Questions","(segregated only section-wise)"],
        masterWorkshops: "No",
        freeCarrierCounselling: "Yes",
        convenienceFlexibility: "No",
        doubtSolvingSessions:"Periodic",
        reviserClasses : "No",
        mockTestsAndReviews : [["Mock Tests","Yes"],["Review","No"]],
        overallApproach : "Extremely Professional Learning Approach"
    
    }


    return (
        <>
        <div className="tabe">

            <div
            data-aos="fade-right"
            data-aos-duration="500"
            data-aos-easing="ease-in-sine"
            className="table-header">
            <div className="table-cell head head-feature">
                <h5>Features</h5>
            </div>
            <div className="table-cell head head-qds">
                <h5>QDS Pro</h5>
            </div>
            <div className="table-cell head head-others">
                <h5>Other Leading Online Test Prep Companies</h5>
            </div>
            </div>

            <div className="table-body">
            <Fade direction="up" cascade={true} triggerOnce={false} duration={200}>

                {/* Medium Of Conducting Classes */}
                <div
                className="table">

                    <div className="table-cell cell-feature"><strong>Medium Of Conducting Classes</strong></div>
                    <div className="table-cell">
                        {QDSProData.mediumOfConductingClasses.map(v=><><span>{v}</span><br/></>)}
                    </div>
                    <div className="table-cell">
                        {OthersData.mediumOfConductingClasses}
                    </div>

                </div>
                {/* Accessible On */}
                <div
                className="table">

                    <div className="table-cell cell-feature"><strong>Accessible On</strong></div>
                    <div className="table-cell">
                        {QDSProData.accessibleOn.map(v=><><span>{v}</span><br/></>)}
                    </div>
                    <div className="table-cell">
                        {OthersData.accessibleOn}
                    </div>
                
                </div>
                {/* BATCH SIZE */}
                <div
                className="table">
                
                    <div className="table-cell cell-feature"><strong>Batch Size</strong></div>
                    <div className="table-cell">
                        {QDSProData.batchSize.map(v=><><span>{v}</span><br /></>)}
                    </div>
                    <div className="table-cell">
                        {OthersData.batchSize.map(v=><><span>{v}</span><br /></>)}
                    </div>
                
                </div>
                {/* COURSE DURATION */}
                <div
                className="table">
                
                    <div className="table-cell cell-feature"><strong>Course Duration</strong></div>
                    <div className="table-cell">
                        {QDSProData.courseDuration.map(v=><><span>{v}</span><br/></>)}
                    </div>
                    <div className="table-cell">
                        {OthersData.courseDuration.map(v=><><span>{v}</span><br/></>)}
                    </div>
                
                </div>
                {/* Doubt Solving */}
                <div
                className="table">
                
                    <div className="table-cell cell-feature"><strong>Doubt Solving</strong></div>
                    <div className="table-cell">
                        {QDSProData.doubtSolving.map(v=><><span>{v}</span><br/></>)}
                    </div>
                    <div className="table-cell">
                        {OthersData.doubtSolving}
                    </div>
                
                </div>
                {/* Free Trial */}
                <div
                className="table">

                    <div className="table-cell cell-feature"><strong>Free Trial/Demo Session</strong></div>
                    <div className="table-cell">
                        <i className={`fa ${QDSProData.demoSession === "Yes" ? "fa-check text-success" : "fa-close text-danger"} ml-2 fa-2x`}></i>
                    </div>
                    <div className="table-cell">
                        <i className={`fa ${OthersData.demoSession === "Yes" ? "fa-check text-success" : "fa-close text-danger"} ml-2 fa-2x`}></i>
                    </div>

                </div>

                {/* Customized Study Plan */}
                <div 
                className="table">

                    <div className="table-cell cell-feature"><strong>Customized Study Plans</strong></div>
                    <div className="table-cell">
                        <i className={`fa ${QDSProData.customizedStudyPlan === "Yes" ? "fa-check text-success" : "fa-close text-danger"} ml-2 fa-2x`}></i>
                    </div>
                    <div className="table-cell">
                        <i className={`fa ${OthersData.customizedStudyPlan === "Yes" ? "fa-check text-success" : "fa-close text-danger"} ml-2 fa-2x`}></i>
                    </div>
                
                </div>

                {/* HomeWork Assignments */}
                <div
                className="table">

                    <div className="table-cell cell-feature"><strong>Homework Assignments</strong></div>
                    <div className="table-cell">
                        <i className={`fa ${QDSProData.homeworkAssignments === "Yes" ? "fa-check text-success" : "fa-close text-danger"} ml-2 fa-2x`}></i>                
                    </div>
                    <div className="table-cell">
                        <i className={`fa ${OthersData.homeworkAssignments === "Yes" ? "fa-check text-success" : "fa-close text-danger"} ml-2 fa-2x`}></i>
                    </div>
                
                </div>

                {/* Periodic Tests */}
                
                <div
                className="table">

                    <div className="table-cell cell-feature"><strong>Periodic Practice Tests</strong></div>
                    <div className="table-cell">
                        <i className={`fa ${QDSProData.periodicPracticeTests === "Yes" ? "fa-check text-success" : "fa-close text-danger"} ml-2 fa-2x`}></i>
                    </div>
                    <div className="table-cell">
                        <i className={`fa ${OthersData.periodicPracticeTests === "Yes" ? "fa-check text-success" : "fa-close text-danger"} ml-2 fa-2x`}></i>
                    </div>

                </div>
                {/* Study Material  */}
                <div
                className="table">

                    <div className="table-cell cell-feature"><strong>Study Material</strong></div>
                    <div className="table-cell">
                        {QDSProData.studyMaterial}
                    </div>
                    <div className="table-cell">
                        {OthersData.studyMaterial}
                    </div>
                
                </div>

                {/* Question Bank  */}
                <div
                className="table">

                    <div className="table-cell cell-feature"><strong>Question Bank</strong></div>
                    <div className="table-cell">
                        {QDSProData.quesBank.map(v=><><span>{v}</span><br/></>)}
                    </div>
                    <div className="table-cell">
                        {OthersData.quesBank.map(v=><><span>{v}</span><br/></>)}
                    </div>

                </div>

                {/* Master Workshops  */}
                
                <div
                className="table">

                    <div className="table-cell cell-feature"><strong>Master Workshops</strong></div>
                    <div className="table-cell">
                        {QDSProData.masterWorkshops.map(v=><><span>{v}</span><br/></>)}
                    </div>
                    <div className="table-cell">
                        <i className={`fa ${OthersData.masterWorkshops === "Yes" ? "fa-check text-success" : "fa-close text-danger"} ml-2 fa-2x`}></i>
                    </div>
                
                </div>

                {/* Free Carrier Counselling  */}
                <div
                className="table">

                    <div className="table-cell cell-feature"><strong>Free Carrier Counselling Session</strong></div>
                    <div className="table-cell">
                        <i className={`fa ${QDSProData.freeCarrierCounselling === "Yes" ? "fa-check text-success" : "fa-close text-danger"} ml-2 fa-2x`}></i>
                    </div>
                    <div className="table-cell">
                        <i className={`fa ${OthersData.freeCarrierCounselling === "Yes" ? "fa-check text-success" : "fa-close text-danger"} ml-2 fa-2x`}></i>
                    </div>
                
                </div>

                {/* Convenience Flexibility  */}
                
                <div
                className="table">

                    <div className="table-cell cell-feature"><strong>Convenience And Flexibilty</strong></div>
                    <div className="table-cell">
                        <i className={`fa ${QDSProData.convenienceFlexibility === "Yes" ? "fa-check text-success" : "fa-close text-danger"} ml-2 fa-2x`}></i>
                    </div>
                    <div className="table-cell">
                        <i className={`fa ${OthersData.convenienceFlexibility === "Yes" ? "fa-check text-success" : "fa-close text-danger"} ml-2 fa-2x`}></i>
                    </div>
                
                </div>

                {/* Doubt Solving Sessions  */}

                <div
                className="table">

                    <div className="table-cell cell-feature"><strong>Doubt Solving Sessions</strong></div>
                    <div className="table-cell">
                        {QDSProData.doubtSolvingSessions}
                    </div>
                    <div className="table-cell">
                        {OthersData.doubtSolvingSessions}
                    </div>

                </div>

                {/* Reviser Classes  */}
                <div
                className="table">

                    <div className="table-cell cell-feature"><strong>Reviser Classes</strong></div>
                    <div className="table-cell">
                        <i className={`fa ${QDSProData.reviserClasses === "Yes" ? "fa-check text-success" : "fa-close text-danger"} ml-2 fa-2x`}></i>
                    </div>
                    <div className="table-cell">
                        <i className={`fa ${OthersData.reviserClasses === "Yes" ? "fa-check text-success" : "fa-close text-danger"} ml-2 fa-2x`}></i>
                    </div>
                    
                </div>

                {/* Mock Test And Reviews  */}
                <div
                className="table">

                    <div className="table-cell cell-feature"><strong>Mock Test And Reviews</strong></div>
                    <div className="table-cell">
                        {QDSProData.mockTestsAndReviews.map(v=><><span>{v[0]} : </span><i className={`fa ${v[1] === "Yes" ? "fa-check text-success" : "fa-close text-danger"} ml-2`} style={{fontSize:25}}></i><br/></>)}
                    </div>
                    <div className="table-cell">
                        {OthersData.mockTestsAndReviews.map(v=><><span>{v[0]} : </span><i className={`fa ${v[1] === "Yes" ? "fa-check text-success" : "fa-close text-danger"} ml-2`} style={{fontSize:25}}></i><br/></>)}
                    </div>
                
                </div>
                
                {/* Overall Approach  */}
                <div
                className="table">
                
                    <div className="table-cell cell-feature"><strong>Overall Approach</strong></div>
                    <div className="table-cell">
                        {QDSProData.overallApproach}
                    </div>
                    <div className="table-cell">
                        {OthersData.overallApproach}
                    </div>
                
                </div>
            
            </Fade>
            </div>
        </div>
        <style>
            {`
              .table {
                display: flex;
                //flex-wrap: wrap;
                margin: 0 auto;
                padding: 0rem 0rem 0rem 0rem;
                max-width: 1160px;
                //max-height:450px;
                overflow-y:auto;
                border:1px solid #ddd;
                border-bottom:0.5px solid #ddd;
            }
            .table-body
            {
                max-height : 450px;
                overflow-y:auto;
            }
            .table-header{
                box-shadow:0 2px 5px grey;
                display:flex;
                max-width:99%;
            }
             .head{
                 background-color: #192f5a;
                 color: white;
             } 
            .table-cell {
                box-sizing: border-box;
                //flex-grow: 1;
                width: 100%;
                padding: 0.5em 1.2em;
                //overflow: hidden;
                list-style-type: none;
                outline: 1px solid #ddd;
                text-align: center;
                font-weight: 300;
                margin-top: 1px;
                margin-left: 1px;
            }
            .table-cell:first-child {
                outline: 1px solid #ddd;
            }
            
            .table-cell:nth-child(3) {
                outline: 1px solid #ddd;
            }
            .table-cell:nth-child(-n+3) {
                padding-top: 20px;
                padding-bottom: 5px;
            }
            .table-cell > h3 {
                font-size: 26px;
                margin-top:0;
                margin-bottom: 3rem;
            }
            .table-cell.cell-feature {
                text-align: left;
                font-size: 18px;
                font-weight: bolder;
            }
            
            .table-cell{
                box-shadow: 0 3px 7px rgb(236, 236, 236);
            }
            
              
              /* Table columns
              ================================== */
            .table-cell  {
            width: calc(33.33% - 1px);
            }
            
            @media screen and (max-width : 768px) {
                .table-cell > h3 {
                    font-size: 15px;
                    margin-top:0;
                    margin-bottom: 3rem;
                }
                .table-cell{
                    box-shadow: 0 3px 5px rgb(250,250,250);
                    
                }
                .table-header{
                    max-width:100%;
                }
                .table{
                    min-height:fit-content;
                }
            }
            
            @media only screen and (max-width : 768px) {
                .table-cell.cell-feature, .head {
                   text-align: center;
                   display: flex;
                   justify-content: center;
                   align-items: center;
                }
                
            }
            `}
        </style>
        </>
    );
}

export default CompareOnlinePrepCompanies;

