import React, { useState, useEffect } from 'react';
import './App.css';
import ArticleList from './components/ArticleList';
import InputKey from './components/InputKey';

function App() {
  const [artList, setArtList]= useState([]);

  // funtion to display top headlines
  useEffect(async () => {
    fetch("http://127.0.0.1:5000/headlines", {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      method: 'GET',
    })
    .then(res => res.json())
    .then(data => {
      setArtList(data.articles)
    });
  }, []);

  // function to show search results
  const getdata = (e, keyword) => {
    e.preventDefault();
    fetch("http://127.0.0.1:5000/news?" + new URLSearchParams({'keyword': keyword}), {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      method: 'GET',
    })
    .then(res => res.json())
    .then(data => {
      setArtList(data.articles)
    });
  }

  return (
    <div className="container-fluid">
      <div className="mt-3">
        <InputKey getnewsdata={ (e, keyword) => getdata(e, keyword) }/>
      </div>
      <div>
        {artList && <ArticleList listOfArcticles={artList} />}
      </div>
    </div>
  );
};

export default App;
