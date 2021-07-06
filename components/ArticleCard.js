import React from 'react'

const ArticleCard = ({ article }) => {
    const articleUrl = `/articles/${article.slug}`
    return (

        <div className="article-card">
            <img className="thumbnail" src={article.frontmatter.cover_image} alt="Article Cover" />
            <div className="post-preview">
                <h6 className="post-title">{article.frontmatter.title}</h6>
                <p className="post-intro">{article.frontmatter.date}</p>
                <p className="post-intro">{article.frontmatter.excerpt}</p>
                <div className="link-container">
                    <a className="read-more"
                        href={articleUrl}>Read Article</a>
                </div>
            </div>
        </div>

    )
}

export default ArticleCard