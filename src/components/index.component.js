import React, { Component } from 'react';

export default class Index extends Component {
    constructor(props) {
        super(props);

        this.getDate = this.getDate.bind(this);
        this.getImpression = this.getImpression.bind(this);
        this.getNormalReferance = this.getNormalReferance.bind(this);
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
        if (localStorage.getItem('assessment') === "Beck's Depression Inventory") {
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
        else if (localStorage.getItem('assessment') === "Beck's Anxiety Inventory") {
            if (score >=0 && score <= 21) {
                return "A grand sum between 0 - 21 indicates very low anxiety. That is usually a good thing. However it is possible that you might be unrealistic in either your assessment which would be denial or that you have learned to \"mask\" the symptoms commonly associated with anxiety. Too little \"anxiety\" could indicate that you are detached from yourself, others or your environment."
            }
            else if (score > 21 && score <= 35) {
                return "A grand sum between 22-35 indicates moderate anxiety. Your body is trying to tell you something. Look for patterns as to when and why you experience the symptoms described before. For example, if it occurss prior to public speaking and your job requires a lot of presentations, you may want to find ways to calm yourself before speaking or let others do some of the presentations. You may have some conflict issues that need to be resolved. Clearly, it's not \"panic\" time but you want to find ways to manage the stress you feel."
            }
            else if (score >= 36) {
                return "A grand sum that exeeds 36 is a potential cause for concern. Look for patterns or times when you tend to feel the symptoms you have selected. Persistent and high anxiety is not a sign of personal weakness or failure. It is, however, something that needs to be proactively treated or there could be significant impacts to you mentally and physically. You may want to consult a counselor if the feelings persist."
            }
        }
    }
    getNormalReferance() {
        if (localStorage.getItem('assessment') === "Beck's Depression Inventory") {
            return "1 - 10 These ups and downs are considered normal \n11 - 16 Mild mood disturbance \n17 -20 Borderline clinical depression\n21 - 30 Moderate depression\n31 - 40 Severe depression\nOver 40 Extreme depression"
        } else if (localStorage.getItem('assessment') === "Beck's Anxiety Inventory") {
            return "A grand sum between 0 -21 indicates very low anxiety\n A grand sum between 22-35 indicates moderate anxiety\n A grand sum that exeeds 36 is a potential cause for concern"
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
                <h1>Psychological Report</h1>
                <div className="row">
                    <div className="col-md-12">
                        <p className="print-btn-container"><button onClick={window.print} className="btn btn-primary">Print</button></p>
                    </div>
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
                            <td>{this.getNormalReferance()}
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
            </div>
        )
    }
}