import React from 'react';
import logo from '../../public/assets/images/requirement.png'

const CourseCard = ({gmatPackage}) => {
    return (
        <>
        
        <div className="col-4 p-3 ">
            <div class="card-deck">
                <div class="card">
                    <div className="card-image">
                    <img class="card-img-top" src={logo} alt="Card image cap" />
                    </div>
                        <div class="card-body">
                            <h5 class="card-title">{gmatPackage.title}</h5>
                            <p class="card-text">{gmatPackage.description}</p>
                            
                        </div>
                </div>
                
            </div>
            </div>
        </>
    );
};

export default CourseCard;