import React , {useState }from "react";
import '../App'

export default function Footer(){

    const [showAns, setShowAns] = useState(0);

    const showCorrectCount = () => {
        let ansCount = document.getElementById("anscount").value;
        setShowAns(ansCount);
        if(ansCount>=5){
            alert("You scored "+ansCount+". Great Work!")
        }else{
            alert("You scored "+ansCount+". You can refer documentation again")
        }
    }
    return(
        <div>
        <div>
            <center>
                <h2>How many did you get it right?</h2>
                <input id='anscount' type="number" max="7" min="0"></input>
                <button onClick={showCorrectCount}>Submit!</button>
            </center>
        </div>
        <div className="nameFooter">
        <center>
            <h3>
                Tarun Teja |
                Full Stack Developer |
                Cumulations Technologies
            </h3>
        </center>
        </div>
        </div>
    )
}