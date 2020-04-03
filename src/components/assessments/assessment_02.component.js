import React, { Component } from 'react';
import { Answer } from './Answer';

export default class Assessment_02 extends Component {
    constructor(props) {
        super(props);

        this.state = {
            motivation: "songs",
            score: [],
        }
        this.handleClick = this.handleClick.bind(this);
        this.getElementY = this.getElementY.bind(this);
        this.doScrolling = this.doScrolling.bind(this);
        this.isActive = this.isActive.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        
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
    
        window.scrollTo(0, -80 + startingY + diff * percent)
    
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
            for (let i = 1; i <= 21 && filledAll; i++) {
                console.log('Score of all 21 questions', this.state.score[i]);
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
            <div className='container'>
                <h2>Beck's Anxiety Inventory</h2>
                <p>Select an appropriate option from each of the following:</p>
                <form className="depression-metrics" onSubmit={this.handleSubmit}>
                <ul>    
                    <li>
                        <p>Numbness or tingling</p>
                        <div className="question" id="question-1">
                            <Answer className={this.isActive(0,1)} Id="question-01-answer-01" value="0" onClick={this.handleClick}>Not at all</Answer>
                            <Answer className={this.isActive(1,1)} Id="question-01-answer-02" value="1" onClick={this.handleClick}>Mildly but didn't bother me much</Answer>
                            <Answer className={this.isActive(2,1)} Id="question-01-answer-03" value="2" onClick={this.handleClick}>Moderate - it wasn't pleasant at times</Answer>
                            <Answer className={this.isActive(3,1)} Id="question-01-answer-04" value="3" onClick={this.handleClick}>Severely - it bothered me a lot</Answer>
                        </div>
                    </li>
                    <li>
                        <p>Feeling hot</p>
                        <div className="question" id="question-2">
                            <Answer className={this.isActive(0,2)} Id="question-02-answer-01" value="0" onClick={this.handleClick}>Not at all</Answer>
                            <Answer className={this.isActive(1,2)} Id="question-02-answer-02" value="1" onClick={this.handleClick}>Mildly but didn't bother me much</Answer>
                            <Answer className={this.isActive(2,2)} Id="question-02-answer-03" value="2" onClick={this.handleClick}>Moderate - it wasn't pleasant at times</Answer>
                            <Answer className={this.isActive(3,2)} Id="question-02-answer-04" value="3" onClick={this.handleClick}>Severely - it bothered me a lot</Answer>
                        </div>
                    </li>
                    <li>
                        <p>Wobbliness in legs</p>
                        <div className="question" id="question-3">
                            <Answer className={this.isActive(0,3)} Id="question-03-answer-01" value="0" onClick={this.handleClick}>Not at all</Answer>
                            <Answer className={this.isActive(1,3)} Id="question-03-answer-02" value="1" onClick={this.handleClick}>Mildly but didn't bother me much</Answer>
                            <Answer className={this.isActive(2,3)} Id="question-03-answer-03" value="2" onClick={this.handleClick}>Moderate - it wasn't pleasant at times</Answer>
                            <Answer className={this.isActive(3,3)} Id="question-03-answer-04" value="3" onClick={this.handleClick}>Severely - it bothered me a lot</Answer>
                        </div>
                    </li>
                    <li>
                        <p>Unable to relax</p>
                        <div className="question" id="question-4">
                            <Answer className={this.isActive(0,4)} Id="question-04-answer-01" value="0" onClick={this.handleClick}>Not at all</Answer>
                            <Answer className={this.isActive(1,4)} Id="question-04-answer-02" value="1" onClick={this.handleClick}>Mildly but didn't bother me much</Answer>
                            <Answer className={this.isActive(2,4)} Id="question-04-answer-03" value="2" onClick={this.handleClick}>Moderate - it wasn't pleasant at times</Answer>
                            <Answer className={this.isActive(3,4)} Id="question-04-answer-04" value="3" onClick={this.handleClick}>Severely - it bothered me a lot</Answer>
                        </div>
                    </li>
                    <li>
                        <p>Fear of worst happening</p>
                        <div className="question" id="question-5">
                            <Answer className={this.isActive(0,5)} Id="question-05-answer-01" value="0" onClick={this.handleClick}>Not at all</Answer>
                            <Answer className={this.isActive(1,5)} Id="question-05-answer-02" value="1" onClick={this.handleClick}>Mildly but didn't bother me much</Answer>
                            <Answer className={this.isActive(2,5)} Id="question-05-answer-03" value="2" onClick={this.handleClick}>Moderate - it wasn't pleasant at times</Answer>
                            <Answer className={this.isActive(3,5)} Id="question-05-answer-04" value="3" onClick={this.handleClick}>Severely - it bothered me a lot</Answer>
                        </div>
                    </li>
                    <li>
                        <p>Dizzy or lightheaded</p>
                        <div className="question" id="question-6">
                            <Answer className={this.isActive(0,6)} Id="question-06-answer-01" value="0" onClick={this.handleClick}>Not at all</Answer>
                            <Answer className={this.isActive(1,6)} Id="question-06-answer-02" value="1" onClick={this.handleClick}>Mildly but didn't bother me much</Answer>
                            <Answer className={this.isActive(2,6)} Id="question-06-answer-03" value="2" onClick={this.handleClick}>Moderate - it wasn't pleasant at times</Answer>
                            <Answer className={this.isActive(3,6)} Id="question-06-answer-04" value="3" onClick={this.handleClick}>Severely - it bothered me a lot</Answer>
                        </div>
                    </li>
                    <li>
                        <p>Heart pounding/racing</p>
                        <div className="question" id="question-7">
                            <Answer className={this.isActive(0,7)} Id="question-07-answer-01" value="0" onClick={this.handleClick}>Not at all</Answer>
                            <Answer className={this.isActive(1,7)} Id="question-07-answer-02" value="1" onClick={this.handleClick}>Mildly but didn't bother me much</Answer>
                            <Answer className={this.isActive(2,7)} Id="question-07-answer-03" value="2" onClick={this.handleClick}>Moderate - it wasn't pleasant at times</Answer>
                            <Answer className={this.isActive(3,7)} Id="question-07-answer-04" value="3" onClick={this.handleClick}>Severely - it bothered me a lot</Answer>
                        </div>
                    </li>
                    <li>
                        <p>Unsteady</p>
                        <div className="question" id="question-8">
                            <Answer className={this.isActive(0,8)} Id="question-08-answer-01" value="0" onClick={this.handleClick}>Not at all</Answer>
                            <Answer className={this.isActive(1,8)} Id="question-08-answer-02" value="1" onClick={this.handleClick}>Mildly but didn't bother me much</Answer>
                            <Answer className={this.isActive(2,8)} Id="question-08-answer-03" value="2" onClick={this.handleClick}>Moderate - it wasn't pleasant at times</Answer>
                            <Answer className={this.isActive(3,8)} Id="question-08-answer-04" value="3" onClick={this.handleClick}>Severely - it bothered me a lot</Answer>
                        </div>
                    </li>
                    <li>
                        <p>Terrified or afraid</p>
                        <div className="question" id="question-9">
                            <Answer className={this.isActive(0,9)} Id="question-09-answer-01" value="0" onClick={this.handleClick}>Not at all</Answer>
                            <Answer className={this.isActive(1,9)} Id="question-09-answer-02" value="1" onClick={this.handleClick}>Mildly but didn't bother me much</Answer>
                            <Answer className={this.isActive(2,9)} Id="question-09-answer-03" value="2" onClick={this.handleClick}>Moderate - it wasn't pleasant at times</Answer>
                            <Answer className={this.isActive(3,9)} Id="question-09-answer-04" value="3" onClick={this.handleClick}>Severely - it bothered me a lot</Answer>
                        </div>
                    </li>
                    <li>
                        <p>Nervous</p>
                        <div className="question" id="question-10">
                            <Answer className={this.isActive(0,10)} Id="question-10-answer-01" value="0" onClick={this.handleClick}>Not at all</Answer>
                            <Answer className={this.isActive(1,10)} Id="question-10-answer-02" value="1" onClick={this.handleClick}>Mildly but didn't bother me much</Answer>
                            <Answer className={this.isActive(2,10)} Id="question-10-answer-03" value="2" onClick={this.handleClick}>Moderate - it wasn't pleasant at times</Answer>
                            <Answer className={this.isActive(3,10)} Id="question-10-answer-04" value="3" onClick={this.handleClick}>Severely - it bothered me a lot</Answer>
                        </div>
                    </li>
                    <li>
                        <p>Feeling of choking</p>
                        <div className="question" id="question-11">
                            <Answer className={this.isActive(0,11)} Id="question-11-answer-01" value="0" onClick={this.handleClick}>Not at all</Answer>
                            <Answer className={this.isActive(1,11)} Id="question-11-answer-02" value="1" onClick={this.handleClick}>Mildly but didn't bother me much</Answer>
                            <Answer className={this.isActive(2,11)} Id="question-11-answer-03" value="2" onClick={this.handleClick}>Moderate - it wasn't pleasant at times</Answer>
                            <Answer className={this.isActive(3,11)} Id="question-11-answer-04" value="3" onClick={this.handleClick}>Severely - it bothered me a lot</Answer>
                        </div>
                    </li>
                    <li>
                        <p>Hands trembling</p>
                        <div className="question" id="question-12">
                            <Answer className={this.isActive(0,12)} Id="question-12-answer-01" value="0" onClick={this.handleClick}>Not at all</Answer>
                            <Answer className={this.isActive(1,12)} Id="question-12-answer-02" value="1" onClick={this.handleClick}>Mildly but didn't bother me much</Answer>
                            <Answer className={this.isActive(2,12)} Id="question-12-answer-03" value="2" onClick={this.handleClick}>Moderate - it wasn't pleasant at times</Answer>
                            <Answer className={this.isActive(3,12)} Id="question-12-answer-04" value="3" onClick={this.handleClick}>Severely - it bothered me a lot</Answer>
                        </div>
                    </li>
                    <li>
                        <p>Shaky/unsteady</p>
                        <div className="question" id="question-13">
                            <Answer className={this.isActive(0,13)} Id="question-13-answer-01" value="0" onClick={this.handleClick}>Not at all</Answer>
                            <Answer className={this.isActive(1,13)} Id="question-13-answer-02" value="1" onClick={this.handleClick}>Mildly but didn't bother me much</Answer>
                            <Answer className={this.isActive(2,13)} Id="question-13-answer-03" value="2" onClick={this.handleClick}>Moderate - it wasn't pleasant at times</Answer>
                            <Answer className={this.isActive(3,13)} Id="question-13-answer-04" value="3" onClick={this.handleClick}>Severely - it bothered me a lot</Answer>
                        </div>
                    </li>
                    <li>
                        <p>Fear of losing control</p>
                        <div className="question" id="question-14">
                            <Answer className={this.isActive(0,14)} Id="question-14-answer-01" value="0" onClick={this.handleClick}>Not at all</Answer>
                            <Answer className={this.isActive(1,14)} Id="question-14-answer-02" value="1" onClick={this.handleClick}>Mildly but didn't bother me much</Answer>
                            <Answer className={this.isActive(2,14)} Id="question-14-answer-03" value="2" onClick={this.handleClick}>Moderate - it wasn't pleasant at times</Answer>
                            <Answer className={this.isActive(3,14)} Id="question-14-answer-04" value="3" onClick={this.handleClick}>Severely - it bothered me a lot</Answer>
                        </div>
                    </li>
                    <li>
                        <p>Difficulty in breathing</p>
                        <div className="question" id="question-15">
                            <Answer className={this.isActive(0,15)} Id="question-15-answer-01" value="0" onClick={this.handleClick}>Not at all</Answer>
                            <Answer className={this.isActive(1,15)} Id="question-15-answer-02" value="1" onClick={this.handleClick}>Mildly but didn't bother me much</Answer>
                            <Answer className={this.isActive(2,15)} Id="question-15-answer-03" value="2" onClick={this.handleClick}>Moderate - it wasn't pleasant at times</Answer>
                            <Answer className={this.isActive(3,15)} Id="question-15-answer-04" value="3" onClick={this.handleClick}>Severely - it bothered me a lot</Answer>
                        </div>
                    </li>
                    <li>
                        <p>Fear of dying</p>
                        <div className="question" id="question-16">
                            <Answer className={this.isActive(0,16)} Id="question-16-answer-01" value="0" onClick={this.handleClick}>Not at all</Answer>
                            <Answer className={this.isActive(1,16)} Id="question-16-answer-02" value="1" onClick={this.handleClick}>Mildly but didn't bother me much</Answer>
                            <Answer className={this.isActive(2,16)} Id="question-16-answer-03" value="2" onClick={this.handleClick}>Moderate - it wasn't pleasant at times</Answer>
                            <Answer className={this.isActive(3,16)} Id="question-16-answer-04" value="3" onClick={this.handleClick}>Severely - it bothered me a lot</Answer>
                        </div>
                    </li>
                    <li>
                        <p>Scared</p>
                        <div className="question" id="question-17">
                            <Answer className={this.isActive(0,17)} Id="question-17-answer-01" value="0" onClick={this.handleClick}>Not at all</Answer>
                            <Answer className={this.isActive(1,17)} Id="question-17-answer-02" value="1" onClick={this.handleClick}>Mildly but didn't bother me much</Answer>
                            <Answer className={this.isActive(2,17)} Id="question-17-answer-03" value="2" onClick={this.handleClick}>Moderate - it wasn't pleasant at times</Answer>
                            <Answer className={this.isActive(3,17)} Id="question-17-answer-04" value="3" onClick={this.handleClick}>Severely - it bothered me a lot</Answer>
                        </div>
                    </li>
                    <li>
                        <p>Indigestion</p>
                        <div className="question" id="question-18">
                            <Answer className={this.isActive(0,18)} Id="question-18-answer-01" value="0" onClick={this.handleClick}>Not at all</Answer>
                            <Answer className={this.isActive(1,18)} Id="question-18-answer-02" value="1" onClick={this.handleClick}>Mildly but didn't bother me much</Answer>
                            <Answer className={this.isActive(2,18)} Id="question-18-answer-03" value="2" onClick={this.handleClick}>Moderate - it wasn't pleasant at times</Answer>
                            <Answer className={this.isActive(3,18)} Id="question-18-answer-04" value="3" onClick={this.handleClick}>Severely - it bothered me a lot</Answer>
                        </div>
                    </li>
                    <li>
                        <p>Faint/lightheaded</p>
                        <div className="question" id="question-19">
                            <Answer className={this.isActive(0,19)} Id="question-19-answer-01" value="0" onClick={this.handleClick}>Not at all</Answer>
                            <Answer className={this.isActive(1,19)} Id="question-19-answer-02" value="1" onClick={this.handleClick}>Mildly but didn't bother me much</Answer>
                            <Answer className={this.isActive(2,19)} Id="question-19-answer-03" value="2" onClick={this.handleClick}>Moderate - it wasn't pleasant at times</Answer>
                            <Answer className={this.isActive(3,19)} Id="question-19-answer-04" value="3" onClick={this.handleClick}>Severely - it bothered me a lot</Answer>
                        </div>
                    </li>
                    <li>
                        <p>Face flushed</p>
                        <div className="question" id="question-20">
                            <Answer className={this.isActive(0,20)} Id="question-20-answer-01" value="0" onClick={this.handleClick}>Not at all</Answer>
                            <Answer className={this.isActive(1,20)} Id="question-20-answer-02" value="1" onClick={this.handleClick}>Mildly but didn't bother me much</Answer>
                            <Answer className={this.isActive(2,20)} Id="question-20-answer-03" value="2" onClick={this.handleClick}>Moderate - it wasn't pleasant at times</Answer>
                            <Answer className={this.isActive(3,20)} Id="question-20-answer-04" value="3" onClick={this.handleClick}>Severely - it bothered me a lot</Answer>
                        </div>
                    </li>
                    <li>
                        <p>Hot/cold sweats</p>
                        <div className="question" id="question-21">
                            <Answer className={this.isActive(0,21)} Id="question-21-answer-01" value="0" onClick={this.handleClick}>Not at all</Answer>
                            <Answer className={this.isActive(1,21)} Id="question-21-answer-02" value="1" onClick={this.handleClick}>Mildly but didn't bother me much</Answer>
                            <Answer className={this.isActive(2,21)} Id="question-21-answer-03" value="2" onClick={this.handleClick}>Moderate - it wasn't pleasant at times</Answer>
                            <Answer className={this.isActive(3,21)} Id="question-21-answer-04" value="3" onClick={this.handleClick}>Severely - it bothered me a lot</Answer>
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