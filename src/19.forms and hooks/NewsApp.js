import React, { useEffect, useRef, useState } from 'react'
import News from './News';
import './NewsApp.css';

function NewsApp() {

    const apiKey='5f03dd36f4aa453f993187a695cdeadc';
    const [newsList, setNewsList]=useState([])
    const [query, setQuery]=useState('tesla')
    const apiUrl=`https://newsapi.org/v2/everything?q=${query}&from=2024-10-09&sortBy=publishedAt&apiKey=5f03dd36f4aa453f993187a695cdeadc`;
    //
    const queryInputRef=useRef(null);

    useEffect(()=>{
        fetchData();
    },[query])
    async function fetchData() {
        try{
        const response=await fetch(apiUrl);
        const jsonData=await response.json();

        setNewsList(jsonData.articles)
        } catch(e){
            console.log(e, 'error occured');
            
        }
    }
    function handleSubmit(event){
        event.preventDefault();
        const queryValue=queryInputRef.current.value;
        setQuery(queryValue);
    }

  return (
    <div className='news-app'>
        <h1 style={{fontFamily:'monospace',fontSize:'3rem',textAlign:'left',marginBottom:'20px'}}>DAILY NEWS</h1>
        <form onSubmit={handleSubmit}>
            <input className='query-input' type="text" placeholder='Daily news' ref={queryInputRef} />
            <input className='btn-submit' onClick={handleSubmit} type="submit" value="Submit" />
        </form>
  <div style={{display:'grid', gridTemplateColumns:'repeat(3, 35%)',justifyContent: 'space-between', rowGap: '20px',columnGap: '10px'}}>
        {newsList.map(news=>{
            return <News key={news.url} news={news}/>
        })}

        {/* <select name="" id="">
           {arr.map((element) => {
                return <option>choose {element}</option>
            })}
        </select> */}
    </div>
    </div>
  )
}

export default NewsApp