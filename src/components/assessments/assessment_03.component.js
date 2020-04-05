import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import Dropdown from 'react-bootstrap/Dropdown';

export default class Assessment_03 extends Component {
    constructor(props) {
        super(props);

        this.getDate = this.getDate.bind(this);
    }
    getDate() {
        let date = new Date();
        // get the date as a string
        let n = date.toDateString();
        return n;
    }
    handleSelect() {
        console.log('select');
    }
    render() {
        return (
            <div className='container patient-info'>
                <h2>Brief Psychiatric Rating Scale</h2>
                    <div className="details-container row">
                        <form className="col-sm-6">
                            <label htmlFor="patient-name">Patient Name</label>
                            <input type="text" id="patient-name"/>
                        </form>
                        <p className="col-sm-6 right-col">
                            <span className="date-now">Date:</span>{this.getDate()}
                        </p>
                    
                    </div>
                    <div className="row border-bottom">
                        <p className="col-sm-12">Please enter the score for the term that best describes the patient's condition</p> 
                        <p className="col-sm-12 bold">0 = Not assessed, 1 = Not present, 2 = Very mild, 3 = Mild, 4 = Moderate, 5 = Moderately severe, 6 = Severe, 7 = Extremely severe</p>
                    </div>
                    <div className="">
                        <ul className="conditions-list">
                            <li className="row">
                                <div className="selected-value col-sm-2">
                                {/* <Dropdown>
                                    <Dropdown.Toggle className="btn btn-primary" variant="success" id="dropdown-basic">
                                    Dropdown Button
                                    </Dropdown.Toggle>  
                                    <Dropdown.Menu>
                                        <Dropdown.Item onSelect={this.handleSelect} href="#/">Not asessed</Dropdown.Item>
                                        <Dropdown.Item href="#/">Another action</Dropdown.Item>
                                        <Dropdown.Item href="#/">Something else</Dropdown.Item>
                                        0 = Not assessed, 1 = Not present, 2 = Very mild, 3 = Mild, 4 = Moderate, 5 = Moderately severe, 6 = Severe, 7 = Extremely severe
                                    </Dropdown.Menu>
                                </Dropdown> */}
                                {/* <select id="scale-1">
                                    <option value="0">Not assessed</option>
                                    <option value="1">Not present</option>
                                    <option value="2">Very mild</option>
                                    <option value="3">Mild</option>
                                    <option value="4">Moderate</option>
                                    <option value="5">Moderately severe</option>
                                    <option value="6">Severe</option>
                                    <option value="7">Extremely Severe</option>
                                </select> */}
                                <Dropdown>
                                    <Dropdown.Toggle variant="primary" id="dropdown-basic">
                                        Dropdown Button
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu>
                                        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                                </div>
                                <div className="condition col-sm-10">
                                    <p>
                                        <span>1. Somatic concern</span>
                                    </p>
                                    <p>Preoccupation with physical health, fear of physical illness, hypochondriasis</p>
                                </div>
                            </li>
                        </ul>
                    </div>
            </div>
        )
    }
}