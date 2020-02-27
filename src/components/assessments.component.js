import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Assessments extends Component {
    render() {
        return (
            <div className="assessments container">
                <p>Choose from the following assessments</p>
                <ul>
                    <li><Link to={'/ahana-psychometry/assessments/01'}>Beck's Depression Inventory</Link></li>
                    <li><Link to={'/ahana-psychometry/assessments/02'}>Beck's Anxiety Inventory</Link></li>
                    <li><Link to={'/ahana-psychometry/assessments/02'}>Altman Self-Rating Scale (ASRM)</Link></li>
                </ul>
            </div>
        )
    }
}
