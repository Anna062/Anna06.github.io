import React from "react";
import '../styles/Blog-list.css';
import ArticleResume from "./Article-resume";
import { Data } from "../data";


const BlogList = () => {
      
  const data = Data();


  return (
    <div className="blog-resume">
      <h2>Articles récents</h2>
      <div className="articles">
        {data.slice(-3).map(article => (
          <ArticleResume key={article.id} id={article.id} title={article.title} resume={article.resume} />
))}

      </div>
      <p><a href="/blog">Visiter le blog</a></p>
    </div>
  );
};



export default BlogList;