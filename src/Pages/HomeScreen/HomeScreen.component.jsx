import React from 'react';

import NavBar from '../../components/NavBar/NavBar.component';
import Banner from '../../components/Banner/Banner.component';
import requests from '../../Axios/Requests';
import Row from '../../components/Row/Row.component';
import Footer from '../../components/Footer/Footer.component';

import './HomeScreen.styles.css';

const HomeScreen = () => {
    return (
        <div className='homeScreen'>
            {
                /*
                    NavBar
                    Banner
                    Rows of movies/shows
                */
            }
            <NavBar/>
            <Banner/>
            <Row
                title='NETFLIX ORIGINALS'
                fetchUrl={requests.fetchNetflixOriginals}
                isLargeRow
            />
            <Row title="Trending Now" fetchUrl={requests.fetchTrending}/>
            <Row title="Top Rated" fetchUrl={requests.fetchTopRated}/>
            <Row title="Action Movies" fetchUrl={requests.fetchActionMovies}/>
            <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies}/>
            <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies}/>
            <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies}/>
            <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries}/>
            <Footer/>
        </div>
    )
}

export default HomeScreen;
