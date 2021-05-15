import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    return(
        <nav className="nav-container">
            <Link to="/"><div className="nav1">Home</div></Link>
            <Link to="/about"><div className="nav2">About</div></Link>
            <Link to="/project"><div className="nav3">Project</div></Link>
            <Link to="/contact"><div className="nav4">Contact</div></Link>
        </nav>
    )
}
 
export default Navbar;