import React, { Component } from 'react';
import { Answer } from './Answer';

export default class Assessment_01 extends Component {
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
    
        window.scrollTo(0, startingY + diff * percent)
    
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
            localStorage.setItem('assessment', 'Beck\'s Depression Inventory');
            window.location.replace("/index");
        }
    }
    render() {
        return (
            <div className='container'>
                <h2>Beck's Depression Inventory</h2>
                <p>Select an appropriate option from each of the following:</p>
                <form className="depression-metrics" onSubmit={this.handleSubmit}>
                <ul>    
                    <li>
                        <div className="question" id="question-1">
                            <Answer className={this.isActive(0,1)} Id="question-01-answer-01" value="0" onClick={this.handleClick}>I do not feel sad.</Answer>
                            <Answer className={this.isActive(1,1)} Id="question-01-answer-02" value="1" onClick={this.handleClick}>I feel sad.</Answer>
                            <Answer className={this.isActive(2,1)} Id="question-01-answer-03" value="2" onClick={this.handleClick}>I am sad all the time and I can't snap out of it.</Answer>
                            <Answer className={this.isActive(3,1)} Id="question-01-answer-04" value="3" onClick={this.handleClick}>I am so sad and unhappy that I can't stand it.</Answer>
                        </div>
                    </li>
                    <li>
                        <div className="question" id="question-2">
                            <Answer className={this.isActive(0,2)} Id="question-02-answer-01" value="0" onClick={this.handleClick}>I am not particularly discouraged about the future.</Answer>
                            <Answer className={this.isActive(1,2)} Id="question-02-answer-02" value="1" onClick={this.handleClick}>I feel discouraged about the future.</Answer>
                            <Answer className={this.isActive(2,2)} Id="question-02-answer-03" value="2" onClick={this.handleClick}>I feel I have nothing to look forward to.</Answer>
                            <Answer className={this.isActive(3,2)} Id="question-02-answer-04" value="3" onClick={this.handleClick}>I feel the future is hopeless and that things cannot improve.</Answer>
                        </div>
                    </li>
                    <li>
                        <div className="question" id="question-3">
                            <Answer className={this.isActive(0,3)} Id="question-03-answer-01" value="0" onClick={this.handleClick}>I do not feel like a failure.</Answer>
                            <Answer className={this.isActive(1,3)} Id="question-03-answer-02" value="1" onClick={this.handleClick}>I feel like I have failed more than the average person.</Answer>
                            <Answer className={this.isActive(2,3)} Id="question-03-answer-03" value="2" onClick={this.handleClick}>As I look back on my life, all I can see is a lot of failures.</Answer>
                            <Answer className={this.isActive(3,3)} Id="question-03-answer-04" value="3" onClick={this.handleClick}>I feel I am a complete failure as a person.</Answer>
                        </div>
                    </li>
                    <li>
                        <div className="question" id="question-4">
                            <Answer className={this.isActive(0,4)} Id="question-04-answer-01" value="0" onClick={this.handleClick}>I get as much satisfaction out of things as I used to.</Answer>
                            <Answer className={this.isActive(1,4)} Id="question-04-answer-02" value="1" onClick={this.handleClick}>I don't enjoy things the way I used to.</Answer>
                            <Answer className={this.isActive(2,4)} Id="question-04-answer-03" value="2" onClick={this.handleClick}>I don't get real satisfaction out of anything anymore.</Answer>
                            <Answer className={this.isActive(3,4)} Id="question-04-answer-04" value="3" onClick={this.handleClick}>I am dissatisfied or bored with everything.</Answer>
                        </div>
                    </li>
                    <li>
                        <div className="question" id="question-5">
                            <Answer className={this.isActive(0,5)} Id="question-05-answer-01" value="0" onClick={this.handleClick}>I don't feel particularly guilty.</Answer>
                            <Answer className={this.isActive(1,5)} Id="question-05-answer-02" value="1" onClick={this.handleClick}>I feel guilty a good part of the time.</Answer>
                            <Answer className={this.isActive(2,5)} Id="question-05-answer-03" value="2" onClick={this.handleClick}>I feel quite guilty most of the time.</Answer>
                            <Answer className={this.isActive(3,5)} Id="question-05-answer-04" value="3" onClick={this.handleClick}>I feel guilty all of the time.</Answer>
                        </div>
                    </li>
                    <li>
                        <div className="question" id="question-6">
                            <Answer className={this.isActive(0,6)} Id="question-06-answer-01" value="0" onClick={this.handleClick}>I don't feel I am being punished.</Answer>
                            <Answer className={this.isActive(1,6)} Id="question-06-answer-02" value="1" onClick={this.handleClick}>I feel I may be punished.</Answer>
                            <Answer className={this.isActive(2,6)} Id="question-06-answer-03" value="2" onClick={this.handleClick}>I expect to be punished.</Answer>
                            <Answer className={this.isActive(3,6)} Id="question-06-answer-04" value="3" onClick={this.handleClick}>I feel I am being punished.</Answer>
                        </div>
                    </li>
                    <li>
                        <div className="question" id="question-7">
                            <Answer className={this.isActive(0,7)} Id="question-07-answer-01" value="0" onClick={this.handleClick}>I don't feel dissapointed in myself.</Answer>
                            <Answer className={this.isActive(1,7)} Id="question-07-answer-02" value="1" onClick={this.handleClick}>I am dissapointed in myself.</Answer>
                            <Answer className={this.isActive(2,7)} Id="question-07-answer-03" value="2" onClick={this.handleClick}>I am disgusted with myself.</Answer>
                            <Answer className={this.isActive(3,7)} Id="question-07-answer-04" value="3" onClick={this.handleClick}>I hate myself.</Answer>
                        </div>
                    </li>
                    <li>
                        <div className="question" id="question-8">
                            <Answer className={this.isActive(0,8)} Id="question-08-answer-01" value="0" onClick={this.handleClick}>I don't feel I am any worse than anybody else.</Answer>
                            <Answer className={this.isActive(1,8)} Id="question-08-answer-02" value="1" onClick={this.handleClick}>I am critical of myself for my weakness or mistakes.</Answer>
                            <Answer className={this.isActive(2,8)} Id="question-08-answer-03" value="2" onClick={this.handleClick}>I blame myself all the time for my faults.</Answer>
                            <Answer className={this.isActive(3,8)} Id="question-08-answer-04" value="3" onClick={this.handleClick}>I blame myself for everything bad that happens.</Answer>
                        </div>
                    </li>
                    <li>
                        <div className="question" id="question-9">
                            <Answer className={this.isActive(0,9)} Id="question-09-answer-01" value="0" onClick={this.handleClick}>I don't have any thoughts of killing myself.</Answer>
                            <Answer className={this.isActive(1,9)} Id="question-09-answer-02" value="1" onClick={this.handleClick}>I have thoughts of killing myself, but I would not carry them out.</Answer>
                            <Answer className={this.isActive(2,9)} Id="question-09-answer-03" value="2" onClick={this.handleClick}>I would like to kill myself.</Answer>
                            <Answer className={this.isActive(3,9)} Id="question-09-answer-04" value="3" onClick={this.handleClick}>I would kill myself if I had the chance.</Answer>
                        </div>
                    </li>
                    <li>
                        <div className="question" id="question-10">
                            <Answer className={this.isActive(0,10)} Id="question-10-answer-01" value="0" onClick={this.handleClick}>I don't cry any more than usual.</Answer>
                            <Answer className={this.isActive(1,10)} Id="question-10-answer-02" value="1" onClick={this.handleClick}>I cry more now than I used to.</Answer>
                            <Answer className={this.isActive(2,10)} Id="question-10-answer-03" value="2" onClick={this.handleClick}>I cry all the time now.</Answer>
                            <Answer className={this.isActive(3,10)} Id="question-10-answer-04" value="3" onClick={this.handleClick}>I used to be able to cry, but now I can't even though I want to.</Answer>
                        </div>
                    </li>
                    <li>
                        <div className="question" id="question-11">
                            <Answer className={this.isActive(0,11)} Id="question-11-answer-01" value="0" onClick={this.handleClick}>I am no more irritated about things than I ever was.</Answer>
                            <Answer className={this.isActive(1,11)} Id="question-11-answer-02" value="1" onClick={this.handleClick}>I am slightly more irritated now than usual.</Answer>
                            <Answer className={this.isActive(2,11)} Id="question-11-answer-03" value="2" onClick={this.handleClick}>I am quite annoyed or irritated a good deal of time.</Answer>
                            <Answer className={this.isActive(3,11)} Id="question-11-answer-04" value="3" onClick={this.handleClick}>I feel irritated all the time.</Answer>
                        </div>
                    </li>
                    <li>
                        <div className="question" id="question-12">
                            <Answer className={this.isActive(0,12)} Id="question-12-answer-01" value="0" onClick={this.handleClick}>I have not lost interest in other people.</Answer>
                            <Answer className={this.isActive(1,12)} Id="question-12-answer-02" value="1" onClick={this.handleClick}>I am less interested in other people than I used to be.</Answer>
                            <Answer className={this.isActive(2,12)} Id="question-12-answer-03" value="2" onClick={this.handleClick}>I have lost most of my interest in other people.</Answer>
                            <Answer className={this.isActive(3,12)} Id="question-12-answer-04" value="3" onClick={this.handleClick}>I have lost all of my interest in other people.</Answer>
                        </div>
                    </li>
                    <li>
                        <div className="question" id="question-13">
                            <Answer className={this.isActive(0,13)} Id="question-13-answer-01" value="0" onClick={this.handleClick}>I make decisions about as well as I ever could.</Answer>
                            <Answer className={this.isActive(1,13)} Id="question-13-answer-02" value="1" onClick={this.handleClick}>I put off making decisions more than I used to.</Answer>
                            <Answer className={this.isActive(2,13)} Id="question-13-answer-03" value="2" onClick={this.handleClick}>I have greater difficulty in making decisions more than I used to.</Answer>
                            <Answer className={this.isActive(3,13)} Id="question-13-answer-04" value="3" onClick={this.handleClick}>I can't make decisions at all anymore.</Answer>
                        </div>
                    </li>
                    <li>
                        <div className="question" id="question-14">
                            <Answer className={this.isActive(0,14)} Id="question-14-answer-01" value="0" onClick={this.handleClick}>I don't feel that I look any worse than what I used to.</Answer>
                            <Answer className={this.isActive(1,14)} Id="question-14-answer-02" value="1" onClick={this.handleClick}>I am worried that I am looking old or unattractive.</Answer>
                            <Answer className={this.isActive(2,14)} Id="question-14-answer-03" value="2" onClick={this.handleClick}>I feel there are permanent changes in my appearance that makes me look unattractive.</Answer>
                            <Answer className={this.isActive(3,14)} Id="question-14-answer-04" value="3" onClick={this.handleClick}>I believe that I look ugly.</Answer>
                        </div>
                    </li>
                    <li>
                        <div className="question" id="question-15">
                            <Answer className={this.isActive(0,15)} Id="question-15-answer-01" value="0" onClick={this.handleClick}>I can work about as well as before.</Answer>
                            <Answer className={this.isActive(1,15)} Id="question-15-answer-02" value="1" onClick={this.handleClick}>It takes an extra effort to get started at doing something.</Answer>
                            <Answer className={this.isActive(2,15)} Id="question-15-answer-03" value="2" onClick={this.handleClick}>I have to push myself very hard to do anything.</Answer>
                            <Answer className={this.isActive(3,15)} Id="question-15-answer-04" value="3" onClick={this.handleClick}>I can't do any work at all.</Answer>
                        </div>
                    </li>
                    <li>
                        <div className="question" id="question-16">
                            <Answer className={this.isActive(0,16)} Id="question-16-answer-01" value="0" onClick={this.handleClick}>I can sleep as well as usual.</Answer>
                            <Answer className={this.isActive(1,16)} Id="question-16-answer-02" value="1" onClick={this.handleClick}>I don't sleep as well as I used to.</Answer>
                            <Answer className={this.isActive(2,16)} Id="question-16-answer-03" value="2" onClick={this.handleClick}>I wake up 1-2 hours earlier than usual and find it hard to get back to sleep.</Answer>
                            <Answer className={this.isActive(3,16)} Id="question-16-answer-04" value="3" onClick={this.handleClick}>I wake up several hours earlier than I used to and cannot get back to sleep.</Answer>
                        </div>
                    </li>
                    <li>
                        <div className="question" id="question-17">
                            <Answer className={this.isActive(0,17)} Id="question-17-answer-01" value="0" onClick={this.handleClick}>I don't get more tired than usual.</Answer>
                            <Answer className={this.isActive(1,17)} Id="question-17-answer-02" value="1" onClick={this.handleClick}>I get tired more easily than I used to.</Answer>
                            <Answer className={this.isActive(2,17)} Id="question-17-answer-03" value="2" onClick={this.handleClick}>I get tired from doing almost anything.</Answer>
                            <Answer className={this.isActive(3,17)} Id="question-17-answer-04" value="3" onClick={this.handleClick}>I am too tired to do anything.</Answer>
                        </div>
                    </li>
                    <li>
                        <div className="question" id="question-18">
                            <Answer className={this.isActive(0,18)} Id="question-18-answer-01" value="0" onClick={this.handleClick}>My apetite is no worse than usual.</Answer>
                            <Answer className={this.isActive(1,18)} Id="question-18-answer-02" value="1" onClick={this.handleClick}>My apetite is not as good as it used to be.</Answer>
                            <Answer className={this.isActive(2,18)} Id="question-18-answer-03" value="2" onClick={this.handleClick}>My apetite is much worse now.</Answer>
                            <Answer className={this.isActive(3,18)} Id="question-18-answer-04" value="3" onClick={this.handleClick}>I have no apetite at all anymore.</Answer>
                        </div>
                    </li>
                    <li>
                        <div className="question" id="question-19">
                            <Answer className={this.isActive(0,19)} Id="question-19-answer-01" value="0" onClick={this.handleClick}>I haven't lost much weight, if any, lately.</Answer>
                            <Answer className={this.isActive(1,19)} Id="question-19-answer-02" value="1" onClick={this.handleClick}>I have lost more than five pounds.</Answer>
                            <Answer className={this.isActive(2,19)} Id="question-19-answer-03" value="2" onClick={this.handleClick}>I have lost more than ten pounds.</Answer>
                            <Answer className={this.isActive(3,19)} Id="question-19-answer-04" value="3" onClick={this.handleClick}>I have lost more than fifteen pounds.</Answer>
                        </div>
                    </li>
                    <li>
                        <div className="question" id="question-20">
                            <Answer className={this.isActive(0,20)} Id="question-20-answer-01" value="0" onClick={this.handleClick}>I am no more worried about my health than usual.</Answer>
                            <Answer className={this.isActive(1,20)} Id="question-20-answer-02" value="1" onClick={this.handleClick}>I am worried about physical problems like aches, pains, upset stomach, or constipation.</Answer>
                            <Answer className={this.isActive(2,20)} Id="question-20-answer-03" value="2" onClick={this.handleClick}>I am very worried about my physical problems and it's hard to think of much else.</Answer>
                            <Answer className={this.isActive(3,20)} Id="question-20-answer-04" value="3" onClick={this.handleClick}>I am so worried about my physical problems that I cannot think of anything else.</Answer>
                        </div>
                    </li>
                    <li>
                        <div className="question" id="question-21">
                            <Answer className={this.isActive(0,21)} Id="question-21-answer-01" value="0" onClick={this.handleClick}>I have not noticed any recent change in my interest in sex.</Answer>
                            <Answer className={this.isActive(1,21)} Id="question-21-answer-02" value="1" onClick={this.handleClick}>I am less interested in sex than I used to be.</Answer>
                            <Answer className={this.isActive(2,21)} Id="question-21-answer-03" value="2" onClick={this.handleClick}>I have almost no interest in sex.</Answer>
                            <Answer className={this.isActive(3,21)} Id="question-21-answer-04" value="3" onClick={this.handleClick}>I have lost interest in sex completely.</Answer>
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