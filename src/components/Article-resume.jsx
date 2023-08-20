import '../styles/Article-resume.css';

const ArticleResume = ({id, title, resume}) => {

    return <div className='resume'>
        <h2><a href={`/blog/${id}`}>{title}</a></h2>
        <p>{resume}</p>
    </div>
}

export default ArticleResume;