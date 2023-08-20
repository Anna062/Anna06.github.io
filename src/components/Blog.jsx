import { Data } from "../data"
import ArticleResume from "./Article-resume";
import '../styles/Blog.css';
import image from '../assets/blog-2355684_1280.jpg'


const Blog = () => {

    const data = Data();

    return <div className="blog">
        <img src={image} alt="blog" id="blog-img" />
        <div className="articles">
        {data.map(article => (
          <ArticleResume key={article.id} id={article.id} title={article.title} resume={article.resume} />
))}
        </div>
    </div>
}

export default Blog;