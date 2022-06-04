import React from "react";
import { StyledLink, NavContainer } from "./styles";
function Navbar(){
    return (
        <NavContainer>
            <StyledLink href="#home">Home</StyledLink>
            <StyledLink href="#hobbies">Favourites</StyledLink>
            <StyledLink href="#about">About</StyledLink>
        </NavContainer>
    )
}
export default Navbar;