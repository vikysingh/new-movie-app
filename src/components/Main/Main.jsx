import React, { useState, useEffect } from "react"
import styles from "./Mainstyle.module.css"

function Main() {

    const [ discoverState, setDiscoverState ] = useState()
    const [ trendState, setTrendState ] = useState()
    const [ topRatedState, setTopRatedState ] = useState()

    const api_key = process.env.REACT_APP_API_KEY

    useEffect(() => {
        getData()
        getTrending()
        getTopRated()
    }, [])

    async function getData() {
        let response = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${api_key}&page=1`)
        let data = await response.json()

        /*let by_pass;
        let res = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${api_key}&page=2`)
        let dat = await res.json()

        let res2 = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${api_key}&page=2`)
        let dat2 = await res2.json()
        by_pass = data.results.concat(dat.results, dat2.results)*/
        
        
        await setDiscoverState(data.results.map(each => <span key={each.popularity} className={styles.movie_card}>
            <img src={`https://image.tmdb.org/t/p/w500${each.poster_path}`} 
            key={each.poster_path} alt={each.original_title} />

            <span className={styles.vote_viewer} key={each.vote_average}> {each.vote_average} </span>

            <h3 key={each.original_title} > {each.original_title} </h3>
        </span>))
    }

    async function getTrending() {
        let res = await fetch(`https://api.themoviedb.org/3/trending/movie/week?api_key=${api_key}`)
        let data = await res.json()

        setTrendState(data.results.map(each => <span key={each.popularity} className={styles.movie_card}>
            <img src={`https://image.tmdb.org/t/p/w500${each.poster_path}`} 
            key={each.poster_path} alt={each.original_title} />

            <span className={styles.vote_viewer} key={each.vote_average}> {each.vote_average} </span>

            <h3 key={each.original_title} > {each.original_title} </h3>
        </span>))
    }

    async function getTopRated() {
        let res = await fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=${api_key}`)
        let data = await res.json()

        /*let res2 = await fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=${api_key}&page=2`)
        let data2 = await res2.json()

        let bp;
        bp = data.results.concat(data2.results)*/

        await setTopRatedState(data.results.map(each => <span key={each.popularity} className={styles.movie_card}>
            <img src={`https://image.tmdb.org/t/p/w500${each.poster_path}`} 
            key={each.poster_path} alt={each.original_title} />

            <span className={styles.vote_viewer} key={each.vote_average}> {each.vote_average} </span>

            <h3 key={each.original_title} > {each.original_title} </h3>
        </span>))
    }
    
    return(
        <div className={styles.main_parent} >
            <h2>Discover movie</h2>
            <hr />
            <span className={styles.card_container}>
                {
                    discoverState ? discoverState : <h2>Error</h2>
                }
            </span>
            <h2>Trending this week</h2>
            <hr />
            <span className={styles.card_container}>
                {
                    trendState ? trendState : <h2>Error</h2>
                }
            </span>
            <h2>Top rated</h2>
            <hr />
            <span className={styles.card_container}>
                {
                    topRatedState ? topRatedState : <h2>Error</h2>
                }
            </span>
        </div>
    )
}

export default React.memo(Main)