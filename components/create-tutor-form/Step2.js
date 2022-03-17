import React from 'react';

const Step2 = (props) => {
    const { values } = props;

    function handleChange(event) {
        props.onChange(event);
    }


    return (
        <div className="s-single-step text-left">
            <div class="form-group">
                <label for="entrance">Entrance Exam *</label>
                <input value={values.entrance_exam} onChange={handleChange} name="entrance_exam" type="text" class="form-control" id="entrance" placeholder="Enter entrance exam" />
            </div>
            
            <div class="form-group">
                <label for="course_duration">Course Duration *</label>
                <div style={{ display: "flex" }} >
                    <select style={{ marginRight: "20px" }} value={values.course_duration_years} onChange={handleChange} name="course_duration_years" class="form-control" id="exampleFormControlSelect1">
                        <option selected hidden >Years</option>
                        <option>0</option>
                        <option>1</option>
                        <option>2</option>
                    </select>
                    <select style={{ marginRight: "20px" }} value={values.course_duration_months} onChange={handleChange} name="course_duration_months" class="form-control" id="exampleFormControlSelect2">
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
                    <select  value={values.course_duration_days} onChange={handleChange} name="course_duration_days" class="form-control" id="exampleFormControlSelect3">
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
                
            </div>
            
            <label for="batch" >Preferable Batch *</label>
            <div className="form-group radio-div" >
                <div class="form-check">
                    <input checked={values.batch === "Weekday" } value={values.batch} onChange={handleChange} class="form-check-input" type="radio" name="batch" id="exampleRadios1" value="Weekday"  required />
                    <label class="form-check-label" for="exampleRadios1">
                    Weekday
                    </label>
                </div>
                <div class="form-check">
                    <input checked={values.batch === "Weekend" } value={values.batch} onChange={handleChange} class="form-check-input" type="radio" name="batch" id="exampleRadios2" value="Weekend"  />
                    <label class="form-check-label" for="exampleRadios2">
                        Weekend
                    </label>
                </div>
                <div class="form-check">
                    <input checked={values.batch === "Any" } value={values.batch} onChange={handleChange} class="form-check-input" type="radio" name="batch" id="exampleRadios3" value="Any"  />
                    <label class="form-check-label" for="exampleRadios3">
                        Any
                    </label>
                </div>
            </div>

            <div class="form-group">
                <label for="preferable_timings">Preferable Timings *</label>
                <input value={values.preferable_timings} onChange={handleChange} name="preferable_timings" type="text" class="form-control" id="preferable_timings" placeholder="" />
            </div>
            <p className="mt-3" style={{ fontSize: "18px" }} >Note:- We will arrange a demo session for you with the faculty that you've created for yourself.</p>

            
        </div>

    );
}


export default Step2;