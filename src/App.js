
import './App.css';
import Header from './myComponents/header';
import Footer from './myComponents/footer';
import Questions from './myComponents/Questions';
import React , { useState } from 'react'

function App() {

  let aTagStyle = {
    textDecoration : "none"
  }

  let h2Style = {
    "color" : "orange",

  }


  let quesAndAns = [
    {
      sno : 1,
      que : "What is JSX?",
      ans : "It is a syntax extension to JavaScript which enables writing Javascript within HTML."
    },
    {
      sno : 2,
      que : "What is the abbreviation of JSX?",
      ans : "Javascript Synatx Extension."
    },
    {
      sno : 3,
      que : `const name = 'Josh Perez';
             const element = <h1>Hello, {name}</h1>;
             Is this a way to write JSX syntax?`,
      ans : "Yes"
    },
    {
      sno : 4,
      que : "How do you insert JS code in HTML?",
      ans : "Using curly braces."
    },
    {
      sno : 5,
      que : "What is the type of attack that JSX helps to prevent?",
      ans : "Injection Attacks like  XSS(cross-site-scripting) attacks."
    },
    {
      sno : 6,
      que : "How does babel compiles JSX?",
      ans : "Babel compiles JSX down to React.createElement() calls"
    },
    {
      sno : 7,
      que : `const element = (
        <h1 className="greeting">
          Hello, world!
        </h1>
      );
      
      Convert this to React.createElement() call`,
      ans : `const element = React.createElement(
        'h1',
        {className: 'greeting'},
        'Hello, world!'
      );`
    }
  ]

  return(
    <>
      <Header title="TODO" name="Todo list."/>
      <center>
      <hr />
      <h2>Resources to learn JSX</h2>
      
      <a href="https://reactjs.org/docs/introducing-jsx.html" style={aTagStyle} target="_blank">Refer the official documentation here(open in new tab)</a>
       <br />
      
      <a href="https://www.youtube.com/watch?v=9GtB5G2xGTY&ab_channel=ZacGordon" style={aTagStyle} target="_blank">Refer the Youtube video here(open in new tab)</a>
      
      
      <hr />
      </center>
      <hr/>
      <center>
      <h3>Comeback and finish this exercise</h3>
      <h2 style={h2Style}>Learn JSX here</h2>
      </center>

      <Questions qna={quesAndAns}/>
      <Footer />
    </>
  )
}

export default App;
