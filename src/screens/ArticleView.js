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

const ArticleView = () => {
    Prism.highlightAll();

    const dispatch = useDispatch();
    let { slug } = useParams();

    const articleObj = useSelector(state => state.article);
    
    useEffect(() => {
        dispatch(getArticle(slug));
    }, [dispatch, slug]);


    const { loading, article, error } = articleObj;

    if (loading) {
        
    } else if (loading === false && !error) {
        //var test = '<pre class="language-javascript"><code>var test = 2</code></pre>';
        var title = article.title
        var body = parse(article.sanitizedHtml);
        
    }

    return (
        <>
            
            { loading ? (
            <Loader />
            ): error ? (
                <UhOh variant='danger'>{error}</UhOh>
              )  : loading === false && article !== null ? (
                <div>
                    <h1>{title}</h1>
                    <div className="article-body">{body}</div>
                </div>
            ) : (<></>)}
        </>
    )
}

export default ArticleView