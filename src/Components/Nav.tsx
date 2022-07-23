import React from "react";
import './Nav.css'

type NavProps = {
    userLoc: string
}

const Nav: React.FC<NavProps> = ({userLoc}) => {


    return (
        <nav className='navbar'>
            <a href=''>email icon</a>
            <a href=''>github icon</a>
            <a href=''>linkedIn icon</a>
            <a href=''>Home</a>
            <a href=''>Projects</a>
            <a href=''>Resume</a>
            <a href=''>Contact</a>
        </nav>
    )
}

export default Nav
//install react router 