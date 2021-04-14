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

const ArticleView = () => {

    useEffect(() => {
        Prism.highlightAll()
    })

    const dispatch = useDispatch();
    let { slug } = useParams();

    const articleObj = useSelector(state => state.article);
    useEffect(() => {
        dispatch(getArticle(slug));
    }, [dispatch, slug]);


    const { loading, article, error } = articleObj;

    if (loading === false && !error) {
        var title = article.title;
        var body = parse(article.sanitizedHtml);
        var tags = article.tags;

        var divStyle = {backgroundImage: 'url(' + article.coverImage + ')'}; 
    }

    return (
        <>
            { loading ? (
                <Loader />
            ) : error ? (
                <UhOh variant='danger'>{error}</UhOh>
            ) : loading === false && article !== null ? (
                <div className="article">
                    <div className="cover" style={divStyle}>
                    </div>
                        <h1>{title}</h1>
                    <div className="tags">
                        {tags.map(tag => {
                            var tagClass = `tag ${tag}`;
                            return <div className={tagClass}>{tag}</div>
                        })}
                    </div>
                    <div className="article-body">{body}</div>
                </div>
            ) : (<></>)}
        </>
    )
}

export default ArticleView