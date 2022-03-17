import React from 'react';

const Step1 = (props) => {

    const { values } = props;

    function handleChange(event) {
        props.onChange(event);
    }


    return (
        <div className="s-single-step text-left" >

            <div class="form-group">
                <label for="name">Full Name *</label>
                <input value={values.name} onChange={handleChange} name="name" type="text" class="form-control" id="name" placeholder="Enter full name" />
            </div>
            <div class="form-group">
                <label for="mobile">Mobile Number *</label>
                <input value={values.number} onChange={handleChange} name="number" type="number" class="form-control" id="mobile" placeholder="Enter mobile number" />
            </div>
            <div class="form-group">
                <label for="email">Email address *</label>
                <input value={values.email} onChange={handleChange} name="email" type="email" class="form-control" id="email"placeholder="Enter email address" />
            </div>
            <p className="mt-3" style={{ fontSize: "18px" }} >Note:- We will arrange a demo session for you with the faculty that you've created for yourself.</p>
        </div>

    );
}


export default Step1;