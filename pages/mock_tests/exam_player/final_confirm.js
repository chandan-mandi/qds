import React from 'react';

function FinalStep(props)
{

    const closeWindow = () => {

        window.close();

    }


    return(

        <React.Fragment>
            <style>
            {`
                .top-numbers, .icon-pack
                {
                    visibility: hidden;
                }    
                
                .empty-col
                {   
                    background-color: #192f5a;
                    height: 25px;
                }

                
                .btn-submit
                {
                    background-color: #007bff;
                    color: #fff;
                    margin-left: 31%;
                    margin-right: 31%;
                }
                .btn-submit:hover
                {
                    color: #fff;
                }
            
            `}
            </style>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12 empty-col">

                    </div>
                </div>
                <div className="row">
                    <div className="col-12 text-center">
                        <h4 className="mt-5">You have successfully completed the exam</h4>
                        <h4 className="mt-4">Please click on the below button to exit</h4>
                        <button className="btn btn-submit mt-4" onClick={closeWindow}>Close</button>
                    </div>
                </div>
            </div>
        </React.Fragment>


    )
}

export default FinalStep;