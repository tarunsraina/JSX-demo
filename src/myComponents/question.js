
import '../App'
import React , { useState } from 'react'

export default function Question(props){

    let answerStyle = {
        color : "green"
    }

    let queStyle = {
        color : "orange"
    }

    const [showAns, setShowAns] = useState(false);

    const showAnswer = () => {
        setShowAns(!showAns);
    }

    return(
        <div>
            <hr />
            <h3 style={queStyle}>Question : {props.qna.que}</h3>
            <h3 style={answerStyle}>{showAns ? "Answer : "+props.qna.ans:''}</h3>
            <button onClick={showAnswer}>{showAns?"Hide":"Show Answer"}</button>
        </div>
    )
}