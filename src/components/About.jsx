import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/About.css';

const About = () => {
  return (
    <div className='about'>
        <h1>À propos de CodeVerse</h1>
      <div className='about-text'>
      <p>Bienvenue sur CodeVerse, le blog dédié au développement de code !</p>
      <p>Ici, nous explorons les langages de programmation, les frameworks, <br/> les bibliothèques et les meilleures pratiques pour créer des applications modernes et performantes.</p>
      <p>Que vous soyez un débutant cherchant à apprendre la programmation ou un développeur expérimenté en quête de nouvelles découvertes, <br/> vous êtes au bon endroit.</p>
      <p>Nous couvrons une variété de sujets, allant du développement web avec React, Angular et Vue.js, <br/> à l'intelligence artificielle et à l'apprentissage automatique avec Python, en passant par les applications mobiles avec React Native et bien plus encore.</p>
      <p>Notre équipe de rédacteurs passionnés est déterminée à fournir des articles informatifs <br/> et instructifs pour vous aider à progresser dans votre parcours de développement.</p>
      <p>Nous croyons au partage des connaissances et à la construction d'une communauté solide de développeurs.<br/> N'hésitez pas à partager vos commentaires, suggestions ou questions dans les commentaires des articles.</p>
      <p>Connectez-vous également avec nous sur les réseaux sociaux pour <br/> rester à jour avec les dernières publications et pour participer à des discussions animées avec la communauté.</p>
      <p>Merci de nous rejoindre dans cette aventure passionnante dans l'univers du code.<br/> Que votre voyage de développement soit fructueux et amusant !</p>
      </div>
      <Link to="/">Retour à l'accueil</Link>
    </div>
  );
};

export default About;
