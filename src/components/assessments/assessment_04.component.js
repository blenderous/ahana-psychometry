import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import {Entity} from "./Entity";

export default class Assessment_04 extends Component {
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
            <div className='container mania-scale'>
                <div className="row">
                    {/*  */}
                </div>
            </div>
        )
    }
}