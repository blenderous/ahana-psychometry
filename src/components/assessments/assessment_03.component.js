import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
// import Dropdown from 'react-bootstrap/Dropdown';
import {Entity} from "./Entity";

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
                            <Entity heading="1. Somatic concern" description="Preoccupation with physical health, fear of physical illness, hypochondriasis"></Entity>
                            <Entity heading="2. Anxiety" description="Worry, fear, over-concern for present or future, uneasiness"></Entity>
                            <Entity heading="3. Emotional Withdrawal" description="Lack of spontaneous interaction, isolation deficiency in relating to others"></Entity>
                            <Entity heading="4. Conceptual Disorganization" description="Thought processes confused, disconnected, disorganized, disrupted"></Entity>
                            <Entity heading="5. Guilt Feelings" description="Self-blame, shame, remorse for past behaviour"></Entity>
                            <Entity heading="6. Tension" description="Physical and motor manifestations of nervousness. over-activation"></Entity>
                            <Entity heading="7. Mannerisms and Posturing" description="Peculiar, bizzare, unnatural motor behavior (not inclding tic)"></Entity>
                            <Entity heading="8. Grandiosity" description="Exaggerated self-opinion, arrogance, conviction of unusual powers or abilities"></Entity>
                            <Entity heading="9. Depressive mood" description="Sorrow, sadness, despondency, pessimism"></Entity>
                            <Entity heading="10. Hostility" description="Animosity, contempt, belligerence, disdain for others"></Entity>
                            <Entity heading="11. Suspiciousness" description="Mistrust, belief others harbor malicious or dicriminatory intent"></Entity>
                            <Entity heading="12. Hallucinatory behavior" description="Perceptions without normal external stimulus correspondence"></Entity>
                            <Entity heading="13. Motor retardation" description="Slowed weakened movements or speech, reduced body tone"></Entity>
                            <Entity heading="14. Uncooperativeness" description="Resistance, guardedness, rejection of authority"></Entity>
                            <Entity heading="15. Unusual thought content" description="Unusual odd, strange, bizzare thought content."></Entity>
                            <Entity heading="16. Blunted affect" description="Reduced emotional tone, reduction in formal intensity of feeling, flatness"></Entity>
                            <Entity heading="17. Excitement" description="Hightened emotional tone, agitation, increased reactivity"></Entity>
                            <Entity heading="18. Disorientation" description="Confusion or lack of proper association for person, place or time"></Entity>
                        </ul>
                        <p class="print-btn-container"><button type="button" class="btn btn-primary" onClick={window.print}>Print</button></p>
                    </div>
            </div>
        )
    }
}

/* <Dropdown>
    <Dropdown.Toggle className="btn btn-primary" variant="success" id="dropdown-basic">
    Dropdown Button
    </Dropdown.Toggle>  
    <Dropdown.Menu>
        <Dropdown.Item onSelect={this.handleSelect} href="#/">Not asessed</Dropdown.Item>
        <Dropdown.Item href="#/">Another action</Dropdown.Item>
        <Dropdown.Item href="#/">Something else</Dropdown.Item>
        0 = Not assessed, 1 = Not present, 2 = Very mild, 3 = Mild, 4 = Moderate, 5 = Moderately severe, 6 = Severe, 7 = Extremely severe
    </Dropdown.Menu>
</Dropdown> */
/* <select id="scale-1">
    <option value="0">Not assessed</option>
    <option value="1">Not present</option>
    <option value="2">Very mild</option>
    <option value="3">Mild</option>
    <option value="4">Moderate</option>
    <option value="5">Moderately severe</option>
    <option value="6">Severe</option>
    <option value="7">Extremely Severe</option>
</select> */
/* <Dropdown>
    <Dropdown.Toggle variant="primary" id="dropdown-basic">
        Dropdown Button
    </Dropdown.Toggle>

    <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
    </Dropdown.Menu>
</Dropdown> */