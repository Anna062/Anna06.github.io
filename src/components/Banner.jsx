import React from "react";
import '../styles/Banner.css';
import facebook from "../assets/facebook.png";
import instagram from "../assets/instagram.png"
import logo from '../assets/logo.png'

const Banner = () => {
    return <nav>
        <div>
            <div>
                <img src={logo} alt="logo" id="logo" />
                <h1>Code Verse</h1>
            </div>
            <p> Libérez la Créativité à travers le Code : Bienvenue dans CodeVerse</p>
            <div className="social-medias">
                <a href="https://facebook.com"><img src={facebook} alt="facebook" /></a>
                <a href="https://instagram.com"><img src={instagram} alt="instagram" /></a>
            </div>
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