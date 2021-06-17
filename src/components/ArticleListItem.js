import React /* { useState, useEffect }  */ from 'react'
/* import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux' */


const ArticleListItem = ({ article }) => {
    const articleUrl = `/article/${article.slug}`
    return (
        <div>
            <div className="post">
                <div className="post-preview">
                    <h6 className="post-title"><a className="read-more"
                        href={articleUrl}>{article.title}</a></h6>
                </div>
            </div>
        </div>
    )
}

export default ArticleListItem
