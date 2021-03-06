import React, { useEffect, useState } from 'react';

import axios from '../../Axios/Axios';
import requests from '../../Axios/Requests';

import './Banner.styles.css';

const Banner = () => {

    const [movie, setMovie] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(requests.fetchNetflixOriginals);
            setMovie(
                request.data.results[
                    Math.floor(Math.random() * request.data.results.length -1 )
                ]
            );
            return request;
        }

        fetchData();
    },[]);

    const truncate = (string, n) => {
        return string?.length > n ? string.substr(0,n-1) + '...' : string;
    }

    console.log(movie);

    return (
        <header 
            className='banner'
            style={{
                backgroundSize: 'cover',
                backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
                backgroundPosition: 'center center',
            }}
        >
            <div className='banner_contents'>
                <h1 className="banner_title">{movie?.title || movie?.name || movie?.original_name}</h1>
                <div className="banner_buttons">
                    <button className="banner_button">Play</button>
                    <button className="banner_button">More Info</button>
                </div>
                <h3 className="banner_description">
                    { truncate(movie ? movie.overview : `Movie description`,150) }
                </h3>
            </div>
            <div className="banner--fadeBottom" />
        </header>
    )
}

export default Banner;
