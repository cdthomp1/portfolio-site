import React from 'react'

const ArticleCard = ({ article }) => {
    const articleUrl = `/article/${article.slug}`
    return (
        <div>
            <div className="wrapper">
                <div className="post">
                    <img className="thumbnail" src={article.coverImage} alt="Article Cover" />
                    <div className="post-preview">
                        <h6 className="post-title">{article.title}</h6>
                        <p className="post-intro">{article.description}</p>
                        <div className="link-container">
                            <a className="read-more"
                                href={articleUrl}>Read Article</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ArticleCard