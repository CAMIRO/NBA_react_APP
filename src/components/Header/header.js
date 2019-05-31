import React from 'react';
import style from './header.css';
import { Link } from 'react-router-dom';
import FontAwesome from "react-fontawesome";


//COMPONENTS
import SideNav from '../Header/SideNav/sideNav';

export default function header(props) {

    const navBars = () => (
        
                <FontAwesome 
                    name="bars"
                    onClick={props.onOpenNav}
                    style={{
                        color:'#dfdfdf',
                        padding:'10px',
                        cursor:'pointer'
                    }}
                
                />
     
    )

    const logo = () =>(
        <Link to="/" className={style.logo}>
            <img alt="NBA logo" src="/images/nba_logo.png" />
        </Link>
    )
    //console.log('props en el header', props)
    return (
        <header className={style.header}>

            <SideNav {...props}/>

             <div className={style.headerOpt}>
                 {navBars()}
                 {logo()}
             </div>
        </header>
    )
}
