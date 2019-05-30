import React from 'react';
import style from './header.css';
import { Link } from 'react-router-dom';


import FontAwesome from "react-fontawesome";

export default function header() {
    const navBars = () => (
        <div className={style.bars}>
                <FontAwesome name="bars"></FontAwesome> 
        </div>
    )

    const logo = () =>(
        <Link to="/" className={style.logo}>
            <img alt="NBA logo" src="/images/nba_logo.png" />
        </Link>
    )
    
    return (
        <header className={style.header}>
             <div className={style.headerOpt}>
                 {navBars()}
                 {logo()}
             </div>
        </header>
    )
}
