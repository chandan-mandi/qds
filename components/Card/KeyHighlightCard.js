import React, { useState } from 'react';
import './KeyHighlightCard.css';

const KeyHighlightCard = ({singleUSP}) => {
    const [isActive, setActive] = useState(false);
    const handleToggle = () => {
        setActive(!isActive)
    }
    return (
        <div className='key-highlight-card col-4'>
            <div className="container">
                <div className={isActive ? "card active" : "card"}>
                    <div className="icon">
                        <img src={singleUSP.img} alt="" />
                    </div>
                    <div className="content">
                        <h3>{singleUSP.title}</h3>
                        <p>{singleUSP.description}</p>
                    </div>
                    <a className='more' onClick={handleToggle}>{isActive ? "Read Less" : "Read More"}</a>
                </div>
            </div>
        </div>
    );
};

export default KeyHighlightCard;