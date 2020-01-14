import React, { Component } from 'react';

export default class Index extends Component {
    constructor(props) {
        super(props);

        this.getDate = this.getDate.bind(this);
        this.getImpression = this.getImpression.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    getDate() {
        let date = new Date();
        // get the date as a string
        let n = date.toDateString();
        return n;
    }
    getImpression() {
        let score = localStorage.getItem('total');
        if (score >= 1 && score < 11) {
            return "These ups and downs are considered normal";
        }
        else if (score >= 11 && score < 17) {
            return "Mild mood disturbance";
        }
        else if (score >= 17 && score < 21) {
            return "Borderline clinical depression";
        }
        else if (score >= 21 && score < 31) {
            return "Moderate depression";
        }
        else if (score >= 31 && score < 41) {
            return "Severe depression";
        }
        else if (score >= 41) {
            return "Extreme depression";
        }
    }
    handleSubmit(e) {
        e.preventDefault();
        let formEl = e.target;
        let textareaEl = formEl.getElementsByTagName('textarea')[0];
        let text = textareaEl.value;
        let elChild = document.createElement('p');
        elChild.innerHTML = text;
        formEl.insertBefore(elChild, textareaEl);
        textareaEl.value = "";
    }
    render() {
        return (
            <div className='container result-page'>
                <h1>Result</h1>
                <div className="row">
                    <div className="col-md-12">
                        <p><span className="bold">UHID: </span>{localStorage.getItem('uhid')}</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4">
                        <p><span className="bold">First Name: </span>{localStorage.getItem('firstname')}</p>
                        <p><span className="bold">Last Name: </span>{localStorage.getItem('lastname')}</p>
                        <p><span className="bold">Age: </span>{localStorage.getItem('age')}</p>
                        <p><span className="bold">Referal Doctor: </span>{localStorage.getItem('referal_doctor')}</p>
                    </div>
                    <div className="col-md-4">
                        <p><span className="bold">Qualification: </span>{localStorage.getItem('qualification')}</p>
                        <p><span className="bold">Socio-Economic Status: </span>{localStorage.getItem('ses')}</p>
                        <p><span className="bold">Marital Status: </span>{localStorage.getItem('marital_status')}</p>
                        <p><span className="bold">Employment Status: </span>{localStorage.getItem('employment_status')}</p>
                    </div>
                </div>
                <table>
                    <thead>
                        <tr>
                            <th>Assessment</th>
                            <th>Date</th>
                            <th>Observed Value</th>
                            <th>Normal Referance</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{localStorage.getItem('assessment')}</td>
                            <td>{this.getDate()}</td>
                            <td>{localStorage.getItem('total')}</td>
                            <td>1 - 10 These ups and downs are considered normal <br/>
                                11 - 16 Mild mood disturbance<br/>
                                17 -20 Borderline clinical depression<br/>
                                21 - 30 Moderate depression<br/>
                                31 - 40 Severe depression<br/>
                                Over 40 Extreme depression
                            </td>
                        </tr>
                    </tbody>
                </table> 
                <p className="impression"><span className="bold">Impression:</span> {this.getImpression()}</p>
                <form onSubmit={this.handleSubmit}>
                    <p><span className="bold">Comments:</span> </p>
                    <textarea id="comment"></textarea>
                    <p className="submit-btn-container"><input type="submit" value="Add Comment" className="btn btn-primary"/></p>
                </form>
                <p className="print-btn-container"><button onClick={window.print} className="btn btn-primary">Print</button></p>
            </div>
        )
    }
}