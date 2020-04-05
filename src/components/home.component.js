import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Home extends Component {
    render() {
        return (
            <div className="vertically-center-outer">
                <div className="vertically-center-middle">
                    <div className="vertically-center-inner">
                        {/* Links to various assessments */}
                        <div className="assessments container">
                            <p>Choose from the following assessments</p>
                            <ul>
                                <li><Link to={'/ahana-psychometry/assessments/01'}>Beck's Depression Inventory</Link></li>
                                <li><Link to={'/ahana-psychometry/assessments/02'}>Beck's Anxiety Inventory</Link></li>
                                <li><Link to={'/ahana-psychometry/assessments/03'}>Brief Psychiatric Rating Scale (BPRS)</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <a href="/ahana-psychometry/" className="logo-link"><img src="/logo-ahana.png" alt="Ahana : Experience the exceptional care"/></a>
            </div>
        )
    }
}