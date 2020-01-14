import React, { Component } from 'react';

export default class Answer extends Component {
    render() {
        return (
            <label className={this.props.className} htmlFor={this.props.Id}>
                <input onClick={this.props.onClick} type="radio" name={this.props.name} id={this.props.Id} value={this.props.value}/>{this.props.children}
            </label>
        );
    }
}

export {Answer};