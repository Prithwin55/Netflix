import React, { useEffect,useState } from 'react'
import axios from '../../axios'
import { API_KEY, imageUrl } from '../../Constants/Constants'

import './Banner.css'
import { Link, useNavigate } from 'react-router-dom';
function Banner() {
    
    const [movie, setMovie] = useState();
    
    const navigator = useNavigate();
    const handle = () => navigator('/netflix');
    useEffect(() => {
        
        axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`).then((response) => {
            console.log(response.data.results[Math.floor(Math.random()*19)+1]);
            setMovie(response.data.results[Math.floor(Math.random()*19)+1]);
        });
    }, []);  
  return (
      <div style={{backgroundImage:`url(${movie?imageUrl+movie.backdrop_path:""})`}} className='banner'>
          <div className='content'>
              <h1 className='title'>{movie?movie.title:""}</h1>
              <div className='banner_buttons'>
                    
                  <button onClick={handle} className='button'>Play</button>
                  <button className='button'>My List</button>
              </div>
              <h1 className='description'>{movie?movie.overview.substring(0,400):""}</h1> 

          </div>
          <div className='bottomfade'></div>
      </div>
  )
}

export default Banner