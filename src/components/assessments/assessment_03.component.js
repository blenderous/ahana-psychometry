import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Assessment_03 extends Component {
    render() {
        return (
            <div className='container'>
                <p>Welcome to Assessment 03</p>
                <Link to="/" className="btn btn-primary">Next</Link>
            </div>
        )
    }
}