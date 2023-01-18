import React from "react";
import '../App'
import Question from "./question";

export default function Questions(props){
    return(
        <div>
        <div>
            <center>
                <b><h3>Attempt Questions here</h3></b>
            </center>
        </div>
        <div>
        {
        props.qna.map((qa)=>{
            return <div> <Question qna={qa}/> <br/> </div>
        })
        }
        </div>
        </div>
    )
}