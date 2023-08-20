import React from "react";
import image from '../assets/technology-g4d4db398f_1280.jpg';
import '../styles/Header.css';
import BlogList from "./Blog-list";

const Header = () => {
    return <header>
        <div className="header">
            <h1>Découvrez Code Verse</h1>
            <img src={image} alt="ordinateur" />
        </div>
        <BlogList />
    </header>
}

export default Header;