import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Assessments extends Component {
    render() {
        return (
            <div className="assessments container">
                <p>Choose from the following assessments</p>
                <ul>
                    <li><Link to={'/ahana_psychometry/assessments/01'}>Beck's Depression Inventory</Link></li>
                </ul>
            </div>
        )
    }
}
