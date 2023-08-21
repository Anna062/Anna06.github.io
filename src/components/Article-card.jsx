import { useParams } from 'react-router-dom';
import '../styles/Article-card.css';
import axios from 'axios';
import { useState, useEffect } from 'react';
import image from '../assets/ligth.png'

const ArticleCard = () => {

    const apiUrl = "http://localhost:8080/articles";
    const {id} = useParams()
    const [article, setArticle] = useState({})

    useEffect(() => {
        axios.get(`${apiUrl}/${id}`)
        .then(res => {
            setArticle(res.data)
        })
        .catch(err => {
            console.log(err)
        })
    }, [id])

    return <div className='article-card'>
        <img src={image} alt='light' id='light' />
        <div>
        <h2 id='title'>"{article.title}"</h2>
        <div id="text">
            <p dangerouslySetInnerHTML={{ __html: article.content }} />
            <p id='author'><em>Ecrit par {article.author} le {article.date}</em></p>
        </div>
        </div>
    </div>
}

export default ArticleCard;