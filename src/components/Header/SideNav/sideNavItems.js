import React from 'react';
import { Link } from 'react-router-dom';

/// styles
import style from './sideNav.css'
import FontAwesome from 'react-fontawesome';

const sideNavItems = () => {
        return (
            <div className={style.option}>
                  <Link to="/">
                    <FontAwesome name="home"/>
                  </Link>
            </div>
        )
}
export default sideNavItems