import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getArticle } from '../actions/articleAction.js';
import Loader from '../components/Loader.js';
import parse from 'html-react-parser';
import UhOh from './Uh-Oh.js';
import Prism from "prismjs";
import '../styles/prism.css';
import '../styles/tags.css'
import { listArticles } from '../actions/articlesAction.js';
import ArticleListItem from "../components/ArticleListItem"

import { Helmet } from 'react-helmet';


const HundredDaysScreen = () => {


    useEffect(() => {
        Prism.highlightAll()
    })

    const dispatch = useDispatch();
    let slug = "100-days-of-code-nextjs";


    const articleObj = useSelector(state => state.article);
    useEffect(() => {
        dispatch(getArticle(slug));
    }, [dispatch, slug]);

    const articleDispatch = useDispatch();
    const articlesList = useSelector(state => state.articleList);
    const { articles } = articlesList;

    useEffect(() => {
        articleDispatch(listArticles());
    }, [articleDispatch])


    const { loading, article, error } = articleObj;

    if (loading === false && !error) {
        var title = article.title;
        var body = parse(article.sanitizedHtml);
        var tags = article.tags;

        var divStyle = { backgroundImage: 'url(' + article.coverImage + ')' };
        var url = "https://cameronthompson.io/article/" + article.slug
    }

    return (
        <div className="article-container">
            {loading ? (
                <Loader />
            ) : error ? (
                <UhOh variant='danger'>{error}</UhOh>
            ) : loading === false && article !== null ? (
                <>
                    <Helmet>

                        {/* main */}
                        <title>Cameron Thompson - {title}</title>
                        <meta property="og:title" content={"Cameron Thompson - " + title} />
                        <meta property="og:type" content="website" />
                        <meta name="og:description"
                            content={article.description} />
                        <meta property="og:url" content={url} />
                        <meta property="og:image" content={article.coverImage} />

                        {/* Twitter */}
                        <meta property="twitter:card" content="summary_large_image" />
                        <meta property="twitter:url" content={url} />
                        <meta property="twitter:title" content={"Cameron Thompson - " + title} />
                        <meta property="twitter:description"
                            content={article.description} />
                        <meta property="twitter:image" content={article.coverImage} />
                    </Helmet>
                    <div className="article">
                        <div className="cover" style={divStyle}>
                        </div>
                        <h1>{title}</h1>
                        <div className="tags">
                            {tags.map(tag => {
                                var tagClass = `article-tag ${tag}`;
                                return <div key={tag} className={tagClass}>{tag}</div>
                            })}
                        </div>
                        <div className="article-body">{body}</div>
                    </div>
                    <div>
                        <div className="main-container">
                            <h3 style={{ textAlign: "center" }}>List of 100 Days of Code Articles</h3>
                            <h4>None Yet!</h4>
                            <div className="hundred-wrapper">
                                {articles.filter(a => a.seriesId === '60cae780f6b9d504c24bdc2e' && !a.draft).slice(1).map(article => {
                                    if (article.cover_image !== null) {
                                        return <ArticleListItem key={article._id} article={article} />
                                    } else {
                                        return <></>
                                    }
                                }
                                )}
                            </div>
                        </div>
                    </div>
                    <div>
                        <h3>Follow Me on Twitter</h3>
                        <p>To be informed when I post a new article!</p>
                        <p><a href="https://twitter.com/DeveloperCam" target="_blank" rel="noreferrer">@DeveloperCam</a></p>
                    </div>
                </>
            ) : (<></>)}
        </div>
    )
}

export default HundredDaysScreen
