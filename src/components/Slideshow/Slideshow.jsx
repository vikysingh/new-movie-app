import React, { useState, useEffect } from "react"
import styles from "./Slideshowstyle.module.css"

function Slideshow() {

    useEffect(() => {
        getData()
    }, [])
    const api_key = process.env.REACT_APP_API_KEY

    const [ contentState, setContentState ] = useState([])

    async function getData() {
        let response = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${api_key}&page=1`)
        let data = await response.json()

        setContentState(data.results)
    } 
    return (
        <div className={styles.slideshow} >
            {
                contentState.length !== 0 ? <>
                <div className={styles.slideshow_left_col}>
                    <img src={`https://image.tmdb.org/t/p/w500${contentState[7].poster_path}`} 
                    alt={contentState.original_title} className={styles.slideshow_img} />
                </div>
                <div className={styles.slideshow_right_col}>
                    <div className={styles.slideshow_right_first_col}>
                        <img src={`https://image.tmdb.org/t/p/w500${contentState[1].backdrop_path}`} 
                        alt={contentState.original_title} className={styles.slideshow_img} />

                        <img src={`https://image.tmdb.org/t/p/w500${contentState[2].backdrop_path}`} 
                        alt={contentState.original_title} className={styles.slideshow_img} />

                        <img src={`https://image.tmdb.org/t/p/w500${contentState[5].backdrop_path}`} 
                        alt={contentState.original_title} className={styles.slideshow_img} />
                    </div>
                    
                    <div className={styles.slideshow_right_second_col}>
                        <img src={`https://image.tmdb.org/t/p/w500${contentState[3].backdrop_path}`} 
                        alt={contentState.original_title} className={styles.slideshow_img} />
                    </div>
                </div>
                </> : <h2>Error</h2>
            }
            
        </div>
    )
}

export default Slideshow

/*

 <img src={`https://image.tmdb.org/t/p/w500${contentState[1].backdrop_path}`} 
                    alt={contentState.original_title} className={styles.slideshow_img} />

                    <img src={`https://image.tmdb.org/t/p/w500${contentState[2].backdrop_path}`} 
                    alt={contentState.original_title} className={styles.slideshow_img} />

                    <img src={`https://image.tmdb.org/t/p/w500${contentState[3].backdrop_path}`} 
                    alt={contentState.original_title} className={styles.slideshow_img} />

                    <img src={`https://image.tmdb.org/t/p/w500${contentState[4].backdrop_path}`} 
                    alt={contentState.original_title} className={styles.slideshow_img} />



*/