import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './quoteapp.scss';

const API = 'https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json'
var randomNum = 1

function Quoteapp() {
  const [data, setData] = useState({ quotes: [] });
  const [x, setX] = useState({x :{} }) ;  
  
  useEffect(() => {
        const fetchData = async () => {
          const result = await axios(
            API,
          );
            setData(result.data.quotes);
        };
            fetchData();
      }, []);

 const myHandleClick = (e) => handleClick(e)

 function handleClick(e){
        if(e.target.getAttribute("id") === "new-quote"){
          randomNum = (Math.floor(Math.random() * data.length) || 0 )
          var x = data[randomNum]
          setX(data[randomNum])
          let text = document.getElementById("text");
          let author = document.getElementById("author");
          text.innerText = x.quote;
          author.innerText = "_"+ x.author;
          }
       }     
       // if (typeof y === 'object'){var a = y.author} 
return (
        <div id="wrapper">
        <div id="quote-box">
          <div className="quote-text">
            <i className="quote"><span><i id="text" className="fa fa-quote-left" aria-hidden="true">Ask and it will be given to you; search, and you will find; knock and the door will be opened for you.</i></span></i>
          </div>
          <div className="quote-author">
             <span id="author">Jesus</span>
          </div>
          <div className="buttons">
             <a id="tweet-quote" className="tweetbutton" onClick={myHandleClick} href={"https://twitter.com/intent/tweet?hashtags="+x.author+"&text="+x.quote} target="_blank" rel="noopener noreferrer"> <i className="fa fa-twitter"></i></a>
            <button id="new-quote" className="btnx" onClick = {myHandleClick} >New Quote</button>
          </div>
        </div>
        <div className="footer"> Quote Machine by <a href="https://github.com/StarDrop9/quotemachine"> KPSDev.org </a></div>
      </div> 
      );
    };
 
 export default Quoteapp;
