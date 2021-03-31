import React /* { useState, useEffect }  */ from 'react'
/* import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux' */


const ArticleCard = ({ article }) => {
    return (
        <div>
            <div className="wrapper">
                <div className="dots-wrapper card-header">
                    <div id="dot-1" className="browser-dot"></div>
                    <div id="dot-2" className="browser-dot"></div>
                    <div id="dot-3" className="browser-dot"></div>
                </div>
                <div className="post">
                    <img className="thumbnail" src={article.cover_image} alt="Cover" />
                    <div className="post-preview">
                        <h6 className="post-title">{article.title}</h6>
                        <p className="post-intro">{article.description}</p>
                        <div className="link-container">
                            <a className="read-more" rel="noreferrer" target="_blank"
                                href={article.url}>Read Article</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ArticleCard
