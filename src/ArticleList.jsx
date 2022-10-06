import React ,{useContext} from "react";
import Article from './Article'
import './Article.css'
import contentList from "./contentList";
import { ArticleContext } from "./context/article.context";

const { faker } = require('@faker-js/faker');
function articleComponent(article,i){
    return(
        <Article
       
        icon={article.icon}
        description={article.description}
        rating={article.rating}
        username={article.username}
        articleName={article.articleName}
        authorName={article.authorName}
    />
    )
}
const ArticleList=()=>{
    const {articles}=useContext(ArticleContext);
    return(
        <div className="container">
            <h1 className="heading">Featured Articles</h1>
            
            
            <div className="box-container">
                {articles.map(articleComponent)
            }
           {console.log("All articles")}
           {console.log(articles)}
            
            </div>
        </div>
    )

}
export default ArticleList