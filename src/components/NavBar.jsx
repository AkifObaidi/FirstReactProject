import React from 'react';
const NavBar = ({totalCounters})=>{
    return( 
        <nav className='navbar navbar-light bg-light'>
            <a className='navbar-brand m-2' href="#">NavBar
                <span className="btn btn-pill btn-secondary m-1" >{totalCounters}</span>
            </a>
        </nav>
    );
}
export default NavBar;