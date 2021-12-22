import React from 'react'

function Article({articleObj}) {
    return (
        <div className="card shadowbox" style={{ "width": "300px"}}>
            <img className="card-img-top" src={articleObj.urlToImage} alt="Card"></img>
            <div className="card-body" >
                <h4 className="card-title" style={{ "fontFamily": "Merriweather, serif"}}> {articleObj.title} </h4>
                <p className="card-text" style={{ "fontFamily": "Source Sans Pro, sans-serif"}}> {articleObj.description} <br />
                    <span className="small text-muted">
                        Published on {articleObj.publishedAt} <br />
                        {articleObj.source.name}
                    </span>
                </p>
                <a href={articleObj.url} className="stretched-link" target="_blank" rel="noopener noreferrer"/>
            </div>
        </div>
    )
}

export default Article

