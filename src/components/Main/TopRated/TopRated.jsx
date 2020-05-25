import React, { useState, useEffect } from "react"
import styles from "./TopRatedstyle.module.css"

import { Slide } from 'react-slideshow-image';

const properties = {
    duration: 5000,
    transitionDuration: 300,
    infinite: true,
    indicators: false,
    arrows: true,
    pauseOnHover: true,
    onChange: (oldIndex, newIndex) => {
      console.log(`slide transition from ${oldIndex} to ${newIndex}`);
    }
}


function TopRated() {

    useEffect(() => {
        getTopRated()
    }, [])

    const api_key = process.env.REACT_APP_API_KEY
    const [ topRated, setTopRated ] = useState([])
    const img_url = "https://image.tmdb.org/t/p/w500"

    async function getTopRated() {
        let res = await fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=${api_key}`)
        let data = await res.json()

        // for(let i=0; i<=10; i++) await setTopRated(data.results[i])
        await setTopRated(data.results)
    }

    return (
        <>
        {
            topRated.length === 0 ? <h2>Error</h2> :
            <div className={styles.slide_container}>
                <Slide {...properties}>
                    {
                        topRated.map(each => 
                        <div key={each.id} className={styles.each_slide}>
                            <div key={each.poster_path} style={{'backgroundImage': `url(${img_url}${each.backdrop_path})`}}>
                                <h2 key={each.original_title}> {each.original_title} </h2>
                            </div>
                        </div>)
                    }
                </Slide>
            </div>
        }
    </>
    )
}

export default TopRated