import React, { useState, useEffect } from "react"
import styles from "./Slideshowstyle.module.css"

function Slideshow() {

    useEffect(() => {
        getData()
    }, [])
    const api_key = process.env.REACT_APP_API_KEY

    const [ contentState, setContentState ] = useState()

    async function getData() {
        let response = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${api_key}`)
        let data = await response.json()

        setContentState(data.results[5])
    } 
    return (
        <div className={styles.slideshow} >
            {
                contentState ? <>
                <img src={`https://image.tmdb.org/t/p/w500${contentState.backdrop_path}`} 
                alt={contentState.original_title} />
                <h1> {contentState.original_title} </h1>
                </> : <h2>Error</h2>
            }
        </div>
    )
}

export default Slideshow