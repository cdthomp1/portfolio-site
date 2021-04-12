import React, { useEffect } from 'react';
import {
    useParams
} from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { getArticle } from '../actions/articleAction.js';
import Loader from '../components/Loader.js';
import parse from 'html-react-parser';
import Navigation from '../components/Navigation';

const ArticleView = () => {
    const dispatch = useDispatch();
    let { slug } = useParams();

    const articleObj = useSelector(state => state.article);

    useEffect(() => {
        dispatch(getArticle(slug));
    }, [dispatch, slug]);


    const { loading, article } = articleObj;

    if (loading) {
        console.log("LOADING");
    } else if (loading === false) {
        console.log(article)
        var body = parse(article.sanitizedHtml);
        console.log(body)
    }

    return (
        <>
            <Navigation />
            { loading ? (
            <Loader />
            ) : loading === false ? (
                <div>
                    <h1>{article.title}</h1>
                    <div className="article-body">{body}</div>
                </div>
            ) : (<></>)}
        </>
    )
}

export default ArticleView