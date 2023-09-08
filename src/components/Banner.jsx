import React from "react";
import '../styles/Banner.css';
import logo from '../assets/logo.png'
import { Link } from "react-router-dom";

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
            <li><Link to="/">Accueil</Link></li>
            <li><Link to='/about'>A propos</Link></li>
            <li><Link to="/blog">Blog</Link></li>
        </ul>
    </nav>
}

export default Banner;
