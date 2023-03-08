import React from 'react'
import { Link, NavLink } from 'react-router-dom';
import './Header.css';


const Header = () => {
    return (
        <>
            <header id='Header'>
                <div className='container'>
                    <div className='Header row d-flex justify-c-sb'>
                        <div>
                            <h2> <NavLink style={{ textDecoration: "none", color: "white" }} to={"/dashboard"}> Dashboard</NavLink> </h2>
                        </div>

                        <div>
                            <button> <Link style={{ Color: "white" }} to={"/setting"}>Settings</Link> </button>
                            <button>Log Out</button>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header;
