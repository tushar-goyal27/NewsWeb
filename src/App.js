import React, { useState } from 'react';
import './App.css';
import ArticleList from './components/ArticleList';
import InputKey from './components/InputKey';


function App() {
  const [artList, setArtList]= useState([])
  
  const getdata = (e, keyword, country) => {
    // call back function
    e.preventDefault();
    fetch("http://localhost:5000/news", {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify({'keyword': keyword, 'country': country})
    }).
    then(res => res.json()).
    then(data => {
      setArtList(data.articles)
    });
  }

  return (
    <div className="container-fluid">
      <div className="mt-3">
        <InputKey getnewsdata={ (e, keyword, country) => getdata(e, keyword, country) }/>
      </div>
      <div>
        {artList && <ArticleList listOfArcticles={artList} />}
      </div>
    </div>
  );
};

// const waterEffect = {
//   "background": "rgb(84, 164, 222)", 
//   "height": "10%"
// }
export default App;
