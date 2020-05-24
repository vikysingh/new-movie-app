import React, { useState, useEffect } from "react"
import styles from "./TopRatedstyle.module.css"

function TopRated() {

    useEffect(() => {
        getTopRated()
    }, [])

    const api_key = process.env.REACT_APP_API_KEY
    const [ topRated, setTopRated ] = useState([])

    async function getTopRated() {
        let res = await fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=${api_key}`)
        let data = await res.json()

        await setTopRated(data.results.map(each => 
        <span key={each.popularity} className={styles.top_rated_movie_card}>
            <img src={`https://image.tmdb.org/t/p/w500${each.backdrop_path}`} 
            key={each.poster_path} alt={each.original_title} />

            {/* <span className={styles.vote_viewer} key={each.vote_average}> {each.vote_average} </span> */}

            <h3 key={each.original_title} > {each.original_title} </h3>
        </span>))
    }

    return (
        <div className={styles.top_rated_card_container}>
            {
                topRated ? topRated : <h2>Loading</h2>
            }
        </div>
    )
}

export default TopRated