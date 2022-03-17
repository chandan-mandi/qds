import React from 'react';

const Step3 = (props) => {

    const { values, checkbox1, checkbox2 } = props;

    function handleChange(event) {
        props.onChange(event);
    }

    function handleCheckbox(val){
        props.onCheckbox(val)
    }

    return (
        <div  className="s-single-step text-left">
            <style>
                {`
                    input + div.price_range_input {
                        display: none;
                    }
                    
                    input:checked + div.price_range_input {
                        display: block;
                    }

                    .price_range_checkbox_input{
                        margin-top: 10px;
                    }
                `}
            </style>
            <label for="batch_tyoe" >Batch Type *</label>
            <div className="form-group radio-div" >
                <div class="form-check">
                    <input checked={values.batch_type === "One-on-One Tutoring" } value={values.batch_type} onChange={handleChange} class="form-check-input" type="radio" name="batch_type" id="exampleRadios4" value="One-on-One Tutoring"  required />
                    <label class="form-check-label" for="exampleRadios4">
                    One-on-One Tutoring
                    </label>
                </div>
                <div class="form-check">
                    <input checked={values.batch_type === "Batch Tutoring (4 - 5 students)" } value={values.batch_type} onChange={handleChange} class="form-check-input" type="radio" name="batch_type" id="exampleRadios5" value="Batch Tutoring (4 - 5 students)"  />
                    <label class="form-check-label" for="exampleRadios5">
                    Batch Tutoring (4 - 5 students)
                    </label>
                </div>
                <div class="form-check">
                    <input checked={values.batch_type === "Any" } value={values.batch_type} onChange={handleChange} class="form-check-input" type="radio" name="batch_type" id="exampleRadios6" value="Any"  />
                    <label class="form-check-label" for="exampleRadios6">
                        Any
                    </label>
                </div>
            </div>

            <div class="form-group">
                <label for="price_range">Price Range *</label>
                <br />
                {/* <input value={values.price_range} onChange={handleChange} name="price_range" type="text" class="form-control" id="price_range" placeholder="Enter price hourly rate or full course" /> */}
                <input defaultChecked={checkbox1} onChange={() => handleCheckbox(1)}  type="checkbox" class="price_range_checkbox_input" name="price_range_1" /> Hourly Rate
                <div class="price_range_input">
                    <input value={values.price_range_hourly} onChange={handleChange} type="text" name="price_range_hourly" class="form-control" placeholder="Enter hourly rate" />
                </div>
                <br />
                <input defaultChecked={checkbox2} onChange={() => handleCheckbox(2)} type="checkbox" class="price_range_checkbox_input" name="price_range_2" /> Full Course
                <div class="price_range_input">
                    <input value={values.price_range_full} onChange={handleChange} type="text" name="price_range_full" class="form-control" placeholder="Enter full course rate" />
                </div>
            </div>
            <p className="mt-3" style={{ fontSize: "18px" }} >Note:- We will arrange a demo session for you with the faculty that you've created for yourself.</p>


        </div>

    );
}


export default Step3;