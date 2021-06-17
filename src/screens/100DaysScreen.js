import React, { useEffect } from 'react';
import {
    useParams
} from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { getArticle } from '../actions/articleAction.js';
import Loader from '../components/Loader.js';
import parse from 'html-react-parser';
import UhOh from './Uh-Oh.js';
import Prism from "prismjs";
import '../styles/prism.css';
import '../styles/tags.css'
import { Helmet } from 'react-helmet';


const HundredDaysScreen = () => {


    useEffect(() => {
        Prism.highlightAll()
    })

    const dispatch = useDispatch();
    let  slug  = "100-days-of-code-nextjs";

    console.log(slug)


    const articleObj = useSelector(state => state.article);
    useEffect(() => {
        dispatch(getArticle(slug));
    }, [dispatch, slug]);


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
