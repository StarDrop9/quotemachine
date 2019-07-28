import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './quoteapp.css';

const API = 'https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json'
var randomNum = 1

function Quoteapp() {
  const [data, setData] = useState({ quotes: [] });
     
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
          console.log(x) 
           // if (typeof x === 'object'){console.log(x.quote)}
           // if (typeof x === 'object'){console.log(x.author)} 
            let text = document.getElementById("text");
            let author = document.getElementById("author");
            text.innerText = x.quote;
            author.innerText = "_"+ x.author;
             }
       }     
 
 return (
        <div id="wrapper">
        <div id="quote-box">
          <div className="quote-text">
            <i className="quote"><span><i id="text" className="fa fa-quote-left" aria-hidden="true">The knowledge of the secrets of the kingdom of heaven has been given to you, but not to them. Whoever has will be given more, and he will have an abundance. Whoever does not have, even what he has will be taken from him. This is why I speak to them in parables: 
Though seeing, they do not see; though hearing, they do not hear or understand.</i></span></i>
          </div>
          <div className="quote-author">
             <span id="author">Jesus</span>
          </div>
          <div className="buttons">
             <a id="tweet-quote" className="tweetbutton" onClick={myHandleClick} href={"https://twitter.com/intent/tweet?hashtags="+{}} target="_blank" rel="noopener noreferrer"> <i className="fa fa-twitter"></i></a>
            <button id="new-quote" className="btn btn-primary" onClick = {myHandleClick} >New Quote</button>
          </div>
        </div>
        <div className="footer"> Quote Machine by <a href="https://github.com/StarDrop9/quotemachine"> KPSDev.org </a></div>
      </div> 
      );
    };
 
 export default Quoteapp;
