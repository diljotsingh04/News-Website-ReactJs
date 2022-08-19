import React, { useState , useEffect} from 'react'
import Allcards from "./Tempelate_card";

const Card = () => {

    const[art, setArt] = useState([]);
    const[cat, setCat] = useState("general");
    const[loading, setLoading] = useState(false);


    const fetchNews = async () =>{
        try {
            setLoading(true);
            setArt();
            const url = `https://newsapi.org/v2/top-headlines?country=in&category=${cat}&apiKey={your_api_key}&page=1`;
            const response = await fetch(url);
            const data = await response.json();
            setLoading(false);
            setArt(data.articles);
        } catch (error) {
            console.log(error);
        }
    };

    const getItem = () => {
        var e = document.getElementById("filItem");
        var text = e.options[e.selectedIndex].text;

        text = text.toLowerCase();

        setCat(text);
    }

    useEffect(()=>{
        fetchNews();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[cat]);

    let heading = cat;
    heading = heading[0].toUpperCase() + heading.slice(1);
    
    return (
        <>
            {/* top heading of home component */}
            <h1 className='topHeading'>Top News Headlines - {heading}</h1>

            {/* filter items bar */}
            <div className="filItem">
                <label htmlFor="cars">Select Category: &nbsp;</label>
                <select name="cars" id='filItem' onChange={()=> getItem()}>
                {/* business entertainment general health science sports technology */}
                    <option>General</option>
                    <option>Business</option>
                    <option>Entertainment</option>
                    <option>Health</option>
                    <option>Science</option>
                    <option>Sports</option>
                    <option>Technology</option>
                </select>
            </div>

            <div className="spinner" style={{display: loading ? "flex" : "none", "justifyContent": "center"}}>
                <img src="/spinner/spinner.gif" alt='loading...'/>
            </div>


            {/* all the articles dynamically */}
            <Allcards newsArticles={art}/>
        </>
    )
} 

export default Card;
