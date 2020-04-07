import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import {Answer} from "./Answer";

export default class Assessment_04 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            score: [],
        }
        this.handleClick = this.handleClick.bind(this);
        this.getElementY = this.getElementY.bind(this);
        this.doScrolling = this.doScrolling.bind(this);
        this.isActive = this.isActive.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.getDate = this.getDate.bind(this);
    }
    getDate() {
        let date = new Date();
        // get the date as a string
        let n = date.toDateString();
        return n;
    }
    handleClick(e){
        let element = e.target;

        // updating the score array
        let questionNumber = Number(element.id.slice(9,11));
        let currentScore = element.value;
        var newArray = this.state.score.slice();
        newArray[questionNumber] = currentScore;
        this.setState({score: newArray});
    }
    getElementY(query) {
        return window.pageYOffset + document.querySelector(query).getBoundingClientRect().top
    }
    doScrolling(element, duration) {
        var startingY = window.pageYOffset
        var elementY = this.getElementY(element)
        // If element is close to page's bottom then window will scroll only to some position above the element.
        var targetY = document.body.scrollHeight - elementY < window.innerHeight ? document.body.scrollHeight - window.innerHeight : elementY
        var diff = targetY - startingY
        // Easing function: easeInOutCubic
        // From: https://gist.github.com/gre/1650294
        var easing = function (t) { return t<.5 ? 4*t*t*t : (t-1)*(2*t-2)*(2*t-2)+1 }
        var start
    
        if (!diff) return
    
        // Bootstrap our animation - it will get called right before next frame shall be rendered.
        window.requestAnimationFrame(function step(timestamp) {
        if (!start) start = timestamp
        // Elapsed miliseconds since start of scrolling.
        var time = timestamp - start
            // Get percent of completion in range [0, 1].
        var percent = Math.min(time / duration, 1)
        // Apply the easing.
        // It can cause bad-looking slow frames in browser performance tool, so be careful.
        percent = easing(percent)
    
        window.scrollTo(0, -60 + startingY + diff * percent)
    
            // Proceed with animation as long as we wanted it to.
            if (time < duration) {
                window.requestAnimationFrame(step)
            }
        })
    }
    isActive(value, questionNo){
        return ((value===Number(this.state.score[questionNo])) ?'active':'default');
    }
    handleSubmit(event){
        event.preventDefault();
        let sum = 0;
        let filledAll = true;
        this.state.score.forEach(function(value, index){
            if (value !== undefined) {
                sum += Number(value);
            }
        });
        console.log(sum);

        if (this.state.score.length === 0) {
            filledAll = false;
            // console.log('Scroll to question 1')
            this.doScrolling("#question-1", 1000)
        } else {
            for (let i = 1; i <= 5 && filledAll; i++) {
                console.log('Score of all 5 questions', this.state.score[i]);
                // wherever the score is undefined
                if (this.state.score[i] === undefined) {
                    console.log('if score is undefined, set filledAll to false.')
                    filledAll = false;
                    console.log('Scroll to #question-' + i)
                    // Apply event handlers. Example of firing the scrolling mechanism.
                    // document.getElementById('scrollMid').addEventListener('click', doScrolling.bind(null, '#middle', 1000))
                    this.doScrolling("#question-" + i, 1000)
                    break;
                }
            }
        }
        if (filledAll) {
            console.log('filled all');
            localStorage.setItem('total', sum);
            localStorage.setItem('assessment', 'becks-anxiety-inventory');
            // window.location.href = "/ahana-psychometry/index";
            this.props.history.push('/ahana-psychometry/create');
        }
    }
    render() {
        return (
            <div className='container mania-scale'>
                <h2>Altman Self-Rating Mania Scale</h2>
                <ol className="row">
                    <li><span className="bold">Please read each group of statements/question carefully</span>.</li>
                    <li>Choose thet one statement in each group that best describes the way you (the individual receiving care) has been feeling for <span className="bold">the past week</span>.</li>
                    <li>Click on the statement in order to select it.</li>
                    <li><span className="bold">Please note:</span> The word "occasionally" when used here means once or twice; "often" means several times or more and "frequently" means most of the time.</li>
                </ol>
                <form className="depression-metrics mania-metrics" onSubmit={this.handleSubmit}>
                    <ul>    
                    <li>
                        <div className="question" id="question-1">
                            <Answer className={this.isActive(0,1)} Id="question-01-answer-01" value="0" onClick={this.handleClick}>I do not feel happier or more cheerful than usual.</Answer>
                            <Answer className={this.isActive(1,1)} Id="question-01-answer-02" value="1" onClick={this.handleClick}>I occasionally feel happier or more cheerful than usual.</Answer>
                            <Answer className={this.isActive(2,1)} Id="question-01-answer-03" value="2" onClick={this.handleClick}>I often feel happier or more cheerful than usual.</Answer>
                            <Answer className={this.isActive(3,1)} Id="question-01-answer-04" value="3" onClick={this.handleClick}>I feel happier or more cheerful than usual most of the time</Answer>
                            <Answer className={this.isActive(4,1)} Id="question-01-answer-05" value="4" onClick={this.handleClick}>I feel happier or more cheerful than usual all of the time</Answer>
                        </div>
                    </li>
                    <li>
                        <div className="question" id="question-2">
                            <Answer className={this.isActive(0,2)} Id="question-02-answer-01" value="0" onClick={this.handleClick}>I do not feel happier or more self-confident than usual.</Answer>
                            <Answer className={this.isActive(1,2)} Id="question-02-answer-02" value="1" onClick={this.handleClick}>I occasionally feel happier or more self-confident than usual.</Answer>
                            <Answer className={this.isActive(2,2)} Id="question-02-answer-03" value="2" onClick={this.handleClick}>I often feel more self-confident than usual.</Answer>
                            <Answer className={this.isActive(3,2)} Id="question-02-answer-04" value="3" onClick={this.handleClick}>I frequently feel more self-confident than usual.</Answer>
                            <Answer className={this.isActive(4,2)} Id="question-02-answer-05" value="3" onClick={this.handleClick}>Severely - it bothered me a lot</Answer>
                        </div>
                    </li>
                    <li>
                        <div className="question" id="question-3">
                            <Answer className={this.isActive(0,3)} Id="question-03-answer-01" value="0" onClick={this.handleClick}>I do not need less sleep than usual.</Answer>
                            <Answer className={this.isActive(1,3)} Id="question-03-answer-02" value="1" onClick={this.handleClick}>I occasionally need less sleep than usual.</Answer>
                            <Answer className={this.isActive(2,3)} Id="question-03-answer-03" value="2" onClick={this.handleClick}>I often need less sleep than usual.</Answer>
                            <Answer className={this.isActive(3,3)} Id="question-03-answer-04" value="3" onClick={this.handleClick}>I frequently need less sleep than usual.</Answer>
                            <Answer className={this.isActive(4,3)} Id="question-03-answer-05" value="4" onClick={this.handleClick}>I can go all day and all night without any sleep and still not feel tired.</Answer>
                        </div>
                    </li>
                    <li>
                        <div className="question" id="question-4">
                            <Answer className={this.isActive(0,4)} Id="question-04-answer-01" value="0" onClick={this.handleClick}>I do not talk more than usual.</Answer>
                            <Answer className={this.isActive(1,4)} Id="question-04-answer-02" value="1" onClick={this.handleClick}>I occasionally talk more than usual.</Answer>
                            <Answer className={this.isActive(2,4)} Id="question-04-answer-03" value="2" onClick={this.handleClick}>I often talk more than usual.</Answer>
                            <Answer className={this.isActive(3,4)} Id="question-04-answer-04" value="3" onClick={this.handleClick}>I frequently talk more than usual.</Answer>
                            <Answer className={this.isActive(4,4)} Id="question-04-answer-04" value="4" onClick={this.handleClick}>I talk constantly and cannot be interrupted.</Answer>
                        </div>
                    </li>
                    <li>
                        <div className="question" id="question-5">
                            <Answer className={this.isActive(0,5)} Id="question-05-answer-01" value="0" onClick={this.handleClick}>I have not been more active (either socially, sexually, at work, home or school) than usual.</Answer>
                            <Answer className={this.isActive(1,5)} Id="question-05-answer-02" value="1" onClick={this.handleClick}>I have occasionally been more active than usual.</Answer>
                            <Answer className={this.isActive(2,5)} Id="question-05-answer-03" value="2" onClick={this.handleClick}>I have often been more active than usual.</Answer>
                            <Answer className={this.isActive(3,5)} Id="question-05-answer-04" value="3" onClick={this.handleClick}>I have frequently been more active than usual.</Answer>
                            <Answer className={this.isActive(4,5)} Id="question-05-answer-04" value="4" onClick={this.handleClick}>I am constantly more active or on the go all the time.</Answer>
                        </div>
                    </li>
                </ul>
                <p>
                    <input type="submit" value="Submit" className="btn btn-primary"/>
                </p>                    
                </form>
            </div>
        )
    }
}