import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
    return (
       <nav>
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/game">숫자맞추기 게임</Link></li>
        </ul>
       </nav> 
    )
}
export default NavBar;