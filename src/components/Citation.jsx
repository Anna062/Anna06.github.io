import citations from './citations';
import '../styles/Citation.css';
const Citation = () => {
    
    const number = Math.floor(Math.random() * citations.length);

    return <div className="citations">
    <blockquote>"{citations[number].citation}"</blockquote>
    <p id="author">- {citations[number].author} -</p>
</div>
}

export default Citation;