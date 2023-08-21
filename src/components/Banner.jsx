import React from "react";
import '../styles/Banner.css';
import logo from '../assets/logo.png'

const Banner = () => {
    return <nav>
        <div>
            <div>
                <img src={logo} alt="logo" id="logo" />
                <h1>Code Verse</h1>
            </div>
            <p> Libérez la Créativité à travers le Code : Bienvenue dans CodeVerse</p>
        </div>
        <hr/>
        <ul>
            <li><a href="/">Accueil</a></li>
            <li><a href='/about'>A propos</a></li>
            <li><a href="/blog">Blog</a></li>
        </ul>
    </nav>
}

export default Banner;
