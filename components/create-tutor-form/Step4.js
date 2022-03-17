
import React, { useState } from 'react';
import emailRegex from 'email-regex';


const Step4 = (props) => {
    const { values, checkbox1, checkbox2 } = props;

    const [isError, setIsError] = useState(false);
    const [errorMsg, setErrorMsg] = useState('');

    function handleChange(event) {
        props.onChange(event);
    }

    function handleSubmit(){
        props.onSubmit();
    }

    function validate(e){        
        const phoneRegEx = /^(\+91[\-\s]?)?[0]?(91)?[789]\d{9}$/;
        if(!values.name || values.name === ""){
            e.preventDefault();
            setIsError(true);
            setErrorMsg("Please enter your name on step 1");
            return false;
        }
        if(!values.email){
            e.preventDefault();
            setIsError(true);
            setErrorMsg("Please enter your email on step 1");
            return false;
        }

        if(!values.number || values.number === ""){
            e.preventDefault();
            setIsError(true);
            setErrorMsg("Please enter your mobile number on step 1");
            return false;
        }

        if(!values.entrance_exam || values.entrance_exam === "" ){
            e.preventDefault();
            setIsError(true);
            setErrorMsg("Please enter your entrance exam on step 2");
            return false;
        }

        if( 
            !values.course_duration_years || values.course_duration_years === "" ||
            !values.course_duration_months || values.course_duration_months === "" ||
            !values.course_duration_days || values.course_duration_days === ""){
                e.preventDefault();
                setIsError(true);
                setErrorMsg("Please enter your course duration on step 2");
                return false;
            }

            if(
            !values.batch || values.batch === "" ){
                e.preventDefault();
                setIsError(true);
                setErrorMsg("Please enter your preferable batch on step 2");
                return false;
            }

            if(!values.preferable_timings || values.preferable_timings === ""){
                e.preventDefault();
                setIsError(true);
                setErrorMsg("Please enter your preferable timings on step 2");
                return false;
            }
        
            if(!values.batch_type || values.batch_type === "" ){
                e.preventDefault();
                setIsError(true);
                setErrorMsg("Please enter your batch type on step 3");
                return false;
            }
            if(!values.faculty_attributes || values.faculty_attributes === ""){
                e.preventDefault();
                setIsError(true);
                setErrorMsg("Please fill all the fields on step 4");
                return false;
            }

        if(!checkbox1 && !checkbox2){
            e.preventDefault();
            setIsError(true);
            setErrorMsg("Please select atleast one for price range on step 3.");
            return false;
        }
        if((checkbox1 && values.price_range_hourly === "") || (checkbox1 && !values.price_range_hourly) ){
            e.preventDefault();
            setIsError(true);
            setErrorMsg("Please enter a hourly rate on step 3");
            return false;
        }
        if((checkbox2 && values.price_range_full === "") || (checkbox2 && !values.price_range_full)){
            e.preventDefault();
            setIsError(true);
            setErrorMsg("Please enter a full course rate on step 3");
            return false;
        }
        // if(values.number && values.number.length !== 10 || !values.number){
        //     e.preventDefault();
        //     setIsError(true);
        //     setErrorMsg("Please enter a valid mobile number");
        //     return false;
        // }
        if(!emailRegex().test(values.email)){
            e.preventDefault();
            setIsError(true);
            setErrorMsg("Please enter a valid email on step 1");
            return false;
        }
        if(values.number.match(phoneRegEx) === null){
            e.preventDefault();
            setIsError(true);
            setErrorMsg("Please enter a valid mobile number on step 1");
            return false;
        }
        setIsError(false);
        setErrorMsg("");
        return true;
    }

    return (
        <div  className="s-single-step text-left">
            <style>
                {`
                .s-create-tutor-submit-btn{
                    position: absolute;
                    right: 20px;
                    bottom: 20px;
                }
                `}
            </style>
            { isError && (
                <div className="text-center alert alert-danger">
                    {errorMsg}
                </div>
            )}


            <form id="s-form" action="https://getform.io/f/878d0175-fdc7-41d7-b8b9-b008d6513bf0" method="POST" onSubmit={(e) => validate(e)} >

            <input hidden value="Create your own tutor form" name="Form_Title" type="text" class="form-control" id="Form_Title" />

            <div class="form-group">
                <input hidden value={values.name} name="name" type="text" class="form-control" id="name" placeholder="Enter full name" />
            </div>
            <div class="form-group">
                <input hidden value={values.number} name="number" type="number" class="form-control" id="mobile" placeholder="Enter mobile number" />
            </div>
            <div class="form-group">
                <input hidden value={values.email} name="email" type="text" class="form-control" id="email" placeholder="Enter email" />
            </div>


            <div class="form-group">
                <input hidden value={values.entrance_exam} name="entrance_exam" type="text" class="form-control" id="entrance" placeholder="Enter entrance exam" />
            </div>
            <div class="form-group">
                <select hidden value={values.course_duration_years} name="course_duration_years" class="form-control" id="exampleFormControlSelect1">
                    <option selected hidden >Years</option>
                    <option>0</option>
                    <option>1</option>
                    <option>2</option>
                </select>
                <select hidden value={values.course_duration_months} name="course_duration_months" class="form-control" id="exampleFormControlSelect2">
                    <option selected hidden >Months</option>
                    <option>0</option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                    <option>6</option>
                    <option>7</option>
                    <option>8</option>
                    <option>9</option>
                    <option>10</option>
                    <option>11</option>
                </select>
                <select hidden value={values.course_duration_days} name="course_duration_days" class="form-control" id="exampleFormControlSelect3">
                    <option selected hidden >Days</option>
                    <option>0</option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                    <option>6</option>
                    <option>7</option>
                    <option>8</option>
                    <option>9</option>
                    <option>10</option>
                    <option>11</option>
                    <option>12</option>
                    <option>13</option>
                    <option>14</option>
                    <option>15</option>
                    <option>16</option>
                    <option>17</option>
                    <option>18</option>
                    <option>19</option>
                    <option>20</option>
                    <option>21</option>
                    <option>22</option>
                    <option>23</option>
                    <option>24</option>
                    <option>25</option>
                    <option>26</option>
                    <option>27</option>
                    <option>28</option>
                    <option>29</option>
                </select>
            </div>
            <div className="radio-div" >
                <div class="form-check">
                    <input hidden value={values.batch} class="form-check-input" type="text" name="batch" id="exampleRadios1"  />
                </div>
            </div>
            <div class="form-group">
                <input hidden value={values.preferable_timings} name="preferable_timings" type="text" class="form-control" id="preferable_timings" placeholder="" />
            </div>


            <div className="radio-div" >
                <div class="form-check">
                    <input hidden value={values.batch_type} class="form-check-input" type="text" name="batch_type" id="exampleRadios4"  />
                </div>
            </div>


            <div class="price_range_input">
                <input hidden value={values.price_range_hourly} onChange={handleChange} type="text" name="price_range_hourly" class="form-control" />
            </div>
            <div class="price_range_input">
                <input hidden value={values.price_range_full} onChange={handleChange} type="text" name="price_range_full" class="form-control" />
            </div>




















                <div class="form-group">
                    <label for="faculty_attributes">Faculty Attributes *</label>
                    <input value={values.faculty_attributes} onChange={handleChange} name="faculty_attributes" type="text" class="form-control" id="faculty_attributes" placeholder="" />
                </div>
                <div class="form-group">
                    <label for="Other_Requirements">Any Other Specific Requirements</label>
                    <input value={values.Other_Requirements} onChange={handleChange} name="Other_Requirements" type="text" class="form-control" id="Other_Requirements" placeholder="" />
                </div>
                <button type="submit" className="btn btn-primary btn-lg pull-right s-create-tutor-submit-btn">Submit</button>
            </form>
            <p className="mt-3" style={{ fontSize: "18px" }} >Note:- We will arrange a demo session for you with the faculty that you've created for yourself.</p>

        </div>

    );
}


export default Step4;