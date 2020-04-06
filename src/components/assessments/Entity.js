import React, { Component } from 'react';

export default class Entity extends Component {
    render() {
        return (
            <li className="row">
                <div className="selected-value col-sm-1">
                    <select id="scale-1">
                        <option value="0">0</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                    </select>
                </div>
                <div className="condition col-sm-11">
                    <p>
                        <span>{this.props.heading}</span>
                    </p>
                    <p>{this.props.description}</p>
                </div>
            </li>
        );
    }
}

export {Entity};