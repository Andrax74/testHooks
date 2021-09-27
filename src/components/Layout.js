import NavBar from './NavBar'
import React from 'react'

const Layout = ({children}) => {
    return (
        <div className="content">
            <NavBar/>
            { children }
        </div>
    )
}

export default Layout
