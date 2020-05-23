import React, { useState } from "react"
import styles from "./Navstyle.module.css"

/* 
language
region/country
sort by
release year
genres

*/

function Navbar() {
    const [ queryState, setQueryState ] = useState("")
    return (
    <nav className={styles.nav} >
        <span className={styles.nav_brand}>
            <label>Powered by <b>TMdb API</b></label>
        </span>
        <ul className={styles.nav_filter}>
            <li>Language</li>
            <li>Country</li>
            <li>Sort By</li>
            <li>Release year</li>
            <li>Genres</li>
        </ul>
        <input type="text" placeholder="Search for movie..." id="search_entry"
        value={queryState} onChange={e => setQueryState(e.target.id)} />
    </nav>
    )
}

export default Navbar