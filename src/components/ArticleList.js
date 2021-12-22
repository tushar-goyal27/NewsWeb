import React from 'react'
import Article from './Article'

function ArticleList(props) {
    const articles = props.listOfArcticles.map(article => <Article key={ article.url } articleObj={article}/>
    )
    
    return(
        <div className="card-columns mt-5">
            {articles}
        </div>
    )
}

export default ArticleList;
