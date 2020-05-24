import React, { useState } from "react"
import styles from "./Navstyle.module.css"

import { LangFilter, CountryFilter, SortFilter, YearFilter, GenresFilter } from "./index"


function Navbar() {
    const [ queryState, setQueryState ] = useState("")
    return (
    <nav className={styles.nav} >
        <span className={styles.nav_brand}>
            <label>Powered by <b>TMdb API</b></label>
        </span>
        <ul className={styles.nav_filter}>
            <LangFilter />
            <CountryFilter />
            <SortFilter />
            <YearFilter />
            <GenresFilter />
        </ul>
        <input type="text" placeholder="Search for movie..." id="search_entry"
        value={queryState} onChange={e => setQueryState(e.target.id)} />
    </nav>
    )
}

export default Navbar