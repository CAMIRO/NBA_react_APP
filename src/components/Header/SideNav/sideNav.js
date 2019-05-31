import React from 'react'
import SideNav from 'react-simple-sidenav'
import SideNavItems from './sideNavItems'


export default function sideNavigation(props) {
    console.log('props en el sidenav', props)
    return (
        <div>
            <SideNav
                showNav={props.showNav}
                onHideNav={props.onHideNav}
                navStyle={{
                    background:'#242424',
                    maxWidth:'220px',
                }}
            >
                <SideNavItems/>
            </SideNav>         
        </div>
    )
}
