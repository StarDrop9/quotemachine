import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './quoteapp.css';


// eslint-disable-next-line
const API = 'https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json'
var randomNum = 0


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

// randomNum = (Math.floor(Math.random() * data.length) || 0 );
 // console.log (randomNum)
// var x = data[randomNum]
 // console.log(x) 
 //if (typeof x === 'object'){console.log(x.quote)}
 //if (typeof x === 'object'){console.log(x.author)}
 
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
        //   } else if (e.target.getAttribute("id") === "tweet-quote" && x.quote === "") {
        //  // alert("Hello")
        // //  var quote = x.quote
        // //  var author = x.author
        //   
      }
      }   
      
 
 return (
        <div id="wrapper">
        <div id="quote-box">
          <div className="quote-text">
            <i className="quote"><span id="text"></span></i>
          </div>
          <div className="quote-author">
             <span id="author"></span>
          </div>
          <div className="buttons">
           {/* eslint-disable-next-line */}
            {/* <a  href="twitter.com/intent/tweet" className="button" id="tweet-quote" title="Tweet this quote!" target="_blank">
              <i className="fa fa-twitter"></i>
            </a> */}
            <a id="tweet-quote" className="button" onClick={myHandleClick} href={"https://twitter.com/intent/tweet?hashtags=Hello"} target="_blank" rel="noopener noreferrer"> <i className="fa fa-twitter"></i></a>
             {/* eslint-disable-next-line */}
            {/* <a className="button" id="tumblr-quote" title="Post this quote on tumblr!" target="_blank">
              <i className="fa fa-tumblr"></i>
            </a> */}
            <button id="new-quote" className="btn btn-primary" onClick = {myHandleClick} >New Quote</button>
            {/* <button className="button" id="new-quote"      >New quote</button> */}
          </div>
        </div>
        <div className="footer"> Quote Machine by <a href="https://github.com/StarDrop9/quotemachine"> KPSDev.org </a></div>
      </div> 
      );
    };
 








 export default Quoteapp;
