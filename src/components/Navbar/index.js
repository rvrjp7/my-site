import React from "react";
import { Link } from "react-router-dom";
import {  NavContainer } from "./styles";
function Navbar(){
    return (
        <NavContainer>
            <Link to="home">Home</Link>
            {/* <Link to="favourites">Favourites</Link> */}
            <Link to="engagement">Engagement</Link>
            {/* <Link to="about">About</Link> */}
        </NavContainer>
    )
}
export default Navbar;